import { Crop } from "@/components/crop"

const DATACAMP = "https://www.datacamp.com/completed/statement-of-accomplishment/course"

// The Coursera courses have no link: their share links open the course page, not the certificate.
// Add each certificate's coursera.org/verify/... link here once it's available.
const courses: { title: string; from: string; url?: string }[] = [
  { title: "Generative AI for Everyone", from: "DeepLearning.AI, 2026" },
  { title: "Create Generative AI Apps on Google Cloud", from: "Google Cloud, 2026" },
  { title: "Python Data Structures", from: "University of Michigan, 2025" },
  { title: "Programming for Everybody (Getting Started with Python)", from: "University of Michigan, 2025" },
  { title: "Introduction to APIs in Python", from: "DataCamp, 2026", url: `${DATACAMP}/860161036819129cc6a9174eaa8051896abc2d42` },
  { title: "Joining Data in SQL", from: "DataCamp, 2026", url: `${DATACAMP}/d56e301030d35037c3b89edf8186b8a901c2fd2f` },
  { title: "Intermediate SQL", from: "DataCamp, 2026", url: `${DATACAMP}/c011213b390e78346958d4ba3a65fea075a0fb08` },
  { title: "Introduction to SQL", from: "DataCamp, 2026", url: `${DATACAMP}/fc464ad54821cd6a83b245b83add0f8e804a02ee` },
  { title: "Intermediate Importing Data in Python", from: "DataCamp, 2026", url: `${DATACAMP}/58d3dc31e0a4d3e35108895043cadf661b60f7dc` },
  { title: "Introduction to Importing Data in Python", from: "DataCamp, 2026", url: `${DATACAMP}/5e6aabbe3a3eafa4edd667440b5fa0bb945ec3f3` },
  { title: "Intermediate Python for Developers", from: "DataCamp, 2026", url: `${DATACAMP}/10bcc9c4dc7556cc85c2ea26acc99f64211d48b1` },
  { title: "Introduction to Python for Developers", from: "DataCamp, 2026", url: `${DATACAMP}/a33b629a4263eee716d5895ccc6257d3a2b16973` },
  { title: "Understanding Data Engineering", from: "DataCamp, 2026", url: `${DATACAMP}/767841f4d1328e39b5abf7e99e8b6c09bf4291d4` },
  { title: "Understanding Cloud Computing", from: "DataCamp, 2026", url: `${DATACAMP}/96526339c1569ee69e049a78ae4876624d0dec80` },
]

export function CertificatesSection() {
  return (
    <section id="certificates" className="sec wrap" aria-labelledby="h-certificates">
      <h2 id="h-certificates">
        <span className="num">4</span>&nbsp;Certificates
      </h2>
      <div className="cols">
        <div>
          <div className="cred-lead">
            <h3>Generative AI Application Developer</h3>
            <p className="who">Pakistan Engineering Council, with PakAngels, iCodeGuru and Aspire Pakistan, 2025</p>
            <p>
              Top performer in the PEC Generative AI Training, Cohort 3 (Aug–Sep 2025). Certificate ID{" "}
              <span className="code">f19c16a4ca020839</span>.{" "}
              <a href="/pec-genai-certificate.pdf" target="_blank" rel="noopener noreferrer">
                View the certificate
              </a>{" "}
              <span className="meta">PDF</span>
            </p>
          </div>
          <ul className="also">
            <li>
              <a href="/Challenge%20Completion%20Badge_Light.webp" target="_blank" rel="noopener noreferrer">
                AWS AI &amp; ML Scholars: 2026 Challenge Completion
              </a>
              <span>Udacity and AWS, 2026. Passed project: a pre-trained image classifier that identifies dog breeds.</span>
            </li>
            <li>
              <a href="/IEEE-certificate.pdf" target="_blank" rel="noopener noreferrer">
                Certificate of Appreciation
              </a>
              <span>IEEE Student Branch, COMSATS Lahore, 2025, for contributions in the Spring 2025 semester.</span>
            </li>
          </ul>
        </div>
        <figure className="badges">
          <div className="row">
            <a href="https://www.credly.com/badges/39c6ee3c-56cb-4119-8bdc-fa8905bc6368" target="_blank" rel="noopener noreferrer">
              <Crop
                src="/aws-genai-practitioner.png"
                width={672}
                height={352}
                area={{ x: 200, y: 26, w: 271, h: 300 }}
                alt="AWS Cloud Quest: Generative AI Practitioner badge. Verify on Credly."
              />
            </a>
            <a href="https://www.credly.com/badges/9c550fc4-fa65-4d95-a24a-9188f5eacf79" target="_blank" rel="noopener noreferrer">
              <Crop
                src="/aws-serverless-developer.png"
                width={672}
                height={352}
                area={{ x: 176, y: 0, w: 319, h: 352 }}
                alt="AWS SimuLearn: Serverless Developer badge. Verify on Credly."
              />
            </a>
          </div>
          <figcaption>
            AWS Cloud Quest: Generative AI Practitioner and AWS SimuLearn: Serverless Developer, both 2026. Each badge
            opens its record on Credly.
          </figcaption>
        </figure>
      </div>
      <details className="courses">
        <summary>14 online courses, from DataCamp, the University of Michigan, DeepLearning.AI and Google Cloud</summary>
        <ul>
          {courses.map((course) => (
            <li key={course.title}>
              {course.url ? (
                <a href={course.url} target="_blank" rel="noopener noreferrer">
                  {course.title}
                </a>
              ) : (
                course.title
              )}
              <span>{course.from}</span>
            </li>
          ))}
        </ul>
      </details>
    </section>
  )
}
