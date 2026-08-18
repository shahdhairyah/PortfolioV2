import { useState, useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle, X, Send, Github, Linkedin,
  Globe, Mail, MapPin, Phone, ExternalLink, ChevronRight,
} from "lucide-react";

const OWNER = {
  name: "Shah Dhairya",
  aka: "Dhairya Shah",
  title: "Full-Stack Developer & Digital Architect",
  email: "admin@mail.shahdhairyah.in",
  phone: "+91 70692 76736",
  location: "Gujarat, India",
  website: "https://shahdhairyah.in",
  resume: "/Dhairya-Shah-Resume.pdf",
  github: "https://github.com/shahdhairyah",
  linkedin: "https://www.linkedin.com/in/shahdhairyah/",
  instagram: "https://www.instagram.com/shahdhairyah",
  leetcode: "https://leetcode.com/shahdhairyah/",
};

const TOPICS = [
  { id: "about", label: "About", emoji: "👤" },
  { id: "skills", label: "Skills", emoji: "🛠️" },
  { id: "projects", label: "Projects", emoji: "💼" },
  { id: "achievements", label: "Awards", emoji: "🏆" },
  { id: "experience", label: "Journey", emoji: "📈" },
  { id: "contact", label: "Contact", emoji: "📬" },
  { id: "resume", label: "Resume", emoji: "📄" },
];

