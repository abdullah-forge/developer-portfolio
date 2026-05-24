"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react"

const menuLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Articles", href: "#articles" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { label: "GitHub", href: "https://github.com/abdullah-forge", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/m-abdullah-ce?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: Linkedin },
  { label: "Twitter", href: "https://x.com/_Abdulah_virk", icon: Twitter },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-card py-24 md:py-32 px-8 md:px-16">
      <div className="relative z-10">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-foreground leading-relaxed">
              Crafting intelligent systems with precision & creativity—{"let's"} build something extraordinary.
            </p>
          </motion.div>

          {/* Contact Me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-muted-foreground text-sm tracking-wider uppercase mb-4 block">
              [Contact Me]
            </span>
            <div className="space-y-3">
              <a 
                href="mailto:whello544@gmail.com"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                whello544@gmail.com
              </a>
              <a 
                href="#contact"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4 text-primary" />
                book-a-call
              </a>
            </div>
          </motion.div>

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-muted-foreground text-sm tracking-wider uppercase mb-4 block">
              [Menu]
            </span>
            <div className="space-y-2">
              {menuLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="block text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-muted-foreground text-sm tracking-wider uppercase mb-4 block">
              [Social Media]
            </span>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Large Name Watermark */}
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 
            className="text-[clamp(4rem,20vw,16rem)] font-bold tracking-tighter leading-none text-muted/30 uppercase select-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            ABDULLAH
          </h2>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-center md:justify-between pt-8 border-t border-border mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4 md:mb-0">
            <span>© 2026</span>
            <span>UHub</span>
            <span>—</span>
            <span>Vercel</span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms and Conditions</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
