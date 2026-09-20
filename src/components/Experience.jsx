const PROFESSIONAL = [
  {
    date: "Jul 2024–Present",
    title: "Technical Product Manager, SaaS Platform",
    desc: "Translate API contracts and technical specs into requirements for an 800+ user SaaS business-rule platform using SAFe Agile; run UAT with engineering and present delivery updates to leadership. Also volunteer as a front-end developer on an internal Node.js/React modernization project.",
  },
  {
    date: "May 2023–May 2024",
    title: "Business Analyst Intern, Marketing Technologies",
    desc: "Built and launched marketing microsites in Webflow with custom CSS and JavaScript, and partnered with product managers to define requirements and coordinate launches using Agile.",
  },
  {
    date: "Aug 2023–Feb 2024",
    title: "Software Engineering Tutor",
    desc: "Tutored students in Intro to Computer Science, Programming 1 & 2, and Data Structures & Algorithms (Python, C++), debugging code and preparing them for exams and assignments.",
  },
  {
    date: "Aug 2022–May 2023",
    title: "Software Engineering Research Assistant | Programmer",
    desc: "Built Python data pipelines (NumPy, Pillow) to preprocess and label 1,000+ images for a computer vision research initiative, curating a structured dataset for ML model training.",
  },
];

const EDUCATION = [
  {
    date: "2020–2024",
    title: "B.S. Software Engineering",
    desc: "Florida Gulf Coast University",
  },
];

function Timeline({ items }) {
  return (
    <div className="experience-container">
      {items.map((t, i) => (
        <div className="experience-row" key={i}>
          <span className="experience-dot" aria-hidden="true"></span>
          <div className="experience-meta">{t.date}</div>
          <div className="experience-title">{t.title}</div>
          <div className="experience-desc">{t.desc}</div>
        </div>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <section className="section-styles" id="experience">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <span className="section-rule" aria-hidden="true"></span>
      </div>
      <div className="experience-columns">
        <div className="experience-column">
          <h3 className="experience-column-title">Professional</h3>
          <Timeline items={PROFESSIONAL} />
        </div>
        <div className="experience-column">
          <h3 className="experience-column-title">Education</h3>
          <Timeline items={EDUCATION} />
        </div>
      </div>
    </section>
  );
}

export default Experience;
