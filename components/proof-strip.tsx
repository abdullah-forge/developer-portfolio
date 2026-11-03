import { projects } from "@/lib/projects"

// Concrete, checkable facts right under the hero: each one is backed by a section further down
const proofPoints = [
  { value: "Top Performer", label: "PEC Generative AI training, 2025" },
  { value: "2 internships", label: "Web development and C++, both remote" },
  { value: `${projects.length} projects`, label: "Backends, AI apps, ML and hardware" },
  { value: "Class of 2027", label: "BS Computer Engineering, COMSATS" },
]

export function ProofStrip() {
  return (
    <section aria-label="Highlights" className="border-b border-border">
      <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-10 md:grid-cols-4 md:px-8">
        {proofPoints.map((point) => (
          <div
            key={point.label}
            className="flex flex-col-reverse justify-end gap-1 md:border-l md:border-border md:pl-6 md:first:border-l-0 md:first:pl-0"
          >
            <dt className="text-sm leading-snug text-muted-foreground">{point.label}</dt>
            <dd className="font-serif text-2xl font-medium tracking-tight">{point.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
