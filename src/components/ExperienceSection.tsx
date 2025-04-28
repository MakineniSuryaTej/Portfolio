import { useState, useEffect } from "react";

function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);

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

  const experiences = [
    {
      company: "Seva Bharathi Organization",
      title: "Machine Learning Engineer",
      duration: "February 2021 - May 2022",
      location: "India",
      achievements: [
        "Developed and deployed a machine learning model to analyze user behavior, increasing engagement by 30% through personalized content recommendations.",
        "Optimized data pipelines for real-time analytics, reducing query processing time by 40% and improving decision-making efficiency.",
        "Designed and implemented an NLP-based chatbot using Python, TensorFlow, and Flask, automating user inquiries and reducing response time by 50%.",
        "Built predictive models for donation forecasting using scikit-learn, enhancing funding allocation accuracy by 20%.",
        "Automated model training and validation using TensorFlow and MLflow, ensuring seamless deployment and monitoring in a production environment.",
      ],
      technologies:
        "Python, TensorFlow, scikit-learn, Flask, SQL, Git, Selenium, Postman, Agile Methodologies",
    },
    {
      company: "Internship Studio",
      title: "Machine Learning Engineer",
      duration: "July 2020 - September 2020",
      location: "India",
      achievements: [
        "Developed a machine learning model that efficiently forecasted with 95% accuracy whether a customer would opt for a personal loan in the future, leveraging their personal information.",
        "Executed comprehensive Exploratory Data Analysis on a dataset of over 5,000 customer records, involving data cleansing and transformation of 10+ features.",
        "Ensured clear communication of insights for business understanding, enabling data-driven decision-making and strategic planning.",
        "Collaborated with cross-functional teams to understand business requirements and translate them into actionable machine learning solutions.",
      ],
      technologies: "Python, Scikit-learn, Pandas, NumPy, Matplotlib, Git",
    },
  ];

  return (
    <section id="experience" className="section-container bg-space-navy/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 reveal opacity-0">
          <span className="text-gradient">Work Experience</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab Selection */}
          <div className="lg:w-1/4 flex lg:flex-col overflow-x-auto lg:overflow-x-visible reveal opacity-0">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`px-4 py-3 text-left whitespace-nowrap lg:whitespace-normal border-b-2 lg:border-l-2 lg:border-b-0 transition-all ${
                  activeTab === index
                    ? "border-space-purple text-space-purple"
                    : "border-gray-700 text-gray-400 hover:text-gray-200 hover:border-gray-400"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="lg:w-3/4 card-gradient rounded-xl p-8 reveal opacity-0">
            <h3 className="text-2xl font-bold text-white">
              {experiences[activeTab].title}{" "}
              <span className="text-space-purple">
                @ {experiences[activeTab].company}
              </span>
            </h3>

            <p className="text-gray-400 mt-2 mb-4">
              {experiences[activeTab].duration} |{" "}
              {experiences[activeTab].location}
            </p>

            <ul className="space-y-4 mb-6">
              {experiences[activeTab].achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-space-purple mr-2">▹</span>
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <h4 className="text-gray-300 font-semibold mb-2">
                Technologies:
              </h4>
              <div className="flex flex-wrap gap-2">
                {experiences[activeTab].technologies
                  .split(", ")
                  .map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-space-purple/20 text-space-purple text-sm"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
