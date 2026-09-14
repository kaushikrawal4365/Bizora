"use client";
import { useState } from "react";
import { BizoraLogo } from "./Logo";
import { usePathname } from "next/navigation";
const items=[["home","HOME"],["work","WORK"],["services","SERVICES"],["businesses","BUSINESSES"],["pricing","PRICING"],["process","PROCESS"],["about","ABOUT"],["contact","CONTACT"]];
export function MobileNav(){const [open,setOpen]=useState(false);const pathname=usePathname();const href=(id:string)=>pathname==="/"?`#${id}`:`/#${id}`;return <><div className="mobile-nav mobile-only"><a href={href("home")} aria-label="BIZORA home"><BizoraLogo/></a><button className="mobile-menu-btn" onClick={()=>setOpen(v=>!v)} aria-label={open?"Close menu":"Open menu"}>{open?"×":"☰"}</button></div>{open&&<nav className="mobile-overlay-nav mobile-only"><div>{items.map(([id,label])=><a key={id} href={href(id)} onClick={()=>setOpen(false)}>{label}</a>)}</div><div className="section-kicker" style={{color:"rgba(244,241,234,.58)"}}>BIZORA / DIGITAL STUDIO</div></nav>}</>}
