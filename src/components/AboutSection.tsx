import { useEffect } from "react";

const AboutSection = () => {
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

  return (
    <section id="about" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 reveal opacity-0">
          <span className="text-gradient">About Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 reveal opacity-0">
            <p className="text-gray-300 mb-6 text-lg">
              I'm a results-driven AI/ML Engineer with expertise in machine
              learning, deep learning, and natural language processing (NLP). I
              specialize in developing and deploying LLM-powered applications,
              RAG-based retrieval systems, and predictive analytics models that
              drive data-driven decision-making.
            </p>
            <p className="text-gray-300 mb-6 text-lg">
              My skills include Python, TensorFlow, PyTorch, LangChain, Prompt
              Engineering, Vector Databases and AWS, with extensive experience
              in MLOps, model optimization, and scalable cloud deployments.
            </p>
            <p className="text-gray-300 text-lg">
              I'm passionate about building production-ready AI solutions that
              solve complex business challenges and enhance developer
              productivity, always looking to push the boundaries of what's
              possible with artificial intelligence.
            </p>
          </div>

          <div className="lg:col-span-2 reveal opacity-0">
            <div className="relative">
              <div className="w-full aspect-square overflow-hidden rounded-xl border-2 border-space-purple/30 relative z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-space-purple/20 to-space-teal/20 z-0"></div>
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
                  alt="Surya Tej Makineni"
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
                />
              </div>
              <div className="absolute inset-0 border-2 border-space-cyan/50 rounded-xl transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 reveal opacity-0">
          <div className="card-gradient rounded-xl p-6 hover:transform hover:scale-105 transition-all">
            <h3 className="text-xl font-bold mb-2 text-gradient">
              ML & Deep Learning
            </h3>
            <p className="text-gray-300">
              Building and optimizing machine learning and deep learning models
              for complex problem solving.
            </p>
          </div>

          <div className="card-gradient rounded-xl p-6 hover:transform hover:scale-105 transition-all">
            <h3 className="text-xl font-bold mb-2 text-gradient">NLP & LLMs</h3>
            <p className="text-gray-300">
              Crafting sophisticated natural language processing solutions with
              state-of-the-art language models.
            </p>
          </div>

          <div className="card-gradient rounded-xl p-6 hover:transform hover:scale-105 transition-all">
            <h3 className="text-xl font-bold mb-2 text-gradient">
              RAG & Vector DBs
            </h3>
            <p className="text-gray-300">
              Implementing retrieval augmented generation systems with efficient
              vector database solutions.
            </p>
          </div>

          <div className="card-gradient rounded-xl p-6 hover:transform hover:scale-105 transition-all">
            <h3 className="text-xl font-bold mb-2 text-gradient">
              Cloud & MLOps
            </h3>
            <p className="text-gray-300">
              Deploying and managing AI solutions at scale with robust MLOps
              practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
