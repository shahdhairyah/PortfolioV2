import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Achievements", path: "/achievements" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => setIsOpen(false), [location]);

  const handleHashClick = (e, path) => {
    if (!path.startsWith("#")) return;
    e.preventDefault();
    const targetId = path.replace("#", "");
    if (location.pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: targetId } });
    }
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const linkClasses = (path) =>
    `group relative text-xs font-medium transition-all duration-200 ${
      isActive(path)
        ? "text-[#bf4417] font-semibold"
        : "text-[#666] hover:text-[#bf4417]"
    }`;

  const linkUnderline = (path) => (
    <span
      className={`absolute left-0 -bottom-1.5 h-[2px] rounded-full bg-gradient-to-r from-[#bf4417] via-[#ea580c] to-[#991b1b] transition-all duration-300 ${
        isActive(path) ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  );

  const resumeClasses =
    "group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#bf4417] to-[#991b1b] hover:from-[#ea580c] hover:to-[#7f1d1d] px-4 py-2 text-xs font-medium text-white transition-all duration-300 shadow-[0_0_14px_rgba(191,68,23,0.35)] hover:shadow-[0_0_22px_rgba(191,68,23,0.55)] hover:-translate-y-0.5";

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 w-full flex justify-center">
      <div className="w-full max-w-4xl rounded-2xl bg-white/85 backdrop-blur-md border border-[#eaeaea] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(191,68,23,0.10)]">
        <div className="flex items-center justify-between px-6 py-3.5">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-[#bf4417] via-[#ea580c] to-[#991b1b] text-white shadow-[0_0_12px_rgba(191,68,23,0.45)] group-hover:rotate-6 transition-transform duration-300">
              <span className="text-[11px] font-extrabold font-syne">SD</span>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
            </span>
            <span className="text-lg font-bold font-syne tracking-tight text-[#111] group-hover:text-[#bf4417] transition-colors">
              Shah{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf4417] to-[#991b1b]">
                Dhairya
              </span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 font-inter">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleHashClick(e, link.path)}
                  className={linkClasses(link.path)}
                >
                  {link.name}
                  {linkUnderline(link.path)}
                </Link>
              ))}
            </div>

            <a href="/Dhairya-Shah-Resume.pdf" download className={resumeClasses}>
              <FileText className="h-3.5 w-3.5 group-hover:animate-bounce" />
              <span>Resume</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#333] hover:text-[#bf4417] p-1.5 rounded-lg hover:bg-[#f5f5f5] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-[#f0f0f0] px-6 pt-3 pb-5 flex flex-col space-y-3 font-inter">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleHashClick(e, link.path)}
                className={linkClasses(link.path)}
              >
                {link.name}
                {linkUnderline(link.path)}
              </Link>
            ))}

            <div className="pt-2 border-t border-[#f0f0f0]">
              <a
                href="/Dhairya-Shah-Resume.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-[#bf4417] to-[#991b1b] hover:from-[#ea580c] hover:to-[#7f1d1d] py-2.5 text-xs font-medium text-white transition-all duration-300 shadow-[0_0_14px_rgba(191,68,23,0.35)]"
              >
                <FileText className="h-3.5 w-3.5 group-hover:animate-bounce" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
