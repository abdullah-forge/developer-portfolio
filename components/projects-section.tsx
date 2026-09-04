"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Building2, Github, ExternalLink, Sparkles, ArrowUpRight, Cpu, Globe, Shield, Gamepad2, Database } from "lucide-react"
import Image from "next/image"

const projectCategories = ["all", "fastapi", "ai", "hardware", "apps"]

const projects = [
  {
    id: 1,
    title: "AEGIS Swarm",
    category: "ai",
    description: "An advanced multi-agent AI system designed for executing complex tasks autonomously, featuring collaborative agentic workflows and swarm communication layers.",
    tags: ["Agent Swarm", "Multi-Agent AI", "Hugging Face Space"],
    icon: Brain,
    image: "/Aegis_swarm.jpg",
    links: [
      { label: "Interactive Space", url: "https://huggingface.co/spaces/Wall06/swarm", icon: Sparkles },
      { label: "GitHub Repository", url: "https://github.com/abdullah-forge/aegis_swarm_", icon: Github }
    ]
  },
  {
    id: 2,
    title: "Bank Reconciliation API",
    category: "fastapi",
    description: "Automated bank statement reconciliation API with fuzzy matching. Upload two CSVs to get matched/unmatched transactions and balance discrepancies in 2 seconds with ±2 days date tolerance.",
    tags: ["FastAPI", "Pandas", "PostgreSQL", "Fuzzy Matching"],
    icon: Database,
    image: "/projects/bank-reconciliation.png",
    links: [
      { label: "Interactive API Docs", url: "https://bank-reconciliation-kg87.onrender.com/docs", icon: ExternalLink },
      { label: "GitHub Repository", url: "https://github.com/abdullah-forge/bank-reconciliation", icon: Github }
    ]
  },
  {
    id: 3,
    title: "Data Normalizer API",
    category: "fastapi",
    description: "Asynchronous REST API built with FastAPI that ingests dirty CSV, Excel, and JSON files, auto-detects schemas, normalizes column names and dates, handles missing values, and generates audit reports.",
    tags: ["FastAPI", "Async SQLAlchemy", "Pandas", "Pydantic v2"],
    icon: Cpu,
    image: "/projects/data-normalizer.png",
    links: [
      { label: "GitHub Repository", url: "https://github.com/abdullah-forge/data-normalizer-api", icon: Github }
    ]
  },
  {
    id: 4,
    title: "FastAPI JWT Auth & CRUD API",
    category: "fastapi",
    description: "Production-ready authentication and CRUD backend featuring JWT tokens, OAuth2 workflows, bcrypt password hashing, role-guarded endpoints, and SQLAlchemy ORM with PostgreSQL.",
    tags: ["FastAPI", "JWT Auth", "PostgreSQL", "OAuth2"],
    icon: Shield,
    image: "/projects/fastapi-jwt-auth.jpg",
    links: [
      { label: "GitHub Repository", url: "https://github.com/abdullah-forge/fastapi-jwt-auth-api", icon: Github }
    ]
  },
  {
    id: 5,
    title: "AEGIS-SWARM Model",
    category: "ai",
    description: "The core open-source large language model fine-tuned specifically for agentic swarm logic and multi-agent coordination. Deployed on Hugging Face.",
    tags: ["LLM", "Model Training", "Hugging Face Model"],
    icon: Cpu,
    image: "/projects/bizai-hub.jpg",
    links: [
      { label: "Hugging Face Model", url: "https://huggingface.co/Wall06/AEGIS-SWARM", icon: ExternalLink }
    ]
  },
  {
    id: 6,
    title: "AEGIS-SWARM Visual Agent",
    category: "ai",
    description: "The vision-language model component of the AEGIS Swarm, optimized for processing and acting on visual inputs in multi-agent workflows.",
    tags: ["Vision LLM", "Multimodal", "Hugging Face Model"],
    icon: Sparkles,
    image: "/projects/sakura-corp.jpg",
    links: [
      { label: "Visual Agent Model", url: "https://huggingface.co/Wall06/AEGIS-SWARM-Visual-Agent", icon: ExternalLink }
    ]
  },
  {
    id: 7,
    title: "FlumenIntel App",
    category: "ai",
    description: "An intelligent app providing real-time data analysis, intelligence parsing, and visualization. Powered by machine learning pipelines and hosted on Hugging Face Spaces.",
    tags: ["Data Analytics", "Machine Learning", "Interactive UI"],
    icon: Building2,
    image: "/flumen_intel.jpg",
    links: [
      { label: "Interactive Space", url: "https://huggingface.co/spaces/Wall06/FlumenIntel-App", icon: Sparkles },
      { label: "GitHub Repository", url: "https://github.com/abdullah-forge/FlumenIntel-App", icon: Github }
    ]
  },
  {
    id: 8,
    title: "8x8 Sparsity-Aware Dynamic Power Gating",
    category: "hardware",
    description: "A hardware-level 8x8 matrix multiplication architecture implementing dynamic power gating. It detects zero elements in real-time to gate the clock and power domains of processing units.",
    tags: ["Verilog/VHDL", "Hardware Design", "Power Optimization"],
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
    title: "Fake News Detector",
    category: "ai",
    description: "An AI-driven cybersecurity and intelligence tool that detects and flags misinformation in real-time. Built during a hackathon using NLP classification models.",
    tags: ["NLP", "Cybersecurity", "Text Classification", "Hackathon"],
    icon: Shield,
    image: "/projects/shield-ai.jpg",
    links: [
      { label: "GitHub Repository", url: "https://github.com/abdullah-forge/fake-news-detector", icon: Github }
    ]
  },
  {
    id: 11,
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
    id: 12,
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
              My Projects &<br />Models
            </motion.h2>
          </div>
          <motion.p 
            className="text-muted-foreground max-w-sm md:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A showcase of high-performance FastAPI backends, agent swarms, AI models, hardware accelerators, and desktop software.
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
                ? "AI & Agent Swarms"
                : cat === "hardware"
                ? "Hardware / VHDL"
                : "Games & Desktop"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const ProjectIcon = project.icon
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
                  {/* Project Image */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 bg-primary/10 rounded-xl text-primary border border-primary/10">
                        <ProjectIcon className="w-5 h-5" />
                      </div>
                      <h3 
                        className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-4">
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
