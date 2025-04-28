import { useEffect } from "react";

function SkillsSection() {
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

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C++", "JavaScript", "SQL"],
    },
    {
      title: "Frameworks & Tools",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Hugging Face Transformers",
        "LangChain",
        "Streamlit",
        "React",
        "Git",
        "Vector Databases",
        "Pinecone",
        "FastAPI",
      ],
    },
    {
      title: "AI/ML Concepts",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Prompt Engineering",
        "Retrieval Augmented Generation (RAG)",
        "LLM Fine-tuning",
        "Transformer Models",
        "Computer Vision",
        "Generative AI",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS",
        "AWS Lambda",
        "AWS Elastic Container Registry",
        "Docker",
        "CI/CD",
        "AWS SageMaker",
      ],
    },
  ];

  return (
    <section id="skills" className="section-container bg-space-navy/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 reveal opacity-0">
          <span className="text-gradient">Skills & Expertise</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-card reveal opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-gradient">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-space-dark-blue/70 border border-space-purple/30 text-gray-300 text-sm transition-all hover:bg-space-purple/20 hover:border-space-purple/50 hover:transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal opacity-0">
          <div className="card-gradient rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-gradient">
              Core Competencies
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="card-gradient rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-space-purple mb-2">
                    Machine Learning & Deep Learning
                  </h4>
                  <p className="text-sm text-gray-300">
                    Expert in developing and implementing ML algorithms, neural
                    networks, and deep learning models for complex data analysis
                    and predictions.
                  </p>
                </div>

                <div className="card-gradient rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-space-purple mb-2">
                    Natural Language Processing
                  </h4>
                  <p className="text-sm text-gray-300">
                    Specialized in text analysis, language understanding, and
                    building conversational AI systems using state-of-the-art
                    NLP techniques.
                  </p>
                </div>

                <div className="card-gradient rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-space-purple mb-2">
                    LLMs & Prompt Engineering
                  </h4>
                  <p className="text-sm text-gray-300">
                    Proficient in working with large language models and
                    creating effective prompting strategies for optimal AI
                    performance.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="card-gradient rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-space-purple mb-2">
                    Cloud & MLOps
                  </h4>
                  <p className="text-sm text-gray-300">
                    Experienced in deploying and managing machine learning
                    models on cloud platforms with automated CI/CD pipelines.
                  </p>
                </div>

                <div className="card-gradient rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-space-purple mb-2">
                    Software Development
                  </h4>
                  <p className="text-sm text-gray-300">
                    Strong foundation in software engineering principles with
                    expertise in building robust, scalable applications.
                  </p>
                </div>

                <div className="card-gradient rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-space-purple mb-2">
                    Data Engineering
                  </h4>
                  <p className="text-sm text-gray-300">
                    Skilled in designing efficient data pipelines and storage
                    solutions to support AI/ML workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
