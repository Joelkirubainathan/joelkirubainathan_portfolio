import { motion } from "motion/react";
import { Award } from "lucide-react";
import certificateAsset from "@/assets/isc2-candidate.png.asset.json";
import { Section } from "./Section";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="CREDENTIALS"
      title="Certifications & Roadmap"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-2xl border-cyber glass p-8"
        >
          <Award className="mb-5 h-10 w-10 text-cyber-primary" />
          <div className="mb-2 font-mono text-[10px] tracking-widest text-cyber-primary">
            IN PROGRESS
          </div>
          <h3 className="text-2xl font-bold text-white">ISC2 Candidate</h3>
          <p className="mt-2 text-xs text-cyber-muted">
            International Information System Security Certification Consortium
          </p>
          <p className="mt-5 text-sm leading-relaxed text-cyber-muted">
            Actively pursuing professional cybersecurity certification and strengthening foundational security knowledge.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex items-center justify-center overflow-hidden rounded-2xl border-cyber glass p-6"
        >
          <img
            src={certificateAsset.url}
            alt="ISC2 Candidate certificate for Joel Kirubainathan"
            className="max-h-[300px] w-full object-contain"
          />
        </motion.div>
      </div>
    </Section>
  );
}
