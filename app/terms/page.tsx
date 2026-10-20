import type { Metadata } from "next";
import { LegalPage } from "@/src/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms of use for the SaaSGrowth360 website, including acceptable use, intellectual property, and engagement disclaimers.",
};

export default function TermsPage() {
  return (
    <LegalPage
      page="terms"
      kicker="Legal"
      title={
        <>
          Terms of <span>Use</span>
        </>
      }
      lead="These Terms of Use govern your access to and use of the SaaSGrowth360 website. By using the site, you agree to these terms."
      updated="October 9, 2026"
      sections={[
        {
          title: "Agreement to terms",
          paragraphs: [
            "By accessing saasgrowth360.com, you agree to these Terms of Use and our Privacy Policy. If you do not agree, please do not use the website.",
          ],
        },
        {
          title: "Website purpose",
          paragraphs: [
            "This website provides information about SaaSGrowth360 services, capabilities, and contact options. Content on the site is for general informational purposes and does not create a client relationship by itself. Any engagement for services is subject to a separate written agreement.",
          ],
        },
        {
          title: "Acceptable use",
          paragraphs: [
            "You agree to use the website only for lawful purposes and in a way that does not disrupt the site, its infrastructure, or other users.",
          ],
          bullets: [
            "Do not attempt to gain unauthorized access to systems or data",
            "Do not submit false, misleading, abusive, or unlawful content through forms or email",
            "Do not scrape, copy, or reuse site materials for commercial purposes without permission",
            "Do not introduce malware or otherwise interfere with site operation",
          ],
        },
        {
          title: "Intellectual property",
          paragraphs: [
            "All website content, branding, design, text, graphics, and related materials are owned by SaaSGrowth360 or its licensors and are protected by applicable intellectual property laws. You may view and share pages for personal or internal business evaluation, but you may not copy, modify, distribute, or create derivative works from the site without prior written consent.",
          ],
        },
        {
          title: "No professional advice guarantee",
          paragraphs: [
            "Case examples, illustrative outcomes, frameworks, and marketing content on the site are provided for informational purposes. Results vary based on market, product, team, and execution conditions. Nothing on the site constitutes legal, financial, or guaranteed performance advice.",
          ],
        },
        {
          title: "Third-party links and tools",
          paragraphs: [
            "The website may reference third-party tools, platforms, or external resources. SaaSGrowth360 is not responsible for the content, policies, or practices of third-party sites or services. Your use of those services is governed by their own terms.",
          ],
        },
        {
          title: "Disclaimer of warranties",
          paragraphs: [
            "The website is provided on an \"as is\" and \"as available\" basis. To the fullest extent permitted by law, SaaSGrowth360 disclaims warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components.",
          ],
        },
        {
          title: "Limitation of liability",
          paragraphs: [
            "To the fullest extent permitted by law, SaaSGrowth360 will not be liable for any indirect, incidental, consequential, special, or punitive damages arising from your use of the website or inability to use it, including lost profits, data, or business opportunities, even if we have been advised of the possibility of such damages.",
          ],
        },
        {
          title: "Changes to these terms",
          paragraphs: [
            "We may update these Terms of Use periodically. The Last updated date at the top of this page reflects the latest revision. Continued use of the website after changes means you accept the updated terms.",
          ],
        },
        {
          title: "Contact",
          paragraphs: [
            "For questions about these Terms of Use, contact SaaSGrowth360 at hello@saasgrowth360.com.",
          ],
        },
      ]}
    />
  );
}
