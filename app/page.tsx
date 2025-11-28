"use client";

import { useEffect, useState } from "react";
import { capabilities, capacity, caseStudies, navItems, principles, process, stacks, stats, team, testimonials } from "./data/siteContent";
import { NavOrbit } from "./components/NavOrbit";
import { HeroSection } from "./components/HeroSection";
import { CapabilitiesSection } from "./components/CapabilitiesSection";
import { StacksSection } from "./components/StacksSection";
import { ProcessSection } from "./components/ProcessSection";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { TeamSection } from "./components/TeamSection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>(navItems[0].href);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavSelect = (href: string) => {
    setActiveSection(href);
    const target = document.querySelector<HTMLElement>(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      <div className="glow-grid" aria-hidden />
      <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-8 md:px-6 lg:px-4 xl:px-0">
        <NavOrbit items={navItems} activeSection={activeSection} onSelect={handleNavSelect} />

        <main className="mt-8 space-y-24">
          <HeroSection stats={stats} principles={principles} />
          <CapabilitiesSection capabilities={capabilities} />
          <StacksSection stacks={stacks} />
          <ProcessSection process={process} />
          <CaseStudiesSection caseStudies={caseStudies} />
          <TestimonialsSection testimonials={testimonials} />
          <TeamSection team={team} />
          <ContactSection capacity={capacity} />
        </main>

        <footer className="mt-16 flex flex-wrap items-center justify-between border-t border-white/10 pt-8 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Aurora Lancer • Remote-first full-stack team</p>
          <p>Built with technicolor intention.</p>
        </footer>
      </div>
    </div>
  );
}
