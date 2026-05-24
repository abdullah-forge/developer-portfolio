"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const techStack = [
  { name: "Python", level: 95 },
  { name: "TensorFlow/PyTorch", level: 90 },
  { name: "Verilog/VHDL", level: 85 },
  { name: "JavaScript/TypeScript", level: 80 },
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
              My Tech Arsenal
            </motion.h2>
          </div>
          <motion.div
            className="flex flex-col items-end gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground max-w-sm md:text-right">
              My go-to tools for crafting seamless digital experiences.
            </p>
            <a 
              href="#projects"
              className="group flex items-center gap-2 text-primary text-sm font-medium"
            >
              Full Stack
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Tech Stack Progress Bars */}
        <div className="space-y-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex items-center gap-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-40 flex items-center gap-3">
                <span className="text-foreground font-medium">{tech.name}</span>
              </div>
              <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                />
              </div>
              <span className="text-foreground font-medium w-16 text-right">{tech.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
