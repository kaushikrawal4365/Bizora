"use client";
import { useState } from "react";

const services = [
  ["01", "STRATEGY & UX", "Understand the business, shape the structure, remove friction.", "↗", "New Website"],
  ["02", "WEB DESIGN", "Build an interface that looks as good as it works.", "◌", "Website Redesign"],
  ["03", "DEVELOPMENT", "Fast, scalable and carefully engineered for the real world.", "</>", "Web Application"],
  ["04", "LAUNCH & CARE", "Go live with confidence - and keep the experience healthy.", "→", "Other"],
] as const;

function ServiceCard({ service }: { service: typeof services[number] }) {
  const [flipped, setFlipped] = useState(false);
  const [number, title, description, mark, interest] = service;

  function choose() {
    window.dispatchEvent(new CustomEvent("bizora:interest", { detail: { type: interest } }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <article className={`service-card ${flipped ? "is-flipped" : ""}`}>
      <div className="service-card-inner">
        <div className="service-face service-face--front">
          <div className="service-face-top">
            <div className="service-num">{number}</div>
          </div>
          <div className="service-face-body">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="service-face-bottom">
            <div className="service-mark">{mark}</div>
          </div>
          <button
            className="service-flip"
            type="button"
            onClick={() => setFlipped(true)}
            aria-label={`See how we help with ${title}`}
          >
            +
          </button>
        </div>

        <div className="service-face service-face--back" data-cursor-dark="true">
          <div className="service-face-top">
            <div className="service-num">{number} / FIT</div>
          </div>
          <div className="service-face-body">
            <h3>
              MAKE IT<br />
              <em>REAL.</em>
            </h3>
            <p>Tell us about your project and we will shape the right starting point together.</p>
          </div>
          <div className="service-face-bottom">
            <button className="btn btn--dark service-interest" type="button" onClick={choose}>
              I'M INTERESTED ↗
            </button>
          </div>
          <button
            className="service-flip service-flip--back"
            type="button"
            onClick={() => setFlipped(false)}
            aria-label={`Return to ${title}`}
          >
            ✕
          </button>
        </div>
      </div>
    </article>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="section section--tight">
      <div className="content">
        <div className="service-head">
          <div>
            <div className="section-label">What we build / 04</div>
            <h2 className="service-title">
              FROM IDEA<br />
              TO <em>IMPACT.</em>
            </h2>
          </div>
          <div className="section-kicker">
            A smaller stack.<br />
            A sharper result.
          </div>
        </div>
        <div className="services-stack">
          {services.map((service) => (
            <ServiceCard key={service[1]} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

