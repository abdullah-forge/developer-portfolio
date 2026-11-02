"use client"

import { motion } from "framer-motion"

const focusCards = [
  {
    number: "1",
    title: "BACKEND APIs",
    description: "FastAPI, PostgreSQL, JWT auth, pytest and auto-generated API docs."
  },
  {
    number: "2",
    title: "AI APPS",
    description: "Lead scoring, report writing and chat built on Gemini and Llama."
  },
  {
    number: "3",
    title: "MACHINE LEARNING",
    description: "Phishing text and URL classifiers in scikit-learn, at 94% and 96% test accuracy."
  },
  {
    number: "4",
    title: "HARDWARE & RF",
    description: "VHDL designs, and ML for detecting wireless jamming."
  }
]

export function AboutSection() {
  return (
    <section id="about" className="relative bg-background py-24 md:py-32 px-8 md:px-16">
      <div className="relative z-10">
        {/* Section label */}
        <motion.span 
          className="text-primary text-sm tracking-wider uppercase mb-8 block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          [About Me]
        </motion.span>

        {/* Main headline - Avenzor style */}
        <motion.h2 
          className="text-[clamp(2rem,8vw,5rem)] font-bold tracking-tighter leading-[0.9] text-foreground uppercase max-w-5xl text-balance"
          style={{ fontFamily: 'var(--font-display)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Software That Saves People Hours
        </motion.h2>

        {/* Description row */}
        <motion.div 
          className="mt-16 flex flex-col md:flex-row md:items-start md:justify-between gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-muted-foreground max-w-md leading-relaxed">
            BS Computer Engineering, COMSATS University Islamabad, Lahore Campus. Graduating June 2027.
          </p>

          <div className="max-w-lg">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Most of my work is in Python: FastAPI backends with PostgreSQL, authentication and tests, plus AI features built on Gemini, Llama and scikit-learn. I like problems with a clear before and after, like matching bank statements to a ledger: a job that takes accountants hours by hand, and my API does in about two seconds.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I also work close to the hardware. With two classmates I designed a sparsity-aware, power-gated processing element in VHDL, and my final-year project uses machine learning to detect RF jamming in 2.4 GHz wireless networks.
            </p>
          </div>
        </motion.div>

        {/* Focus Cards */}
        <motion.div 
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {focusCards.map((card, index) => (
            <div 
              key={card.number}
              className="group"
            >
              <motion.div
                className="border-t border-border pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <span className="text-primary font-medium text-sm mb-3 block">
                  {card.number}. {card.title}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
