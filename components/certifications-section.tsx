import Image from "next/image"
import { ArrowUpRight, Award } from "lucide-react"
import { Section } from "@/components/section"

const CREDLY_PROFILE = "https://www.credly.com/users/muhammad-abdullah.d1d0395c"
const DATACAMP = "https://www.datacamp.com/completed/statement-of-accomplishment/course"

const highlights = [
  {
    id: "pec-genai",
    title: "Generative AI Application Developer",
    issuer: "Pakistan Engineering Council, with PakAngels, iCodeGuru and Aspire Pakistan",
    date: "2025",
    badge: "Top performer",
    detail: "PEC Generative AI Training, Cohort 3 (Aug–Sep 2025). Certificate ID f19c16a4ca020839.",
    url: "/pec-genai-certificate.pdf",
    linkLabel: "View certificate",
  },
  {
    id: "aws-genai-practitioner",
    title: "AWS Cloud Quest: Generative AI Practitioner",
    issuer: "Amazon Web Services",
    date: "2026",
    image: "/aws-genai-practitioner.png",
    url: "https://www.credly.com/badges/39c6ee3c-56cb-4119-8bdc-fa8905bc6368",
    linkLabel: "Verify on Credly",
  },
  {
    id: "aws-serverless-developer",
    title: "AWS SimuLearn: Serverless Developer",
    issuer: "Amazon Web Services",
    date: "2026",
    image: "/aws-serverless-developer.png",
    url: "https://www.credly.com/badges/9c550fc4-fa65-4d95-a24a-9188f5eacf79",
    linkLabel: "Verify on Credly",
  },
  {
    id: "aws-ml-scholars",
    title: "AWS AI & ML Scholars: 2026 Challenge Completion",
    issuer: "Udacity and AWS",
    date: "2026",
    image: "/Challenge Completion Badge_Light.webp",
    detail: "Passed project: Using a Pre-trained Image Classifier to Identify Dog Breeds.",
    url: "/Challenge Completion Badge_Light.webp",
    linkLabel: "View badge",
  },
  {
    id: "ieee",
    title: "Certificate of Appreciation",
    issuer: "IEEE Student Branch, COMSATS University Islamabad, Lahore Campus",
    date: "2025",
    detail: "For contributions to the branch during the Spring 2025 semester.",
    url: "/IEEE-certificate.pdf",
    linkLabel: "View certificate",
  },
]

const courses = [
  { title: "Generative AI for Everyone", issuer: "DeepLearning.AI", date: "2026", url: "https://coursera.org/share/6260a7d4dab0d85835460e8a6ddf681a" },
  { title: "Create Generative AI Apps on Google Cloud", issuer: "Google Cloud", date: "2026", url: "https://coursera.org/share/58e4f98a549e85130eccbc852e3c8690" },
  { title: "Python Data Structures", issuer: "University of Michigan", date: "2025", url: "https://coursera.org/share/2825ffaf241cbabfb22af99e745f4f3a" },
  { title: "Programming for Everybody (Getting Started with Python)", issuer: "University of Michigan", date: "2025", url: "https://coursera.org/share/a061ebbfb835b8c8f34940219385da0f" },
  { title: "Introduction to APIs in Python", issuer: "DataCamp", date: "2026", url: `${DATACAMP}/860161036819129cc6a9174eaa8051896abc2d42` },
  { title: "Joining Data in SQL", issuer: "DataCamp", date: "2026", url: `${DATACAMP}/d56e301030d35037c3b89edf8186b8a901c2fd2f` },
  { title: "Intermediate SQL", issuer: "DataCamp", date: "2026", url: `${DATACAMP}/c011213b390e78346958d4ba3a65fea075a0fb08` },
  { title: "Introduction to SQL", issuer: "DataCamp", date: "2026", url: `${DATACAMP}/fc464ad54821cd6a83b245b83add0f8e804a02ee` },
  { title: "Intermediate Importing Data in Python", issuer: "DataCamp", date: "2026", url: `${DATACAMP}/58d3dc31e0a4d3e35108895043cadf661b60f7dc` },
  { title: "Introduction to Importing Data in Python", issuer: "DataCamp", date: "2026", url: `${DATACAMP}/5e6aabbe3a3eafa4edd667440b5fa0bb945ec3f3` },
  { title: "Intermediate Python for Developers", issuer: "DataCamp", date: "2026", url: `${DATACAMP}/10bcc9c4dc7556cc85c2ea26acc99f64211d48b1` },
  { title: "Introduction to Python for Developers", issuer: "DataCamp", date: "2026", url: `${DATACAMP}/a33b629a4263eee716d5895ccc6257d3a2b16973` },
  { title: "Understanding Data Engineering", issuer: "DataCamp", date: "2026", url: `${DATACAMP}/767841f4d1328e39b5abf7e99e8b6c09bf4291d4` },
  { title: "Understanding Cloud Computing", issuer: "DataCamp", date: "2026", url: `${DATACAMP}/96526339c1569ee69e049a78ae4876624d0dec80` },
]

export function CertificationsSection() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      intro={
        <>
          Badges link to Credly or to the certificate itself.{" "}
          <a href={CREDLY_PROFILE} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4">
            See my Credly profile
          </a>
          .
        </>
      }
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((cred) => (
          <li key={cred.id} className="flex flex-col rounded-lg border border-border bg-card p-5">
            <div className="flex items-start gap-4">
              {cred.image ? (
                <Image src={cred.image} alt="" width={56} height={56} className="h-14 w-14 shrink-0 rounded object-contain" />
              ) : (
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-secondary">
                  <Award className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
                </div>
              )}
              <div className="min-w-0">
                {cred.badge && (
                  <span className="mb-1.5 inline-block rounded bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                    {cred.badge}
                  </span>
                )}
                <h3 className="font-medium leading-snug">{cred.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cred.issuer} · {cred.date}
                </p>
              </div>
            </div>
            {cred.detail && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cred.detail}</p>}
            <a
              href={cred.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-1 self-start pt-4 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              {cred.linkLabel}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>

      <h3 className="mt-14 font-serif text-2xl font-medium tracking-tight">Courses</h3>
      <ul className="mt-6 grid border-t border-border sm:grid-cols-2 sm:gap-x-10">
        {courses.map((course) => (
          <li key={course.title} className="border-b border-border">
            <a
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-baseline justify-between gap-4 py-3 text-sm transition-colors hover:text-primary"
            >
              <span>{course.title}</span>
              <span className="shrink-0 text-muted-foreground">
                {course.issuer} · {course.date}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
