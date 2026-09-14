"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BizoraMark } from "./Logo";

export function Intro() {
  const ref = useRef<HTMLDivElement>(null); const markRef = useRef<SVGSVGElement>(null); const wordRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { ref.current.remove(); return; }
    const ctx = gsap.context(() => {
      const target = document.querySelector<HTMLElement>(".sidebar .logo-link, .mobile-nav .logo-link");
      const source = ref.current!.querySelector<HTMLElement>(".intro-lockup");
      const targetBox = target?.getBoundingClientRect();
      const sourceBox = source?.getBoundingClientRect();
      const handoff = targetBox && sourceBox ? {
        x: targetBox.left + targetBox.width / 2 - (sourceBox.left + sourceBox.width / 2),
        y: targetBox.top + targetBox.height / 2 - (sourceBox.top + sourceBox.height / 2),
        scale: Math.min(targetBox.width / sourceBox.width, targetBox.height / sourceBox.height) * .92,
      } : { x: "-43vw", y: "-45vh", scale: .34 };
      const tl = gsap.timeline({ delay: .2, onComplete: () => { if (target) gsap.set(target, { opacity: 1 }); ref.current?.remove(); } });
      if (target) gsap.set(target, { opacity: 0 });
      tl.fromTo(markRef.current,{opacity:0,scale:.35,rotate:-14},{opacity:1,scale:1,rotate:0,duration:.55,ease:"back.out(1.7)"})
        .fromTo(wordRef.current,{opacity:0,y:16,letterSpacing:".5em"},{opacity:1,y:0,letterSpacing:".24em",duration:.48,ease:"power3.out"},"-=.1")
        .to(source,{x:handoff.x,y:handoff.y,scale:handoff.scale,duration:.8,ease:"power4.inOut",delay:.15})
        .to(ref.current,{opacity:0,duration:.4},"-=.25");
    }, ref);
    return () => ctx.revert();
  },[]);
  return <div ref={ref} className="intro-overlay" aria-hidden="true"><div className="intro-lockup"><BizoraMark ref={markRef} className="intro-mark"/><div ref={wordRef} className="intro-wordmark">BIZORA</div><div className="intro-sub">DIGITAL STUDIO / 2026</div></div></div>
}
