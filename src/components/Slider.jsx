import { useState } from "react";
import { projects } from "../data/selected-projects";

function Slider() {
  const [current, setCurrent] = useState(0);
  const project_length = projects.length - 1;
  const project = projects[current];

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? project_length : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === project_length ? 0 : prev + 1));
  };

  return (
    <section className="section-styles">
      <div className="selected-projects">
        <div className="section-header">
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">Some of my most recent projects</p>
          <span className="section-rule" aria-hidden="true"></span>
        </div>
        <div className="carousel">
          <div className="carousel-arrows">
            <span>{`${current + 1} / ${project_length + 1}`}</span>
            <button onClick={prev} aria-label="previous">
              ←
            </button>
            <button onClick={next} aria-label="next">
              →
            </button>
          </div>
          <div className="carousel-slider">
            <div key={current} className="card">
              <div className="card-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="card-info-stack">
                  {project.stack.map((value, stackId) => (
                    <div key={stackId}>{value}</div>
                  ))}
                </div>
                <div className="card-info-links">
                  {project.links.live && (
                    <a href={project.links.live}>live demo</a>
                  )}
                  <a href={project.links.readme}>source</a>
                </div>
              </div>
              <div className="card-image">
                <img src={project.images[0].src} alt={project.images[0].alt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
