export function SectionHead({ no, title, tone = "light" }: { no: string; title: string; tone?: "light" | "dark" }) {
  const c = tone === "dark" ? "text-moss-light" : "text-moss";
  return (
    <div className="mb-12 flex items-baseline gap-4 md:mb-16">
      <span className={`font-sans text-sm font-bold tracking-[0.2em] ${c}`}>{no}</span>
      <h2 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">{title}</h2>
    </div>
  );
}
