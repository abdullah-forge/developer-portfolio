import { Section } from "@/components/section"

const focusAreas = [
  {
    title: "Backend APIs",
    description: "FastAPI, PostgreSQL, JWT auth, pytest and auto-generated API docs.",
  },
  {
    title: "AI apps",
    description: "Lead scoring, report writing and chat built on Gemini and Llama.",
  },
  {
    title: "Machine learning",
    description: "Phishing text and URL classifiers in scikit-learn, at 94% and 96% test accuracy.",
  },
  {
    title: "Hardware and RF",
    description: "VHDL designs, and ML for detecting wireless jamming.",
  },
]

const tools = [
  { name: "Languages", items: ["Python", "SQL", "C++", "Java", "JavaScript / TypeScript"] },
  { name: "Backend", items: ["FastAPI", "Pydantic", "SQLAlchemy", "PostgreSQL", "Supabase", "JWT / OAuth2", "pytest"] },
  { name: "AI and data", items: ["Gemini & Groq LLM APIs", "Hugging Face", "scikit-learn", "TensorFlow / Keras", "OpenCV", "Pandas", "Gradio / Streamlit"] },
  { name: "Cloud and DevOps", items: ["AWS (Lambda, API Gateway, S3)", "Docker", "Vercel", "Render", "Git / GitHub"] },
  { name: "Hardware and RF", items: ["Verilog", "VHDL", "Xilinx Vivado", "GNU Radio", "RTL-SDR"] },
]

export function AboutSection() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-12 md:grid-cols-[3fr_2fr] md:gap-16">
        <div className="space-y-5 text-lg leading-relaxed">
          <p>
            Most of my work is in Python: FastAPI backends with PostgreSQL, authentication and tests, plus AI features built on Gemini, Llama and scikit-learn. I like problems with a clear before and after, like matching bank statements to a ledger: a job that takes accountants hours by hand, and my API does in about two seconds.
          </p>
          <p className="text-muted-foreground">
            I also work close to the hardware. With two classmates I designed a sparsity-aware, power-gated processing element in VHDL, and my final-year project uses machine learning to detect RF jamming in 2.4 GHz wireless networks.
          </p>
          <p className="text-base text-muted-foreground">
            BS Computer Engineering, COMSATS University Islamabad, Lahore Campus. Graduating June 2027.
          </p>
        </div>
        <dl className="grid content-start gap-6">
          {focusAreas.map((area) => (
            <div key={area.title} className="border-t border-border pt-4">
              <dt className="font-medium">{area.title}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{area.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      <h3 className="mt-16 font-serif text-2xl font-medium tracking-tight">Tools I use</h3>
      <dl className="mt-6 divide-y divide-border border-y border-border">
        {tools.map((group) => (
          <div key={group.name} className="grid gap-3 py-5 md:grid-cols-[170px_1fr] md:gap-8">
            <dt className="font-medium">{group.name}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded border border-border bg-card px-2 py-1 font-mono text-xs text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
