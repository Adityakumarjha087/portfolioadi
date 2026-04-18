"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectsSection.css";

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "API QA Bot",
      description: "Automated API testing website and QA bot designed to streamline the testing lifecycle and ensure robust endpoint validation.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      liveLink: "https://api-qa-bot.vercel.app",
      repoLink: "https://github.com/Adityakumarjha087/Api_Testing_Website"
    },
    {
      id: 2,
      title: "HackXNIET 3.0 Platform",
      description: "Official event platform for HackXNIET 3.0, featuring registration systems, detailed event timelines, and collaborative workspace tools.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
      liveLink: "https://hackxniet3-0.vercel.app",
      repoLink: "https://github.com/Adityakumarjha087/hackxniet3.0"
    },
    {
      id: 3,
      title: "Recurring Date Picker",
      description: "A highly customizable React component tool for selecting complex recurring date patterns for scheduling applications.",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop",
      liveLink: "https://recurring-date-picker-peach.vercel.app",
      repoLink: "https://github.com/Adityakumarjha087/recurringDatePicker"
    },
    {
      id: 4,
      title: "HPCL Hackathon Project",
      description: "Enterprise-focused hackathon solution designed for HPCL challenge, streamlining industrial data visualization and management.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      liveLink: "https://hpcl-hackaathon.vercel.app",
      repoLink: "https://github.com/Adityakumarjha087/Hpcl_Hackaathon"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article 
            key={project.id} 
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="card-image">
              <Image 
                src={project.image} 
                alt={project.title}
                width={800}
                height={500}
                className="img"
                unoptimized // helpful for external unsplash urls to avoid next/image limitations in some envs
              />
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-btn live">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-btn repo">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
