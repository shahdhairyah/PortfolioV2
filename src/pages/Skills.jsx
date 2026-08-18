import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { SEO } from "@/components/SEO";
import { skills, skillCategories } from "@/data/skills";

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const iconFor = (name) => {
  const key = name.toLowerCase();
  const map = {
    html5: "html5/html5-original.svg",
    css3: "css3/css3-original.svg",
    javascript: "javascript/javascript-original.svg",
    "react.js": "react/react-original.svg",
    "react": "react/react-original.svg",
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shahdhairyah.in/" },
    { "@type": "ListItem", position: 2, name: "Skills", item: "https://shahdhairyah.in/skills" },
  ],
};

const categoryLabel = (id) =>
  skillCategories.find((c) => c.id === id)?.label || id;

export const Skills = () => {
  const [activeCat, setActiveCat] = useState("all");

  const filtered =
    activeCat === "all"
      ? skills
      : skills.filter((s) => s.category === activeCat);

  return (
    <main className="w-full min-h-screen bg-[#020202] flex flex-col items-center justify-center gap-[10vh] py-[4vh] pb-40 px-[4vw] font-sans">
      <SEO
        title="Shah Dhairya's Skills – React, Node.js, Python, MySQL"
        description="Technical skills of Shah Dhairya: React, PHP, Python, MySQL, Tailwind CSS, Git, and more. Full-stack development proficiency overview."
        path="/skills"
        jsonLd={breadcrumbJsonLd}
      />

      <PageHeader
        title="SKILLS"
        subtitle="Technologies I work with daily — from interface to infrastructure."
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {skillCategories.map((cat) => {
            const active = activeCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  active
                    ? "bg-[#bf4417] text-white shadow-[0_0_20px_rgba(191,68,23,0.4)]"
                    : "bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-[#bf4417]/50"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <p className="text-center text-[11px] uppercase tracking-[0.2em] text-white/30 mb-8">
          Showing {filtered.length} {filtered.length === 1 ? "skill" : "skills"}
          {activeCat !== "all" && (
            <>
              {" "}
              · <span className="text-[#bf4417]">{categoryLabel(activeCat)}</span>
            </>
          )}
        </p>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => {
              const icon = iconFor(skill.name);
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col items-center justify-center p-6 bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#bf4417]/60 hover:-translate-y-1 transition-all duration-300"
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
                    <div className="w-10 h-10 mb-3 flex items-center justify-center rounded-xl bg-[#bf4417]/10 text-[#bf4417] font-bold text-lg">
                      {skill.name.charAt(0)}
                    </div>
                  )}
                  <h3 className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#bf4417]">
                    {categoryLabel(skill.category)}
                  </p>
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
