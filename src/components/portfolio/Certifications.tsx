import { motion } from "motion/react";
import { Award, Lock } from "lucide-react";
import { Section } from "./Section";

const current = {
  title: "ISC2 Candidate",
  issuer: "International Information System Security Certification Consortium",
  description:
    "Actively pursuing professional cybersecurity certification and strengthening foundational security knowledge.",
  status: "IN PROGRESS",
};

const future = [
  { name: "ISC2 CC", desc: "Certified in Cybersecurity" },
  { name: "CompTIA Security+", desc: "Industry-standard baseline" },
  { name: "CEH", desc: "Certified Ethical Hacker" },
  { name: "CySA+", desc: "Cybersecurity Analyst" },
  { name: "CISSP", desc: "Future long-term goal" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="CREDENTIALS"
      title="Certifications & Roadmap"
    >
      <div className="grid lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-1 relative glass rounded-2xl p-8 cyber-glow border-cyber overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-cyber-primary/10 blur-3xl" />
          <Award className="h-10 w-10 text-cyber-primary mb-4" />
          <div className="font-mono text-[10px] text-cyber-primary tracking-widest mb-2">
            {current.status}
          </div>
          <h3 className="text-2xl font-bold text-white">{current.title}</h3>
          <p className="text-xs text-cyber-muted mt-2">{current.issuer}</p>
          <p className="mt-4 text-sm text-cyber-muted leading-relaxed">
            {current.description}
          </p>
        </motion.div>

        <div className="lg:col-span-2">
          <div className="font-mono text-xs text-cyber-muted mb-4 tracking-widest">
            // CERTIFICATION_ROADMAP
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {future.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-xl p-5 hover:border-cyber hover:cyber-glow transition-all group"
              >
                <div className="flex items-start justify-between">
                  <Lock className="h-5 w-5 text-cyber-muted group-hover:text-cyber-primary transition" />
                  <span className="font-mono text-[10px] text-cyber-muted">
                    PLANNED
                  </span>
                </div>
                <h4 className="mt-3 font-semibold text-white">{c.name}</h4>
                <p className="text-xs text-cyber-muted mt-1">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}