import { profile } from "../data";
import { Reveal } from "./Reveal";
import { River, Sprig } from "./Botanical";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-20 text-paper md:py-28">
      <Sprig className="absolute -bottom-6 right-6 hidden h-72 w-auto rotate-6 text-moss-light/30 lg:block" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <Reveal className="md:col-span-7">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-moss-light">05 · Contact</p>
          <h2 className="font-serif text-4xl font-medium leading-tight md:text-6xl">
            Let's talk about teaching, language, or a good book.
          </h2>
          <River className="my-10 h-3 w-full max-w-md text-moss-light" />
          <dl className="space-y-6">
            <div>
              <dt className="text-sm font-bold uppercase tracking-widest text-moss-light">Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`} className="break-all font-serif text-2xl underline decoration-moss-light decoration-2 underline-offset-4 hover:text-moss-light md:text-3xl">
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-widest text-moss-light">Phone</dt>
              <dd>
                <a href={`tel:${profile.phoneHref}`} className="font-serif text-2xl hover:text-moss-light md:text-3xl">
                  {profile.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-widest text-moss-light">Based in</dt>
              <dd className="font-serif text-2xl md:text-3xl">{profile.location}</dd>
            </div>
          </dl>
          <a href={profile.resume} download className="mt-10 inline-block border-2 border-paper px-6 py-3 font-bold transition-colors hover:bg-paper hover:text-navy">
            Download résumé (PDF)
          </a>
        </Reveal>

        <Reveal className="md:col-span-5" delay={120}>
          <figure className="mx-auto max-w-xs md:ml-auto">
            <img
              src="/images/portrait-casual.jpg"
              alt="Kyaw Zin Phyo smiling, wearing a black shirt"
              className="aspect-square w-full border border-paper/50 object-cover object-top"
              loading="lazy"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
