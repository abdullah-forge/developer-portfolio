import { ImageResponse } from "next/og"

// Preview card shown when the portfolio link is shared on LinkedIn, WhatsApp, X, etc.
export const alt = "Muhammad Abdullah, Python Backend & AI Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0F0F11",
          color: "#F4F4F7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 28, color: "#A1A1B0" }}>
          <div style={{ width: 16, height: 16, borderRadius: 8, background: "#34D399" }} />
          Open to work · Lahore, Pakistan
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontWeight: 800, letterSpacing: -4, lineHeight: 0.95 }}>MUHAMMAD</div>
          <div style={{ fontSize: 112, fontWeight: 800, letterSpacing: -4, lineHeight: 0.95, color: "#F27A54" }}>
            ABDULLAH
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 44, fontWeight: 700 }}>Python Backend & AI Engineer</div>
          <div style={{ fontSize: 30, color: "#A1A1B0" }}>FastAPI APIs · Data automation · AI apps · Machine learning</div>
        </div>
      </div>
    ),
    size
  )
}
