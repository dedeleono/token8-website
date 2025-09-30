"use client";

import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { getLenis } from "@/lib/lenis";
import Lenis from "lenis";

export default function Section2() {
  const heroHeaderRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const animatedIconsRef = useRef<HTMLDivElement>(null);
  const textSegmentsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const placeHoldersRef = useRef<(HTMLDivElement | null)[]>([]);
  const iconElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const duplicateIconsRef = useRef<HTMLElement[]>([]);
  const textAnimationOrderRef = useRef<{ segment: HTMLSpanElement; originalIndex: number }[]>([]);
  const cachedPositionsRef = useRef<{
    iconRects: DOMRect[];
    targetRects: DOMRect[];
  } | null>(null);

  // Get global Lenis instance
  useEffect(() => {
    const lenisInstance = getLenis();
    setLenis(lenisInstance);
  }, []);

  const cleanupDuplicateIcons = () => {
    duplicateIconsRef.current.forEach((duplicateIcon) => {
      if (duplicateIcon.parentNode) {
        duplicateIcon.parentNode.removeChild(duplicateIcon);
      }
    });
    duplicateIconsRef.current = [];
    cachedPositionsRef.current = null;
  };

  useGSAP(() => {
    if (!lenis) return;

    gsap.registerPlugin(ScrollTrigger);

    // Lenis is already connected globally

    const heroHeader = heroHeaderRef.current;
    const heroSection = heroSectionRef.current;
    const animatedIcons = animatedIconsRef.current;
    const textSegments = textSegmentsRef.current.filter(Boolean) as HTMLSpanElement[];
    const placeHolders = placeHoldersRef.current.filter(Boolean) as HTMLDivElement[];
    const iconElements = iconElementsRef.current.filter(Boolean) as HTMLDivElement[];

    if (!heroHeader || !heroSection || !animatedIcons || textSegments.length === 0) {
      return;
    }

    // Setup text animation order
    textAnimationOrderRef.current = [];
    textSegments.forEach((segment, i) => {
      textAnimationOrderRef.current.push({ segment, originalIndex: i });
    });

    // Shuffle array
    for (let i = textAnimationOrderRef.current.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [textAnimationOrderRef.current[i], textAnimationOrderRef.current[j]] = [
        textAnimationOrderRef.current[j],
        textAnimationOrderRef.current[i],
      ];
    }

    const isMobile = window.innerWidth < 1000;
    const headerIconSize = isMobile ? 30 : 60;
    const currentIconSize = iconElements[0]?.getBoundingClientRect().width || 60;
    const exactScale = headerIconSize / currentIconSize;

    const scrollTrigger = ScrollTrigger.create({
      trigger: heroSection,
      start: "top top",
      end: `+=${window.innerHeight * 8}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        // Reset all text segments
        textSegments.forEach((segment) => {
          gsap.set(segment, { opacity: 0 });
        });

        if (progress < 0.3) {
          const moveProgress = progress / 0.3;
          const containerMoveY = -window.innerHeight * 0.3 * moveProgress;

          if (progress < 0.15) {
            const headerProgress = progress / 0.15;
            const headerMoveY = -50 * headerProgress;
            const headerOpacity = 1 - headerProgress;

            gsap.set(heroHeader, {
              transform: `translate(-50%, calc(-50% + ${headerMoveY}px))`,
              opacity: headerOpacity,
            });
          } else {
            gsap.set(heroHeader, {
              transform: `translate(-50%, calc(-50% + -50px))`,
              opacity: 0,
            });
          }

          cleanupDuplicateIcons();

          gsap.set(animatedIcons, {
            x: 0,
            y: containerMoveY,
            scale: 1,
            opacity: 1,
          });

          iconElements.forEach((icon, index) => {
            const staggerDelay = index * 0.1;
            const iconStart = staggerDelay;
            const iconEnd = staggerDelay + 0.5;

            const iconProgress = gsap.utils.mapRange(
              iconStart,
              iconEnd,
              0,
              1,
              moveProgress
            );

            const clampedProgress = Math.max(0, Math.min(1, iconProgress));
            const startOffset = -containerMoveY;
            const individualY = startOffset * (1 - clampedProgress);

            gsap.set(icon, {
              x: 0,
              y: individualY,
            });
          });
        } else if (progress < 0.6) {
          const scaleProgress = (progress - 0.3) / 0.3;

          gsap.set(heroHeader, {
            transform: `translate(-50%, calc(-50% + -50px))`,
            opacity: 0,
          });

          if (progress > 0.5) {
            heroSection.style.backgroundColor = "#e3e3bd";
          } else {
            heroSection.style.backgroundColor = "#111117";
          }

          cleanupDuplicateIcons();

          const targetCenterY = window.innerHeight / 2;
          const targetCenterX = window.innerWidth / 2;
          const containerRect = animatedIcons.getBoundingClientRect();
          const currentCenterX = containerRect.left + containerRect.width / 2;
          const currentCenterY = containerRect.top + containerRect.height / 2;
          const deltaX = (targetCenterX - currentCenterX) * scaleProgress;
          const deltaY = (targetCenterY - currentCenterY) * scaleProgress;
          const baseY = -window.innerHeight * 0.3;
          const currentScale = 1 + (exactScale - 1) * scaleProgress;

          gsap.set(animatedIcons, {
            x: deltaX,
            y: baseY + deltaY,
            scale: currentScale,
            opacity: 1,
          });

          iconElements.forEach((icon) => {
            gsap.set(icon, { x: 0, y: 0 });
          });
        } else if (progress < 0.75) {
          const moveProgress = (progress - 0.6) / 0.15;
          
          gsap.set(heroHeader, {
            transform: `translate(-50%, calc(-50% + -50px))`,
            opacity: 0,
          });

          heroSection.style.backgroundColor = "#e3e3bd";

          const targetCenterY = window.innerHeight / 2;
          const targetCenterX = window.innerWidth / 2;
          const containerRect = animatedIcons.getBoundingClientRect();
          const currentCenterX = containerRect.left + containerRect.width / 2;
          const currentCenterY = containerRect.top + containerRect.height / 2;
          const deltaX = targetCenterX - currentCenterX;
          const deltaY = targetCenterY - currentCenterY;
          const baseY = -window.innerHeight * 0.3;

          gsap.set(animatedIcons, {
            x: deltaX,
            y: baseY + deltaY,
            scale: exactScale,
            opacity: 0,
          });

          iconElements.forEach((icon) => {
            gsap.set(icon, { x: 0, y: 0 });
          });

          // Create duplicate icons if they don't exist
          if (duplicateIconsRef.current.length === 0) {
            // Cache positions once when creating duplicates
            cachedPositionsRef.current = {
              iconRects: iconElements.map(icon => icon.getBoundingClientRect()),
              targetRects: placeHolders.map(holder => holder.getBoundingClientRect())
            };

            iconElements.forEach((icon, index) => {
              const duplicate = icon.cloneNode(true) as HTMLElement;
              duplicate.className = "duplicate-icon";
              duplicate.style.position = "absolute";
              duplicate.style.width = headerIconSize + "px";
              duplicate.style.height = headerIconSize + "px";
              duplicate.style.zIndex = "1000";

              document.body.appendChild(duplicate);
              duplicateIconsRef.current.push(duplicate);
            });
          }

          // Animate duplicate icons using cached positions
          if (cachedPositionsRef.current) {
            duplicateIconsRef.current.forEach((duplicate, index) => {
              if (index < placeHolders.length && cachedPositionsRef.current) {
                const iconRect = cachedPositionsRef.current.iconRects[index];
                const startCenterX = iconRect.left + iconRect.width / 2;
                const startCenterY = iconRect.top + iconRect.height / 2;
                const startPageX = startCenterX + window.pageXOffset;
                const startPageY = startCenterY + window.pageYOffset;

                const targetRect = cachedPositionsRef.current.targetRects[index];
                const targetCenterX = targetRect.left + targetRect.width / 2;
                const targetCenterY = targetRect.top + targetRect.height / 2;
                const targetPageX = targetCenterX + window.pageXOffset;
                const targetPageY = targetCenterY + window.pageYOffset;

              const moveX = targetPageX - startPageX;
              const moveY = targetPageY - startPageY;

              let currentX = 0;
              let currentY = 0;

              if (moveProgress < 0.5) {
                const verticalProgress = moveProgress / 0.5;
                currentY = moveY * verticalProgress;
              } else {
                const horizontalProgress = (moveProgress - 0.5) / 0.5;
                currentY = moveY;
                currentX = moveX * horizontalProgress;
              }

              const finalPageX = startPageX + currentX;
              const finalPageY = startPageY + currentY;

                duplicate.style.left = finalPageX - headerIconSize / 2 + "px";
                duplicate.style.top = finalPageY - headerIconSize / 2 + "px";
                duplicate.style.opacity = "1";
                duplicate.style.display = "flex";
              }
            });
          }
        } else {
          // Final phase
          gsap.set(heroHeader, {
            transform: `translate(-50%, calc(-50% + -100px))`,
            opacity: 0,
          });

          heroSection.style.backgroundColor = "#e3e3bd";

          gsap.set(animatedIcons, {
            opacity: 0,
          });

          // Position duplicates at final positions using cached positions
          if (cachedPositionsRef.current) {
            duplicateIconsRef.current.forEach((duplicate, index) => {
              if (index < placeHolders.length && cachedPositionsRef.current) {
                const targetRect = cachedPositionsRef.current.targetRects[index];
                const targetCenterX = targetRect.left + targetRect.width / 2;
                const targetCenterY = targetRect.top + targetRect.height / 2;
                const targetPageX = targetCenterX + window.pageXOffset;
                const targetPageY = targetCenterY + window.pageYOffset;

                duplicate.style.left = targetPageX - headerIconSize / 2 + "px";
                duplicate.style.top = targetPageY - headerIconSize / 2 + "px";
                duplicate.style.opacity = "1";
                duplicate.style.display = "flex";
              }
            });
          }
        }

        // Text animation
        textAnimationOrderRef.current.forEach((item, randomIndex) => {
          const segmentStart = 0.75 + randomIndex * 0.03;
          const segmentEnd = segmentStart + 0.015;

          const segmentProgress = gsap.utils.mapRange(segmentStart, segmentEnd, 0, 1, progress);
          const clampedProgress = Math.max(0, Math.min(1, segmentProgress));

          gsap.set(item.segment, { opacity: clampedProgress });
        });
      },
    });

    return () => {
      cleanupDuplicateIcons();
      scrollTrigger.kill();
    };
  }, [lenis]);

  return (
    <>
      <section ref={heroSectionRef} className="hero-section2 flex items-center justify-center overflow-hidden">
        <div ref={heroHeaderRef} className="hero-section2-header">
          <h1 className="h1-section2">Coming Soon</h1>
          <p className="p-section2">
            The world is changing. The future is now.
          </p>
        </div>

        <div ref={animatedIconsRef} className="animated-icons-section2">
          <div ref={(el) => { iconElementsRef.current[0] = el; }} className="animated-icon-section2 section2-icon-1">
            <img src="/file.svg" alt="Icon 1" />
          </div>
          <div ref={(el) => { iconElementsRef.current[1] = el; }} className="animated-icon-section2 section2-icon-2">
            <img src="/window.svg" alt="Icon 2" />
          </div>
          <div ref={(el) => { iconElementsRef.current[2] = el; }} className="animated-icon-section2 section2-icon-3">
            <img src="/next.svg" alt="Icon 3" />
          </div>
          <div ref={(el) => { iconElementsRef.current[3] = el; }} className="animated-icon-section2 section2-icon-4">
            <img src="/vercel.svg" alt="Icon 4" />
          </div>
          <div ref={(el) => { iconElementsRef.current[4] = el; }} className="animated-icon-section2 section2-icon-5">
            <img src="/img/token-green.svg" alt="Icon 5" />
          </div>
        </div>
        
        <h1 className="animated-text-section2 h1-section2">
          <div ref={(el) => { placeHoldersRef.current[0] = el; }} className="placeholder-icon-section2"></div>
          <span ref={(el) => { textSegmentsRef.current[0] = el; }} className="text-segment-section2">Delve into coding</span>
          <div ref={(el) => { placeHoldersRef.current[1] = el; }} className="placeholder-icon-section2"></div>
          <span ref={(el) => { textSegmentsRef.current[1] = el; }} className="text-segment-section2">without clutter.</span>
          <span ref={(el) => { textSegmentsRef.current[2] = el; }} className="text-segment-section2">Unlock source code </span>
          <div ref={(el) => { placeHoldersRef.current[2] = el; }} className="placeholder-icon-section2"></div>
          <span ref={(el) => { textSegmentsRef.current[3] = el; }} className="text-segment-section2">for every tutorial</span>
          <div ref={(el) => { placeHoldersRef.current[3] = el; }} className="placeholder-icon-section2"></div>
          <span ref={(el) => { textSegmentsRef.current[4] = el; }} className="text-segment-section2">
            published on the Codegrid
          </span>
          <div ref={(el) => { placeHoldersRef.current[4] = el; }} className="placeholder-icon-section2"></div>
          <span ref={(el) => { textSegmentsRef.current[5] = el; }} className="text-segment-section2">YouTube channel.</span>
        </h1>
      </section>
      <section className="outro-section2 flex items-center justify-center overflow-hidden">
        <h1 className="h1-section2">Start today</h1>
      </section>
    </>
  );
}
