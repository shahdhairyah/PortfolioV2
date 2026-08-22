import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  MapPin,
  Sparkles,
  Copy,
  Check,
  Mail,
  Phone,
  Zap,
  ChevronDown,
  Globe,
  CheckCircle2,
  HelpCircle,
  Briefcase,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import ContactSection from "@/components/Contact";
import PageHeader from "@/components/PageHeader";
import { SEO } from "@/components/SEO";
import { identity } from "@/data/profile";
import { useToast } from "@/hooks/use-toast";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shahdhairyah.in/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://shahdhairyah.in/contact" },
  ],
};

const faqs = [
  {
    q: "What services do you offer?",
    a: "I offer full-stack web development, custom React frontend interfaces, backend API development (Node.js, PHP, Python), database architecture, and computer vision / gesture recognition web integrations.",
  },
  {
    q: "What is your typical turnaround time for a project?",
    a: "Project timelines depend on complexity. Small landing pages or quick feature implementations usually take 3–7 days, while full-stack web applications take 2–4 weeks. I maintain clear sprint updates throughout.",
  },
  {
    q: "Are you open for freelance work or full-time roles?",
    a: "Yes! I am actively available for freelance projects, technical contract work, and full-time software engineering roles.",
  },
  {
    q: "How do we get started on a new project?",
    a: "You can send me a message directly through the form below or on WhatsApp. We will schedule a quick initial call or chat to outline your goals, requirements, and technical roadmap.",
  },
  {
    q: "Do you work with clients internationally?",
    a: "Absolutely. I work remotely with clients and teams worldwide. I stay flexible with overlapping hours for different timezones.",
  },
];

const steps = [
  {
    num: "01",
    title: "Discovery & Alignment",
    desc: "We discuss your goals, project scope, requirements, and timeline to ensure we're aligned from day one.",
  },
  {
    num: "02",
    title: "Architecture & Design",
    desc: "I outline the system architecture, database schema, UI wireframes, and choose the optimal tech stack.",
  },
  {
    num: "03",
    title: "Sprint Development",
    desc: "Building feature by feature with clean code, responsive design, continuous updates, and milestone previews.",
  },
  {
    num: "04",
    title: "Launch & Support",
    desc: "Thorough testing, deployment to production, documentation handover, and ongoing post-launch support.",
  },
];

