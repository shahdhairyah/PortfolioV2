import { Link } from "react-router-dom";
import {
  Mail,
  MessageSquare,
  ArrowUpRight,
  Code2,
  ArrowUp,
} from "lucide-react";
import { identity, socials } from "@/data/profile";
import PropTypes from "prop-types";

const Github = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Linkedin = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

Github.propTypes = { size: PropTypes.number };
Linkedin.propTypes = { size: PropTypes.number };

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Achievements", path: "/achievements" },
  { name: "Contact", path: "/contact" },
];

const waNumber = identity.phone.replace(/[^0-9]/g, "");

export const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative w-full bg-[#fafafa] text-[#111] border-t border-[#e5e5e5] px-6 pt-16 pb-8 overflow-hidden font-inter">
      <div aria-hidden className="pointer-events-none select-none absolute inset-0 flex items-center justify-center">
        <span className="block text-center font-display font-extrabold leading-[0.85] text-[15vw] md:text-[10rem] text-transparent [-webkit-text-stroke:1.5px_rgba(17,17,17,0.07)] whitespace-nowrap">
          <span className="block">SHAH</span>
          <span className="block">DHAIRYA</span>
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="relative overflow-hidden px-8 py-10 md:px-14 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="absolute -top-28 -right-24 w-80 h-80 rounded-full bg-[radial-gradient(#bf4417_0%,transparent_70%)] blur-[80px] opacity-20 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-[#bf4417]/50 to-transparent pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#bf4417] border border-[#bf4417]/40 bg-[#bf4417]/10 px-3 py-1 rounded-md">
              <Code2 size={13} />
              Open for work
            </span>
            <h2 className="mt-4 text-2xl md:text-4xl font-extrabold font-syne tracking-tight leading-tight">
              Have an idea?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf4417] via-[#ea580c] to-[#991b1b]">
                Let&apos;s build it.
              </span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#666] max-w-md font-normal">
              Open to freelance projects, collaborations, and new opportunities —
              let&apos;s turn your vision into a product.
            </p>
          </div>

          <Link
            to="/contact"
            className="relative z-10 group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#bf4417] to-[#991b1b] hover:from-[#ea580c] hover:to-[#7f1d1d] hover:shadow-[0_0_35px_rgba(191,68,23,0.5)] transition-all duration-300 shrink-0"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-14">
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold font-syne text-[#111] tracking-tight">
                Shah Dhairya
              </span>
              <span className="w-2 h-2 rounded-full bg-[#c2410c] animate-pulse" />
            </div>

            <p className="text-sm text-[#555] leading-relaxed max-w-sm">
              Full-Stack Developer &amp; Digital Architect building performant,
              clean, and modern web applications with React, PHP, Python, and
              Node.js.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={socials[0]?.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white border border-[#e5e5e5] text-[#444] hover:text-white hover:bg-[#111] hover:border-[#111] hover:-translate-y-0.5 transition-all duration-200"
              >
                <Github size={16} />
              </a>
              <a
                href={socials[1]?.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white border border-[#e5e5e5] text-[#444] hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] hover:-translate-y-0.5 transition-all duration-200"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${identity.email}`}
                aria-label="Email"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white border border-[#e5e5e5] text-[#444] hover:text-white hover:bg-[#c2410c] hover:border-[#c2410c] hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail size={16} />
              </a>
              <a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white border border-[#e5e5e5] text-[#444] hover:text-white hover:bg-emerald-600 hover:border-emerald-600 hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageSquare size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#777] font-syne">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              {quickLinks.map((l, i) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="group inline-flex items-center gap-2 text-[#444] hover:text-[#c2410c] transition-colors duration-200"
                  >
                    <span className="font-mono text-[10px] text-[#c2410c] opacity-0 group-hover:opacity-100 transition-opacity">
                      0{i + 1}
                    </span>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#777] font-syne">
              Get in Touch
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`mailto:${identity.email}`}
                className="group flex items-center justify-between p-3.5 bg-white rounded-xl border border-[#e5e5e5] hover:border-[#c2410c]/40 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-orange-50 text-[#c2410c]">
                    <Mail size={18} />
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#888]">
                      Email
                    </span>
                    <span className="text-xs font-medium text-[#111] truncate">
                      {identity.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[#888] group-hover:text-[#c2410c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 flex-shrink-0 ml-1"
                />
              </a>

              <a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 bg-white rounded-xl border border-[#e5e5e5] hover:border-[#c2410c]/40 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                    <MessageSquare size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#888]">
                      WhatsApp
                    </span>
                    <span className="text-xs font-medium text-[#111]">
                      {identity.phone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[#888] group-hover:text-[#c2410c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 flex-shrink-0"
                />
              </a>

              <a
                href={socials[0]?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 bg-white rounded-xl border border-[#e5e5e5] hover:border-[#111] hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-center gap-3 truncate">
                  <div className="p-2 rounded-lg bg-gray-100 text-[#111]">
                    <Github size={18} />
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#888]">
                      GitHub
                    </span>
                    <span className="text-xs font-medium text-[#111] truncate">
                      github.com/shahdhairyah
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[#888] group-hover:text-[#111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 flex-shrink-0 ml-1"
                />
              </a>

              <a
                href={socials[1]?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 bg-white rounded-xl border border-[#e5e5e5] hover:border-[#0077b5]/40 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-[#0077b5]">
                    <Linkedin size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#888]">
                      LinkedIn
                    </span>
                    <span className="text-xs font-medium text-[#111]">
                      Dhairya Shah
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[#888] group-hover:text-[#0077b5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 flex-shrink-0"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-2 border-t border-[#eaeaea]" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777] pt-2 relative">          
          <p>© {year} Shah Dhairya. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#e5e5e5] hover:border-[#c2410c]/50 hover:text-[#c2410c] font-medium transition-all duration-200"
          >
            <span>Back to top</span>
            <ArrowUp
              size={14}
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
