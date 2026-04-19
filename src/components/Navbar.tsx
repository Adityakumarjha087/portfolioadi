"use client";

import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Close menu on scroll if desired, or keep it open. 
      // Usually better to stay open until clicked.
      
      if (currentScrollY < 50) {
        setIsVisible(true);
      } 
      else if (currentScrollY > lastScrollY && !isMenuOpen) {
        setIsVisible(false);
      } 
      else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`navbar ${!isVisible ? "navbar-hidden" : ""}`}>
      <div className="navbar-content">
        <button 
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <Link href="/" className="logo" onClick={closeMenu}>
          Portfolio
        </Link>
        
        <nav className="nav-links">
          <Link href="#projects">Projects</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#education">Education</Link>
          <Link href="#testimonials">Feedback</Link>
          <Link href="#achievements">Achievements</Link>
          <Link href="#contact" className="nav-contact-btn">Contact</Link>
        </nav>
        
        <ThemeToggle />
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <nav className="mobile-nav-links">
              <Link href="#projects" onClick={closeMenu}>Projects</Link>
              <Link href="#experience" onClick={closeMenu}>Experience</Link>
              <Link href="#education" onClick={closeMenu}>Education</Link>
              <Link href="#testimonials" onClick={closeMenu}>Feedback</Link>
              <Link href="#achievements" onClick={closeMenu}>Achievements</Link>
              <Link href="#contact" className="mobile-contact-btn" onClick={closeMenu}>Contact Me</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
