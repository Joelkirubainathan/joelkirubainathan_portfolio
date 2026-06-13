import { motion } from "motion/react";
import { Award, Lock } from "lucide-react";
import { useState } from "react";
import certificateAsset from "@/assets/isc2-candidate.png.asset.json";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Section } from "./Section";

type Certification = {
  title: string;
  issuer: string;
  description: string;
  status: string;
  certificate?: string;
};

const certifications: Certification[] = [{
  title: "ISC2 Candidate",
  issuer: "International Information System Security Certification Consortium",
  description:
    "Actively pursuing professional cybersecurity certification and strengthening foundational security knowledge.",
  status: "IN PROGRESS",
  certificate: certificateAsset.url,
}, {
  title: "ISC2 CC",
  issuer: "ISC2",
  description: "Certified in Cybersecurity — foundational knowledge across core security domains.",
  status: "PLANNED",
}, {
  title: "CompTIA Security+",
  issuer: "CompTIA",
  description: "Industry-standard baseline certification for practical cybersecurity skills.",
  status: "PLANNED",
}, {
  title: "CEH",
  issuer: "EC-Council",
  description: "Certified Ethical Hacker — offensive security concepts and ethical hacking methods.",
  status: "PLANNED",
}, {
  title: "CySA+",
  issuer: "CompTIA",
  description: "Cybersecurity Analyst certification focused on threat detection and response.",
  status: "PLANNED",
}, {
  title: "CISSP",
  issuer: "ISC2",
  description: "A future long-term goal covering advanced security leadership and architecture.",
  status: "FUTURE GOAL",
}];

export function Certifications() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  return (
    <Section
      id="certifications"
      eyebrow="CREDENTIALS"
      title="Certifications & Roadmap"
    >
      <Carousel opts={{ align: "start", loop: true }} className="mx-auto max-w-6xl px-10">
        <CarouselContent>
          {certifications.map((certification, index) => {
            const isFlipped = flippedCard === certification.title;

            return (
              <CarouselItem key={certification.title} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="h-[390px] [perspective:1200px]"
                >
                  <Button
                    type="button"
                    variant="ghost"
                    aria-label={isFlipped ? `Show ${certification.title} details` : `View ${certification.title}`}
                    aria-pressed={isFlipped}
                    onClick={() => setFlippedCard(isFlipped ? null : certification.title)}
                    className="group h-full w-full whitespace-normal rounded-2xl p-0 text-left hover:bg-transparent"
                  >
                    <motion.div
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                      className="relative h-full w-full [transform-style:preserve-3d]"
                    >
                      <div className="absolute inset-0 overflow-hidden rounded-2xl border-cyber glass p-8 cyber-glow [backface-visibility:hidden]">
                        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyber-primary/10 blur-3xl" />
                        <Award className="mb-5 h-10 w-10 text-cyber-primary" />
                        <div className="mb-2 font-mono text-[10px] tracking-widest text-cyber-primary">
                          {certification.status}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{certification.title}</h3>
                        <p className="mt-2 text-xs text-cyber-muted">{certification.issuer}</p>
                        <p className="mt-5 text-sm leading-relaxed text-cyber-muted">
                          {certification.description}
                        </p>
                        <p className="absolute bottom-8 font-mono text-[10px] tracking-widest text-cyber-primary">
                          CLICK TO VIEW
                        </p>
                      </div>

                      <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-2xl border-cyber glass p-6 cyber-glow [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        {certification.certificate ? (
                          <img
                            src={certification.certificate}
                            alt={`${certification.title} certificate for Joel Kirubainathan`}
                            className="max-h-[285px] w-full object-contain"
                          />
                        ) : (
                          <div className="flex flex-col items-center text-center">
                            <Lock className="mb-5 h-10 w-10 text-cyber-primary" />
                            <h4 className="text-xl font-bold text-white">{certification.title}</h4>
                            <p className="mt-3 text-sm leading-relaxed text-cyber-muted">
                              Certificate will be displayed here after completion.
                            </p>
                          </div>
                        )}
                        <p className="mt-5 font-mono text-[10px] tracking-widest text-cyber-primary">
                          CLICK TO FLIP BACK
                        </p>
                      </div>
                    </motion.div>
                  </Button>
                </motion.div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-0 border-cyber text-cyber-primary hover:bg-cyber-primary/10" />
        <CarouselNext className="right-0 border-cyber text-cyber-primary hover:bg-cyber-primary/10" />
      </Carousel>
    </Section>
  );
}