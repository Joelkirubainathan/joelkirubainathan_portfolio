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
import joelPhoto from "@/assets/joel.jpeg";

const siteUrl = "https://joelkirubainathan.com"; // Default portfolio domain
const joelPhotoUrl = typeof joelPhoto === "string" ? joelPhoto : (joelPhoto as any)?.src || "";
const ogImageUrl = joelPhotoUrl.startsWith("http") ? joelPhotoUrl : `${siteUrl}${joelPhotoUrl}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joel Kirubainathan | Cybersecurity Analyst & SOC Analyst Portfolio" },
      {
        name: "description",
        content:
          "Cybersecurity Professional, Certified ISC2 Candidate, Python Programmer, and Network Security Analyst. Explore my technical projects, certifications, and security tools.",
      },
      {
        name: "keywords",
        content:
          "Joel Kirubainathan, joelkirubainathan, joelkirubainathans, joel s, joel kirubainathan s, joelkirubainathan cybersecurity, joelkirubainathan portfolio, Cybersecurity Portfolio, SOC Analyst, Security Analyst, ISC2 Candidate, Python Automation, Network Security, Vulnerability Assessment, Wireshark, Nmap, Kali Linux, Threat Detection, Incident Response, Erode, Tamil Nadu, India",
      },
      { name: "author", content: "Joel Kirubainathan" },
      { name: "robots", content: "index, follow" },
      { name: "google-site-verification", content: "google-site-verification-placeholder" },
      { property: "og:title", content: "Joel Kirubainathan | Cybersecurity Analyst Portfolio" },
      {
        property: "og:description",
        content:
          "Cybersecurity Professional, Certified ISC2 Candidate, Python Programmer, and Network Security Analyst. Specialized in Threat Detection, Incident Response, and Vulnerability Assessment.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: ogImageUrl },
      { property: "profile:first_name", content: "Joel" },
      { property: "profile:last_name", content: "Kirubainathan" },
      { property: "profile:username", content: "Joelkirubainathan" },
      { property: "profile:gender", content: "male" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Joel Kirubainathan | Cybersecurity Portfolio" },
      {
        name: "twitter:description",
        content:
          "Cybersecurity Professional, Certified ISC2 Candidate, Python Programmer, and Network Security Analyst.",
      },
      { name: "twitter:image", content: ogImageUrl },
    ],
    links: [{ rel: "canonical", href: siteUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Joel Kirubainathan",
          url: siteUrl,
          image: ogImageUrl,
          gender: "male",
          email: "joelkirubainathan@gmail.com",
          jobTitle: "Cybersecurity Analyst",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Erode",
            addressRegion: "Tamil Nadu",
            addressCountry: "India",
          },
          alumniOf: {
            "@type": "EducationalOrganization",
            name: "VET Institute of Arts and Science (Co-education) College",
          },
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Certification",
            name: "ISC2 Candidate",
            recognizedBy: {
              "@type": "Organization",
              name: "International Information System Security Certification Consortium (ISC2)",
            },
          },
          sameAs: [
            "https://www.linkedin.com/in/joelkirubainathans",
            "https://github.com/Joelkirubainathan",
            "https://leetcode.com/u/JoelkirubainathanS/",
          ],
          knowsAbout: [
            "Cybersecurity",
            "Security Operations Center (SOC)",
            "Network Security",
            "Threat Detection",
            "Vulnerability Assessment",
            "Incident Response",
            "Python Programming",
            "Wireshark",
            "Nmap",
            "Kali Linux",
            "SIEM",
            "Bash Scripting",
          ],
          description:
            "Aspiring Cybersecurity Professional, ISC2 Candidate, and Network Security Specialist focusing on Threat Analysis, Security Operations, and Python Automation.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Joel Kirubainathan Portfolio",
          "url": siteUrl,
          "description": "Professional Cybersecurity and SOC Analyst portfolio of Joel Kirubainathan.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl}/?search={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${siteUrl}/#webpage`,
          "url": siteUrl,
          "name": "Joel Kirubainathan | Cybersecurity Analyst & SOC Analyst Portfolio",
          "description": "Joel Kirubainathan – Cybersecurity Analyst, ISC2 Candidate, Python Programmer. Portfolio showcasing cybersecurity skills, certifications, and projects.",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
              }
            ]
          }
        }),
      }
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
