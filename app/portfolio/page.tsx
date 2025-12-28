import Image from "next/image"
import Link from "next/link"
import { SectionTitle } from "@/components/section-title"
import { article } from "@/lib/article"

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle title="Portfolio" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* SINGLE REAL ITEM */}
        <figure className="overflow-hidden rounded-xl border bg-card transition hover:shadow-md">
          {/* IMAGE */}
          <div className="relative h-56 w-full">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <figcaption className="p-5">
            <span className="inline-block rounded bg-secondary px-2 py-1 text-xs uppercase tracking-wide text-secondary-foreground">
              Article
            </span>

            <h3 className="mt-3 text-lg font-semibold leading-snug">
              {article.title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {article.excerpt}
            </p>

            <Link
              href={`/blog/${article.slug}`}
              className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
            >
              View work →
            </Link>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
