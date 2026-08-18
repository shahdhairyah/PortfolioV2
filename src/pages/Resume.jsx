import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
  User,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { SEO } from "@/components/SEO";
import { identity, socials, roles, timeline } from "@/data/profile";
import { projects } from "@/data/projects";

const Github = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

Github.propTypes = { size: PropTypes.number };

const Linkedin = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

Linkedin.propTypes = { size: PropTypes.number };

const githubUrl = socials.find((s) => s.label === "GitHub")?.href;
const linkedinUrl = socials.find((s) => s.label === "LinkedIn")?.href;

const experience = timeline.map((t) => ({
  year: t.year,
  title: t.title,
  desc: t.desc,
}));

const keyProjects = projects.filter((p) => p.featured).slice(0, 3);

const hackathons = [
  {
    title: "SSIP Hackathon — 4th Place My Sector",
    text: "Built a working product among 2062 teams (10449 participants) statewide, ranking 4th in my sector among 181 selected teams.",
  },
  {
    title: "CVMU Hackathon 2025 — Top 181 Selection",
    text: "Selected in the top 181 teams of CVMU Hackathon 2025 for a 36+ hour live coding sprint.",
  },
];

const sectionHeader = (icon, label) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#bf4417]/10 border border-[#bf4417]/30 text-[#bf4417]">
      {icon}
    </span>
    <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-[#bf4417]">
      {label}
    </h2>
    <span className="flex-1 h-px bg-gradient-to-r from-[#bf4417]/40 to-transparent" />
  </div>
);

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shahdhairyah.in/" },
    { "@type": "ListItem", position: 2, name: "Resume", item: "https://shahdhairyah.in/resume" },
  ],
};

export const Resume = () => {
  return (
    <main className="w-full min-h-screen bg-[#020202] flex flex-col items-center justify-center gap-[10vh] py-[4vh] pb-40 px-[4vw] font-sans">
      <SEO
        title="Shah Dhairya's Resume – Full-Stack Developer"
        description="Resume of Shah Dhairya — Full-Stack Developer & Digital Architect. Skills, projects, education, and achievements."
        path="/resume"
        jsonLd={breadcrumbJsonLd}
      />

      <PageHeader
        title="RESUME"
        subtitle="A snapshot of my journey, skills, and what I bring to the table."
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-16">
        <motion.div {...reveal()} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={identity.resume}
            download
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#bf4417] to-[#991b1b] hover:from-[#ea580c] hover:to-[#7f1d1d] shadow-[0_0_25px_rgba(191,68,23,0.35)] hover:shadow-[0_0_40px_rgba(191,68,23,0.55)] transition-all duration-300"
          >
            <Download size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            <span>Download Resume (PDF)</span>
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white/80 bg-white/5 border border-white/10 hover:border-[#0077b5]/60 hover:text-white transition-all duration-300"
          >
            <Linkedin size={16} className="text-[#0077b5]" />
            <span>View LinkedIn</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-8">
            <motion.div {...reveal(0.05)} className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6">
              {sectionHeader(<User size={15} />, "Profile")}
              <p className="text-sm text-white/60 leading-relaxed">{identity.statement}</p>
            </motion.div>

            <motion.div {...reveal(0.1)} className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6">
              {sectionHeader(<Mail size={15} />, "Contact")}
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-center gap-3">
                  <Mail size={15} className="text-[#bf4417] shrink-0" />
                  <a href={`mailto:${identity.email}`} className="text-white/70 hover:text-white transition-colors break-all">
                    {identity.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={15} className="text-[#bf4417] shrink-0" />
                  <span className="text-white/70">{identity.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={15} className="text-[#bf4417] shrink-0" />
                  <span className="text-white/70">{identity.location}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe size={15} className="text-[#bf4417] shrink-0" />
                  <a href={identity.website} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                    {identity.website.replace("https://", "")}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Github size={15} className="text-[#bf4417] shrink-0" />
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                    github.com/shahdhairyah
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin size={15} className="text-[#0077b5] shrink-0" />
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                    linkedin.com/in/shahdhairyah
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div {...reveal(0.15)} className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6">
              {sectionHeader(<Award size={15} />, "Skills")}
              <div className="space-y-5">
                {roles.map((group) => (
                  <div key={group.label}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2.5">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-white/75"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...reveal(0.2)} className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6">
              {sectionHeader(<GraduationCap size={15} />, "Education")}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#bf4417]/10 border border-[#bf4417]/30 text-[#bf4417] shrink-0">
                  <GraduationCap size={19} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90">Computer Engineering</p>
                  <p className="text-xs text-white/50 mt-1">ADIT (CVM University), Anand</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-xs text-white/50 leading-relaxed">
                  Solid foundation in algorithms, databases, and systems — building
                  toward full-stack and AI engineering.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8">
            <motion.div {...reveal(0.05)} className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6">
              {sectionHeader(<Briefcase size={15} />, "Experience & Journey")}
              <div className="relative pl-6 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-white/10">
                {experience.map((e) => (
                  <div key={e.title} className="relative pb-7 last:pb-0">
                    <span className="absolute left-[-22px] top-1.5 w-[13px] h-[13px] rotate-45 bg-[#bf4417] shadow-[0_0_12px_rgba(191,68,23,0.6)]" />
                    <div className="flex flex-wrap items-center gap-3 mb-1.5">
                      <span className="px-2.5 py-1 rounded-md bg-[#bf4417]/10 border border-[#bf4417]/30 text-[#bf4417] text-[11px] font-bold font-mono">
                        {e.year}
                      </span>
                      <h3 className="text-sm font-semibold text-white/90">
                        {e.title}
                      </h3>
                    </div>
                    <p className="text-sm text-white/55 leading-relaxed">
                      {e.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...reveal(0.1)} className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6">
              {sectionHeader(<Globe size={15} />, "Key Projects")}
              <div className="space-y-5">
                {keyProjects.map((p, i) => (
                  <div key={p.id} className="rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#bf4417]/40 transition-colors duration-300 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-sm font-semibold text-white/90">
                        <span className="font-mono text-[10px] text-[#bf4417] mr-2">0{i + 1}</span>
                        {p.title}
                      </h3>
                      <span className="text-[11px] font-mono text-white/40">{p.year} · {p.category}</span>
                    </div>
                    <p className="text-sm text-white/55 leading-relaxed">{p.solution}</p>
                    <div className="flex flex-wrap gap-2 mt-3.5">
                      {p.stack.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-medium text-white/60">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...reveal(0.15)} className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6">
              {sectionHeader(<Award size={15} />, "Achievements")}
              <div className="space-y-5">
                {hackathons.map((h) => (
                  <div key={h.title} className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-400 shrink-0">
                      <Award size={16} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white/90">{h.title}</h3>
                      <p className="text-sm text-white/55 leading-relaxed mt-1">{h.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div {...reveal(0.1)} className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-[#bf4417]/30 bg-gradient-to-r from-[#bf4417]/10 to-transparent p-6">
          <div>
            <h3 className="text-sm font-semibold text-white/90">
              Want the full picture?
            </h3>
            <p className="text-xs text-white/50 mt-1">
              Download the complete PDF with every project, achievement, and detail.
            </p>
          </div>
          <a
            href={identity.resume}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#bf4417] hover:bg-[#a33811] shadow-[0_0_20px_rgba(191,68,23,0.4)] transition-all duration-300"
          >
            <Download size={15} />
            <span>Resume PDF</span>
          </a>
        </motion.div>
      </div>
    </main>
  );
};

export default Resume;
