// Prints cv/cv.html to public/cv.pdf with headless Chrome (or Edge on Windows).
// Run it with `npm run cv`. If Chrome isn't found, set CHROME to its path.
import { execFileSync } from "node:child_process"
import { existsSync, readFileSync, renameSync, rmSync, statSync } from "node:fs"
import { fileURLToPath } from "node:url"

const browsers = [
  process.env.CHROME,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
]
const chrome = browsers.find((path) => path && existsSync(path))
if (!chrome) throw new Error("Chrome not found. Set CHROME to its path and run again.")

const html = new URL("./cv.html", import.meta.url).href
const pdf = fileURLToPath(new URL("../public/cv.pdf", import.meta.url))

// Print to a temporary file and replace public/cv.pdf only if the result is right.
// Chrome exits without an error even when it can't write the file or load the fonts.
const tmp = `${pdf}.tmp`
rmSync(tmp, { force: true })
try {
  // The time budget gives the web fonts time to load before printing
  execFileSync(chrome, ["--headless=new", "--no-pdf-header-footer", "--virtual-time-budget=10000", `--print-to-pdf=${tmp}`, html], { stdio: "ignore", timeout: 120000 })
  if (!existsSync(tmp)) throw new Error("Chrome did not write the PDF")
  const raw = readFileSync(tmp, "latin1")
  const pages = raw.split("/Type /Page").length - raw.split("/Type /Pages").length
  if (pages !== 1) throw new Error(`The CV prints on ${pages} pages; it must fit on one`)
  if (!raw.includes("CharisSIL") || !raw.includes("FragmentMono")) {
    throw new Error("Charis SIL or Fragment Mono didn't load (offline?), so cv.pdf was not replaced")
  }
  renameSync(tmp, pdf) // fails if cv.pdf is open in a program that locks it
} finally {
  rmSync(tmp, { force: true })
}
console.log(`Wrote ${pdf} (${Math.round(statSync(pdf).size / 1024)} KB)`)
