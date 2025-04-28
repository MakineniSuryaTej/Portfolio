import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

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

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-white"
          >
            <div
              className={`w-6 h-0.5 bg-current transition-all ${
                mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-current my-1.5 transition-all ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-current transition-all ${
                mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 w-full h-screen bg-space-dark-blue transform transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <a
            href="#about"
            className="text-xl nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#experience"
            className="text-xl nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-xl nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-xl nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#education"
            className="text-xl nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Education
          </a>
          <a
            href="#contact"
            className="text-xl nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>

          <div className="flex gap-6 mt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-space-purple"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/makinenisuryatej"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-space-purple"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:makinenisuryatej@gmail.com"
              className="text-white hover:text-space-purple"
            >
              <Mail size={24} />
            </a>
          </div>

          <Button
            className="btn-primary mt-4"
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