const KB = {
  about: {
    keywords: ["who", "dhairya", "about", "yourself", "tell me", "background", "bio", "shah", "introduce", "name"],
    title: "Shah Dhairya",
    body: `Also known as **Dhairya Shah** — a **Full-Stack Developer & Digital Architect** based in **Gujarat, India**. I build end-to-end web applications with precision and design thinking.\n\n*Crafting digital experiences with precision, purpose, and restraint.*`,
    bullets: [
      "Full-Stack Developer with **3+ years** of experience",
      "Specializes in **React, PHP, Python, Node.js**",
      "Hackathon competitor — **4th place** in my sector (SSIP 2025)",
      "Passionate about **AI, IoT, and intelligent interfaces**",
    ],
    followUp: ["What are your skills?", "Show projects", "My achievements"],
  },
  skills: {
    keywords: ["skill", "stack", "technology", "tech", "language", "tools", "know", "expertise", "frontend", "backend", "what can you do"],
    title: "Technology Stack",
    sections: [
      { label: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React 18", "Bootstrap 5", "Tailwind CSS", "Framer Motion"] },
      { label: "Backend", items: ["PHP 8", "MySQL", "Python", "Node.js", "REST APIs", "JWT Auth"] },
      { label: "Tools", items: ["Git", "GitHub", "VS Code", "XAMPP", "Arduino IDE", "npm", "Vite"] },
    ],
    body: "Primarily work with **React 18 + Vite + Tailwind CSS** on frontend and **PHP 8 + MySQL** on backend, but I adapt based on project needs.",
    followUp: ["Show projects", "Frontend details", "Backend details"],
  },
  projects: {
    keywords: ["project", "work", "portfolio", "built", "made", "build", "creation", "case", "demo", "what have you built"],
    title: "Projects",
    body: "I've shipped **7+ projects** across web apps, AI/computer vision, IoT, and security systems:",
    cards: [
      { name: "Centralized Dashboard", tech: "PHP, MySQL, Bootstrap, jQuery", desc: "Institutional analytics & management dashboard with real-time reports." },
      { name: "AI Fruit Ninja", tech: "Python, OpenCV, MediaPipe, PyGame", desc: "Gesture-controlled game — 21 hand points tracked at 30fps." },
      { name: "OTP Verification System", tech: "PHP, MySQL, PHPMailer", desc: "Secure auth with email OTP & encrypted password reset flow." },
      { name: "Smart Home System", tech: "Arduino, C++, ESP8266, IoT", desc: "WiFi-connected home automation controlling 4+ appliances." },
      { name: "Weather Application", tech: "HTML, CSS, JavaScript, Weather API", desc: "Real-time weather with 5-day forecast & clean UI." },
    ],
    followUp: ["Tell me about AI Fruit Ninja", "Centralized Dashboard", "Smart Home System"],
  },
  dashboard: {
    keywords: ["dashboard", "hod", "centralized", "institutional", "analytics", "department", "reports"],
    title: "Centralized Dashboard",
    body: "A unified web application for managing sub-departments and visualizing institutional data.",
    bullets: [
      "Real-time analytics & visual reports",
      "User management & role-based access",
      "Sub-department oversight in one interface",
    ],
    tags: ["PHP", "MySQL", "Bootstrap 5", "jQuery"],
    status: "Live",
    followUp: ["More projects", "AI Fruit Ninja", "Tech stack"],
  },
  "fruit-ninja": {
    keywords: ["fruit", "ninja", "ai", "computer", "vision", "gesture", "opencv", "mediapipe", "game", "hand"],
    title: "AI Fruit Ninja",
    body: "A gesture-controlled game where **your hand is the controller** — slice virtual fruit using just a webcam.",
    bullets: [
      "21 hand landmarks tracked at **30fps** using MediaPipe",
      "Real-time gesture recognition with OpenCV",
      "No additional hardware required — just a webcam",
    ],
    tags: ["Python", "OpenCV", "MediaPipe", "PyGame"],
    link: { label: "View on GitHub", url: "https://github.com/shahdhairya12/fruit_ninja_python_game/" },
    followUp: ["More projects", "OTP System", "Smart Home"],
  },
  otp: {
    keywords: ["otp", "verification", "authentication", "login", "password", "security", "auth", "register"],
    title: "OTP Verification System",
    body: "A **production-ready** authentication system with email OTP verification and secure password management.",
    bullets: [
      "6-digit OTP sent via email using PHPMailer",
      "Encrypted storage for OTPs and user data",
      "Secure password reset with session management",
    ],
    tags: ["PHP", "MySQL", "PHPMailer", "Bootstrap"],
    followUp: ["More projects", "Smart Home", "Tech stack"],
  },
  "smart-home": {
    keywords: ["smart home", "iot", "arduino", "esp8266", "home automation", "appliance", "wifi"],
    title: "Smart Home System",
    body: "An **IoT home automation** project that controls home appliances remotely via WiFi.",
    bullets: [
      "Remote appliance control via ESP8266 WiFi module",
      "Affordable and expandable architecture",
      "Controls 4+ appliances simultaneously",
    ],
    tags: ["Arduino", "C++", "ESP8266", "IoT"],
    followUp: ["More projects", "Weather App", "Experience"],
  },
  weather: {
    keywords: ["weather", "forecast", "application", "api", "temperature", "climate"],
    title: "Weather Application",
    body: "A real-time weather application with current conditions and extended forecasts.",
    bullets: [
      "Real-time weather data from third-party API",
      "5-day weather forecast",
      "Clean, minimal, intuitive interface",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Weather API"],
    followUp: ["All projects", "Skills", "About"],
  },
  achievements: {
    keywords: ["achievement", "hackathon", "win", "award", "accomplish", "milestone", "competition", "rank", "place"],
    title: "Achievements & Hackathons",
    body: "Recognition that reflects dedication and technical capability:",
    cards: [
      { name: "SSIP Hackathon — 4th Place My Sector", desc: "Competed against **2062 teams (10449 participants)** across Gujarat. Selected among **181 finalists** and secured **4th place in my sector**. (2023-2024)" },
      { name: "CVMU Hackathon 2025 — Top 181 Selection", desc: "**36+ hours** live code at CVMU Hackathon 2025 — **selected** in the **top 181 teams**. (2025)" },
    ],
    stats: [
      { value: "7+", label: "Projects" },
      { value: "3+", label: "Years" },
      { value: "2", label: "Hackathons" },
      { value: "15+", label: "Technologies" },
    ],
    followUp: ["Journey", "Projects", "Skills"],
  },
  experience: {
    keywords: ["experience", "journey", "background", "timeline", "history", "career", "story", "start", "began", "education", "study"],
    title: "My Journey",
    body: "From a single line of C to full-stack applications — here's how it unfolded:",
    timeline: [
      { year: "2021", event: "First C Program — curiosity ignited" },
      { year: "2022", event: "HTML & CSS — discovered web development" },
      { year: "2023", event: "Diploma in Computer Engineering" },
      { year: "2024", event: "JavaScript & React — modern frontend" },
      { year: "Now", event: "Full-Stack & AI — building intelligent systems" },
    ],
    body2: "Each phase taught me something different. Today I'm exploring **AI, gesture recognition, and intelligent interfaces**.",
    followUp: ["Philosophy", "Skills", "Achievements"],
  },
  philosophy: {
    keywords: ["philosophy", "approach", "design", "principle", "methodology", "process", "values", "how you work", "mindset", "belief"],
    title: "Design Philosophy",
    body: "I build by three core principles that guide every decision:",
    cards: [
      { name: "Precision", desc: "Every detail is intentional. Interfaces built like blueprints — measured, deliberate, defensible." },
      { name: "Clarity", desc: "Complexity is invisible. The best products hide their engineering behind effortless experiences." },
      { name: "Performance", desc: "Speed is a foundation, not a feature. Every millisecond matters." },
    ],
    body2: "**Less, but better.** I remove until only the essential remains, then polish that until it shines.",
    followUp: ["About me", "Experience", "Skills"],
  },
  contact: {
    keywords: ["contact", "hire", "email", "reach", "connect", "message", "get in touch", "freelance", "available", "phone", "call"],
    title: "Let's Connect",
    body: "I'm always open to discussing new projects, creative ideas, or opportunities:",
    contacts: [
      { icon: Mail, label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
      { icon: Phone, label: "Phone", value: OWNER.phone, href: `tel:${OWNER.phone}` },
      { icon: Globe, label: "Website", value: OWNER.website, href: OWNER.website },
      { icon: MapPin, label: "Location", value: OWNER.location },
    ],
    socials: [
      { icon: Github, label: "GitHub", url: OWNER.github },
      { icon: Linkedin, label: "LinkedIn", url: OWNER.linkedin },
    ],
    followUp: ["Resume", "Projects", "Skills"],
  },
  resume: {
    keywords: ["resume", "cv", "download", "pdf", "hire me"],
    title: "Resume",
    body: "You can download my complete resume with full details of my experience, education, and skills:",
    link: { label: "Download Resume (PDF)", url: OWNER.resume },
    followUp: ["Contact me", "Skills", "Projects"],
  },
  social: {
    keywords: ["social", "github", "linkedin", "instagram", "leetcode", "profile", "follow", "connect with me"],
    title: "Social Profiles",
    body: "Find me on these platforms:",
    socials: [
      { icon: Github, label: "GitHub", url: OWNER.github },
      { icon: Linkedin, label: "LinkedIn", url: OWNER.linkedin },
      { icon: Globe, label: "Instagram", url: OWNER.instagram },
      { icon: Globe, label: "LeetCode", url: OWNER.leetcode },
    ],
    followUp: ["About me", "Contact", "Projects"],
  },
  testimonials: {
    keywords: ["testimonial", "review", "feedback", "client", "said", "recommend", "people say"],
    title: "What People Say",
    body: "Feedback from peers, judges, and stakeholders:",
    quotes: [
      { text: "Dhairya delivered beyond our expectations. The attention to detail and technical precision was exceptional.", source: "— Project Stakeholder" },
      { text: "The clarity of presentation and depth of technical understanding set Dhairya's team apart.", source: "— CVMU 2025 Judge" },
      { text: "Ability to break down complex problems and build practical solutions under tight deadlines.", source: "— SSIP Hackathon Teammate" },
    ],
    followUp: ["Achievements", "Projects", "Philosophy"],
  },
  "frontend-detail": {
    keywords: ["frontend", "ui", "ux", "design", "react", "tailwind", "bootstrap", "css", "html", "component", "animation"],
    title: "Frontend Expertise",
    body: "I build interfaces that are as functional as they are beautiful:",
    tags: ["React 18", "Vite", "Tailwind CSS", "Bootstrap 5", "Framer Motion", "JavaScript ES6+"],
    bullets: [
      "**Component architecture** — reusable, maintainable code",
      "**Responsive design** — pixel-perfect across all devices",
      "**Smooth animations** — Framer Motion for delightful interactions",
      "**Dark/light themes** — next-themes integration",
    ],
    body2: "This very portfolio is built with **React + Vite + Tailwind CSS v4**.",
    followUp: ["Backend details", "Projects", "Tools"],
  },
  "backend-detail": {
    keywords: ["backend", "server", "api", "database", "php", "mysql", "node", "rest"],
    title: "Backend Expertise",
    body: "I build secure, scalable server-side systems:",
    tags: ["PHP 8", "MySQL", "Python", "Node.js", "REST APIs", "JWT Auth"],
    bullets: [
      "**REST API design** — clean, documented endpoints",
      "**Database schema** — normalized, efficient queries",
      "**Authentication** — JWT, OTP, session management",
      "**Security** — encrypted storage, secure password flows",
    ],
    followUp: ["Frontend details", "Projects", "Tools"],
  },
  testimonial: {
    keywords: ["testimonial", "review", "feedback", "client", "said", "recommend", "people say"],
    title: "What People Say",
    body: "Feedback from peers, judges, and stakeholders:",
    quotes: [
      { text: "Dhairya delivered beyond our expectations. The attention to detail and technical precision was exceptional.", source: "— Project Stakeholder" },
      { text: "The clarity of presentation and depth of technical understanding set Dhairya's team apart.", source: "— CVMU 2025 Judge" },
      { text: "Ability to break down complex problems and build practical solutions under tight deadlines.", source: "— SSIP Hackathon Teammate" },
    ],
    followUp: ["Achievements", "Projects", "Philosophy"],
  },
};

const FALLBACK = {
  title: "I don't have info on that",
  body: "But here's how I can help:",
  bullets: [
    `📧 Email: **${OWNER.email}**`,
    "📂 Browse the **Projects** section",
    "📄 Download my **Resume**",
  ],
  followUp: ["About me", "Skills", "Projects", "Contact"],
};

function matchTopic(input) {
  const lower = input.toLowerCase().trim();
  let best = null;
  let bestScore = 0;
  for (const [id, entry] of Object.entries(KB)) {
    let score = 0;
    for (const kw of entry.keywords) {
      const idx = lower.indexOf(kw);
      if (idx === 0) score += kw.length * 2;
      else if (idx > 0) score += kw.length;
      else {
        const words = kw.split(" ");
        score += words.filter(w => lower.includes(w)).length * 3;
      }
    }
    if (score > bestScore) { bestScore = score; best = id; }
  }
  return bestScore >= 3 ? best : null;
}

function renderMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
    .replace(/`(.*?)`/g, '<code class="bg-muted/60 px-1 py-0.5 rounded text-[11px] font-mono text-primary">$1</code>')
    .replace(/\*(.*?)\*/g, '<em class="text-muted-foreground/80 italic">$1</em>');
}

function BotMessage({ data, onSend }) {
  return (
    <div className="flex gap-2.5">
      <div className="shrink-0 mt-0.5">
        <div className="w-7 h-7 rounded-sm border border-hairline bg-surface flex items-center justify-center">
          <span className="font-display italic text-[11px] text-gold">D</span>
        </div>
      </div>
      <div className="flex-1 min-w-0 space-y-2.5">
        {data.title && (
          <p className="text-[13px] font-bold text-foreground">{data.title}</p>
        )}
        {data.body && (
          <p className="text-[13px] leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: renderMarkdown(data.body) }} />
        )}
        {data.body2 && (
          <p className="text-[13px] leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: renderMarkdown(data.body2) }} />
        )}
        {data.bullets && (
          <div className="space-y-1.5">
            {data.bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-2 text-[13px] text-muted-foreground">
                <ChevronRight size={12} className="mt-1 shrink-0 text-primary" />
                <span dangerouslySetInnerHTML={{ __html: renderMarkdown(b) }} />
              </div>
            ))}
          </div>
        )}
        {data.sections && data.sections.map((sec, i) => (
          <div key={i} className="space-y-1.5">
            <p className="text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-wider">{sec.label}</p>
            <div className="flex flex-wrap gap-1.5">
              {sec.items.map(t => (
                <span key={t} className="px-2 py-0.5 rounded-sm bg-surface border border-hairline-soft text-[11px] font-mono text-ink-muted">{t}</span>
              ))}
            </div>
          </div>
        ))}
        {data.tags && (
          <div className="flex flex-wrap gap-1.5">
            {data.tags.map(t => (
              <span key={t} className="px-2 py-0.5 rounded-md bg-muted/50 text-[11px] font-mono text-muted-foreground border border-border/40">{t}</span>
            ))}
          </div>
        )}
        {data.cards && data.cards.map((c, i) => (
          <div key={i} className="p-3 rounded-sm bg-surface border border-hairline-soft">
            <p className="text-[13px] font-semibold text-foreground">{c.name}</p>
            {c.tech && <p className="text-[11px] text-primary font-mono mt-0.5">{c.tech}</p>}
            <p className="text-[12px] text-muted-foreground mt-1" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.desc) }} />
          </div>
        ))}
        {data.quotes && data.quotes.map((q, i) => (
          <div key={i} className="pl-3 border-l border-gold/50 text-[13px]">
            <p className="italic text-muted-foreground leading-relaxed">&ldquo;{q.text}&rdquo;</p>
            <p className="text-[11px] text-muted-foreground/60 mt-1 not-italic">{q.source}</p>
          </div>
        ))}
        {data.stats && (
          <div className="grid grid-cols-4 gap-1.5">
            {data.stats.map(s => (
              <div key={s.label} className="text-center p-2 rounded-sm bg-surface border border-hairline-soft">
                <div className="text-base font-bold text-primary">{s.value}</div>
                <div className="text-[10px] text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        )}
        {data.timeline && (
          <div className="space-y-2">
            {data.timeline.map((t, i) => (
              <div key={i} className="flex items-center gap-3 text-[13px]">
                <span className="text-[11px] font-mono text-primary font-semibold w-12 shrink-0 text-right">{t.year}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                <span className="text-muted-foreground">{t.event}</span>
              </div>
            ))}
          </div>
        )}
        {data.contacts && data.contacts.map((c, i) => {
          const I = c.icon;
          return (
            <div key={i} className="flex items-center gap-2.5 text-[13px] py-0.5">
              <I size={13} className="text-primary shrink-0" />
              <span className="text-muted-foreground text-[12px] w-16 shrink-0">{c.label}:</span>
              {c.href ? (
                <a href={c.href} className="text-primary font-medium hover:underline text-[13px]">{c.value}</a>
              ) : (
                <span className="text-[13px]">{c.value}</span>
              )}
            </div>
          );
        })}
        {data.socials && (
          <div className="flex flex-wrap gap-2">
            {data.socials.map(s => {
              const I = s.icon;
              return (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-hairline-soft text-[12px] text-ink-muted hover:text-gold hover:border-gold transition-colors">
                  <I size={12} /> {s.label}
                </a>
              );
            })}
          </div>
        )}
        {data.link && (
          <a href={data.link.url} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-sm border border-gold text-gold hover:bg-gold hover:text-bg transition-colors text-[13px] font-medium">
            <ExternalLink size={12} /> {data.link.label}
          </a>
        )}
        {data.status && (
          <span className="inline-flex px-2.5 py-1 rounded-sm bg-gold/10 text-gold border border-gold/20 text-[11px] font-medium">
            {data.status}
          </span>
        )}
        {data.followUp && data.followUp.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {data.followUp.map(s => (
              <button key={s} onClick={() => onSend(s)}
                className="px-2.5 py-1 rounded-sm border border-hairline-soft text-[11px] text-ink-muted hover:text-gold hover:border-gold transition-colors cursor-pointer">
                {s}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

BotMessage.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    body2: PropTypes.string,
    bullets: PropTypes.arrayOf(PropTypes.string),
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    tags: PropTypes.arrayOf(PropTypes.string),
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        tech: PropTypes.string,
        desc: PropTypes.string,
      })
    ),
    quotes: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        source: PropTypes.string,
      })
    ),
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    timeline: PropTypes.arrayOf(
      PropTypes.shape({
        year: PropTypes.string,
        event: PropTypes.string,
      })
    ),
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.elementType,
        label: PropTypes.string,
        value: PropTypes.string,
        href: PropTypes.string,
      })
    ),
    socials: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.elementType,
        label: PropTypes.string,
        url: PropTypes.string,
      })
    ),
    link: PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string,
    }),
    status: PropTypes.string,
    followUp: PropTypes.arrayOf(PropTypes.string),
  }),
  onSend: PropTypes.func,
};

