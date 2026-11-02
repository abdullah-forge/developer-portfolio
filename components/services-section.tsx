"use client"

import { motion } from "framer-motion"

// Each service points at a project that proves it
const services = [
  {
    id: 1,
    title: "Backend APIs",
    description: "FastAPI + PostgreSQL APIs with JWT login, per-user access control and auto-generated docs, ready for your web or mobile app.",
    proof: "FastAPI JWT Auth & CRUD API",
  },
  {
    id: 2,
    title: "Data Cleanup & Automation",
    description: "Turn messy CSV and Excel exports into clean, matched data automatically: reconciliation, normalization and reports.",
    proof: "Bank Reconciliation API",
  },
  {
    id: 3,
    title: "AI Features for Your Business",
    description: "Lead scoring, AI-drafted emails and proposals, and per-lead AI chat assistants built on Gemini.",
    proof: "AI Sales Copilot",
  },
  {
    id: 4,
    title: "Machine Learning Models",
    description: "Classifiers for text and URLs, trained, evaluated and served behind a simple demo you can share.",
    proof: "AEGIS-SWARM Threat Triage",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-primary py-24 md:py-32 px-8 md:px-16">
      <div className="relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16">
          <div>
            <motion.span 
              className="text-primary-foreground/70 text-sm tracking-wider uppercase mb-4 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              [Services]
            </motion.span>
            <motion.h2 
              className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] text-primary-foreground uppercase italic"
              style={{ fontFamily: 'var(--font-display)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              What I Can<br />Build for You
            </motion.h2>
          </div>
          <motion.p
            className="text-primary-foreground/80 max-w-sm md:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fixed-scope freelance projects for startups, agencies and small businesses. Each one is backed by a project you can look at.
          </motion.p>
        </div>

        {/* Services list */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-t border-primary-foreground/20 last:border-b"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="flex items-start gap-4 mb-2 md:mb-0">
                <span className="text-primary-foreground/50 text-xs mt-1">•</span>
                <h3 className="text-primary-foreground font-medium uppercase tracking-wide text-sm md:text-base group-hover:translate-x-2 transition-transform">
                  {service.title}
                </h3>
              </div>
              <div className="flex items-center gap-8 md:gap-16 pl-6 md:pl-0">
                <div className="max-w-sm md:text-right">
                  <p className="text-primary-foreground/70 text-sm">
                    {service.description}
                  </p>
                  <a href="#projects" className="inline-block mt-1 text-primary-foreground text-xs font-semibold underline underline-offset-4 decoration-primary-foreground/40 hover:decoration-primary-foreground">
                    See: {service.proof}
                  </a>
                </div>
                <span className="text-primary-foreground/50 text-xs hidden md:block">
                  [{String(index + 1).padStart(2, '0')}]
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
