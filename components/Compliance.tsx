export default function Compliance() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" id="compliance">
      {/* Main Content Container */}
      <div className="h-full flex flex-col lg:flex-row lg:items-center lg:justify-between pt-12 lg:pt-24 pb-8 lg:pb-16">
        {/* Left Content */}
        <div className="flex-1 max-w-3xl px-6 lg:px-12 lg:ml-8 mb-8 lg:mb-0">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <p className="text-[#33604C] font-black font-anantason tracking-wide text-sm lg:text-md uppercase">
                SECURITY & COMPLIANCE
              </p>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-anantason text-[#374151] leading-tight">
                BUILT FOR COMPLIANCE
              </h2>
              <p className="text-[#484d56] font-nunito text-base lg:text-lg max-w-md leading-relaxed">
                Our platform prioritizes regulatory compliance and security from the ground up, ensuring safe and legal tokenization for all stakeholders.
              </p>
            </div>

            {/* Compliance Features */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-anantason font-bold text-[#33604C] uppercase tracking-wide">
                  COMPLIANCE FEATURES
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-anantason font-bold text-[#374151] mb-1">Modular Legal Templates</h4>
                    <p className="text-[#6B7280] font-nunito text-sm lg:text-base">Pre-built legal frameworks adaptable to different jurisdictions</p>
                  </div>
                  <div>
                    <h4 className="font-anantason font-bold text-[#374151] mb-1">Integrated KYB/KYC</h4>
                    <p className="text-[#6B7280] font-nunito text-sm lg:text-base">ShuftiPro and Sumsub integration for identity verification</p>
                  </div>
                  <div>
                    <h4 className="font-anantason font-bold text-[#374151] mb-1">Jurisdictional Controls</h4>
                    <p className="text-[#6B7280] font-nunito text-sm lg:text-base">Configurable access controls based on local regulations</p>
                  </div>
                  <div>
                    <h4 className="font-anantason font-bold text-[#374151] mb-1">On-Chain Audit Trails</h4>
                    <p className="text-[#6B7280] font-nunito text-sm lg:text-base">Complete transparency with immutable transaction records</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Security Details */}
        <div className="flex-1 flex justify-end items-center min-h-[350px] lg:min-h-[500px]">
          <div className="w-full max-w-xl lg:max-w-none px-6 lg:px-0">
            <div className="space-y-8">
              {/* Security Framework */}
              <div className="bg-gradient-to-br from-[#33604C]/10 to-[#33604C]/5 rounded-2xl p-6 lg:p-8">
                <h3 className="text-xl font-anantason font-bold text-[#374151] mb-4">SECURITY FRAMEWORK</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">🔒</span>
                    <div>
                      <h4 className="font-anantason font-bold text-[#374151] text-sm">Multi-Signature Security</h4>
                      <p className="text-[#6B7280] font-nunito text-xs">Smart contracts protected with multi-sig</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">🛡️</span>
                    <div>
                      <h4 className="font-anantason font-bold text-[#374151] text-sm">Third-Party Audits</h4>
                      <p className="text-[#6B7280] font-nunito text-xs">Independent security reviews</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">🔐</span>
                    <div>
                      <h4 className="font-anantason font-bold text-[#374151] text-sm">No Custody Model</h4>
                      <p className="text-[#6B7280] font-nunito text-xs">We never store private keys or funds</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Regulatory Compliance */}
              <div className="bg-gradient-to-br from-[#9D4F3B]/10 to-[#9D4F3B]/5 rounded-2xl p-6 lg:p-8">
                <h3 className="text-xl font-anantason font-bold text-[#374151] mb-4">REGULATORY COMPLIANCE</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">⚖️</span>
                    <div>
                      <h4 className="font-anantason font-bold text-[#374151] text-sm">Securities Law Compliance</h4>
                      <p className="text-[#6B7280] font-nunito text-xs">Full regulatory compliance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">🔍</span>
                    <div>
                      <h4 className="font-anantason font-bold text-[#374151] text-sm">AML/CTF Monitoring</h4>
                      <p className="text-[#6B7280] font-nunito text-xs">Anti-money laundering controls</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">🛡️</span>
                    <div>
                      <h4 className="font-anantason font-bold text-[#374151] text-sm">GDPR Compliant</h4>
                      <p className="text-[#6B7280] font-nunito text-xs">European data protection standards</p>
                    </div>
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
