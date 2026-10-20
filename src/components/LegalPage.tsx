import Link from "next/link";
import { PageShell } from "@/src/components/PageShell";

type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type LegalPageProps = {
  page: "privacy" | "terms";
  kicker: string;
  title: React.ReactNode;
  lead: string;
  updated: string;
  sections: LegalSection[];
};

export function LegalPage({
  page,
  kicker,
  title,
  lead,
  updated,
  sections,
}: LegalPageProps) {
  const sibling =
    page === "privacy"
      ? { href: "/terms", label: "Terms of Use", icon: "bi-file-earmark-text" }
      : { href: "/privacy", label: "Privacy Policy", icon: "bi-shield-lock" };

  return (
    <PageShell page={page} inner>
      <section className="legal-hero-pro">
        <div className="legal-hero-glow legal-hero-glow-a" />
        <div className="legal-hero-glow legal-hero-glow-b" />
        <div className="container-xl position-relative">
          <div className="legal-hero-grid">
            <div className="legal-hero-copy">
              <div className="inner-kicker reveal-up">
                <i className="bi bi-shield-check" /> {kicker}
              </div>
              <h1 className="reveal-up">{title}</h1>
              <p className="lead reveal-up">{lead}</p>
              <div className="legal-hero-chips reveal-up">
                <div className="legal-chip">
                  <small>Updated</small>
                  <strong>{updated}</strong>
                </div>
                <div className="legal-chip">
                  <small>Applies to</small>
                  <strong>saasgrowth360.com</strong>
                </div>
                <div className="legal-chip">
                  <small>Contact</small>
                  <strong>hello@saasgrowth360.com</strong>
                </div>
              </div>
            </div>

            <aside className="legal-hero-aside reveal-scale">
              <div className="legal-aside-card">
                <div className="legal-aside-top">
                  <span className="legal-aside-live" />
                  <small>Document index</small>
                </div>
                <strong>{sections.length} sections</strong>
                <p>Clear, structured language covering how we handle information, rights, and site use.</p>
                <div className="legal-aside-links">
                  <Link href={sibling.href} className="legal-aside-link">
                    <i className={`bi ${sibling.icon}`} />
                    <span>
                      <small>Related</small>
                      <em>{sibling.label}</em>
                    </span>
                    <i className="bi bi-arrow-up-right" />
                  </Link>
                  <a href="mailto:hello@saasgrowth360.com" className="legal-aside-link">
                    <i className="bi bi-envelope" />
                    <span>
                      <small>Questions</small>
                      <em>Email the team</em>
                    </span>
                    <i className="bi bi-arrow-up-right" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="inner-section legal-body-pro">
        <div className="container-xl">
          <div className="legal-layout">
            <nav className="legal-toc" aria-label="On this page">
              <small>On this page</small>
              <div className="legal-toc-scroll">
                <ol>
                  {sections.map((section, index) => (
                    <li key={section.title}>
                      <a href={`#section-${index + 1}`}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>

            <div className="legal-content">
              {sections.map((section, index) => (
                <article
                  className="legal-section-card"
                  id={`section-${index + 1}`}
                  key={section.title}
                >
                  <header className="legal-section-head">
                    <span className="legal-section-no">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2>{section.title}</h2>
                  </header>
                  <div className="legal-section-body">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.bullets ? (
                      <ul className="legal-bullets">
                        {section.bullets.map((item) => (
                          <li key={item}>
                            <i className="bi bi-check2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              ))}

              <div className="legal-cta-panel">
                <div>
                  <small>Need clarity?</small>
                  <h3>Questions about this document are welcome.</h3>
                  <p>
                    Reach out and we will point you to the right section or confirm how it
                    applies to your inquiry.
                  </p>
                </div>
                <div className="legal-cta-actions">
                  <a
                    className="btn btn-primary-premium inner-btn-primary"
                    href="mailto:hello@saasgrowth360.com"
                  >
                    Email SaaSGrowth360 <i className="bi bi-envelope" />
                  </a>
                  <Link className="btn btn-glass inner-btn-secondary" href="/contact">
                    Contact page <i className="bi bi-arrow-up-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
