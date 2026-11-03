import { ArrowUp } from "lucide-react"

const footerLinks = [
  { label: "GitHub", href: "https://github.com/abdullah-forge" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/m-abdullah-ce" },
  { label: "Hugging Face", href: "https://huggingface.co/Wall06" },
  { label: "X", href: "https://x.com/_Abdulah_virk" },
  { label: "Credly", href: "https://www.credly.com/users/muhammad-abdullah.d1d0395c" },
]

export function SiteFooter() {
  return (
    <footer>
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <p>© 2026 Muhammad Abdullah</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
          Back to top
          <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
