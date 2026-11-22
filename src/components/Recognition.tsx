import { activities, awards, languages, skills } from "../data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Recognition() {
  return (
    <section id="recognition" className="border-t border-navy/20 bg-paper-deep py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead no="04" title="Recognition & Development" />

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h3 className="mb-5 border-b-2 border-navy pb-2 font-serif text-2xl text-navy">Awards</h3>
            <ul className="divide-y divide-navy/20">
              {awards.map((a) => (
                <li key={a.text} className="grid grid-cols-[4.5rem_1fr] gap-4 py-4">
                  <span className="font-bold text-clay">{a.year}</span>
                  <span>{a.text}</span>
                </li>
              ))}
            </ul>

            <h3 className="mb-5 mt-14 border-b-2 border-navy pb-2 font-serif text-2xl text-navy">Strengths</h3>
            <ul className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <li key={s} className="border border-navy bg-paper px-4 py-2 font-bold text-navy">
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-navy/85">
              <span className="font-bold text-navy">Languages:</span> {languages.join(", ")}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="mb-5 border-b-2 border-navy pb-2 font-serif text-2xl text-navy">
              Workshops, conferences & exchange programmes
            </h3>
            <ul className="divide-y divide-navy/20">
              {activities.map((a) => (
                <li key={a.text} className="grid gap-1 py-4 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
                  <span className="font-bold text-moss">{a.when}</span>
                  <span>{a.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
