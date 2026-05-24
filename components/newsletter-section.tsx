"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="relative bg-background py-24 md:py-32 px-8 md:px-16">
      <div className="relative z-10">
        {/* Section label */}
        <motion.span 
          className="text-muted-foreground text-sm tracking-wider uppercase mb-8 block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          [Newsletter]
        </motion.span>

        {/* Main headline */}
        <motion.h2 
          className="text-[clamp(2rem,8vw,5rem)] font-bold tracking-tighter leading-[0.9] text-foreground uppercase max-w-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Never Miss A Trend
        </motion.h2>

        {/* Description and form */}
        <motion.div 
          className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Join the newsletter for expert tips, industry updates, and creative inspiration.
          </p>
          
          {/* Newsletter form */}
          <form className="flex items-center gap-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="youremail@example.com"
              className="flex-1 md:w-80 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground py-3 focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              className="group flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:bg-primary/90"
            >
              Submit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
