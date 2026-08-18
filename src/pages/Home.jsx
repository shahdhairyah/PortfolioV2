import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NameHeading from "@/components/NameHeading";
import IntroSection from "@/components/IntroSection";
import Contact from "@/components/Contact";
import { SEO } from "@/components/SEO";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shah Dhairya",
  alternateName: "Dhairya Shah",
  url: "https://shahdhairyah.in/",
  image: "https://shahdhairyah.in/og-image.png",
  jobTitle: "Full-Stack Developer",
  sameAs: ["https://github.com/shahdhairyah", "https://www.linkedin.com/in/shahdhairyah/"],
  knowsAbout: ["PHP", "JavaScript", "React", "Python", "MySQL", "HTML", "CSS", "Tailwind CSS"],
};

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  return (
    <div className="w-full bg-[#fafafa]">
      <SEO
        title="Shah Dhairya – Full-Stack Developer & Digital Architect"
        description="Portfolio of Shah Dhairya, a full-stack developer building products with React, Node.js, Python and PHP."
        path="/"
        jsonLd={personJsonLd}
      />

      <NameHeading />
      <IntroSection />
      <Contact />
    </div>
  );
};

export default Home;
