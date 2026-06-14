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
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-3xl overflow-hidden rounded-2xl border-cyber glass"
      >
        <div className="flex flex-col items-center gap-6 p-8 md:flex-row md:items-start">
          <div className="flex-1">
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
          </div>

          <div className="flex shrink-0 items-center justify-center">
            <img
              src={certificateAsset.url}
              alt="ISC2 Candidate certificate for Joel Kirubainathan"
              className="max-h-[220px] w-auto object-contain"
            />
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
