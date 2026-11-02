"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const techStack = [
  { group: "Languages", items: ["Python", "SQL", "C++", "Java", "JavaScript / TypeScript"] },
  { group: "Backend", items: ["FastAPI", "Pydantic", "SQLAlchemy", "PostgreSQL", "Supabase", "JWT / OAuth2", "pytest"] },
  { group: "AI & Data", items: ["Gemini & Groq LLM APIs", "Hugging Face", "scikit-learn", "TensorFlow / Keras", "OpenCV", "Pandas", "Gradio / Streamlit"] },
  { group: "Cloud & DevOps", items: ["AWS (Lambda, API Gateway, S3)", "Docker", "Vercel", "Render", "Git / GitHub"] },
  { group: "Hardware & RF", items: ["Verilog", "VHDL", "Xilinx Vivado", "GNU Radio", "RTL-SDR"] },
]

export function TechStackSection() {
  return (
    <section className="relative bg-card py-24 md:py-32 px-8 md:px-16">
      <div className="relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16">
          <div>
            <motion.span 
              className="text-muted-foreground text-sm tracking-wider uppercase mb-4 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              [Tech Stack]
            </motion.span>
            <motion.h2 
              className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] text-foreground uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Tools I Build With
            </motion.h2>
          </div>
          <motion.div
            className="flex flex-col md:items-end gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground max-w-sm md:text-right">
              The languages, frameworks and platforms behind my projects and coursework.
            </p>
            <a
              href="#projects"
              className="group flex items-center gap-2 text-primary text-sm font-medium"
            >
              See them in my projects
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Tech Stack Groups */}
        <div className="space-y-0">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.group}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 border-t border-border last:border-b"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="md:w-48 shrink-0 text-foreground font-medium">{tech.group}</span>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-muted/40 text-foreground text-sm rounded-full border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
