import { AlienHead, Spider } from "./Icons";

function Row() {
  return (
    <>
      {Array.from({ length: 8 }, (_, i) => (
        <span key={i} className="marquee-unit">
          <i className="diamond" />
          {i % 2 === 0 ? <AlienHead /> : <Spider />}
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden>
      <div className="band band--back">
        <div className="track track--reverse">
          <Row />
          <Row />
        </div>
      </div>
      <div className="band band--front">
        <div className="track">
          <Row />
          <Row />
        </div>
      </div>
    </div>
  );
}
