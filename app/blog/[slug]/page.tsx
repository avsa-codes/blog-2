import Image from "next/image"
import { notFound } from "next/navigation"
import { article } from "@/lib/article"

export default function ArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  if (params.slug !== article.slug) {
    return notFound()
  }

  return (
    <article className="bg-background">
      {/* HERO */}
      <header className="relative h-[70vh] w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Title Block */}
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-4xl px-6 pb-16 text-background">
            <span className="text-xs uppercase tracking-widest opacity-80">
              {article.category}
            </span>

            <h1 className="mt-3 font-serif text-5xl leading-tight md:text-6xl">
              {article.title}
            </h1>

            <p className="mt-4 max-w-2xl text-lg opacity-90">
              {article.excerpt}
            </p>
          </div>
        </div>
      </header>

      {/* BODY */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        {/* Editorial Divider */}
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Essay
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Article Content */}
        <div
  className="editorial"
  dangerouslySetInnerHTML={{ __html: article.content }}
/>

      </section>
    </article>
  )
}
