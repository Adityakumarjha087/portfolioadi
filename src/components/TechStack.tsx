"use client";

import { motion } from "framer-motion";
import { FaCode, FaLayerGroup, FaServer, FaDatabase, FaCloud, FaTools } from "react-icons/fa";
import "./TechStack.css";

export function TechStack() {
  const categories = [
    {
      title: "Languages",
      icon: <FaCode />,
      skills: ["Java", "JavaScript / TypeScript", "C++"]
    },
    {
      title: "Frontend",
      icon: <FaLayerGroup />,
      skills: ["React.js", "Next.js", "Redux", "Tailwind CSS"]
    },
    {
      title: "Backend",
      icon: <FaServer />,
      skills: ["Node.js", "Express.js", "Spring Boot"]
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud />,
      skills: ["AWS", "Docker", "Git / GitHub"]
    },
    {
      title: "Tools & Others",
      icon: <FaTools />,
      skills: ["VS Code", "Postman", "Figma"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">My Tech Stack</h2>
      </div>
      <div className="skills-grid-categorized">
        {categories.map((category, index) => (
          <motion.div 
            key={category.title} 
            className="category-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="category-header">
              <div className="category-icon-wrapper">
                {category.icon}
              </div>
              <h3 className="category-title">{category.title}</h3>
            </div>
            <ul className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <motion.li 
                  key={skill} 
                  className="skill-item"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.1) + 0.3 }}
                  whileHover={{ x: 8, color: "var(--accent-color)" }}
                >
                  <span className="skill-dot"></span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
