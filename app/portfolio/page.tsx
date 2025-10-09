import { SectionTitle } from "@/components/section-title"
import Image from "next/image"

const items = [
  { title: "Editorial: Velvet Reveries", tag: "Editorial", q: "velvet fashion editorial vintage" },
  { title: "Campaign: Gilded Corners", tag: "Campaign", q: "golden hour couture palace" },
  { title: "Essay: The Collar and the Crown", tag: "Essay", q: "victorian collar detail macro" },
  { title: "Project: Scriptorium", tag: "Project", q: "antique books quill ink editorial" },
  { title: "Feature: Night at the Conservatory", tag: "Feature", q: "victorian conservatory night" },
  { title: "Lookbook: Winter Court", tag: "Lookbook", q: "winter court fashion editorial" },
]

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <SectionTitle title="Portfolio" />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <figure key={it.title} className="group victorian-border rounded-lg overflow-hidden bg-card">
            <div className="relative h-48 w-full">
              <Image
                src={`/.jpg?height=360&width=600&query=${encodeURIComponent(it.q)}`}
                alt={it.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="p-4">
              <span className="text-xs uppercase tracking-wide bg-secondary text-secondary-foreground px-2 py-1 rounded">
                {it.tag}
              </span>
              <h3 className="mt-2 font-semibold">{it.title}</h3>
              <button className="mt-2 text-sm text-primary hover:underline">View Project →</button>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
