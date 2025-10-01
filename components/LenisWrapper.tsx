"use client";

import React, { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface LenisWrapperProps {
  children: any;
}

// GSAP Integration Component
function GSAPIntegration() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after Lenis is ready
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(tick);
    };
  }, [lenis]);

  return null;
}

export default function LenisWrapper({ children }: LenisWrapperProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1000);
      // Refresh ScrollTrigger on resize to recalculate positions
      ScrollTrigger.refresh();
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: isMobile ? 1.0 : 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: isMobile ? 0.8 : 1,
        touchMultiplier: isMobile ? 1.2 : 2,
      }}
    >
      <GSAPIntegration />
      {children}
    </ReactLenis>
  );
}
