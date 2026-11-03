export function ExperienceSection() {
  return (
    <section id="experience" className="sec wrap" aria-labelledby="h-experience">
      <h2 id="h-experience">
        <span className="num">3</span>Experience
      </h2>
      <table className="exp bt" aria-label="Roles, most recent first">
        <tbody>
          <tr>
            <td className="period">Mar–Jul 2025</td>
            <th scope="row" className="role">
              <b>Intern Web Developer</b>
              <span>MKY Global Forwarding · Remote</span>
            </th>
            <td>
              Deployed a logistics website for a startup, and worked with the company’s developers on other projects in
              HTML, CSS, JavaScript and SQL.
            </td>
          </tr>
          <tr>
            <td className="period">Feb–Jun 2025</td>
            <th scope="row" className="role">
              <b>Microsoft Learn Student Ambassador</b>
              <span>COMSATS University, Lahore · On campus</span>
            </th>
            <td>Led technical workshops on AI and cloud for students, and helped plan our activities on campus.</td>
          </tr>
          <tr>
            <td className="period">Jan–Mar 2025</td>
            <th scope="row" className="role">
              <b>
                C<span className="pp">++</span> Developer Intern
              </b>
              <span>Rhombix Technologies · Remote</span>
            </th>
            <td>
              Built C<span className="pp">++</span> programs around data structures, algorithms and OOP, including a
              to-do list manager and a Caesar-cipher encryption tool.
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
