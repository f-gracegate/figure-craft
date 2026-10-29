import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Collection from "@/components/Collection";

export default function Home() {
  return (
    <div className="page">
      <div className="frame">
        <section className="hero-wrap">
          <Header />
          <Hero />
        </section>
        <About />
        <Marquee />
        <Collection />
      </div>
    </div>
  );
}
