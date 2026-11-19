"use client";

import { useEffect } from "react";

export function useRevealObserver(rootSelector = ".proto-reveal") {
  useEffect(() => {
    const nodes = document.querySelectorAll(rootSelector);
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [rootSelector]);
}