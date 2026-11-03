"use client"

import { useRef, useState } from "react"

// Copies with a hidden textarea. This runs synchronously inside the click,
// which every browser allows, so it never waits on a permission prompt.
function copyWithTextarea(text: string) {
  // Selecting the textarea moves focus into it, so remember where focus was
  const prev = document.activeElement as HTMLElement | null
  const ta = document.createElement("textarea")
  ta.value = text
  ta.setAttribute("readonly", "")
  ta.style.position = "absolute"
  ta.style.left = "-9999px"
  document.body.appendChild(ta)
  ta.select()
  let ok = false
  try {
    ok = document.execCommand("copy")
  } catch {}
  document.body.removeChild(ta)
  // Put focus back on the button, so keyboard users keep their place
  if (prev && prev !== document.body) prev.focus({ preventScroll: true })
  return ok
}

// Copies text (the email address) for people who use webmail instead of a mail app
export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  function done() {
    setCopied(true)
    // A second click restarts the 2 seconds instead of cutting them short
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  function copy() {
    if (copyWithTextarea(text)) {
      done()
      return
    }
    // Browsers that dropped execCommand still have the Clipboard API
    navigator.clipboard?.writeText(text).then(done, () => {})
  }

  return (
    <>
      <button type="button" className="copy" onClick={copy}>
        {copied ? "Copied" : label}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </span>
    </>
  )
}
