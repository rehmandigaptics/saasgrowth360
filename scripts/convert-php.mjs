import fs from "fs";
import path from "path";

const root = path.resolve("..", "SaaSGrowth360-Premium-PHP");
const outData = path.resolve("src", "data");
const outApp = path.resolve("app");

const linkMap = [
  [/href="service-acquisition\.php"/g, 'href="/services/acquisition"'],
  [/href="service-cro\.php"/g, 'href="/services/cro"'],
  [/href="service-onboarding\.php"/g, 'href="/services/onboarding"'],
  [/href="service-retention\.php"/g, 'href="/services/retention"'],
  [/href="service-revops\.php"/g, 'href="/services/revops"'],
  [/href="service-ai-automation\.php"/g, 'href="/services/ai-automation"'],
  [/href="service-lead-generation\.php"/g, 'href="/services/lead-generation"'],
  [/href="service-n8n\.php"/g, 'href="/services/n8n"'],
  [/href="service-gohighlevel\.php"/g, 'href="/services/gohighlevel"'],
  [/href="index\.php"/g, 'href="/"'],
  [/href="about\.php"/g, 'href="/about"'],
  [/href="services\.php"/g, 'href="/services"'],
  [/href="growth-system\.php"/g, 'href="/growth-system"'],
  [/href="outcomes\.php"/g, 'href="/outcomes"'],
  [/href="why-us\.php"/g, 'href="/why-us"'],
  [/href="contact\.php"/g, 'href="/contact"'],
  [/href="contact\.php\?service=/g, 'href="/contact?service='],
  [/src="assets\//g, 'src="/assets/'],
  [/href="assets\//g, 'href="/assets/'],
];

function htmlToJsx(html) {
  let out = html;
  for (const [re, rep] of linkMap) out = out.replace(re, rep);

  out = out
    .replace(/\bclass=/g, "className=")
    .replace(/\bfor=/g, "htmlFor=")
    .replace(/\bcharset=/g, "charSet=")
    .replace(/\bcrossorigin\b/g, "crossOrigin")
    .replace(/\btabindex=/g, "tabIndex=")
    .replace(/\bcolspan=/g, "colSpan=")
    .replace(/\browspan=/g, "rowSpan=")
    .replace(/\breadonly\b/g, "readOnly")
    .replace(/\bautofocus\b/g, "autoFocus")
    .replace(/\bautocomplete=/g, "autoComplete=")
    .replace(/\benctype=/g, "encType=")
    .replace(/\bframeborder=/g, "frameBorder=")
    .replace(/\ballowfullscreen\b/g, "allowFullScreen")
    .replace(/&nbsp;/g, "\u00A0")
    .replace(/&amp;/g, "&amp;")
    .replace(/&lt;/g, "&lt;")
    .replace(/&gt;/g, "&gt;")
    // self-closing void tags
    .replace(/<(img|input|br|hr|meta|link|source|area|col|embed|track|wbr)([^>]*?)(?<!\/)>/gi, "<$1$2 />")
    // stroke-dashoffset etc already camelCase in SVG mostly
    .replace(/stop-color=/g, "stopColor=")
    .replace(/stop-opacity=/g, "stopOpacity=")
    .replace(/stroke-dashoffset=/g, "strokeDashoffset=")
    .replace(/stroke-width=/g, "strokeWidth=")
    .replace(/stroke-linecap=/g, "strokeLinecap=")
    .replace(/stroke-linejoin=/g, "strokeLinejoin=")
    .replace(/fill-rule=/g, "fillRule=")
    .replace(/clip-rule=/g, "clipRule=")
    .replace(/clip-path=/g, "clipPath=")
    .replace(/font-size=/g, "fontSize=")
    .replace(/font-family=/g, "fontFamily=")
    .replace(/font-weight=/g, "fontWeight=")
    .replace(/text-anchor=/g, "textAnchor=")
    .replace(/xlink:href=/g, "xlinkHref=")
    .replace(/xml:space=/g, "xmlSpace=")
    .replace(/\bviewbox=/gi, "viewBox=")
    .replace(/\bpreserveaspectratio=/gi, "preserveAspectRatio=")
    .replace(/\baria-label=/g, "aria-label=")
    .replace(/\baria-hidden=/g, "aria-hidden=")
    .replace(/\baria-expanded=/g, "aria-expanded=")
    .replace(/style="([^"]*)"/g, (_, css) => {
      const obj = css
        .split(";")
        .map((s) => s.trim())
        .filter(Boolean)
        .map((pair) => {
          const [k, ...rest] = pair.split(":");
          const key = k
            .trim()
            .replace(/-([a-z])/g, (_, c) => c.toUpperCase());
          const val = rest.join(":").trim();
          const num = Number(val);
          if (val && !Number.isNaN(num) && !/[a-z%]/i.test(val)) {
            return `${key}: ${num}`;
          }
          return `${key}: "${val.replace(/"/g, '\\"')}"`;
        })
        .join(", ");
      return `style={{ ${obj} }}`;
    });

  return out.trim();
}

