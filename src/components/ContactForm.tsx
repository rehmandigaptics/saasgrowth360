"use client";

import { useEffect } from "react";

const FORM_SRC =
  "https://links.360growthlab.com/widget/form/na6SO4inHzaCkWz051yR";
const FORM_SCRIPT = "https://links.360growthlab.com/js/form_embed.js";
const FORM_ID = "inline-na6SO4inHzaCkWz051yR";
const FORM_HEIGHT = 480;

export function ContactForm() {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${FORM_SCRIPT}"]`
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = FORM_SCRIPT;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Keep the shared embed script for back/forward navigation.
    };
  }, []);

  return (
    <div className="contact-form contact-form-v2 contact-form-embed">
      <div className="contact-form-head compact-head">
        <div>
          <span className="contact-form-eyebrow">Growth brief</span>
          <h3>Tell us where growth is stuck.</h3>
          <p>A few details are enough to start the conversation.</p>
        </div>
      </div>

      <div className="contact-embed-frame">
        <iframe
          src={FORM_SRC}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "8px",
          }}
          id={FORM_ID}
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Start the Conversation Rehman Ali Form"
          data-height={String(FORM_HEIGHT)}
          data-layout-iframe-id={FORM_ID}
          data-form-id="na6SO4inHzaCkWz051yR"
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
          title="Start the Conversation Rehman Ali Form"
          loading="lazy"
        />
      </div>
    </div>
  );
}
