import "./Timeline.css";

export function ExperienceSection() {
  const experiences = [
    {
      period: "Jan 2026 - Present",
      role: "Post LLM Trainer",
      company: "Ethora AI",
      description: "Played a key role in AI model development by managing data curation, tuning, and validation. Prepared high-quality datasets to feed into training pipelines and supported model training to improve accuracy.",
    },
    {
      period: "Jun 2025 - Aug 2025",
      role: "React.js Intern",
      company: "Celebal Technologies",
      description: "Built and optimized web interfaces using React.js and JavaScript. Collaborated with mentors on real-world projects, gaining robust experience in component-based architecture and API integration.",
    },
    {
      period: "Apr 2025 - Jun 2025",
      role: "Co Facilitator",
      company: "Google Cloud Arcade Facilitator Program",
      description: "Represented NIET in Google's Arcade program. Worked with mentors to empower students through curated learning experiences, technical sessions, and fostering inclusive tech learning environments.",
    },
    {
      period: "Mar 2024 - Jun 2024",
      role: "Technical Research Intern",
      company: "THE MORONSS",
      description: "Worked extensively on data scraping, research methodologies, and reverse engineering techniques. Derived deep insights through reverse analysis and contributed to research-oriented problem solving.",
    }
  ];

  return (
    <section id="experience" className="achievement-section">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
      </div>
      <div className="timeline">
        {experiences.map((item, index) => (
          <div key={index} className={`timeline-item animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="year">{item.period}</span>
              <h3>{item.role} <span style={{ opacity: 0.7, fontWeight: 400 }}>| {item.company}</span></h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
