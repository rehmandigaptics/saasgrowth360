import { sitePath } from "@/src/lib/site-path";
import type { Metadata } from "next";
import { PageShell } from "@/src/components/PageShell";

export const metadata: Metadata = {
  title: "Why Us | SaaSGrowth360",
  description: "Why SaaS companies choose SaaSGrowth360 for connected growth strategy, senior execution, lead generation, automation and revenue systems.",
};

export default function Page() {
  return (
    <PageShell page="why" inner>
      <section className="inner-hero"><div className="container-xl"><div className="row align-items-center g-5"><div className="col-lg-7">
            <div className="inner-kicker reveal-up"><i className="bi bi-gem"></i> Why SaaSGrowth360</div>
            <h1 className="reveal-up">Not another agency. A <span>connected growth operating partner.</span></h1>
            <p className="lead reveal-up">We combine strategy, execution, lead generation, RevOps, GoHighLevel, n8n and automation so your growth system moves as one instead of being split across disconnected vendors.</p>
            <div className="inner-actions reveal-up"><a className="btn btn-primary-premium inner-btn-primary" href={sitePath("/contact")}>Book a Growth Audit <i className="bi bi-arrow-up-right"></i></a><a className="btn btn-glass inner-btn-secondary" href={sitePath("/services")}>Explore capabilities</a></div>
          </div><div className="col-lg-5"><div className="inner-hero-visual reveal-scale"><div className="inner-image-card"><img src={sitePath("/assets/images/hero-why-us.png")} alt="Senior growth team collaborating" /><div className="inner-image-caption"><small>One accountable growth partner</small><strong>Strategy → systems → execution → optimization</strong></div></div><div className="inner-float-stat"><small>Operating model</small><strong>360°</strong></div></div></div></div></div></section>

          <section className="inner-section why-proof-wrap"><div className="container-xl"><div className="why-proof-bar"><div className="why-proof-item"><small>Approach</small><strong>Senior-led</strong><span>The strategy team stays close to implementation.</span></div><div className="why-proof-item"><small>Execution</small><strong>Hands-on</strong><span>We build, optimize and operationalize the work.</span></div><div className="why-proof-item"><small>Systems</small><strong>Connected</strong><span>CRM, automation, demand and lifecycle work together.</span></div><div className="why-proof-item"><small>Focus</small><strong>Revenue growth</strong><span>Success is tied to business outcomes, not motion.</span></div></div></div></section>

          <section className="inner-section why-difference-wrap"><div className="container-xl"><div className="why-difference-head"><div className="why-difference-copy"><div className="inner-section-kicker">The difference</div><h2 className="inner-section-title">Why teams choose us over <span>fragmented vendors.</span></h2><p className="inner-section-copy">The advantage is not one tactic. It is the way acquisition, conversion, CRM, automation and measurement are designed together around one revenue model.</p></div><div className="why-difference-note"><span><i className="bi bi-link-45deg"></i></span><div><small>Connected advantage</small><strong>Six reasons teams get more clarity, speed and accountability with one operating partner.</strong></div></div></div>
            <div className="why-card-grid">
              <article className="why-card" data-no="01"><div className="why-card-top"><div className="why-card-icon"><i className="bi bi-diagram-3"></i></div><span className="why-card-type">Connected</span></div><h3>One system, not isolated tactics</h3><p>Marketing, sales, lifecycle, CRM and automation are designed to reinforce one another instead of competing for attention.</p><div className="why-card-tags"><span>Acquisition</span><span>CRM</span><span>Automation</span></div><div className="why-card-footer"><small>Advantage</small><strong>Shared operating model</strong></div></article>
              <article className="why-card" data-no="02"><div className="why-card-top"><div className="why-card-icon"><i className="bi bi-person-badge"></i></div><span className="why-card-type">Senior-led</span></div><h3>Experienced thinking stays close to execution</h3><p>Strategy is not handed off and diluted. The people shaping the growth model remain connected to implementation and optimization.</p><div className="why-card-tags"><span>Strategy</span><span>Execution</span><span>Optimization</span></div><div className="why-card-footer"><small>Advantage</small><strong>Fewer handoffs</strong></div></article>
              <article className="why-card" data-no="03"><div className="why-card-top"><div className="why-card-icon"><i className="bi bi-speedometer"></i></div><span className="why-card-type">Fast</span></div><h3>Built to move without chaos</h3><p>We prioritize the highest-leverage constraints first, ship focused workstreams and avoid unnecessary process overhead.</p><div className="why-card-tags"><span>Focus</span><span>Prioritization</span><span>Speed</span></div><div className="why-card-footer"><small>Advantage</small><strong>Faster execution loops</strong></div></article>
              <article className="why-card" data-no="04"><div className="why-card-top"><div className="why-card-icon"><i className="bi bi-graph-up-arrow"></i></div><span className="why-card-type">Measurable</span></div><h3>Revenue outcomes over vanity metrics</h3><p>Work is tied to pipeline, conversion, activation, retention and expansion rather than disconnected channel-level activity.</p><div className="why-card-tags"><span>Pipeline</span><span>Conversion</span><span>Revenue</span></div><div className="why-card-footer"><small>Advantage</small><strong>Outcome-based measurement</strong></div></article>
              <article className="why-card" data-no="05"><div className="why-card-top"><div className="why-card-icon"><i className="bi bi-plug"></i></div><span className="why-card-type">Technical</span></div><h3>Strategy plus implementation depth</h3><p>We can operate across CRM, GHL, n8n, APIs, lead-routing, lifecycle automation, analytics and AI workflows without creating another handoff.</p><div className="why-card-tags"><span>GHL</span><span>n8n</span><span>APIs</span></div><div className="why-card-footer"><small>Advantage</small><strong>One technical stack partner</strong></div></article>
              <article className="why-card" data-no="06"><div className="why-card-top"><div className="why-card-icon"><i className="bi bi-arrows-angle-expand"></i></div><span className="why-card-type">Scalable</span></div><h3>Start focused, expand intelligently</h3><p>Begin with one bottleneck, prove leverage, then extend the same operating model across the rest of the funnel.</p><div className="why-card-tags"><span>Phased rollout</span><span>Leverage</span><span>Scale</span></div><div className="why-card-footer"><small>Advantage</small><strong>Compoundable operating model</strong></div></article>
            </div>
          </div></section>

          <section className="inner-section alt"><div className="container-xl"><div className="split-visual"><div className="feature-image reveal-scale"><img src={sitePath("/assets/images/What-that-means-for-you.png")} alt="Growth strategy meeting" /></div><div><div className="inner-section-kicker">What that means for you</div><h2 className="inner-section-title">Fewer handoffs. More <span>operating clarity.</span></h2><p className="inner-section-copy">Instead of coordinating one agency for ads, another for CRM, a freelancer for automation and an internal team trying to connect the data, you get one growth model with clear accountability.</p><div className="feature-list">
            <div className="feature-row"><span><i className="bi bi-check2-circle"></i></span><div><strong>Lead generation connected to CRM</strong><small>Campaigns, forms, enrichment, qualification and follow-up are designed as one journey.</small></div></div>
            <div className="feature-row"><span><i className="bi bi-check2-circle"></i></span><div><strong>GHL configured around your sales motion</strong><small>Pipelines, automations, communication and booking flows support how your team actually sells.</small></div></div>
            <div className="feature-row"><span><i className="bi bi-check2-circle"></i></span><div><strong>n8n connects the tools behind the scenes</strong><small>APIs, data movement, AI steps and operational triggers remove repetitive manual work.</small></div></div>
            <div className="feature-row"><span><i className="bi bi-check2-circle"></i></span><div><strong>Measurement closes the loop</strong><small>Performance is evaluated across the complete customer journey, not one channel at a time.</small></div></div>
          </div></div></div></div></section>

          <section className="inner-section why-standard-wrap">
            <div className="container-xl">
              <div className="why-standard-head">
                <div>
                  <div className="inner-section-kicker">Our standard</div>
                  <h2 className="inner-section-title">
                    What you should expect from <span>every engagement.</span>
                  </h2>
                  <p className="inner-section-copy why-standard-copy">
                    The engagement model is designed to create clarity at the start, focused action
                    in the middle and measurable learning over time.
                  </p>
                </div>
                <div className="why-standard-proof">
                  <div>
                    <strong>04</strong>
                    <span>delivery standards</span>
                  </div>
                  <i />
                  <div>
                    <strong>01</strong>
                    <span>connected engagement model</span>
                  </div>
                </div>
              </div>
              <div className="why-process-grid">
                <article className="why-process-card" data-step="01">
                  <div className="why-process-top">
                    <span className="why-step-no">01</span>
                    <div className="why-step-icon">
                      <i className="bi bi-search" />
                    </div>
                  </div>
                  <h3>Clear diagnosis</h3>
                  <p>We identify the real constraint before prescribing more activity.</p>
                  <div className="why-process-tags">
                    <span>Constraint</span>
                    <span>Audit</span>
                    <span>Clarity</span>
                  </div>
                  <div className="why-process-footer">
                    <small>You get</small>
                    <strong>A clear starting point</strong>
                  </div>
                </article>
                <article className="why-process-card" data-step="02">
                  <div className="why-process-top">
                    <span className="why-step-no">02</span>
                    <div className="why-step-icon">
                      <i className="bi bi-map" />
                    </div>
                  </div>
                  <h3>Prioritized roadmap</h3>
                  <p>You know what matters now, what comes next and what can wait.</p>
                  <div className="why-process-tags">
                    <span>Priority</span>
                    <span>Sequence</span>
                    <span>Focus</span>
                  </div>
                  <div className="why-process-footer">
                    <small>You get</small>
                    <strong>A focused plan</strong>
                  </div>
                </article>
                <article className="why-process-card" data-step="03">
                  <div className="why-process-top">
                    <span className="why-step-no">03</span>
                    <div className="why-step-icon">
                      <i className="bi bi-tools" />
                    </div>
                  </div>
                  <h3>Hands-on execution</h3>
                  <p>
                    Strategy is translated into working campaigns, systems, automations and assets.
                  </p>
                  <div className="why-process-tags">
                    <span>Build</span>
                    <span>Implement</span>
                    <span>Ship</span>
                  </div>
                  <div className="why-process-footer">
                    <small>You get</small>
                    <strong>Working systems</strong>
                  </div>
                </article>
                <article className="why-process-card" data-step="04">
                  <div className="why-process-top">
                    <span className="why-step-no">04</span>
                    <div className="why-step-icon">
                      <i className="bi bi-arrow-repeat" />
                    </div>
                  </div>
                  <h3>Continuous optimization</h3>
                  <p>
                    Results feed the next iteration so the growth engine gets stronger over time.
                  </p>
                  <div className="why-process-tags">
                    <span>Feedback</span>
                    <span>Iteration</span>
                    <span>Compounding</span>
                  </div>
                  <div className="why-process-footer">
                    <small>You get</small>
                    <strong>Ongoing improvement</strong>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="inner-cta"><div className="container-xl"><div className="inner-cta-box reveal-scale"><h2>If your growth stack feels fragmented, <span>we should talk.</span></h2><p>We will help you identify the highest-leverage constraint and show how the pieces can operate as one connected system.</p><div className="inner-actions"><a className="btn btn-primary-premium inner-btn-primary" href={sitePath("/contact")}>Book a Growth Audit <i className="bi bi-arrow-up-right"></i></a></div></div></div></section>
    </PageShell>
  );
}
