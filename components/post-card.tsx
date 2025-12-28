import Image from "next/image"
import Link from "next/link"

type PostCardProps = {
  href: string
  category: string
  title: string
  excerpt: string
  image: string
}

export function PostCard({
  href,
  category,
  title,
  excerpt,
  image,
}: PostCardProps) {
  return (
    <article className="victorian-border overflow-hidden rounded-lg bg-card transition hover:shadow-md">
      {/* IMAGE */}
      <div className="relative h-44 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <span className="inline-block rounded bg-secondary px-2 py-1 text-xs uppercase tracking-wide text-secondary-foreground/80">
          {category}
        </span>

        <h3 className="mt-3 text-lg font-semibold leading-snug">
          {title}
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          {excerpt}
        </p>

        <Link
          href={href}
          className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
        >
          Read more →
        </Link>
      </div>
    </article>
  )
}
