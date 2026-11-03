import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ProofStrip } from "@/components/proof-strip"
import { ProjectsSection } from "@/components/projects-section"
import { ServicesSection } from "@/components/services-section"
import { ExperienceSection } from "@/components/experience-section"
import { AboutSection } from "@/components/about-section"
import { CertificationsSection } from "@/components/certifications-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

// Order follows what visitors look for first: who, proof, work, how I can help, then the details
export default function HomePage() {
  return (
    <>
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow"
      >
        Skip to projects
      </a>
      <SiteHeader />
      <main id="top">
        <HeroSection />
        <ProofStrip />
        <ProjectsSection />
        <ServicesSection />
        <ExperienceSection />
        <AboutSection />
        <CertificationsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
