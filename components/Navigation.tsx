"use client"

import Image from "next/image";
import { Button } from "./ui/button";
import { Send, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export function Navigation() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Hide navigation when footer is visible on screen
      const shouldHide = footerRect.top < windowHeight;
      setIsHidden(shouldHide);
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      {/* Desktop Navigation - Hidden on Mobile */}
      <div
        className={`hidden lg:block fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          isHidden
            ? "opacity-0 translate-y-full pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <div className="bg-[#33604C] rounded-xl px-8 py-4 flex items-center gap-8 shadow-lg">
          <a href="#home" className="flex items-center gap-2">
            <Image
              src="/img/token8-white.svg"
              alt="TOKEN8"
              width={80}
              height={24}
              className="h-6 w-auto"
            />
          </a>

          <div className="w-1 h-1 bg-white rounded-full"></div>

          <nav className="flex items-center gap-8 font-anantason">
            <a
              href="#about"
              className="text-white font-black hover:text-gray-200 transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#faq"
              className="text-white font-black hover:text-gray-200 transition-colors"
            >
              FAQ
            </a>
          </nav>

          <div className="w-1 h-1 bg-white rounded-full"></div>

          <div className="flex items-center">
            <Link href="https://x.com/token8_">
              <Image
                src="/img/X.svg"
                alt="X"
                width={80}
                height={24}
                className="h-4 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Hidden on Desktop */}
      <div
        className={`lg:hidden fixed bottom-4 left-4 right-4 z-50 transition-all duration-300 ${
          isHidden
            ? "opacity-0 translate-y-full pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <div className="bg-[#33604C] rounded-lg px-4 py-3 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-2">
            <Image
              src="/img/token8-white.svg"
              alt="TOKEN8"
              width={80}
              height={24}
              className="h-5 w-auto"
            />
          </div>

          <nav className="flex items-center gap-6 font-anantason">
            <a
              href="#about"
              className="text-white font-black text-sm hover:text-gray-200 transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#faq"
              className="text-white font-black text-sm hover:text-gray-200 transition-colors"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center">
            <Image
              src="/img/X.svg"
              alt="X"
              width={80}
              height={24}
              className="h-3 w-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}