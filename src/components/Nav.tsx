import { useState } from "react";
import { nav, profile } from "../data";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-navy/20 bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="font-serif text-xl font-semibold text-navy">
          {profile.name}
        </a>
        <nav className="hidden gap-8 md:flex" aria-label="Main">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-sm font-bold tracking-wide text-navy/80 underline-offset-8 hover:text-navy hover:underline decoration-moss decoration-2">
              {n.label}
            </a>
          ))}
        </nav>
        <button
          className="border border-navy px-3 py-1.5 text-sm font-bold text-navy md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-navy/20 bg-paper px-5 pb-4 md:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="block border-b border-navy/10 py-3 font-bold text-navy">
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
