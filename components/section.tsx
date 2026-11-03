import type { ReactNode } from "react"

// Shared section shell so every section has the same width, spacing and heading style
export function Section({
  id,
  title,
  intro,
  tinted = false,
  children,
}: {
  id: string
  title: string
  intro?: ReactNode
  tinted?: boolean
  children: ReactNode
}) {
  return (
    <section id={id} className={`border-b border-border ${tinted ? "bg-secondary" : ""}`}>
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">{title}</h2>
          {intro && <p className="mt-3 leading-relaxed text-muted-foreground">{intro}</p>}
        </div>
        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  )
}
