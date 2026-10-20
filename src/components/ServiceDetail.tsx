import Link from "next/link";
import {
  getService,
  serviceCatalog,
  type ServiceItem,
} from "@/src/data/service-catalog";
import { PageShell } from "@/src/components/PageShell";
import { sitePath } from "@/src/lib/site-path";

function RichText({
  as: Tag = "span",
  html,
  className,
}: {
  as?: "h1" | "h2" | "span";
  html: string;
  className?: string;
}) {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

function ServiceContent({ slug, service }: { slug: string; service: ServiceItem }) {
  const contactHref = `/contact?service=${encodeURIComponent(service.contact)}`;

  return (
    <>
      <section className="inner-hero service-detail-hero">
        <div className="services-hero-glow services-hero-glow-a" />
        <div className="services-hero-glow services-hero-glow-b" />
        <div className="container-xl">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <Link className="service-crumb reveal-up" href="/services">
                <i className="bi bi-grid-1x2" /> Services <span>/</span> {service.type}
              </Link>
              <div className="inner-kicker reveal-up">
                <i className={`bi ${service.icon}`} /> {service.kicker}
              </div>
              <RichText as="h1" className="reveal-up" html={service.headline} />
              <p className="lead reveal-up">{service.lead}</p>
              <div className="services-proof reveal-up">
                {service.proof.map((item, index) => (
                  <span key={item.strong} style={{ display: "contents" }}>
                    {index > 0 ? <i /> : null}
                    <div>
                      <strong>{item.strong}</strong>
                      <span>{item.span}</span>
                    </div>
                  </span>
                ))}
              </div>
              <div className="inner-actions reveal-up">
                <Link className="btn btn-primary-premium inner-btn-primary" href={contactHref}>
                  {service.cta} <i className="bi bi-arrow-up-right" />
                </Link>
                <Link className="btn btn-glass inner-btn-secondary" href="/services">
                  All capabilities
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="inner-hero-visual reveal-scale">
                <div className="inner-image-card">
                  <img src={sitePath(service.image)} alt={service.image_alt} />
                  <div className="inner-image-caption">
                    <small>{service.caption_small}</small>
                    <strong>{service.caption_strong}</strong>
                  </div>
                </div>
                <div className="inner-float-stat">
                  <small>{service.float_label}</small>
                  <strong>{service.float_value}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inner-section outcomes-proof-wrap service-signal-wrap">
        <div className="container-xl">
          <div className="outcomes-proof-bar">
            {service.signals.map((signal) => (
              <div className="outcomes-proof-item" key={signal.strong}>
                <small>{signal.small}</small>
                <strong>{signal.strong}</strong>
                <span>{signal.span}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-section">
        <div className="container-xl">
          <div className="split-visual">
            <div>
              <div className="inner-section-kicker">{service.work_kicker}</div>
              <RichText
                as="h2"
                className="inner-section-title"
                html={service.work_title}
              />
              <p className="inner-section-copy">{service.work_copy}</p>
              <div className="feature-list">
                {service.features.map((feature) => (
                  <div className="feature-row" key={feature.title}>
                    <span>
                      <i className={`bi ${feature.icon}`} />
                    </span>
                    <div>
                      <strong>{feature.title}</strong>
                      <small>{feature.text}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="feature-image reveal-scale">
              <img src={sitePath(service.work_image)} alt={service.work_image_alt} />
            </div>
          </div>
        </div>
      </section>

      <section className="inner-section alt system-process-wrap">
        <div className="container-xl">
          <div className="system-process-head">
            <div className="system-process-heading">
              <div className="inner-section-kicker">How an engagement runs</div>
              <RichText
                as="h2"
                className="inner-section-title"
                html={service.process_title}
              />
              <p className="inner-section-copy system-process-copy">{service.process_copy}</p>
            </div>
          </div>
          <div className="process-grid-pro">
            {service.steps.map((step, index) => {
              const no = String(index + 1).padStart(2, "0");
              return (
                <article className="process-card-pro" data-step={no} key={step.title}>
                  <div className="process-card-top">
                    <span className="process-step-no">{no}</span>
                    <div className="process-step-icon">
                      <i className={`bi ${step.icon}`} />
                    </div>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <div className="process-mini-list">
                    {step.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="process-card-footer">
                    <small>Output</small>
                    <strong>{step.output}</strong>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="inner-section">
        <div className="container-xl">
          <div className="inner-section-kicker">What changes</div>
          <h2 className="inner-section-title">
            The shift this capability is built to <span>create.</span>
          </h2>
          <div className="premium-card-grid">
            {service.outcomes.map((outcome) => (
              <article className="premium-card" key={outcome.title}>
                <div className="premium-card-icon">
                  <i className={`bi ${outcome.icon}`} />
                </div>
                <h3>{outcome.title}</h3>
                <p>{outcome.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-section alt services-capabilities service-related">
        <div className="container-xl">
          <div className="services-section-head services-section-head-v2">
            <div className="services-head-copy">
              <div className="inner-section-kicker">Connected work</div>
              <h2 className="inner-section-title">
                Capabilities that sit <span>next to this one.</span>
              </h2>
              <p className="inner-section-copy">
                {service.bridge ??
                  "Every capability plugs into the same growth model, so this work stays connected to the rest of the journey."}
              </p>
            </div>
          </div>
          <div className="services-grid-premium">
            {service.related.map((relatedSlug) => {
              const related = serviceCatalog[relatedSlug];
              if (!related) return null;
              return (
                <article className="service-card-pro" data-no={related.no} key={relatedSlug}>
                  <div className="service-card-top">
                    <div className="service-icon-pro">
                      <i className={`bi ${related.icon}`} />
                    </div>
                    <span className="service-type">{related.type}</span>
                  </div>
                  <h3>{related.title}</h3>
                  <p>{related.card}</p>
                  <div className="service-tags">
                    {related.proof.map((item) => (
                      <span key={item.strong}>{item.strong}</span>
                    ))}
                  </div>
                  <Link href={related.file}>
                    <span>View capability</span>
                    <i className="bi bi-arrow-up-right" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="inner-cta">
        <div className="container-xl">
          <div className="inner-cta-box">
            <h2>
              Start with {service.title}, or the <span>constraint behind it.</span>
            </h2>
            <p>
              Tell us where growth is stuck. We will confirm whether this capability is the
              right first move or whether a connected part of the system should come first.
            </p>
            <div className="inner-actions">
              <Link className="btn btn-primary-premium inner-btn-primary" href={contactHref}>
                {service.cta} <i className="bi bi-arrow-up-right" />
              </Link>
              <Link className="btn btn-glass inner-btn-secondary" href="/growth-system">
                See the operating model
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function ServiceDetail({ slug }: { slug: string }) {
  const service = getService(slug);

  if (!service) {
    return (
      <PageShell page="services" inner>
        <section className="inner-hero service-detail-hero">
          <div className="container-xl">
            <Link className="service-crumb" href="/services">
              <i className="bi bi-arrow-left" /> Services
            </Link>
            <h1>This capability is not available.</h1>
            <p className="lead">The page you requested is not part of the current service set.</p>
            <div className="inner-actions">
              <Link className="btn btn-primary-premium inner-btn-primary" href="/services">
                View all services <i className="bi bi-arrow-up-right" />
              </Link>
            </div>
          </div>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell page="services" inner currentServiceSlug={slug}>
      <ServiceContent slug={slug} service={service} />
    </PageShell>
  );
}
