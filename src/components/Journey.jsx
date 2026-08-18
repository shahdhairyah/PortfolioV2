import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import PropTypes from "prop-types";
import {
  Sparkles,
  TerminalSquare,
  Gamepad2,
  Code2,
  GraduationCap,
  Layout,
  Trophy,
  Briefcase,
  ShieldCheck,
  GitBranch,
} from "lucide-react";

const journeyData = [
  {
    year: "2021",
    hash: "c0ffee1",
    tag: "v1 · spark",
    title: "First Line of Code",
    desc: "A first C program lit the spark — turning logic into action.",
    icon: Gamepad2,
  },
  {
    year: "2022",
    hash: "web0002",
    tag: "v2 · web",
    title: "HTML & CSS",
    desc: "Discovered the web — structure, style, and instant results.",
    icon: Code2,
  },
  {
    year: "2023",
    hash: "dip10ma",
    tag: "v3 · foundation",
    title: "Diploma in Computer Engineering",
    desc: "Formal foundation in algorithms, databases, and systems.",
    icon: GraduationCap,
  },
  {
    year: "2024",
    hash: "r3act0r",
    tag: "v4 · frontend",
    title: "JavaScript & React",
    desc: "Modern frontend — components, state, and interactivity.",
    icon: Layout,
  },
  {
    year: "2023-24",
    hash: "h4ck4th",
    tag: "v5 · hackathon",
    title: "SSIP Hackathon — 4th Place My Sector",
    desc: "Top 4 in my sector, beating 2062 teams across Gujarat.",
    icon: Trophy,
  },
  {
    year: "2025",
    hash: "3xplain",
    tag: "v6 · award",
    title: "CVMU Hackathon 2025 — Top 181 Selection",
    desc: "36+ hours of live code — selected in the top 181 teams of CVMU Hackathon 2025.",
    icon: Briefcase,
  },
  {
    year: "Now",
    hash: "m45t3r",
    tag: "v7 · current",
    title: "Full-Stack & AI",
    desc: "Building full-stack apps, exploring gesture recognition and ML.",
    icon: ShieldCheck,
  },
];

const Commit = ({ index, item }) => {
  const Icon = item.icon;

  return (
    <motion.li
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative pl-9 md:pl-14 pb-7 last:pb-0 group"
    >
      <span className="absolute left-[6px] md:left-[10px] top-2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-[#bf4417] group-hover:shadow-[0_0_16px_rgba(191,68,23,0.9)] transition-shadow duration-300" />

      <div className="rounded-xl border border-white/10 bg-white/[0.03] group-hover:border-[#bf4417]/40 group-hover:bg-white/[0.05] transition-all duration-300 p-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-mono text-[11px] text-[#ff8a5c]">
            * {item.hash}
          </span>
          <span className="font-mono text-[11px] text-white/40">
            ({item.year})
          </span>
          <span className="ml-auto text-[10px] uppercase tracking-widest text-white/35">
            {item.tag}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <Icon size={17} className="text-[#bf4417] shrink-0" />
          <h3 className="text-white font-bold text-base sm:text-lg leading-snug">
            {item.title}
          </h3>
        </div>

        <p className="mt-1.5 text-[13px] text-white/60 font-light leading-relaxed">
          {item.desc}
        </p>

        <p className="mt-3 text-[10px] font-mono text-white/25">
          {String(index + 1).padStart(2, "0")}/{String(journeyData.length).padStart(2, "0")}
        </p>
      </div>
    </motion.li>
  );
};

Commit.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    year: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
  }).isRequired,
};

const WORDS = [
  "Commits",
  "Late-Nights",
  "Builds",
  "Milestones",
  "Debug Sprints",
  "Comebacks",
];

const EASE = [0.16, 1, 0.3, 1];

const RotatingWord = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 500);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-flex items-center gap-2 text-[13px] font-mono text-[#ff8a5c] mb-3">
      <span className="text-white/40">&gt;</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="inline-block"
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const Journey = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.78", "end 0.5"],
  });

  return (    <section
      ref={sectionRef}
      className="relative bg-[#020202] text-white py-24 md:py-32 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[radial-gradient(#bf4417_0%,transparent_70%)] blur-[140px] opacity-15 pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#bf4417]/10 border border-[#bf4417]/30 text-[#bf4417] text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles size={14} />
            <span>The Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            How I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf4417] via-amber-600 to-[#991b1b]">
              Got Here
            </span>
          </h2>
          <RotatingWord />
          <p className="mt-5 text-white/60 text-sm sm:text-base font-light leading-relaxed max-w-xl">
            Rewind the tape — every commit, every late-night debug, every
            milestone. This is the repo behind the portfolio.
          </p>
        </div>

        <div className="mt-10 md:mt-14 rounded-2xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 flex items-center gap-1.5 text-[11px] text-white/50 font-mono">
              <TerminalSquare size={12} className="text-[#bf4417]" />
              shah@dhairya — git log
            </span>
            <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] font-mono text-white/40">
              <GitBranch size={11} className="text-[#ff8a5c]" />
              main
            </span>
          </div>

          <div className="px-5 py-6 md:px-8 md:py-8 font-mono text-[13px] leading-relaxed">
            <p>
              <span className="text-emerald-400">➜</span>{" "}
              <span className="text-sky-400">~</span> git log --oneline
              --reverse
            </p>

            <div className="relative mt-6 mb-2">
              <div className="absolute left-[6px] md:left-[10px] top-2 bottom-2 w-[2px] bg-white/10 rounded-full" />
              <motion.div
                style={{ scaleY: scrollYProgress }}
                className="absolute left-[6px] md:left-[10px] top-2 bottom-2 w-[2px] origin-top bg-gradient-to-b from-[#bf4417] via-amber-600 to-[#991b1b] rounded-full shadow-[0_0_14px_rgba(191,68,23,0.55)]"
              />

              <ul className="relative">
                {journeyData.map((item, index) => (
                  <Commit key={item.hash} index={index} item={item} />
                ))}
              </ul>
            </div>

            <p className="mt-8">
              <span className="text-emerald-400">➜</span>{" "}
              <span className="text-sky-400">~</span> git status
            </p>
            <p className="text-white/80 mt-1">
              On branch main. All milestones reached — HEAD →{" "}
              <span className="text-[#ff8a5c]">Now</span>.
            </p>

            <p className="mt-3">
              <span className="text-emerald-400">➜</span>{" "}
              <span className="text-sky-400">~</span>{" "}
              <span className="inline-block w-2 h-4 bg-[#bf4417] align-middle animate-blink" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
