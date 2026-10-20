import { sitePath } from "@/src/lib/site-path";
import type { Metadata } from "next";
import { PageShell } from "@/src/components/PageShell";

export const metadata: Metadata = {
  title: "About | SaaSGrowth360",
  description: "Meet SaaSGrowth360 and learn how we build connected growth systems for ambitious SaaS teams.",
};

export default function Page() {
  return (
    <PageShell page="about" inner>
      <section className="inner-hero about-hero-premium">
            <div className="about-hero-orb about-hero-orb-a"></div>
            <div className="about-hero-orb about-hero-orb-b"></div>
            <div className="container-xl">
              <div className="row align-items-center g-5">
                <div className="col-lg-6">
                  <div className="inner-kicker reveal-up"><i className="bi bi-stars"></i> About SaaSGrowth360</div>
                  <h1 className="reveal-up">Growth should operate<br />as a <span>system.</span></h1>
                  <p className="lead reveal-up">We help ambitious SaaS teams replace disconnected campaigns with one coordinated growth engine spanning demand, conversion, lifecycle, RevOps and automation.</p>
                  <div className="about-proof-row reveal-up">
                    <div className="about-proof-item"><span>01</span><strong>Strategy</strong></div>
                    <div className="about-proof-sep"></div>
                    <div className="about-proof-item"><span>02</span><strong>Execution</strong></div>
                    <div className="about-proof-sep"></div>
                    <div className="about-proof-item"><span>03</span><strong>Measurement</strong></div>
                  </div>
                  <div className="inner-actions reveal-up">
                    <a className="btn btn-primary-premium inner-btn-primary" href={sitePath("/contact")}>Start a Growth Audit <i className="bi bi-arrow-up-right"></i></a>
                    <a className="btn btn-glass inner-btn-secondary" href={sitePath("/growth-system")}><span className="btn-play"><i className="bi bi-arrow-right"></i></span> See our operating model</a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="inner-hero-visual about-visual-premium reveal-scale">
                    <div className="about-visual-frame">
                      <div className="about-visual-topbar">
                        <div className="about-status"><span></span> GROWTH OS / LIVE</div>
                        <div className="about-top-dots"><i></i><i></i><i></i></div>
                      </div>
                      <div className="inner-image-card about-image-card">
                        <img src={sitePath("/assets/images/hero-abt.png")} alt="SaaS growth team strategy session" />
                        <div className="about-image-shade"></div>
                        <div className="about-metric-stack">
                          <div className="about-mini-card"><small>PIPELINE</small><strong>Connected</strong><span><i></i> Active system</span></div>
                          <div className="about-mini-card about-mini-card-alt"><small>AUTOMATION</small><strong>Always-on</strong><span><i></i> n8n + GHL</span></div>
                        </div>
                        <div className="inner-image-caption about-image-caption">
                          <div><small>One connected growth model</small><strong>Strategy + execution + measurement</strong></div>
                          <div className="about-caption-arrow"><i className="bi bi-arrow-up-right"></i></div>
                        </div>
                      </div>
                    </div>
                    <div className="inner-float-stat about-float-stat"><small>Operating view</small><strong>360°</strong><span>Full-funnel visibility</span></div>
                    <div className="about-floating-chip"><i className="bi bi-graph-up-arrow"></i><div><small>Growth engine</small><strong>Built to compound</strong></div></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="about-signal-strip" aria-label="SaaSGrowth360 operating principles">
            <div className="container-xl">
              <div className="about-signal-shell">
                <div className="about-signal-card">
                  <div className="about-signal-icon"><i className="bi bi-buildings"></i></div>
                  <div><small>Focus</small><strong>US SaaS companies</strong><span>Built around B2B SaaS growth motions</span></div>
                </div>
                <div className="about-signal-card">
                  <div className="about-signal-icon"><i className="bi bi-person-check"></i></div>
                  <div><small>Model</small><strong>Senior-led execution</strong><span>Strategy stays close to delivery</span></div>
                </div>
                <div className="about-signal-card">
                  <div className="about-signal-icon"><i className="bi bi-graph-up-arrow"></i></div>
                  <div><small>Orientation</small><strong>Revenue outcomes</strong><span>Pipeline, conversion and retention first</span></div>
                </div>
                <div className="about-signal-card">
                  <div className="about-signal-icon"><i className="bi bi-diagram-3"></i></div>
                  <div><small>Method</small><strong>Systems over tactics</strong><span>Connected engines, not isolated campaigns</span></div>
                </div>
              </div>
            </div>
          </section>
          <section className="inner-section"><div className="container-xl"><div className="split-visual"><div><div className="inner-section-kicker">Why we exist</div><h2 className="inner-section-title">Most growth problems are <span>system problems.</span></h2><p className="inner-section-copy">Traffic is rarely the full answer. SaaS growth breaks when positioning, acquisition, conversion, onboarding, lifecycle and revenue operations are managed independently. We connect those layers around the customer journey and the metrics that matter.</p><div className="feature-list"><div className="feature-row"><span><i className="bi bi-diagram-3"></i></span><div><strong>Connected architecture</strong><small>Channels, journeys, data and automation designed to reinforce each other.</small></div></div><div className="feature-row"><span><i className="bi bi-speedometer2"></i></span><div><strong>Execution velocity</strong><small>Prioritized workstreams tied to bottlenecks instead of random marketing activity.</small></div></div><div className="feature-row"><span><i className="bi bi-graph-up-arrow"></i></span><div><strong>Measurable leverage</strong><small>Every initiative is mapped to pipeline, conversion, activation, retention or expansion.</small></div></div></div></div><div className="feature-image reveal-scale"><img src={sitePath("/assets/images/Why-we-exist.png")} alt="Technology team collaborating" /></div></div></div></section>
          <section className="inner-section alt about-process-section">
            <div className="about-process-glow about-process-glow-a"></div>
            <div className="about-process-glow about-process-glow-b"></div>
            <div className="container-xl position-relative">
              <div className="about-process-head">
                <div>
                  <div className="inner-section-kicker">How we think</div>
                  <h2 className="inner-section-title">A growth partner built for <span>operating depth.</span></h2>
                </div>
                <p>We move from diagnosis to operating architecture to execution without losing the strategic thread. Every stage has a clear output, owner and measurement loop.</p>
              </div>

              <div className="about-process-grid">
                <article className="about-process-card">
                  <div className="about-process-number">01</div>
                  <div className="about-process-icon"><i className="bi bi-bullseye"></i></div>
                  <div className="about-process-meta"><span>Diagnose</span><i></i></div>
                  <h3>Find the real constraint</h3>
                  <p>We identify the highest-leverage friction across positioning, demand, funnel, lifecycle and systems.</p>
                  <div className="about-process-output"><small>Primary output</small><strong>Constraint map + priority thesis</strong></div>
                </article>

                <article className="about-process-card featured">
                  <div className="about-process-number">02</div>
                  <div className="about-process-icon"><i className="bi bi-layers"></i></div>
                  <div className="about-process-meta"><span>Design</span><i></i></div>
                  <h3>Build the operating model</h3>
                  <p>We translate the diagnosis into a prioritized roadmap, measurement plan and connected growth architecture.</p>
                  <div className="about-process-output"><small>Primary output</small><strong>Roadmap + measurement architecture</strong></div>
                </article>

                <article className="about-process-card">
                  <div className="about-process-number">03</div>
                  <div className="about-process-icon"><i className="bi bi-lightning-charge"></i></div>
                  <div className="about-process-meta"><span>Execute</span><i></i></div>
                  <h3>Ship, learn and compound</h3>
                  <p>Senior execution, continuous measurement and iteration turn isolated wins into repeatable capability.</p>
                  <div className="about-process-output"><small>Primary output</small><strong>Compounding growth system</strong></div>
                </article>
              </div>

            </div>
          </section>
          <section className="inner-cta"><div className="container-xl"><div className="inner-cta-box reveal-scale"><h2>Build a growth system your team can actually <span>operate.</span></h2><p>Start with a focused audit and leave with a clearer view of what is limiting growth, what to fix first and how the pieces should connect.</p><div className="inner-actions"><a className="btn btn-primary-premium inner-btn-primary" href={sitePath("/contact")}>Book a Growth Audit <i className="bi bi-arrow-up-right"></i></a></div></div></div></section>
    </PageShell>
  );
}
