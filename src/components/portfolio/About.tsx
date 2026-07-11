import { motion } from "motion/react";
import { MapPin, Mail, Target } from "lucide-react";
import { Section } from "./Section";
import joelPhoto from "@/assets/joel.jpeg";

const info = [
  { icon: MapPin, label: "Location", value: "Erode, India" },
  { icon: Mail, label: "Email", value: "joelkirubainathan@gmail.com" },
];

const interests = [
  "SOC Analyst",
  "Security Analyst",
  "Cybersecurity Analyst",
  "Threat Detection",
  "Vulnerability Assessment",
  "Incident Response",
];

export function About() {
  return (
    <Section id="about" eyebrow="ABOUT_ME" title="Defending the Digital Frontier">
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass rounded-2xl p-8"
        >
          <div className="flex items-center gap-5 mb-6">
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyber-primary/70 via-cyber-primary/20 to-transparent blur-md" />
              <div className="relative h-28 w-28 md:h-32 md:w-32 rounded-full p-[2px] bg-gradient-to-br from-cyber-primary to-cyber-primary/30">
                <img
                  src={joelPhoto}
                  alt="Joel Kirubainathan"
                  className="h-full w-full rounded-full object-cover object-top bg-cyber"
                />
              </div>
            </div>
            <div className="min-w-0">
              <div className="font-mono text-[10px] text-cyber-primary tracking-[0.25em]">
                // IDENTITY
              </div>
              <div className="text-xl md:text-2xl font-semibold text-white mt-1">
                Joel Kirubainathan
              </div>
              <div className="text-sm text-cyber-muted mt-0.5">
                Cybersecurity Analyst · ISC2 Candidate
              </div>
            </div>
          </div>
          <p className="text-cyber-muted leading-relaxed text-lg">
            I am an aspiring{" "}
            <span className="text-cyber-primary font-medium">
              cybersecurity professional
            </span>{" "}
            with a strong interest in network security, threat detection,
            vulnerability management, and Python automation. As an{" "}
            <span className="text-cyber-primary font-medium">ISC2 Candidate</span>
            , I continuously enhance my knowledge of cybersecurity principles
            and industry best practices.
          </p>
          <p className="mt-5 text-cyber-muted leading-relaxed">
            My goal is to contribute to secure digital environments while
            growing as a cybersecurity analyst — bridging technical depth with
            real-world security operations.
          </p>

          <div className="mt-8">
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-4 w-4 text-cyber-primary" />
              <span className="font-mono text-sm text-cyber-primary">
                CAREER_INTERESTS
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {interests.map((t) => (
                <span
                  key={t}
                  className="glass rounded-full px-3 py-1 text-xs text-white border border-cyber-glass-border hover:border-cyber hover:text-cyber-primary transition-all"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 flex flex-col justify-center gap-4"
        >
          {info.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="glass rounded-xl p-4 hover:cyber-glow transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-cyber-primary/10 p-2 group-hover:bg-cyber-primary/20 transition shrink-0">
                  <Icon className="h-5 w-5 text-cyber-primary" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] text-cyber-muted tracking-wider">
                    {label.toUpperCase()}
                  </div>
                  <div className="text-sm text-white mt-0.5 truncate">{value}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}