"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    let scriptEl: HTMLScriptElement | null = null;

    async function boot() {
      await import("bootstrap");
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      (window as unknown as { gsap: typeof gsap }).gsap = gsap;
      (window as unknown as { ScrollTrigger: typeof ScrollTrigger }).ScrollTrigger =
        ScrollTrigger;

      ScrollTrigger.getAll().forEach((t) => t.kill());

      const prev = document.getElementById("sg-main-js");
      if (prev) prev.remove();

      await new Promise<void>((resolve, reject) => {
        scriptEl = document.createElement("script");
        scriptEl.id = "sg-main-js";
        scriptEl.src = `/assets/js/main.js?v=${Date.now()}`;
        scriptEl.onload = () => resolve();
        scriptEl.onerror = () => reject(new Error("Failed to load main.js"));
        document.body.appendChild(scriptEl);
      });
    }

    boot().catch(console.error);

    return () => {
      cancelled = true;
      if (scriptEl) scriptEl.remove();
    };
  }, [pathname]);

  return null;
}
