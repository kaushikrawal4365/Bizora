"use client";
import { useEffect, useRef } from "react";

export function Cursor(){
  const dot=useRef<HTMLDivElement>(null);
  const follower=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!window.matchMedia("(pointer: fine)").matches)return;
    document.body.classList.add("has-custom-cursor");
    let x=0,y=0,fx=0,fy=0,raf=0;
    const move=(event:PointerEvent)=>{x=event.clientX;y=event.clientY;if(dot.current)dot.current.style.transform=`translate3d(${x}px,${y}px,0)`;};
    const tick=()=>{fx+=(x-fx)*.16;fy+=(y-fy)*.16;if(follower.current)follower.current.style.transform=`translate3d(${fx}px,${fy}px,0)`;raf=requestAnimationFrame(tick)};
    const over=(event:Event)=>{const target=event.target as HTMLElement;if(target.closest("a,button,.project-card,.service-card"))document.body.classList.add("cursor-focus")};
    const out=(event:Event)=>{const target=event.target as HTMLElement;if(target.closest("a,button,.project-card,.service-card"))document.body.classList.remove("cursor-focus")};
    window.addEventListener("pointermove",move,{passive:true});document.addEventListener("pointerover",over);document.addEventListener("pointerout",out);raf=requestAnimationFrame(tick);
    return()=>{cancelAnimationFrame(raf);window.removeEventListener("pointermove",move);document.removeEventListener("pointerover",over);document.removeEventListener("pointerout",out);document.body.classList.remove("has-custom-cursor","cursor-focus")};
  },[]);
  return <><div ref={dot} className="cursor-dot" aria-hidden="true"/><div ref={follower} className="cursor-follower" aria-hidden="true"/></>;
}
