import { ImageResponse } from "next/og"
import { charis } from "@/lib/charis"

// Home-screen icon for iPhone/iPad: the same bold serif "MA" monogram as the favicon
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default async function AppleIcon() {
  const fonts = await charis(700, "MA").then(
    (font) => [font],
    (err) => {
      console.warn("Home-screen icon: Charis SIL didn't load, using the default font.", err)
      return undefined
    }
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1B1B1B",
          color: "#FFFFFF",
          fontFamily: "Charis SIL",
          fontWeight: 700,
          fontSize: 80,
          letterSpacing: -1,
        }}
      >
        MA
      </div>
    ),
    { ...size, fonts }
  )
}
