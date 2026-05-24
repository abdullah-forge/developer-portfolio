"use client"

import { motion } from "framer-motion"

const philosophyCards = [
  {
    number: "1",
    title: "DESIGN PHILOSOPHY",
    description: "Where Aesthetics Meet Functionality"
  },
  {
    number: "2", 
    title: "MY APPROACH",
    description: "Precision, Innovation & Impact"
  },
  {
    number: "3",
    title: "WHAT DRIVES ME",
    description: "Passion for Solving Complex Problems"
  },
  {
    number: "4",
    title: "THE EXPERIENCE",
    description: "Blending Theory with Real-World Applications"
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
          An Imaginative Brain Behind the Displays
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
            Designing systems that feel as good as they perform.
          </p>
          
          <div className="max-w-lg">
            <p className="text-muted-foreground leading-relaxed mb-6">
              I’m Abdullah, a Computer Engineering student who loves exploring technology and building cool things from scratch. I’m passionate about AI, software development, networking, and hardware systems, and I’m always trying to learn something new every day.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I enjoy solving problems, working on real-world projects, and improving my skills in C++, Java, and Python. My goal is to grow into a skilled developer and build innovative tech solutions that can make a real impact.
            </p>
          </div>
        </motion.div>

        {/* Philosophy Cards - matching Avenzor */}
        <motion.div 
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {philosophyCards.map((card, index) => (
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
                  {`"${card.description}"`}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
