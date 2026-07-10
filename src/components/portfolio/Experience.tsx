import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Section } from "./Section";

const timeline = [
  {
    year: "2024 — Present",
    title: "ISC2 Candidate Achievement",
    body: "Enrolled as an ISC2 Candidate, building toward professional cybersecurity certifications and deepening foundational security knowledge.",
  },
  {
    year: "2024",
    title: "Hands-on Security Labs",
    body: "Practical labs on TryHackMe / HackTheBox-style environments: reconnaissance, exploitation, privilege escalation, defensive monitoring.",
  },
  {
    year: "2024",
    title: "Python Security Automation Projects",
    body: "Built port scanners, vulnerability assessment helpers, and log analyzers with Python — focusing on automation for SOC workflows.",
  },
  {
    year: "2023",
    title: "Networking Studies",
    body: "In-depth study of TCP/IP, routing, switching, DNS, DHCP, firewalls and packet flow — the foundation of network defense.",
  },
  {
    year: "2023",
    title: "Cybersecurity Learning Path",
    body: "Started structured self-learning across SOC operations, threat detection, vulnerability management and secure programming.",
  },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 15%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <Section
      id="experience"
      eyebrow="JOURNEY"
      title="Experience & Learning Path"
      subtitle="A continuous timeline of upskilling in offensive and defensive security."
    >
      <div ref={containerRef} className="relative max-w-3xl mx-auto">
        {/* Base track */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-white/20 rounded-full" />
        {/* Scroll-progress line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-4 md:left-1/2 top-0 w-[2px] md:-translate-x-1/2 bg-white rounded-full"
        />
        <div className="space-y-10">
          {timeline.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative flex md:items-center ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-white ring-4 ring-[#0A0F1C]" />
              <div className="pl-12 md:pl-0 md:w-1/2 md:px-8">
                <div className="glass rounded-xl p-5 hover:cyber-glow transition">
                  <div className="font-mono text-[10px] text-cyber-primary tracking-widest">
                    {t.year}
                  </div>
                  <h3 className="mt-1 font-semibold text-white">{t.title}</h3>
                  <p className="mt-2 text-sm text-cyber-muted leading-relaxed">
                    {t.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}