import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
// Fonts
import { Playfair_Display } from "next/font/google"
import { Lora } from "next/font/google"
// Styles
import "./globals.css"
import "./victorian.css"
// Components
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Victorian Portfolio",
  description: "A Victorian-era inspired editorial portfolio and blog.",
  generator: "v0.app",
}

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable} antialiased`}>
      {/* Use Lora for body text as the primary reading font */}
      <body className="font-serif bg-background text-foreground">
        <Suspense>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
