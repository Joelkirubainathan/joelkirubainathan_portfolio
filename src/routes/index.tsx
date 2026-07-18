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
          "Joel Kirubainathan, joelkirubainathan, joelkirubainathans, joel s, joel kirubainathan s, who is joel kirubainathan, hire joel kirubainathan, joel kirubainathan resume, joelkirubainathan cybersecurity, joelkirubainathan portfolio, Cybersecurity Portfolio, SOC Analyst, Security Analyst, ISC2 Candidate, Python Automation, Network Security, Vulnerability Assessment, Wireshark, Nmap, Kali Linux, Threat Detection, Incident Response, Erode, Tamil Nadu, India",
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
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: "Joel Kirubainathan Portfolio" },
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
      { name: "twitter:creator", content: "@Joelkirubainathan" },
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
          jobTitle: ["Cybersecurity Analyst", "SOC Analyst", "Security Analyst"],
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
          hasCredential: [
            {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "Certification",
              name: "ISC2 Candidate",
              recognizedBy: {
                "@type": "Organization",
                name: "International Information System Security Certification Consortium (ISC2)",
              },
            },
            {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "Certification",
              name: "Claude Code 101",
              recognizedBy: {
                "@type": "Organization",
                name: "Anthropic",
              },
            },
          ],
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
            "AI-Assisted Coding",
            "Agentic Workflows",
          ],
          description:
            "Aspiring Cybersecurity Professional, SOC Analyst, and Network Security Specialist focusing on Threat Analysis, Security Operations, and Python Automation.",
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
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Who is Joel Kirubainathan?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Joel Kirubainathan is an aspiring Cybersecurity Professional and SOC Analyst based in Erode, Tamil Nadu, India. He holds a Bachelor's degree from VET Institute of Arts and Science and is recognized as an ISC2 Candidate, specializing in network security, threat detection, and Python-based security automation."
              }
            },
            {
              "@type": "Question",
              "name": "What certifications does Joel Kirubainathan hold?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Joel Kirubainathan is an official ISC2 Candidate actively preparing for professional cybersecurity certifications. He also holds a Claude Code 101 Certificate of Completion from Anthropic, reflecting expertise in AI-assisted development and automated agentic coding workflows."
              }
            },
            {
              "@type": "Question",
              "name": "What cybersecurity roles is Joel Kirubainathan available for?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Joel is looking for entry-level opportunities in modern Security Operations Centers (SOC) and cybersecurity teams. Key available roles include SOC Analyst (L1), Security Analyst, Cybersecurity Associate, Network Security Analyst, and Python Automation Specialist."
              }
            },
            {
              "@type": "Question",
              "name": "How can I contact or hire Joel Kirubainathan?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can contact Joel directly through the Contact Form on this portfolio, email him at joelkirubainathan@gmail.com, or connect via LinkedIn (linkedin.com/in/joelkirubainathans). He is open to remote roles, as well as on-site opportunities in Erode, Chennai, Bangalore, and across India."
              }
            }
          ]
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
