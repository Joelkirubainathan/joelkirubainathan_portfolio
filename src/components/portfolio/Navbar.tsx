import { useEffect, useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-cyber-bg/95 backdrop-blur-md border-b border-cyber-glass-border py-3 shadow-lg shadow-black/20"
          : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <motion.a
          href="#home"
          className="flex items-center gap-2 group cursor-pointer"
          whileTap={{ scale: 0.95 }}
        >
          <Shield className="h-6 w-6 text-cyber-primary group-hover:rotate-12 transition-transform" />
          <span className="font-mono text-sm tracking-wider">
            <span className="text-white">JOEL</span>
            <span className="text-cyber-primary">.SECOPS</span>
          </span>
        </motion.a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-cyber-muted hover:text-cyber-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-cyber-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <motion.button
          className="md:hidden text-cyber-primary cursor-pointer"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-cyber-bg/95 backdrop-blur-md border-b border-cyber-glass-border mt-3 mx-4 rounded-xl shadow-xl shadow-black/30"
          >
            <div className="p-4">
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <motion.a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      whileTap={{ scale: 0.98 }}
                      className="block text-sm font-medium text-white hover:text-cyber-primary hover:bg-cyber-primary/10 rounded-lg px-3 py-3 transition-colors cursor-pointer"
                    >
                      {l.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}