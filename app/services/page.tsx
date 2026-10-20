import type { Metadata } from "next";
import { PageShell } from "@/src/components/PageShell";

export const metadata: Metadata = {
  title: "Services | SaaSGrowth360",
  description: "Explore SaaSGrowth360 services across lead generation, CRO, lifecycle, RevOps, GoHighLevel, n8n and AI automation.",
};

export default function Page() {
  return (
    <PageShell page="services" inner>
      <section className="inner-hero services-hero-premium">
            <div className="services-hero-glow services-hero-glow-a"></div>
            <div className="services-hero-glow services-hero-glow-b"></div>
            <div className="container-xl">
              <div className="row align-items-center g-5 services-hero-row">
                <div className="col-lg-7">
                  <div className="inner-kicker reveal-up"><i className="bi bi-grid-1x2"></i> Growth capabilities</div>
                  <h1 className="reveal-up">Specialists where you need them. <span>One system around them.</span></h1>
                  <p className="lead reveal-up">From demand generation to RevOps, we connect the capabilities SaaS teams usually spread across agencies, freelancers and disconnected tools.</p>
                  <div className="services-proof reveal-up">
                    <div><strong>09</strong><span>Growth capabilities</span></div>
                    <i></i>
                    <div><strong>01</strong><span>Connected operating model</span></div>
                    <i></i>
                    <div><strong>360°</strong><span>Full-funnel visibility</span></div>
                  </div>
                  <div className="inner-actions reveal-up">
                    <a className="btn btn-primary-premium inner-btn-primary" href="/contact">Discuss your growth constraint <i className="bi bi-arrow-up-right"></i></a>
                    <a className="btn btn-glass inner-btn-secondary services-text-link" href="/growth-system"><span className="btn-play"><i className="bi bi-play-fill"></i></span> How the system works</a>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="services-visual reveal-scale">
                    <div className="services-visual-shell">
                      <div className="services-visual-topbar"><span><i></i> Growth OS</span><strong>LIVE</strong></div>
                      <div className="services-visual-image">
                        <img src="/assets/images/hero-services.png" alt="SaaS analytics dashboard" />
                        <div className="services-visual-shade"></div>
                      </div>
                      <div className="services-visual-metrics">
                        <div><small>DEMAND</small><strong>Qualified pipeline</strong></div>
                        <div><small>AUTOMATION</small><strong>n8n + GHL</strong></div>
                        <div><small>REVENUE OPS</small><strong>Measured end-to-end</strong></div>
                      </div>
                      <div className="services-flow-card">
                        <small>FULL-FUNNEL CAPABILITY</small>
                        <strong>Demand <i className="bi bi-arrow-right"></i> conversion <i className="bi bi-arrow-right"></i> lifecycle <i className="bi bi-arrow-right"></i> revenue</strong>
                      </div>
                      <div className="services-float-chip services-float-chip-a"><span>9</span><small>specialist<br />capabilities</small></div>
                      <div className="services-float-chip services-float-chip-b"><i className="bi bi-stars"></i><small>Strategy +<br />execution</small></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="inner-section services-capabilities">
            <div className="services-capability-orb services-capability-orb-a"></div>
            <div className="services-capability-orb services-capability-orb-b"></div>
            <div className="container-xl position-relative">
              <div className="services-section-head services-section-head-v2">
                <div className="services-head-copy">
                  <div className="inner-section-kicker">Connected capabilities</div>
                  <h2 className="inner-section-title">Everything growth needs. <span>Connected by design.</span></h2>
                  <p className="inner-section-copy">Nine specialist capabilities working inside one operating model, so acquisition, conversion, lifecycle, RevOps and automation compound instead of competing for attention.</p>
                  <div className="services-path-chips" aria-label="Growth capability groups">
                    <span><i className="bi bi-bullseye"></i> Acquire</span>
                    <span><i className="bi bi-arrow-repeat"></i> Convert &amp; retain</span>
                    <span><i className="bi bi-stars"></i> Automate &amp; scale</span>
                  </div>
                </div>
                <div className="services-head-note services-head-note-v2">
                  <span><i className="bi bi-bezier2"></i></span>
                  <div><small>ONE OPERATING MODEL</small><strong>Strategy, execution and measurement stay connected.</strong></div>
                </div>
              </div>

              <div className="services-grid-premium">
                <article className="service-card-pro" data-no="01">
                  <div className="service-card-top"><div className="service-icon-pro"><i className="bi bi-megaphone"></i></div><span className="service-type">Demand</span></div>
                  <h3>Acquisition & demand generation</h3><p>Build qualified pipeline through channel strategy, paid acquisition, content and campaign systems.</p>
                  <div className="service-tags"><span>Paid media</span><span>Landing pages</span><span>Campaigns</span></div>
                  <a href="/services/acquisition"><span>Explore capability</span><i className="bi bi-arrow-up-right"></i></a>
                </article>
                <article className="service-card-pro" data-no="02">
                  <div className="service-card-top"><div className="service-icon-pro"><i className="bi bi-funnel"></i></div><span className="service-type">Conversion</span></div>
                  <h3>CRO & buyer journeys</h3><p>Improve the transition from first visit to lead, demo, trial, opportunity and paid customer.</p>
                  <div className="service-tags"><span>Funnel diagnostics</span><span>CRO</span><span>Experiments</span></div>
                  <a href="/services/cro"><span>Explore capability</span><i className="bi bi-arrow-up-right"></i></a>
                </article>
                <article className="service-card-pro" data-no="03">
                  <div className="service-card-top"><div className="service-icon-pro"><i className="bi bi-person-check"></i></div><span className="service-type">Activation</span></div>
                  <h3>Onboarding & product growth</h3><p>Reduce time-to-value and help users reach the product moments that predict retention.</p>
                  <div className="service-tags"><span>Activation</span><span>Onboarding</span><span>Segmentation</span></div>
                  <a href="/services/onboarding"><span>Explore capability</span><i className="bi bi-arrow-up-right"></i></a>
                </article>
                <article className="service-card-pro" data-no="04">
                  <div className="service-card-top"><div className="service-icon-pro"><i className="bi bi-arrow-repeat"></i></div><span className="service-type">Lifecycle</span></div>
                  <h3>Retention & expansion</h3><p>Create lifecycle programs that improve engagement, reduce churn and surface expansion opportunities.</p>
                  <div className="service-tags"><span>Lifecycle</span><span>Nurture</span><span>Expansion</span></div>
                  <a href="/services/retention"><span>Explore capability</span><i className="bi bi-arrow-up-right"></i></a>
                </article>
                <article className="service-card-pro" data-no="05">
                  <div className="service-card-top"><div className="service-icon-pro"><i className="bi bi-bezier2"></i></div><span className="service-type">Revenue Ops</span></div>
                  <h3>CRM, RevOps & attribution</h3><p>Connect marketing, sales and customer data so teams operate from reliable workflows and metrics.</p>
                  <div className="service-tags"><span>CRM</span><span>Lead routing</span><span>Attribution</span></div>
                  <a href="/services/revops"><span>Explore capability</span><i className="bi bi-arrow-up-right"></i></a>
                </article>
                <article className="service-card-pro" data-no="06">
                  <div className="service-card-top"><div className="service-icon-pro"><i className="bi bi-stars"></i></div><span className="service-type">Automation</span></div>
                  <h3>AI & workflow automation</h3><p>Automate repetitive growth operations while preserving the judgment points that still need humans.</p>
                  <div className="service-tags"><span>AI workflows</span><span>Enrichment</span><span>Ops automation</span></div>
                  <a href="/services/ai-automation"><span>Explore capability</span><i className="bi bi-arrow-up-right"></i></a>
                </article>

                <article className="service-card-pro service-card-key" data-no="07">
                  <div className="service-card-top"><div className="service-icon-pro"><i className="bi bi-person-lines-fill"></i></div><span className="service-type">Lead Generation</span></div>
                  <h3>Qualified lead generation systems</h3><p>Build predictable lead flow with targeted outbound, inbound capture, enrichment, qualification and follow-up designed around your ICP.</p>
                  <div className="service-tags"><span>ICP strategy</span><span>Outbound</span><span>Inbound capture</span><span>Follow-up</span></div>
                  <a href="/services/lead-generation"><span>Build your pipeline</span><i className="bi bi-arrow-up-right"></i></a>
                </article>
                <article className="service-card-pro service-card-key" data-no="08">
                  <div className="service-card-top"><div className="service-icon-pro"><i className="bi bi-diagram-3"></i></div><span className="service-type">n8n</span></div>
                  <h3>n8n workflow automation</h3><p>Connect your SaaS stack with reliable workflows that move data, trigger actions and eliminate repetitive manual handoffs.</p>
                  <div className="service-tags"><span>APIs</span><span>Webhooks</span><span>AI agents</span><span>CRM sync</span></div>
                  <a href="/services/n8n"><span>Automate your stack</span><i className="bi bi-arrow-up-right"></i></a>
                </article>
                <article className="service-card-pro service-card-key" data-no="09">
                  <div className="service-card-top"><div className="service-icon-pro"><i className="bi bi-kanban"></i></div><span className="service-type">GoHighLevel</span></div>
                  <h3>GHL CRM & automation</h3><p>Turn GoHighLevel into a complete lead management, pipeline, communication and conversion system built around your sales process.</p>
                  <div className="service-tags"><span>Pipelines</span><span>Email + SMS</span><span>Funnels</span><span>Appointments</span></div>
                  <a href="/services/gohighlevel"><span>Optimize GHL</span><i className="bi bi-arrow-up-right"></i></a>
                </article>
              </div>

              <div className="services-bottom">
                <div><span className="services-bottom-dot"></span><strong>One connected acquisition system.</strong><small>Lead Generation, n8n and GoHighLevel can operate together.</small></div>
                <a href="/contact" className="btn btn-primary-premium">Build the stack <i className="bi bi-arrow-up-right"></i></a>
              </div>
            </div>
          </section>
          <section className="inner-section alt"><div className="container-xl"><div className="split-visual"><div className="feature-image reveal-scale"><img src="/assets/images/Engagement-model.png" alt="Growth team planning a strategy" /></div><div><div className="inner-section-kicker">Engagement model</div><h2 className="inner-section-title">Use the capability you need, without creating <span>another silo.</span></h2><p className="inner-section-copy">Every workstream plugs into the same growth model, so a landing page is connected to acquisition intent, lifecycle messaging reflects product behavior, and RevOps supports the complete journey.</p><div className="feature-list"><div className="feature-row"><span><i className="bi bi-compass"></i></span><div><strong>Focused sprint</strong><small>A defined problem, fixed scope and clear output.</small></div></div><div className="feature-row"><span><i className="bi bi-stack"></i></span><div><strong>Embedded growth pod</strong><small>Cross-functional execution across multiple growth disciplines.</small></div></div><div className="feature-row"><span><i className="bi bi-diagram-2"></i></span><div><strong>Growth systems buildout</strong><small>Architecture, implementation and enablement around a connected operating model.</small></div></div></div></div></div></div></section>
          <section className="inner-cta"><div className="container-xl"><div className="inner-cta-box"><h2>Need one capability or the <span>whole engine?</span></h2><p>We can start narrow, prove leverage and expand around what the business actually needs.</p><div className="inner-actions"><a className="btn btn-primary-premium inner-btn-primary" href="/contact">Talk to SaaSGrowth360 <i className="bi bi-arrow-up-right"></i></a></div></div></div></section>
    </PageShell>
  );
}
