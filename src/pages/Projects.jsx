import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PageHeader from "@/components/PageHeader";
import { SEO } from "@/components/SEO";
import { projects } from "@/data/projects";

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

GithubIcon.propTypes = { size: PropTypes.number };

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shahdhairyah.in/" },
    { "@type": "ListItem", position: 2, name: "Projects", item: "https://shahdhairyah.in/projects" },
  ],
};

const ProjectRow = ({ project, reverse }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full min-h-[70vh] md:h-[70vh] flex flex-col md:flex-row items-center justify-center gap-[4vh] overflow-hidden"
    >
      <div
        className={`absolute h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(#bf4417,transparent)] blur-[120px] opacity-50 pointer-events-none left-1/2 -translate-x-1/2 md:translate-x-0 ${
          reverse ? "md:left-[90vh]" : "md:left-[40vh]"
        }`}
      />

      <div
        className={`h-[30vh] md:h-full w-full md:w-1/2 flex justify-center ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-[80%] h-auto max-h-full p-[2vh] bg-white/20 backdrop-blur-[20px] rounded-[20px] transition-transform duration-200 hover:rotate-2">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              decoding="async"
              className="w-full h-auto max-h-[52vh] object-cover rounded-[20px] transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>

      <div
        className={`w-full md:w-1/2 h-auto md:h-[80%] flex flex-col justify-between px-0 md:px-[4vh] items-start gap-6 md:gap-0 ${
          reverse ? "md:order-1 md:items-end md:text-right" : ""
        }`}
      >
        <div className="w-full">
          <h3 className="text-[clamp(1.5rem,5.5vw,2.375rem)] md:text-[38px] font-semibold text-transparent bg-clip-text bg-linear-to-b from-[rgb(92,92,92)] to-white">
            {project.title}
          </h3>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#bf4417]">
              {project.category}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-white/30">· {project.year}</span>
            <span className="text-[10px] uppercase tracking-widest text-white/30">· {project.role}</span>
          </div>
          <p className="mt-[2vh] md:mt-[4vh] text-[#b5b5b5] text-[14px] md:text-[16px] font-normal leading-6">
            {project.challenge}
          </p>
          <p className="mt-3 text-[#b5b5b5] text-[14px] md:text-[16px] font-normal leading-6">
            {project.solution}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-medium text-white/60"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full flex items-center gap-[1vh] justify-end flex-wrap md:flex-nowrap">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative h-[4vh] px-[2vh] text-white text-[14px] bg-white/20 backdrop-blur-[20px] rounded-[5px] flex items-center justify-center gap-[1vh] whitespace-nowrap overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 bg-[#c14b14] -z-10 w-0 transition-all duration-300 ease-in-out group-hover:w-full left-0" />
              Github <GithubIcon size={16} />
            </a>
          )}
          <Link
            to={`/projects/${project.slug}`}
            className="group relative h-[4vh] px-[2vh] text-white text-[14px] bg-white/20 backdrop-blur-[20px] rounded-[5px] flex items-center justify-center gap-[1vh] whitespace-nowrap overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 bg-[#c14b14] -z-10 w-0 transition-all duration-300 ease-in-out group-hover:w-full left-0" />
            Details <ArrowUpRight size={16} />
          </Link>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative h-[4vh] px-[2vh] text-white text-[14px] bg-white/20 backdrop-blur-[20px] rounded-[5px] flex items-center justify-center gap-[1vh] whitespace-nowrap overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 bg-[#c14b14] -z-10 w-0 transition-all duration-300 ease-in-out group-hover:w-full left-0" />
              Live <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.section>
  );
};

ProjectRow.propTypes = {
  project: PropTypes.object.isRequired,
  reverse: PropTypes.bool,
};

export const Projects = () => {
  return (
    <main className="w-full min-h-screen bg-[#020202] flex flex-col items-center justify-center gap-[10vh] md:gap-[20vh] py-[4vh] pb-40 px-[4vw] font-sans">
      <SEO
        title="Projects by Shah Dhairya – Full-Stack Case Studies"
        description="Explore full-stack projects built by Shah Dhairya — web apps, AI/IoT integrations, and digital products crafted with React, PHP, Python and Node.js."
        path="/projects"
        jsonLd={breadcrumbJsonLd}
      />

      <PageHeader title="PROJECTS" titleSize="text-[clamp(1.8rem,7vw,5rem)]" />

      {projects.map((project, i) => (
        <ProjectRow key={project.id} project={project} reverse={i % 2 === 1} />
      ))}
    </main>
  );
};

export default Projects;
