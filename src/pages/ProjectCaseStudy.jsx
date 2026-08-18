import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, FolderGit2, CheckCircle2, Cpu, Code2, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { SEO } from "@/components/SEO";
import { projects } from "@/data/projects";

const EASE = [0.16, 1, 0.3, 1];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: EASE },
});

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

GithubIcon.propTypes = { size: PropTypes.number };

const SectionTitle = ({ kicker, children }) => (
  <div className="flex items-baseline gap-3 mb-6">
    <span className="w-1.5 h-6 bg-gradient-to-b from-[#bf4417] to-[#991b1b] rounded-full" />
    <div>
      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#ff9a4d]">
        {kicker}
      </div>
      <h2 className="mt-1 text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-widest">
        {children}
      </h2>
    </div>
  </div>
);

SectionTitle.propTypes = {
  kicker: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const StatTile = ({ stat }) => (
  <div className="px-4 py-5 rounded-2xl bg-white/[0.02] border border-white/5 border-l-2 border-l-[#bf4417]">
    <div className="font-display text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff9a4d] to-[#991b1b]">
      {stat.value}
    </div>
    <div className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/40">
      {stat.label}
    </div>
  </div>
);

StatTile.propTypes = {
  stat: PropTypes.object.isRequired,
};

export const ProjectCaseStudy = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main className="relative w-full min-h-screen bg-[#020202] text-white flex flex-col items-center py-[4vh] pb-40 px-[4vw] overflow-hidden font-sans">
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:54px_54px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(#bf4417_0%,transparent_70%)] blur-[140px] opacity-10 pointer-events-none" />

      <SEO
        title={`${project.title} – Case Study by Shah Dhairya`}
        description={project.tagline}
        path={`/projects/${project.slug}`}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <motion.div {...reveal()}>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/50 hover:text-[#ff9a4d] transition-colors"
          >
            <ArrowLeft size={15} />
            Back to Projects
          </Link>
        </motion.div>

        <motion.div
          {...reveal(0.1)}
          className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
        >
          <div className="h-1 bg-gradient-to-r from-[#bf4417] via-amber-500 to-[#991b1b]" />

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#bf4417]/10 border border-[#bf4417]/30 text-[11px] font-bold text-[#ff9a4d]">
                {project.category}
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-mono">
                {project.year} · {project.role}
              </span>
              <span className="ml-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-[11px] font-bold">
                {project.status}
              </span>
            </div>

            <h1 className="mt-7 font-display text-3xl sm:text-4xl md:text-[3.4rem] text-white leading-[1.05]">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-white/60 leading-relaxed text-base md:text-lg">
              {project.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-[12px] font-mono text-white/60 hover:text-[#ff9a4d] hover:border-[#bf4417]/50 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#bf4417] to-[#991b1b] hover:from-[#ea580c] hover:to-[#7f1d1d] text-sm font-semibold text-white transition-all duration-300 shadow-[0_0_18px_rgba(191,68,23,0.35)]"
                >
                  Open Live App <ArrowUpRight size={15} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-sm font-semibold text-white/70 hover:text-[#ff9a4d] hover:border-[#bf4417]/50 transition-all duration-300"
                >
                  <GithubIcon size={16} />
                  GitHub Repository
                </a>
              )}
              {!project.demoUrl && (
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-sm font-semibold text-white/35 cursor-not-allowed select-none">
                  Demo coming soon
                </span>
              )}
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.stats.map((stat) => (
                <StatTile key={stat.label} stat={stat} />
              ))}
            </div>

            <div className="mt-14 space-y-14">
              <motion.div {...reveal(0.12)}>
                <SectionTitle kicker="01">Problem Statement</SectionTitle>
                <h3 className="text-lg md:text-xl font-display font-bold text-white mb-3">
                  {project.problemTitle}
                </h3>
                <p className="text-white/60 leading-relaxed text-base md:text-lg">
                  {project.problem}
                </p>
              </motion.div>

              <motion.div {...reveal(0.16)}>
                <SectionTitle kicker="02">Engineering Solution</SectionTitle>
                <h3 className="text-lg md:text-xl font-display font-bold text-white mb-3">
                  {project.solutionTitle}
                </h3>
                <p className="text-white/60 leading-relaxed text-base md:text-lg">
                  {project.solutionIntro}
                </p>
                <ul className="mt-6 space-y-3">
                  {project.solutionPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-white/70 leading-relaxed"
                    >
                      <CheckCircle2 size={16} className="text-[#bf4417] mt-1 shrink-0" />
                      <span className="text-[14px] md:text-[15px]">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div {...reveal(0.2)}>
                <SectionTitle kicker="03">Capabilities</SectionTitle>
                <h3 className="text-lg md:text-xl font-display font-bold text-white mb-6">
                  System Features &amp; Modules
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {project.capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#bf4417]/40 hover:bg-white/[0.04] transition-all duration-300"
                    >
                      <Code2 size={15} className="text-[#bf4417] shrink-0" />
                      <span className="text-[13px] text-white/75">{cap}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...reveal(0.24)}>
                <SectionTitle kicker="04">Visual Interface</SectionTitle>
                <h3 className="text-lg md:text-xl font-display font-bold text-white mb-6">
                  Application Screens &amp; User Flow
                </h3>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                  <img
                    src={project.image}
                    alt={`${project.title} primary interface`}
                    className="w-full h-auto object-cover"
                  />
                  <div className="flex items-center gap-2 px-4 py-3 border-t border-white/10 bg-black/40">
                    <LayoutGrid size={13} className="text-[#bf4417]" />
                    <span className="text-[11px] uppercase tracking-widest text-white/45 font-mono">
                      {project.title} — Primary Interface
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div {...reveal(0.28)}>
                <SectionTitle kicker="05">Implementation Details</SectionTitle>
                <h3 className="text-lg md:text-xl font-display font-bold text-white mb-6">
                  Technical Challenges &amp; Solutions
                </h3>
                <div className="space-y-4">
                  {project.challenges.map((challenge, i) => (
                    <div
                      key={challenge.title}
                      className="flex gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#bf4417]/40 transition-all duration-300"
                    >
                      <span className="font-mono text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#ff9a4d] to-[#991b1b] shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <Cpu size={14} className="text-[#bf4417]" />
                          <h4 className="text-white font-semibold">{challenge.title}</h4>
                        </div>
                        <p className="text-white/55 leading-relaxed text-[14px]">
                          {challenge.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...reveal(0.32)} className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#bf4417] to-[#991b1b] hover:from-[#ea580c] hover:to-[#7f1d1d] text-sm font-semibold text-white transition-all duration-300 shadow-[0_0_18px_rgba(191,68,23,0.35)]"
                >
                  <ArrowLeft size={15} />
                  All Projects
                </Link>
                <a
                  href="mailto:admin@mail.shahdhairyah.in"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-sm font-semibold text-white/70 hover:text-[#ff9a4d] hover:border-[#bf4417]/50 transition-all duration-300"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...reveal(0.2)}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {projects
            .filter((p) => p.slug !== project.slug)
            .slice(0, 4)
            .map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-4 hover:border-[#bf4417]/50 hover:bg-white/[0.04] transition-all duration-300"
              >
                <FolderGit2 size={16} className="text-[#bf4417] mb-2.5" />
                <div className="text-[13px] font-semibold text-white/80 group-hover:text-white leading-snug">
                  {p.title}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-white/35">
                  {p.category}
                </div>
              </Link>
            ))}
        </motion.div>
      </div>
    </main>
  );
};

export default ProjectCaseStudy;
