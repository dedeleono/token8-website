import Image from "next/image";
import { Button } from "./ui/button";
import { Send, X } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      id="about"
    >
      {/* Main Content Container */}
      <div className="h-full flex flex-col lg:flex-row lg:items-start lg:justify-between pt-20 lg:pt-40">
        {/* Left Content - Image (Order changed for mobile) */}
        <div className="flex-1 flex justify-start items-center min-h-[400px] lg:h-screen order-2 lg:order-1 lg:px-0">
          <div className="w-full max-w-lg lg:max-w-none">
            <Image
              src="/img/house-left.png"
              alt="Detailed modern house 3D illustration"
              width={600}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 lg:max-w-2xl px-6 lg:px-8 lg:mr-16 mb-8 lg:mb-0 order-1 lg:order-2">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <p className="text-[#33604C] font-black font-anantason tracking-wide text-sm lg:text-md uppercase lg:text-left text-right">
                ABOUT
              </p>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-anantason text-[#484d56] leading-tight lg:text-left text-right">
                WHO IS TOKEN8?
              </h2>
              <p className="text-[#6B7280] font-nunito text-base lg:text-lg lg:max-w-xl leading-relaxed lg:text-left text-right">
                Built by a team with deep roots in real estate, blockchain, and
                finance.
              </p>
              <p className="text-[#6B7280] font-nunito text-base lg:text-lg lg:max-w-xl leading-relaxed lg:text-left text-right">
                Join our Discord or follow us on X to keep updated with the
                latest news and announcements.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 lg:justify-start justify-end">
              <Link href="https://x.com/token8_">
                <div className="bg-[#9D4F3B] p-2 rounded-md">
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
          </div>
        </div>
      </div>
    </section>
  );
}
