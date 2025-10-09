import Image from "next/image"

export function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[48vh] w-full overflow-hidden victorian-border md:h-[60vh]">
        <Image
          src="/victorian-castle-library-editorial-scene.jpg"
          alt="Victorian castle library bathed in golden light"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl px-4">
        <div className="-mt-16 rounded-lg bg-background/95 p-6 victorian-frame md:-mt-24 md:p-10">
          <h1 className="text-balance text-3xl md:text-5xl font-semibold text-primary">
            Where Literature Meets Fashion
          </h1>
          <p className="mt-4 text-pretty text-base md:text-lg text-muted-foreground">
            A modern editorial portfolio infused with Victorian romance—essays, culture, couture, and the craft of
            storytelling.
          </p>
        </div>
      </div>
    </section>
  )
}
