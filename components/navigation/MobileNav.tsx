"use client";
import { useState, useEffect } from "react";
import { BizoraLogo } from "./Logo";
import { usePathname } from "next/navigation";

const items = [
  ["home", "HOME"],
  ["work", "WORK"],
  ["services", "SERVICES"],
  ["businesses", "BUSINESSES"],
  ["pricing", "PRICING"],
  ["process", "PROCESS"],
  ["about", "ABOUT"],
  ["contact", "CONTACT"],
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const href = (id: string) => (pathname === "/" ? `#${id}` : `/#${id}`);

  return (
    <>
      <div className={`mobile-nav mobile-only ${open ? "is-open" : ""}`}>
        <a href={href("home")} aria-label="BIZORA home" onClick={() => setOpen(false)}>
          <BizoraLogo dark={open} />
        </a>
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="mobile-overlay-nav mobile-only" aria-label="Mobile Navigation">
          <div className="mobile-nav-inner">
            <div className="mobile-nav-header-bar">
              <span className="mobile-nav-label">BIZORA / NAVIGATION</span>
              <span className="mobile-nav-badge">8 SECTIONS</span>
            </div>

            <div className="mobile-nav-links">
              {items.map(([id, label], i) => (
                <a
                  key={id}
                  href={href(id)}
                  className="mobile-nav-link"
                  onClick={() => setOpen(false)}
                >
                  <div className="mobile-nav-link-left">
                    <span className="mobile-nav-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="mobile-nav-text">{label}</span>
                  </div>
                  <span className="mobile-nav-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>

            <div className="mobile-nav-footer">
              <a
                href={href("contact")}
                className="btn btn--primary mobile-nav-cta"
                onClick={() => setOpen(false)}
              >
                START A PROJECT ↗
              </a>
              <div className="mobile-nav-info">
                <span className="section-kicker" style={{ color: "rgba(244,241,234,.58)" }}>
                  BIZORA / DIGITAL STUDIO
                </span>
                <div className="mobile-nav-contact-links">
                  <a href="https://wa.me/917892473384" target="_blank" rel="noopener noreferrer">
                    WHATSAPP ↗
                  </a>
                  <span className="mobile-nav-dot" aria-hidden="true">•</span>
                  <a href="mailto:kaushik.rawalwork@gmail.com">
                    EMAIL
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
