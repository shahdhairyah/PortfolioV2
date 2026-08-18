import { motion } from "framer-motion";
import { Scale, FileText, Code, Mail, RefreshCw, AlertCircle } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SEO } from "@/components/SEO";

const sections = [
  {
    icon: FileText,
    title: "Use of Content",
    content: "All content on this portfolio — including code snippets, design assets, and project descriptions — is my original work unless otherwise noted. You may view and share it with attribution, but not reproduce or distribute it as your own without permission."
  },
  {
    icon: Code,
    title: "Project Code",
    content: "Source code for open-source projects is governed by the license included in each repository. For proprietary work showcased here, the code is not available for reuse without explicit written permission."
  },
  {
    icon: Mail,
    title: "Contact & Inquiries",
    content: "By reaching out through the contact form, you agree to be contacted at the email address you provide. Your information will only be used for communication related to your inquiry and will not be shared with third parties."
  },
  {
    icon: RefreshCw,
    title: "Changes to Terms",
    content: "These terms may be updated periodically to reflect changes in practices or legal requirements. Continued use of this site after changes constitutes acceptance of the updated terms."
  },
  {
    icon: AlertCircle,
    title: "Limitation of Liability",
    content: "This portfolio is provided 'as is' without any warranties. I am not liable for any damages arising from the use of this site or the projects displayed."
  }
];

export const Terms = () => {
  return (
    <PageLayout>
      <SEO
        title="Terms of Service – Shah Dhairya"
        description="Terms of service for shahdhairyah.in. Guidelines governing the use of this portfolio and its content."
        path="/terms"
        noindex
      />
      <section className="relative py-20 sm:py-32 min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/[0.02]" />
        <div className="container max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border/50 text-xs font-medium text-muted-foreground mb-4">
              <Scale size={12} />
              Terms of Service
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: July 2026</p>
          </motion.div>

          <div className="space-y-4">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="rounded-xl border border-border/50 bg-card/30 p-5 sm:p-6 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h2 className="font-bold text-sm sm:text-base mb-2">{section.title}</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
