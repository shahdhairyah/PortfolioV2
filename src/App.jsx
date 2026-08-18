import { useState, useEffect, useRef, useCallback } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import WelcomeScreen from "@/components/WelcomeScreen";
import ChatbotWidget from "@/components/ChatbotWidget";
import ErrorBoundary from "@/components/ErrorBoundary";
import { CursorAccent } from "@/components/CursorAccent";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Home, About, Skills, Projects, ProjectCaseStudy, Achievements, AchievementDetails, Contact, Resume, Privacy, Terms, NotFound } from "@/pages";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageTransition = () => {
  const { pathname } = useLocation();
  const first = useRef(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setPlaying(true);
    const t = setTimeout(() => setPlaying(false), 750);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence>
      {playing && (
        <motion.div key={pathname} className="fixed inset-0 z-[95] pointer-events-none">
          <motion.div
            className="absolute inset-0 bg-bg"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, times: [0, 0.4, 0.6, 1], ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-px bg-gold"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, times: [0, 0.4, 0.6, 1], ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {
  const [welcomeComplete, setWelcomeComplete] = useState(() => {
    try {
      return localStorage.getItem("welcomeShown") === "true";
    } catch {
      return false;
    }
  });

  const [welcomeDismissed, setWelcomeDismissed] = useState(welcomeComplete);

  const handleWelcomeComplete = useCallback(() => {
    try {
      localStorage.setItem("welcomeShown", "true");
    } catch {
      /* ignore storage errors */
    }
    setWelcomeComplete(true);
    setTimeout(() => setWelcomeDismissed(true), 1000);
  }, []);

  return (
    <ErrorBoundary>
    <HelmetProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        <MotionConfig reducedMotion="user">
          <Toaster />
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="skills" element={<Skills />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:slug" element={<ProjectCaseStudy />} />
              <Route path="achievements" element={<Achievements />} />
              <Route path="achievements/:slug" element={<AchievementDetails />} />
              <Route path="contact" element={<Contact />} />
              <Route path="resume" element={<Resume />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <ChatbotWidget />
            <CursorAccent />
            <PageTransition />
            <Analytics />
          </BrowserRouter>
          {!welcomeDismissed && (
            <WelcomeScreen onWelcomeComplete={handleWelcomeComplete} />
          )}
        </MotionConfig>
      </ThemeProvider>
    </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
