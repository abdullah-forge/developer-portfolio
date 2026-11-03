import { ArrowUpRight, Mail } from "lucide-react"
import { CopyEmailButton } from "@/components/copy-email-button"

const EMAIL = "whello544@gmail.com"

export function ContactSection() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-28">
        <h2 className="max-w-2xl font-serif text-4xl font-medium tracking-tight md:text-5xl">Let’s work together</h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Hiring for a junior backend or AI role, or need an API, automation or AI feature built? Email me with a few lines about it and I’ll get back to you.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email me
          </a>
          <CopyEmailButton email={EMAIL} />
          <a
            href="https://www.linkedin.com/in/m-abdullah-ce"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-1.5 rounded-md px-3 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Message on LinkedIn
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          {EMAIL} · Lahore, Pakistan · Open to remote work
        </p>
      </div>
    </section>
  )
}
