import PageHeader from "./PageHeader";

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const techData = [
  { name: "HTML5", icon: `${ICON_BASE}/html5/html5-original.svg` },
  { name: "CSS3", icon: `${ICON_BASE}/css3/css3-original.svg` },
  { name: "JavaScript", icon: `${ICON_BASE}/javascript/javascript-original.svg` },
  { name: "React", icon: `${ICON_BASE}/react/react-original.svg` },
  { name: "Bootstrap", icon: `${ICON_BASE}/bootstrap/bootstrap-original.svg` },
  { name: "Tailwind CSS", icon: `${ICON_BASE}/tailwindcss/tailwindcss-original.svg` },
  { name: "PHP", icon: `${ICON_BASE}/php/php-original.svg` },
  { name: "MySQL", icon: `${ICON_BASE}/mysql/mysql-original.svg` },
  { name: "Python", icon: `${ICON_BASE}/python/python-original.svg` },
  { name: "Node.js", icon: `${ICON_BASE}/nodejs/nodejs-original.svg` },
  { name: "Git", icon: `${ICON_BASE}/git/git-original.svg` },
  { name: "GitHub", icon: `${ICON_BASE}/github/github-original.svg` },
  { name: "VS Code", icon: `${ICON_BASE}/vscode/vscode-original.svg` },
  { name: "Vite", icon: `${ICON_BASE}/vitejs/vitejs-original.svg` },
];

const marqueeRow1 = [...techData.slice(0, 8), ...techData.slice(0, 8)];
const marqueeRow2 = [...techData.slice(8), ...techData.slice(8)];

const categories = [
  { label: "Frontend", items: "React, HTML, CSS, Tailwind, Bootstrap, JS" },
  { label: "Backend", items: "PHP, Node.js, Python, REST APIs" },
  { label: "Databases", items: "MySQL, MongoDB" },
  { label: "Tools & More", items: "Git, GitHub, VS Code, Vite, Figma" },
];

const needsInvert = (name) => name === "GitHub";

const TechTools = () => {
  return (
    <section className="relative w-full bg-[#020202] text-white py-20 px-6 overflow-hidden" id="tech">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(#bf4417_0%,transparent_70%)] blur-[100px] opacity-25 pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <PageHeader
          title="Tech & Tools"
          subtitle="The technologies I work with to build fast, scalable, and production-grade applications."
        />

        <div className="relative w-full overflow-hidden mb-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-4 cursor-pointer animate-marquee-left group-hover:[animation-play-state:paused] hover:[animation-play-state:paused]">
            {marqueeRow1.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-4 py-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-[#bf4417]/50 transition-colors shrink-0"
              >
                <img
                  src={t.icon}
                  alt={t.name}
                  loading="lazy"
                  decoding="async"
                  className={`w-5 h-5 object-contain ${needsInvert(t.name) ? "invert" : ""}`}
                />
                <span className="text-xs font-medium text-white/80">{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full overflow-hidden mb-16 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-4 cursor-pointer animate-marquee-right group-hover:[animation-play-state:paused] hover:[animation-play-state:paused]">
            {marqueeRow2.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-4 py-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-[#bf4417]/50 transition-colors shrink-0"
              >
                <img
                  src={t.icon}
                  alt={t.name}
                  loading="lazy"
                  decoding="async"
                  className={`w-5 h-5 object-contain ${needsInvert(t.name) ? "invert" : ""}`}
                />
                <span className="text-xs font-medium text-white/80">{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-16">
          {techData.map((t) => (
            <div
              key={t.name}
              className="group flex flex-col items-center justify-center p-5 bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#bf4417]/60 transition-all cursor-pointer duration-300"
            >
              <img
                src={t.icon}
                alt={t.name}
                loading="lazy"
                decoding="async"
                className={`w-10 h-10 mb-3 object-contain group-hover:scale-110 transition-transform duration-300 ${
                  needsInvert(t.name) ? "invert opacity-80" : ""
                }`}
              />
              <span className="text-xs font-semibold text-white/70 group-hover:text-white transition-colors">
                {t.name}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <div
              key={cat.label}
              className="flex flex-col gap-1.5 p-5 bg-white/[0.02] backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#bf4417]/40 transition-colors"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#bf4417]">
                {cat.label}
              </span>
              <span className="text-xs text-white/60 leading-relaxed">
                {cat.items}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTools;
