"use client";
import { useEffect, useState, type FormEvent } from "react";

type Selection = { package?: string; budget?: string; type?: string };

export function WhatsAppLeadModal() {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState<Selection>({});

  useEffect(() => {
    const onSelection = (event: Event) => setSelection((event as CustomEvent<Selection>).detail || {});
    window.addEventListener("bizora:pricing", onSelection);
    window.addEventListener("bizora:interest", onSelection);
    return () => {
      window.removeEventListener("bizora:pricing", onSelection);
      window.removeEventListener("bizora:interest", onSelection);
    };
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const message = [
      "Hi BIZORA, I'd like to discuss a project.",
      `Name: ${data.name}`,
      `Business: ${data.business}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : "",
      `Interested in: ${selection.package || "Not selected"}`,
      `Project: ${selection.type || "Not selected"}`,
      `Budget: ${selection.budget || "Not sure yet"}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/917892473384?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setOpen(false);
  }

  return (
    <>
      <button className="btn whatsapp-trigger" type="button" onClick={() => setOpen(true)}>
        <span>CONTINUE TO WHATSAPP</span>
        <span className="wa-icon" aria-hidden="true">
          💬
        </span>
      </button>
      {open && (
        <div className="whatsapp-modal" role="dialog" aria-modal="true" aria-labelledby="whatsapp-title">
          <button
            className="whatsapp-modal-backdrop"
            type="button"
            aria-label="Close WhatsApp form"
            onClick={() => setOpen(false)}
          />
          <div className="whatsapp-modal-panel">
            <button className="modal-close" type="button" onClick={() => setOpen(false)} aria-label="Close">
              ✕
            </button>
            <div className="section-label">WhatsApp / quick start</div>
            <h2 id="whatsapp-title">
              LET'S TALK<br />
              <em>DIRECTLY.</em>
            </h2>
            <p>Share the basics and we will open WhatsApp with your project details ready to send.</p>
            <form onSubmit={submit}>
              <div className="field">
                <label htmlFor="wa-name">Name</label>
                <input id="wa-name" name="name" required />
              </div>
              <div className="field">
                <label htmlFor="wa-business">Business</label>
                <input id="wa-business" name="business" required />
              </div>
              <div className="field">
                <label htmlFor="wa-email">Email</label>
                <input id="wa-email" name="email" type="email" required />
              </div>
              <div className="field">
                <label htmlFor="wa-phone">Phone (optional)</label>
                <input id="wa-phone" name="phone" type="tel" />
              </div>
              <button className="btn btn--primary" type="submit">
                SEND ON WHATSAPP ↗
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

