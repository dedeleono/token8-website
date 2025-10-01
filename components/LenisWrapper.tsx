"use client";

import React, { useEffect, useState, createContext, useContext } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface LenisWrapperProps {
  children: any;
  enableSmoothing?: boolean; // Allow conditional smooth scrolling
}

// Create a context to provide lenis instance without hooks dependency
const LenisContext = createContext<any>(null);

export const useLenisContext = () => useContext(LenisContext);

// Component to capture Lenis instance
function LenisInstanceProvider({ setInstance, children }: { setInstance: (lenis: any) => void, children: React.ReactNode }) {
  const lenis = useLenis();
  
  useEffect(() => {
    setInstance(lenis);
  }, [lenis, setInstance]);
  
  return <>{children}</>;
}

// Simplified GSAP Integration Component
function GSAPIntegration({ lenis }: { lenis: any }) {
  useEffect(() => {
    if (!lenis) return;

    // Only connect Lenis with ScrollTrigger when smooth scrolling is enabled
    const onScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", onScroll);

    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  return null;
}

export default function LenisWrapper({ children, enableSmoothing = false }: LenisWrapperProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [lenisInstance, setLenisInstance] = useState<any>(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1000;
      setIsMobile(mobile);
      
      // Only refresh ScrollTrigger when needed, not on every resize
      if (!enableSmoothing) {
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("orientationchange", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("orientationchange", checkMobile);
    };
  }, [enableSmoothing]);

  // If smooth scrolling is disabled, just provide context without Lenis
  if (!enableSmoothing) {
    return (
      <LenisContext.Provider value={null}>
        {children}
      </LenisContext.Provider>
    );
  }

  return (
    <ReactLenis
      root
      options={{
        duration: isMobile ? 1.0 : 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: isMobile ? 0.8 : 1,
        touchMultiplier: isMobile ? 1.5 : 2,
        infinite: false,
      }}
    >
      <LenisInstanceProvider setInstance={setLenisInstance}>
        <LenisContext.Provider value={lenisInstance}>
          <GSAPIntegration lenis={lenisInstance} />
          {children}
        </LenisContext.Provider>
      </LenisInstanceProvider>
    </ReactLenis>
  );
}
