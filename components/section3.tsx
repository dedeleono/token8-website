"use client";

import React, { useRef } from "react";
import Image from "next/image";
import CardS3 from "./Card-S3";
import { cardsData } from "@/lib/components-data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenisContext } from "./LenisWrapper";

export default function Section3() {

  const containerRef = useRef<HTMLDivElement>(null);

  
  const lenis = useLenisContext();
  useGSAP(() => {
    if (typeof window === "undefined") return;

    const cards = gsap.utils.toArray<HTMLElement>(".card-s3");
    ScrollTrigger.create({
      trigger: cards[0],
      start: "top 35%",
      endTrigger: cards[cards.length - 1],
      pin: ".intro-section3",
      pinSpacing: false,
    });

    cards.forEach((card, index)=>{
      const isLastCard = index === cards.length - 1;
      const cardInner = card.querySelector(".card-s3-inner");

      if(!isLastCard){
        ScrollTrigger.create({
          trigger: card,
          start: "top 35%",
          endTrigger: ".outro-section3",
          end: "top 65%",
          pin: true,
          pinSpacing: false,
        });

        gsap.to(cardInner, {
          y: `-${(cards.length - index) * 14}vh`,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 35%",
            endTrigger: ".outro-section3",
            end: "top 65%",
            scrub: true,
          }
        })
      }
    })
    return()=>{
      // Kill all ScrollTriggers created by this component
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger && (
          trigger.trigger.classList?.contains("card-s3") ||
          trigger.trigger.classList?.contains("intro-section3") ||
          trigger.trigger === cards[0]
        )) {
          trigger.kill();
        }
      });
    }
  }, { scope: containerRef, dependencies: [lenis] });

  return (
    <div ref={containerRef}>
      <section className="hero-section3">
        <Image
          src="/img/section3-hero.png"
          alt="Hero Image"
          width={1000}
          height={1000}
        />
      </section>
      <section className="intro-section3">
        <h1 className="h1-section3">
          Creating a standout brands for startups that bring joy and leave
          lasting impressions
        </h1>
      </section>
      <section className="cards-section3">
      {cardsData.map((card, index)=>{
        return(
          <CardS3 key={index} {...card} index={index} />
        )
      })}
      </section>
      <section className="outro-section3">
        <h1 className="h1-section3">
          A brand that leaves a mark
        </h1>
      </section>
    </div>
  );
}
