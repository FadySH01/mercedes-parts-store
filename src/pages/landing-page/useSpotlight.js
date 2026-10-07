import { useEffect, useState } from 'react';

export function useSpotlight(count) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setIndex(value => (value + 1) % count), 7000);
    return () => window.clearInterval(timer);
  }, [count]);
  return { index };
}
