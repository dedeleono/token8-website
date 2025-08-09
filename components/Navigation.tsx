import Image from "next/image";
import { Button } from "./ui/button";
import { Send, X } from "lucide-react";

export function Navigation() {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-[#33604C] rounded-xl px-8 py-4 flex items-center gap-8 shadow-lg">
        <div className="flex items-center gap-2">
          <Image
            src="/img/token8-white.svg"
            alt="TOKEN8"
            width={80}
            height={24}
            className="h-6 w-auto"
          />
        </div>

        <div className="w-1 h-1 bg-white rounded-full"></div>

        <nav className="flex items-center gap-8 font-anantason">
          <a
            href="#"
            className="text-white font-black hover:text-gray-200 transition-colors"
          >
            ABOUT
          </a>
          <a
            href="#"
            className="text-white font-black hover:text-gray-200 transition-colors"
          >
            FAQ
          </a>
        </nav>

        <div className="w-1 h-1 bg-white rounded-full"></div>

        <div className="flex items-center">
          <Image
            src="/img/X.svg"
            alt="X"
            width={80}
            height={24}
            className="h-4 w-auto"
          />
        </div>
      </div>
    </div>
  );
}