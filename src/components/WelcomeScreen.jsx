import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* eslint-disable react/prop-types */

const LINES = [
  "initializing portfolio...",
  "loading projects........ ✓",
  "loading experience...... ✓",
  "loading stack........... ✓",
  "establishing connection. ✓",
  "\nSYSTEM READY",
];

const T = {
  line: 420,
  hold: 500,
  fade: 500,
};

const WelcomeScreen = ({ onWelcomeComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const completed = useRef(false);

  useEffect(() => {
    if (currentLine < LINES.length) {
      const timer = setTimeout(() => setCurrentLine((prev) => prev + 1), T.line);
      return () => clearTimeout(timer);
    }
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        if (!completed.current) {
          completed.current = true;
          onWelcomeComplete();
        }
      }, T.fade);
    }, T.hold);
    return () => clearTimeout(fadeTimer);
  }, [currentLine, onWelcomeComplete]);

  return (
    <motion.div
      className={`fixed inset-0 z-[200] bg-[#020202] text-emerald-400 font-mono flex items-center justify-center p-6 transition-opacity duration-500 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-md space-y-2 text-sm sm:text-base">
        {LINES.slice(0, currentLine).map((line, index) => (
          <div key={index} className="whitespace-pre-wrap animate-fade-in">
            <span className="text-emerald-600 mr-2">&gt;</span>
            <span
              className={
                index === LINES.length - 1
                  ? "text-white font-bold tracking-wider"
                  : "text-emerald-400/90"
              }
            >
              {line}
            </span>
          </div>
        ))}
        {currentLine < LINES.length && (
          <div className="flex items-center gap-1">
            <span className="text-emerald-600">&gt;</span>
            <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
