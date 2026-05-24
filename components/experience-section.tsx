"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const workExperience = [
  {
    id: "mky-global",
    role: "Intern Web Developer",
    company: "MKY Global Forwarding",
    location: "Remote",
    period: "Mar – Jul 2025",
    bullets: [
      "Deployed a logistics website for a startup, improving operational efficiency.",
      "Collaborated with developers on real-world projects using HTML, CSS, JS, SQL."
    ]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-background py-24 md:py-32 px-8 md:px-16 border-t border-border/40">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section label */}
        <motion.span 
          className="text-primary text-sm tracking-wider uppercase mb-8 block font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          [ Experience ]
        </motion.span>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16">
          <motion.h2 
            className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] text-foreground uppercase max-w-lg"
            style={{ fontFamily: 'var(--font-display)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Where I've worked
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-sm md:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Developing functional, high-performance web applications in collaborative team environments.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-border/80 pl-8 ml-4 space-y-12">
          {workExperience.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="relative group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              {/* Glowing timeline node */}
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-card border-2 border-primary group-hover:bg-primary transition-all duration-300 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-primary group-hover:bg-card transition-colors duration-300" />
              </div>

              {/* Node glow effect */}
              <div className="absolute -left-[45px] top-0.5 w-8 h-8 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

              {/* Experience Card */}
              <div className="bg-card/30 backdrop-blur-sm border border-border/60 rounded-3xl p-8 hover:bg-card/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 
                      className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm text-muted-foreground font-medium">
                      <span className="flex items-center gap-1.5 text-foreground font-semibold">
                        <Briefcase className="w-4 h-4 text-primary" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-muted-foreground/60" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  
                  {/* Period badge */}
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted/30 border border-border/40 text-xs font-semibold text-primary rounded-full font-mono self-start md:self-center">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>

                {/* Bullet points */}
                <ul className="space-y-3.5 text-muted-foreground text-sm leading-relaxed max-w-3xl list-none pl-0">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1 select-none">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
