import Image from 'next/image'
import { Button } from './ui/button';
import { Send, X } from 'lucide-react';
import Link from 'next/link';

export default function Footer(){
    return (
      <footer className="relative bg-[#33604C] overflow-hidden">
        {/* Desktop Layout - Hidden on Mobile */}
        <div className="hidden lg:block h-[600px]">
          {/* TOKEN8 Logo - Left Side with more breathing room */}
          <div className="absolute left-12 bottom-16 z-10 flex items-end">
            <Image
              src="/img/token8-white.svg"
              alt="TOKEN8"
              width={180}
              height={54}
              className="h-[calc(25vh-100px)] w-auto"
            />
          </div>

          {/* House Image - Right Side with better positioning */}
          <div className="absolute right-0 bottom-0 w-[55%] h-full flex items-end justify-end">
            <Image
              src="/img/house-right.png"
              alt="Modern house 3D illustration"
              width={600}
              height={600}
              className="w-full h-full object-cover object-center"
              priority
            />
          </div>

          {/* White Navigation Bar - Bottom Right */}
          <div className="absolute bottom-0 right-0 bg-white px-19 py-13 flex flex-col items-end gap-4 rounded-tl-lg">
            {/* Social Icons */}
            <div className="flex gap-3 mb-3">
              <Link href="https://x.com/token8_">
                <div className="bg-[#9D4F3B] p-3 rounded-lg hover:bg-[#8A4433] transition-colors duration-200">
                  <Image
                    src="/img/X.svg"
                    alt="X"
                    width={80}
                    height={24}
                    className="h-5 w-auto"
                  />
                </div>
              </Link>
            </div>

            {/* Copyright with better typography */}
            <div className="text-center">
              <p className="text-black font-anantason text-sm font-black leading-relaxed">
                © 2025 TOKEN8 | ALL RIGHTS RESERVED
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Hidden on Desktop */}
        <div className="lg:hidden flex flex-col">
          {/* TOKEN8 Logo with more generous spacing */}
          <div className="flex justify-center py-12 px-6">
            <Image
              src="/img/token8-white.svg"
              alt="TOKEN8"
              width={180}
              height={54}
              className="h-24 w-auto"
            />
          </div>

          {/* House Image - Edge to Edge */}
          <div className="w-full">
            <Image
              src="/img/house-right.png"
              alt="Modern house 3D illustration"
              width={600}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Social and Copyright with improved layout */}
          <div className="px-6 py-12">
            <div className="bg-white px-8 py-6 rounded-xl flex flex-col items-center gap-6 shadow-lg">
              {/* Social Icons with better spacing */}
              <div className="flex gap-4">
                <Link href="https://x.com/token8_">
                  <div className="bg-[#9D4F3B] p-3 rounded-lg">
                    <Image
                      src="/img/X.svg"
                      alt="X"
                      width={80}
                      height={24}
                      className="h-5 w-auto"
                    />
                  </div>
                </Link>
              </div>

              {/* Copyright with improved typography */}
              <p className="text-black font-anantason text-sm font-black text-center leading-relaxed">
                © 2025 TOKEN8 | ALL RIGHTS RESERVED
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
}