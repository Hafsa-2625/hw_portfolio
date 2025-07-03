"use client"
import HeroSection from "../components/hero-section"
import JourneySection from "../components/journey-section"
import AboutSection from "../components/about-section"
import ProjectsSection from "../components/projects-section"
import ProcessSection from "../components/process-section"
import ToolsSection from "../components/tools-section"
// import SkillsSection from "../components/skills-section"
import ContactSection from "../components/contact-section"
import Navigation from "../components/navigation"

export default function Portfolio() {
  return (
    <div className="bg-funky-pink">
      <Navigation />
      <main>
        <div className="bg-funky-pink">
          <HeroSection />
        </div>
        <div className="bg-funky-pink">
          <JourneySection />
        </div>
        <AboutSection />
        <ProjectsSection />
        <ToolsSection />
        <div className="bg-funky-pink">
          <ProcessSection />
        </div>
        {/* <SkillsSection /> */}
        <div className="bg-funky-pink">
          <ContactSection />
        </div>
      </main>
    </div>
  )
}
