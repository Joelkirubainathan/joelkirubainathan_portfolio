import { motion } from "motion/react";
import { Github, GitBranch, Star, Code2 } from "lucide-react";
import { Section } from "./Section";

const stats = [
  { icon: GitBranch, label: "Repositories", value: "12+" },
  { icon: Star, label: "Focus Areas", value: "Security · Python" },
  { icon: Code2, label: "Top Languages", value: "Python, Bash, JS" },
];

const languages = [
  { name: "Python", pct: 65, color: "#00D9FF" },
  { name: "Bash", pct: 18, color: "#0066FF" },
  { name: "JavaScript", pct: 10, color: "#7B61FF" },
  { name: "Other", pct: 7, color: "#A0AEC0" },
];

export function GitHubShowcase() {
  return (
    <Section
      id="github"
      eyebrow="OPEN_SOURCE"
      title="GitHub Activity"
      subtitle="Public projects, automation tools, and security utilities."
    >
      <div className="grid lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 lg:col-span-2"
        >
          <div className="flex items-center gap-3 mb-6">
            <Github className="h-6 w-6 text-cyber-primary" />
            <h3 className="text-lg font-semibold text-white">Contribution Graph</h3>
          </div>
          <div className="grid grid-cols-[repeat(26,minmax(0,1fr))] gap-1">
            {Array.from({ length: 26 * 7 }).map((_, i) => {
              const intensity = Math.random();
              const opacity =
                intensity > 0.85 ? 1 : intensity > 0.6 ? 0.65 : intensity > 0.35 ? 0.35 : 0.1;
              return (
                <div
                  key={i}
                  className="aspect-square rounded-sm"
                  style={{
                    background: `rgba(0, 217, 255, ${opacity})`,
                  }}
                />
              );
            })}
          </div>
          <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-cyber-muted">
            <span>LESS</span>
            <div className="flex gap-1">
              {[0.1, 0.35, 0.65, 1].map((o) => (
                <div
                  key={o}
                  className="h-3 w-3 rounded-sm"
                  style={{ background: `rgba(0,217,255,${o})` }}
                />
              ))}
            </div>
            <span>MORE</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-xl p-4 flex items-center gap-3">
              <div className="rounded-lg bg-cyber-primary/10 p-2">
                <s.icon className="h-5 w-5 text-cyber-primary" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-cyber-muted tracking-widest">
                  {s.label.toUpperCase()}
                </div>
                <div className="text-sm text-white">{s.value}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 lg:col-span-3"
        >
          <h3 className="text-sm font-mono text-cyber-primary mb-4">
            // LANGUAGE_BREAKDOWN
          </h3>
          <div className="flex h-3 rounded-full overflow-hidden mb-4">
            {languages.map((l) => (
              <div
                key={l.name}
                style={{ width: `${l.pct}%`, background: l.color }}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {languages.map((l) => (
              <div key={l.name} className="flex items-center gap-2 text-xs">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: l.color }} />
                <span className="text-white">{l.name}</span>
                <span className="text-cyber-muted">{l.pct}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}