"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { MapPin, Users, DollarSign, TrendingUp, CheckCircle2 } from "lucide-react";

const fundingData = [
  { name: 'Funded', value: 350000, color: '#33604C' },
  { name: 'Target', value: 350000, color: '#9D4F3B' }
];

const investorDistribution = [
  { range: '$500-$1,000', investors: 450, percentage: 64.3, color: '#33604C' },
  { range: '$1,000-$5,000', investors: 200, percentage: 28.6, color: '#9D4F3B' },
  { range: '$5,000+', investors: 50, percentage: 7.1, color: '#374151' }
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      fontSize="12"
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function CaseStudy() {
  return (
    <section className="relative min-h-screen w-full py-16 lg:py-24 bg-gradient-to-b from-white to-[#FDFAF1]" id="case-study">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[#9D4F3B] border-[#9D4F3B]">
            SUCCESS STORY
          </Badge>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-anantason text-[#374151] mb-6">
            Case Study
          </h2>
          <p className="text-xl font-nunito text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            Our first successful tokenization demonstrates the power of fractional real estate investment
          </p>
        </div>

        {/* Main Case Study Card */}
        <div className="max-w-6xl mx-auto">
          <Card className="border-2 border-[#33604C]/20 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-[#33604C]/5 to-[#9D4F3B]/5">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#33604C] rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl lg:text-3xl font-anantason text-[#374151]">
                      🏖️ Beach House in Monterrico, Guatemala
                    </CardTitle>
                    <CardDescription className="font-nunito text-[#6B7280] text-lg">
                      Premium beachfront property with rental income potential
                    </CardDescription>
                  </div>
                </div>
                <Badge className="bg-[#33604C] text-white text-lg px-4 py-2">
                  FULLY FUNDED ✅
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#33604C] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold font-anantason text-[#33604C]">$350,000</h3>
                  <p className="font-nunito text-[#6B7280]">Capital Raised</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#9D4F3B] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold font-anantason text-[#9D4F3B]">700+</h3>
                  <p className="font-nunito text-[#6B7280]">Investors</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#33604C] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold font-anantason text-[#33604C]">$0.35</h3>
                  <p className="font-nunito text-[#6B7280]">Token Price</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#9D4F3B] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold font-anantason text-[#9D4F3B]">100%</h3>
                  <p className="font-nunito text-[#6B7280]">Funded</p>
                </div>
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Funding Progress */}
                <div>
                  <h4 className="text-xl font-bold font-anantason text-[#374151] mb-6">Funding Progress</h4>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-nunito text-[#6B7280]">Target: $350,000</span>
                      <span className="font-anantason font-bold text-[#33604C]">$350,000 (100%)</span>
                    </div>
                    <Progress value={100} className="h-4 mb-4" />
                    <div className="h-32">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={fundingData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={50}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            <Cell fill="#33604C" />
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Investor Distribution */}
                <div>
                  <h4 className="text-xl font-bold font-anantason text-[#374151] mb-6">Investor Distribution</h4>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={investorDistribution}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="range" tick={{ fontSize: 12 }} />
                          <YAxis tick={{ fontSize: 12 }} />
                          <Tooltip 
                            formatter={(value, name) => [value, name === 'investors' ? 'Investors' : 'Percentage']}
                            labelStyle={{ color: '#374151' }}
                          />
                          <Bar dataKey="investors" fill="#33604C" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>

              {/* Outcome */}
              <div className="bg-gradient-to-r from-[#33604C]/10 to-[#9D4F3B]/10 rounded-xl p-6">
                <h4 className="text-xl font-bold font-anantason text-[#374151] mb-4 flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-[#33604C] mr-2" />
                  Outcome: Fully Funded Success
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h5 className="font-anantason font-bold text-[#374151] mb-2">Property Acquired</h5>
                    <p className="font-nunito text-[#6B7280] text-sm">Legal ownership transferred to token holders through compliant structure</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-anantason font-bold text-[#374151] mb-2">Rental Operations</h5>
                    <p className="font-nunito text-[#6B7280] text-sm">Property management established with booking platform integration</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-anantason font-bold text-[#374151] mb-2">Yield Distribution</h5>
                    <p className="font-nunito text-[#6B7280] text-sm">Rental yield automatically airdropped on-chain to token holders</p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-8">
                <h4 className="text-xl font-bold font-anantason text-[#374151] mb-6">Project Timeline</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#33604C] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                      1
                    </div>
                    <h5 className="font-anantason font-bold text-[#374151] mb-1">Due Diligence</h5>
                    <p className="font-nunito text-[#6B7280] text-sm">2 weeks</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#9D4F3B] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                      2
                    </div>
                    <h5 className="font-anantason font-bold text-[#374151] mb-1">Token Launch</h5>
                    <p className="font-nunito text-[#6B7280] text-sm">4 weeks</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#33604C] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                      3
                    </div>
                    <h5 className="font-anantason font-bold text-[#374151] mb-1">Fully Funded</h5>
                    <p className="font-nunito text-[#6B7280] text-sm">6 weeks</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#9D4F3B] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                      4
                    </div>
                    <h5 className="font-anantason font-bold text-[#374151] mb-1">Yield Started</h5>
                    <p className="font-nunito text-[#6B7280] text-sm">8 weeks</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
