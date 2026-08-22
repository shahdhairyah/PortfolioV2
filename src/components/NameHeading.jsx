import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, FileText } from "lucide-react";
import { socials } from "@/data/profile";

const EASE = [0.16, 1, 0.3, 1];

const ROLES = [
  "Full-Stack Developer",
  "Digital Architect",
  "AI & IoT Enthusiast",
  "Problem Solver",
];

const Github = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Linkedin = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const AnimatedRole = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block h-[1.15em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="absolute left-0 bottom-0 text-[#bf4417] font-medium whitespace-nowrap"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const NameHeading = () => {
  const github = socials.find((s) => s.label === "GitHub")?.href;
  const linkedin = socials.find((s) => s.label === "LinkedIn")?.href;

  return (
    <section className="relative w-full min-h-screen bg-[#020202] text-white overflow-hidden flex flex-col justify-center">

      {/* single ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(#bf4417_0%,transparent_70%)] blur-[120px] opacity-15 pointer-events-none" />

      {/* content — vertically and horizontally centered */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-32 flex flex-col items-center text-center">

        {/* eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[11px] uppercase tracking-[0.3em] text-white/20 font-medium mb-10"
        >
          Full-Stack Developer &amp; Digital Architect
        </motion.p>

        {/* name — the hero */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
          className="font-display font-extrabold tracking-[-0.04em] leading-[0.85] select-none text-[clamp(3.5rem,12vw,9rem)]"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
            Shah
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#bf4417] via-[#ea580c] to-[#ff9a4d]">
            Dhairya
          </span>
        </motion.h1>

        {/* role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 text-base sm:text-lg text-white/40 font-light tracking-wide"
        >
          <AnimatedRole />
        </motion.div>

        {/* divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1, ease: EASE }}
          className="mt-10 w-16 h-px bg-gradient-to-r from-transparent via-[#bf4417]/50 to-transparent origin-center"
        />

        {/* description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 max-w-lg text-white/30 text-sm sm:text-base leading-relaxed font-light"
        >
          Crafting fast, reliable web applications with clean engineering
          — from interface to infrastructure.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4, ease: EASE }}
          className="mt-10 flex items-center gap-4"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#bf4417] to-[#991b1b] hover:from-[#ea580c] hover:to-[#7f1d1d] text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(191,68,23,0.3)] hover:shadow-[0_0_50px_rgba(191,68,23,0.5)] hover:-translate-y-0.5"
          >
            View Work
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href="/Dhairya-Shah-Resume.pdf"
            download
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border border-white/10 hover:border-white/25 text-white/50 hover:text-white text-sm font-medium rounded-xl transition-all duration-300"
          >
            <FileText size={14} />
            Resume
          </a>
        </motion.div>

        {/* socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="mt-14 flex items-center gap-4"
        >
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/20 hover:text-white/60 transition-colors duration-300"
          >
            <Github size={18} />
          </a>
          <span className="w-px h-3 bg-white/10" />
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/20 hover:text-white/60 transition-colors duration-300"
          >
            <Linkedin size={18} />
          </a>
        </motion.div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#fafafa] to-transparent pointer-events-none z-[5]" />
    </section>
  );
};

export default NameHeading;
