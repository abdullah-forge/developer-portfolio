export type ProjectLink = { label: string; url: string; live?: boolean }

export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  image?: string
  // Which part of the screenshot stays visible when it is cropped to the card
  imagePosition?: "object-top" | "object-left-top" | "object-center"
  note?: string
  featured?: boolean
  links: ProjectLink[]
}

const HF_WAKE_NOTE = "Hosted on Hugging Face Spaces, which sleep when idle. If you see 'This Space is sleeping', click 'Restart this Space' and wait a minute or two."

// Featured projects come first and are shown large with a screenshot; the rest are listed below them
export const projects: Project[] = [
  {
    slug: "ai-sales-copilot",
    title: "AI Sales Copilot",
    featured: true,
    description: "Sales assistant for marketing agencies. Gemini scores every incoming lead from 0 to 100 and suggests how to approach it, and each lead gets its own AI chat that drafts follow-up emails or proposals and summarizes the lead on request.",
    tags: ["FastAPI", "Gemini", "Supabase", "SQLAlchemy"],
    image: "/projects/ai-sales-copilot.jpg",
    note: "The backend runs on Render's free tier, so the first request can take about a minute. Lead scoring and the AI chat are in the agency dashboard, which needs an account.",
    links: [
      { label: "Live app", url: "https://ai-sales-copilot-one.vercel.app", live: true },
      { label: "Code on GitHub", url: "https://github.com/abdullah-forge/ai-sales-copilot" },
    ],
  },
  {
    slug: "aegis-swarm",
    title: "AEGIS-SWARM Threat Triage",
    featured: true,
    description: "Catches phishing in SMS, emails, URLs and QR codes. An NLP agent (TF-IDF plus 13 security heuristics in a soft-voting ensemble, trained on 24,206 messages) scores the text with 94% test accuracy, and a visual agent decodes QR codes with OpenCV and classifies the hidden URL with 96%. Team project.",
    tags: ["scikit-learn", "OpenCV", "Streamlit", "Supabase"],
    image: "/Aegis_swarm.jpg",
    imagePosition: "object-center",
    note: HF_WAKE_NOTE,
    links: [
      { label: "Live demo", url: "https://huggingface.co/spaces/Wall06/swarm", live: true },
      { label: "Code on GitHub", url: "https://github.com/abdullah-forge/aegis_swarm_" },
      { label: "Models on Hugging Face", url: "https://huggingface.co/Wall06/AEGIS-SWARM" },
    ],
  },
  {
    slug: "bank-reconciliation",
    title: "Bank Reconciliation API",
    featured: true,
    description: "Matching bank statements to a ledger by hand takes accountants hours. Upload both CSVs and this API returns matched and unmatched transactions plus the balance difference in about 2 seconds, using fuzzy matching with ±2-day date tolerance.",
    tags: ["FastAPI", "Pandas", "PostgreSQL", "pytest"],
    image: "/projects/bank-reconciliation.png",
    imagePosition: "object-left-top",
    links: [
      { label: "Code on GitHub", url: "https://github.com/abdullah-forge/bank-reconciliation" },
    ],
  },
  {
    slug: "flumenintel",
    title: "FlumenIntel",
    featured: true,
    description: "River health dashboard. Turns field readings (flow, temperature, sediment, pH, dissolved oxygen) into water-quality, habitat and erosion scores, adds a brightness-based turbidity score from a satellite image, and writes a plain-language report with an LLM (Llama on Groq, falling back to Gemini) as a PDF or audio file.",
    tags: ["Gradio", "Groq", "Gemini", "Plotly"],
    image: "/flumen_intel.jpg",
    imagePosition: "object-left-top",
    links: [
      { label: "Code on GitHub", url: "https://github.com/abdullah-forge/FlumenIntel-App" },
    ],
  },
  {
    slug: "data-normalizer",
    title: "Data Normalizer API",
    description: "Asynchronous FastAPI service that ingests messy CSV, Excel and JSON files, detects the schema, standardizes column names and dates, handles missing values, and returns an audit report (detected schema, missing values and processing stats).",
    tags: ["FastAPI", "Async SQLAlchemy", "Pandas", "Pydantic v2"],
    links: [
      { label: "Code on GitHub", url: "https://github.com/abdullah-forge/data-normalizer-api" },
    ],
  },
  {
    slug: "jwt-auth-api",
    title: "FastAPI JWT Auth & CRUD API",
    description: "Authentication and CRUD backend with JWT access tokens, the OAuth2 password flow, bcrypt password hashing, owner-only edit and delete, and SQLAlchemy with PostgreSQL.",
    tags: ["FastAPI", "JWT Auth", "PostgreSQL", "OAuth2"],
    links: [
      { label: "Code on GitHub", url: "https://github.com/abdullah-forge/fastapi-jwt-auth-api" },
    ],
  },
  {
    slug: "fake-news-detector",
    title: "Fake News Detector",
    description: "Paste a news article to get a fake-news likelihood, its sentiment, an LLM-written explanation of the prediction, and related articles to cross-check it against. Built at a hackathon.",
    tags: ["NLP", "Hugging Face", "Groq", "Hackathon"],
    links: [
      { label: "Code on GitHub", url: "https://github.com/abdullah-forge/fake-news-detector" },
    ],
  },
  {
    slug: "sparsity-aware-pe",
    title: "Sparsity-Aware Processing Element",
    description: "VHDL design of a power-gated processing element (8-bit multiply, 32-bit accumulate), built as the basic block of an 8×8 systolic array for neural-network inference. When a weight is zero it skips the multiply and powers the multiplier down through a sleep transistor. Simulated in Quartus, with transistor-level layout in Microwind. Team project of three.",
    tags: ["VHDL", "Quartus", "Microwind", "Power Gating"],
    links: [
      { label: "Code on GitHub", url: "https://github.com/abdullah-forge/8x8-Sparsisty-aware-for-dynamic-power-gating" },
    ],
  },
  {
    slug: "nation-explorer",
    title: "Nation-Explorer",
    description: "A comprehensive Object-Oriented Programming (OOP) project designed to explore and search nation metrics, demographics, and geographical data using C++ / Java design patterns.",
    tags: ["OOP Design", "C++ / Java", "Data Parsing"],
    links: [
      { label: "Code on GitHub", url: "https://github.com/abdullah-forge/Nation-Explorer" },
    ],
  },
  {
    slug: "pong",
    title: "Classic Pong Game",
    description: "A replica of the classic arcade Pong game, showcasing 2D graphics rendering, responsive control logic, and physics-based paddle-ball collision calculations.",
    tags: ["Game Dev", "GUI / Graphics", "Collision Logic"],
    links: [
      { label: "Code on GitHub", url: "https://github.com/abdullah-forge/Pong_game" },
    ],
  },
  {
    slug: "snake",
    title: "Retro Snake Game",
    description: "A dynamic grid-based Snake game featuring real-time collision detection, score tracking, and food generation algorithms.",
    tags: ["Game Dev", "Algorithms", "GUI Design"],
    links: [
      { label: "Code on GitHub", url: "https://github.com/abdullah-forge/Snake_game" },
    ],
  },
]
