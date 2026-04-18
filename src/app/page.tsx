import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TechStack } from "@/components/TechStack";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { AchievementGallery } from "@/components/AchievementGallery";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TechStack />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <TestimonialSection />
        <AchievementGallery />
        <ContactSection />
      </main>

      <footer className="footer">
        <p>© 2025 Aditya. All rights reserved. Built with passion and creativity.</p>
      </footer>
    </>
  );
}
