export default function Benefits() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" id="benefits">
      {/* Main Content Container */}
      <div className="h-full flex flex-col lg:flex-row lg:items-center lg:justify-between pt-12 lg:pt-24 pb-8 lg:pb-16">
        {/* Left Content - Image (Order changed for mobile) */}
        <div className="flex-1 flex justify-start items-center min-h-[350px] lg:min-h-[500px] order-2 lg:order-1">
          <div className="w-full max-w-xl lg:max-w-none px-6 lg:px-0">
            <div className="space-y-8">
              {/* For Investors */}
              <div className="bg-gradient-to-br from-[#33604C]/10 to-[#33604C]/5 rounded-2xl p-6 lg:p-8">
                <h3 className="text-xl font-anantason font-bold text-[#374151] mb-4">FOR INVESTORS</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">🌎</span>
                    <div>
                      <h4 className="font-anantason font-bold text-[#374151] text-sm">Global Access</h4>
                      <p className="text-[#6B7280] font-nunito text-xs">Institutional-grade assets</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">💵</span>
                    <div>
                      <h4 className="font-anantason font-bold text-[#374151] text-sm">Start from $500</h4>
                      <p className="text-[#6B7280] font-nunito text-xs">Low minimum investment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">🔄</span>
                    <div>
                      <h4 className="font-anantason font-bold text-[#374151] text-sm">24/7 Liquidity</h4>
                      <p className="text-[#6B7280] font-nunito text-xs">Secondary market access</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">📈</span>
                    <div>
                      <h4 className="font-anantason font-bold text-[#374151] text-sm">Passive Income</h4>
                      <p className="text-[#6B7280] font-nunito text-xs">Rental yield distributions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* For Property Owners */}
              <div className="bg-gradient-to-br from-[#9D4F3B]/10 to-[#9D4F3B]/5 rounded-2xl p-6 lg:p-8">
                <h3 className="text-xl font-anantason font-bold text-[#374151] mb-4">FOR PROPERTY OWNERS</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">🌐</span>
                    <div>
                      <h4 className="font-anantason font-bold text-[#374151] text-sm">Global Fundraising</h4>
                      <p className="text-[#6B7280] font-nunito text-xs">Worldwide investor reach</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">✅</span>
                    <div>
                      <h4 className="font-anantason font-bold text-[#374151] text-sm">Compliance Built-in</h4>
                      <p className="text-[#6B7280] font-nunito text-xs">Regulatory framework included</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">💸</span>
                    <div>
                      <h4 className="font-anantason font-bold text-[#374151] text-sm">Lower Costs</h4>
                      <p className="text-[#6B7280] font-nunito text-xs">vs. traditional capital raising</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">🔧</span>
                    <div>
                      <h4 className="font-anantason font-bold text-[#374151] text-sm">One Dashboard</h4>
                      <p className="text-[#6B7280] font-nunito text-xs">Manage everything in one place</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 lg:max-w-3xl px-6 lg:px-12 lg:mr-8 mb-8 lg:mb-0 order-1 lg:order-2">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <p className="text-[#33604C] font-black font-anantason tracking-wide text-sm lg:text-md uppercase lg:text-left text-right">
                VALUE PROPOSITION
              </p>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-anantason text-[#484d56] leading-tight lg:text-left text-right">
                BUILT FOR EVERYONE
              </h2>
              <p className="text-[#6B7280] font-nunito text-base lg:text-lg lg:max-w-xl leading-relaxed lg:text-left text-right">
                Whether you&apos;re an investor seeking global real estate exposure or a property owner looking to raise capital, Token8 provides the tools you need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
