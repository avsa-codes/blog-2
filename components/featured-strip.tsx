import { PostCard } from "./post-card"

const featured = [
  {
    href: "/blog",
    category: "Fashion",
    title: "Ballads in Silk: A Regency to Runway Study",
    excerpt: "Exploring silhouettes that sing beyond centuries.",
    imageQuery: "regency fashion editorial still life silk brocade",
  },
  {
    href: "/blog",
    category: "Literature",
    title: "Gothic Pages: The Architecture of Mood",
    excerpt: "How shadow and sentence shape narrative couture.",
    imageQuery: "gothic library moody editorial candles quill",
  },
  {
    href: "/blog",
    category: "Culture",
    title: "Chromatic Courts: The Semiotics of Color",
    excerpt: "Burgundy and gold across eras of power and poise.",
    imageQuery: "victorian palace color study gold burgundy",
  },
]

export function FeaturedStrip() {
  return (
    <section className="mt-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2">
          {featured.map((p) => (
            <div key={p.title} className="min-w-[280px] max-w-[360px] w-[85%] sm:w-[320px] snap-start">
              <PostCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
