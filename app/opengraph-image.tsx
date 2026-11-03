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
          background: "#FAF9F6",
          color: "#17181C",
          borderBottom: "16px solid #1F4BC7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 28, color: "#5A5F6B" }}>
          <div style={{ width: 16, height: 16, borderRadius: 8, background: "#15803D" }} />
          Available for freelance work · Lahore, Pakistan
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 104, letterSpacing: -3, lineHeight: 1 }}>Muhammad Abdullah</div>
          <div style={{ fontSize: 40, color: "#1F4BC7" }}>I build Python backends and AI tools</div>
        </div>
        <div style={{ fontSize: 28, color: "#5A5F6B" }}>FastAPI APIs · Data automation · AI apps · Machine learning</div>
      </div>
    ),
    size
  )
}
