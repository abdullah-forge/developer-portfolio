// Charis SIL for the next/og images (link preview and home-screen icon).
// next/og can't read the WOFF2 files that next/font uses, so this asks Google Fonts
// for a TTF that holds only the characters being drawn.
export async function charis(weight: 400 | 700, text: string) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Charis+SIL:wght@${weight}&text=${encodeURIComponent(text)}`,
    { cache: "force-cache" }
  ).then((res) => res.text())
  const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1]
  if (!url) throw new Error(`Google Fonts sent no TTF for Charis SIL ${weight}`)
  const res = await fetch(url, { cache: "force-cache" })
  if (!res.ok) throw new Error(`Charis SIL ${weight}: HTTP ${res.status}`)
  return { name: "Charis SIL", data: await res.arrayBuffer(), weight, style: "normal" as const }
}
