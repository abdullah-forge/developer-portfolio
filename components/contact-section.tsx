import { CopyButton } from "@/components/copy-button"

const EMAIL = "whello544@gmail.com"

function External({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="sec wrap contact" aria-labelledby="h-contact">
      <h2 id="h-contact">
        <span className="num">6</span>Contact
      </h2>
      <div className="cols">
        <div>
          <div className="mailrow">
            <a className="btn" href={`mailto:${EMAIL}`}>
              Email me
            </a>
            <span className="addr">{EMAIL}</span>
            <CopyButton text={EMAIL} />
          </div>
          <p className="elsewhere">
            Or find me on <External href="https://www.linkedin.com/in/m-abdullah-ce">LinkedIn</External>,{" "}
            <External href="https://github.com/abdullah-forge">GitHub</External>,{" "}
            <External href="https://huggingface.co/Wall06">Hugging Face</External>,{" "}
            <External href="https://www.credly.com/users/muhammad-abdullah.d1d0395c">Credly</External> and{" "}
            <External href="https://x.com/_Abdulah_virk">X</External>.
          </p>
          <div className="prose">
            <p>
              For a project, a few lines about what you need is enough. I’ll reply with any questions, then send a
              proposal with scope, timeline and price. If you’re hiring,{" "}
              <a href="/cv.pdf" download="Muhammad_Abdullah_CV.pdf">
                my CV
              </a>{" "}
              has the details, and I’m glad to talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
