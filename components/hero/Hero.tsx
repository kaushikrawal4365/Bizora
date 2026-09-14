"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".hero-float").forEach((el, i) =>
        gsap.to(el, {
          y: `+=${14 + i * 7}`,
          rotate: `+=${i % 2 ? 2 : -2}`,
          duration: 5 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      );
      gsap
        .timeline({ delay: 1.75 })
        .from(".hero-title .line > span", { yPercent: 110, duration: 0.8, stagger: 0.06, ease: "power4.out" })
        .from(".hero-sub,.hero-actions,.hero-note", { y: 18, opacity: 0, duration: 0.5, stagger: 0.07, ease: "power3.out" }, "-=.4");
    }, root);
    return () => c.revert();
  }, []);

  return (
    <section id="home" ref={root} className="hero">
      <div className="content hero-grid">
        <div className="hero-copy">
          <div className="section-label">Digital studio / 01</div>
          <h1 className="hero-title">
            <span className="line">
              <span>WE BUILD</span>
            </span>
            <span className="line">
              <span>
                <em>DIGITAL</em> EXPERIENCES
              </span>
            </span>
            <span className="line">
              <span>FOR BUSINESSES</span>
            </span>
            <span className="line">
              <span>WITH AMBITION.</span>
            </span>
          </h1>
          <p className="hero-sub">Modern websites, digital products and experiences for businesses ready to move forward.</p>
          <div className="hero-actions">
            <a className="btn btn--primary" href="#contact">
              START A PROJECT ↗
            </a>
            <a className="btn btn--ghost" href="#work">
              SEE OUR WORK
            </a>
          </div>
          <div className="hero-note">
            <span className="section-kicker">REAL WORK / REAL BUSINESSES</span>
          </div>
        </div>
        <div className="hero-stage" aria-hidden="true">
          <div className="hero-orbit">
            <div className="float-card float-card--main hero-float">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1500&q=85"
                alt=""
                fill
                sizes="(max-width:1100px) 72vw, 50vw"
              />
            </div>
            <div className="float-card float-card--secondary hero-float">
              <Image
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=85"
                alt=""
                fill
                sizes="(max-width:1100px) 50vw, 34vw"
              />
            </div>
            <div className="float-card float-card--tertiary hero-float">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=85"
                alt=""
                fill
                sizes="(max-width:1100px) 38vw, 24vw"
              />
            </div>
            <div className="hero-burst hero-float" data-cursor-dark="true">
              REAL<br />
              WORK<br />
              REAL<br />
              BUSINESSES
            </div>
            <div className="hero-note-card hero-float">
              SAME MISSION.<br />
              DIFFERENT INDUSTRIES.<br />
              <br />
              DESIGN / BUILD / GROW.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

