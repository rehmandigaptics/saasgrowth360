"use client";

import Link from "next/link";
import { serviceCatalog, serviceSlugs } from "@/src/data/service-catalog";

type HeaderProps = {
  currentServiceSlug?: string;
};

export function Header({ currentServiceSlug }: HeaderProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top premium-nav">
      <div className="container-xl">
        <Link className="navbar-brand brand" href="/" aria-label="SaaSGrowth360 home">
          <span className="brand-symbol">S</span>
          <span className="brand-word">
            SaaS<span>Growth</span>360
          </span>
        </Link>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto gap-lg-4">
            <li className="nav-item">
              <Link className="nav-link" data-nav="about" href="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item dropdown services-nav">
              <Link className="nav-link" data-nav="services" href="/services">
                Services
              </Link>
              <button
                className="services-nav-caret"
                type="button"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
                aria-label="Show services"
              >
                <i className="bi bi-chevron-down" />
              </button>
              <div className="dropdown-menu services-menu">
                {serviceSlugs.map((slug) => {
                  const item = serviceCatalog[slug];
                  return (
                    <Link
                      key={slug}
                      className={`services-menu-link${currentServiceSlug === slug ? " is-current" : ""}`}
                      href={item.file}
                    >
                      <span className="services-menu-icon">
                        <i className={`bi ${item.icon}`} />
                      </span>
                      <span>
                        <small>{item.type}</small>
                        <strong>{item.title}</strong>
                      </span>
                    </Link>
                  );
                })}
                <Link className="services-menu-all" href="/services">
                  All services <i className="bi bi-arrow-up-right" />
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" data-nav="system" href="/growth-system">
                Growth System
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" data-nav="outcomes" href="/outcomes">
                Outcomes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" data-nav="why" href="/why-us">
                Why Us
              </Link>
            </li>
          </ul>
          <Link href="/contact" className="btn nav-cta nav-cta-mobile-full">
            Book a Growth Audit <i className="bi bi-arrow-up-right" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
