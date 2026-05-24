"use client"

import { ArrowRight, Download, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Portrait Image */}
      <div className="absolute inset-0">
        <Image
          src="/my-portrait.png"
          alt="Muhammad Abdullah"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 py-6">
        <motion.span 
          className="text-foreground font-bold text-lg tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          ABDULLAH
        </motion.span>
        
        <motion.div 
          className="hidden md:flex items-center gap-12 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#articles" className="hover:text-primary transition-colors">Articles</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </motion.div>

        {/* Hamburger menu for mobile */}
        <button className="md:hidden text-foreground p-2" aria-label="Menu">
          <div className="w-6 h-0.5 bg-foreground mb-1.5" />
          <div className="w-6 h-0.5 bg-foreground mb-1.5" />
          <div className="w-4 h-0.5 bg-foreground" />
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-between min-h-[calc(100vh-88px)] px-8 md:px-16 pb-16">
        <div className="flex-1 flex flex-col justify-end">
          {/* Top info row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-8">
            <motion.div 
              className="flex items-center gap-8 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span>© 2026</span>
              <span>Computer Engineering & AI — Lahore</span>
            </motion.div>

            {/* Connect button and tagline */}
            <motion.div 
              className="flex flex-col items-end gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a 
                href="#contact"
                className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium transition-all"
              >
                {"Let's Connect"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-muted-foreground text-right max-w-[200px]">
                Crafting intelligent systems with purpose & precision.
              </p>
            </motion.div>
          </div>

          {/* Main Name Typography - Avenzor style */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 
              className="text-[clamp(3rem,15vw,12rem)] font-bold tracking-tighter leading-[0.85] text-foreground uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="block">Muhammad</span>
              <span className="block text-primary">Abdullah</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Floating Bio Card - below fold */}
      <motion.div 
        className="relative z-10 px-8 md:px-16 pb-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-4xl">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            I’m Abdullah, a Computer Engineering student who loves exploring technology and building cool things from scratch. I’m passionate about AI, software development, networking, and hardware systems, and I’m always trying to learn something new every day.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a 
              href="/cv.pdf"
              className="group flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-full font-medium transition-all"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <a 
              href="#contact"
              className="group flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full font-medium transition-all"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/abdullah-forge" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-muted hover:bg-primary/20 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-foreground" />
            </a>
            <a 
              href="https://www.linkedin.com/in/m-abdullah-ce?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-muted hover:bg-primary/20 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-foreground" />
            </a>
            <a 
              href="https://x.com/_Abdulah_virk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-muted hover:bg-primary/20 rounded-full transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-foreground" />
            </a>
            <a 
              href="mailto:whello544@gmail.com"
              className="p-3 bg-muted hover:bg-primary/20 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-foreground" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
