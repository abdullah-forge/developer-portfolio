import type { Metadata } from 'next'
import { Charis_SIL, Fragment_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

// A text serif with the feel of a printed engineering report, and a mono for code and figures
const charis = Charis_SIL({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-charis',
})

const fragment = Fragment_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-fragment',
})

// Absolute base for link-preview images. Vercel sets VERCEL_PROJECT_PRODUCTION_URL,
// so this follows a custom domain automatically once one is added.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://developer-portfolio-six-omega.vercel.app'

const siteTitle = 'Muhammad Abdullah, Python backend and AI engineer'
const siteDescription = 'Final-year computer engineering student in Lahore who builds Python backends, data automation and AI features. Freelance and part-time work now, full-time roles from June 2027.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // The font variables sit on <html> so the :root custom properties in globals.css can use them
    <html lang="en" className={`${charis.variable} ${fragment.variable}`} suppressHydrationWarning>
      <body id="top">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
