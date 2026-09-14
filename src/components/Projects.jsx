import { projects } from "../data/projects"
import { SectionHeading } from "./About"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="02" title="projects" />
      <div className="space-y-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
