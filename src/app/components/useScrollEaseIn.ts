import { useEffect, useRef, useCallback } from "react";

export function useScrollEaseIn() {
  const elementsRef = useRef<HTMLElement[]>([]);

  const registerRef = useCallback((el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;

            // Calculate delay based on order in the list
            const index = elementsRef.current.indexOf(el);
            el.style.transitionDelay = `${index * 0.05}s`;

            el.classList.add("visible");
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elementsRef.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return registerRef;
}
