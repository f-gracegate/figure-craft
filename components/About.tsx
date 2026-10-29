import { Brackets } from "./Icons";

function ChromeCross() {
  return (
    <svg viewBox="0 0 200 200" className="chrome chrome--cross" aria-hidden>
      <defs>
        <radialGradient id="gloss1" cx="35%" cy="30%" r="75%">
          <stop offset="0" stopColor="#8a8a8a" />
          <stop offset=".25" stopColor="#2a2a2a" />
          <stop offset=".7" stopColor="#070707" />
          <stop offset="1" stopColor="#1c1c1c" />
        </radialGradient>
      </defs>
      <g fill="none" stroke="url(#gloss1)" strokeWidth="14" strokeLinecap="round">
        <path d="M100 8 L100 192" />
        <path d="M8 100 L192 100" />
        <ellipse cx="100" cy="62" rx="22" ry="30" />
        <ellipse cx="100" cy="138" rx="22" ry="30" />
        <ellipse cx="62" cy="100" rx="30" ry="22" />
        <ellipse cx="138" cy="100" rx="30" ry="22" />
      </g>
      <circle cx="100" cy="100" r="16" fill="url(#gloss1)" />
    </svg>
  );
}

function ChromeStar() {
  const pts = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? 95 : 32;
    return `${100 + Math.cos(a) * r},${100 + Math.sin(a) * r}`;
  });
  return (
    <svg viewBox="0 0 200 200" className="chrome chrome--star" aria-hidden>
      <defs>
        <radialGradient id="gloss2" cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#bdbdbd" />
          <stop offset=".18" stopColor="#3b3b3b" />
          <stop offset=".6" stopColor="#090909" />
          <stop offset="1" stopColor="#262626" />
        </radialGradient>
      </defs>
      <polygon points={pts.join(" ")} fill="url(#gloss2)" stroke="#444" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

export default function About() {
  return (
    <section className="about" id="2">
      <ChromeCross />
      <div className="about-text">
        <h2 className="section-title">
          <Brackets /> Про нас <Brackets />
        </h2>
        <p>
          Figure Craft — студія, що спеціалізується
          <br />
          на створенні колекційних 3D фігурок
          <br />
          по всесвітам кіно, ігор та коміксів.
        </p>
        <p>
          Ми поєднуємо цифрове моделювання,
          <br />
          3D друк і ручне фарбування, щоб передати
          <br />
          характер, атмосферу та найдрібніші деталі.
        </p>
      </div>
      <ChromeStar />
    </section>
  );
}
