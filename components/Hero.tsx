import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden" id="home">
      {/* Main Content Container */}
      <div className="h-full flex flex-col lg:flex-row lg:items-start lg:justify-between pt-20 lg:pt-40">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl px-6 lg:px-8 lg:ml-16 mb-8 lg:mb-0">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <p className="text-[#33604C] font-black font-anantason tracking-wide text-sm lg:text-md uppercase">
                TOKEN 8
              </p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-anantason font-bold text-[#374151] leading-tight">
                COMING SOON...
              </h1>
              <p className="text-[#484d56] font-nunito text-base lg:text-lg max-w-md leading-relaxed">
                Token8 is unlocking access to real-world real estate through
                tokenization on Solana.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-[#33604C] hover:bg-[#2A4F3F] font-anantason text-white px-6 lg:px-8 py-3 rounded-md font-black uppercase text-sm lg:text-base cursor-pointer"
                size="lg"
              >
                WHITEPAPER
              </Button>
              <Link href="#about">
                <Button
                  variant="outline"
                  className="border-[#9D4F3B] bg-transparent font-anantason font-black border-2 text-[#9D4F3B] hover:bg-[#9D4F3B] hover:text-white px-6 lg:px-8 py-3 rounded-md text-sm lg:text-base cursor-pointer"
                  size="lg"
                >
                  ABOUT US
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1 flex justify-center lg:justify-end items-center min-h-[400px] lg:h-screen lg:px-0">
          <div className="w-full max-w-lg lg:max-w-none">
            <Image
              src="/img/house-right.png"
              alt="Modern house 3D illustration"
              width={600}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
