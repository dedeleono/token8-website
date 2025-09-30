import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, DollarSign, Shield, Users } from "lucide-react";

export default function WhatIsToken8() {
  return (
    <section className="relative min-h-screen w-full py-16 lg:py-24" id="what-is-token8">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        {/* <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[#33604C] border-[#33604C]">
            PLATFORM OVERVIEW
          </Badge>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-anantason text-[#374151] mb-6">
            What is Token8?
          </h2>
          <p className="text-xl lg:text-2xl font-nunito text-[#6B7280] max-w-4xl mx-auto leading-relaxed">
            Token8 is a compliance-first platform for tokenizing real-world assets—starting with institutional-grade real estate in Latin America. We transform property equity into on-chain tokens, making global investment possible for anyone, anywhere, using stablecoins or credit card payments.
          </p>
        </div> */}

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border-[#33604C]/20 hover:border-[#33604C]/40 transition-colors">
            <CardHeader className="text-center pb-2">
              <div className="w-12 h-12 bg-[#33604C] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg font-anantason text-[#374151]">
                Global Access
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-center">
              <CardDescription className="font-nunito text-[#6B7280]">
                Invest from anywhere in institutional-grade real estate
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-[#9D4F3B]/20 hover:border-[#9D4F3B]/40 transition-colors">
            <CardHeader className="text-center pb-2">
              <div className="w-12 h-12 bg-[#9D4F3B] rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg font-anantason text-[#374151]">
                Low Minimum
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-center">
              <CardDescription className="font-nunito text-[#6B7280]">
                Start investing from just $500 with stablecoins or credit cards
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-[#33604C]/20 hover:border-[#33604C]/40 transition-colors">
            <CardHeader className="text-center pb-2">
              <div className="w-12 h-12 bg-[#33604C] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg font-anantason text-[#374151]">
                Compliance First
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-center">
              <CardDescription className="font-nunito text-[#6B7280]">
                Built-in KYC, legal frameworks, and regulatory compliance
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-[#9D4F3B]/20 hover:border-[#9D4F3B]/40 transition-colors">
            <CardHeader className="text-center pb-2">
              <div className="w-12 h-12 bg-[#9D4F3B] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg font-anantason text-[#374151]">
                Community Driven
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-center">
              <CardDescription className="font-nunito text-[#6B7280]">
                Join a growing community of global real estate investors
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Value Proposition */}
        {/* <div className="bg-gradient-to-r from-[#33604C]/5 to-[#9D4F3B]/5 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold font-anantason text-[#374151] mb-4">
                Transforming Real Estate Investment
              </h3>
              <p className="font-nunito text-[#6B7280] text-lg leading-relaxed mb-6">
                Traditional real estate investment requires significant capital, complex legal processes, and geographic limitations. Token8 eliminates these barriers through blockchain tokenization.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#33604C] rounded-full"></div>
                  <span className="font-nunito text-[#6B7280]">Fractional ownership from $500</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#9D4F3B] rounded-full"></div>
                  <span className="font-nunito text-[#6B7280]">24/7 liquidity through secondary markets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#33604C] rounded-full"></div>
                  <span className="font-nunito text-[#6B7280]">Transparent, on-chain rental distributions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#9D4F3B] rounded-full"></div>
                  <span className="font-nunito text-[#6B7280]">Global access to premium LATAM properties</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-anantason font-bold text-[#374151] text-lg mb-4">Market Opportunity</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-nunito text-[#6B7280]">LATAM Real Estate Market</span>
                  <span className="font-anantason font-bold text-[#33604C]">$2.1T</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-nunito text-[#6B7280]">Annual Transaction Volume</span>
                  <span className="font-anantason font-bold text-[#9D4F3B]">$180B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-nunito text-[#6B7280]">Average Rental Yield</span>
                  <span className="font-anantason font-bold text-[#33604C]">8-12%</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
