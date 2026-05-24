"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, FileText, ArrowUpRight, ShieldCheck, Database, Cloud, BookOpen, BrainCircuit } from "lucide-react"
import Image from "next/image"

const categories = ["all", "coursera", "datacamp", "hackathons"]

const credentials = [
  // Hackathons & Badges
  {
    id: "hackathon-cert",
    title: "Hackathon Certificate",
    issuer: "Competition Organizer",
    date: "2026",
    category: "hackathons",
    type: "certificate",
    description: "Certificate of achievement/participation awarded for outstanding performance and project building during the hackathon.",
    fileUrl: "/hackathon certificate.pdf",
    icon: FileText,
    accent: "from-blue-500/20 to-cyan-500/20",
    borderAccent: "group-hover:border-cyan-500/50"
  },
  {
    id: "ieee-cert",
    title: "IEEE Society Certificate",
    issuer: "IEEE Student Branch",
    date: "2026",
    category: "hackathons",
    type: "certificate",
    description: "Certificate awarded for active contribution, leadership, and participation in IEEE Student Branch society events and engineering initiatives.",
    fileUrl: "/IEEE-certificate.pdf",
    icon: Award,
    accent: "from-blue-500/20 to-indigo-500/20",
    borderAccent: "group-hover:border-blue-500/50"
  },
  {
    id: "completion-badge",
    title: "Challenge Completion Badge",
    issuer: "Google Cloud / Qwiklabs",
    date: "2026",
    category: "hackathons",
    type: "badge",
    description: "Earned for successfully completing technical track challenges and hands-on labs.",
    fileUrl: "/Challenge Completion Badge_Light.webp",
    imageUrl: "/Challenge Completion Badge_Light.webp",
    icon: Award,
    accent: "from-amber-500/20 to-orange-500/20",
    borderAccent: "group-hover:border-amber-500/50"
  },
  
  // Coursera
  {
    id: "coursera-genai-everyone",
    title: "Generative AI for Everyone",
    issuer: "DeepLearning.AI",
    date: "2026",
    category: "coursera",
    type: "certificate",
    description: "Instructed by AI pioneer Andrew Ng, providing a comprehensive understanding of generative AI technologies, workflows, and business applications.",
    fileUrl: "https://coursera.org/share/6260a7d4dab0d85835460e8a6ddf681a",
    icon: BrainCircuit,
    accent: "from-purple-500/20 to-pink-500/20",
    borderAccent: "group-hover:border-purple-500/50"
  },
  {
    id: "coursera-google-genai",
    title: "Create Generative AI Apps on Google Cloud",
    issuer: "Google Cloud",
    date: "2026",
    category: "coursera",
    type: "certificate",
    description: "Focused on building and deploying generative AI applications using Vertex AI and Large Language Models (LLMs) on Google Cloud.",
    fileUrl: "https://coursera.org/share/58e4f98a549e85130eccbc852e3c8690",
    icon: Cloud,
    accent: "from-sky-500/20 to-blue-500/20",
    borderAccent: "group-hover:border-sky-500/50"
  },
  {
    id: "coursera-py-structures",
    title: "Python Data Structures",
    issuer: "University of Michigan",
    date: "2025",
    category: "coursera",
    type: "certificate",
    description: "Mastered core user data structures of the Python programming language including lists, dictionaries, tuples, and file processing.",
    fileUrl: "https://coursera.org/share/2825ffaf241cbabfb22af99e745f4f3a",
    icon: Database,
    accent: "from-yellow-500/20 to-orange-500/20",
    borderAccent: "group-hover:border-yellow-500/50"
  },
  {
    id: "coursera-py-everybody",
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan",
    date: "2025",
    category: "coursera",
    type: "certificate",
    description: "Learned variables, conditional execution, functions, and loops in Python programming from the ground up.",
    fileUrl: "https://coursera.org/share/a061ebbfb835b8c8f34940219385da0f",
    icon: BookOpen,
    accent: "from-emerald-500/20 to-teal-500/20",
    borderAccent: "group-hover:border-emerald-500/50"
  },

  // DataCamp
  {
    id: "dc-apis-py",
    title: "Introduction to APIs in Python",
    issuer: "DataCamp",
    date: "2026",
    category: "datacamp",
    type: "course",
    description: "Learned how to interact with web APIs, request data, and parse JSON formats inside Python environments.",
    fileUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/860161036819129cc6a9174eaa8051896abc2d42",
    icon: FileText,
    accent: "from-green-500/20 to-emerald-500/20",
    borderAccent: "group-hover:border-green-500/50"
  },
  {
    id: "dc-join-sql",
    title: "Joining Data in SQL",
    issuer: "DataCamp",
    date: "2026",
    category: "datacamp",
    type: "course",
    description: "Mastered joins (inner, outer, self, cross), set theory, and subqueries in SQL databases.",
    fileUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/d56e301030d35037c3b89edf8186b8a901c2fd2f",
    icon: Database,
    accent: "from-indigo-500/20 to-blue-500/20",
    borderAccent: "group-hover:border-indigo-500/50"
  },
  {
    id: "dc-import-py-int",
    title: "Intermediate Importing Data in Python",
    issuer: "DataCamp",
    date: "2026",
    category: "datacamp",
    type: "course",
    description: "Learned advanced data ingestion techniques for web scraping, databases, API queries, and structured file formats.",
    fileUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/58d3dc31e0a4d3e35108895043cadf661b60f7dc",
    icon: FileText,
    accent: "from-teal-500/20 to-cyan-500/20",
    borderAccent: "group-hover:border-teal-500/50"
  },
  {
    id: "dc-sql-int",
    title: "Intermediate SQL",
    issuer: "DataCamp",
    date: "2026",
    category: "datacamp",
    type: "course",
    description: "Learned to write subqueries, window functions, and case statements to solve complex database analytics tasks.",
    fileUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/c011213b390e78346958d4ba3a65fea075a0fb08",
    icon: Database,
    accent: "from-indigo-500/20 to-purple-500/20",
    borderAccent: "group-hover:border-purple-500/50"
  },
  {
    id: "dc-import-py-intro",
    title: "Introduction to Importing Data in Python",
    issuer: "DataCamp",
    date: "2026",
    category: "datacamp",
    type: "course",
    description: "Acquired basics of loading flat files (CSVs, TXTs), SAS, Stata, and HDF5 files into pandas DataFrames.",
    fileUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/5e6aabbe3a3eafa4edd667440b5fa0bb945ec3f3",
    icon: FileText,
    accent: "from-orange-500/20 to-amber-500/20",
    borderAccent: "group-hover:border-orange-500/50"
  },
  {
    id: "dc-py-dev-int",
    title: "Intermediate Python for Developers",
    issuer: "DataCamp",
    date: "2026",
    category: "datacamp",
    type: "course",
    description: "Deepened knowledge in python developer environments, dictionary comprehensions, scope, and script debugging.",
    fileUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/10bcc9c4dc7556cc85c2ea26acc99f64211d48b1",
    icon: BookOpen,
    accent: "from-yellow-500/20 to-lime-500/20",
    borderAccent: "group-hover:border-yellow-500/50"
  },
  {
    id: "dc-sql-intro",
    title: "Introduction to SQL",
    issuer: "DataCamp",
    date: "2026",
    category: "datacamp",
    type: "course",
    description: "Gained core querying fundamentals using SELECT, filtering, grouping, and aggregations.",
    fileUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/fc464ad54821cd6a83b245b83add0f8e804a02ee",
    icon: Database,
    accent: "from-violet-500/20 to-purple-500/20",
    borderAccent: "group-hover:border-violet-500/50"
  },
  {
    id: "dc-py-dev-intro",
    title: "Introduction to Python for Developers",
    issuer: "DataCamp",
    date: "2026",
    category: "datacamp",
    type: "course",
    description: "Standard programming constructs covering lists, loops, variables, and writing functions in Python.",
    fileUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a33b629a4263eee716d5895ccc6257d3a2b16973",
    icon: BookOpen,
    accent: "from-emerald-500/20 to-emerald-700/20",
    borderAccent: "group-hover:border-emerald-500/50"
  },
  {
    id: "dc-data-eng",
    title: "Understanding Data Engineering",
    issuer: "DataCamp",
    date: "2026",
    category: "datacamp",
    type: "course",
    description: "Conceptualised big data infrastructure, ETL/ELT pipelines, data lakes, warehouses, and storage orchestration.",
    fileUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/767841f4d1328e39b5abf7e99e8b6c09bf4291d4",
    icon: Database,
    accent: "from-sky-500/20 to-cyan-500/20",
    borderAccent: "group-hover:border-cyan-500/50"
  },
  {
    id: "dc-cloud",
    title: "Understanding Cloud Computing",
    issuer: "DataCamp",
    date: "2026",
    category: "datacamp",
    type: "course",
    description: "Learned cloud services models (IaaS, PaaS, SaaS) and deployment structures on AWS, GCP, and Azure platforms.",
    fileUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/96526339c1569ee69e049a78ae4876624d0dec80",
    icon: Cloud,
    accent: "from-blue-500/20 to-indigo-500/20",
    borderAccent: "group-hover:border-blue-500/50"
  }
]

