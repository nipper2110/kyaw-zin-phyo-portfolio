import { experience } from "../data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead no="03" title="Experience" />
        <ol className="relative ml-2 border-l-2 border-moss md:ml-0 md:border-l-0">
          {experience.map((x, i) => (
            <Reveal key={x.role + x.place}>
              <li className="relative grid gap-3 pb-12 pl-8 md:grid-cols-12 md:gap-8 md:border-t md:border-navy/25 md:py-10 md:pl-0">
                <span className="absolute -left-[9px] top-1.5 h-4 w-4 border-2 border-moss bg-paper md:hidden" aria-hidden="true" />
                <div className="md:col-span-3">
                  <p className="font-bold text-moss">{x.period}</p>
                  {i === 0 && (
                    <span className="mt-2 inline-block bg-moss px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-paper">
                      Current
                    </span>
                  )}
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-2xl font-medium text-navy md:text-3xl">{x.role}</h3>
                  <p className="mt-1 font-bold text-navy/75">
                    {x.place} <span className="font-normal">· {x.where}</span>
                  </p>
                  <ul className="mt-4 max-w-2xl space-y-2 text-navy/85">
                    {x.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-[0.7em] h-1.5 w-3 shrink-0 bg-moss" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
