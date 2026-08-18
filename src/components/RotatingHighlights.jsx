import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Trophy,
  Rocket,
  Layers,
  Cpu,
  Compass,
  BrainCircuit,
} from "lucide-react";

const checkpoints = [
  {
    icon: Code2,
    title: "Full-Stack Developer",
    desc: "Specializing in React, Node.js, Python, PHP & MySQL.",
  },
  {
    icon: Trophy,
    title: "2× Hackathon Recognition",
    desc: "SSIP Hackathon 4th place in my sector & selected in the top 181 teams of CVMU Hackathon 2025.",
  },
  {
    icon: Rocket,
    title: "Production-Ready Application Builder",
    desc: "Experienced in developing, optimizing, and deploying real-world applications.",
  },
  {
    icon: Layers,
    title: "End-to-End Web Specialist",
    desc: "Building scalable, secure, and performance-focused web solutions.",
  },
  {
    icon: Cpu,
    title: "Problem Solver",
    desc: "Transforming complex ideas and real-world requirements into functional digital products.",
  },
  {
    icon: Compass,
    title: "Open to Innovation",
    desc: "Exploring modern web technologies, AI, IoT, and system design.",
  },
  {
    icon: BrainCircuit,
    title: "Continuous Learner",
    desc: "Constantly strengthening expertise in software engineering, DSA, and emerging technologies.",
  },
];

const CYCLE_MS = 4400;
const HOLD_MS = 3600;

const RotatingHighlights = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepCount, setStepCount] = useState(0);
  const [cardOpen, setCardOpen] = useState(true);
  const [isPortrait, setIsPortrait] = useState(false);
  const [radius, setRadius] = useState(175);
  const cardRef = useRef(null);

  const total = checkpoints.length;
  const angleStep = 360 / total;

  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth;
      setIsPortrait(w < 1024);
      setRadius(w < 640 ? 118 : w < 1024 ? 150 : 175);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    const openT = setTimeout(() => setCardOpen(true), 0);
    const closeT = setTimeout(() => setCardOpen(false), HOLD_MS);
    const nextT = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % total);
      setStepCount((prev) => prev + 1);
    }, CYCLE_MS);
    return () => {
      clearTimeout(openT);
      clearTimeout(closeT);
      clearTimeout(nextT);
    };
  }, [activeIndex, total]);

  const targetOffset = isPortrait ? 90 : 0;
  const rotationAngle = -stepCount * angleStep + targetOffset;
  const activeCheckpoint = checkpoints[activeIndex];
  const ActiveIcon = activeCheckpoint.icon;

  return (
    <section className="relative w-full min-h-screen bg-[#020202] text-white py-20 px-6 flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(#bf4417_0%,transparent_70%)] blur-[150px] opacity-15 pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        <div className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] shrink-0 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 420 420">
            <circle cx="210" cy="210" r="210" fill="none" stroke="#bf4417" strokeWidth="3" strokeOpacity="0.15" />
            <circle cx="210" cy="210" r="210" fill="none" stroke="#bf4417" strokeWidth="2" strokeDasharray="6 8" strokeOpacity="0.5" />
          </svg>

          <div
            className="absolute inset-0 rounded-full transition-transform duration-700 ease-in-out will-change-transform z-10"
            style={{ transform: `rotate(${rotationAngle}deg)` }}
          >
            {checkpoints.map((cp, idx) => {
              const Icon = cp.icon;
              const angle = idx * angleStep;
              const isActive = idx === activeIndex;

              return (
                <div
                  key={idx}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
                  }}
                >
                  <div
                    className="transition-transform duration-700 ease-in-out will-change-transform"
                    style={{ transform: `rotate(${-rotationAngle}deg)` }}
                  >
                    <div
                      className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl border-2 transition-all duration-300 ${
                        isActive
                          ? "bg-[#bf4417] border-[#bf4417] text-white scale-125 shadow-[0_0_25px_rgba(191,68,23,0.85)] z-20"
                          : "bg-[#020202] border-white/20 text-white/50 scale-100 z-10"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative z-20 w-36 h-36 sm:w-52 sm:h-52 rounded-full p-1.5 bg-gradient-to-tr from-[#bf4417] to-transparent shadow-[0_0_50px_rgba(191,68,23,0.25)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#020202] border border-white/10 flex items-center justify-center">
              <img
                src="/passport-cutout.png"
                alt="Shah Dhairya"
                className="w-full h-full object-cover transition-all duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-lg w-full min-h-[160px] sm:min-h-[200px] flex items-center justify-start overflow-hidden">
          <motion.div
            ref={cardRef}
            animate={{ width: cardOpen ? "100%" : "0%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            <motion.div
              animate={{ opacity: cardOpen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="p-5 sm:p-8 min-w-0 md:min-w-[420px]"
            >
              <h3 className="text-base sm:text-2xl font-bold text-white mb-2 leading-snug flex items-center gap-2">
                <ActiveIcon size={20} className="text-[#bf4417] shrink-0" />
                <span>{activeCheckpoint.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                {activeCheckpoint.desc}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RotatingHighlights;
