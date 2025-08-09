import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Main Content Container */}
      <div className="h-full flex items-start justify-between pt-32 lg:pt-40">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl px-6 lg:px-8 lg:ml-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#33604C] font-black font-anantason tracking-wide text-md uppercase">
                TOKEN 8
              </p>
              <h1 className="text-5xl font-anantason lg:text-6xl font-bold text-[#374151] leading-tight">
                COMING SOON...
              </h1>
              <p className="text-[#484d56] font-nunito text-lg max-w-md leading-relaxed">
                Token8 is unlocking access to real-world real estate through
                tokenization on Solana.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <Button
                className="bg-[#33604C] hover:bg-[#2A4F3F] font-anantason text-white px-8 py-3 rounded-md font-black uppercase"
                size="lg"
              >
                WHITEPAPER
              </Button>
              <Button
                variant="outline"
                className="border-[#9D4F3B] bg-transparent font-anantason font-black border-2 text-[#9D4F3B] hover:bg-[#9D4F3B] hover:text-white px-8 py-3 rounded-md"
                size="lg"
              >
                ABOUT US
              </Button>
            </div>
          </div>
        </div>

        {/* Right Content - Edge-to-Edge Image */}
        <div className="flex-1 flex justify-end items-center h-screen">
          <Image
            src="/img/house-right.png"
            alt="Modern house 3D illustration"
            width={600}
            height={600}
            className="w-full max-w-none h-auto object-contain"
            priority
          />
        </div>
      </div>
    </main>
  );
}
