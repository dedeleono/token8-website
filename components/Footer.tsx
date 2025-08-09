import Image from 'next/image'
import { Button } from './ui/button';
import { Send, X } from 'lucide-react';
import Link from 'next/link';

export default function Footer(){
    return (
      <footer className="relative bg-[#EAE6D6] overflow-hidden">
        {/* Desktop Layout - Hidden on Mobile */}
        <div className="hidden lg:block h-[500px]">
          {/* TOKEN8 Logo - Left Side */}
          <div className="absolute left-8 bottom-0 top-0 z-10 flex items-center">
            <Image
              src="/img/token-green.svg"
              alt="TOKEN8"
              width={180}
              height={54}
              className="h-[calc(27vh-150px)] w-auto "
            />
          </div>

          {/* House Image - Right Side */}
          <div className="absolute right-0 bottom-0 w-1/2 h-full flex items-end justify-end">
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
          <div className="absolute bottom-0 right-0 bg-[#33604C] px-19 py-13 flex flex-col items-end gap-4 rounded-tl-lg">
            {/* Social Icons */}
            <div className="flex gap-3 mb-3">
              <Link href="https://x.com/token8_">
                <div className="bg-[#9D4F3B] p-2 rounded-md">
                  <Image
                    src="/img/X.svg"
                    alt="X"
                    width={80}
                    height={24}
                    className="h-4 w-auto"
                  />
                </div>
              </Link>
            </div>

            {/* Copyright */}
            <div className="ml-4">
              <p className="text-white font-anantason text-md font-black whitespace-nowrap">
                © 2025 TOKEN8 | ALL RIGHTS RESERVED
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Hidden on Desktop */}
        <div className="lg:hidden flex flex-col">
          {/* TOKEN8 Logo */}
          <div className="flex justify-center py-8 px-6">
            <Image
              src="/img/token8-black.svg"
              alt="TOKEN8"
              width={180}
              height={54}
              className="h-20 w-auto"
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

          {/* Social and Copyright */}
          <div className="px-6 py-8">
            <div className="bg-[#33604C] px-6 py-4 rounded-lg flex flex-col items-center gap-3">
              {/* Social Icons */}
              <div className="flex gap-3">
                <div className="bg-[#9D4F3B] p-2 rounded-md">
                  <Image
                    src="/img/X.svg"
                    alt="X"
                    width={80}
                    height={24}
                    className="h-4 w-auto"
                  />
                </div>
              </div>

              {/* Copyright */}
              <p className="text-white font-anantason text-sm font-black text-center">
                © 2025 TOKEN8 | ALL RIGHTS RESERVED
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
}