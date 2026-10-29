import { Brackets, Brush, Cube } from "./Icons";
import FigureImage from "./FigureImage";

const items = [
  {
    name: "Xenomorph",
    scale: "1/6 масштаб",
    image: "/images/xenomorph.png",
    text: "Деталізована фігурка ксеноморфа з фільму “Чужий”. Висока деталізація та реалістичне фарбування.",
  },
  {
    name: "Alien Egg",
    scale: "1/1 масштаб",
    image: "/images/alien-egg.png",
    text: "Фігурка яйця ксеноморфа у натуральну величину. Ідеально для колекції та інтер’єру.",
  },
  {
    name: "Facehugger",
    scale: "1/1 масштаб",
    image: "/images/facehugger.png",
    text: "Лицехват із серії “Чужий”. Неймовірна деталізація кожної лапки та текстури.",
  },
];

export default function Collection() {
  return (
    <section className="collection" id="collection">
      <h2 className="section-title">
        <Brackets /> Наша колекція <Brackets />
      </h2>
      <div className="cards">
        {items.map((item) => (
          <article key={item.name} className="card">
            <div className="card-media">
              <FigureImage src={item.image} alt={item.name} variant="card" />
              <span className="badge">{item.scale}</span>
            </div>
            <h3>{item.name}</h3>
            <p className="card-sub">Колекційна фігурка</p>
            <div className="features">
              <span>
                <Cube /> 3D друк
              </span>
              <span>
                <Brush /> Ручне
                <br />
                фарбування
              </span>
            </div>
            <p className="card-text">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
