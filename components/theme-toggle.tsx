"use client"

import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button type="button" className="mode" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {/* Both labels render and CSS shows the right one, so server and client markup match */}
      <span className="to-dark">Dark mode</span>
      <span className="to-light">Light mode</span>
    </button>
  )
}
