import { useEffect } from "react";

function EducationSection() {
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

  const educationData = [
    {
      degree: "Master's in Computer Science",
      institution: "Wichita State University (WSU)",
      location: "Wichita, KS",
      duration: "August 2022 - May 2024",
      gpa: "3.97/4.0",
    },
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "P V P Siddhartha Institute of Technology",
      location: "Vijayawada, India",
      duration: "July 2018 - May 2022",
      gpa: "9.43/10.0",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "May 2024",
    },
    {
      name: "Graduate Certificate in Computational Data Science",
      issuer: "Wichita State University",
      date: "April 2024",
    },
  ];

  return (
    <section id="education" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 reveal opacity-0">
          <span className="text-gradient">Education & Certifications</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal opacity-0">
            <h3 className="text-2xl font-bold mb-6 text-space-purple">
              Academic Background
            </h3>

            <div className="relative">
              <div className="timeline-line"></div>

              <div className="space-y-12">
                {educationData.map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-0">
                    <div className="md:grid md:grid-cols-12 gap-4">
                      <div className="md:col-span-6 md:text-right md:pr-8">
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-1.5 w-4 h-4 rounded-full bg-space-purple z-10 animate-pulse-glow"></div>
                        <h4 className="text-xl font-bold text-white">
                          {item.degree}
                        </h4>
                        <p className="text-gray-400">{item.institution}</p>
                        <p className="text-space-purple">{item.location}</p>
                      </div>
                      <div className="mt-2 md:mt-0 md:col-span-6 md:pl-8">
                        <p className="text-gray-300">{item.duration}</p>
                        <p className="text-gray-300">GPA: {item.gpa}</p>
                        <div className="card-gradient rounded-lg p-4 mt-2">
                          <p className="text-sm text-gray-300">
                            {index === 0
                              ? "Focused on advanced AI/ML topics, deep learning, and natural language processing."
                              : "Strong foundation in computer science fundamentals, algorithms, and software engineering principles."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal opacity-0">
            <h3 className="text-2xl font-bold mb-6 text-space-purple">
              Certifications
            </h3>

            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="card-gradient rounded-xl p-6 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-8 -translate-y-8">
                    <svg
                      className="w-full h-full text-space-purple/10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                      <path
                        fillRule="evenodd"
                        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-white mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-gray-300">Issued by: {cert.issuer}</p>
                    <p className="text-space-purple mt-2">{cert.date}</p>

                    <div className="mt-4 w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-space-purple to-space-teal rounded-full w-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 ease-out"></div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="card-gradient rounded-xl p-6 border border-dashed border-gray-700">
                <h4 className="text-xl font-bold text-white mb-2">
                  Continuous Learning
                </h4>
                <p className="text-gray-300">
                  Actively pursuing advanced certifications in AI/ML
                  specializations and cloud technologies.
                </p>
                <div className="mt-4 flex gap-3">
                  <span className="px-3 py-1.5 rounded-full bg-space-dark-blue/70 border border-space-purple/30 text-gray-300 text-sm">
                    AWS Machine Learning
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-space-dark-blue/70 border border-space-purple/30 text-gray-300 text-sm">
                    DeepLearning.AI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
