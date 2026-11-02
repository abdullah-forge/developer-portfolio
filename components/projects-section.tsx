"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Github, ExternalLink, Sparkles, ArrowUpRight, Cpu, Globe, Shield, Gamepad2, Database, Waves } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Image from "next/image"

type ProjectLink = { label: string; url: string; icon: LucideIcon; live?: boolean }

type Project = {
  id: number
  title: string
  category: string
  description: string
  tags: string[]
  icon: LucideIcon
  image?: string
  note?: string
  links: ProjectLink[]
}

const projectCategories = ["all", "fastapi", "ai", "hardware", "apps"]

const HF_WAKE_NOTE = "Hosted on Hugging Face Spaces, which sleep when idle. If you see 'This Space is sleeping', click 'Restart this Space' and wait a minute or two."

const projects: Project[] = [
  {
    id: 1,
    title: "AI Sales Copilot",
    category: "ai",
    description: "Sales assistant for marketing agencies. Gemini scores every incoming lead from 0 to 100 and suggests how to approach it, and each lead gets its own AI chat that drafts follow-up emails or proposals and summarizes the lead on request.",
    tags: ["FastAPI", "Gemini", "Supabase", "SQLAlchemy"],
    icon: Bot,
    image: "/projects/ai-sales-copilot.jpg",
    note: "The backend runs on Render's free tier, so the first request can take about a minute. Lead scoring and the AI chat are in the agency dashboard, which needs an account.",
    links: [
      { label: "Live App", url: "https://ai-sales-copilot-one.vercel.app", icon: ExternalLink, live: true },
      { label: "GitHub Repository", url: "https://github.com/abdullah-forge/ai-sales-copilot", icon: Github }
    ]
  },
  {
    id: 2,
    title: "Bank Reconciliation API",
    category: "fastapi",
    description: "Matching bank statements to a ledger by hand takes accountants hours. Upload both CSVs and this API returns matched and unmatched transactions plus the balance difference in about 2 seconds, using fuzzy matching with ±2-day date tolerance.",
    tags: ["FastAPI", "Pandas", "PostgreSQL", "pytest"],
    icon: Database,
    image: "/projects/bank-reconciliation.png",
    links: [
      { label: "GitHub Repository", url: "https://github.com/abdullah-forge/bank-reconciliation", icon: Github }
    ]
  },
  {
    id: 3,
    title: "AEGIS-SWARM Threat Triage",
    category: "ai",
    description: "Catches phishing in SMS, emails, URLs and QR codes. An NLP agent (TF-IDF plus 13 security heuristics in a soft-voting ensemble, trained on 24,206 messages) scores the text with 94% test accuracy, and a visual agent decodes QR codes with OpenCV and classifies the hidden URL with 96%. Team project.",
    tags: ["scikit-learn", "OpenCV", "Streamlit", "Supabase"],
    icon: Shield,
    image: "/Aegis_swarm.jpg",
    note: HF_WAKE_NOTE,
    links: [
      { label: "Live Demo", url: "https://huggingface.co/spaces/Wall06/swarm", icon: Sparkles, live: true },
      { label: "GitHub Repository", url: "https://github.com/abdullah-forge/aegis_swarm_", icon: Github },
      { label: "Models on Hugging Face", url: "https://huggingface.co/Wall06/AEGIS-SWARM", icon: ExternalLink }
    ]
  },
  {
    id: 4,
    title: "FlumenIntel",
    category: "ai",
    description: "River health dashboard. Turns field readings (flow, temperature, sediment, pH, dissolved oxygen) into water-quality, habitat and erosion scores, adds a brightness-based turbidity score from a satellite image, and writes a plain-language report with an LLM (Llama on Groq, falling back to Gemini) as a PDF or audio file.",
    tags: ["Gradio", "Groq", "Gemini", "Plotly"],
    icon: Waves,
    image: "/flumen_intel.jpg",
    links: [
      { label: "GitHub Repository", url: "https://github.com/abdullah-forge/FlumenIntel-App", icon: Github }
    ]
  },
  {
    id: 5,
    title: "Data Normalizer API",
    category: "fastapi",
    description: "Asynchronous FastAPI service that ingests messy CSV, Excel and JSON files, detects the schema, standardizes column names and dates, handles missing values, and returns an audit report (detected schema, missing values and processing stats).",
    tags: ["FastAPI", "Async SQLAlchemy", "Pandas", "Pydantic v2"],
    icon: Cpu,
    image: "/projects/data-normalizer.png",
    links: [
      { label: "GitHub Repository", url: "https://github.com/abdullah-forge/data-normalizer-api", icon: Github }
    ]
  },
  {
    id: 6,
    title: "FastAPI JWT Auth & CRUD API",
    category: "fastapi",
    description: "Authentication and CRUD backend with JWT access tokens, the OAuth2 password flow, bcrypt password hashing, owner-only edit and delete, and SQLAlchemy with PostgreSQL.",
    tags: ["FastAPI", "JWT Auth", "PostgreSQL", "OAuth2"],
    icon: Shield,
    links: [
      { label: "GitHub Repository", url: "https://github.com/abdullah-forge/fastapi-jwt-auth-api", icon: Github }
    ]
  },
  {
    id: 7,
    title: "Fake News Detector",
    category: "ai",
    description: "Paste a news article to get a fake-news likelihood, its sentiment, an LLM-written explanation of the prediction, and related articles to cross-check it against. Built at a hackathon.",
    tags: ["NLP", "Hugging Face", "Groq", "Hackathon"],
    icon: Sparkles,
    links: [
      { label: "GitHub Repository", url: "https://github.com/abdullah-forge/fake-news-detector", icon: Github }
    ]
  },
  {
    id: 8,
    title: "Sparsity-Aware Processing Element",
    category: "hardware",
    description: "VHDL design of a power-gated processing element (8-bit multiply, 32-bit accumulate), built as the basic block of an 8×8 systolic array for neural-network inference. When a weight is zero it skips the multiply and powers the multiplier down through a sleep transistor. Simulated in Quartus, with transistor-level layout in Microwind. Team project of three.",
    tags: ["VHDL", "Quartus", "Microwind", "Power Gating"],
    icon: Cpu,
    image: "/8x8Sparsity_Aware.jpg",
    links: [
      { label: "GitHub Repository", url: "https://github.com/abdullah-forge/8x8-Sparsisty-aware-for-dynamic-power-gating", icon: Github }
    ]
  },
  {
    id: 9,
    title: "Nation-Explorer",
    category: "apps",
    description: "A comprehensive Object-Oriented Programming (OOP) project designed to explore and search nation metrics, demographics, and geographical data using C++ / Java design patterns.",
    tags: ["OOP Design", "C++ / Java", "Data Parsing"],
    icon: Globe,
    image: "/nation_explorer.jpeg",
    links: [
      { label: "GitHub Repository", url: "https://github.com/abdullah-forge/Nation-Explorer", icon: Github }
    ]
  },
  {
    id: 10,
    title: "Classic Pong Game",
    category: "apps",
    description: "A replica of the classic arcade Pong game, showcasing 2D graphics rendering, responsive control logic, and physics-based paddle-ball collision calculations.",
    tags: ["Game Dev", "GUI / Graphics", "Collision Logic"],
    icon: Gamepad2,
    image: "/pong_game.jpg",
    links: [
      { label: "GitHub Repository", url: "https://github.com/abdullah-forge/Pong_game", icon: Github }
    ]
  },
  {
    id: 11,
    title: "Retro Snake Game",
    category: "apps",
    description: "A dynamic grid-based Snake game featuring real-time collision detection, score tracking, and food generation algorithms.",
    tags: ["Game Dev", "Algorithms", "GUI Design"],
    icon: Gamepad2,
    image: "/snake_game.jpg",
    links: [
      { label: "GitHub Repository", url: "https://github.com/abdullah-forge/Snake_game", icon: Github }
    ]
  }
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  )

  return (
    <section id="projects" className="relative bg-background py-24 md:py-32 px-8 md:px-16">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <motion.span
              className="text-muted-foreground text-sm tracking-wider uppercase mb-4 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              [Projects]
            </motion.span>
            <motion.h2
              className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] text-foreground uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {"Things I've"}<br />Built
            </motion.h2>
          </div>
          <motion.p
            className="text-muted-foreground max-w-sm md:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Projects marked Live are deployed and open in your browser. Free-hosted demos can take a minute to wake up. Every project links to its code.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted/30 text-muted-foreground border-border/40 hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {cat === "all"
                ? "All Projects"
                : cat === "fastapi"
                ? "FastAPI & Backend"
                : cat === "ai"
                ? "AI & Machine Learning"
                : cat === "hardware"
                ? "Hardware / VHDL"
                : "Games & Desktop"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const ProjectIcon = project.icon
              const hasLiveDemo = project.links.some((link) => link.live)
              return (
                <motion.article
                  layout
                  key={project.id}
                  className="group relative bg-card/40 backdrop-blur-sm border border-border/80 rounded-3xl overflow-hidden flex flex-col justify-between"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                <div>
                  {/* Project Image (icon panel when there is no real screenshot) */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/25 via-secondary to-card">
                        <ProjectIcon className="w-14 h-14 text-primary/80" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    {hasLiveDemo && (
                      <span className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-emerald-400/40 text-emerald-300 text-[10px] font-bold uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Live
                      </span>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-8">
                    <div className="mb-4">
                      <div className="inline-flex p-2.5 mb-4 bg-primary/10 rounded-xl text-primary border border-primary/10">
                        <ProjectIcon className="w-5 h-5" />
                      </div>
                      <h3
                        className="text-2xl leading-tight font-bold text-foreground group-hover:text-primary transition-colors"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-accent/80 text-white text-xs rounded-full border border-primary/20 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Links / CTAs */}
                <div className="px-8 pb-8 pt-2 border-t border-border/40 bg-card/25 flex flex-col gap-2">
                  <span className="text-[10px] text-muted-foreground uppercase font-mono tracking-widest block mb-1">
                    Available Links & Deployments:
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {project.links.map((link) => {
                      const LinkIcon = link.icon
                      return (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-muted/40 hover:bg-primary/15 border border-border/60 text-xs font-semibold text-foreground hover:text-primary transition-all duration-300"
                        >
                          <span className="flex items-center gap-2">
                            <LinkIcon className="w-3.5 h-3.5" />
                            {link.label}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                        </a>
                      )
                    })}
                  </div>
                  {project.note && (
                    <p className="text-[11px] text-muted-foreground leading-relaxed mt-1">{project.note}</p>
                  )}
                </div>
              </motion.article>
            )
          })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
