function Experience() {
  return (
    <section className="section-styles" id="experience">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <span className="section-rule" aria-hidden="true"></span>
      </div>
      <div className="experience-container">
        <div className="experience-row">
          <span className="experience-date">2024-Present</span>
          <span className="experience-desc">
            <strong>Technical Product Manager</strong>
            <br />
            Managing roadmap, user stories and feature deliveries while working
            alongside engineering teams
          </span>
        </div>
        <div className="experience-row">
          <span className="experience-date">2020-2024</span>
          <span className="experience-desc">
            <strong>B.S. Software Engineering</strong>
            <br />
            Florida Gulf Coast University
          </span>
        </div>
      </div>
    </section>
  );
}

export default Experience;
