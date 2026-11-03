import { Crop } from "@/components/crop"

const smallerProjects = [
  {
    id: "data-normalizer",
    name: "Data Normalizer API",
    what: "Async service that takes messy CSV, Excel and JSON files, detects the schema, standardizes column names and dates, handles missing values and returns an audit report.",
    stack: "FastAPI · async SQLAlchemy · Pandas · Pydantic v2",
    url: "https://github.com/abdullah-forge/data-normalizer-api",
  },
  {
    id: "jwt-auth-api",
    name: "FastAPI JWT Auth & CRUD API",
    what: "Auth and CRUD backend with JWT access tokens, the OAuth2 password flow, bcrypt password hashing and owner-only edit and delete.",
    stack: "FastAPI · SQLAlchemy · PostgreSQL · OAuth2",
    url: "https://github.com/abdullah-forge/fastapi-jwt-auth-api",
  },
  {
    id: "fake-news-detector",
    name: "Fake News Detector",
    what: "Paste an article to get a fake-news likelihood, its sentiment, an LLM-written explanation and related articles to cross-check it against. Built at a hackathon.",
    stack: "NLP · Hugging Face · Groq",
    url: "https://github.com/abdullah-forge/fake-news-detector",
  },
  {
    id: "sparsity-aware-pe",
    name: "Sparsity-Aware Processing Element",
    what: "VHDL design of a power-gated processing element (8-bit multiply, 32-bit accumulate) as the basic block of an 8×8 systolic array for neural-network inference. When a weight is zero it skips the multiply and powers the multiplier down through a sleep transistor. Team of three; part of the layout is Fig. 2.",
    stack: "VHDL · Quartus · Microwind · power gating",
    url: "https://github.com/abdullah-forge/8x8-Sparsisty-aware-for-dynamic-power-gating",
  },
  {
    id: "nation-explorer",
    name: "Nation-Explorer",
    what: "Object-oriented project for searching nation metrics, demographics and geographic data.",
    stack: "C++ / Java · OOP design · data parsing",
    url: "https://github.com/abdullah-forge/Nation-Explorer",
  },
  {
    id: "pong",
    name: "Classic Pong Game",
    what: "The arcade classic, with 2D rendering, responsive controls and paddle-ball collision physics.",
    stack: "Game dev · graphics · collision logic",
    url: "https://github.com/abdullah-forge/Pong_game",
  },
  {
    id: "snake",
    name: "Retro Snake Game",
    what: "Grid-based Snake with real-time collision detection, score tracking and food generation.",
    stack: "Game dev · algorithms",
    url: "https://github.com/abdullah-forge/Snake_game",
  },
]