function extractMain(php) {
  const m = php.match(/<main[^>]*>([\s\S]*)<\/main>/i);
  if (!m) throw new Error("No <main> found");
  return m[1];
}

function writePage({ route, title, description, pageKey, inner = true, mainHtml }) {
  const dir = path.join(outApp, route === "" ? "" : route);
  fs.mkdirSync(dir, { recursive: true });
  const jsx = htmlToJsx(mainHtml);
  const content = `import type { Metadata } from "next";
import { PageShell } from "@/src/components/PageShell";

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
};

export default function Page() {
  return (
    <PageShell page="${pageKey}"${inner ? " inner" : ""}>
${jsx
  .split("\n")
  .map((l) => (l ? `      ${l}` : ""))
  .join("\n")}
    </PageShell>
  );
}
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), content, "utf8");
  console.log("Wrote", route || "/");
}

// Convert PHP catalog to TS module via Function after light transform
function convertCatalog() {
  let php = fs.readFileSync(path.join(root, "Include", "service-catalog.php"), "utf8");
  php = php.replace(/^<\?php\s*/i, "").replace(/^\s*return\s*/, "return ").trim();
  if (php.endsWith(";")) php = php.slice(0, -1);

  // Convert PHP array syntax to JS object literal
  let js = php
    .replace(/'\s*=>\s*/g, "': ")
    .replace(/\[/g, "{")
    .replace(/\]/g, "}");

  // Fix numeric-looking issues: empty arrays became {}
  // Re-parse carefully: sequential arrays of objects need []
  // The catalog only uses associative arrays and lists of assoc arrays.
  // Lists like 'proof' => [ ['strong'=>...], ... ] became { {...}, {...} } which is invalid.
  // Better approach: eval PHP-like with a custom parser.

  // Use a simpler strategy: run through php if available, else hand-written JSON export
  const phpBin = process.env.PHP_BIN || "php";
  try {
    const { execSync } = awaitImport("child_process");
    const json = execSync(
      `${phpBin} -r "echo json_encode(include '${path.join(root, "Include", "service-catalog.php").replace(/\\/g, "/")}');"`,
      { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 }
    );
    const data = JSON.parse(json);
    fs.mkdirSync(outData, { recursive: true });
    const ts = `export type ServiceItem = {
  file: string;
  no: string;
  type: string;
  icon: string;
  title: string;
  card: string;
  meta: string;
  kicker: string;
  headline: string;
  lead: string;
  image: string;
  image_alt: string;
  caption_small: string;
  caption_strong: string;
  float_label: string;
  float_value: string;
  proof: { strong: string; span: string }[];
  cta: string;
  contact: string;
  bridge?: string;
  signals: { small: string; strong: string; span: string }[];
  work_kicker: string;
  work_title: string;
  work_copy: string;
  work_image: string;
  work_image_alt: string;
  features: { icon: string; title: string; text: string }[];
  process_title: string;
  process_copy: string;
  steps: { icon: string; title: string; text: string; tags: string[]; output: string }[];
  outcomes: { icon: string; title: string; text: string }[];
  related: string[];
};

export type ServiceSlug = keyof typeof serviceCatalog;

export const serviceCatalog = ${JSON.stringify(data, null, 2)} as const;

export const serviceSlugs = Object.keys(serviceCatalog) as ServiceSlug[];

export function getService(slug: string) {
  return serviceCatalog[slug as ServiceSlug];
}

export function serviceHref(slug: string) {
  return \`/services/\${slug}\`;
}
`;
    // Fix image paths to absolute public paths
    const fixed = ts
      .replace(/"assets\//g, '"/assets/')
      .replace(/"file": "service-([^.]+)\.php"/g, '"file": "/services/$1"');
    fs.writeFileSync(path.join(outData, "service-catalog.ts"), fixed, "utf8");
    console.log("Wrote service-catalog.ts via PHP");
    return;
  } catch (e) {
    console.warn("PHP encode failed, trying alternate...", e.message);
  }

  throw new Error("Could not convert service catalog");
}

function awaitImport(mod) {
  return require(mod);
}

import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { execSync } from "child_process";

function convertCatalogSync() {
  const catalogPath = path.join(root, "Include", "service-catalog.php").replace(/\\/g, "/");
  let json;
  try {
    json = execSync(`php -r "echo json_encode(include '${catalogPath}');"`, {
      encoding: "utf8",
      maxBuffer: 10 * 1024 * 1024,
    });
  } catch {
    // Windows XAMPP php path
    const candidates = [
      "C:\\\\xampp\\\\php\\\\php.exe",
      "D:\\\\xamp\\\\php\\\\php.exe",
      "D:\\\\xampp\\\\php\\\\php.exe",
    ];
    let lastErr;
    for (const bin of candidates) {
      try {
        json = execSync(`"${bin}" -r "echo json_encode(include '${catalogPath}');"`, {
          encoding: "utf8",
          maxBuffer: 10 * 1024 * 1024,
        });
        break;
      } catch (e) {
        lastErr = e;
      }
    }
    if (!json) throw lastErr || new Error("php not found");
  }

  const data = JSON.parse(json);
  // normalize paths
  for (const key of Object.keys(data)) {
    const s = data[key];
    s.file = `/services/${key}`;
    if (s.image?.startsWith("assets/")) s.image = "/" + s.image;
    if (s.work_image?.startsWith("assets/")) s.work_image = "/" + s.work_image;
  }

  fs.mkdirSync(outData, { recursive: true });
  const ts = `export type ServiceItem = {
  file: string;
  no: string;
  type: string;
  icon: string;
  title: string;
  card: string;
  meta: string;
  kicker: string;
  headline: string;
  lead: string;
  image: string;
  image_alt: string;
  caption_small: string;
  caption_strong: string;
  float_label: string;
  float_value: string;
  proof: { strong: string; span: string }[];
  cta: string;
  contact: string;
  bridge?: string;
  signals: { small: string; strong: string; span: string }[];
  work_kicker: string;
  work_title: string;
  work_copy: string;
  work_image: string;
  work_image_alt: string;
  features: { icon: string; title: string; text: string }[];
  process_title: string;
  process_copy: string;
  steps: { icon: string; title: string; text: string; tags: string[]; output: string }[];
  outcomes: { icon: string; title: string; text: string }[];
  related: string[];
};

export const serviceCatalog = ${JSON.stringify(data, null, 2)} as Record<string, ServiceItem>;

export type ServiceSlug = string;

export const serviceSlugs = Object.keys(serviceCatalog);

export function getService(slug: string): ServiceItem | undefined {
  return serviceCatalog[slug];
}

export function serviceHref(slug: string) {
  return \`/services/\${slug}\`;
}
`;
  fs.writeFileSync(path.join(outData, "service-catalog.ts"), ts, "utf8");
  console.log("Wrote service-catalog.ts");
}

const pages = [
  {
    file: "index.php",
    route: "",
    title: "SaaSGrowth360 | Premium Growth Systems for US SaaS",
    description:
      "SaaSGrowth360 helps US SaaS companies accelerate acquisition, conversion, activation, retention and RevOps with connected growth systems.",
    pageKey: "home",
    inner: false,
  },
  {
    file: "about.php",
    route: "about",
    title: "About | SaaSGrowth360",
    description:
      "Meet SaaSGrowth360 and learn how we build connected growth systems for ambitious SaaS teams.",
    pageKey: "about",
  },
  {
    file: "services.php",
    route: "services",
    title: "Services | SaaSGrowth360",
    description:
      "Explore SaaSGrowth360 services across lead generation, CRO, lifecycle, RevOps, GoHighLevel, n8n and AI automation.",
    pageKey: "services",
  },
  {
    file: "growth-system.php",
    route: "growth-system",
    title: "Growth System | SaaSGrowth360",
    description:
      "See the SaaSGrowth360 operating model for diagnosing, prioritizing, executing and compounding SaaS growth.",
    pageKey: "system",
  },
  {
    file: "outcomes.php",
    route: "outcomes",
    title: "Outcomes | SaaSGrowth360",
    description:
      "Explore the SaaS growth outcomes SaaSGrowth360 is designed to improve, from pipeline to retention and expansion.",
    pageKey: "outcomes",
  },
  {
    file: "why-us.php",
    route: "why-us",
    title: "Why Us | SaaSGrowth360",
    description:
      "Why SaaS companies choose SaaSGrowth360 for connected growth strategy, senior execution, lead generation, automation and revenue systems.",
    pageKey: "why",
  },
];

convertCatalogSync();

for (const p of pages) {
  const php = fs.readFileSync(path.join(root, p.file), "utf8");
  writePage({
    route: p.route,
    title: p.title,
    description: p.description,
    pageKey: p.pageKey,
    inner: p.inner !== false,
    mainHtml: extractMain(php),
  });
}

console.log("Done converting static pages");
