import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    const particles: Particle[] = [];
    const particleCount = 100;

    // Resize canvas to fit window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: getRandomColor(),
        speed: Math.random() * 1 + 0.5,
        angle: Math.random() * Math.PI * 2,
        velocity: {
          x: (Math.random() - 0.5) * 0.7,
          y: (Math.random() - 0.5) * 0.7,
        },
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Move particles
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.velocity.x *= -1;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.velocity.y *= -1;
        }

        // Connect nearby particles
        connectParticles(particle, particles, ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Helper functions
  const getRandomColor = (): string => {
    const colors = [
      "rgba(139, 92, 246, ", // Purple
      "rgba(6, 182, 212, ", // Teal
      "rgba(236, 72, 153, ", // Magenta
      "rgba(250, 204, 21, ", // Yellow
    ];
    const opacity = Math.random() * 0.5 + 0.1;
    return `${colors[Math.floor(Math.random() * colors.length)]}${opacity})`;
  };

  const connectParticles = (
    particle: Particle,
    particles: Particle[],
    ctx: CanvasRenderingContext2D
  ) => {
    for (let i = 0; i < particles.length; i++) {
      const otherParticle = particles[i];
      const distance = Math.sqrt(
        Math.pow(particle.x - otherParticle.x, 2) +
          Math.pow(particle.y - otherParticle.y, 2)
      );

      if (distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - distance / 100)})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(otherParticle.x, otherParticle.y);
        ctx.stroke();
      }
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden animated-gradient-bg"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="container mx-auto px-6 z-10 text-center">
        <p
          className="text-space-purple mb-2 text-lg md:text-xl opacity-0 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Hello, my name is
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="text-gradient">SURYA TEJ MAKINENI</span>
        </h1>
        <div
          className="h-12 overflow-hidden mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium typing-container">
            <span className="inline-block typing-text">AI/ML Engineer</span>
          </h2>
        </div>
        <p
          className="max-w-lg mx-auto text-gray-300 mb-8 md:text-lg opacity-0 animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          I build intelligent systems that solve complex problems. Specializing
          in machine learning, deep learning, and natural language processing.
        </p>
        <div
          className="flex justify-center gap-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.1s" }}
        >
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-space-purple" size={30} />
      </a>

      {/* 3D Neural Network Model Placeholder */}
      <div className="absolute opacity-20 md:opacity-30 pointer-events-none top-[15%] right-[5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] animate-float">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#8b5cf6"
            d="M44.4,-76.1C57.2,-69.9,67.1,-59,74.3,-45.9C81.6,-32.8,86.1,-16.4,86.5,0.3C86.9,16.9,83.2,33.7,74.5,47.1C65.8,60.4,52.1,70.3,37.2,76.2C22.3,82.2,6.1,84.3,-9.8,82.2C-25.8,80.2,-41.5,74,-54.5,64C-67.5,54,-77.8,40.2,-83,24.8C-88.1,9.4,-88.2,-7.7,-81.9,-22C-75.7,-36.3,-63.1,-47.9,-49,-56C-34.9,-64.2,-19.2,-69,-2.8,-64.8C13.7,-60.6,31.5,-82.3,44.4,-76.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </section>
  );
};

// TypeScript interfaces
interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speed: number;
  angle: number;
  velocity: {
    x: number;
    y: number;
  };
}

export default HeroSection;
