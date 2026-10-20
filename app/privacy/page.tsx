import type { Metadata } from "next";
import { LegalPage } from "@/src/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Learn how SaaSGrowth360 collects, uses, and protects information when you visit our website or contact our team.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      page="privacy"
      kicker="Legal"
      title={
        <>
          Privacy <span>Policy</span>
        </>
      }
      lead="This policy explains what information SaaSGrowth360 collects, how we use it, and the choices available to you when you use our website or contact us."
      updated="October 9, 2026"
      sections={[
        {
          title: "Who we are",
          paragraphs: [
            "SaaSGrowth360 provides growth strategy, execution, systems, and automation services for SaaS companies. This Privacy Policy applies to saasgrowth360.com and related inquiries submitted through our website or email.",
          ],
        },
        {
          title: "Information we collect",
          paragraphs: [
            "We collect information you choose to share with us and limited technical data that helps us operate the site.",
          ],
          bullets: [
            "Contact details such as name, work email, company, and service interest when you submit a form or email us",
            "Message content describing your growth challenge or request",
            "Basic technical information such as browser type, device type, and general usage data used to keep the site secure and improve performance",
          ],
        },
        {
          title: "How we use information",
          paragraphs: [
            "We use the information we collect to respond to inquiries, evaluate potential engagements, improve our website, and communicate about services you have asked about.",
          ],
          bullets: [
            "Respond to growth audit or contact requests",
            "Operate, maintain, and improve website performance",
            "Protect against spam, abuse, and technical issues",
            "Send follow-up communications related to a request you initiated",
          ],
        },
        {
          title: "Cookies and analytics",
          paragraphs: [
            "Our website may use cookies or similar technologies that support basic site functionality and, when enabled, anonymous analytics. These tools help us understand how pages are used so we can improve clarity and performance. You can control cookies through your browser settings.",
          ],
        },
        {
          title: "How we share information",
          paragraphs: [
            "We do not sell personal information. We may share information with trusted service providers that help us operate email, hosting, or analytics, and only to the extent needed to perform those services. We may also disclose information if required by law or to protect the rights, safety, or security of SaaSGrowth360, our users, or others.",
          ],
        },
        {
          title: "Data retention",
          paragraphs: [
            "We keep inquiry and communication records only as long as needed to respond to requests, maintain business records, and meet legal or operational requirements. When information is no longer needed, we delete or de-identify it where practical.",
          ],
        },
        {
          title: "Your choices",
          paragraphs: [
            "You can request access to, correction of, or deletion of personal information you have provided by contacting us at hello@saasgrowth360.com. You may also ask us to stop non-essential communications related to a previous inquiry.",
          ],
        },
        {
          title: "Security",
          paragraphs: [
            "We use reasonable administrative and technical safeguards to protect information submitted through the site. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
          ],
        },
        {
          title: "Changes to this policy",
          paragraphs: [
            "We may update this Privacy Policy from time to time. When we do, we will revise the Last updated date on this page. Continued use of the website after changes means you acknowledge the updated policy.",
          ],
        },
        {
          title: "Contact",
          paragraphs: [
            "If you have questions about this Privacy Policy or how SaaSGrowth360 handles personal information, contact us at hello@saasgrowth360.com.",
          ],
        },
      ]}
    />
  );
}
