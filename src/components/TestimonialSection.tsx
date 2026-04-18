import "./TestimonialSection.css";

export function TestimonialSection() {
  const testimonials = [
    {
      name: "Shikhar Singh",
      role: "Ops @100xSchool | Specialist Programmer @Infosys",
      date: "July 30, 2025",
      feedback: "I had the pleasure of working with Aditya Jha as a Co-Facilitator under my guidance. His dedication, reliability, and positive attitude were truly commendable. He consistently supported the team with enthusiasm and professionalism. Thank you, Aditya, for your valuable contribution—it was genuinely appreciated!",
    },
    {
      name: "Tanuj Upadhyay",
      role: "Product Thinker | Harvard Delegate @HPAIR | Entrepreneur",
      date: "July 9, 2025",
      feedback: "It’s been a pleasure working with Aditya during his time at The Moronss. He brought incredible energy and commitment to the team from day one. Whether it was diving deep into research, building meaningful connections, or taking initiative on tasks, Aditya consistently showed a strong sense of responsibility and drive.",
    },
    {
      name: "Pranav Garg",
      role: "Entrepreneur | Operations Manager @The Moronss",
      date: "July 9, 2025",
      feedback: "I had the pleasure of working with Aditya Jha at The Moronss, where he contributed to both content generation and operational management. He is proactive, reliable and brings creativity and structure to every task. His dedication and team spirit made a strong impact, and I’m confident he’ll excel in any role he takes on.",
    },
    {
      name: "Anushka Trivedi",
      role: "Harvard Delegate @HPAIR | Data Analyst",
      date: "March 22, 2025",
      feedback: "Aditya has been a fantastic addition to The Moronss team. His dedication, sharp research skills and ability to connect with people made a real time impact. He's proactive, insightful and great to work with.",
    }
  ];

  // Duplicate for seamless loop
  const displayTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">Testimonials</h2>
      </div>
      
      <div className="slider-container">
        <div className="slider-track" style={{ animationDuration: '60s' }}>
          {displayTestimonials.map((item, index) => (
            <div key={index} className="testimonial-card-marquee">
              <div className="quote-icon">"</div>
              <p className="feedback-text">{item.feedback}</p>
              <div className="author-info">
                <h4>{item.name}</h4>
                <p>{item.role}</p>
                <span className="date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
