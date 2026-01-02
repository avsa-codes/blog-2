import Image from "next/image"
import { SectionTitle } from "@/components/section-title"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <SectionTitle title="About" />
      <div className="mt-8 grid gap-6 md:grid-cols-[260px,1fr]">
        <div className="victorian-frame p-3 bg-card">
          <div className="relative h-56 w-full">
            <Image src="/picture2.jpeg" alt="Victorian-styled portrait" fill className="object-cover" />
          </div>
          <p className="sr-only">Victorian-styled portrait</p>
        </div>
        <div className="victorian-border rounded-lg bg-card p-6">
          <h1 className="text-2xl font-semibold text-primary">Madhumitha P Pastay</h1>
          <p className="mt-3 text-muted-foreground">
           I am Madhumitha I am almost 20 years old 
I write because it's my only way to truly express my emotions.
So whatever you read here is honest and personal.
Along with personal essays, I also write about fashion. As an aspiring fashion journalist, I write from fashion features to editorials.
If you enjoy reading, writing, and finding comfort in words, this space might feel like home.
          </p>
          <ul className="mt-4 list-disc pl-5 text-muted-foreground">
            {/* <li>Academic background in Literature and Media Studies</li>
            <li>Editorial interests: fashion history, cultural semiotics, lifestyle</li>
            <li>Career vision: leading editorial teams with a strong aesthetic compass</li> */}
          </ul>
        </div>
      </div>

      <h2 className="mt-10 text-xl font-semibold text-primary">Gallery</h2>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="victorian-frame overflow-hidden">
            <div className="relative h-28 w-full">
              <Image
                src={`/victorian-motif-.jpg?height=200&width=200&query=victorian%20motif%20${i}`}
                alt={`Victorian motif ${i}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
