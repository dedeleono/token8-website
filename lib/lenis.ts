import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins once globally
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

let lenisInstance: Lenis | null = null;

export const initLenis = () => {
  if (typeof window === "undefined") return null;
  if (lenisInstance) return lenisInstance;

  const isMobile = window.innerWidth < 1000;

  lenisInstance = new Lenis({
    duration: isMobile ? 1.0 : 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: isMobile ? 0.8 : 1,
    touchMultiplier: isMobile ? 1.2 : 2,
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
