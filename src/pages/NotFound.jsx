import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

export const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found – Shah Dhairya"
        description="The page you're looking for doesn't exist. Return to Shah Dhairya's portfolio homepage."
        path="/404"
        noindex
      />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-7xl sm:text-8xl font-bold tracking-tight text-muted-foreground/20">404</h1>
          <p className="text-lg text-muted-foreground mt-2 mb-6">Page not found</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Go back home
          </Link>
        </div>
      </div>
    </>
  );
};
