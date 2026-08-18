import { useState } from "react";
import PropTypes from "prop-types";
import { Mail, MessageSquare, Send, ArrowUpRight, Sparkles } from "lucide-react";
import { identity, socials } from "@/data/profile";

const Github = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

Github.propTypes = { size: PropTypes.number };

const Linkedin = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

Linkedin.propTypes = { size: PropTypes.number };

const defaultForm = {
  name: "",
  email: "",
  subject: "Project Inquiry / Collaboration",
  message: "Hi Dhairya, I saw your portfolio and would like to discuss a potential project or opportunity with you.",
};

const cards = [
  {
    label: "Email",
    value: identity.email,
    href: `mailto:${identity.email}`,
    icon: Mail,
    color: "text-[#bf4417] border-[#bf4417]/30 bg-[#bf4417]/10",
  },
  {
    label: "WhatsApp",
    value: identity.phone,
    href: `https://wa.me/${identity.phone.replace(/[^0-9]/g, "")}`,
    icon: MessageSquare,
    color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  },
];

const Contact = () => {
  const [form, setForm] = useState(defaultForm);

  const github = socials.find((s) => s.label === "GitHub")?.href;
  const linkedin = socials.find((s) => s.label === "LinkedIn")?.href;

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const waNumber = identity.phone.replace(/[^0-9]/g, "");
    const waText = `*New Portfolio Contact*\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Subject:* ${form.subject}\n\n*Message:*\n${form.message}`;
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;

    window.open(waUrl, "_blank");
    setForm(defaultForm);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#020202] text-white py-20 md:py-28 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:54px_54px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-[radial-gradient(#bf4417_0%,transparent_70%)] blur-[110px] opacity-20 pointer-events-none" />

      <span
        aria-hidden
        className="pointer-events-none select-none absolute top-8 left-1/2 -translate-x-1/2 font-display font-extrabold leading-none text-[22vw] md:text-[11rem] text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.05)]"
      >
        CONTACT
      </span>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#bf4417]/30 text-[#bf4417] text-[11px] font-semibold uppercase tracking-[0.18em]">
            <Sparkles size={13} />
            Get in Touch
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold font-syne tracking-tight">
            Let&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9a4d] via-[#ea580c] to-[#991b1b]">
              Connect
            </span>
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed mt-4">
            Have a project in mind or an opportunity? Enter your details below
            to chat directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {cards.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-4 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#bf4417]/50 transition-all duration-300"
              >
                <div
                  className={`flex items-center justify-center w-11 h-11 rounded-xl ${c.color} group-hover:scale-105 transition-transform shrink-0`}
                >
                  <c.icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold tracking-wider uppercase text-white/40">
                    <span className="font-mono text-white/25 mr-2">0{i + 1}</span>
                    {c.label}
                  </div>
                  <div className="text-sm font-medium text-white/90 truncate group-hover:text-white">
                    {c.value}
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-white/30 group-hover:text-[#bf4417] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>
            ))}

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#bf4417]/50 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white/80 group-hover:scale-105 transition-transform shrink-0">
                <Github size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-bold tracking-wider uppercase text-white/40">
                  <span className="font-mono text-white/25 mr-2">03</span>
                  GitHub
                </div>
                <div className="text-sm font-medium text-white/90 truncate group-hover:text-white">
                  github.com/shahdhairyah
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-white/30 group-hover:text-[#bf4417] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#bf4417]/50 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white/80 group-hover:scale-105 transition-transform shrink-0">
                <Linkedin size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-bold tracking-wider uppercase text-white/40">
                  <span className="font-mono text-white/25 mr-2">04</span>
                  LinkedIn
                </div>
                <div className="text-sm font-medium text-white/90 truncate group-hover:text-white">
                  Dhairya Shah
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-white/30 group-hover:text-[#bf4417] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>
          </div>

          <div className="lg:col-span-7 bg-white/[0.02] backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-[11px] text-white/40">
                  new_message.txt
                </span>
              </div>
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Quick reply
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    placeholder="Name"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#bf4417] focus:ring-1 focus:ring-[#bf4417] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#bf4417] focus:ring-1 focus:ring-[#bf4417] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#bf4417] focus:ring-1 focus:ring-[#bf4417] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#bf4417] focus:ring-1 focus:ring-[#bf4417] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer bg-gradient-to-r from-[#bf4417] to-[#991b1b] hover:from-[#ea580c] hover:to-[#7f1d1d] text-white shadow-[0_0_25px_rgba(191,68,23,0.35)] hover:shadow-[0_0_40px_rgba(191,68,23,0.55)]"
              >
                <Send size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span>Send via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full z-[5] rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#fafafa"
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
    </section>
  );
};

export default Contact;