function External({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

function None() {
  return (
    <>
      <span aria-hidden="true">–</span>
      <span className="sr-only">none</span>
    </>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="sec wrap" aria-labelledby="h-projects">
      <h2 id="h-projects">
        <span className="num">2</span>Projects
      </h2>

      <article className="proj" id="bank-reconciliation" aria-labelledby="h-p1">
        <h3 className="sub" id="h-p1">
          <span className="num">2.1</span>Bank Reconciliation API
        </h3>
        <figure className="wide-fig" id="fig-3">
          <Crop
            className="shot swagger"
            src="/projects/bank-reconciliation.png"
            width={1108}
            height={600}
            alt="Swagger UI for the Bank Reconciliation API, version 0.1.0: the POST /api/v1/reconcile/ endpoint with two required file fields, bank_statement and internal_ledger, holding test_bank.csv and test_ledger.csv."
          />
          <figcaption>
            <span className="lbl">Fig.&nbsp;3</span>The upload endpoint in the API’s generated docs, with two test CSV
            files attached.
          </figcaption>
        </figure>
        <div className="cols">
          <div className="proj-text">
            <p className="first">Matches a bank statement to a ledger.</p>
            <p>
              It’s a job accountants usually do by hand. You upload the two CSV files, the matching runs as a background
              job, and a status endpoint returns the matched and unmatched transactions and the balance difference in{" "}
              <mark>about&nbsp;2&nbsp;seconds</mark>
              <sup>
                <a className="fn" href="#note-2" id="ref-2" aria-label="Note 2">
                  2
                </a>
              </sup>
              . Pandas does the matching, allowing up to two days between dates and small rounding differences in
              amounts. Table&nbsp;1 shows the sample files from the README and the result.
            </p>
            <dl className="facts">
              <div>
                <dt>Endpoints</dt>
                <dd className="code">
                  POST /api/v1/reconcile/
                  <br />
                  {"GET /api/v1/status/{job_id}"}
                </dd>
              </div>
              <div>
                <dt>Built with</dt>
                <dd className="code">FastAPI · Pandas · PostgreSQL · pytest</dd>
              </div>
              <div>
                <dt>Code</dt>
                <dd>
                  <External href="https://github.com/abdullah-forge/bank-reconciliation">GitHub</External>
                </dd>
              </div>
            </dl>
          </div>
          <table className="sample bt" id="table-1">
            <caption>
              <span className="lbl">Table&nbsp;1</span>The sample statement and ledger from the README (January 2024),
              and what comes back.
            </caption>
            <thead>
              <tr>
                <th scope="colgroup" colSpan={2} className="grp">
                  Bank statement
                </th>
                <th scope="colgroup" colSpan={2} className="grp">
                  Ledger
                </th>
                <th scope="col" rowSpan={2}>
                  Result
                </th>
              </tr>
              <tr>
                <th scope="col">Date</th>
                <th scope="col" className="a">
                  Amount
                </th>
                <th scope="col">Date</th>
                <th scope="col" className="a">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="d">15 Jan</td>
                <td className="a">100.00</td>
                <td className="d">15 Jan</td>
                <td className="a">100.00</td>
                <td>Matched</td>
              </tr>
              <tr>
                <td className="d">16 Jan</td>
                <td className="a">250.50</td>
                <td className="d">17 Jan</td>
                <td className="a">250.50</td>
                <td>Matched, 1 day apart</td>
              </tr>
              <tr>
                <td className="d">18 Jan</td>
                <td className="a">75.00</td>
                <td className="d none">
                  <None />
                </td>
                <td className="a none">
                  <None />
                </td>
                <td>Only in the statement</td>
              </tr>
              <tr>
                <td className="d none">
                  <None />
                </td>
                <td className="a none">
                  <None />
                </td>
                <td className="d">20 Jan</td>
                <td className="a">300.00</td>
                <td>Only in the ledger</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="t">Total</td>
                <td className="a">425.50</td>
                <td className="t">Total</td>
                <td className="a">650.50</td>
                <td>
                  Difference <span className="code">−225.00</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </article>

      <article className="proj" id="ai-sales-copilot" aria-labelledby="h-p2">
        <h3 className="sub" id="h-p2">
          <span className="num">2.2</span>AI Sales Copilot
        </h3>
        <div className="cols">
          <div className="proj-text">
            <p className="first">A sales assistant for marketing agencies.</p>
            <p>
              Gemini scores every incoming lead from 0 to 100 and suggests how to approach it. Each lead also gets its
              own AI chat that drafts follow-up emails or proposals and summarizes the lead on request.
            </p>
            <dl className="facts">
              <div>
                <dt>Built with</dt>
                <dd className="code">FastAPI · Gemini · Supabase · SQLAlchemy</dd>
              </div>
              <div>
                <dt>Links</dt>
                <dd>
                  <External href="https://ai-sales-copilot-one.vercel.app">Live app</External>,{" "}
                  <External href="https://github.com/abdullah-forge/ai-sales-copilot">code on GitHub</External>
                </dd>
              </div>
              <div>
                <dt>Note</dt>
                <dd className="quiet">
                  The backend runs on Render’s free tier, so the first request can take about a minute. Lead scoring and
                  the AI chat are in the agency dashboard, which needs an account.
                </dd>
              </div>
            </dl>
          </div>
          <figure id="fig-4">
            <Crop
              className="shot"
              src="/projects/ai-sales-copilot.jpg"
              width={799}
              height={609}
              area={{ x: 150, y: 194, w: 500, h: 206 }}
              alt="Headline of the AI Sales Copilot landing page: The AI Sales Assistant for Modern Agencies, with a line about automating lead qualification and proposals."
            />
            <figcaption>
              <span className="lbl">Fig.&nbsp;4</span>The live app’s landing page. Scoring and the chat sit behind the
              agency login.
            </figcaption>
          </figure>
        </div>
      </article>

      <article className="proj" id="aegis-swarm" aria-labelledby="h-p3">
        <h3 className="sub" id="h-p3">
          <span className="num">2.3</span>AEGIS-SWARM Threat Triage
        </h3>
        <div className="cols">
          <div className="proj-text">
            <p className="first">Catches phishing in SMS, emails, URLs and QR codes. A&nbsp;team project.</p>
            <p>
              An NLP agent (TF-IDF plus 13 security heuristics in a soft-voting ensemble, trained on{" "}
              <mark>24,206&nbsp;messages</mark>) scores the text with <mark>94.34%</mark> test accuracy. A visual agent
              decodes QR codes with OpenCV and classifies the hidden URL with <mark>96.44%</mark>
              <sup>
                <a className="fn" href="#note-1" id="ref-1" aria-label="Note 1">
                  1
                </a>
              </sup>
              .
            </p>
            <dl className="facts">
              <div>
                <dt>Built with</dt>
                <dd className="code">scikit-learn · OpenCV · Streamlit · Supabase</dd>
              </div>
              <div>
                <dt>Links</dt>
                <dd>
                  <External href="https://huggingface.co/spaces/Wall06/swarm">Live demo</External>,{" "}
                  <External href="https://github.com/abdullah-forge/aegis_swarm_">code on GitHub</External>,{" "}
                  <External href="https://huggingface.co/Wall06/AEGIS-SWARM">models on Hugging Face</External>
                </dd>
              </div>
              <div>
                <dt>Note</dt>
                <dd className="quiet">
                  Hosted on Hugging Face Spaces, which sleep when idle. If you see “This Space is sleeping”, click
                  “Restart this Space” and wait a minute or two.
                </dd>
              </div>
            </dl>
          </div>
          <figure id="fig-5">
            <Crop
              className="shot"
              src="/Aegis_swarm.jpg"
              width={1343}
              height={373}
              area={{ x: 400, y: 40, w: 545, h: 185 }}
              alt="AEGIS-SWARM title on a dark background, with a shield icon and the line Intelligent multi-modal threat triage."
            />
            <figcaption>
              <span className="lbl">Fig.&nbsp;5</span>Title of the live demo on Hugging Face Spaces.
            </figcaption>
          </figure>
        </div>
      </article>

      <article className="proj" id="flumenintel" aria-labelledby="h-p4">
        <h3 className="sub" id="h-p4">
          <span className="num">2.4</span>FlumenIntel
        </h3>
        <div className="cols">
          <div className="proj-text">
            <p className="first">A river health dashboard.</p>
            <p>
              It turns field readings (flow, temperature, sediment, pH, dissolved oxygen) into water-quality, habitat and
              erosion scores, adds a brightness-based turbidity score from a satellite image, and writes a
              plain-language report with an LLM (Llama on Groq, falling back to Gemini) as a PDF or audio file.
            </p>
            <dl className="facts">
              <div>
                <dt>Built with</dt>
                <dd className="code">Gradio · Groq · Gemini · Plotly</dd>
              </div>
              <div>
                <dt>Code</dt>
                <dd>
                  <External href="https://github.com/abdullah-forge/FlumenIntel-App">GitHub</External>
                </dd>
              </div>
            </dl>
          </div>
          <figure id="fig-6">
            <Crop
              className="shot"
              src="/flumen_intel.jpg"
              width={1337}
              height={591}
              area={{ x: 14, y: 186, w: 442, h: 340 }}
              alt="FlumenIntel input form in a dark theme, under the heading Hydrological Data: flow rate 45, temperature 18, sediment 2 and construction 0."
            />
            <figcaption>
              <span className="lbl">Fig.&nbsp;6</span>The input form with sample field readings. The scores and the
              report appear after a run.
            </figcaption>
          </figure>
        </div>
      </article>

      <div className="proj" id="smaller-projects">
        <h3 className="sub" id="h-p5">
          <span className="num">2.5</span>Smaller projects
        </h3>
        <table className="list bt" aria-labelledby="h-p5">
          <thead>
            <tr>
              <th scope="col">Project</th>
              <th scope="col">What it does</th>
              <th scope="col">Code</th>
            </tr>
          </thead>
          <tbody>
            {smallerProjects.map((project) => (
              <tr key={project.id} id={project.id}>
                <th scope="row">{project.name}</th>
                <td>
                  <span className="what">{project.what}</span>
                  <span className="stack">{project.stack}</span>
                </td>
                <td>
                  <External href={project.url}>GitHub</External>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <aside className="notes" aria-labelledby="h-notes">
        <h3 id="h-notes">Notes</h3>
        <p>Highlighted numbers come from these sources.</p>
        <ol>
          <li id="note-1">
            The training-set size and both accuracies, measured on held-out test sets, are from the{" "}
            <External href="https://huggingface.co/Wall06/AEGIS-SWARM">AEGIS-SWARM model card on Hugging Face</External>.
            The 24,206 messages come from the SMS Spam Collection and the Kaggle Phishing Email dataset.{" "}
            <a className="back" href="#ref-1">
              Back to 2.3
            </a>
          </li>
          <li id="note-2">
            The processing time, the matching tolerances and the sample files in Table&nbsp;1 are from the{" "}
            <External href="https://github.com/abdullah-forge/bank-reconciliation">project README on GitHub</External>.{" "}
            <a className="back" href="#ref-2">
              Back to 2.1
            </a>
          </li>
        </ol>
      </aside>
    </section>
  )
}
