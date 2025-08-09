import Image from "next/image";
import { Button } from "./ui/button";
import { Send, X } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Main Content Container */}
      <div className="h-full flex items-start justify-between pt-32 lg:pt-40">
        {/* Left Content - Edge-to-Edge Image */}
        <div className="flex-1 flex justify-start items-center h-screen">
          <Image
            src="/img/house-left.png"
            alt="Detailed modern house 3D illustration"
            width={600}
            height={600}
            className="w-full max-w-none h-auto object-contain"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 max-w-2xl px-6 lg:px-8 lg:mr-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#33604C] font-black font-anantason tracking-wide text-md uppercase">
                ABOUT
              </p>
              <h2 className="text-5xl lg:text-6xl font-bold font-anantason text-[#484d56] leading-tight">
                WHO IS TOKEN8?
              </h2>
              <p className="text-[#6B7280] font-nunito text-lg max-w-xl leading-relaxed">
                Built by a team with deep roots in real estate, blockchain, and
                finance.
              </p>
              <p className="text-[#6B7280] font-nunito text-lg max-w-xl leading-relaxed">
                Join our Telegram or follow us on X to keep updated with the
                latest news and announcements.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <div className="bg-[#9D4F3B] p-2 rounded-md">
                <Image
                  src="/img/X.svg"
                  alt="X"
                  width={80}
                  height={24}
                  className="h-5 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
