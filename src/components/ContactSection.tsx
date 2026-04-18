"use client";

import { useState } from "react";
import { SiGmail, SiGithub, SiGooglemaps } from "react-icons/si";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import "./ContactSection.css";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    // TODO: Replace with your actual Web3Forms Access Key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
        setTimeout(() => setStatus("idle"), 5000); // Reset status after 5s
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2 className="section-title gradient-text">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to bring your ideas to life? Let's collaborate and create something extraordinary together.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info-side">
          <h3>Let's Start a Conversation</h3>
          <p>I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.</p>
          
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon email-bg">
                <FaEnvelope />
              </div>
              <div className="info-text">
                <span className="info-label">Email</span>
                <a href="mailto:9aadityakumar12@gmail.com">9aadityakumar12@gmail.com</a>
                <span className="info-hint">Best way to reach me</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon linkedin-bg">
                <FaLinkedin />
              </div>
              <div className="info-text">
                <span className="info-label">LinkedIn</span>
                <a href="https://linkedin.com/in/adityajha12" target="_blank" rel="noopener noreferrer">linkedin.com/in/adityajha12</a>
                <span className="info-hint">Professional network</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon github-bg">
                <SiGithub />
              </div>
              <div className="info-text">
                <span className="info-label">GitHub</span>
                <a href="https://github.com/Adityakumarjha087" target="_blank" rel="noopener noreferrer">github.com/Adityakumarjha087</a>
                <span className="info-hint">Code repositories</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon location-bg">
                <SiGooglemaps />
              </div>
              <div className="info-text">
                <span className="info-label">Location</span>
                <span className="info-value">New Delhi, India</span>
                <span className="info-hint">Open to remote work globally</span>
              </div>
            </div>
          </div>


        </div>

        <div className="contact-form-side">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project..." rows={6} required></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-btn" 
              disabled={status === "submitting" || status === "success"}
              style={status === "success" ? { background: "#10b981", boxShadow: "0 4px 12px rgba(16, 185, 129, 0.2)" } : {}}
            >
              <FaPaperPlane className="btn-icon" /> 
              {status === "idle" && "Send Message"}
              {status === "submitting" && "Sending..."}
              {status === "success" && "Message Sent!"}
              {status === "error" && "Error. Try Again."}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
