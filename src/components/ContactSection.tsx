"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { SiGithub, SiGooglemaps } from "react-icons/si";
import { FaEnvelope, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import "./ContactSection.css";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    // Validation to prevent sending with placeholder values
    if (!serviceId || serviceId === "your_service_id_here" || 
        !templateId || templateId === "your_template_id_here" || 
        !publicKey || publicKey === "your_public_key_here") {
      console.error("EmailJS Error: Please configure your credentials in .env.local");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form,
        publicKey
      );

      if (result.text === "OK") {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000); // Reset status after 5s
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err: any) {
      // Better error logging for debugging
      console.error("EmailJS Error:", err?.text || err?.message || JSON.stringify(err));
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="contact" className="contact-section">
      {/* Decorative Orbs */}
      <div className="contact-bg-orb orb-1"></div>
      <div className="contact-bg-orb orb-2"></div>

      <motion.div 
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to bring your ideas to life? Let's collaborate and create something extraordinary together.
        </p>
      </motion.div>

      <motion.div 
        className="contact-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="contact-info-side" variants={itemVariants}>
          <h3>Let's Start a Conversation</h3>
          <p>I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.</p>
          
          <div className="info-items">
            {[
              { icon: <FaEnvelope />, label: "Email", value: "9aadityakumar12@gmail.com", href: "mailto:9aadityakumar12@gmail.com", hint: "Best way to reach me", bg: "email-bg" },
              { icon: <FaLinkedin />, label: "LinkedIn", value: "adityajha12", href: "https://linkedin.com/in/adityajha12", hint: "Professional network", bg: "linkedin-bg" },
              { icon: <SiGithub />, label: "GitHub", value: "Adityakumarjha087", href: "https://github.com/Adityakumarjha087", hint: "Code repositories", bg: "github-bg" },
              { icon: <SiGooglemaps />, label: "Location", value: "New Delhi, India", hint: "Open to remote work globally", bg: "location-bg" }
            ].map((item, idx) => (
              <motion.div key={idx} className="info-item" variants={itemVariants}>
                <div className={`info-icon ${item.bg}`}>
                  {item.icon}
                </div>
                <div className="info-text">
                  <span className="info-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} target={item.label !== "Email" ? "_blank" : undefined} rel={item.label !== "Email" ? "noopener noreferrer" : undefined}>
                      {item.value}
                    </a>
                  ) : (
                    <span className="info-value">{item.value}</span>
                  )}
                  <span className="info-hint">{item.hint}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="contact-form-side" variants={itemVariants}>
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
            <motion.button 
              type="submit" 
              className="submit-btn" 
              disabled={status === "submitting" || status === "success"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane className="btn-icon" /> 
              {status === "idle" && "Send Message"}
              {status === "submitting" && "Sending..."}
              {status === "success" && "Message Sent!"}
              {status === "error" && "Error. Try Again."}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
