type P = { size?: number; className?: string };

export function LogoMark({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="4">
        <path d="M4 14V4h10M26 4h10v10M36 26v10H26M14 36H4V26" />
      </g>
    </svg>
  );
}

export function Brackets({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" aria-hidden>
      <g stroke="var(--lime)" strokeWidth="2.4" strokeLinecap="round">
        <path d="M2 8V4a2 2 0 0 1 2-2h4M14 2h4a2 2 0 0 1 2 2v4M20 14v4a2 2 0 0 1-2 2h-4M8 20H4a2 2 0 0 1-2-2v-4" />
      </g>
    </svg>
  );
}

export function Send({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 2 2 9.5l7.5 3L19 5l-7.5 9.5 3 7.5L22 2Z" />
    </svg>
  );
}

export function Arrow({ size = 18 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Gear({ size = 20 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2.5l2 2.3 3-.6.9 2.9 2.9.9-.6 3 2.3 2-2.3 2 .6 3-2.9.9-.9 2.9-3-.6-2 2.3-2-2.3-3 .6-.9-2.9-2.9-.9.6-3L2.5 12l2.3-2-.6-3 2.9-.9.9-2.9 3 .6 2-2.3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Cube({ size = 18 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2 21 7v10l-9 5-9-5V7l9-5Z" stroke="var(--lime)" strokeWidth="2" strokeLinejoin="round" />
      <path d="m3 7 9 5 9-5M12 12v10" stroke="var(--lime)" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function Brush({ size = 18 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="var(--lime)" aria-hidden>
      <path d="M12 2c4 0 8 2.5 8 7 0 3-2 5-4 6l-2 1v3a3 3 0 0 1-6 0v-3L6 15c-2-1-2-4 0-6 1.5-1.5 2.5-2 3-3.5C9.5 3.5 10.5 2 12 2Z" />
      <circle cx="12" cy="9" r="2.4" fill="#0d0f0c" />
    </svg>
  );
}

export function AlienHead({ size = 44 }: P) {
  return (
    <svg width={size * 0.8} height={size} viewBox="0 0 40 50" aria-hidden>
      <path d="M20 1C9 1 2 9 2 20c0 13 10 27 18 29 8-2 18-16 18-29C38 9 31 1 20 1Z" fill="#0b0b0b" />
      <path d="M7 21c4-1 9 2 10 8-5 1-10-3-10-8ZM33 21c-4-1-9 2-10 8 5 1 10-3 10-8Z" fill="var(--lime)" />
      <path d="M20 4v10" stroke="#3a3a3a" strokeWidth="1.5" />
    </svg>
  );
}

export function Spider({ size = 48 }: P) {
  const legs = [-1, 1].flatMap((s) =>
    [0, 1, 2, 3].map((i) => {
      const y = 18 + i * 5;
      const kx = 24 + s * 12;
      const ex = 24 + s * (18 + (i % 2) * 3);
      const ky = y - 8 + i * 2;
      const ey = y + 6 + i * 3 - 4;
      return `M${24 + s * 3} ${y}L${kx} ${ky}L${ex} ${ey}`;
    })
  );
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <g stroke="#0b0b0b" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {legs.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <ellipse cx="24" cy="31" rx="7" ry="9" fill="#0b0b0b" />
      <circle cx="24" cy="18" r="5" fill="#0b0b0b" />
    </svg>
  );
}
