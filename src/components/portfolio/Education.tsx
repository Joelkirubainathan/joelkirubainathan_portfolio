import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

const education = [
  {
    degree: "Bachelor's Degree (Edit me)",
    institution: "Your Institution Name",
    year: "Graduation Year",
    coursework: [
      "Computer Networks",
      "Operating Systems",
      "Cybersecurity Fundamentals",
      "Programming with Python",
      "Database Systems",
    ],
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="EDUCATION" title="Academic Background">
      <div className="grid gap-6 max-w-4xl mx-auto">
        {education.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-7 hover:cyber-glow transition"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-cyber-primary/10 p-3">
                <GraduationCap className="h-6 w-6 text-cyber-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {e.degree}
                  </h3>
                  <span className="font-mono text-xs text-cyber-primary">
                    {e.year}
                  </span>
                </div>
                <p className="text-sm text-cyber-muted">{e.institution}</p>
                <div className="mt-4">
                  <div className="font-mono text-[10px] text-cyber-muted tracking-widest mb-2">
                    RELEVANT_COURSEWORK
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {e.coursework.map((c) => (
                      <span
                        key={c}
                        className="text-xs px-3 py-1 rounded-full glass border border-cyber-glass-border text-cyber-muted"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}