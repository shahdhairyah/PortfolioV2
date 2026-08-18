import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import PropTypes from "prop-types";
import { projects } from "@/data/projects";

const GithubIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

GithubIcon.propTypes = { size: PropTypes.number };

const featured = [
  ...projects.filter((p) => p.featured),
  ...projects.filter((p) => !p.featured),
].slice(0, 3);

const ProjectCard = ({ project }) => {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#bf4417]/50 hover:bg-white/[0.05] transition-all duration-300">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/20 to-transparent" />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur border border-white/10 text-[10px] uppercase tracking-widest text-[#bf4417] font-bold">
          {project.category}
        </span>
        {project.status && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#bf4417]/15 border border-[#bf4417]/30 text-[10px] uppercase tracking-widest text-[#bf4417] font-bold">
            {project.status}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-white group-hover:text-[#bf4417] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="mt-2 text-[13px] text-white/60 leading-relaxed flex-1 line-clamp-2">
          {project.challenge}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-medium text-white/60"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/40 transition-all duration-200"
              >
                <GithubIcon size={15} />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/40 transition-all duration-200"
              >
                <ArrowUpRight size={15} />
              </a>
            )}
            {!project.githubUrl && !project.demoUrl && (
              <span className="text-[10px] uppercase tracking-widest text-white/30">
                {project.year}
              </span>
            )}
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#bf4417] hover:text-white transition-colors"
          >
            Details <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

const FeaturedProjects = () => {
  return (
    <section className="relative w-full bg-[#020202] text-white py-24 md:py-32 px-6 overflow-hidden" id="work">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(#bf4417_0%,transparent_70%)] blur-[140px] opacity-10 pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#bf4417]/10 border border-[#bf4417]/30 text-[#bf4417] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={14} />
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf4417] via-amber-600 to-[#991b1b]">
                Projects
              </span>
            </h2>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-[#bf4417] transition-colors md:pb-1"
          >
            View All Projects <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
