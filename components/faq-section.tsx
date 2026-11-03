import { Plus } from "lucide-react"
import { Section } from "@/components/section"

const faqs = [
  {
    question: "Are you available for full-time roles?",
    answer: "Yes. I graduate in June 2027 with a BS in Computer Engineering from COMSATS Lahore, and I’m open to junior backend, AI or full-stack roles from then, on-site or remote. Until then I’m available for freelance and part-time work. My CV is at the top of this page.",
  },
  {
    question: "What kind of freelance work do you take on?",
    answer: "Backend APIs, data cleanup and automation, AI features such as lead scoring, AI-drafted emails and chat assistants, and machine learning models. For each of these I’ve already built something similar that you can look at in the projects section.",
  },
  {
    question: "How does a project work?",
    answer: "We start with a short call to agree on scope and a timeline. I build in small steps and share progress regularly, so you can try a working version early. I finish with testing, deployment and a handover of the code and docs.",
  },
  {
    question: "How long does a project take?",
    answer: "It depends on scope. A focused API, automation or small web app usually takes 2–4 weeks, while larger AI systems can take 2–3 months. You get a detailed timeline before we start.",
  },
  {
    question: "How does payment work?",
    answer: "I work with milestone-based payments, a fixed project price, or a monthly retainer for ongoing work. We pick what suits your budget before starting.",
  },
  {
    question: "How do we get started?",
    answer: "Email me at whello544@gmail.com or message me on LinkedIn with a short description of what you need. I’ll reply with any questions, then send a proposal with scope, timeline and price.",
  },
]

export function FAQSection() {
  return (
    <Section id="faq" title="Questions people ask">
      <div className="max-w-3xl divide-y divide-border border-y border-border">
        {faqs.map((faq, index) => (
          <details key={faq.question} className="group py-5" open={index === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-medium [&::-webkit-details-marker]:hidden">
              {faq.question}
              <Plus className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45" aria-hidden="true" />
            </summary>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
