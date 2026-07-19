import { useState } from "react";
import { motion } from "motion/react";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import certificateAsset from "@/assets/isc2-candidate.png";
import { Section } from "./Section";

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  status: string;
  statusType: "in-progress" | "completed";
  description: string;
  type: "image" | "rendered";
  image?: string;
}

const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "isc2",
    title: "ISC2 Candidate",
    issuer: "International Information System Security Certification Consortium (ISC2)",
    status: "IN PROGRESS",
    statusType: "in-progress",
    description: "Actively pursuing professional cybersecurity certification and strengthening foundational security knowledge.",
    type: "image",
    image: certificateAsset,
  },
  {
    id: "linux-unhatched",
    title: "Linux Unhatched",
    issuer: "Cisco Networking Academy",
    status: "COMPLETED",
    statusType: "completed",
    description: "Acquired foundational knowledge of Linux command line, system configuration, permissions, and open-source concepts.",
    type: "rendered",
  },
  {
    id: "claude-code",
    title: "Claude Code 101",
    issuer: "Anthropic",
    status: "COMPLETED",
    statusType: "completed",
    description: "Mastered AI-assisted development, workflow automation, and agentic coding patterns with Anthropic's Claude Code CLI tool.",
    type: "rendered",
  }
];

function ClaudeCodeCertificate() {
  return (
    <div className="relative flex aspect-[4/3] h-[150px] w-[200px] md:h-[220px] md:w-[293px] flex-col justify-between rounded-xl bg-[#748762] p-3 md:p-5 text-black shadow-lg border border-black/10 select-none">
      {/* Top Badge */}
      <div className="flex justify-center">
        <div className="flex items-center gap-1 md:gap-1.5 rounded-full border border-black/60 px-1.5 py-0.5 md:px-3 md:py-1 bg-transparent">
          <div className="flex h-3 w-3 md:h-4.5 md:w-4.5 items-center justify-center rounded-full bg-white border border-black/60">
            <svg
              className="h-1.5 w-1.5 md:h-3 md:w-3 text-[#748762]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-[5px] md:text-[7px] font-extrabold tracking-widest text-black/80 uppercase">
            CERTIFICATE of COMPLETION
          </span>
        </div>
      </div>

      {/* Center name & course */}
      <div className="my-auto text-center flex flex-col gap-0.5 md:gap-1.5">
        <h4 className="font-serif text-xs md:text-lg font-medium text-black/90 tracking-wide leading-none">
          Joelkirubainathan S
        </h4>
        <p className="font-serif text-[7px] md:text-[10px] text-black/60 italic leading-none">
          has completed
        </p>
        <h3 className="font-sans text-base md:text-2xl font-black text-black leading-none uppercase tracking-tight">
          Claude Code <br />
          <span className="text-black">101</span>
        </h3>
      </div>

      {/* Bottom logo */}
      <div className="text-center">
        <span className="font-sans text-[8px] md:text-[11px] font-black tracking-[0.25em] text-black/90">
          ANTHROP\C
        </span>
      </div>
    </div>
  );
}

function LinuxUnhatchedCertificate() {
  return (
    <div className="relative flex aspect-square h-[150px] w-[150px] md:h-[220px] md:w-[220px] flex-col justify-between rounded-2xl bg-[#61b62f] p-3 text-white shadow-lg border border-black/10 select-none overflow-hidden">
      {/* Top Section: Cisco Logo & Networking Academy Text */}
      <div className="flex items-start justify-between gap-1.5 w-full">
        {/* Cisco Signal Logo (SVG) */}
        <div className="flex flex-col gap-0.5 mt-0.5 md:mt-1">
          {/* 9 vertical bars for Cisco logo */}
          <div className="flex items-end justify-center gap-[1.5px] md:gap-[2px] h-[12px] md:h-[20px]">
            <span className="w-[1.2px] md:w-[1.5px] h-[30%] bg-white rounded-full"></span>
            <span className="w-[1.2px] md:w-[1.5px] h-[55%] bg-white rounded-full"></span>
            <span className="w-[1.2px] md:w-[1.5px] h-[80%] bg-white rounded-full"></span>
            <span className="w-[1.2px] md:w-[1.5px] h-[55%] bg-white rounded-full"></span>
            <span className="w-[1.2px] md:w-[1.5px] h-[100%] bg-white rounded-full"></span>
            <span className="w-[1.2px] md:w-[1.5px] h-[55%] bg-white rounded-full"></span>
            <span className="w-[1.2px] md:w-[1.5px] h-[80%] bg-white rounded-full"></span>
            <span className="w-[1.2px] md:w-[1.5px] h-[55%] bg-white rounded-full"></span>
            <span className="w-[1.2px] md:w-[1.5px] h-[30%] bg-white rounded-full"></span>
          </div>
          {/* CISCO wordmark */}
          <span className="font-sans text-[5px] md:text-[8px] font-black tracking-widest text-white leading-none">
            CISCO
          </span>
        </div>

        {/* Networking Academy text */}
        <div className="flex flex-col text-left text-[#0a2540] font-medium leading-tight">
          <span className="text-[7px] md:text-[11px] font-bold leading-none">Networking</span>
          <span className="text-[7px] md:text-[11px] font-bold leading-none mt-0.5">Academy</span>
        </div>
      </div>

      {/* Verified Badge */}
      <div className="absolute top-[32%] left-3 z-20">
        <div className="rounded-full bg-[#051d38] px-1.5 md:px-2.5 py-0.5 border border-white/10 shadow-sm">
          <span className="text-[5px] md:text-[8px] font-bold tracking-wider text-white uppercase">
            Verified
          </span>
        </div>
      </div>

      {/* Wave background covering middle/bottom */}
      <div className="absolute inset-0 top-[28%] z-10 flex flex-col justify-end overflow-hidden">
        <svg
          viewBox="0 0 200 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full scale-[1.05] origin-bottom object-cover"
        >
          {/* Base fill/background for waves zone */}
          <rect width="200" height="150" fill="#61b62f" />
          
          {/* Wave 1 - Darker Green */}
          <path
            d="M0 40 C60 10, 120 70, 200 30 L200 150 L0 150 Z"
            fill="#1d6614"
          />
          
          {/* Wave 2 - Medium/Vibrant Green */}
          <path
            d="M0 65 C70 40, 130 90, 200 55 L200 150 L0 150 Z"
            fill="#308a1e"
          />
          
          {/* Wave 3 - Lighter Green */}
          <path
            d="M0 90 C80 65, 125 110, 200 80 L200 150 L0 150 Z"
            fill="#78c142"
          />

          {/* Bottom White Wave */}
          <path
            d="M0 115 C70 90, 130 135, 200 102 L200 150 L0 150 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Bottom Text Layer */}
      <div className="absolute bottom-2 right-3 md:bottom-4 md:right-4 z-20 flex flex-col items-end">
        <span className="font-sans text-[8px] md:text-[12px] font-extrabold text-[#051d38] tracking-wide">
          Linux Unhatched
        </span>
      </div>
    </div>
  );
}

