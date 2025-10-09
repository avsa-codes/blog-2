export function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="flex items-center gap-4">
        <div className="h-[1px] flex-1 bg-border" />
        <h2 className="text-xl md:text-2xl text-primary font-semibold">{title}</h2>
        <div className="h-[1px] flex-1 bg-border" />
      </div>
    </div>
  )
}
