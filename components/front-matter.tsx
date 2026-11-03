import { Crop } from "@/components/crop"

export function FrontMatter() {
  return (
    <section className="front wrap" aria-labelledby="name">
      <h1 id="name">Muhammad Abdullah</h1>
      <p className="role">Python backend and AI engineer</p>
      <p className="lede">
        My bank reconciliation API matches a bank statement to a ledger in <mark>about two&nbsp;seconds</mark>{" "}
        <span className="xref">
          (<a href="#bank-reconciliation">2.1</a>)
        </span>
        . Most of my work is like that: Python backends that take a manual job off someone’s desk. I’m a final-year
        computer engineering student at COMSATS Lahore, available for freelance and part-time work now and for
        full-time roles from June&nbsp;2027.
      </p>
      <div className="actions">
        <div className="act-row">
          <a className="btn" href="mailto:whello544@gmail.com">
            Email me
          </a>
          <span className="addr">whello544@gmail.com</span>
        </div>
        <div className="act-row">
          <span>
            <a href="/cv.pdf" download="Muhammad_Abdullah_CV.pdf">
              Download my CV
            </a>
            <span className="meta">PDF, 89&nbsp;KB</span>
          </span>
        </div>
        <div className="act-row">
          <span>
            <a href="https://github.com/abdullah-forge" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{" "}
            ·{" "}
            <a href="https://www.linkedin.com/in/m-abdullah-ce" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>{" "}
            ·{" "}
            <a href="https://huggingface.co/Wall06" target="_blank" rel="noopener noreferrer">
              Hugging Face
            </a>
          </span>
        </div>
      </div>
      <figure className="portrait">
        <Crop
          src="/my-portrait.png"
          width={408}
          height={532}
          area={{ x: 0, y: 0, w: 408, h: 532 }}
          eager
          alt="Black and white photo of Muhammad Abdullah smiling at the camera, arms crossed, in a black T-shirt."
        />
        <figcaption>
          <span className="lbl">Fig.&nbsp;1</span>The author.
        </figcaption>
      </figure>
    </section>
  )
}
