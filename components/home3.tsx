"use client";

import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { initLenis, getLenis } from "@/lib/lenis";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";
import Section2 from "./section2";
import Lenis from "lenis";

export default function ComingSoonAlt() {
    const [email, setEmail] = useState("");
    const [isGSAPReady, setIsGSAPReady] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle email submission here
      console.log("Email submitted:", email);
    };

  const heroImgContainerRef = useRef<HTMLDivElement>(null);
  const heroImgLogoRef = useRef<HTMLDivElement>(null);
  const heroImgCopyRef = useRef<HTMLDivElement>(null);
  const fadeOverlayRef = useRef<HTMLDivElement>(null);
  const svgOverlayRef = useRef<HTMLDivElement>(null);
  const overlayCopyRef = useRef<HTMLHeadingElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const logoMaskRef = useRef<SVGPathElement>(null);
  const lastFrameTimeRef = useRef<number>(0);

  const [lenis, setLenis] = useState<Lenis | null>(null);

  // Initialize global Lenis instance
  useEffect(() => {
    const lenisInstance = initLenis();
    setLenis(lenisInstance);
    // Don't destroy here - let app handle cleanup
  }, []);

  useGSAP(() => {
    if (!lenis) return;

    gsap.registerPlugin(ScrollTrigger);
    
    // Set initial states to ensure elements are visible
    const heroImgContainer = heroImgContainerRef.current;
    const heroImgLogo = heroImgLogoRef.current;
    const heroImgCopy = heroImgCopyRef.current;
    const fadeOverlay = fadeOverlayRef.current;
    const svgOverlay = svgOverlayRef.current;
    const overlayCopy = overlayCopyRef.current;

    // Set initial visibility states immediately
    if (heroImgContainer) {
      gsap.set(heroImgContainer, { scale: 1.5, opacity: 1 });
    }
    if (heroImgLogo) {
      gsap.set(heroImgLogo, { opacity: 1 });
    }
    if (heroImgCopy) {
      gsap.set(heroImgCopy, { opacity: 1 });
    }
    if (fadeOverlay) {
      gsap.set(fadeOverlay, { opacity: 0 });
    }
    if (svgOverlay) {
      gsap.set(svgOverlay, { opacity: 0 });
    }
    if (overlayCopy) {
      gsap.set(overlayCopy, { opacity: 0 });
    }

    setIsGSAPReady(true);

    // Lenis is already connected globally, no need to reconnect

    const logoContainer = logoContainerRef.current;
    const logoMask = logoMaskRef.current;

    if (
      !heroImgContainer ||
      !heroImgLogo ||
      !heroImgCopy ||
      !fadeOverlay ||
      !svgOverlay ||
      !overlayCopy ||
      !logoContainer ||
      !logoMask
    ) {
      return;
    }

    const initialScaleValue = 350;

    // Complete Token8 logo path from token8-mask.svg including letters and center element
    const logoPath = `
      M 330.328125 5.390625 L 20.46875 5.390625 C 11.902344 5.390625 4.953125 12.335938 4.953125 20.902344 L 4.953125 330.761719 C 4.953125 339.328125 11.902344 346.277344 20.46875 346.277344 L 96.410156 346.277344 C 104.976562 346.277344 111.925781 339.328125 111.925781 330.761719 L 111.925781 67.4375 C 111.925781 58.871094 118.875 51.925781 127.441406 51.925781 L 245.929688 51.925781 C 254.496094 51.925781 261.445312 58.871094 261.445312 67.4375 L 261.445312 115.671875 C 261.445312 124.238281 254.496094 131.1875 245.929688 131.1875 C 237.363281 131.1875 230.417969 124.238281 230.417969 115.671875 L 230.417969 98.472656 C 230.417969 89.90625 223.46875 82.960938 214.902344 82.960938 L 158.28125 82.960938 C 149.820312 82.960938 142.960938 89.816406 142.960938 98.277344 L 142.960938 330.761719 C 142.960938 339.328125 149.910156 346.277344 158.476562 346.277344 L 175.398438 346.277344 C 183.964844 346.277344 190.910156 339.328125 190.910156 330.761719 L 190.910156 173.71875 C 190.910156 165.152344 197.859375 158.207031 206.425781 158.207031 L 285.414062 158.207031 C 293.980469 158.207031 300.925781 165.152344 300.925781 173.71875 L 300.925781 330.761719 C 300.925781 339.328125 307.875 346.277344 316.441406 346.277344 L 330.3125 346.277344 C 338.878906 346.277344 345.828125 339.328125 345.828125 330.761719 L 345.828125 20.902344 C 345.828125 12.335938 338.878906 5.390625 330.3125 5.390625 Z
      M 221.949219 204.605469 L 221.949219 330.914062 C 221.949219 339.40625 228.828125 346.285156 237.320312 346.285156 L 254.535156 346.285156 C 263.027344 346.285156 269.90625 339.40625 269.90625 330.914062 L 269.90625 204.605469 C 269.90625 196.113281 263.027344 189.234375 254.535156 189.234375 L 237.320312 189.234375 C 228.828125 189.234375 221.949219 196.113281 221.949219 204.605469 Z
      M 576.6875 140.574219 L 530.535156 140.574219 C 526.277344 140.574219 522.832031 144.023438 522.832031 148.28125 L 522.832031 240.113281 C 522.832031 244.371094 519.382812 247.816406 515.128906 247.816406 L 492.125 247.816406 C 487.867188 247.816406 484.421875 244.371094 484.421875 240.113281 L 484.421875 148.273438 C 484.421875 144.015625 480.972656 140.570312 476.71875 140.570312 L 430.570312 140.570312 C 426.316406 140.574219 422.867188 137.121094 422.867188 132.871094 L 422.867188 111.871094 C 422.867188 107.613281 426.316406 104.167969 430.570312 104.167969 L 576.6875 104.167969 C 580.945312 104.167969 584.394531 107.613281 584.394531 111.871094 L 584.394531 132.871094 C 584.394531 137.128906 580.945312 140.574219 576.6875 140.574219 Z
      M 714.125 175.839844 C 714.117188 157.738281 700.367188 139.804688 675.429688 139.804688 C 650.496094 139.804688 636.742188 157.738281 636.738281 175.839844 C 636.742188 193.929688 650.503906 211.871094 675.429688 211.871094 C 700.359375 211.871094 714.113281 193.929688 714.125 175.839844 M 754.417969 175.832031 L 754.417969 175.851562 C 754.402344 221.265625 718.5625 251.210938 675.429688 251.210938 L 675.425781 251.210938 C 632.300781 251.210938 596.460938 221.265625 596.445312 175.851562 L 596.445312 175.824219 C 596.460938 130.40625 632.300781 100.457031 675.429688 100.457031 L 675.4375 100.457031 C 718.570312 100.457031 754.410156 130.40625 754.425781 175.824219 Z
      M 909.042969 247.839844 L 881.554688 247.839844 C 878.78125 247.839844 876.214844 246.351562 874.851562 243.9375 L 846.605469 194.097656 C 844.078125 189.636719 837.980469 188.84375 834.394531 192.507812 L 816.175781 211.15625 C 814.769531 212.59375 813.980469 214.527344 813.980469 216.535156 L 813.980469 240.136719 C 813.980469 244.394531 810.535156 247.839844 806.277344 247.839844 L 783.273438 247.839844 C 779.019531 247.839844 775.570312 244.394531 775.570312 240.144531 L 775.570312 111.894531 C 775.570312 107.644531 779.019531 104.191406 783.273438 104.191406 L 806.285156 104.191406 C 810.539062 104.191406 813.988281 107.636719 813.988281 111.894531 L 813.988281 147.023438 C 813.988281 154.015625 822.554688 157.386719 827.320312 152.277344 L 869.972656 106.550781 C 871.433594 104.984375 873.472656 104.101562 875.609375 104.101562 L 903.003906 104.101562 C 909.742188 104.101562 913.234375 112.144531 908.632812 117.066406 L 875.339844 152.679688 C 873.054688 155.125 872.613281 158.757812 874.238281 161.683594 L 915.78125 236.398438 C 918.636719 241.53125 914.917969 247.839844 909.050781 247.839844 Z
      M 977.699219 149.054688 C 977.699219 153.308594 981.144531 156.757812 985.402344 156.757812 L 1034.835938 156.757812 C 1039.09375 156.757812 1042.542969 160.207031 1042.542969 164.460938 L 1042.542969 183.589844 C 1042.542969 187.847656 1039.09375 191.292969 1034.835938 191.292969 L 985.402344 191.292969 C 981.144531 191.292969 977.699219 194.742188 977.699219 198.996094 L 977.699219 202.207031 C 977.699219 206.460938 981.144531 209.910156 985.402344 209.910156 L 1070.960938 209.910156 C 1075.21875 209.910156 1078.664062 213.359375 1078.664062 217.613281 L 1078.664062 240.113281 C 1078.664062 244.371094 1075.21875 247.816406 1070.960938 247.816406 L 946.992188 247.816406 C 942.734375 247.8125 939.289062 244.363281 939.289062 240.105469 L 939.289062 111.863281 C 939.289062 107.609375 942.734375 104.160156 946.992188 104.160156 L 1070.960938 104.160156 C 1075.21875 104.160156 1078.664062 107.609375 1078.664062 111.863281 L 1078.664062 133.652344 C 1078.664062 137.910156 1075.21875 141.355469 1070.960938 141.355469 L 985.402344 141.355469 C 981.144531 141.355469 977.699219 144.804688 977.699219 149.0625 Z
      M 1245.617188 111.824219 L 1245.617188 240.066406 C 1245.617188 244.324219 1242.167969 247.773438 1237.910156 247.773438 L 1208.023438 247.773438 L 1207.207031 246.753906 L 1153.476562 180.011719 C 1148.921875 174.347656 1139.777344 177.570312 1139.777344 184.839844 L 1139.777344 240.066406 C 1139.777344 244.324219 1136.328125 247.773438 1132.070312 247.773438 L 1109.0625 247.773438 C 1104.804688 247.773438 1101.359375 244.324219 1101.359375 240.066406 L 1101.359375 111.824219 C 1101.359375 107.570312 1104.804688 104.121094 1109.0625 104.121094 L 1137.617188 104.121094 L 1139.777344 106.84375 L 1193.484375 174.023438 C 1198.03125 179.710938 1207.199219 176.496094 1207.199219 169.210938 L 1207.199219 111.824219 C 1207.199219 107.570312 1210.652344 104.121094 1214.902344 104.121094 L 1237.910156 104.121094 C 1242.167969 104.121094 1245.617188 107.570312 1245.617188 111.824219 Z
      M 1320.011719 146.980469 C 1320.011719 152.210938 1323.269531 154.09375 1327.429688 154.09375 L 1382.792969 154.09375 C 1386.953125 154.09375 1390.210938 152.210938 1390.210938 146.980469 C 1390.210938 141.621094 1386.953125 139.875 1382.792969 139.875 L 1327.429688 139.875 C 1323.269531 139.875 1320.011719 141.621094 1320.011719 146.980469 M 1397.289062 204.5625 C 1397.289062 199.238281 1394.402344 197.140625 1389.199219 197.140625 L 1321.023438 197.140625 C 1315.828125 197.140625 1312.933594 199.328125 1312.933594 204.5625 C 1312.933594 209.925781 1315.835938 211.972656 1321.023438 211.972656 L 1389.199219 211.972656 C 1394.410156 211.972656 1397.289062 209.664062 1397.289062 204.5625 M 1435.039062 208.488281 C 1435.039062 230.980469 1419.050781 247.714844 1393.75 247.714844 L 1316.472656 247.714844 C 1291.164062 247.722656 1275.183594 230.988281 1275.183594 208.496094 C 1275.183594 196.054688 1280.421875 183.15625 1291.554688 176.042969 C 1295.578125 173.472656 1296.378906 168.144531 1293.382812 164.425781 C 1288.710938 158.632812 1286.1875 151.371094 1286.1875 143.578125 C 1286.195312 121.878906 1301.386719 104.085938 1326.6875 104.085938 L 1383.527344 104.085938 C 1408.835938 104.085938 1424.035156 121.878906 1424.035156 143.578125 C 1424.035156 151.671875 1421.660156 159.1875 1416.878906 165.085938 C 1413.941406 168.707031 1414.726562 173.914062 1418.59375 176.53125 C 1429.238281 183.742188 1435.046875 196.339844 1435.046875 208.496094 Z`;
    logoMask.setAttribute("d", logoPath);

    // Center the logo in the viewport
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Adjust positioning and scale for the complete Token8 logo with letters
    // The SVG viewBox is 0 0 1440 351.749992, so we scale and center accordingly
    const logoScale = 0.8;
    const logoWidth = 1440 * logoScale;
    const logoHeight = 351.749992 * logoScale;
    
    logoMask.setAttribute(
      "transform",
      `translate(${centerX - logoWidth / 2}, ${centerY - logoHeight / 2}) scale(${logoScale})`
    );

    // Create scroll trigger animation
    const isMobile = window.innerWidth < 1000;
    
    ScrollTrigger.create({
      trigger: ".hero",
      start: "top top",
      end: `${window.innerHeight * 5}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const now = performance.now();
        const scrollProgress = self.progress;
        
        // Throttle updates on mobile for fast scrolling
        if (isMobile && (now - lastFrameTimeRef.current < 16)) {
          return;
        }
        lastFrameTimeRef.current = now;
        const fadeOpacity = 1 - scrollProgress * (1 / 0.15);

        if (scrollProgress < 0.15) {
          gsap.set([heroImgLogo, heroImgCopy], {
            opacity: fadeOpacity,
          });
        } else {
          gsap.set([heroImgLogo, heroImgCopy], {
            opacity: 0,
          });
        }

        if (scrollProgress < 0.85) {
          const normalizedProgress = scrollProgress * (1 / 0.85);
          const heroImgContainerScale = 1.5 - 0.5 * normalizedProgress;

          const overlayScale =
            initialScaleValue *
            Math.pow(1 / initialScaleValue, normalizedProgress);

          let svgOverlayOpacity = 0;

          gsap.set([heroImgContainer], {
            scale: heroImgContainerScale,
          });

          if (scrollProgress > 0.25) {
            svgOverlayOpacity = Math.min(
              1,
              (scrollProgress - 0.25) * (1 / 0.4)
            );

            // Keep fade overlay hidden
            gsap.set([fadeOverlay], {
              opacity: 0,
            });
          }

          gsap.set([svgOverlay], {
            scale: overlayScale,
            opacity: svgOverlayOpacity,
          });

          if (scrollProgress > 0.6 && scrollProgress < 0.85) {
            const overlayCopyrevealProgress =
              (scrollProgress - 0.6) * (1 / 0.25);
            const gradientSpread = 100;
            const gradientBottomPosition =
              240 - overlayCopyrevealProgress * 280;
            const gradientTopPosition = gradientBottomPosition - gradientSpread;
            const overlayCopyScale = 1.25 - 0.25 * overlayCopyrevealProgress;

            overlayCopy.style.background = `linear-gradient(to bottom, #111117 0%, #111117 ${gradientTopPosition}%, #e66461 ${gradientBottomPosition}%, #e66461 100%)`;
            overlayCopy.style.backgroundClip = "text";

            gsap.set([overlayCopy], {
              scale: overlayCopyScale,
              opacity: overlayCopyrevealProgress,
            });
          } else if (scrollProgress < 0.6) {
            gsap.set([overlayCopy], {
              opacity: 0,
            });
          }
        } else {
          gsap.set([heroImgLogo, heroImgCopy], {
            opacity: 0,
          });
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [lenis]);

  return (
    <>
      <section className="hero">
        <div className="hero-img-container" ref={heroImgContainerRef}>
          <Image
            src="/img/landscape-hero.png"
            alt="Hero Image"
            width={1000}
            height={1000}
          />
          <div className="hero-img-logo" ref={heroImgLogoRef}>
            <Image
              src="/img/token8-white.svg"
              alt="Hero Image"
              width={1000}
              height={1000}
            />
          </div>
          <div className="hero-img-copy" ref={heroImgCopyRef}>
            <p>Scroll Down to reveal</p>
          </div>
        </div>
        <div className="fade-overlay" ref={fadeOverlayRef}></div>
        <div className="overlay" ref={svgOverlayRef}>
          <svg
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <defs>
              <mask id="logoRevealMask">
                <rect width="100%" height="100%" fill="white" />
                <path id="logoMask" ref={logoMaskRef} fill="black" />
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="#111117"
              mask="url(#logoRevealMask)"
            />
          </svg>
        </div>
        <div className="logo-container" ref={logoContainerRef}></div>
        <div className="overlay-copy">
          <h1 ref={overlayCopyRef}>
            Financial <br />
            EXPERIMENT 425 <br />
            By Token8
          </h1>
        </div>
      </section>
      {/* <Section2 /> */}
    </>
  );
}
