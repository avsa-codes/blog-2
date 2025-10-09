import Image from "next/image"
import { Hero } from "@/components/hero"
import { FeaturedStrip } from "@/components/featured-strip"
import { SectionTitle } from "@/components/section-title"

export default function Page() {
  return (
    <>
      <Hero />
      <SectionTitle title="Featured Articles" />
      <FeaturedStrip />

      <section className="mt-12">
        <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-[220px,1fr] items-start">
          <div className="flex justify-center md:justify-start">
            <div className="victorian-frame rounded-full p-2">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/victorian-portrait-photography.jpg"
                  alt="Portrait of Victoria Ainsworth"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary">About the Editor</h2>
            <p className="mt-3 text-muted-foreground">
              I’m Victoria Ainsworth—writer, editor, and fashion journalist in training. My work bridges literature and
              couture, drawing on Victorian sensibilities to craft stories with modern clarity.
            </p>
            <p className="mt-3 text-muted-foreground">
              Here you’ll find essays, cultural commentary, and editorial projects that celebrate texture, tone, and
              timeless silhouettes.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
