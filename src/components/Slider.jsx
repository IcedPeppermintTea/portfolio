import { useState } from "react";
import { projects } from "../data/selected-projects";

function Slider() {
  const [current, setCurrent] = useState(0);

  return (
    <section>
      <div className="selected-projects">
        <div className="header">
          <h2>Selected Projects</h2>
          <p>Some of my most recent projects</p>
        </div>
        <div className="carousel-arrows">
          <span></span>
        </div>
        <div className="carousel-slider">
          {projects.map((project, projectIdx) => (
            <div key={projectIdx} className="card">
              <div className="card-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="card-info-stack">
                  {project.stack.map((value, stackId) => (
                    <div key={stackId}>{value}</div>
                  ))}
                </div>
                <div className="card-info-links">
                  <a href={project.links.live}>live demo</a>
                  <a href={project.links.readme}>source</a>
                </div>
              </div>
              <div className="card-image">
                <img src={project.images[0].src} alt={project.images[0].alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Slider;
