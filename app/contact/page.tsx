import type { Metadata } from "next";
import { PageShell } from "@/src/components/PageShell";
import { ContactForm } from "@/src/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a focused growth conversation with SaaSGrowth360 and identify your highest-leverage SaaS growth constraint.",
};

export default function ContactPage() {
  return (
    <PageShell page="contact" inner>
      <section className="inner-hero">
        <div className="container-xl">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="inner-kicker reveal-up">
                <i className="bi bi-chat-square-text" /> Start a conversation
              </div>
              <h1 className="reveal-up">
                Find the constraint that is slowing your <span>next stage of growth.</span>
              </h1>
              <p className="lead reveal-up">
                Tell us where the business is trying to go, what feels stuck and what you
                have already tried. We&apos;ll start from the problem, not from a generic
                service pitch.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="inner-hero-visual reveal-scale">
                <div className="inner-image-card">
                  <img
                    src="/assets/images/Start-conversation.png"
                    alt="Team discussing SaaS growth strategy"
                  />
                  <div className="inner-image-caption">
                    <small>Focused growth conversation</small>
                    <strong>Clarity before scope</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inner-section">
        <div className="container-xl">
          <div className="inner-section-kicker">Growth audit</div>
          <h2 className="inner-section-title">
            Give us the context. We&apos;ll help frame the <span>right problem.</span>
          </h2>
          <div className="contact-shell">
            <aside className="contact-panel">
              <h3>What happens next</h3>
              <p>
                We review your context and use the first conversation to understand the
                growth model, bottleneck and likely dependencies around it.
              </p>
              <div className="contact-detail">
                <i className="bi bi-envelope" />
                <div>
                  <strong>Email</strong>
                  <small>hello@saasgrowth360.com</small>
                </div>
              </div>
              <div className="contact-detail">
                <i className="bi bi-check2-circle" />
                <div>
                  <strong>No generic pitch</strong>
                  <small>The discussion starts with your actual constraint.</small>
                </div>
              </div>
              <div className="contact-detail">
                <i className="bi bi-diagram-3" />
                <div>
                  <strong>Cross-functional view</strong>
                  <small>We look across acquisition, conversion, lifecycle and systems.</small>
                </div>
              </div>
              <div className="contact-detail">
                <i className="bi bi-arrow-up-right" />
                <div>
                  <strong>Clear next step</strong>
                  <small>
                    If there is a fit, the next engagement is scoped around measurable work.
                  </small>
                </div>
              </div>
            </aside>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="inner-cta">
        <div className="container-xl">
          <div className="inner-cta-box">
            <h2>Prefer email?</h2>
            <p>
              Send the problem, current context and the metric you are trying to move to{" "}
              <strong>hello@saasgrowth360.com</strong>.
            </p>
            <div className="inner-actions">
              <a className="btn btn-glass inner-btn-secondary" href="mailto:hello@saasgrowth360.com">
                Email SaaSGrowth360 <i className="bi bi-envelope" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
