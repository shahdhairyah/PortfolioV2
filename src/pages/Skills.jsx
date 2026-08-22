import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Layers, Monitor, Server, Wrench } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { SEO } from "@/components/SEO";
import { skills, skillCategories, categoryColors } from "@/data/skills";

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const iconFor = (name) => {
  const key = name.toLowerCase();
  const map = {
    html5: "html5/html5-original.svg",
    css3: "css3/css3-original.svg",
    javascript: "javascript/javascript-original.svg",
    "react.js": "react/react-original.svg",
    react: "react/react-original.svg",
    bootstrap: "bootstrap/bootstrap-original.svg",
    "tailwind css": "tailwindcss/tailwindcss-original.svg",
    php: "php/php-original.svg",
    mysql: "mysql/mysql-original.svg",
    python: "python/python-original.svg",
    "node.js": "nodejs/nodejs-original.svg",
    git: "git/git-original.svg",
    github: "github/github-original.svg",
    "vs code": "vscode/vscode-original.svg",
    xampp: "apache/apache-original.svg",
  };
  const slug = map[key];
  return slug ? `${ICON_BASE}/${slug}` : null;
};

const catIcons = { all: Layers, frontend: Monitor, backend: Server, tools: Wrench };

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shahdhairyah.in/" },
    { "@type": "ListItem", position: 2, name: "Skills", item: "https://shahdhairyah.in/skills" },
  ],
};

const EASE = [0.16, 1, 0.3, 1];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: EASE },
});

const ProficiencyRing = ({ level, color, size = 40 }) => {
  const stroke = 3;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const pct = level / 5;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <svg ref={ref} width={size} height={size} className="shrink-0">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={stroke}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={inView ? { strokeDashoffset: circumference * (1 - pct) } : {}}
        transition={{ duration: 1, delay: 0.2, ease: EASE }}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x={size / 2}
        y={size / 2}
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-white/70 text-[10px] font-semibold font-mono"
      >
        {level}
      </text>
    </svg>
  );
};

export const Skills = () => {
  const [activeCat, setActiveCat] = useState("all");

  const filtered =
    activeCat === "all"
      ? skills
      : skills.filter((s) => s.category === activeCat);

  return (
    <main className="relative w-full min-h-screen bg-[#020202] text-white flex flex-col items-center gap-[10vh] py-[4vh] pb-40 px-[4vw] overflow-hidden font-sans">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(#bf4417_0%,transparent_70%)] blur-[140px] opacity-10 pointer-events-none" />

      <SEO
        title="Shah Dhairya's Skills – React, Node.js, Python, MySQL"
        description="Technical skills of Shah Dhairya: React, PHP, Python, MySQL, Tailwind CSS, Git, and more."
        path="/skills"
        jsonLd={breadcrumbJsonLd}
      />

      <PageHeader
        title="SKILLS"
        subtitle="Technologies I work with daily — from interface to infrastructure."
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-10">
        {/* filters */}
        <motion.div {...reveal()} className="flex flex-wrap items-center justify-center gap-3">
          {skillCategories.map((cat) => {
            const active = activeCat === cat.id;
            const Icon = catIcons[cat.id];
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  active
                    ? "bg-[#bf4417] text-white shadow-[0_0_20px_rgba(191,68,23,0.4)]"
                    : "bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-[#bf4417]/50"
                }`}
              >
                <Icon size={14} />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        <motion.p {...reveal(0.05)} className="text-center text-[11px] uppercase tracking-[0.2em] text-white/25">
          {filtered.length} {filtered.length === 1 ? "skill" : "skills"}
        </motion.p>

        {/* grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => {
              const icon = iconFor(skill.name);
              const color = categoryColors[skill.category];

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: i * 0.03, ease: EASE }}
                  className="group relative flex flex-col items-center p-5 bg-white/[0.03] hover:bg-white/[0.07] backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#bf4417]/50 hover:-translate-y-1 transition-all duration-300"
                >
                  {icon ? (
                    <img
                      src={icon}
                      alt={skill.name}
                      loading="lazy"
                      decoding="async"
                      className={`w-10 h-10 mb-3 object-contain group-hover:scale-110 transition-transform duration-300 ${
                        skill.name === "GitHub" ? "invert opacity-80" : ""
                      }`}
                    />
                  ) : (
                    <div
                      className="w-10 h-10 mb-3 flex items-center justify-center rounded-xl font-bold text-lg"
                      style={{
                        background: `${color}15`,
                        color,
                        border: `1px solid ${color}30`,
                      }}
                    >
                      {skill.name.charAt(0)}
                    </div>
                  )}

                  <h3 className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors text-center">
                    {skill.name}
                  </h3>

                  <p className="mt-1 text-[10px] text-white/30 text-center leading-snug">
                    {skill.description}
                  </p>

                  <div className="mt-3">
                    <ProficiencyRing level={skill.level} color={color} />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
};

export default Skills;
