import { Link } from "react-router-dom";
import { Send, Code2, Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import RotatingHighlights from "@/components/RotatingHighlights";
import Journey from "@/components/Journey";
import { SEO } from "@/components/SEO";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shahdhairyah.in/" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://shahdhairyah.in/about" },
  ],
};

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Shah Dhairya",
    alternateName: "Dhairya Shah",
    url: "https://shahdhairyah.in/about",
    jobTitle: "Full-Stack Developer",
    sameAs: ["https://github.com/shahdhairyah", "https://www.linkedin.com/in/shahdhairyah/"],
  },
};

export const About = () => {
  return (
    <main className="w-full bg-[#020202]">
      <SEO
        title="About Dhairya Shah – Full-Stack Developer Portfolio"
        description="Learn about Shah Dhairya's journey from first C program to building full-stack applications with React, PHP, Python and modern web technologies."
        path="/about"
        jsonLd={[breadcrumbJsonLd, profileJsonLd]}
      />

      <PageHeader title="ABOUT ME" />
      <RotatingHighlights />
      <Journey />

      <section className="relative w-full bg-[#020202] text-white py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(#bf4417_0%,transparent_70%)] blur-[120px] opacity-20 pointer-events-none z-0" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#bf4417]/10 border border-[#bf4417]/30 text-[#bf4417] text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles size={14} />
            <span>Next Step</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Let&apos;s Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf4417] via-amber-600 to-[#991b1b]">
              Great Together
            </span>
          </h2>

          <p className="mt-5 text-white/60 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Have a project in mind, an idea to explore, or a team to join? I&apos;m
            always open to collaborations, freelance work, and interesting
            problems.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#bf4417] hover:bg-[#c2410c] text-white text-sm font-medium rounded-xl transition-all duration-200 shadow-[0_0_25px_rgba(191,68,23,0.35)]"
            >
              <Send size={15} />
              <span>Contact Me</span>
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/15 hover:border-[#bf4417]/60 hover:text-white text-white/80 text-sm font-medium rounded-xl transition-all duration-200"
            >
              <Code2 size={15} className="text-[#bf4417]" />
              <span>View Projects</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

