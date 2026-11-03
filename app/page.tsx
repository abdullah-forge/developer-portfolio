import { Masthead } from "@/components/masthead"
import { FrontMatter } from "@/components/front-matter"
import { OverviewSection } from "@/components/overview-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { CertificatesSection } from "@/components/certificates-section"
import { FreelanceSection } from "@/components/freelance-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

// The page reads like a numbered technical report: front matter, then sections 1 to 6
export default function HomePage() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Masthead />
      <main id="main">
        <FrontMatter />
        <OverviewSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificatesSection />
        <FreelanceSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
