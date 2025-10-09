export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="victorian-ornament h-1 w-full rounded-full" aria-hidden />
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Victoria Ainsworth. All rights reserved.
          </p>
          <p className="text-sm">
            Crafted with <span className="text-accent">editorial elegance</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}
