import { about } from "../data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { Leaf } from "./Botanical";

export function About() {
  return (
    <section id="about" className="border-t border-navy/20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead no="01" title="About" />
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="font-serif text-3xl leading-snug text-navy md:text-4xl">{about.lead}</p>
            <div className="mt-8 space-y-5 text-navy/85">
              {about.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2" aria-label="Interests">
              {about.interests.map((i) => (
                <li key={i} className="flex items-center gap-2 font-bold text-moss">
                  <Leaf className="h-5 w-5" />
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="md:col-span-7" delay={120}>
            <figure>
              <img
                src="/images/riverside.jpg"
                alt="Kyaw Zin Phyo seated on a lawn beside a river, under trees"
                className="aspect-[16/10] w-full border border-navy object-cover"
                loading="lazy"
              />
              <figcaption className="mt-3 text-sm text-navy/70">
                Fig. 1. Time outdoors, by the river. Gardening and reading are two of his favourite ways to rest.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
