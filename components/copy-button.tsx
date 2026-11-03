"use client"

import { useState } from "react"

// Copies with a hidden textarea. This runs synchronously inside the click,
// which every browser allows, so it never waits on a permission prompt.
function copyWithTextarea(text: string) {
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
  return ok
}

// Copies text (the email address) for people who use webmail instead of a mail app
export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  function done() {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
