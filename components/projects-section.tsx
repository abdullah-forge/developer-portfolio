import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Section } from "@/components/section"
import { projects, type Project } from "@/lib/projects"

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Built with">
      {tags.map((tag) => (
        <li key={tag} className="rounded border border-border bg-card px-2 py-0.5 font-mono text-xs text-muted-foreground">
          {tag}
        </li>
      ))}
    </ul>
  )
}

function ProjectLinks({ project, className }: { project: Project; className: string }) {
  return (
    <div className={className}>
      {project.links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline"
        >
          {link.label}
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured)
  const others = projects.filter((project) => !project.featured)

  return (
    <Section id="projects" title="Selected work" intro="Live demos where I could host them, and the code for every project.">
      <div className="space-y-16 md:space-y-20">
        {featured.map((project) => {
          const isLive = project.links.some((link) => link.live)
          return (
            <article
              key={project.slug}
              id={`project-${project.slug}`}
              className="grid items-start gap-6 md:grid-cols-[1.15fr_1fr] md:gap-10"
            >
              {/* The screenshot repeats the first link for mouse users; keyboard users get the text links */}
              <a
                href={project.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
                className="group block overflow-hidden rounded-lg border border-border bg-secondary"
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt=""
                    width={1200}
                    height={750}
                    className={`aspect-[16/10] w-full object-cover ${project.imagePosition ?? "object-top"} transition-transform duration-500 group-hover:scale-[1.015]`}
                  />
                )}
              </a>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-serif text-2xl font-medium tracking-tight md:text-[1.75rem]">{project.title}</h3>
                  {isLive && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-0.5 text-xs font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
                      Live
                    </span>
                  )}
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-4">
                  <Tags tags={project.tags} />
                </div>
                <ProjectLinks project={project} className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium" />
                {project.note && <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{project.note}</p>}
              </div>
            </article>
          )
        })}
      </div>

      <h3 className="mt-20 font-serif text-2xl font-medium tracking-tight">More projects</h3>
      <ul className="mt-6 divide-y divide-border border-y border-border">
        {others.map((project) => (
          <li
            key={project.slug}
            id={`project-${project.slug}`}
            className="grid gap-4 py-6 md:grid-cols-[1fr_auto] md:gap-10"
          >
            <div>
              <h4 className="font-medium">{project.title}</h4>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <div className="mt-3">
                <Tags tags={project.tags} />
              </div>
            </div>
            <ProjectLinks project={project} className="flex gap-5 text-sm font-medium md:flex-col md:items-end md:gap-2" />
          </li>
        ))}
      </ul>
    </Section>
  )
}
