export default function HowItWorks() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" id="how-it-works">
      {/* Main Content Container */}
      <div className="h-full flex flex-col lg:flex-row lg:items-center lg:justify-between pt-12 lg:pt-24 pb-8 lg:pb-16">
        {/* Left Content */}
        <div className="flex-1 max-w-3xl px-6 lg:px-12 lg:ml-8 mb-8 lg:mb-0">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <p className="text-[#9D4F3B] font-black font-anantason tracking-wide text-sm lg:text-md uppercase">
                PLATFORM WORKFLOW
              </p>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-anantason text-[#374151] leading-tight">
                HOW IT WORKS
              </h2>
              <p className="text-[#484d56] font-nunito text-base lg:text-lg max-w-md leading-relaxed">
                Our three-phase approach ensures seamless asset tokenization from due diligence to secondary market trading.
              </p>
            </div>

            {/* Three Phases Overview */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-anantason font-bold text-[#33604C] uppercase tracking-wide">
                  GENESIS → NEO → NOVA
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-anantason font-bold text-[#374151] mb-1">GENESIS</h4>
                    <p className="text-[#6B7280] font-nunito text-sm lg:text-base">Asset due diligence, token creation, and platform onboarding</p>
                  </div>
                  <div>
                    <h4 className="font-anantason font-bold text-[#374151] mb-1">NEO</h4>
                    <p className="text-[#6B7280] font-nunito text-sm lg:text-base">Primary offering engine with smart contracts, KYC, and sale orchestration</p>
                  </div>
                  <div>
                    <h4 className="font-anantason font-bold text-[#374151] mb-1">NOVA</h4>
                    <p className="text-[#6B7280] font-nunito text-sm lg:text-base">Secondary market module for peer-to-peer resale and liquidity</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-[#6B7280] font-nunito text-sm lg:text-base leading-relaxed">
                  Behind the scenes, we handle legal, KYC/KYB, audits, and compliance—end-to-end.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="flex-1 flex justify-end items-center min-h-[350px] lg:min-h-[500px]">
          <div className="w-full max-w-xl lg:max-w-none px-6 lg:px-0">
            <div className="bg-gradient-to-br from-[#33604C]/10 to-[#9D4F3B]/10 rounded-2xl p-8 lg:p-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#33604C] rounded-lg flex items-center justify-center text-white font-anantason font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-anantason font-bold text-[#374151]">Property Selection</h4>
                    <p className="text-[#6B7280] font-nunito text-sm">Due diligence & verification</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#9D4F3B] rounded-lg flex items-center justify-center text-white font-anantason font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-anantason font-bold text-[#374151]">Token Launch</h4>
                    <p className="text-[#6B7280] font-nunito text-sm">KYC, smart contracts & sale</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#33604C] rounded-lg flex items-center justify-center text-white font-anantason font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-anantason font-bold text-[#374151]">Secondary Trading</h4>
                    <p className="text-[#6B7280] font-nunito text-sm">24/7 liquidity marketplace</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
