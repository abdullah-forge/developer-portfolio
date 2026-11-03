export function FreelanceSection() {
  return (
    <section id="freelance" className="sec wrap" aria-labelledby="h-freelance">
      <h2 id="h-freelance">
        <span className="num">5</span>&nbsp;Freelance work
      </h2>
      <p className="intro">
        Alongside my degree I take fixed-scope projects for startups, agencies and small businesses. Before you write,
        you can look at something similar I’ve already built.
      </p>
      <table className="work bt" aria-label="Kinds of freelance work">
        <thead>
          <tr>
            <th scope="col">Kind of work</th>
            <th scope="col">What you get</th>
            <th scope="col">See it first</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Backend APIs</th>
            <td>
              The server side of your web or mobile app, with JWT sign-in, owner-only edits and deletes, and
              auto-generated docs the next developer can follow.
            </td>
            <td>
              <a href="#fig-3">API docs</a>
              <span className="ref">Fig.&nbsp;3, in 2.1</span>
              <a href="#jwt-auth-api">JWT Auth API</a>
              <span className="ref">2.5, code on GitHub</span>
            </td>
          </tr>
          <tr>
            <th scope="row">Data cleanup and automation</th>
            <td>
              Messy CSV and Excel exports matched and cleaned up automatically: reconciliation, tidy columns and dates,
              and a report of what was found.
            </td>
            <td>
              <a href="#table-1">A sample run</a>
              <span className="ref">Table&nbsp;1, in 2.1</span>
            </td>
          </tr>
          <tr>
            <th scope="row">AI features</th>
            <td>Lead scoring, AI-drafted emails and proposals, and a chat assistant for each lead, built on Gemini.</td>
            <td>
              <a href="#ai-sales-copilot">AI Sales Copilot</a>
              <span className="ref">2.2, with a live app</span>
            </td>
          </tr>
          <tr>
            <th scope="row">Machine learning models</th>
            <td>
              A model that sorts text or links, for example phishing or safe, tested on data it hasn’t seen and served
              behind a demo page you can share.
            </td>
            <td>
              <a href="#aegis-swarm">AEGIS-SWARM</a>
              <span className="ref">2.3, with a live demo</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="prose terms">
        <p>
          A focused API, automation or small web app usually takes 2–4 weeks, and a larger AI system 2–3 months. You get
          a detailed timeline before we start. You can pay by milestone, as a fixed project price, or as a monthly
          retainer for ongoing work, whichever suits your budget.
        </p>
      </div>
    </section>
  )
}
