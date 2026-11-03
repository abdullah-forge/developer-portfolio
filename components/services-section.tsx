import { Section } from "@/components/section"

// Each offer links to the project that proves it
const services = [
  {
    title: "Backend APIs",
    description: "FastAPI + PostgreSQL APIs with JWT login, per-user access control and auto-generated docs, ready for your web or mobile app.",
    example: { label: "FastAPI JWT Auth & CRUD API", slug: "jwt-auth-api" },
  },
  {
    title: "Data cleanup and automation",
    description: "Turn messy CSV and Excel exports into clean, matched data automatically: reconciliation, normalization and reports.",
    example: { label: "Bank Reconciliation API", slug: "bank-reconciliation" },
  },
  {
    title: "AI features for your business",
    description: "Lead scoring, AI-drafted emails and proposals, and per-lead AI chat assistants built on Gemini.",
    example: { label: "AI Sales Copilot", slug: "ai-sales-copilot" },
  },
  {
    title: "Machine learning models",
    description: "Classifiers for text and URLs, trained, evaluated and served behind a simple demo you can share.",
    example: { label: "AEGIS-SWARM Threat Triage", slug: "aegis-swarm" },
  },
]

export function ServicesSection() {
  return (
    <Section
      id="services"
      title="How I can help"
      intro="Fixed-scope freelance work for startups, agencies and small businesses. Each offer is backed by a project you can look at."
      tinted
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="flex flex-col rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-medium">{service.title}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{service.description}</p>
            <a
              href={`#project-${service.example.slug}`}
              className="mt-4 self-start text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Example: {service.example.label}
            </a>
          </div>
        ))}
      </div>
      <p className="mt-10 text-muted-foreground">
        Have something like this in mind?{" "}
        <a href="#contact" className="font-medium text-primary underline underline-offset-4">
          Tell me about it
        </a>
        .
      </p>
    </Section>
  )
}
