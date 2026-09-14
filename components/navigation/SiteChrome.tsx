"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Sidebar } from "./Sidebar"; import { MobileNav } from "./MobileNav"; import { Intro } from "./Intro"; import { Cursor } from "./Cursor";
gsap.registerPlugin(ScrollTrigger);
export function SiteChrome(){useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const lenis=new Lenis({duration:1.08,smoothWheel:true,syncTouch:false});const tick=(t:number)=>lenis.raf(t*1000);gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0);const onScroll=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;const rail=document.querySelector<HTMLElement>(".top-rail");if(rail)rail.style.transform=`scaleX(${max>0?window.scrollY/max:0})`};const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle("is-in-view",entry.isIntersecting)),{threshold:.24});document.querySelectorAll<HTMLElement>(".project-card,.industry-item,.service-card,.price-card").forEach(el=>reveal.observe(el));window.addEventListener("scroll",onScroll,{passive:true});onScroll();return()=>{gsap.ticker.remove(tick);window.removeEventListener("scroll",onScroll);reveal.disconnect();lenis.destroy()}},[]);return <><Intro/><Sidebar/><MobileNav/><Cursor/></>}
