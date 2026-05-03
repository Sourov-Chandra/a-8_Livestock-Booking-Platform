"use client";

import { useEffect, useRef, useState } from "react";
import "animate.css";

export default function ScrollAnimate({
  children,
  animation = "fadeInUp",
  delay = "0s",
  threshold = 0.1,
  className = "",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${isVisible ? `animate__animated animate__${animation}` : "opacity-0"} ${className}`}
      style={{ animationFillMode: "both", animationDelay: delay }}
    >
      {children}
    </div>
  );
}
