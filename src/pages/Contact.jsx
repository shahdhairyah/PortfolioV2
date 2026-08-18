import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/Contact";
import { SEO } from "@/components/SEO";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shahdhairyah.in/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://shahdhairyah.in/contact" },
  ],
};

export const Contact = () => {
  return (
    <main className="w-full min-h-screen bg-[#020202] flex flex-col items-center justify-center gap-[10vh] md:gap-[20vh] py-[4vh] pb-40 px-[4vw] font-sans">
      <SEO
        title="Contact Shah Dhairya – Full-Stack Developer"
        description="Get in touch with Shah Dhairya for project collaborations, freelance work, or just to say hello. Based in Gujarat, India."
        path="/contact"
        jsonLd={breadcrumbJsonLd}
      />

      <PageHeader title="CONTACT ME" />
      <ContactSection />
    </main>
  );
};

export default Contact;
