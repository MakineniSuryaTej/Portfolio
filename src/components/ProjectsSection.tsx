import { useState, useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";

function ProjectsSection() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".reveal");
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const projects = [
    {
      title: "Medical Chatbot",
      description:
        "An AI-powered conversational medical chatbot using LangChain and LLaMA, applying sophisticated prompt engineering techniques to generate accurate medical responses.",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      tags: [
        "LangChain",
        "LLaMA",
        "RAG",
        "Pinecone",
        "Flask",
        "NLP",
        "Vector Databases",
      ],
      achievements: [
        "Implemented a Retrieval-Augmented Generation (RAG) pipeline with 40% improved response relevance",
        "Curated a comprehensive knowledge base from the Gale Encyclopedia using vector embeddings",
        "Optimized vector search with Pinecone, reducing response latency from 1.5s to 600ms",
        "Designed a Flask-based web application that increased user engagement by 50%",
      ],
      github: "https://github.com",
      liveDemo: "https://demo.com",
    },
    {
      title: "AI Powered MCQs Generator",
      description:
        "A GPT-3.5-turbo-powered AI model using LangChain and custom prompt templates, automating the generation of high-quality, domain-specific multiple-choice questions with 95% accuracy.",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      tags: [
        "GPT-3.5",
        "LangChain",
        "Prompt Engineering",
        "Streamlit",
        "AWS",
        "NLP",
      ],
      achievements: [
        "Engineered prompt optimization techniques for improved result consistency and relevance",
        "Created an interactive user interface with Streamlit for real-time feedback",
        "Deployed on AWS with 99.9% uptime and scalable performance",
        "Integrated real-time data processing and model monitoring, improving response times by 40%",
      ],
      github: "https://github.com",
      liveDemo: "https://demo.com",
    },
  ];

  return (
    <section id="projects" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 reveal opacity-0">
          <span className="text-gradient">Featured Projects</span>
        </h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 ${
                index % 2 === 0
                  ? "lg:grid-cols-12"
                  : "lg:grid-cols-12 lg:flex-row-reverse"
              } gap-6 lg:gap-10 items-center reveal opacity-0`}
            >
              <div
                className={`lg:col-span-7 ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-xl aspect-video">
                    <div className="absolute inset-0 bg-space-purple/20 group-hover:bg-transparent transition-all duration-300"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-space-navy/80 backdrop-blur-sm group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-space-purple/20 text-space-purple hover:bg-space-purple/40 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={24} />
                      </a>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-space-teal/20 text-space-teal hover:bg-space-teal/40 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`lg:col-span-5 ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gradient">
                  {project.title}
                </h3>

                <div className="card-gradient rounded-lg p-6 mb-4">
                  <p className="text-gray-300">{project.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {project.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start">
                      <span className="text-space-purple mr-2">▹</span>
                      <span className="text-gray-300 text-sm">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-space-navy/70 border border-space-purple/30 text-gray-300 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
