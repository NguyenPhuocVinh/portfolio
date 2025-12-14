"use client";

import React, { useRef, useEffect } from "react";
import StickySidebar from "./components/sticky";
import AboutSection from "./components/sections/about";
import ExperienceSection from "./components/sections/experience";
import ProjectsSection from "./components/sections/project";
import ContactSection from "./components/sections/contact";
import { Navigation } from "./components/navigation";
import { motion } from "framer-motion";
import { SectionName } from "./common/constants";
import MobileNavigation from "./components/mobile-navigation";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null!);
  const experienceRef = useRef<HTMLDivElement>(null!);
  const projectsRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);

  const [activeSection, setActiveSection] = React.useState<SectionName>("about");

  const sectionMap: Record<SectionName, React.RefObject<HTMLDivElement>> = {
    about: aboutRef,
    experience: experienceRef,
    projects: projectsRef,
    contact: contactRef,
  };

  const handleScrollToSection = (section: SectionName) => {
    const target = sectionMap[section]?.current;
    if (!target) return;

    setActiveSection(section);
    window.location.hash = section;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as SectionName;
    if (!hash || !sectionMap[hash]) return;

    setActiveSection(hash);

    requestAnimationFrame(() => {
      sectionMap[hash]?.current?.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const section = entry.target.getAttribute("data-section") as SectionName;
          if (!section) return;

          setActiveSection(section);

          if (window.location.hash !== `#${section}`) {
            window.location.hash = section;
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    Object.values(sectionMap).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      {/* ================= MOBILE SIDEBAR ================= */}
      <div className="block lg:hidden px-6 pt-20">
        <StickySidebar />
      </div>

      {/* ================= DESKTOP LEFT SIDEBAR ================= */}
      <aside className="hidden lg:block fixed inset-y-0 left-0 w-1/3 z-30 bg-white">
        <StickySidebar />
      </aside>

      {/* ================= DESKTOP RIGHT NAV ================= */}
      <aside className="hidden lg:block fixed right-10 top-1/2 -translate-y-1/2 z-40">
        <Navigation
          setSelectedSection={handleScrollToSection}
          selectedSection={activeSection}
        />
      </aside>

      {/* ================= MOBILE RIGHT NAV ================= */}
      <MobileNavigation
        setSelectedSection={handleScrollToSection}
        selectedSection={activeSection}
      />

      {/* ================= MAIN CONTENT ================= */}
      <motion.main
        className="
    px-4
    sm:px-6
    md:px-10
    lg:ml-[33.33%]
    lg:mr-40
  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div ref={aboutRef} data-section="about">
          <AboutSection />
        </div>

        <div ref={experienceRef} data-section="experience">
          <ExperienceSection />
        </div>

        <div ref={projectsRef} data-section="projects">
          <ProjectsSection />
        </div>

        <div ref={contactRef} data-section="contact">
          <ContactSection />
        </div>
      </motion.main>

    </div>
  );
}

export default App;
