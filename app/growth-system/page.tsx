import { sitePath } from "@/src/lib/site-path";
import type { Metadata } from "next";
import { PageShell } from "@/src/components/PageShell";

export const metadata: Metadata = {
  title: "Growth System | SaaSGrowth360",
  description: "See the SaaSGrowth360 operating model for diagnosing, prioritizing, executing and compounding SaaS growth.",
};

export default function Page() {
  return (
    <PageShell page="system" inner>
      <section className="inner-hero"><div className="container-xl"><div className="row align-items-center g-5"><div className="col-lg-6"><div className="inner-kicker reveal-up"><i className="bi bi-diagram-3"></i> The Growth System</div><h1 className="reveal-up">A repeatable operating system from <span>signal to revenue.</span></h1><p className="lead reveal-up">Our model turns growth into a sequence your team can diagnose, prioritize, execute and improve continuously.</p><div className="inner-actions reveal-up"><a className="btn btn-primary-premium inner-btn-primary" href={sitePath("/contact")}>Map your growth system <i className="bi bi-arrow-up-right"></i></a><a className="btn btn-glass inner-btn-secondary" href={sitePath("/services")}>Explore capabilities</a></div></div><div className="col-lg-6"><div className="inner-hero-visual reveal-scale"><div className="inner-image-card"><img src={sitePath("/assets/images/Growth-System.png")} alt="Connected digital infrastructure" /><div className="inner-image-caption"><small>Growth architecture</small><strong>Signal → journey → data → action</strong></div></div><div className="inner-float-stat"><small>Core stages</small><strong>04</strong></div></div></div></div></div></section>
          <section className="inner-section system-process-wrap">
            <div className="container-xl">
              <div className="system-process-head">
                <div className="system-process-heading">
                  <div className="inner-section-kicker">Operating model</div>
                  <h2 className="inner-section-title">
                    Four stages that turn activity into <span>compounding capability.</span>
                  </h2>
                  <p className="inner-section-copy system-process-copy">
                    A cleaner operating rhythm for SaaS teams: find the real constraint, sequence
                    the work, execute across functions and convert every win into reusable process.
                  </p>
                  <div className="system-process-proof">
                    <div>
                      <strong>04</strong>
                      <span>core stages</span>
                    </div>
                    <i />
                    <div>
                      <strong>01</strong>
                      <span>connected operating loop</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="process-grid-pro">
                <article className="process-card-pro" data-step="01">
                  <div className="process-card-top">
                    <span className="process-step-no">01</span>
                    <div className="process-step-icon">
                      <i className="bi bi-search" />
                    </div>
                  </div>
                  <h3>Diagnose</h3>
                  <p>
                    Audit positioning, demand, funnel performance, lifecycle behavior, data quality
                    and revenue workflows to identify the dominant constraint.
                  </p>
                  <div className="process-mini-list">
                    <span>Signal review</span>
                    <span>Funnel audit</span>
                    <span>Root cause</span>
                  </div>
                  <div className="process-card-footer">
                    <small>Output</small>
                    <strong>Clear constraint map</strong>
                  </div>
                </article>
                <article className="process-card-pro" data-step="02">
                  <div className="process-card-top">
                    <span className="process-step-no">02</span>
                    <div className="process-step-icon">
                      <i className="bi bi-sliders" />
                    </div>
                  </div>
                  <h3>Prioritize</h3>
                  <p>
                    Score opportunities by expected leverage, evidence, effort and dependencies so
                    the roadmap stays focused on what moves growth fastest.
                  </p>
                  <div className="process-mini-list">
                    <span>Leverage</span>
                    <span>Evidence</span>
                    <span>Roadmap</span>
                  </div>
                  <div className="process-card-footer">
                    <small>Output</small>
                    <strong>Ranked action plan</strong>
                  </div>
                </article>
                <article className="process-card-pro" data-step="03">
                  <div className="process-card-top">
                    <span className="process-step-no">03</span>
                    <div className="process-step-icon">
                      <i className="bi bi-lightning-charge" />
                    </div>
                  </div>
                  <h3>Execute</h3>
                  <p>
                    Ship experiments, journeys, campaigns and operational improvements with clear
                    owners, measurable goals and fast feedback loops.
                  </p>
                  <div className="process-mini-list">
                    <span>Campaigns</span>
                    <span>Journeys</span>
                    <span>Ownership</span>
                  </div>
                  <div className="process-card-footer">
                    <small>Output</small>
                    <strong>Measured execution</strong>
                  </div>
                </article>
                <article className="process-card-pro" data-step="04">
                  <div className="process-card-top">
                    <span className="process-step-no">04</span>
                    <div className="process-step-icon">
                      <i className="bi bi-arrow-repeat" />
                    </div>
                  </div>
                  <h3>Compound</h3>
                  <p>
                    Standardize what works, automate repeatable motion and feed learning back into
                    the next growth cycle so performance becomes capability.
                  </p>
                  <div className="process-mini-list">
                    <span>Automation</span>
                    <span>Playbooks</span>
                    <span>Learning loop</span>
                  </div>
                  <div className="process-card-footer">
                    <small>Output</small>
                    <strong>Repeatable growth engine</strong>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <section className="inner-section alt"><div className="container-xl"><div className="split-visual"><div><div className="inner-section-kicker">System layers</div><h2 className="inner-section-title">Every growth stage is connected to the <span>same customer journey.</span></h2><p className="inner-section-copy">Instead of optimizing individual channels in isolation, we connect market signal, acquisition, conversion, activation and expansion through shared data and operating rules.</p><div className="feature-list"><div className="feature-row"><span><i className="bi bi-broadcast"></i></span><div><strong>Signal layer</strong><small>ICP, intent, message-market fit and channel response.</small></div></div><div className="feature-row"><span><i className="bi bi-signpost-split"></i></span><div><strong>Journey layer</strong><small>Pages, funnels, onboarding, lifecycle and sales handoffs.</small></div></div><div className="feature-row"><span><i className="bi bi-database"></i></span><div><strong>Data layer</strong><small>Events, CRM states, attribution, scoring and reporting.</small></div></div><div className="feature-row"><span><i className="bi bi-lightning"></i></span><div><strong>Action layer</strong><small>Automation, alerts, personalization and team workflows.</small></div></div></div></div><div className="feature-image reveal-scale"><img src={sitePath("/assets/images/System-layers.png")} alt="Software team working with data" /></div></div></div></section>
          <section className="inner-section system-metrics-wrap"><div className="container-xl"><div className="system-metrics-head"><div><div className="inner-section-kicker">Measurement</div><h2 className="inner-section-title">A system is only useful if it improves <span>business metrics.</span></h2><p className="inner-section-copy system-metrics-copy">The goal is not more dashboards. It is one operating scorecard that helps the team see where performance is improving, where friction remains and what needs action next.</p></div></div><div className="metric-showcase-pro"><div className="metric-main-pro"><div className="metric-main-header"><div><span className="metric-label">Example growth scorecard</span><h3>One view.</h3></div><div className="metric-score-pill"><small>Composite score</small><strong>71</strong></div></div><p>Bring acquisition efficiency, conversion, activation, retention and expansion into a single operating scorecard.</p><div className="metric-highlights"><span><i className="bi bi-bullseye"></i> Shared operating view</span><span><i className="bi bi-graph-up-arrow"></i> Trend-friendly measurement</span></div><div className="metric-bars-pro"><div className="metric-bar-row-pro"><div className="metric-bar-label"><span>Acquisition</span><small>Pipeline quality</small></div><div className="metric-bar-pro"><i style={{ width: "82%" }}></i></div><b>82</b></div><div className="metric-bar-row-pro"><div className="metric-bar-label"><span>Conversion</span><small>Visit to opportunity</small></div><div className="metric-bar-pro"><i style={{ width: "68%" }}></i></div><b>68</b></div><div className="metric-bar-row-pro"><div className="metric-bar-label"><span>Activation</span><small>Time to value</small></div><div className="metric-bar-pro"><i style={{ width: "74%" }}></i></div><b>74</b></div><div className="metric-bar-row-pro"><div className="metric-bar-label"><span>Expansion</span><small>Retention + growth</small></div><div className="metric-bar-pro"><i style={{ width: "61%" }}></i></div><b>61</b></div></div></div><div className="metric-side-pro"><article className="mini-metric-pro"><div className="mini-metric-top"><span className="mini-metric-icon"><i className="bi bi-funnel"></i></span><span className="metric-label">Pipeline</span></div><strong>Qualified</strong><p>Measure channel contribution by quality, not just lead volume.</p><div className="mini-metric-value"><small>Focus</small><b>Intent + fit</b></div></article><article className="mini-metric-pro"><div className="mini-metric-top"><span className="mini-metric-icon"><i className="bi bi-person-check"></i></span><span className="metric-label">Product</span></div><strong>Activated</strong><p>Connect behavior to the milestones that predict durable usage.</p><div className="mini-metric-value"><small>Focus</small><b>Adoption milestones</b></div></article><article className="mini-metric-pro"><div className="mini-metric-top"><span className="mini-metric-icon"><i className="bi bi-graph-up-arrow"></i></span><span className="metric-label">Revenue</span></div><strong>Expanded</strong><p>Track retention and account growth as part of the same system.</p><div className="mini-metric-value"><small>Focus</small><b>Retention + expansion</b></div></article></div></div></div></section>
          <section className="inner-cta"><div className="container-xl"><div className="inner-cta-box"><h2>Turn your funnel into an <span>operating system.</span></h2><p>We’ll map where growth is breaking, the dependencies around it and the sequence that creates the most leverage.</p><div className="inner-actions"><a className="btn btn-primary-premium inner-btn-primary" href={sitePath("/contact")}>Book a Growth Audit <i className="bi bi-arrow-up-right"></i></a></div></div></div></section>
    </PageShell>
  );
}
