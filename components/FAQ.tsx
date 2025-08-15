import * as React from "react";
import { Plus } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

export default function FAQSection() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden px-8 py-16 flex items-center"
      id="faq"
    >
      {/* Background decorative elements */}

      <div className="relative max-w-4xl mx-auto w-full pt-13">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-anantason font-black text-[#484d56] mb-4">
            QUESTIONS?
          </h2>
          <p className="text-[#6B7280] font-nunito text-lg max-w-2xl mx-auto">
            Find answers to common questions about Token8 and real estate
            tokenization
          </p>
        </div>

        <div className="space-y-6">
          <Collapsible className="group border-b border-black">
            <div className=" border-b border-b-[#e5e7eb]/50 p-8 transition-all duration-300 group-data-[state=open]:border-[#33604C]/20 ">
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left cursor-pointer">
                <span className="text-[#374151] font-black font-anantason text-lg lg:group-data-[state=open]:text-xl group-hover:text-[#33604C] group-data-[state=open]:text-[#9D4F3B] transition-all duration-101">
                  WHAT BLOCKCHAIN DO YOU USE?
                </span>
                <div className="flex-shrink-0 ml-4">
                  <Plus className="w-7 h-7 text-[#6B7280] group-data-[state=open]:rotate-45 group-data-[state=open]:text-red-600 group-hover:text-[#33604C] transition-all duration-300" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-6">
                <div className="border-t border-[#33604C]/20 pt-6">
                  <p className="text-[#4B5563] leading-relaxed lg:text-lg text-md font-nunito">
                    Solana, for fast, low-cost transactions and scalability.
                  </p>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>

          <Collapsible className="group border-b border-black">
            <div className=" border-b border-b-[#e5e7eb]/50 p-8 transition-all duration-300 group-data-[state=open]:border-[#33604C]/20 ">
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left cursor-pointer">
                <span className="text-[#374151] font-black font-anantason text-lg lg:group-data-[state=open]:text-xl group-hover:text-[#33604C] group-data-[state=open]:text-[#9D4F3B] transition-all duration-101">
                  HOW DO I INVEST?
                </span>
                <div className="flex-shrink-0 ml-4">
                  <Plus className="w-7 h-7 text-[#6B7280] group-data-[state=open]:rotate-45 group-data-[state=open]:text-red-600 group-hover:text-[#33604C] transition-all duration-300" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-6">
                <div className="border-t border-[#33604C]/20 pt-6">
                  <div className="text-[#4B5563] leading-relaxed lg:text-lg text-md font-nunito space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="bg-[#33604C] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span>Connect your wallet (like Phantom or TipLink)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-[#33604C] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        2
                      </span>

                      <span>Complete KYC verification</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-[#33604C] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span>Choose an asset</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-[#33604C] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        4
                      </span>
                      <span>Buy tokens using stablecoins</span>
                    </div>
                    <p className="text-[#6B7280] text-sm mt-4 italic">
                      Our platform guides you through each step with clear
                      instructions and support.
                    </p>
                  </div>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>

          <Collapsible className="group border-b border-black">
            <div className=" border-b border-b-[#e5e7eb]/50 p-8 transition-all duration-300 group-data-[state=open]:border-[#33604C]/20 ">
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left cursor-pointer">
                <span className="text-[#374151] font-black font-anantason text-lg lg:group-data-[state=open]:text-xl group-hover:text-[#33604C] group-data-[state=open]:text-[#9D4F3B] transition-all duration-101">
                  IS MY DATA SECURE?
                </span>
                <div className="flex-shrink-0 ml-4">
                  <Plus className="w-7 h-7 text-[#6B7280] group-data-[state=open]:rotate-45 group-data-[state-open]:text-red-600 group-hover:text-[#33604C] transition-all duration-300" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-6">
                <div className="border-t border-[#33604C]/20 pt-6">
                  <p className="text-[#4B5563] leading-relaxed lg:text-lg text-md font-nunito">
                    Yes. KYC is handled via trusted providers like ShuftiPro and
                    Sumsub. Token8 never stores private keys or investor funds.
                    All smart contracts are audited too.
                  </p>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>

          <Collapsible className="group border-b border-black">
            <div className="border-b border-b-[#e5e7eb]/50 p-8 transition-all duration-300 group-data-[state=open]:border-[#33604C]/20 ">
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left cursor-pointer">
                <span className="text-[#374151] font-black font-anantason text-lg lg:group-data-[state=open]:text-xl group-hover:text-[#33604C] group-data-[state=open]:text-[#9D4F3B] transition-all duration-101">
                  DO I NEED TO BE ACCREDITED?
                </span>
                <div className="flex-shrink-0 ml-4">
                  <Plus className="w-7 h-7 text-[#6B7280] group-data-[state=open]:rotate-45 group-data-[state=open]:text-red-600 group-hover:text-[#33604C] transition-all duration-300" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-6">
                <div className="border-t border-[#33604C]/20 pt-6">
                  <p className="text-[#4B5563] leading-relaxed lg:text-lg text-md font-nunito">
                    Depends on jurisdiction. Whitelists and controls are
                    configurable based on local laws. Our platform automatically
                    checks eligibility requirements based on your location
                    during the KYC process.
                  </p>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>

          <Collapsible className="group border-b border-black">
            <div className=" border-b border-b-[#e5e7eb]/50 p-8 transition-all duration-300 group-data-[state=open]:border-[#33604C]/20 ">
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left cursor-pointer">
                <span className="text-[#374151] font-black font-anantason text-lg lg:group-data-[state=open]:text-xl group-hover:text-[#33604C] group-data-[state=open]:text-[#9D4F3B] transition-all duration-101">
                  HOW DO I SELL MY TOKENS?
                </span>
                <div className="flex-shrink-0 ml-4">
                  <Plus className="w-7 h-7 text-[#6B7280] group-data-[state=open]:rotate-45 group-data-[state=open]:text-red-600 group-hover:text-[#33604C] transition-all duration-300" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-6">
                <div className="border-t border-[#33604C]/20 pt-6">
                  <p className="text-[#4B5563] leading-relaxed lg:text-lg text-md font-nunito">
                    Use our built-in NOVA marketplace for peer-to-peer secondary
                    market trading. Our compliance-gated marketplace ensures all
                    trades meet regulatory requirements while providing 24/7
                    liquidity.
                  </p>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}
