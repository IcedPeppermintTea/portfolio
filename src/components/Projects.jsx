import { useState } from "react";
import { projects } from "../data/selected-projects";

function Projects() {
  const [expanded, setExpanded] = useState({});

  const toggle = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="section-styles" id="projects">
      <div className="section-header">
        <h2 className="section-title">Showcased Projects</h2>
        <p className="section-subtitle">Some of my most recent projects</p>
        <span className="section-rule" aria-hidden="true"></span>
      </div>
      <div className="projects-list">
        {projects.map((project) => {
          const isOpen = !!expanded[project.id];
          return (
            <div className="project-card" key={project.id}>
              <div
                className="project-card-header"
                onClick={() => toggle(project.id)}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(project.id);
                  }
                }}
              >
                <h3>{project.title}</h3>
                <span className="project-marker" aria-hidden="true">
                  {isOpen ? "–" : "+"}
                </span>
              </div>
              {isOpen && (
                <div className="project-card-body">
                  <p>{project.description}</p>
                  <div className="project-stack">
                    {project.stack.map((value, stackId) => (
                      <span key={stackId}>{value}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noreferrer">
                        View Live &rarr;
                      </a>
                    )}
                    <a href={project.links.readme} target="_blank" rel="noreferrer">
                      Readme &rarr;
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
