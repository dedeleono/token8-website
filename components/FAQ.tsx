import * as React from "react";
import { Plus } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

export default function FAQSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden px-8 py-16 flex items-center">
      {/* Background decorative elements */}

      <div className="relative max-w-4xl mx-auto w-full pt-13">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-anantason font-black text-[#484d56] mb-4">
            QUESTIONS?
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Find answers to common questions about TOKEN8 and our platform
          </p>
        </div>

        <div className="space-y-6">
          <Collapsible className="group">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-[#e5e7eb]/50 p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-data-[state=open]:shadow-xl group-data-[state=open]:border-[#33604C]/20 ">
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                <span className="text-[#374151] font-semibold text-xl group-hover:text-[#33604C] group-data-[state=open]:text-[#9D4F3B] transition-colors duration-200">
                  WHAT IS TOKEN8?
                </span>
                <div className="flex-shrink-0 ml-4">
                  <Plus className="w-7 h-7 text-[#6B7280] group-data-[state=open]:rotate-45 group-data-[state=open]:text-red-600 group-hover:text-[#33604C] transition-all duration-300" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-6">
                <div className="border-t border-[#33604C]/20 pt-6">
                  <p className="text-[#4B5563] leading-relaxed text-lg">
                    TOKEN8 is a revolutionary tokenization platform that enables
                    seamless digital asset creation and management. We provide
                    cutting-edge solutions for businesses looking to enter the
                    blockchain ecosystem with security and simplicity at the
                    forefront.
                  </p>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>

          <Collapsible className="group">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-[#e5e7eb]/50 p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-data-[state=open]:shadow-xl group-data-[state=open]:border-[#33604C]/20 ">
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                <span className="text-[#374151] font-semibold text-xl group-hover:text-[#33604C] group-data-[state=open]:text-[#9D4F3B] transition-colors duration-200">
                  HOW DO I GET STARTED?
                </span>
                <div className="flex-shrink-0 ml-4">
                  <Plus className="w-7 h-7 text-[#6B7280] group-data-[state=open]:rotate-45 group-data-[state=open]:text-red-600 group-hover:text-[#33604C] transition-all duration-300" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-6">
                <div className="border-t border-[#10b981]/20 pt-6">
                  <p className="text-[#4B5563] leading-relaxed text-lg">
                    Getting started with TOKEN8 is simple. Create your account,
                    complete our streamlined onboarding process, and you'll be
                    ready to create your first token in minutes. Our intuitive
                    dashboard guides you through every step of the tokenization
                    process.
                  </p>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>

          <Collapsible className="group">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-[#e5e7eb]/50 p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-data-[state=open]:shadow-xl group-data-[state=open]:border-[#33604C]/20 ">
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                <span className="text-[#374151] font-semibold text-xl group-hover:text-[#33604C] group-data-[state=open]:text-[#9D4F3B] transition-colors duration-200">
                  IS MY DATA SECURE?
                </span>
                <div className="flex-shrink-0 ml-4">
                  <Plus className="w-7 h-7 text-[#6B7280] group-data-[state=open]:rotate-45 group-data-[state=open]:text-red-600 group-hover:text-[#33604C] transition-all duration-300" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-6">
                <div className="border-t border-[#10b981]/20 pt-6">
                  <p className="text-[#4B5563] leading-relaxed text-lg">
                    Absolutely. Security is our top priority. We use
                    enterprise-grade encryption, multi-layer authentication, and
                    follow industry best practices to ensure your data and
                    digital assets are protected at all times. Our platform is
                    regularly audited by third-party security experts.
                  </p>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>

          <Collapsible className="group">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-[#e5e7eb]/50 p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-data-[state=open]:shadow-xl group-data-[state=open]:border-[#33604C]/20 ">
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                <span className="text-[#374151] font-semibold text-xl group-hover:text-[#33604C] group-data-[state=open]:text-[#9D4F3B] transition-colors duration-200">
                  WHAT BLOCKCHAINS DO YOU SUPPORT?
                </span>
                <div className="flex-shrink-0 ml-4">
                  <Plus className="w-7 h-7 text-[#6B7280] group-data-[state=open]:rotate-45 group-data-[state=open]:text-red-600 group-hover:text-[#33604C] transition-all duration-300" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-6">
                <div className="border-t border-[#10b981]/20 pt-6">
                  <p className="text-[#4B5563] leading-relaxed text-lg">
                    TOKEN8 supports multiple blockchain networks including
                    Ethereum, Polygon, Binance Smart Chain, and more. Our
                    multi-chain architecture allows you to deploy tokens on the
                    network that best fits your project's requirements and
                    budget considerations.
                  </p>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>

          <Collapsible className="group">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-[#e5e7eb]/50 p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-data-[state=open]:shadow-xl group-data-[state=open]:border-[#33604C]/20 ">
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                <span className="text-[#374151] font-semibold text-xl group-hover:text-[#33604C] group-data-[state=open]:text-[#9D4F3B] transition-colors duration-200">
                  DO YOU OFFER CUSTOMER SUPPORT?
                </span>
                <div className="flex-shrink-0 ml-4">
                  <Plus className="w-7 h-7 text-[#6B7280] group-data-[state=open]:rotate-45 group-data-[state=open]:text-red-600 group-hover:text-[#33604C] transition-all duration-300" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-6">
                <div className="border-t border-[#10b981]/20 pt-6">
                  <p className="text-[#4B5563] leading-relaxed text-lg">
                    Yes! Our dedicated support team is available 24/7 to assist
                    you with any questions or issues. Whether you need technical
                    help, have questions about tokenization, or need guidance on
                    best practices, we're here to help you succeed.
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
