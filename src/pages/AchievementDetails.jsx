import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Trophy, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { hackathons } from "@/data/achievements";

const EASE = [0.16, 1, 0.3, 1];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: EASE },
});

export const AchievementDetails = () => {
  const { slug } = useParams();
  const hack = hackathons.find((h) => h.slug === slug);

  if (!hack) {
    return <Navigate to="/achievements" replace />;
  }

  const Icon = hack.icon;

  return (
    <main className="relative w-full min-h-screen bg-[#020202] text-white flex flex-col items-center py-[4vh] pb-40 px-[4vw] overflow-hidden font-sans">
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:54px_54px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(#bf4417_0%,transparent_70%)] blur-[140px] opacity-10 pointer-events-none" />

      <span
        aria-hidden
        className="pointer-events-none select-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-extrabold leading-none text-[28vw] md:text-[18rem] text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.04)]"
      >
        {hack.rank}
      </span>

      <SEO
        title={`${hack.title} – Shah Dhairya Achievements`}
        description={hack.text}
        path={`/achievements/${hack.slug}`}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <motion.div {...reveal()}>
          <Link
            to="/achievements"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/50 hover:text-[#ff9a4d] transition-colors"
          >
            <ArrowLeft size={15} />
            Back to Achievements
          </Link>
        </motion.div>

        <motion.div
          {...reveal(0.1)}
          className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
        >
          <div className="h-1 bg-gradient-to-r from-[#bf4417] via-amber-500 to-[#991b1b]" />

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#bf4417]/20 to-[#991b1b]/10 border border-[#bf4417]/30 text-[#ff9a4d] shadow-[0_0_24px_rgba(191,68,23,0.3)]">
                <Icon size={28} />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-md bg-[#bf4417]/10 border border-[#bf4417]/30 text-[11px] font-bold text-[#ff9a4d]">
                  {hack.org}
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-mono">
                  {hack.year}
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 ml-auto px-3.5 py-2 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-400 text-sm font-bold font-mono">
                <Trophy size={14} />
                {hack.rank}
              </span>
            </div>

            <h1 className="mt-8 font-display text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              {hack.title}
            </h1>

            <p className="mt-5 text-white/60 leading-relaxed text-base md:text-lg">
              {hack.text}
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {hack.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="px-5 py-6 rounded-2xl bg-white/[0.02] border border-white/5 border-l-2 border-l-[#bf4417]"
                >
                  <div className="font-display text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff9a4d] to-[#991b1b]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/40">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {hack.image && (
              <motion.div
                {...reveal(0.2)}
                className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-black/30"
              >
                <img
                  src={hack.image}
                  alt={hack.title}
                  className="w-full h-auto max-h-[560px] object-contain bg-black/30"
                />
              </motion.div>
            )}

            {hack.team && hack.team.length > 0 && (
              <div className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-6 md:p-8">
                <div className="flex items-center gap-2.5">
                  <Users size={16} className="text-[#bf4417]" />
                  <h2 className="text-sm font-bold uppercase tracking-widest text-white/80">
                    Team Members
                  </h2>
                </div>
                <div className="mt-6 space-y-4">
                  {hack.team.map((m, i) => (
                    <motion.div
                      key={m.name}
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                      className="flex items-center gap-4"
                    >
                      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#bf4417]/20 to-[#991b1b]/10 border border-[#bf4417]/30 text-[#ff9a4d] font-display font-bold">
                        {m.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                      </span>
                      <div>
                        <div className="text-white font-semibold">{m.name}</div>
                        <div className="text-[12px] text-white/50">{m.role}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-6 md:p-8">
              <div className="flex items-center gap-2.5">
                <Sparkles size={16} className="text-[#bf4417]" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-white/80">
                  Full Details
                </h2>
              </div>
              <ul className="mt-6 space-y-4">
                {hack.details.map((d, i) => (
                  <motion.li
                    key={d}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                    className="flex items-start gap-3.5 text-white/70 leading-relaxed"
                  >
                    <span className="mt-1.5 w-2 h-2 rotate-45 bg-[#bf4417] shrink-0" />
                    {d}
                  </motion.li>
                ))}
              </ul>
            </div>

            {hack.gallery && hack.gallery.length > 0 && (
              <div className="mt-10">
                <div className="flex items-center gap-2.5">
                  <Sparkles size={16} className="text-[#bf4417]" />
                  <h2 className="text-sm font-bold uppercase tracking-widest text-white/80">
                    Moments
                  </h2>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {hack.gallery.map((src, i) => (
                    <motion.div
                      key={src + i}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.45, delay: (i % 4) * 0.06, ease: EASE }}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/30"
                    >
                      <img
                        src={src}
                        alt={`${hack.title} photo ${i + 1}`}
                        loading="lazy"
                        className="w-full h-48 md:h-64 object-contain bg-black/30 transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/achievements"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#bf4417] to-[#991b1b] hover:from-[#ea580c] hover:to-[#7f1d1d] text-sm font-semibold text-white transition-all duration-300 shadow-[0_0_18px_rgba(191,68,23,0.35)]"
              >
                <ArrowLeft size={15} />
                All Achievements
              </Link>
              <a
                href="mailto:admin@mail.shahdhairyah.in"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-sm font-semibold text-white/70 hover:text-[#ff9a4d] hover:border-[#bf4417]/50 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default AchievementDetails;
