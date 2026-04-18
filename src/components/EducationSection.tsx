import "./Timeline.css";

export function EducationSection() {
  const education = [
    {
      period: "Jan 2022 - Jul 2026",
      degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
      institution: "Noida Institute of Engineering & Technology",
      description: "Grade: A. Pursuing B.Tech with a strong focus on software development and AI integrations. Active in multiple societies including VP of GDG Club, Core Member of Ekume Club, and Hackathon Organizer.",
    },
    {
      period: "2020 - 2022",
      degree: "12th, SCIENCE (PCM)",
      institution: "Kendriya Vidyalaya (KV)",
      description: "Grade: A. Active participant in football and early programming initiatives.",
    }
  ];

  return (
    <section id="education" className="achievement-section">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
      </div>
      <div className="timeline">
        {education.map((item, index) => (
          <div key={index} className={`timeline-item animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="year">{item.period}</span>
              <h3>{item.degree}</h3>
              <p style={{ fontWeight: 600, color: 'var(--accent-color)' }}>{item.institution}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
