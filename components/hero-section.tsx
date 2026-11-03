import Image from "next/image"
import { ArrowRight, ArrowUpRight, Download } from "lucide-react"

const profileLinks = [
  { label: "GitHub", href: "https://github.com/abdullah-forge" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/m-abdullah-ce" },
  { label: "Hugging Face", href: "https://huggingface.co/Wall06" },
]

export function HeroSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-5xl items-end gap-8 px-6 pt-12 md:grid-cols-[1fr_auto] md:gap-12 md:px-8 md:pt-16">
        <div className="pb-12 md:pb-16">
          {/* Small round photo on phones; the full portrait sits beside the text on larger screens */}
          <Image
            src="/my-portrait.png"
            alt=""
            width={408}
            height={532}
            priority
            className="mb-6 h-20 w-20 rounded-full border border-border bg-secondary object-cover object-top md:hidden"
          />
          <p className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-success" aria-hidden="true" />
            Available for freelance work · Full-time from June 2027
          </p>
          <h1 className="mt-5 font-serif text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
            Muhammad Abdullah
          </h1>
          <p className="mt-5 max-w-2xl text-2xl leading-snug md:text-[1.75rem]">
            I build Python backends and AI tools that save teams hours.
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground md:text-lg">
            Final-year Computer Engineering student at COMSATS University Islamabad, Lahore Campus. Recent work: an API that reconciles bank statements in about two seconds, an AI assistant that scores sales leads, and a phishing detector for messages and QR codes.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/cv.pdf"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {profileLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute inset-x-0 bottom-0 h-[82%] rounded-t-full bg-secondary" aria-hidden="true" />
          <Image
            src="/my-portrait.png"
            alt="Portrait of Muhammad Abdullah"
            width={408}
            height={532}
            priority
            className="relative h-auto w-[300px] lg:w-[340px]"
          />
        </div>
      </div>
    </section>
  )
}
