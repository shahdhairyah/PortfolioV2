import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, FileText } from "lucide-react";
import PropTypes from "prop-types";
import { socials } from "@/data/profile";

const EASE = [0.16, 1, 0.3, 1];

const Github = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

Github.propTypes = { size: PropTypes.number };

const Linkedin = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

Linkedin.propTypes = { size: PropTypes.number };

const ROLES = [
  "Full-Stack Developer",
  "Digital Architect",
  "AI & IoT Enthusiast",
  "Problem Solver",
];

const RotatingRole = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="text-[#bf4417] font-semibold">{ROLES[index]}</span>
  );
};

const NameLine = ({ text, start, inline = false }) => (
  <span className={inline ? "inline-block overflow-hidden" : "block overflow-hidden"}>
    {text.split("").map((ch, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: "0.9em" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: start + i * 0.06, duration: 0.7, ease: EASE }}
        className="inline-block"
      >
        {ch}
      </motion.span>
    ))}
  </span>
);

NameLine.propTypes = {
  text: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  inline: PropTypes.bool,
};

const NameHeading = () => {
  const github = socials.find((s) => s.label === "GitHub")?.href;
  const linkedin = socials.find((s) => s.label === "LinkedIn")?.href;

  return (
    <section className="relative w-full bg-[#020202] text-white overflow-hidden">
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:54px_54px] pointer-events-none" />

      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[460px] rounded-[50%] bg-[radial-gradient(#bf4417_0%,transparent_65%)] blur-[90px] opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 md:pt-36 pb-20 md:pb-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#bf4417]/30 text-[#bf4417] text-[11px] font-semibold uppercase tracking-[0.18em]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Full-Stack Developer &amp; Digital Architect</span>
        </motion.div>

        <h1 className="mt-8 font-display font-extrabold tracking-tight leading-[0.95] select-none text-transparent bg-clip-text bg-gradient-to-b from-[#ff9a4d] via-[#ea580c] to-[#991b1b]">
          <span className="text-[clamp(2rem,11vw,6rem)]">
            <NameLine text="SHAH" start={0.15} />
            <span className="text-[0.72em]">
              <NameLine text="DHAIRYA" start={0.55} inline />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.2 }}
                className="inline-block ml-2 w-[0.08em] h-[0.85em] bg-[#ea580c] rounded-full align-middle animate-blink"
              />
            </span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: EASE }}
          className="mt-7 flex flex-wrap items-center justify-center gap-2 text-white/70 text-base sm:text-lg font-light"
        >
          <span>I&apos;m a</span>
          <RotatingRole />
          <span>— building things that scale.</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.6, ease: EASE }}
          className="mt-5 max-w-xl text-white/55 text-sm sm:text-base font-light leading-relaxed"
        >
          I turn complex requirements into fast, reliable, production-grade web
          applications — clean engineering from interface to infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6, ease: EASE }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#bf4417] to-[#991b1b] hover:from-[#ea580c] hover:to-[#7f1d1d] text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(191,68,23,0.4)] hover:shadow-[0_0_35px_rgba(191,68,23,0.6)] hover:-translate-y-0.5"
          >
            <span>View Projects</span>
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href="/Dhairya-Shah-Resume.pdf"
            download
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/15 hover:border-[#bf4417]/60 text-white/85 hover:text-white text-sm font-medium rounded-xl transition-all duration-300"
          >
            <FileText size={15} className="text-[#bf4417]" />
            Resume
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/15 hover:border-[#bf4417]/60 text-white/85 hover:text-white text-sm font-medium rounded-xl transition-all duration-300"
          >
            Contact
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.65, duration: 0.6, ease: EASE }}
          className="mt-9 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-white/20" />
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-white hover:text-[#bf4417] hover:border-[#bf4417]/70 hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(191,68,23,0.5)] transition-all duration-300"
          >
            <Github size={18} />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-white hover:text-[#0077b5] hover:border-[#0077b5]/70 hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(0,119,181,0.5)] transition-all duration-300"
          >
            <Linkedin size={18} />
          </a>
          <span className="h-px w-8 bg-white/20" />
        </motion.div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full z-[5] rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#fafafa"
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
    </section>
  );
};

export default NameHeading;
