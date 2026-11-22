import { profile } from "../data";
import { Sprig } from "./Botanical";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-12 md:grid-cols-12 md:gap-8 md:px-8 md:pb-28 md:pt-20">
        <div className="md:col-span-7 md:pt-6">
          <p className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-moss">
            <span className="inline-block h-px w-10 bg-moss" />
            {profile.role} · {profile.location}
          </p>
          <h1 className="font-serif text-6xl font-medium leading-[0.95] tracking-tight text-navy sm:text-7xl lg:text-[5.75rem]">
            Kyaw
            <br />
            Zin Phyo
          </h1>
          <p className="mt-8 max-w-xl font-serif text-2xl italic leading-snug text-navy/85">
            "My natural bent tends to teaching and learning."
          </p>
          <p className="mt-6 max-w-xl text-navy/80">
            {profile.title} at {profile.institution}. Specialised in English Literature and Language, with a
            particular interest in linguistics and language teaching.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#experience" className="bg-navy px-6 py-3 font-bold text-paper transition-colors hover:bg-moss">
              See my experience
            </a>
            <a href={profile.resume} download className="border-2 border-navy px-6 py-3 font-bold text-navy transition-colors hover:bg-navy hover:text-paper">
              Download résumé
            </a>
          </div>
        </div>

        {/* Specimen-card portrait */}
        <div className="relative md:col-span-5">
          <Sprig className="absolute -left-6 top-6 hidden h-64 w-auto -rotate-6 text-moss md:block" />
          <figure className="relative mx-auto max-w-sm md:ml-auto">
            <div className="absolute -bottom-4 -right-4 h-full w-full bg-navy" aria-hidden="true" />
            <div className="relative border border-navy bg-paper p-3">
              <img
                src="/images/portrait-suit.jpg"
                alt="Portrait of Kyaw Zin Phyo in a navy suit"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <figcaption className="mt-3 flex items-baseline justify-between border-t border-navy/30 pt-2 text-xs font-bold uppercase tracking-[0.16em] text-navy/70">
                <span>Specimen no. 01</span>
                <span>M.A. English</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
