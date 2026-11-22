// Hand-built line illustrations. Flat strokes only, no gradients.
type P = { className?: string };

export function Sprig({ className }: P) {
  return (
    <svg viewBox="0 0 120 260" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M60 255C58 200 62 140 56 6" />
      <path d="M59 222C38 218 22 202 18 178c22 0 38 14 41 44z" />
      <path d="M60 196C82 190 98 174 102 150c-22 0-38 14-42 46z" />
      <path d="M58 160C38 154 24 138 22 114c22 2 36 16 36 46z" />
      <path d="M58 132C80 126 94 110 96 88c-22 2-36 16-38 44z" />
      <path d="M57 98C40 92 30 78 30 58c18 2 28 14 27 40z" />
      <path d="M57 72C74 66 84 52 84 34c-18 2-28 14-27 38z" />
      <path d="M56 40C48 34 46 22 50 8c8 8 10 20 6 32z" />
      <path d="M59 222c-12-10-24-26-30-40M60 196c12-10 24-24 32-38M58 160c-10-10-20-24-26-38M58 132c12-8 22-18 30-32" strokeWidth="1" opacity=".6" />
    </svg>
  );
}

export function Leaf({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M8 42C6 22 18 8 40 6c2 22-10 34-32 36z" />
      <path d="M8 42C16 30 24 20 34 12" />
    </svg>
  );
}

export function Reeds({ className }: P) {
  return (
    <svg viewBox="0 0 220 80" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M10 80C12 56 8 36 14 12M30 80C28 52 34 30 26 6M52 80C54 58 62 40 58 18M78 80C76 60 84 44 96 30M104 80C106 54 100 34 108 10M130 80C128 58 138 40 134 20M156 80C158 62 150 44 160 28M182 80C180 58 188 36 184 14M206 80C208 62 214 48 210 34" />
    </svg>
  );
}

// A single flat wavy line, like a river on a map.
export function River({ className }: P) {
  return (
    <svg viewBox="0 0 600 14" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M0 7c25-8 50 8 75 0s50-8 75 0 50 8 75 0 50-8 75 0 50 8 75 0 50-8 75 0 50 8 75 0 50-8 75 0" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
