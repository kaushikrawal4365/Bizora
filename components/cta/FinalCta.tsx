import { WhatsAppLeadModal } from "@/components/contact/WhatsAppLeadModal";

export function FinalCta() {
  return (
    <section className="cta-section">
      <div className="content">
        <div className="cta-card">
          <div>
            <div className="section-label" style={{ color: "rgba(244,241,234,.45)" }}>
              Next / final
            </div>
            <h2 className="cta-title">
              LET'S BUILD<br />
              <em>SOMETHING GREAT.</em>
            </h2>
          </div>

          <div className="cta-footer">
            <p className="cta-blurb">
              A better online presence is just a conversation away. Tell us what is changing in your business.
            </p>
            <div className="cta-actions">
              <a className="btn btn--dark" href="#contact">
                START A PROJECT ↗
              </a>
              <WhatsAppLeadModal />
            </div>
          </div>

          <div className="cta-orbit" data-cursor-dark="true">
            <div className="cta-orbit-ring" />
            <div className="cta-orbit-badge">
              <svg viewBox="0 0 100 100" width="100%" height="100%">
                <path id="orbitTextPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text fill="rgba(244,241,234,0.75)" fontSize="9" letterSpacing="1.8" fontWeight="600">
                  <textPath href="#orbitTextPath" startOffset="0%">
                    BIZORA STUDIO • QUICK START • FAST SHIPPING •
                  </textPath>
                </text>
              </svg>
              <a href="#contact" className="cta-orbit-center" aria-label="Start project now">
                <span>TALK</span>
                <span className="cta-orbit-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

