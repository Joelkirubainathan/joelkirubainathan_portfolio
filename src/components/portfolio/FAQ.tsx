import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { Section } from "./Section";

const FAQS = [
  {
    question: "Who is Joel Kirubainathan?",
    answer: "Joel Kirubainathan is an aspiring Cybersecurity Professional and SOC Analyst based in Erode, Tamil Nadu, India. He holds a Bachelor's degree from VET Institute of Arts and Science and is recognized as an ISC2 Candidate, specializing in network security, threat detection, and Python-based security automation.",
  },
  {
    question: "What certifications does Joel Kirubainathan hold?",
    answer: "Joel Kirubainathan is an official ISC2 Candidate actively preparing for professional cybersecurity certifications. He also holds a Linux Unhatched certification from Cisco Networking Academy and a Claude Code 101 Certificate of Completion from Anthropic.",
  },
  {
    question: "What cybersecurity roles is Joel Kirubainathan available for?",
    answer: "Joel is looking for entry-level opportunities in modern Security Operations Centers (SOC) and cybersecurity teams. Key available roles include SOC Analyst (L1), Security Analyst, Cybersecurity Associate, Network Security Analyst, and Python Automation Specialist.",
  },
  {
    question: "How can I contact or hire Joel Kirubainathan?",
    answer: "You can contact Joel directly through the Contact Form on this portfolio, email him at joelkirubainathan@gmail.com, or connect via LinkedIn (linkedin.com/in/joelkirubainathans). He is open to remote roles, as well as on-site opportunities in Erode, Chennai, Bangalore, and across India.",
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" eyebrow="FAQ" title="Frequently Asked Questions">
      <div className="mx-auto max-w-3xl space-y-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="glass rounded-xl border border-cyber-glass-border overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left text-white hover:text-cyber-primary transition-colors cursor-pointer"
              >
                <span className="font-semibold text-base pr-4">{faq.question}</span>
                {isOpen ? (
                  <Minus className="h-5 w-5 text-cyber-primary shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-cyber-muted shrink-0" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="p-5 pt-0 text-sm leading-relaxed text-cyber-muted border-t border-cyber-glass-border bg-black/10">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
