"use client"

import { motion } from "framer-motion"

const services = [
  {
    id: 1,
    title: "AI & Machine Learning",
    description: "Developing intelligent systems using deep learning, NLP, and computer vision technologies",
  },
  {
    id: 2,
    title: "Hardware Acceleration",
    description: "Designing custom accelerators and FPGA implementations for high-performance computing",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description: "Building scalable web applications with modern frameworks and cloud infrastructure",
  },
  {
    id: 4,
    title: "System Architecture",
    description: "Creating robust system designs that bridge software and hardware efficiently",
  },
  {
    id: 5,
    title: "Research & Development",
    description: "Conducting research in emerging technologies and translating findings into practical solutions",
  },
  {
    id: 6,
    title: "Technical Consulting",
    description: "Providing expertise in AI integration, performance optimization, and system design",
  },
]

export function ServicesSection() {
  return (
    <section className="relative bg-primary py-24 md:py-32 px-8 md:px-16">
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
              Design Solutions,<br />Tailored for You
            </motion.h2>
          </div>
          <motion.p 
            className="text-primary-foreground/80 max-w-sm md:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            High-quality engineering and AI solutions that make a difference.
          </motion.p>
        </div>

        {/* Services list */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-t border-primary-foreground/20 last:border-b cursor-pointer"
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
              <div className="flex items-center gap-8 md:gap-16">
                <p className="text-primary-foreground/70 text-sm max-w-xs text-right hidden md:block">
                  {service.description}
                </p>
                <span className="text-primary-foreground/50 text-xs">
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
