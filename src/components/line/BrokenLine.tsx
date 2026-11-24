/** A route that stops short: lit red line, then an unlit dashed stretch to an empty station. */
export function BrokenLine() {
  return (
    <svg className="lost__map" viewBox="0 0 560 120" aria-hidden="true">
      <path d="M28 60 H300" stroke="var(--red)" strokeWidth="18" strokeLinecap="round" fill="none" />
      <path
        d="M340 60 H500"
        stroke="var(--unlit)"
        strokeWidth="18"
        strokeLinecap="round"
        strokeDasharray="1 34"
        fill="none"
      />
      <circle cx="28" cy="60" r="16" fill="#fff" stroke="var(--ink)" strokeWidth="7" />
      <circle cx="300" cy="60" r="16" fill="#fff" stroke="var(--ink)" strokeWidth="7" />
      <circle cx="532" cy="60" r="16" fill="#fff" stroke="var(--unlit)" strokeWidth="7" />
    </svg>
  );
}
