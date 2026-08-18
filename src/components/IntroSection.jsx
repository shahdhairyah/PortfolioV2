import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  FileText,
  Mail,
  Code2,
  Sparkles,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import { identity, socials, stats } from "@/data/profile";

const EASE = [0.16, 1, 0.3, 1];

const WORDS = ["Web Applications", "AI Systems", "IoT Solutions", "Real-Time Dashboards"];

const RotatingWord = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#bf4417] via-amber-600 to-[#991b1b]">
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[index]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="inline-block"
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const Github = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Linkedin = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

Github.propTypes = { size: PropTypes.number };
Linkedin.propTypes = { size: PropTypes.number };

const TICKER = ["React", "PHP", "Python", "Node.js", "MySQL", "Tailwind CSS", "REST APIs", "Git", "GitHub", "Vite"];

const IntroSection = () => {
  const github = socials.find((s) => s.label === "GitHub")?.href;
  const linkedin = socials.find((s) => s.label === "LinkedIn")?.href;

  return (
    <div className="relative">
      <section className="relative w-full bg-[#fafafa] text-[#111] py-20 md:py-28 px-6 overflow-hidden font-inter">
        <span
          aria-hidden
          className="pointer-events-none select-none absolute -top-6 md:top-2 left-1/2 -translate-x-1/2 font-display font-extrabold leading-none text-[26vw] md:text-[13rem] text-transparent [-webkit-text-stroke:1.5px_rgba(17,17,17,0.07)]"
        >
          HELLO
        </span>

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#bf4417]/10 border border-[#bf4417]/30 text-[#c2410c] text-xs font-semibold uppercase tracking-wider"
            >
              <Sparkles size={14} />
              <span>Introduction</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="text-3xl sm:text-5xl lg:text-[56px] leading-[1.08] tracking-tighter text-[#111] font-extrabold font-inter"
            >
              Designing and Engineering <br />
              <RotatingWord />.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="space-y-4 text-[#444] text-base sm:text-lg leading-relaxed font-normal"
            >
              <p>
                I build production-ready digital products for startups, academic
                institutions, and businesses — turning complex requirements into
                reliable, scalable web applications.
              </p>
              <p className="text-sm sm:text-base text-[#666]">
                From custom applications and management portals to modernizing
                legacy systems, I work across the full development lifecycle. My
                technical expertise includes{" "}
                <strong className="text-[#111] font-semibold">
                  React, PHP, Python, MySQL, Node.js, and Tailwind CSS
                </strong>
                , enabling me to architect solutions across both frontend and
                backend. I focus on clean engineering, performance, security,
                and maintainability — building software designed not just to
                work, but to scale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
              className="flex flex-wrap items-center gap-3 text-sm font-medium"
            >
              <a
                href={`mailto:${identity.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#e5e5e5] text-[#333] hover:text-[#bf4417] hover:border-[#bf4417]/40 hover:shadow-sm transition-all duration-200"
              >
                <Mail size={16} className="text-[#bf4417]" />
                <span>{identity.email}</span>
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#e5e5e5] text-[#333] hover:text-[#111] hover:border-[#111] hover:shadow-sm transition-all duration-200"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#e5e5e5] text-[#333] hover:text-[#0077b5] hover:border-[#0077b5]/40 hover:shadow-sm transition-all duration-200"
              >
                <Linkedin size={16} className="text-[#0077b5]" />
                <span>LinkedIn</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-[#eaeaea] shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
                >
                  <div className="font-inter text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#bf4417] to-[#991b1b]">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#777]">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="lg:col-span-5 lg:pt-4"
          >
            <div className="rounded-2xl bg-[#020202] text-white overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-[#1a1a1a]">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[11px] font-mono text-white/40 truncate">
                  shah@dhairya — sdh
                </span>
              </div>
              <div className="px-5 py-6 font-mono text-[13px] leading-7 space-y-1">
                <p>
                  <span className="text-[#4ade80]">$</span>{" "}
                  <span className="text-white/85">whoami</span>
                </p>
                <p className="text-white/55">
                  Shah Dhairya — Full-Stack Developer &amp; Digital Architect
                </p>
                <p>
                  <span className="text-[#4ade80]">$</span>{" "}
                  <span className="text-white/85">echo $STACK</span>
                </p>
                <p className="text-white/55">
                  React · PHP · Python · Node.js · MySQL · Tailwind CSS
                </p>
                <p>
                  <span className="text-[#4ade80]">$</span>{" "}
                  <span className="text-white/85">open new_ideas --as collab</span>
                </p>
                <p className="text-white/55">
                  Available for freelance work &amp; collaborations
                </p>
                <p>
                  <span className="text-[#4ade80]">$</span>{" "}
                  <span className="inline-block w-2 h-4 bg-[#4ade80] align-middle animate-blink" />
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative z-10 max-w-6xl mx-auto mt-14"
        >
          <div className="relative overflow-hidden rounded-3xl bg-white border border-[#eaeaea] shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-8 md:p-10">
            <div className="absolute -top-20 -right-16 w-64 h-64 rounded-full bg-[radial-gradient(#bf4417,transparent)] blur-[70px] opacity-15 pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-md">
                <span className="text-xs font-bold uppercase tracking-widest text-[#c2410c] font-syne">
                  Let&apos;s Collaborate
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#111] font-syne mt-2">
                  Explore Work or Get in Touch
                </h2>
                <p className="mt-3 text-sm text-[#777] leading-relaxed">
                  Fast turnaround times, modular clean code, and regular project
                  updates.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:min-w-[560px]">
                <a
                  href="#contact"
                  className="col-span-1 sm:col-span-2 lg:col-span-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#111] hover:bg-[#c2410c] text-white font-medium text-sm rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Send size={16} />
                  <span>Contact Me</span>
                </a>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#f5f5f5] hover:bg-[#eaeaea] text-[#111] font-medium text-sm rounded-xl border border-[#e0e0e0] transition-all duration-200"
                >
                  <Code2 size={16} className="text-[#c2410c]" />
                  <span>Projects</span>
                </Link>
                <Link
                  to="/resume"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#f5f5f5] hover:bg-[#eaeaea] text-[#111] font-medium text-sm rounded-xl border border-[#e0e0e0] transition-all duration-200"
                >
                  <FileText size={16} className="text-[#c2410c]" />
                  <span>Resume</span>
                  <ArrowUpRight size={14} className="opacity-60" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-[#f9f9f9] text-[#444] hover:text-[#111] font-medium text-sm rounded-xl border border-[#e5e5e5] transition-all duration-200"
                >
                  <Sparkles size={16} className="text-amber-500" />
                  <span>About Me</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative z-10 mt-14 border-y border-[#e5e5e5] bg-white py-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max gap-8 animate-marquee-left">
            {[...TICKER, ...TICKER].map((w, i) => (
              <span
                key={i}
                className="flex items-center gap-8 text-sm font-semibold uppercase tracking-wider whitespace-nowrap"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf4417] to-[#991b1b]">
                  {w}
                </span>
                <span className="text-[#111]/25">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <svg
        className="absolute -bottom-5 md:-bottom-25 z-100 rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#000"
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
    </div>
  );
};

export default IntroSection;
