import { LogoMark, Send } from "./Icons";

const links = ["Головна", "Колекція", "Про нас", "Процес", "Контакти"];

export default function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">
        <LogoMark size={36} />
        <span>
          <b>FIGURE</b>
          <i>CRAFT</i>
        </span>
      </a>
      <nav className="nav">
        {links.map((l, i) => (
          <a key={l} href={`#${i}`} className={i === 0 ? "active" : undefined}>
            {l}
          </a>
        ))}
      </nav>
      <a href="#contact" className="contact-btn">
        <Send /> Зв&apos;язатися з нами
      </a>
    </header>
  );
}
