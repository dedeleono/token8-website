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
            Find answers to common questions about TOKEN8 and our platform
          </p>
        </div>

        <div className="space-y-6">
          <Collapsible className="group border-b border-black">
            <div className=" backdrop-blur-sm rounded-2xl border-b border-b-[#e5e7eb]/50 p-8 transition-all duration-300 group-data-[state=open]:border-[#33604C]/20 ">
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left cursor-pointer">
                <span className="text-[#374151] font-black font-anantason text-lg lg:group-data-[state=open]:text-xl group-hover:text-[#33604C] group-data-[state=open]:text-[#9D4F3B] transition-all duration-101">
                  WHAT IS TOKEN8?
                </span>
                <div className="flex-shrink-0 ml-4">
                  <Plus className="w-7 h-7 text-[#6B7280] group-data-[state=open]:rotate-45 group-data-[state=open]:text-red-600 group-hover:text-[#33604C] transition-all duration-300" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-6">
                <div className="border-t border-[#33604C]/20 pt-6">
                  <p className="text-[#4B5563] leading-relaxed lg:text-lg text-md font-nunito">
                    TOKEN8 is a platform that enables seamless digital asset
                    creation and management. We provide cutting-edge solutions
                    for businesses looking to enter the blockchain ecosystem
                    with security and simplicity at the forefront to raise
                    capital.
                  </p>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>

          <Collapsible className="group border-b border-black">
            <div className=" border-b border-b-[#e5e7eb]/50 p-8 transition-all duration-300 group-data-[state=open]:border-[#33604C]/20 ">
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left cursor-pointer">
                <span className="text-[#374151] font-black font-anantason text-lg lg:group-data-[state=open]:text-xl group-hover:text-[#33604C] group-data-[state=open]:text-[#9D4F3B] transition-all duration-101">
                  HOW DO I GET STARTED?
                </span>
                <div className="flex-shrink-0 ml-4">
                  <Plus className="w-7 h-7 text-[#6B7280] group-data-[state=open]:rotate-45 group-data-[state=open]:text-red-600 group-hover:text-[#33604C] transition-all duration-300" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-6">
                <div className="border-t border-[#33604C]/20 pt-6">
                  <p className="text-[#4B5563] leading-relaxed lg:text-lg text-md font-nunito">
                    Getting started with TOKEN8 is simple. Create your account,
                    complete our streamlined onboarding process, and you&apos;ll
                    be ready to make your first investment in minutes.
                  </p>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>

          <Collapsible className="group border-b border-black">
            <div className=" backdrop-blur-sm rounded-2xl border-b border-b-[#e5e7eb]/50 p-8 transition-all duration-300 group-data-[state=open]:border-[#33604C]/20 ">
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left cursor-pointer">
                <span className="text-[#374151] font-black font-anantason text-lg lg:group-data-[state=open]:text-xl group-hover:text-[#33604C] group-data-[state=open]:text-[#9D4F3B] transition-all duration-101">
                  IS MY DATA SECURE?
                </span>
                <div className="flex-shrink-0 ml-4">
                  <Plus className="w-7 h-7 text-[#6B7280] group-data-[state=open]:rotate-45 group-data-[state=open]:text-red-600 group-hover:text-[#33604C] transition-all duration-300" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-6">
                <div className="border-t border-[#33604C]/20 pt-6">
                  <p className="text-[#4B5563] leading-relaxed lg:text-lg text-md font-nunito">
                    Yes, we take security seriously. We use industry-standard
                    encryption and best practices to protect your data.
                  </p>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>

          <Collapsible className="group border-b border-black">
            <div className=" backdrop-blur-sm rounded-2xl border-b border-b-[#e5e7eb]/50 p-8 transition-all duration-300 group-data-[state=open]:border-[#33604C]/20 ">
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left cursor-pointer">
                <span className="text-[#374151] font-black font-anantason text-lg lg:group-data-[state=open]:text-xl group-hover:text-[#33604C] group-data-[state=open]:text-[#9D4F3B] transition-all duration-101">
                  WHAT BLOCKCHAINS DO YOU SUPPORT?
                </span>
                <div className="flex-shrink-0 ml-4">
                  <Plus className="w-7 h-7 text-[#6B7280] group-data-[state=open]:rotate-45 group-data-[state=open]:text-red-600 group-hover:text-[#33604C] transition-all duration-300" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-6">
                <div className="border-t border-[#33604C]/20 pt-6">
                  <p className="text-[#4B5563] leading-relaxed lg:text-lg text-md font-nunito">
                    For now, TOKEN8 only supports Solana. We are working on
                    adding more networks in the future.
                  </p>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>

          <Collapsible className="group border-b border-black">
            <div className=" backdrop-blur-sm rounded-2xl border-b border-b-[#e5e7eb]/50 p-8 transition-all duration-300 group-data-[state=open]:border-[#33604C]/20 ">
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left cursor-pointer">
                <span className="text-[#374151] font-black font-anantason text-lg lg:group-data-[state=open]:text-xl group-hover:text-[#33604C] group-data-[state=open]:text-[#9D4F3B] transition-all duration-101">
                  DO YOU OFFER CUSTOMER SUPPORT?
                </span>
                <div className="flex-shrink-0 ml-4">
                  <Plus className="w-7 h-7 text-[#6B7280] group-data-[state=open]:rotate-45 group-data-[state=open]:text-red-600 group-hover:text-[#33604C] transition-all duration-300" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-6">
                <div className="border-t border-[#33604C]/20 pt-6">
                  <p className="text-[#4B5563] leading-relaxed lg:text-lg text-md font-nunito">
                    Yes! Our dedicated support team is available 24/7 to assist
                    you with any questions or issues.
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
