import "./AchievementGallery.css";

export function AchievementGallery() {
  const achievements = [
    { title: "Hackathon Excellence", image: "/achivement/1696879390293.jpg" },
    { title: "Technical Workshop Participation", image: "/achivement/1749839741767.jpg" },
    { title: "Certification of Achievement", image: "/achivement/1749839742806.jpg" },
    { title: "Event Organizer Recognition", image: "/achivement/1754216227258.jpg" },
    { title: "Professional Achievement", image: "/achivement/Screenshot 2026-04-18 122150.png" }
  ];

  // Duplicate items for seamless loop
  const displayAchievements = [...achievements, ...achievements];

  return (
    <section id="achievements" className="achievement-gallery-section">
      <div className="section-header">
        <h2 className="section-title">Achievements Gallery</h2>
      </div>
      
      <div className="slider-container">
        <div className="slider-track">
          {displayAchievements.map((item, index) => (
            <div key={index} className="gallery-item-marquee">
              <img src={item.image} alt={item.title} />
              <div className="gallery-marquee-overlay">
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
