import PropTypes from "prop-types";

export const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <main className="pt-16 sm:pt-20">{children}</main>
    </div>
  );
};

PageLayout.propTypes = { children: PropTypes.node.isRequired };
