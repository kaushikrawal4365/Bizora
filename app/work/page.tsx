import { ProjectCard, projects } from "@/components/work/WorkSection";

export default function WorkPage(){return <main className="main"><section className="simple-page work-archive"><div className="content"><div className="section-label">Work / archive</div><h1 className="simple-title">SELECTED<br/><em>WORK.</em></h1><p className="work-copy">Real projects, one standard. Explore the work we have built for ambitious businesses.</p><div className="work-archive-grid">{projects.map((project,index)=><ProjectCard key={project.slug} project={project} index={index}/>)}</div></div></section></main>}
