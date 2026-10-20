import { sitePath } from "@/src/lib/site-path";
import type { Metadata } from "next";
import { PageShell } from "@/src/components/PageShell";

export const metadata: Metadata = {
  title: {
    absolute: "SaaSGrowth360 | Premium Growth Systems for US SaaS",
  },
  description:
    "SaaSGrowth360 helps US SaaS companies accelerate acquisition, conversion, activation, retention and RevOps with connected growth systems.",
};

export default function Page() {
  return (
    <PageShell page="home">
      <section className="hero-premium overflow-hidden">
            <div className="hero-grid"></div>
            <div className="hero-spotlight"></div>
            <div className="hero-orbit orbit-one"></div>
            <div className="hero-orbit orbit-two"></div>
            <div className="container-xl position-relative hero-container">
              <div className="row align-items-center min-vh-100 gy-5 hero-row">
                <div className="col-lg-6">
                  <div className="hero-badge reveal-up"><span className="live-dot"></span> Growth infrastructure for ambitious US SaaS teams</div>
                  <h1 className="hero-title reveal-up">Build a SaaS growth system that <span>compounds.</span></h1>
                  <p className="hero-copy reveal-up">SaaSGrowth360 connects demand generation, conversion, lifecycle growth, RevOps and AI automation into one measurable operating system built around revenue.</p>
                  <div className="hero-actions reveal-up">
                    <a href="#contact" className="btn btn-electric">Get Your Growth Audit <i className="bi bi-arrow-up-right"></i></a>
                    <a href="#system" className="btn btn-glass">Explore the system <i className="bi bi-arrow-down"></i></a>
                  </div>
                  <div className="hero-proof reveal-up">
                    <div><span>01</span><strong>Acquire</strong><small>Demand + pipeline</small></div>
                    <div><span>02</span><strong>Convert</strong><small>CRO + journeys</small></div>
                    <div><span>03</span><strong>Expand</strong><small>Lifecycle + retention</small></div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="hero-visual reveal-scale">
                    <div className="frame-topbar">
                      <div className="window-dots"><i></i><i></i><i></i></div>
                      <span>Growth Intelligence</span>
                      <small>Live model</small>
                    </div>
                    <div className="product-frame tilt-card">
                      <div className="product-sidebar">
                        <div className="mini-logo">SG</div>
                        <span className="active"><i className="bi bi-grid-1x2-fill"></i></span>
                        <span><i className="bi bi-graph-up-arrow"></i></span>
                        <span><i className="bi bi-bezier2"></i></span>
                        <span><i className="bi bi-lightning-charge"></i></span>
                      </div>
                      <div className="product-main">
                        <div className="product-head">
                          <div><small>Revenue engine</small><h3>$1.84M <em>+28.4%</em></h3></div>
                          <div className="status-pill"><i></i> Healthy</div>
                        </div>
                        <div className="metric-row">
                          <article><small>Qualified pipeline</small><strong>$864K</strong><span>+18.9%</span></article>
                          <article><small>Demo CVR</small><strong>16.8%</strong><span>+4.2%</span></article>
                          <article><small>Expansion MRR</small><strong>$92K</strong><span>+11.7%</span></article>
                        </div>
                        <div className="chart-panel">
                          <div className="chart-meta"><span>Growth velocity</span><small>Last 90 days</small></div>
                          <svg viewBox="0 0 760 300" preserveAspectRatio="none" aria-hidden="true">
                            <defs>
                              <linearGradient id="gradLine" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#7b61ff"/><stop offset=".55" stopColor="#6ee7f7"/><stop offset="1" stopColor="#b7ff77"/></linearGradient>
                              <linearGradient id="gradArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#6ee7f7" stopOpacity=".22"/><stop offset="1" stopColor="#6ee7f7" stopOpacity="0"/></linearGradient>
                            </defs>
                            <path className="chart-area" d="M0,235 C70,220 95,230 145,195 C205,154 247,192 305,148 C360,106 405,124 465,99 C520,77 560,99 625,55 C675,22 712,44 760,23 L760,300 L0,300 Z"/>
                            <path className="chart-line" d="M0,235 C70,220 95,230 145,195 C205,154 247,192 305,148 C360,106 405,124 465,99 C520,77 560,99 625,55 C675,22 712,44 760,23"/>
                          </svg>
                          <div className="scan-line"></div>
                        </div>
                      </div>
                    </div>
                    <div className="floating-chip chip-a"><span><i className="bi bi-stars"></i></span><div><small>AI scoring</small><strong>+36%</strong></div></div>
                    <div className="floating-chip chip-b"><span><i className="bi bi-rocket-takeoff"></i></span><div><small>Pipeline velocity</small><strong>2.6x</strong></div></div>
                    <div className="floating-chip chip-c"><span><i className="bi bi-arrow-repeat"></i></span><div><small>Lifecycle lift</small><strong>+22%</strong></div></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="audience-marquee" aria-label="SaaS segments we serve">
            <div className="container-xl audience-marquee-inner">
              <div className="audience-static">Built for ambitious SaaS teams across the United States</div>
              <div className="audience-loop" aria-label="SaaS company types">
                <div className="audience-fade audience-fade-left"></div>
                <div className="audience-fade audience-fade-right"></div>
                <div className="marquee-track">
                  <div className="marquee-group">
                    <span>PLG SaaS</span>
                    <span>B2B SaaS</span>
                    <span>AI SaaS</span>
                    <span>Vertical SaaS</span>
                    <span>Enterprise SaaS</span>
                    <span>Subscription Products</span>
                  </div>
                  <div className="marquee-group" aria-hidden="true"></div>
                </div>
              </div>
            </div>
          </section>

          <section id="about-us" className="section-pad about-split-premium overflow-hidden">
            <div className="about-split-glow about-split-glow-a"></div>
            <div className="about-split-glow about-split-glow-b"></div>
            <div className="container-xl position-relative">
              <div className="row g-4 g-xl-5 align-items-center">
                <div className="col-lg-6">
                  <div className="about-split-visual reveal-scale">
                    <div className="about-image-frame">
                      <img src={sitePath("/assets/images/About-SaaSGrowth360.png")} alt="SaaS growth team collaborating around a strategy session" loading="lazy" />
                      <div className="about-image-shade"></div>
                      <div className="about-image-grid"></div>
                      <div className="about-image-label">
                        <span className="about-live-dot"></span>
                        <span>Growth systems, not disconnected tactics</span>
                      </div>
                      <div className="about-floating-card about-floating-card-top">
                        <small>Operating model</small>
                        <strong>Acquire → Convert → Retain</strong>
                      </div>
                      <div className="about-floating-card about-floating-card-bottom">
                        <div className="about-mini-mark">360°</div>
                        <div><small>Built around</small><strong>Revenue outcomes</strong></div>
                      </div>
                    </div>
                    <div className="about-visual-foot" aria-label="SaaSGrowth360 operating principles">
                      <div className="about-foot-item">
                        <span className="about-foot-icon"><i className="bi bi-stars"></i></span>
                        <div><strong>US SaaS focused</strong><small>Built for modern growth teams</small></div>
                      </div>
                      <div className="about-foot-item">
                        <span className="about-foot-icon"><i className="bi bi-lightning-charge"></i></span>
                        <div><strong>Strategy + execution</strong><small>From plan to shipped work</small></div>
                      </div>
                      <div className="about-foot-item">
                        <span className="about-foot-icon"><i className="bi bi-bar-chart-line"></i></span>
                        <div><strong>Measurement first</strong><small>Every move tied to signal</small></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="about-split-content">
                    <div className="section-kicker reveal-up">About SaaSGrowth360</div>
                    <h2 className="section-title reveal-up">Growth gets easier when <span>everything connects.</span></h2>
                    <p className="about-lead reveal-up">SaaSGrowth360 helps SaaS companies across the United States connect acquisition, conversion, lifecycle, RevOps and automation into one measurable growth system.</p>
                    <p className="about-copy reveal-up">We work across the customer journey so your marketing does not stop at traffic, your CRM does not become a database graveyard, and your growth team can see exactly where the next constraint lives.</p>

                    <div className="about-feature-list reveal-up">
                      <div className="about-feature-item">
                        <span className="feature-number">01</span>
                        <div><strong>SaaS-native strategy</strong><small>Built around pipeline, activation, retention, expansion and LTV.</small></div>
                      </div>
                      <div className="about-feature-item">
                        <span className="feature-number">02</span>
                        <div><strong>Execution that ships</strong><small>Landing pages, campaigns, lifecycle flows, RevOps and automation under one operating model.</small></div>
                      </div>
                      <div className="about-feature-item">
                        <span className="feature-number">03</span>
                        <div><strong>Decisions backed by signal</strong><small>Clear hypotheses, instrumentation and reporting tied to business outcomes.</small></div>
                      </div>
                    </div>

                    <div className="about-actions reveal-up">
                      <a href="#services" className="btn btn-primary-premium">Explore our capabilities <i className="bi bi-arrow-down-right"></i></a>
                      <div className="about-proof-line"><span></span> Built for PLG, B2B, AI & vertical SaaS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="section-pad services-section premium-services overflow-hidden">
            <div className="services-orb services-orb-a"></div>
            <div className="services-orb services-orb-b"></div>
            <div className="container-xl position-relative">
              <div className="services-head row align-items-end g-4 mb-5">
                <div className="col-lg-7">
                  <div className="section-kicker reveal-up">Our Services</div>
                  <h2 className="section-title reveal-up">Everything your SaaS needs to <span>grow with intent.</span></h2>
                </div>
                <div className="col-lg-5">
                  <p className="section-copy reveal-up">From first click to expansion revenue, we connect strategy, creative, systems and automation so every growth motion works together.</p>
                </div>
              </div>

              <div className="services-scroll-meta reveal-up" aria-hidden="true">
                <span className="services-scroll-copy"><i className="bi bi-mouse"></i> Scroll to explore</span>
                <span className="services-scroll-rail"><i></i></span>
              </div>

              <div className="services-viewport">
                <div className="services-grid" tabIndex={0} aria-label="Services. Scroll horizontally to explore all services.">
                <article className="service-card service-card-featured reveal-up">
                  <div className="service-card-top">
                    <span className="service-icon"><i className="bi bi-bullseye"></i></span>
                    <span className="service-index">01</span>
                  </div>
                  <div className="service-card-body">
                    <span className="service-eyebrow">Acquire</span>
                    <h3>Demand Generation</h3>
                    <p>Build predictable qualified pipeline with paid acquisition, organic growth, high-intent content and campaign systems designed around revenue.</p>
                    <div className="service-tags"><span>Paid Growth</span><span>SEO</span><span>Content</span></div>
                  </div>
                  <a href={sitePath("/services/acquisition")} className="service-link" aria-label="Learn about Demand Generation">Explore service <i className="bi bi-arrow-up-right"></i></a>
                </article>

                <article className="service-card reveal-up">
                  <div className="service-card-top"><span className="service-icon"><i className="bi bi-window-stack"></i></span><span className="service-index">02</span></div>
                  <div className="service-card-body">
                    <span className="service-eyebrow">Convert</span>
                    <h3>CRO & Landing Pages</h3>
                    <p>Turn more qualified traffic into demos, trials and customers through sharper messaging, better UX and disciplined experimentation.</p>
                    <div className="service-tags"><span>CRO</span><span>UX</span><span>A/B Testing</span></div>
                  </div>
                  <a href={sitePath("/services/cro")} className="service-link">Explore service <i className="bi bi-arrow-up-right"></i></a>
                </article>

                <article className="service-card reveal-up">
                  <div className="service-card-top"><span className="service-icon"><i className="bi bi-diagram-3"></i></span><span className="service-index">03</span></div>
                  <div className="service-card-body">
                    <span className="service-eyebrow">Connect</span>
                    <h3>RevOps & CRM</h3>
                    <p>Align marketing, sales and success with clean CRM architecture, lead routing, attribution, lifecycle stages and reporting.</p>
                    <div className="service-tags"><span>CRM</span><span>Attribution</span><span>Routing</span></div>
                  </div>
                  <a href={sitePath("/services/revops")} className="service-link">Explore service <i className="bi bi-arrow-up-right"></i></a>
                </article>

                <article className="service-card reveal-up">
                  <div className="service-card-top"><span className="service-icon"><i className="bi bi-arrow-repeat"></i></span><span className="service-index">04</span></div>
                  <div className="service-card-body">
                    <span className="service-eyebrow">Retain</span>
                    <h3>Lifecycle Growth</h3>
                    <p>Improve activation, onboarding, engagement, renewal and expansion with lifecycle journeys built to compound customer value.</p>
                    <div className="service-tags"><span>Onboarding</span><span>Retention</span><span>Expansion</span></div>
                  </div>
                  <a href={sitePath("/services/retention")} className="service-link">Explore service <i className="bi bi-arrow-up-right"></i></a>
                </article>

                <article className="service-card reveal-up">
                  <div className="service-card-top"><span className="service-icon"><i className="bi bi-stars"></i></span><span className="service-index">05</span></div>
                  <div className="service-card-body">
                    <span className="service-eyebrow">Automate</span>
                    <h3>AI & Automation</h3>
                    <p>Use practical AI and workflow automation to accelerate research, content operations, lead intelligence, reporting and execution.</p>
                    <div className="service-tags"><span>AI Workflows</span><span>Automation</span><span>Analytics</span></div>
                  </div>
                  <a href={sitePath("/services/ai-automation")} className="service-link">Explore service <i className="bi bi-arrow-up-right"></i></a>
                </article>

                <article className="service-card service-card-strategy reveal-up">
                  <div className="service-card-top"><span className="service-icon"><i className="bi bi-compass"></i></span><span className="service-index">06</span></div>
                  <div className="service-card-body">
                    <span className="service-eyebrow">Scale</span>
                    <h3>Growth Strategy</h3>
                    <p>Identify the highest-leverage constraint, prioritize the roadmap and create a measurable growth operating plan your team can actually execute.</p>
                    <div className="service-tags"><span>Strategy</span><span>Roadmap</span><span>Measurement</span></div>
                  </div>
                  <a href={sitePath("/growth-system")} className="service-link">Explore service <i className="bi bi-arrow-up-right"></i></a>
                </article>
                </div>
              </div>

              <div className="services-bottom reveal-up">
                <div><span className="services-bottom-dot"></span><strong>One partner. One growth system.</strong><small>No disconnected agencies, handoffs or vanity reporting.</small></div>
                <a href="#contact" className="btn btn-primary-premium">Build your growth system <i className="bi bi-arrow-up-right"></i></a>
              </div>
            </div>
          </section>

          
          <section id="system" className="section-pad system-section overflow-hidden">
            <div className="system-orb system-orb-a"></div>
            <div className="system-orb system-orb-b"></div>
            <div className="container-xl position-relative">
              <div className="system-shell reveal-scale">
                <div className="row g-5 align-items-start">
                  <div className="col-lg-5">
                    <div className="system-copy-card sticky-copy">
                      <div className="section-kicker reveal-up">The SaaSGrowth360 operating system</div>
                      <h2 className="section-title reveal-up">From scattered tactics to a <span>repeatable growth engine.</span></h2>
                      <p className="section-copy reveal-up">We identify the bottleneck, design the system, ship the experiments and scale what proves it can move revenue.</p>

                      <div className="system-signal-list reveal-up">
                        <div className="system-signal-item">
                          <span className="signal-icon"><i className="bi bi-bullseye"></i></span>
                          <div>
                            <strong>One clear constraint</strong>
                            <small>We focus the team on the highest-leverage bottleneck first.</small>
                          </div>
                        </div>
                        <div className="system-signal-item">
                          <span className="signal-icon"><i className="bi bi-bezier2"></i></span>
                          <div>
                            <strong>Connected execution</strong>
                            <small>Strategy, creative, systems and automation move as one operating layer.</small>
                          </div>
                        </div>
                        <div className="system-signal-item">
                          <span className="signal-icon"><i className="bi bi-graph-up-arrow"></i></span>
                          <div>
                            <strong>Compounding outcomes</strong>
                            <small>Experiments become systems that improve CAC, velocity and LTV.</small>
                          </div>
                        </div>
                      </div>

                      <div className="system-copy-foot reveal-up">
                        <a href="#contact" className="btn btn-primary-premium">Request a strategy session <i className="bi bi-arrow-up-right"></i></a>
                        <div className="system-proof-inline"><span></span> 4-step growth operating model</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="system-process-stack">
                      <article className="system-process-card system-stage-card">
                        <div className="system-process-rail">
                          <div className="system-step-num">01</div>
                        </div>
                        <div className="system-step-content">
                          <div className="system-process-meta"><span className="system-process-icon"><i className="bi bi-search"></i></span><small>Diagnose</small></div>
                          <h3>Find the constraint</h3>
                          <p>Audit acquisition, positioning, funnel behavior, product activation, retention and RevOps to identify the bottleneck that matters most.</p>
                          <div className="system-step-tag">Audit • Data • Prioritization</div>
                        </div>
                      </article>

                      <article className="system-process-card system-stage-card">
                        <div className="system-process-rail">
                          <div className="system-step-num">02</div>
                        </div>
                        <div className="system-step-content">
                          <div className="system-process-meta"><span className="system-process-icon"><i className="bi bi-diagram-3"></i></span><small>Design</small></div>
                          <h3>Build the growth model</h3>
                          <p>Define ICP, offer architecture, channel priorities, experiment roadmap, lifecycle logic and measurement design.</p>
                          <div className="system-step-tag">ICP • Offers • Measurement</div>
                        </div>
                      </article>

                      <article className="system-process-card system-stage-card">
                        <div className="system-process-rail">
                          <div className="system-step-num">03</div>
                        </div>
                        <div className="system-step-content">
                          <div className="system-process-meta"><span className="system-process-icon"><i className="bi bi-lightning-charge"></i></span><small>Execute</small></div>
                          <h3>Ship focused experiments</h3>
                          <p>Launch campaigns, landing pages, automations, content systems and growth initiatives in short accountable cycles.</p>
                          <div className="system-step-tag">Campaigns • CRO • Automation</div>
                        </div>
                      </article>

                      <article className="system-process-card system-stage-card">
                        <div className="system-process-rail">
                          <div className="system-step-num">04</div>
                        </div>
                        <div className="system-step-content">
                          <div className="system-process-meta"><span className="system-process-icon"><i className="bi bi-stars"></i></span><small>Compound</small></div>
                          <h3>Scale what wins</h3>
                          <p>Turn high-performing experiments into repeatable systems while improving CAC, conversion, velocity and LTV.</p>
                          <div className="system-step-tag">Scale • Attribution • LTV</div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          
          <section id="outcomes" className="section-pad outcomes-section premium-outcomes">
            <div className="outcomes-orb outcomes-orb-a"></div>
            <div className="outcomes-orb outcomes-orb-b"></div>
            <div className="container-xl position-relative">
              <div className="outcomes-head premium-outcomes-head">
                <div className="outcomes-title-wrap">
                  <div className="section-kicker reveal-up">Outcome architecture</div>
                  <h2 className="section-title reveal-up">Built around the numbers<br /><span>your leadership team watches.</span></h2>
                </div>
                <div className="outcomes-insight reveal-up">
                  <span className="outcomes-insight-icon"><i className="bi bi-activity"></i></span>
                  <div>
                    <small>Illustrative targets</small>
                    <p>Scenario-based outcomes shown for positioning. Replace with verified client results as case studies are published.</p>
                  </div>
                </div>
              </div>

              <div className="outcome-grid-premium">
                <article className="outcome-card-premium outcome-violet reveal-up">
                  <div className="outcome-card-glow"></div>
                  <div className="outcome-card-header">
                    <div className="outcome-type"><span className="outcome-dot"></span> PLG SaaS</div>
                    <span className="outcome-index">01</span>
                  </div>
                  <div className="outcome-card-main">
                    <span className="outcome-label">Activation → Expansion</span>
                    <div className="outcome-number">+32%</div>
                    <div className="outcome-trend">
                      <svg viewBox="0 0 240 64" preserveAspectRatio="none" aria-hidden="true">
                        <defs><linearGradient id="og1" x1="0" x2="1"><stop offset="0" stopColor="#8d7cff"/><stop offset="1" stopColor="#65e5ee"/></linearGradient></defs>
                        <path className="trend-grid" d="M0 50H240 M0 30H240 M0 10H240"/>
                        <path className="trend-line" d="M0,52 C35,50 45,40 70,42 C95,44 110,27 134,30 C165,34 176,16 205,18 C222,19 230,10 240,7" stroke="url(#og1)"/>
                      </svg>
                      <span>Activation velocity</span>
                    </div>
                  </div>
                  <p>Improve activation by removing onboarding friction and orchestrating milestone-based lifecycle messaging.</p>
                  <div className="outcome-footer">
                    <div className="outcome-chip-row"><span>Activation</span><span>Lifecycle</span><span>Expansion</span></div>
                    <i className="bi bi-arrow-up-right"></i>
                  </div>
                </article>

                <article className="outcome-card-premium outcome-featured reveal-up">
                  <div className="outcome-card-glow"></div>
                  <div className="outcome-card-header">
                    <div className="outcome-type"><span className="outcome-dot"></span> B2B SaaS</div>
                    <span className="outcome-index">02</span>
                  </div>
                  <div className="outcome-card-main">
                    <span className="outcome-label">Pipeline → Revenue</span>
                    <div className="outcome-number">2.0x</div>
                    <div className="outcome-trend">
                      <svg viewBox="0 0 240 64" preserveAspectRatio="none" aria-hidden="true">
                        <defs><linearGradient id="og2" x1="0" x2="1"><stop offset="0" stopColor="#b18cff"/><stop offset=".5" stopColor="#7d8dff"/><stop offset="1" stopColor="#67e5ee"/></linearGradient></defs>
                        <path className="trend-grid" d="M0 50H240 M0 30H240 M0 10H240"/>
                        <path className="trend-line" d="M0,53 C24,48 42,51 62,42 C80,34 92,41 114,29 C140,16 154,25 178,18 C201,11 222,13 240,5" stroke="url(#og2)"/>
                      </svg>
                      <span>Qualified pipeline</span>
                    </div>
                  </div>
                  <p>Increase qualified pipeline with sharper positioning, demand systems, conversion experiences and lead routing.</p>
                  <div className="outcome-footer">
                    <div className="outcome-chip-row"><span>Demand</span><span>CRO</span><span>RevOps</span></div>
                    <i className="bi bi-arrow-up-right"></i>
                  </div>
                </article>

                <article className="outcome-card-premium outcome-cyan reveal-up">
                  <div className="outcome-card-glow"></div>
                  <div className="outcome-card-header">
                    <div className="outcome-type"><span className="outcome-dot"></span> AI SaaS</div>
                    <span className="outcome-index">03</span>
                  </div>
                  <div className="outcome-card-main">
                    <span className="outcome-label">Traffic → Demo</span>
                    <div className="outcome-number">+40%</div>
                    <div className="outcome-trend">
                      <svg viewBox="0 0 240 64" preserveAspectRatio="none" aria-hidden="true">
                        <defs><linearGradient id="og3" x1="0" x2="1"><stop offset="0" stopColor="#79a7ff"/><stop offset="1" stopColor="#7ff2c3"/></linearGradient></defs>
                        <path className="trend-grid" d="M0 50H240 M0 30H240 M0 10H240"/>
                        <path className="trend-line" d="M0,51 C28,54 40,39 67,41 C88,42 103,31 126,32 C151,33 169,20 192,23 C213,25 224,12 240,8" stroke="url(#og3)"/>
                      </svg>
                      <span>Demo conversion</span>
                    </div>
                  </div>
                  <p>Turn category curiosity into sales conversations using proof-first pages, use-case architecture and CRO.</p>
                  <div className="outcome-footer">
                    <div className="outcome-chip-row"><span>Positioning</span><span>UX</span><span>Conversion</span></div>
                    <i className="bi bi-arrow-up-right"></i>
                  </div>
                </article>
              </div>
            </div>
          </section>


          
          
          <section id="about" className="section-pad about-section premium-about-v3">
            <div className="about-v3-orb about-v3-orb-a"></div>
            <div className="about-v3-orb about-v3-orb-b"></div>
            <div className="container-xl position-relative">
              <div className="about-v3-shell reveal-scale">
                <div className="row g-0 align-items-stretch">
                  <div className="col-lg-5">
                    <div className="about-v3-visual">
                      <img src={sitePath("/assets/images/Why-SaaSGrowth360.png")} alt="Strategy team collaborating in a modern office" loading="lazy" />
                      <div className="about-v3-image-overlay"></div>
                      <div className="about-v3-grid"></div>
                      <div className="about-v3-badge"><span></span> Built for ambitious SaaS teams</div>
                      <div className="about-v3-top-card">
                        <small>Operating model</small>
                        <strong>Strategy → Systems → Execution</strong>
                      </div>
                      <div className="about-v3-visual-footer">
                        <div><small>Built for</small><strong>Operators, founders & growth teams</strong></div>
                        <div className="about-v3-mark">360°</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="about-v3-content">
                      <div className="section-kicker">Why SaaSGrowth360</div>
                      <h2 className="section-title">Strategy that actually reaches <span>execution.</span></h2>
                      <p className="about-v3-lead">You do not need another deck telling you to optimize your funnel. You need a growth partner that can diagnose the constraint, prioritize the work, build the assets, connect the systems and measure what happened.</p>

                      <div className="about-v3-principles">
                        <article className="about-v3-principle">
                          <div className="about-v3-num">01</div>
                          <div className="about-v3-icon"><i className="bi bi-graph-up-arrow"></i></div>
                          <div className="about-v3-principle-copy">
                            <small>SaaS-native</small>
                            <h4>SaaS-native thinking</h4>
                            <p>CAC, activation, pipeline, retention, expansion and LTV are the operating language.</p>
                          </div>
                          <i className="bi bi-arrow-up-right about-v3-arrow"></i>
                        </article>

                        <article className="about-v3-principle">
                          <div className="about-v3-num">02</div>
                          <div className="about-v3-icon"><i className="bi bi-lightning-charge"></i></div>
                          <div className="about-v3-principle-copy">
                            <small>Delivery</small>
                            <h4>Senior strategy + hands-on execution</h4>
                            <p>Less handoff. Less fragmentation. Faster movement from idea to shipped work.</p>
                          </div>
                          <i className="bi bi-arrow-up-right about-v3-arrow"></i>
                        </article>

                        <article className="about-v3-principle">
                          <div className="about-v3-num">03</div>
                          <div className="about-v3-icon"><i className="bi bi-bullseye"></i></div>
                          <div className="about-v3-principle-copy">
                            <small>Measurement</small>
                            <h4>Measurement before vanity</h4>
                            <p>Clear hypotheses, instrumentation, reporting and next-step recommendations.</p>
                          </div>
                          <i className="bi bi-arrow-up-right about-v3-arrow"></i>
                        </article>
                      </div>

                      <div className="about-v3-bottom">
                        <div className="about-v3-proof"><span></span><div><small>One connected model</small><strong>Strategy, systems and execution</strong></div></div>
                        <a href="#contact" className="btn btn-primary-premium">Talk to the team <i className="bi bi-arrow-up-right"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          
          
          <section className="section-pad faq-section premium-faq-v3">
            <div className="faq-v3-orb faq-v3-orb-a"></div>
            <div className="faq-v3-orb faq-v3-orb-b"></div>
            <div className="container-xl position-relative">
              <div className="faq-v3-shell reveal-scale">
                <div className="row g-5 align-items-start">
                  <div className="col-lg-5">
                    <div className="faq-v3-intro">
                      <div className="section-kicker reveal-up">FAQ</div>
                      <h2 className="section-title reveal-up">Before we <span>work together.</span></h2>
                      <p className="faq-v3-copy reveal-up">Straight answers to the questions SaaS teams usually ask before engaging a growth partner.</p>

                      <div className="faq-v3-trust reveal-up">
                        <div className="faq-v3-trust-icon"><i className="bi bi-shield-check"></i></div>
                        <div>
                          <small>Built for clarity</small>
                          <strong>No vague retainers. No black-box growth.</strong>
                          <p>Clear scope, clear priorities and a measurable operating plan from day one.</p>
                        </div>
                      </div>

                      <a href="#contact" className="faq-v3-cta reveal-up">
                        <span className="faq-v3-cta-icon"><i className="bi bi-chat-square-text"></i></span>
                        <span><small>Still have a question?</small><strong>Start a focused growth conversation.</strong></span>
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="faq-v3-head reveal-up">
                      <div>
                        <small>Common questions</small>
                        <strong>Everything you need to know before getting started.</strong>
                      </div>
                      <span className="faq-v3-count">04</span>
                    </div>

                    <div className="accordion premium-accordion premium-accordion-v3" id="faq">
                      <div className="accordion-item reveal-up">
                        <h2 className="accordion-header">
                          <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#f1">
                            <span className="faq-v3-number">01</span>
                            <span className="faq-v3-question"><small>Fit</small><strong>What stage of SaaS company is the best fit?</strong></span>
                          </button>
                        </h2>
                        <div id="f1" className="accordion-collapse collapse show" data-bs-parent="#faq">
                          <div className="accordion-body">SaaSGrowth360 is designed for SaaS teams with a real product, an active market and a need to improve acquisition, conversion, activation, retention or expansion. Engagements can be adapted from early growth through scale-up stages.</div>
                        </div>
                      </div>

                      <div className="accordion-item reveal-up">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#f2">
                            <span className="faq-v3-number">02</span>
                            <span className="faq-v3-question"><small>Team model</small><strong>Do you replace our internal marketing team?</strong></span>
                          </button>
                        </h2>
                        <div id="f2" className="accordion-collapse collapse" data-bs-parent="#faq">
                          <div className="accordion-body">Not necessarily. We can work alongside your internal team, fill specialized capability gaps, or own a defined growth initiative end to end.</div>
                        </div>
                      </div>

                      <div className="accordion-item reveal-up">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#f3">
                            <span className="faq-v3-number">03</span>
                            <span className="faq-v3-question"><small>Engagement</small><strong>What does the first engagement look like?</strong></span>
                          </button>
                        </h2>
                        <div id="f3" className="accordion-collapse collapse" data-bs-parent="#faq">
                          <div className="accordion-body">A strong starting point is a focused growth audit covering positioning, acquisition, funnel performance, lifecycle and RevOps. The output becomes a prioritized execution roadmap.</div>
                        </div>
                      </div>

                      <div className="accordion-item reveal-up">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#f4">
                            <span className="faq-v3-number">04</span>
                            <span className="faq-v3-question"><small>Stack</small><strong>Can you work with our existing tools and CRM?</strong></span>
                          </button>
                        </h2>
                        <div id="f4" className="accordion-collapse collapse" data-bs-parent="#faq">
                          <div className="accordion-body">Yes. The goal is not to add software for the sake of it. We assess the existing stack, improve the architecture where needed and connect systems around measurable workflows.</div>
                        </div>
                      </div>
                    </div>

                    <div className="faq-v3-foot reveal-up">
                      <span><i className="bi bi-check2-circle"></i> Clear scope</span>
                      <span><i className="bi bi-check2-circle"></i> Senior execution</span>
                      <span><i className="bi bi-check2-circle"></i> Measurable outcomes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          
          <section id="contact" className="section-pad cta-section premium-cta-v2">
            <div className="container-xl">
              <div className="mega-cta reveal-scale">
                <div className="cta-grid"></div>
                <div className="cta-noise"></div>
                <div className="cta-orbit cta-orbit-one"></div>
                <div className="cta-orbit cta-orbit-two"></div>
                <div className="cta-glow"></div>
                <div className="row align-items-center position-relative g-5">
                  <div className="col-lg-8">
                    <div className="cta-eyebrow"><span></span> Ready to find your next growth lever?</div>
                    <h2>Find the constraint.<br /><span>Build the system. Scale.</span></h2>
                    <p>Book a focused growth conversation and identify where SaaSGrowth360 can create the most leverage across your funnel.</p>
                    <div className="cta-proof-row">
                      <span><i className="bi bi-check2-circle"></i> SaaS-specific</span>
                      <span><i className="bi bi-check2-circle"></i> Outcome-focused</span>
                      <span><i className="bi bi-check2-circle"></i> Built for execution</span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="cta-action-panel">
                      <div className="cta-action-label">Start with clarity</div>
                      <h3>Find the highest-leverage growth constraint.</h3>
                      <a href="mailto:hello@saasgrowth360.com" className="btn btn-light-premium">Book a Growth Audit <i className="bi bi-arrow-up-right"></i></a>
                      <small>No generic pitch. Start with the growth problem that matters most.</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </PageShell>
  );
}
