import { SectionTitle } from "@/components/section-title"

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <SectionTitle title="Contact" />
      <div className="mt-6 victorian-ornament victorian-border rounded-lg bg-card p-6">
        <p className="text-muted-foreground">
          For editorial inquiries, collaborations, or interviews, please leave a note.
        </p>
        <form className="mt-4 grid gap-4">
          <div className="grid gap-1">
            <label className="text-sm" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="rounded border border-border bg-background px-3 py-2"
              placeholder="Your full name"
              required
            />
          </div>
          <div className="grid gap-1">
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="rounded border border-border bg-background px-3 py-2"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="grid gap-1">
            <label className="text-sm" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="min-h-32 rounded border border-border bg-background px-3 py-2"
              placeholder="How can I help?"
              required
            />
          </div>
          <button className="w-fit rounded bg-primary px-4 py-2 text-primary-foreground">Send Message</button>
        </form>

        <div className="mt-6 text-sm">
          <p>
            Email:{" "}
            <a className="text-primary hover:underline" href="mailto:hello@example.com">
              hello@example.com
            </a>
          </p>
          <p className="mt-1">LinkedIn / Instagram links available in the header.</p>
        </div>
      </div>
    </div>
  )
}