export function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CERTIFICATIONS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length);
  };

  const handleDragEnd = (_event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  return (
    <Section
      id="certifications"
      eyebrow="CREDENTIALS"
      title="Certifications & Achievements"
    >
      <div className="relative mx-auto w-full max-w-3xl h-[470px] md:h-[285px]">
        {CERTIFICATIONS.map((cert, index) => {
          const relativeIndex = (index - activeIndex + CERTIFICATIONS.length) % CERTIFICATIONS.length;
          const isTop = relativeIndex === 0;

          // Compute stack transformation variables
          const scale = isTop ? 1 : 1 - relativeIndex * 0.04;
          const y = isTop ? 0 : relativeIndex * 12;
          const rotate = isTop ? 0 : relativeIndex % 2 === 0 ? 1.5 : -1.5;
          const opacity = isTop ? 1 : 0.6 - relativeIndex * 0.25;
          const zIndex = CERTIFICATIONS.length - relativeIndex;

          return (
            <motion.div
              key={cert.id}
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={isTop ? handleDragEnd : undefined}
              style={{
                zIndex,
                pointerEvents: isTop ? "auto" : "none",
              }}
              animate={{
                scale,
                y,
                rotate,
                opacity,
              }}
              whileHover={isTop ? { scale: 1.01, boxShadow: "var(--shadow-glow)" } : {}}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
              }}
              className="absolute inset-0 w-full h-full rounded-2xl border-cyber glass overflow-hidden cursor-grab active:cursor-grabbing select-none"
            >
              <div className="flex flex-col justify-between gap-4 p-6 md:flex-row md:items-start md:gap-6 md:p-8 h-full">
                {/* Left Content */}
                <div className="flex-1 text-left flex flex-col md:justify-between md:h-full">
                  <div>
                    <Award className="mb-4 h-10 w-10 text-cyber-primary" />
                    <div
                      className={`mb-2 font-mono text-[10px] tracking-widest ${
                        cert.statusType === "completed"
                          ? "text-emerald-400"
                          : "text-cyber-primary"
                      }`}
                    >
                      {cert.status}
                    </div>
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-xs text-cyber-muted">{cert.issuer}</p>
                    <p className="mt-4 text-sm leading-relaxed text-cyber-muted">
                      {cert.description}
                    </p>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="flex shrink-0 items-center justify-center w-full md:w-auto md:h-full mt-2 md:mt-0">
                  {cert.type === "image" ? (
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="max-h-[150px] md:max-h-[220px] w-auto object-contain pointer-events-none rounded-lg"
                    />
                  ) : cert.id === "linux-unhatched" ? (
                    <LinuxUnhatchedCertificate />
                  ) : (
                    <ClaudeCodeCertificate />
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          onClick={handlePrev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cyber-glass-border bg-cyber-glass text-white transition hover:bg-cyber-primary/20 hover:text-cyber-primary active:scale-95 cursor-pointer"
          aria-label="Previous Certification"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Dot Indicators */}
        <div className="flex gap-2.5">
          {CERTIFICATIONS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? "w-8 bg-cyber-primary shadow-[0_0_8px_rgba(0,217,255,0.6)]"
                  : "w-2.5 bg-cyber-muted/30 hover:bg-cyber-muted/60"
              }`}
              aria-label={`Go to certification ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cyber-glass-border bg-cyber-glass text-white transition hover:bg-cyber-primary/20 hover:text-cyber-primary active:scale-95 cursor-pointer"
          aria-label="Next Certification"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <p className="mt-4 text-center font-mono text-[9px] tracking-widest text-cyber-muted/50 uppercase">
        Tip: Drag or swipe the cards to cycle through certifications
      </p>
    </Section>
  );
}
