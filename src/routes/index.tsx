import { createFileRoute } from "@tanstack/react-router";
import { CyberBackground } from "@/components/portfolio/CyberBackground";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications } from "@/components/portfolio/Certifications";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";

import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joel Kirubainathan | Cybersecurity Portfolio" },
      {
        name: "description",
        content:
          "Cybersecurity Fresher, ISC2 Candidate, Python Programmer, and Network Security Enthusiast. Explore projects, skills, certifications, and cybersecurity expertise.",
      },
      {
        name: "keywords",
        content:
          "Cybersecurity Portfolio, SOC Analyst, Security Analyst, ISC2 Candidate, Python Programmer, Network Security, Vulnerability Assessment, Cybersecurity Fresher",
      },
      { name: "author", content: "Joel Kirubainathan" },
      { property: "og:title", content: "Joel Kirubainathan | Cybersecurity Portfolio" },
      {
        property: "og:description",
        content:
          "Cybersecurity Fresher, ISC2 Candidate, Python Programmer, and Network Security Enthusiast.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Joel Kirubainathan | Cybersecurity Portfolio" },
      {
        name: "twitter:description",
        content:
          "Cybersecurity Fresher, ISC2 Candidate, Python Programmer, and Network Security Enthusiast.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Joel Kirubainathan",
          jobTitle: "Cybersecurity Analyst",
          description:
            "Cybersecurity Fresher, ISC2 Candidate, Python Programmer, Network Security Enthusiast",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-dvh bg-cyber text-white">
      <CyberBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Experience />
        <Education />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
