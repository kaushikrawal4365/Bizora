import Image from "next/image";

export const projects=[
  {slug:"bixpli",client:"Bixpli",category:"Healthcare / Advisory / B2B",year:"2026",description:"A clear, credible digital experience for a healthcare and advisory business.",url:"https://bixpli.com/",image:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"},
  {slug:"m4-hair",client:"M4 Hair Studio",category:"Beauty / Salon",year:"2026",description:"A polished salon experience designed to make self-care feel effortless.",url:"https://m4hair.com/about-us-page/",image:"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"},
  {slug:"always-tap",client:"Always Tap",category:"Google Reviews / Product",year:"2026",description:"Tap once and make leaving a Google review remarkably easy for every customer.",url:"https://alwaystap.vercel.app/",image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85"},
  {slug:"resume-builder",client:"Resume Builder",category:"Career Tools / Product",year:"2026",description:"A focused resume-building experience that helps people present their work with confidence.",url:"https://resume-builder-jd.vercel.app/",image:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85"},
] as const;

export function ProjectCard({project,index}:{project:typeof projects[number];index:number}){
  return <article className="project-card">
    <div className="project-image"><Image src={project.image} alt={`${project.client} project`} fill sizes="(max-width:720px) 100vw, (max-width:1100px) 50vw, 33vw"/></div>
    <div className="project-shade" aria-hidden="true"/>
    <div className="project-meta"><div><div className="project-index">0{index+1} / {project.year}</div><div className="project-name">{project.client}</div><div className="project-category">{project.category}</div></div><span className="project-arrow">↗</span></div>
    <div className="project-reveal"><p>{project.description}</p><a className="btn btn--dark" href={project.url} target="_blank" rel="noreferrer">VIEW PROJECT ↗</a></div>
  </article>;
}

export function WorkSection(){return <section id="work" className="section"><div className="content"><div className="work-intro"><div><div className="section-label">Selected work / 02</div><h2 className="work-title">BUILT<br/><em>FOR REAL.</em></h2></div><p className="work-copy">Real projects for different businesses. One standard: the digital experience should feel as considered as the business behind it.</p></div><div className="work-rail">{projects.slice(0,3).map((project,index)=><ProjectCard key={project.slug} project={project} index={index}/>)}</div><div className="work-cta"><a className="btn btn--primary" href="/work">SEE ALL OUR WORKS ↗</a></div></div></section>}
