import { education } from "../data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { Reeds } from "./Botanical";

export function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-navy py-20 text-paper md:py-28">
      <Reeds className="absolute bottom-0 right-4 hidden h-24 w-auto text-moss-light/40 md:block" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead no="02" title="Education" tone="dark" />
        <ol className="border-t border-paper/30">
          {education.map((e) => (
            <Reveal key={e.degree}>
              <li className="grid gap-2 border-b border-paper/30 py-8 md:grid-cols-12 md:gap-8">
                <span className="font-serif text-5xl font-medium text-moss-light md:col-span-2 md:text-6xl">{e.year}</span>
                <div className="md:col-span-10 md:pt-2">
                  <h3 className="font-serif text-2xl md:text-3xl">{e.degree}</h3>
                  <p className="mt-1 text-paper/80">{e.school}</p>
                  {e.note && (
                    <p className="mt-3 inline-block border border-moss-light px-3 py-1 text-sm font-bold text-moss-light">
                      {e.note}
                    </p>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
