"use client";

import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ThemeToggle.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextTheme, setNextTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    if (isTransitioning) return;
    
    const targetTheme = theme === "light" ? "dark" : "light";
    setNextTheme(targetTheme);
    setIsTransitioning(true);

    // Context swap halfway through the transition when screen is covered
    setTimeout(() => {
      toggleTheme();
    }, 450);

    // End transition
    setTimeout(() => {
      setIsTransitioning(false);
      setNextTheme(null);
    }, 1000);
  };

  if (!mounted) return null;

  return (
    <>
      <button
        onClick={handleToggle}
        className="theme-toggle"
        aria-label="Toggle theme"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      <AnimatePresence>
        {isTransitioning && nextTheme && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: nextTheme === "dark" ? "#09090b" : "#fafafa",
              zIndex: 99999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pointerEvents: "all"
            }}
          >
            <motion.div
              initial={{ scale: 0.2, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.2, rotate: 45, opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 20,
              }}
              style={{
                fontSize: "8rem",
                filter: nextTheme === "dark" 
                  ? "drop-shadow(0 0 50px rgba(192, 132, 252, 0.8))" 
                  : "drop-shadow(0 0 50px rgba(250, 204, 21, 0.8))"
              }}
            >
              {nextTheme === "dark" ? "🌙" : "☀️"}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
