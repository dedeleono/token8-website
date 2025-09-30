import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let lenisInstance: Lenis | null = null;

export const initLenis = () => {
  if (lenisInstance) return lenisInstance;

  const isMobile = window.innerWidth < 1000;

  lenisInstance = new Lenis({
    duration: isMobile ? 0.8 : 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: isMobile ? 1.5 : 2,
  });
  
  // Connect with GSAP
  lenisInstance.on("scroll", ScrollTrigger.update);
  const tick = (time: number) => lenisInstance!.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
};

export const getLenis = () => lenisInstance;

export const destroyLenis = () => {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
};
