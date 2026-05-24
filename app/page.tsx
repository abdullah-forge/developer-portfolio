import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ServicesSection } from "@/components/services-section"
import { FAQSection } from "@/components/faq-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TechStackSection />
      <ProjectsSection />
      <CertificationsSection />
      <ServicesSection />
      <FAQSection />
      <NewsletterSection />
      <ContactSection />
    </main>
  )
}
