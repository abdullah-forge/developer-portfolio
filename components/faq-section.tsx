"use client"

import { motion } from "framer-motion"
import { Plus, ArrowRight } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I specialize in AI/ML development, hardware acceleration, full-stack web development, and system architecture. Whether you need a custom AI solution, FPGA implementation, or a modern web application, I tailor my services to fit your needs."
  },
  {
    question: "How does the development process work?",
    answer: "I follow an iterative approach: initial consultation, requirements gathering, design & prototyping, development with regular check-ins, testing, and deployment. Communication is key throughout the entire process."
  },
  {
    question: "How long does a project take?",
    answer: "Project timelines vary based on complexity and scope. A simple web application might take 2-4 weeks, while complex AI systems or hardware designs can take 2-3 months. I provide detailed timelines during the consultation phase."
  },
  {
    question: "What do I need to provide before we start?",
    answer: "I typically need a clear project brief, any existing assets or documentation, access to relevant systems if applicable, and regular availability for feedback and decision-making throughout the project."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, I offer flexible payment structures including milestone-based payments, monthly retainers for ongoing work, and project-based fixed pricing. We can discuss what works best for your budget."
  },
  {
    question: "How do we get started?",
    answer: "Simply reach out through the contact form or send me an email. We'll schedule an initial consultation to discuss your project, requirements, and timeline. From there, I'll provide a detailed proposal."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative bg-card py-24 md:py-32 px-8 md:px-16">
      <div className="relative z-10 max-w-4xl mx-auto">
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
              [FAQ]
            </motion.span>
            <motion.h2 
              className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] text-foreground uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              The Essentials
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
              A simple breakdown of how I work and what to expect.
            </p>
            <a 
              href="#contact"
              className="group flex items-center gap-2 text-sm font-medium text-primary"
            >
              Any specific questions?
            </a>
            <a 
              href="#contact"
              className="group flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-primary/90"
            >
              Contact Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <Plus 
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`} 
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
