import Link from "next/link";
import { sitePath } from "@/src/lib/site-path";

export function Footer() {
  return (
    <footer className="premium-footer">
      <div className="footer-glow footer-glow-a" />
      <div className="footer-glow footer-glow-b" />
      <div className="container-xl position-relative">
        <div className="footer-shell">
          <div className="footer-top-grid">
            <div className="footer-brand-block">
              <Link className="brand footer-brand" href="/">
                <span className="brand-symbol">S</span>
                <span className="brand-word">
                  SaaS<span>Growth</span>360
                </span>
              </Link>
              <p>Growth systems for ambitious SaaS companies across the United States.</p>
              <div className="footer-status">
                <span /> Strategy, execution and systems under one growth model
              </div>
            </div>
            <div className="footer-nav-group">
              <small>Explore</small>
              <Link href="/services">Services</Link>
              <Link href="/growth-system">Growth System</Link>
              <Link href="/outcomes">Outcomes</Link>
              <Link href="/why-us">Why Us</Link>
            </div>
            <div className="footer-nav-group">
              <small>Company</small>
              <Link href="/about">About</Link>
              <Link href="/#faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="footer-cta-card">
              <small>Ready to move?</small>
              <strong>Find your next growth constraint.</strong>
              <Link href="/contact">
                Book a Growth Audit <i className="bi bi-arrow-up-right" />
              </Link>
            </div>
          </div>
          <div className="footer-divider">
            <span />
          </div>
          <div className="footer-bottom premium-footer-bottom">
            <span>© 2026 SaaSGrowth360. All rights reserved.</span>
            <div className="footer-powered">
              <span>Powered by</span>
              <a href="https://360growthlab.com/" target="_blank" rel="noopener noreferrer">
                <img src={sitePath("/assets/images/360growthlab.png")} alt="360 Growth Lab" />
              </a>
            </div>
            <div className="footer-legal">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <a href="mailto:hello@saasgrowth360.com">hello@saasgrowth360.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
