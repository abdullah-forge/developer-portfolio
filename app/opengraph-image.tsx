import { ImageResponse } from "next/og"

// Preview card shown when the portfolio link is shared on LinkedIn, WhatsApp, X, etc.
// It echoes the page: a heavy top rule, the name, and one highlighted number.
export const alt = "Muhammad Abdullah, Python backend and AI engineer"
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
          padding: "64px 80px 72px",
          background: "#FFFFFF",
          color: "#1B1B1B",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "8px solid #1B1B1B",
            borderBottom: "2px solid #1B1B1B",
            padding: "16px 0 18px",
            fontSize: 26,
            color: "#585858",
          }}
        >
          <div style={{ display: "flex" }}>Python backend and AI engineer</div>
          <div style={{ display: "flex" }}>Lahore, Pakistan</div>
        </div>
        <div style={{ display: "flex", fontSize: 108, letterSpacing: -3, lineHeight: 1 }}>Muhammad Abdullah</div>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", fontSize: 38, lineHeight: 1.4 }}>
          <div style={{ display: "flex" }}>My bank reconciliation API matches a statement to a ledger in&nbsp;</div>
          <div style={{ display: "flex", background: "#FFE45C", padding: "0 8px" }}>about two seconds</div>
          <div style={{ display: "flex" }}>.</div>
        </div>
      </div>
    ),
    size
  )
}
