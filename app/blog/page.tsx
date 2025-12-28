import { PostCard } from "@/components/post-card"
import { SectionTitle } from "@/components/section-title"
import { article } from "@/lib/article"

const categories = ["All", article.category]

const posts = [
  {
    href: `/blog/${article.slug}`,
    category: article.category,
    title: article.title,
    excerpt: article.excerpt,
    image: article.image,
  },
]

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <SectionTitle title="Blog" />

      <div className="mt-6 grid gap-8 md:grid-cols-[1fr,280px]">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                className="px-3 py-1 rounded border border-border text-sm hover:bg-muted"
                aria-pressed={c === "All"}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((p) => (
              <PostCard key={p.title} {...p} />
            ))}
          </div>
        </div>

        <aside className="victorian-border rounded-lg bg-card p-4">
          <h3 className="text-lg font-semibold text-primary">Explore</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="hover:text-primary cursor-pointer">
              {article.category}
            </li>
          </ul>

          <div className="mt-6">
            <h4 className="font-semibold">Newsletter</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Monthly notes and editorials.
            </p>
            <form className="mt-2 flex gap-2">
              <input
                className="flex-1 rounded border border-border bg-background px-3 py-2 text-sm"
                placeholder="Your email"
                type="email"
              />
              <button className="rounded bg-primary px-3 py-2 text-primary-foreground text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  )
}
