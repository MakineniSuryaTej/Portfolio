import React, { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const CustomPointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [trail, setTrail] = useState<
    { x: number; y: number; opacity: number }[]
  >([]);
  const isMobile = useIsMobile();

  // Update mouse position
  useEffect(() => {
    // Don't apply cursor effects on mobile
    if (isMobile) {
      return;
    }

    const updateMousePosition = (ev: MouseEvent) => {
      setPosition({ x: ev.clientX, y: ev.clientY });

      // Add new point to trail with a slight delay for performance
      setTrail((prevTrail) => [
        { x: ev.clientX, y: ev.clientY, opacity: 1 },
        ...prevTrail
          .slice(0, 7)
          .map((point) => ({ ...point, opacity: point.opacity - 0.12 })),
      ]);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Hide cursor when leaving the window
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    // Hide the default cursor
    document.body.style.cursor = "none";

    // Apply pointer styles to interactive elements
    const addPointerToElements = () => {
      const elements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"]'
      );
      elements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          document.body.style.cursor = "pointer";
        });
        el.addEventListener("mouseleave", () => {
          document.body.style.cursor = "none";
        });
      });
    };

    // Allow time for DOM to load fully
    const timeoutId = setTimeout(addPointerToElements, 1000);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      document.body.style.cursor = "auto";
      clearTimeout(timeoutId);
    };
  }, [isMobile]);

  // Don't render anything for the custom cursor on mobile
  if (isMobile || hidden) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 will-change-transform">
      {/* Trail effect - using inline styles for critical render path and exact positioning */}
      {trail.map((point, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${point.x}px`,
            top: `${point.y}px`,
            width: `${14 - index}px`,
            height: `${14 - index}px`,
            opacity: point.opacity,
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(139, 92, 246, 0.3)",
            borderRadius: "9999px",
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        style={{
          position: "absolute",
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "24px",
          height: "24px",
          backgroundColor: "rgba(139, 92, 246, 0.6)",
          boxShadow:
            "0 0 10px rgba(139, 92, 246, 0.4), 0 0 20px rgba(139, 92, 246, 0.2)",
          borderRadius: "9999px",
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
          transition: "transform 0.1s ease-out, opacity 0.2s ease-out",
          mixBlendMode: "difference",
        }}
      />

      {/* Outer ring */}
      <div
        style={{
          position: "absolute",
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: clicked ? "18px" : "36px",
          height: clicked ? "18px" : "36px",
          borderRadius: "9999px",
          border: "1px solid rgba(6, 182, 212, 0.4)",
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s ease-out, height 0.2s ease-out",
        }}
      />
    </div>
  );
};

export default CustomPointer;