export function CertificationsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredCredentials = credentials.filter(
    (cred) => activeCategory === "all" || cred.category === activeCategory
  )

  return (
    <section id="certifications" className="relative bg-background py-24 md:py-32 px-8 md:px-16 border-t border-border/40">
      {/* Decorative Background Blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <motion.span 
              className="text-primary text-sm tracking-wider uppercase mb-4 block font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              [ Credentials & Achievements ]
            </motion.span>
            <motion.h2 
              className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] text-foreground uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Badges &<br />Certificates
            </motion.h2>
          </div>
          <motion.p 
            className="text-muted-foreground max-w-sm md:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Verifiable proof of technical courses completed, challenges conquered, and achievements.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted/30 text-muted-foreground border-border/40 hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {cat === "all" ? "All Credentials" : cat === "hackathons" ? "Hackathons & Society" : cat}
            </button>
          ))}
        </div>

        {/* Credentials Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCredentials.map((cred) => {
              const IconComponent = cred.icon
              return (
                <motion.a
                  layout
                  href={cred.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={cred.id}
                  className="group relative bg-card/30 backdrop-blur-sm border border-border/60 hover:bg-card/60 rounded-2xl p-6 flex flex-col justify-between min-h-[300px] transition-all duration-300 cursor-pointer block"
                >
                  {/* Glowing border effect - pointer-events-none stops it from blocking clicks */}
                  <div className={`absolute inset-0 rounded-2xl border border-transparent transition-all duration-300 pointer-events-none ${cred.borderAccent}`} />

                  <div>
                    <div className="flex items-start justify-between mb-5">
                      {/* Image / Icon */}
                      {cred.imageUrl ? (
                        <div className="relative w-14 h-14 bg-muted/40 rounded-xl p-1 flex items-center justify-center border border-border/40 overflow-hidden">
                          <Image
                            src={cred.imageUrl}
                            alt={cred.title}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                      ) : (
                        <div className={`p-3.5 rounded-xl bg-gradient-to-br ${cred.accent} text-primary border border-primary/10`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                      )}

                      <span className="text-[10px] text-muted-foreground bg-muted/50 px-2.5 py-0.5 rounded-full border border-border/30 font-mono tracking-wider">
                        {cred.type.toUpperCase()}
                      </span>
                    </div>

                    <h3 
                      className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {cred.title}
                    </h3>
                    <p className="text-xs text-muted-foreground/80 font-medium mb-3">
                      {cred.issuer} • <span className="text-muted-foreground/50">{cred.date}</span>
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {cred.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline">
                      Verify Credential
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <ShieldCheck className="w-4.5 h-4.5 text-emerald-500/60" />
                  </div>
                </motion.a>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
