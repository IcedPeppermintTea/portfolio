import { hero } from "../data/hero-data.js";

function Hero() {
  const { eyebrow, title_1, title_2, title_3, lede, btn_1, btn_2 } = hero;
  return (
    <section className="hero section-styles">
      <p className="hero-eyebrow">{eyebrow}</p>
      <h1 className="hero-title">
        {title_1}
        <br />
        {title_2}
        <br />
        <span className="hero-title-accent">{title_3}</span>
      </h1>
      <p className="hero-lede">{lede}</p>

      <div className="hero-actions">
        <a
          className="btn btn--primary"
          href={btn_1.link}
          target="_blank"
          rel="noreferrer"
        >
          {btn_1.title}
        </a>
        <a
          className="btn btn--ghost"
          href={btn_2.link}
          target="_blank"
          rel="noreferrer"
        >
          {btn_2.title}
        </a>
      </div>
    </section>
  );
}

export default Hero;
