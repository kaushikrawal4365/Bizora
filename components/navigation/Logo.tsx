import { forwardRef } from "react";

export const BizoraMark = forwardRef<SVGSVGElement, { className?: string }>(function BizoraMark({ className = "" }, ref) {
  return (
    <svg ref={ref} className={className} viewBox="0 0 64 64" role="img" aria-label="BIZORA mark">
      <path d="M11 12h25c10 0 17 6 17 14 0 5-2 9-6 12 4 3 6 7 6 12 0 1 0 2-.2 3H40c.5-1.3.8-2.6.8-4 0-4.9-3.6-8.7-10-8.7H19v12H11V12Zm8 8v12h10.5c5 0 8.5-2.2 8.5-6s-3.5-6-8.5-6H19Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
      <path d="M33 48 47 34l7 7V23" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M45 23h9v9" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="17" cy="16" r="1.8" fill="currentColor" /><circle cx="23" cy="16" r="1.8" fill="currentColor" /><circle cx="29" cy="16" r="1.8" fill="currentColor" />
    </svg>
  );
});

export function BizoraLogo({ dark = false }: { dark?: boolean }) {
  return <div className="logo-link" style={{ color: dark ? "var(--bg)" : "var(--ink)" }}><BizoraMark className="logo-mark" /><div className="logo-word">BIZORA</div></div>;
}
