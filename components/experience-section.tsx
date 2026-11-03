import { Section } from "@/components/section"

const workExperience = [
  {
    id: "mky-global",
    role: "Intern Web Developer",
    company: "MKY Global Forwarding",
    location: "Remote",
    period: "Mar – Jul 2025",
    bullets: [
      "Deployed a logistics website for a startup, improving operational efficiency.",
      "Collaborated with developers on real-world projects using HTML, CSS, JS, SQL.",
    ],
  },
  {
    id: "mlsa",
    role: "Microsoft Learn Student Ambassador",
    company: "COMSATS University, Lahore",
    location: "On campus",
    period: "Feb – Jun 2025",
    bullets: [
      "Member and co-strategist: led technical workshops on AI and cloud for students.",
      "Coordinated knowledge-sharing initiatives across campus.",
    ],
  },
  {
    id: "rhombix",
    role: "C++ Developer Intern",
    company: "Rhombix Technologies",
    location: "Remote",
    period: "Jan – Mar 2025",
    bullets: [
      "Built C++ applications focused on data structures, algorithms and OOP principles.",
      "Delivered a to-do list manager and a Caesar-cipher encryption tool.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Experience"
      intro="Two remote internships and a student ambassador role, alongside my degree."
    >
      <ol className="space-y-10">
        {workExperience.map((exp) => (
          <li key={exp.id} className="grid gap-2 md:grid-cols-[170px_1fr] md:gap-8">
            <p className="font-mono text-sm text-muted-foreground md:pt-1">{exp.period}</p>
            <div>
              <h3 className="text-lg font-medium">{exp.role}</h3>
              <p className="text-muted-foreground">
                {exp.company} · {exp.location}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-muted-foreground marker:text-muted-foreground">
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
