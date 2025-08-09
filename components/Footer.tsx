import Image from 'next/image'
import { Button } from './ui/button';
import { Send, X } from 'lucide-react';

export default function Footer(){
    return (
      <footer className="relative bg-[#EAE6D6] h-[500px] overflow-hidden">
        {/* TOKEN8 Logo - Left Side */}
        <div className="absolute left-8 bottom-0 top-0 z-10 flex items-center">
          <Image
            src="/img/token-green.svg"
            alt="TOKEN8"
            width={180}
            height={54}
            className="h-[calc(27vh-100px)] w-auto "
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
        <div className="absolute bottom-0 right-0 bg-[#33604C] px-23 py-15 flex flex-col items-end gap-4 rounded-tl-lg">
          {/* Social Icons */}
          <div className="flex gap-3 mb-3">
            <div className='bg-[#9D4F3B] p-2 rounded-md'>
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
          <div className="ml-4">
            <p className="text-white font-anantason text-md font-black whitespace-nowrap">
              © 2025 TOKEN8 | ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>
    );
}