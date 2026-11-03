import { Crop } from "@/components/crop"

export function OverviewSection() {
  return (
    <section id="overview" className="sec wrap" aria-labelledby="h-overview">
      <h2 id="h-overview">
        <span className="num">1</span>Overview
      </h2>
      <div className="cols overview">
        <div className="prose">
          <p>
            I work mostly in Python: FastAPI backends with PostgreSQL, authentication and tests, plus AI features built
            on Gemini, Llama and scikit-learn. I like problems with a clear before and after.
          </p>
          <p>
            I also like working close to the hardware. With two classmates I designed a sparsity-aware, power-gated
            processing element in VHDL, simulated it in Quartus and drew its transistor-level layout in Microwind{" "}
            <span className="xref">
              (<a href="#fig-2">Fig.&nbsp;2</a>)
            </span>
            . My final-year project sits between the two: machine learning that detects RF jamming in 2.4&nbsp;GHz
            wireless networks.
          </p>
        </div>
        <figure className="fig-side" id="fig-2">
          <Crop
            className="shot"
            src="/8x8Sparsity_Aware.jpg"
            width={1363}
            height={625}
            area={{ x: 0, y: 5, w: 1242, h: 580 }}
            alt="Transistor-level layout in Microwind on a black background: a row of logic cells drawn in coloured metal, polysilicon and diffusion layers between two supply rails, with input and output wires running off to the left."
          />
          <figcaption>
            <span className="lbl">Fig.&nbsp;2</span>Part of our layout in Microwind: AND and XOR cells between the VDD
            and VSS rails, with the inputs a0, a1, b0, b1 and the outputs p0 to p3 on the left.
          </figcaption>
        </figure>
      </div>
      <table className="spec bt" aria-label="Key facts and tools">
        <tbody>
          <tr>
            <th scope="row">Based in</th>
            <td>
              Lahore, Pakistan (UTC<span className="pl">+</span>5). Open to on-site or remote work.
            </td>
          </tr>
          <tr>
            <th scope="row">Degree</th>
            <td>BS Computer Engineering, COMSATS University Islamabad, Lahore Campus. Graduating June&nbsp;2027.</td>
          </tr>
          <tr className="split">
            <th scope="row">Languages</th>
            <td>
              Python, SQL, C<span className="pp">++</span>, Java, JavaScript / TypeScript
            </td>
          </tr>
          <tr>
            <th scope="row">Backend</th>
            <td>FastAPI, Pydantic, SQLAlchemy, PostgreSQL, Supabase, JWT / OAuth2, pytest</td>
          </tr>
          <tr>
            <th scope="row">AI and data</th>
            <td>
              Gemini and Groq LLM APIs, Hugging Face, scikit-learn, TensorFlow / Keras, OpenCV, Pandas, Gradio /
              Streamlit
            </td>
          </tr>
          <tr>
            <th scope="row">Cloud and DevOps</th>
            <td>AWS (Lambda, API Gateway, S3), Docker, Vercel, Render, Git / GitHub</td>
          </tr>
          <tr>
            <th scope="row">Hardware and RF</th>
            <td>Verilog, VHDL, Xilinx Vivado, GNU Radio, RTL-SDR</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
