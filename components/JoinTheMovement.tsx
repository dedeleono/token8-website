import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function JoinTheMovement() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#33604C] via-[#374151] to-[#9D4F3B]" id="join-movement">
      {/* Main Content Container */}
      <div className="h-full flex flex-col lg:flex-row lg:items-center lg:justify-between pt-12 lg:pt-24 pb-8 lg:pb-16">
        {/* Left Content */}
        <div className="flex-1 max-w-3xl px-6 lg:px-12 lg:ml-8 mb-8 lg:mb-0">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <p className="text-white/80 font-black font-anantason tracking-wide text-sm lg:text-md uppercase">
                THE FUTURE IS ON-CHAIN
              </p>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-anantason text-white leading-tight">
                JOIN THE MOVEMENT
              </h2>
              <p className="text-white/90 font-nunito text-base lg:text-lg max-w-md leading-relaxed">
                Markets are going on-chain. Token8 is building the rails.
              </p>
              <p className="text-white/80 font-nunito text-sm lg:text-base leading-relaxed">
                Don't miss the opportunity to be part of the real estate tokenization revolution. 
                Join Token8 today and start building your global real estate portfolio with just $500.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-row gap-4">
              <Button
                className="bg-white hover:bg-white/90 font-anantason text-[#33604C] px-6 lg:px-8 py-3 rounded-md font-black uppercase text-sm lg:text-base cursor-pointer"
                size="lg"
              >
                🔗 JOIN WAITLIST
              </Button>
              <Button
                variant="outline"
                className="border-white/30 w-full lg:w-auto bg-transparent font-anantason font-black border-2 text-white hover:bg-white hover:text-[#33604C] px-6 lg:px-8 py-3 rounded-md text-sm lg:text-base cursor-pointer"
                size="lg"
              >
                🧠 DOWNLOAD WHITEPAPER
              </Button>
              <Button
                variant="outline"
                className="border-white/30 w-full lg:w-auto bg-transparent font-anantason font-black border-2 text-white hover:bg-white hover:text-[#33604C] px-6 lg:px-8 py-3 rounded-md text-sm lg:text-base cursor-pointer"
                size="lg"
              >
                💬 JOIN DISCORD
              </Button>
            </div>
          </div>
        </div>

        {/* Right Content - Stats */}
        <div className="flex-1 flex justify-end items-center min-h-[350px] lg:min-h-[500px]">
          <div className="w-full max-w-xl lg:max-w-none px-6 lg:px-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
              <h3 className="text-2xl font-bold font-anantason text-white mb-8 text-center">
                Join the Success
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <h4 className="text-3xl font-bold font-anantason text-white mb-2">$350K+</h4>
                  <p className="font-nunito text-white/80 text-sm">Capital Raised</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold font-anantason text-white mb-2">700+</h4>
                  <p className="font-nunito text-white/80 text-sm">Active Investors</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold font-anantason text-white mb-2">2</h4>
                  <p className="font-nunito text-white/80 text-sm">Properties Launched</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold font-anantason text-white mb-2">100%</h4>
                  <p className="font-nunito text-white/80 text-sm">Funding Success</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="font-nunito text-white/70 text-sm">
                  Questions? Reach out at{" "}
                  <Link href="mailto:hello@token8.io" className="text-white underline hover:text-white/80 transition-colors">
                    hello@token8.io
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