function TypingIndicator() {
  return (
    <div className="flex gap-2.5">
      <div className="shrink-0">
        <div className="w-7 h-7 rounded-sm border border-hairline bg-surface flex items-center justify-center">
          <span className="font-display italic text-[11px] text-gold">D</span>
        </div>
      </div>
      <div className="bg-surface border border-hairline-soft rounded-sm px-4 py-3">
        <div className="flex gap-1">
          {[0, 120, 240].map(d => (
            <span key={d} className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const greeted = useRef(false);
  const idRef = useRef(0);
  const sendRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    });
  }, []);

  useEffect(() => { scrollToBottom(); }, [messages, typing, scrollToBottom]);

  useEffect(() => {
    if (open && !greeted.current) {
      greeted.current = true;
      setMessages([{
        id: ++idRef.current,
        type: "bot",
        data: {
          title: "Hey there!",
          body: `I'm **Dhairya's assistant**. I know everything about his work — skills, projects, experience, and more. Ask me anything or pick a topic below.`,
          followUp: TOPICS.map(t => `${t.emoji} ${t.label}`),
        },
      }]);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const sendMessage = useCallback((text) => {
    const msg = text.trim();
    if (!msg) return;
    setInput("");
    setMessages(p => [...p, { id: ++idRef.current, type: "user", text: msg }]);
    setTyping(true);

    setTimeout(() => {
      const topicId = matchTopic(msg);
      const data = topicId ? { ...KB[topicId] } : { ...FALLBACK };
      setMessages(p => [...p, { id: ++idRef.current, type: "bot", data }]);
      setTyping(false);
    }, 500 + Math.random() * 300);
  }, []);

  useEffect(() => { sendRef.current = sendMessage; }, [sendMessage]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const toggle = () => {
    if (open) { greeted.current = false; setMessages([]); }
    setOpen(p => !p);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="chatbot"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 10 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-[60] w-[calc(100vw-2rem)] max-w-sm sm:max-w-[400px] bg-bg border border-hairline shadow-2xl overflow-hidden flex flex-col"
            style={{ maxHeight: "min(80vh, 640px)" }}
          >
            <div className="relative bg-surface-2 border-b border-hairline-soft px-4 py-3.5 shrink-0">
              <motion.div
                className="absolute top-0 left-0 right-0 h-px bg-gold origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-sm bg-bg border border-hairline flex items-center justify-center">
                    <span className="font-display italic text-sm text-gold">D</span>
                  </div>
                  <div>
                    <span className="font-display text-sm text-ink block leading-tight">Concierge</span>
                    <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-60" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
                      </span>
                      At your service
                    </span>
                  </div>
                </div>
                <button onClick={toggle} className="p-1.5 text-ink-muted hover:text-gold transition-colors" aria-label="Close">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div ref={listRef} className="flex-1 overflow-y-auto px-3.5 py-3 space-y-3.5">
              {messages.map(m => (
                <motion.div key={m.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18 }}>
                  {m.type === "user" ? (
                    <div className="flex justify-end">
                    <div className="max-w-[85%] bg-surface border border-hairline-soft text-ink text-[13px] rounded-sm px-3.5 py-2.5 leading-relaxed">
                      {m.text}
                    </div>
                    </div>
                  ) : (
                    <BotMessage data={m.data} onSend={sendMessage} />
                  )}
                </motion.div>
              ))}
              {typing && <TypingIndicator />}
            </div>

            <div className="shrink-0 border-t border-hairline-soft bg-bg px-3 py-2.5 flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Dhairya..."
                className="flex-1 bg-transparent text-[13px] text-ink placeholder-ink-faint/50 outline-none px-2 py-1.5"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim()}
                className="p-2 rounded-sm bg-gold text-bg hover:bg-gold-bright transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
                aria-label="Send"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.92 }}
        onClick={toggle}
        className="fixed bottom-6 right-4 sm:right-6 z-[60] p-3.5 rounded-sm border border-gold bg-bg text-gold shadow-lg shadow-black/20 hover:bg-gold hover:text-bg transition-colors"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gold rounded-full border-2 border-bg">
            <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-40" />
          </span>
        )}
      </motion.button>
    </>
  );
}
