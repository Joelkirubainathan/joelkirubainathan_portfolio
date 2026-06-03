import { motion } from "motion/react";
import { Shield, Network, Code2, Wrench } from "lucide-react";
import { Section } from "./Section";

const groups = [
  {
    title: "Cybersecurity",
    icon: Shield,
    items: [
      ["Security Operations (SOC)", 80],
      ["Network Security", 85],
      ["Threat Analysis", 78],
      ["Vulnerability Assessment", 80],
      ["Incident Response", 72],
      ["Security Monitoring", 78],
      ["SIEM Fundamentals", 70],
      ["Risk Management", 72],
    ] as [string, number][],
  },
  {
    title: "Networking",
    icon: Network,
    items: [
      ["TCP/IP", 88],
      ["DNS / DHCP", 85],
      ["Routing & Switching", 80],
      ["Network Troubleshooting", 82],
      ["Firewall Concepts", 78],
    ] as [string, number][],
  },
  {
    title: "Programming",
    icon: Code2,
    items: [
      ["Python", 88],
      ["Bash Scripting", 78],
      ["Automation", 82],
      ["API Integration", 75],
    ] as [string, number][],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      ["Wireshark", 82],
      ["Nmap", 85],
      ["Burp Suite", 70],
      ["Nessus", 70],
      ["Kali Linux", 80],
      ["Linux Administration", 78],
      ["Windows Security Tools", 75],
    ] as [string, number][],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="SKILLS" title="Technical Arsenal">
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            className="glass rounded-2xl p-6 hover:cyber-glow transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg p-2.5 bg-cyber-primary/10">
                <g.icon className="h-5 w-5 text-cyber-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white">{g.title}</h3>
            </div>
            <div className="space-y-4">
              {g.items.map(([name, pct]) => (
                <div key={name}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-cyber-muted">{name}</span>
                    <span className="font-mono text-cyber-primary">{pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-cyber)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}