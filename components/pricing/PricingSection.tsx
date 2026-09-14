"use client";
import { useState } from "react";
import { pricing } from "@/lib/pricing";

type Price=typeof pricing[number];

function PriceCard({plan}:{plan:Price}){
  const [flipped,setFlipped]=useState(false);
  const budget=plan.name==="STARTER"?"Under ₹5K":plan.name==="BUSINESS"?"₹5K–₹10K":plan.name==="PREMIUM"?"₹10K–₹25K":"Not sure yet";
  function choose(){
    window.dispatchEvent(new CustomEvent("bizora:pricing",{detail:{package:plan.name,budget,type:plan.name==="CUSTOM"?"Web Application":"New Website"}}));
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  }
  return <article className={`price-card ${flipped?"is-flipped":""}`}>
    <div className="price-card-inner">
      <div className="price-face price-face--front"><div className="price-tag">{plan.name}</div><h3>{plan.name}</h3><div className="price-value">{plan.value}</div><p className="price-sub">{plan.sub}</p><ul className="price-list">{plan.features.map(f=><li key={f}>{f}</li>)}</ul><button className="price-flip" type="button" onClick={()=>setFlipped(true)} aria-label={`See what is included in ${plan.name}`}>+</button></div>
      <div className="price-face price-face--back"><div className="price-tag">{plan.name} / INCLUDED</div><h3>WE PROVIDE<br/><em>THE START.</em></h3><ul className="price-list">{plan.features.slice(0,4).map(f=><li key={f}>{f}</li>)}</ul><button className="btn btn--primary price-interest" type="button" onClick={choose}>CHOOSE {plan.name}</button><button className="price-flip price-flip--back" type="button" onClick={()=>setFlipped(false)} aria-label={`Return to ${plan.name}`}>x</button></div>
    </div>
  </article>;
}

export function PricingSection(){return <section id="pricing" className="section"><div className="content"><div className="pricing-head"><div><div className="section-label">Pricing / 05</div><h2 className="pricing-title">CLEAR<br/><em>STARTING POINTS.</em></h2></div><div className="section-kicker">No mystery pricing.<br/>Scope decides the final number.</div></div><div className="pricing-grid">{pricing.map(plan=><PriceCard key={plan.name} plan={plan}/>)}</div><p className="pricing-note">Domain, hosting, business email, booking software and other third-party services are billed separately where applicable.</p></div></section>}
