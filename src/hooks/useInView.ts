import { useEffect, useState } from 'react';

/**
 * Returns true once the given section id nears the viewport.
 * Used for lightweight entrance reveals without an animation library.
 */
export function useInView(elementId: string, rootMargin = '-10% 0px'): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [elementId, rootMargin]);

  return isInView;
}