export const Contact = () => {
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    toast({
      title: "Copied to clipboard!",
      description: `${label} (${text}) copied successfully.`,
    });
    setTimeout(() => setCopiedField(null), 2500);
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <main className="w-full min-h-screen bg-[#020202] text-white font-sans selection:bg-[#bf4417] selection:text-white">
      <SEO
        title="Contact Shah Dhairya – Full-Stack Developer"
        description="Get in touch with Shah Dhairya for project collaborations, freelance work, or full-stack web development inquiries. Based in Gujarat, India."
        path="/contact"
        jsonLd={breadcrumbJsonLd}
      />

      {/* Page Heading (same style as Achievements) */}
      <PageHeader
        title="CONTACT"
        subtitle="Let's create something extraordinary together."
        titleSize="text-[clamp(1.8rem,7vw,5rem)]"
      />

      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 -mt-6 md:-mt-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1: Live Status & Location */}
          <div className="p-6 bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#bf4417]/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Work
                </span>
                <Globe size={18} className="text-white/40" />
              </div>
              <h3 className="text-lg font-bold text-white mt-2">Location & Status</h3>
              <p className="text-white/60 text-xs sm:text-sm mt-1">
                Open for full-time roles, contracts & freelance projects globally.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-[#bf4417]" />
                {identity.location}
              </span>
            </div>
          </div>

          {/* Card 2: Live Local Time (IST) */}
          <div className="p-6 bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#bf4417]/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#bf4417]/10 border border-[#bf4417]/30 text-[#bf4417] text-xs font-semibold uppercase tracking-wider">
                  <Clock size={12} />
                  Local Time (IST)
                </span>
                <Zap size={18} className="text-[#bf4417]" />
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-extrabold text-white mt-2 tracking-wider">
                {currentTime || "00:00:00 AM"}
              </div>
              <p className="text-white/60 text-xs sm:text-sm mt-1">
                Gujarat, India (UTC +05:30)
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
              <span className="flex items-center gap-1.5">
                <Zap size={14} className="text-amber-400" />
                Response Time: &lt; 2-4 days
              </span>
            </div>
          </div>

          {/* Card 3: Quick Direct Contact Options */}
          <div className="p-6 bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#bf4417]/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles size={12} />
                  Direct Channels
                </span>
                <Briefcase size={18} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mt-2">Quick Copy</h3>
              <p className="text-white/60 text-xs sm:text-sm mt-1">
                Copy contact credentials with a single click.
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <button
                onClick={() => handleCopy(identity.email, "Email")}
                className="w-full flex items-center justify-between px-3 py-2 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-xs text-white/90 transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2 truncate">
                  <Mail size={13} className="text-[#bf4417] shrink-0" />
                  <span className="truncate">{identity.email}</span>
                </span>
                {copiedField === "Email" ? (
                  <Check size={14} className="text-emerald-400 shrink-0" />
                ) : (
                  <Copy size={14} className="text-white/40 shrink-0 hover:text-white" />
                )}
              </button>

              <button
                onClick={() => handleCopy(identity.phone, "Phone")}
                className="w-full flex items-center justify-between px-3 py-2 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-xs text-white/90 transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2 truncate">
                  <Phone size={13} className="text-emerald-400 shrink-0" />
                  <span className="truncate">{identity.phone}</span>
                </span>
                {copiedField === "Phone" ? (
                  <Check size={14} className="text-emerald-400 shrink-0" />
                ) : (
                  <Copy size={14} className="text-white/40 shrink-0 hover:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Unchanged "Let's Connect" Section */}
      <ContactSection />

      {/* Workflow Section: How We Work Together */}
      <section className="relative w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#bf4417]/30 text-[#bf4417] text-xs font-semibold uppercase tracking-[0.18em]">
            <Sparkles size={13} />
            Collaboration Process
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold font-syne tracking-tight">
            How We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9a4d] via-[#ea580c] to-[#991b1b]">
              Work Together
            </span>
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed mt-3">
            A structured, transparent engineering process focused on clarity, performance, and timely delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative group p-6 bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#bf4417]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute top-4 right-4 text-3xl font-extrabold font-mono text-white/10 group-hover:text-[#bf4417]/30 transition-colors">
                {step.num}
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#bf4417]/10 border border-[#bf4417]/30 flex items-center justify-center text-[#bf4417] mb-4">
                  <CheckCircle2 size={18} />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#ff9a4d] transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-medium text-[#bf4417]">
                Step {step.num} <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section */}
      <section className="relative w-full max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#bf4417]/30 text-[#bf4417] text-xs font-semibold uppercase tracking-[0.18em]">
            <HelpCircle size={13} />
            Got Questions?
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold font-syne tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto font-light leading-relaxed mt-2">
            Everything you need to know before starting a collaboration.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-white/90 hover:text-white transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#bf4417]">0{idx + 1}.</span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-white/50 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#bf4417]" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 text-xs sm:text-sm text-white/60 font-light leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Callout Banner */}
      <section className="relative w-full max-w-5xl mx-auto px-6 pb-20">
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-white/[0.04] backdrop-blur-xl border border-white/10 overflow-hidden text-center flex flex-col items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[radial-gradient(#bf4417_0%,transparent_70%)] blur-[80px] opacity-25 pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to bring your ideas to life?
            </h3>
            <p className="mt-3 text-white/60 text-xs sm:text-sm font-light leading-relaxed">
              Whether you have a specific inquiry or just want to explore opportunities, feel free to send a message or start a conversation.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${identity.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#bf4417] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(191,68,23,0.3)]"
              >
                <Mail size={15} />
                <span>Send an Email</span>
              </a>
              <a
                href={`https://wa.me/${identity.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <MessageSquare size={15} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
