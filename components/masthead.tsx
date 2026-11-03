import { ThemeToggle } from "@/components/theme-toggle"

const contents = [
  { num: 1, label: "Overview", href: "#overview" },
  { num: 2, label: "Projects", href: "#projects" },
  { num: 3, label: "Experience", href: "#experience" },
  { num: 4, label: "Certificates", href: "#certificates" },
  { num: 5, label: "Freelance work", href: "#freelance" },
  { num: 6, label: "Contact", href: "#contact" },
]

export function Masthead() {
  return (
    <header className="mast">
      <div className="wrap">
        <div className="bar">
          <nav className="toc" aria-label="Contents">
            <ol>
              {contents.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>
                    <span className="num">{item.num}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="bar-end">
            <p className="rev">Revised November 2026</p>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
