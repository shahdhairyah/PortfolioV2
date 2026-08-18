import { motion } from "framer-motion";
import { Shield, Mail, Cookie, Info, Database, Lock } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SEO } from "@/components/SEO";

const sections = [
  {
    icon: Info,
    title: "Information I Collect",
    content: "When you visit my portfolio or use the contact form, I may collect your name and email address (when you provide them), and basic usage data like page visits and browser type via analytics."
  },
  {
    icon: Database,
    title: "How I Use Your Information",
    content: "To respond to your messages and inquiries. To improve the website experience. I never sell or share your personal data with third parties."
  },
  {
    icon: Cookie,
    title: "Cookies",
    content: "This site uses minimal cookies for theme preference storage and basic analytics. No tracking cookies are used for advertising purposes."
  },
  {
    icon: Lock,
    title: "Data Security",
    content: "I take reasonable precautions to protect your information. Contact form submissions are transmitted securely and stored only as long as necessary to address your inquiry."
  },
  {
    icon: Mail,
    title: "Contact",
    content: "If you have questions about this policy, reach out at admin@mail.shahdhairyah.in. I'll respond within 48 hours."
  }
];

export const Privacy = () => {
  return (
    <PageLayout>
      <SEO
        title="Privacy Policy – Shah Dhairya"
        description="Privacy policy for shahdhairyah.in. Learn how your data is collected, used, and protected when visiting this portfolio."
        path="/privacy"
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
              <Shield size={12} />
              Privacy Policy
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Your <span className="gradient-text">Privacy Matters</span>
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
