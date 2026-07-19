import { useState } from "react";
import { motion } from "motion/react";
import { Github, ShieldAlert, Radar, FileSearch, Key } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    title: "Network Vulnerability Scanner",
    icon: ShieldAlert,
    category: "Security",
    description:
      "Python-based tool for identifying network vulnerabilities and generating actionable security reports.",
    tech: ["Python", "Nmap", "Socket", "Reporting"],
    features: ["Service detection", "CVE mapping", "PDF reports"],
    github: "#",
  },
  {
    title: "Port Scanner",
    icon: Radar,
    category: "Reconnaissance",
    description:
      "Python port scanner for network reconnaissance and security assessment with multi-threading.",
    tech: ["Python", "Threading", "Sockets"],
    features: ["TCP/UDP scan", "Banner grabbing", "Fast multi-threaded"],
    github: "#",
  },
  {
    title: "Security Log Analyzer",
    icon: FileSearch,
    category: "Monitoring",
    description:
      "Automated log analysis solution for detecting suspicious activities and surfacing security events.",
    tech: ["Python", "Regex", "Pandas"],
    features: ["Anomaly detection", "Alerting", "Dashboard export"],
    github: "#",
  },
  {
    title: "Personal Password Wordlist Generator",
    icon: Key,
    category: "Security",
    description:
      "Python-based CLI tool that generates highly customized password wordlists for security audits and penetration testing.",
    tech: ["Python", "CLI", "Security"],
    features: ["Target profiling", "Leet speak mutations", "Custom permutations"],
    github: "https://github.com/Joelkirubainathan/personal-password-wordlist-generator.git",
  },
];

const filters = ["All", "Security", "Reconnaissance", "Monitoring"];

export function Projects() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Section
      id="projects"
      eyebrow="PROJECTS"
      title="Featured Security Projects"
      subtitle="Hands-on builds spanning threat detection, automation, and network analysis."
    >
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {filters.map((f) => (
          <motion.button
            key={f}
            onClick={() => setActive(f)}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
              active === f
                ? "bg-cyber-primary text-[#0A0F1C] cyber-glow"
                : "glass text-cyber-muted hover:text-white"
            }`}
            style={
              active === f ? { background: "var(--gradient-cyber)" } : undefined
            }
          >
            {f.toUpperCase()}
          </motion.button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((p, i) => (
          <motion.article
            key={p.title}
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative glass rounded-2xl p-7 hover:cyber-glow hover:-translate-y-1 transition-all overflow-hidden cursor-pointer"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-primary to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="flex items-start justify-between mb-4">
              <div className="rounded-lg bg-cyber-primary/10 p-3">
                <p.icon className="h-6 w-6 text-cyber-primary" />
              </div>
              <span className="font-mono text-[10px] text-cyber-muted tracking-widest">
                {p.category.toUpperCase()}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white group-hover:text-cyber-primary transition">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-cyber-muted leading-relaxed">
              {p.description}
            </p>

            <ul className="mt-4 space-y-1.5">
              {p.features.map((f) => (
                <li
                  key={f}
                  className="text-xs text-cyber-muted flex items-start gap-2"
                >
                  <span className="text-cyber-primary mt-0.5">▸</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-cyber-primary border border-cyber-glass-border"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3 pt-4 border-t border-white/5">
              <a
                href={p.github}
                className="inline-flex items-center gap-1.5 text-xs text-cyber-muted hover:text-cyber-primary transition"
              >
                <Github className="h-3.5 w-3.5" /> Code
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}