import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-container bg-space-navy/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal opacity-0">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl reveal opacity-0">
          I'm currently open to new opportunities. Whether you have a question
          or just want to say hi, I'll get back to you as soon as possible!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="card-gradient rounded-xl p-8 reveal opacity-0">
            <h3 className="text-2xl font-bold mb-6 text-gradient">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-space-dark-blue/50 border-gray-700 focus:border-space-purple focus:ring-space-purple/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-space-dark-blue/50 border-gray-700 focus:border-space-purple focus:ring-space-purple/50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="bg-space-dark-blue/50 border-gray-700 focus:border-space-purple focus:ring-space-purple/50 min-h-[150px]"
                  placeholder="Your message..."
                />
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full btn-primary relative overflow-hidden group"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  <span className="absolute inset-0 bg-space-purple/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </Button>
              </div>
            </form>
          </div>

          <div className="reveal opacity-0">
            <h3 className="text-2xl font-bold mb-6 text-gradient">
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-space-purple/20 rounded-lg text-space-purple">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <a
                    href="mailto:makinenisuryatej@gmail.com"
                    className="text-white hover:text-space-purple transition-colors"
                  >
                    makinenisuryatej@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-space-purple/20 rounded-lg text-space-purple">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a
                    href="tel:+13162238927"
                    className="text-white hover:text-space-purple transition-colors"
                  >
                    +1 (316)-223-8927
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-space-purple/20 rounded-lg text-space-purple">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">Wichita, KS, USA</p>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-800">
                <p className="text-gray-300 mb-4">
                  Connect with me on social media:
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-space-dark-blue/70 rounded-full text-white hover:text-space-purple hover:bg-space-dark-blue transition-all"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/makinenisuryatej"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-space-dark-blue/70 rounded-full text-white hover:text-space-purple hover:bg-space-dark-blue transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:makinenisuryatej@gmail.com"
                    className="p-4 bg-space-dark-blue/70 rounded-full text-white hover:text-space-purple hover:bg-space-dark-blue transition-all"
                    aria-label="Email"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
