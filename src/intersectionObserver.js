import { useEffect } from "react";

let observer;

function handleIntersections(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      const image = entry.target;
      image.src = image.dataset.src;
      image.srcset = image.dataset.srcset;
      observer.unobserve(image);
    }
  });
}

function getIntersectionObserver() {
  if (observer === undefined) {
    observer = new IntersectionObserver(handleIntersections, {
      rootMargin: "100px",
      threshold: "1"
    });
  }
  return observer;
}

export function useIntersection(elem) {
  useEffect(() => {
    let target = elem.current;
    let observer = getIntersectionObserver();
    observer.observe(target);
    return () => {
      observer.unobserve(target);
    };
  }, []);
}
