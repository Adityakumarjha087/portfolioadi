"use client";

import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./Navbar.css";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If we are at the very top, always show it
      if (currentScrollY < 50) {
        setIsVisible(true);
      } 
      // Scrolling down -> hide
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } 
      // Scrolling up -> show
      else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`navbar ${!isVisible ? "navbar-hidden" : ""}`}>
      <div className="navbar-content">
        <Link href="/" className="logo">
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
    </header>
  );
}
