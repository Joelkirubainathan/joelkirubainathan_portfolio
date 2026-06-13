import { motion } from "motion/react";
import { Award, Lock } from "lucide-react";
import { useState } from "react";
import certificateAsset from "@/assets/isc2-candidate.png.asset.json";
import { Button } from "@/components/ui/button";
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
  const [isFlipped, setIsFlipped] = useState(false);

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
          className="lg:col-span-1 min-h-[360px] [perspective:1200px]"
        >
          <Button
            type="button"
            variant="ghost"
            aria-label={isFlipped ? "Show certification details" : "Show ISC2 certificate"}
            aria-pressed={isFlipped}
            onClick={() => setIsFlipped((flipped) => !flipped)}
            className="group h-full min-h-[360px] w-full whitespace-normal rounded-2xl p-0 text-left hover:bg-transparent"
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full min-h-[360px] w-full [transform-style:preserve-3d]"
            >
              <div className="absolute inset-0 overflow-hidden rounded-2xl border-cyber glass p-8 cyber-glow [backface-visibility:hidden]">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyber-primary/10 blur-3xl" />
                <Award className="mb-4 h-10 w-10 text-cyber-primary" />
                <div className="mb-2 font-mono text-[10px] tracking-widest text-cyber-primary">
                  {current.status}
                </div>
                <h3 className="text-2xl font-bold text-white">{current.title}</h3>
                <p className="mt-2 text-xs text-cyber-muted">{current.issuer}</p>
                <p className="mt-4 text-sm leading-relaxed text-cyber-muted">
                  {current.description}
                </p>
                <p className="mt-6 font-mono text-[10px] tracking-widest text-cyber-primary">
                  CLICK TO VIEW CREDENTIAL
                </p>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-2xl border-cyber glass p-5 cyber-glow [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <img
                  src={certificateAsset.url}
                  alt="ISC2 Candidate certificate for Joel Kirubainathan"
                  className="max-h-[280px] w-full rounded-[20%] object-contain"
                />
                <p className="mt-3 font-mono text-[10px] tracking-widest text-cyber-primary">
                  CLICK TO FLIP BACK
                </p>
              </div>
            </motion.div>
          </Button>
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