"use client";
import { useEffect, useRef } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const follower = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(pointer: fine)").matches
    )
      return;

    document.body.classList.add("has-custom-cursor");
    let x = -100,
      y = -100,
      fx = -100,
      fy = -100,
      raf = 0;

    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px,${y}px,0)`;
    };

    const tick = () => {
      fx += (x - fx) * 0.16;
      fy += (y - fy) * 0.16;
      if (follower.current) follower.current.style.transform = `translate3d(${fx}px,${fy}px,0)`;
      raf = requestAnimationFrame(tick);
    };

    const over = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const isMarquee = !!target.closest(".marquee-shell, .marquee");
      const isDarkBackground = !!target.closest(
        ".cta-card, .about-section, .project-card, .service-face--back, .hero-burst, [data-cursor-dark='true']"
      );
      const isInteractive = !!target.closest(
        "a, button, .btn, .project-card, .service-card, .price-card, .industry-item, .process-step, .cta-orbit"
      );

      if (isMarquee) {
        document.body.classList.add("cursor-marquee");
      } else {
        document.body.classList.remove("cursor-marquee");
      }

      if (isInteractive) {
        document.body.classList.add("cursor-focus");
      } else {
        document.body.classList.remove("cursor-focus");
      }

      if (isDarkBackground) {
        document.body.classList.add("cursor-on-dark");
      } else {
        document.body.classList.remove("cursor-on-dark");
      }
    };

    const out = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      if (target.closest(".marquee-shell, .marquee")) document.body.classList.remove("cursor-marquee");
      if (
        target.closest(
          "a, button, .btn, .project-card, .service-card, .price-card, .industry-item, .process-step, .cta-orbit"
        )
      )
        document.body.classList.remove("cursor-focus");
      if (
        target.closest(
          ".cta-card, .about-section, .project-card, .service-face--back, .hero-burst, [data-cursor-dark='true']"
        )
      )
        document.body.classList.remove("cursor-on-dark");
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerout", out);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerout", out);
      document.body.classList.remove("has-custom-cursor", "cursor-focus", "cursor-marquee", "cursor-on-dark");
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
      <div ref={follower} className="cursor-follower" aria-hidden="true" />
    </>
  );
}

