import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="font-mono text-xs tracking-[0.3em] text-cyber-primary mb-3">
            // {eyebrow}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-white">{title.split(" ").slice(0, -1).join(" ")} </span>
            <span className="cyber-gradient-text">
              {title.split(" ").slice(-1)}
            </span>
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl mx-auto text-cyber-muted">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}