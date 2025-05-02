import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, X } from "lucide-react";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Close menu when Escape key is pressed
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    // Prevent body scrolling when menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [scrolled, mobileMenuOpen]);

  const toggleMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 lg:px-20
        ${
          scrolled
            ? "py-3 bg-space-dark-blue/90 backdrop-blur-md border-b border-gray-800/50"
            : "py-6"
        }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-gradient">
          Surya Tej
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#experience" className="nav-link">
            Experience
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#education" className="nav-link">
            Education
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-space-purple transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/makinenisuryatej"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-space-purple transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:makinenisuryatej@gmail.com"
            className="hover:text-space-purple transition-colors"
          >
            <Mail size={20} />
          </a>
          <Button
            className="btn-primary"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            Resume
          </Button>
        </div>

        {/* Mobile Menu Toggle - Using hamburger OR X icon directly for clarity */}
        <div className="md:hidden z-50 relative">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="p-2 rounded-full bg-space-navy border border-gray-800/50 shadow-lg hover:bg-space-purple/20 transition-all"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <div className="flex flex-col gap-1.5 items-center justify-center">
                <div className="w-6 h-0.5 bg-white rounded-full"></div>
                <div className="w-6 h-0.5 bg-white rounded-full"></div>
                <div className="w-6 h-0.5 bg-white rounded-full"></div>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - With improved styling and backdrop */}
      <div
        className={`fixed inset-0 z-40 w-full h-screen transform transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Mobile Menu Background with Animation */}
        <div className="absolute inset-0 animated-gradient-bg opacity-95"></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-space-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-space-teal/10 rounded-full blur-3xl"></div>
          <div className="absolute top-2/3 right-1/4 w-48 h-48 bg-space-magenta/10 rounded-full blur-3xl"></div>

          {/* Stars/particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  opacity: Math.random() * 0.5 + 0.3,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Mobile Menu Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8 px-6">
          <a
            href="#about"
            className="text-xl nav-link text-white font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#experience"
            className="text-xl nav-link text-white font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-xl nav-link text-white font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-xl nav-link text-white font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#education"
            className="text-xl nav-link text-white font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Education
          </a>
          <a
            href="#contact"
            className="text-xl nav-link text-white font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>

          <div className="flex gap-6 mt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-space-purple bg-space-navy/40 p-3 rounded-full transition-all"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/makinenisuryatej"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-space-purple bg-space-navy/40 p-3 rounded-full transition-all"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:makinenisuryatej@gmail.com"
              className="text-white hover:text-space-purple bg-space-navy/40 p-3 rounded-full transition-all"
            >
              <Mail size={24} />
            </a>
          </div>

          <Button
            className="btn-primary mt-4 bg-space-navy/50 hover:bg-space-purple/30 backdrop-blur-sm"
            onClick={() => {
              window.open("/resume.pdf", "_blank");
              setMobileMenuOpen(false);
            }}
          >
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
