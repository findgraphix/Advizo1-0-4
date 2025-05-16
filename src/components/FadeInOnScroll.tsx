
import React, { useEffect, useRef, useState } from "react";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Fades in children when they enter the viewport.
 * Optionally delay the fade-in.
 * Usage: <FadeInOnScroll><div>hello</div></FadeInOnScroll>
 */
const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children, delay = 0, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ${isVisible ? "animate-fade-in opacity-100" : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;

