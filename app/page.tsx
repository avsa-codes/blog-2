import Image from "next/image"
import { Hero } from "@/components/hero"
import { SectionTitle } from "@/components/section-title"
import { PostCard } from "@/components/post-card"
import { article } from "@/lib/article"

export default function Page() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* FEATURED WORK */}
      <section className="mt-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle title="Featured Work" />

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PostCard
              href={`/blog/${article.slug}`}
              category={article.category}
              title={article.title}
              excerpt={article.excerpt}
              image={article.image}
            />
          </div>
        </div>
      </section>

      {/* ABOUT THE EDITOR */}
      <section className="mt-24">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-[260px,1fr] items-start">
          <div className="flex justify-center md:justify-start">
            <div className="victorian-frame rounded-full p-2">
              <div className="relative h-44 w-44 overflow-hidden rounded-full">
                <Image
                  src="/Madhumitha.jpeg"
                  alt="Portrait of Madhumitha"
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-primary">
              About the Editor
            </h2>

            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Madhumitha P Pastay is a writer and editor with an interest in
              fashion, literature, and quiet observation. Her writing explores
              everyday stillness, interior worlds, and the moments we often
              overlook.
            </p>

            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              This space is a home for her essays and creative work—written
              slowly, honestly, and with care.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
