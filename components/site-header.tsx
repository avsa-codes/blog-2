"use client"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span
            aria-hidden
            className={cn("inline-flex h-9 w-9 items-center justify-center rounded-full victorian-frame bg-background")}
            title="Monogram"
          >
            <span className="text-primary font-bold">S</span>
          </span>
          <span className="text-lg font-semibold tracking-wide text-foreground">Spilled Espresso</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm hover:text-primary transition-colors">
              {item.label}
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-3 pl-4 border-l border-border">
            <Link href="https://instagram.com" className="text-sm hover:text-accent" aria-label="Instagram">
              IG
            </Link>
            <Link href="https://linkedin.com" className="text-sm hover:text-accent" aria-label="LinkedIn">
              LI
            </Link>
            <Link href="mailto:hello@example.com" className="text-sm hover:text-accent" aria-label="Email">
              EM
            </Link>
          </div>
        </nav>

        <button
          className="md:hidden px-3 py-2 border border-border rounded"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <span className="text-sm">Menu</span>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-sm hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-4 pt-2 border-t border-border">
              <Link href="https://instagram.com" className="text-sm hover:text-accent" aria-label="Instagram">
                Instagram
              </Link>
              <Link href="https://linkedin.com" className="text-sm hover:text-accent" aria-label="LinkedIn">
                LinkedIn
              </Link>
              <Link href="mailto:hello@example.com" className="text-sm hover:text-accent" aria-label="Email">
                Email
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
