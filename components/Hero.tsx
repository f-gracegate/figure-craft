import { Arrow, Gear } from "./Icons";
import FigureImage from "./FigureImage";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-copy">
        <h1>
          <span>3D</span>
          <span>FIGURE</span>
          <span className="outline">CRAFT</span>
        </h1>
        <p className="tagline">
          <Gear />
          <span>
            Преміум 3D фігурки
            <br />
            на замовлення
          </span>
        </p>
        <a href="#collection" className="cta">
          Замовити фігурку <Arrow />
        </a>
      </div>

      <div className="hero-figure">
        <FigureImage src="/images/hero.png" alt="Фігурка ксеноморфа" variant="hero" />
      </div>

      <div className="slider-indicator">
        <span>01</span>
        <i />
        <i className="on" />
        <i />
      </div>
    </div>
  );
}
