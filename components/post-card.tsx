import Image from "next/image"
import Link from "next/link"

type PostCardProps = {
  href: string
  category: string
  title: string
  excerpt: string
  imageQuery: string
}

export function PostCard({ href, category, title, excerpt, imageQuery }: PostCardProps) {
  return (
    <article className="victorian-border rounded-lg overflow-hidden bg-card">
      <div className="relative h-40 w-full">
        <Image
          src={`/.jpg?height=300&width=600&query=${encodeURIComponent(imageQuery)}`}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>
      <div className="p-4">
        <p className="text-xs uppercase tracking-wide text-secondary-foreground/80 bg-secondary inline-block px-2 py-1 rounded">
          {category}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{excerpt}</p>
        <Link href={href} className="mt-3 inline-block text-sm text-primary hover:underline">
          Read More →
        </Link>
      </div>
    </article>
  )
}
