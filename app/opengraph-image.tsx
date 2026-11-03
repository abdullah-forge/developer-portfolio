import { ImageResponse } from "next/og"
import { charis } from "@/lib/charis"

// Preview card shown when the portfolio link is shared on LinkedIn, WhatsApp, X, etc.
// It echoes the page: a heavy top rule, the name, and one highlighted number.
export const alt = "Muhammad Abdullah, Python backend and AI engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const name = "Muhammad Abdullah"
const role = "Python backend and AI engineer"
const place = "Lahore, Pakistan"
// The sentence is set as two fixed lines, so the highlight never lands on a line of its own
const line1 = "My bank reconciliation API matches a statement"
const line2 = "to a ledger in "
const highlight = "about two seconds"

export default async function OpengraphImage() {
  const fonts = await Promise.all([
    charis(400, role + place + line1 + line2 + highlight + "."),
    charis(700, name),
  ]).catch((err) => {
    // The card still renders, in next/og's built-in sans
    console.warn("Link-preview image: Charis SIL didn't load, using the default font.", err)
    return undefined
  })

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
          fontFamily: "Charis SIL",
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
          <div style={{ display: "flex" }}>{role}</div>
          <div style={{ display: "flex" }}>{place}</div>
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, letterSpacing: -1, lineHeight: 1 }}>{name}</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 38, lineHeight: 1.4 }}>
          <div style={{ display: "flex" }}>{line1}</div>
          <div style={{ display: "flex" }}>
            {line2}
            <div style={{ display: "flex", background: "#FFE45C", padding: "0 5px" }}>{highlight}</div>.
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  )
}
