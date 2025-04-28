import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-space-dark-blue py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4">
          <p className="text-gradient text-2xl font-bold">Surya Tej Makineni</p>
          <p className="text-gray-400 mt-1">AI/ML Engineer</p>
        </div>

        <div className="max-w-md mx-auto mb-6">
          <p className="text-gray-300 text-sm">
            Creating intelligent systems that solve complex problems through
            machine learning, deep learning, and natural language processing.
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="#about"
            className="text-gray-400 hover:text-space-purple transition-colors"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-gray-400 hover:text-space-purple transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-gray-400 hover:text-space-purple transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-gray-400 hover:text-space-purple transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-space-purple transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="text-gray-500 text-sm">
          <p>&copy; {currentYear} Surya Tej Makineni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
