import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Rocket, TrendingUp, Globe, CheckCircle2, Clock, Star } from "lucide-react";

const roadmapData = [
  {
    phase: "MVP",
    timeline: "Q3 2025",
    focus: "Pilot Launch", 
    progress: 85,
    status: "in-progress",
    highlights: ["First two beachfront properties in Guatemala", "Core platform functionality", "Initial investor onboarding", "Basic compliance framework"],
    color: "#33604C"
  },
  {
    phase: "Rollout", 
    timeline: "Q4 2025",
    focus: "Early Growth",
    progress: 0,
    status: "planned", 
    highlights: ["Referral program launch", "Whitelist new property drops", "Enhanced user experience", "Community building initiatives"],
    color: "#9D4F3B"
  },
  {
    phase: "Growth",
    timeline: "Q1 2026", 
    focus: "Feature Expansion",
    progress: 0,
    status: "planned",
    highlights: ["SDK for third-party integration", "Public API release", "Credit card integration", "Mobile app launch"],
    color: "#33604C"
  },
  {
    phase: "Scale",
    timeline: "Q3 2026",
    focus: "Regional Expansion", 
    progress: 0,
    status: "planned",
    highlights: ["Enter new LATAM markets", "Broaden asset classes", "Institutional partnerships", "Advanced DeFi features"],
    color: "#9D4F3B"
  }
];

export default function Roadmap() {
  return (
    <section className="relative min-h-screen w-full py-16 lg:py-24" id="roadmap">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[#33604C] border-[#33604C]">
            DEVELOPMENT ROADMAP
          </Badge>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-anantason text-[#374151] mb-6">
            Roadmap Highlights
          </h2>
          <p className="text-xl font-nunito text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            Our strategic development timeline focusing on sustainable growth, feature expansion, and market penetration across Latin America.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#33604C] via-[#9D4F3B] to-[#33604C] transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {roadmapData.map((phase, index) => (
              <div key={phase.phase} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-8`}>
                {/* Timeline Marker */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-white transform md:-translate-x-1/2 z-10" style={{backgroundColor: phase.color}}>
                  <div className="w-full h-full rounded-full flex items-center justify-center">
                    {phase.status === 'in-progress' ? (
                      <Clock className="w-4 h-4 text-white" />
                    ) : phase.status === 'completed' ? (
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    ) : (
                      <Star className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <Card className={`border-2 transition-all hover:shadow-lg ${phase.status === 'in-progress' ? 'border-' + phase.color.replace('#', '') + ' shadow-lg' : 'border-gray-200 hover:border-' + phase.color.replace('#', '')}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge 
                          className="text-white font-anantason"
                          style={{backgroundColor: phase.color}}
                        >
                          {phase.phase}
                        </Badge>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-[#6B7280]" />
                          <span className="font-nunito text-[#6B7280] text-sm">{phase.timeline}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-anantason text-[#374151]">
                        {phase.focus}
                      </CardTitle>
                      {phase.status === 'in-progress' && (
                        <div className="mt-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-nunito text-[#6B7280] text-sm">Progress</span>
                            <span className="font-anantason font-bold text-sm" style={{color: phase.color}}>{phase.progress}%</span>
                          </div>
                          <Progress 
                            value={phase.progress} 
                            className="h-2"
                          />
                        </div>
                      )}
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-anantason font-bold text-[#374151] mb-3">Key Highlights</h4>
                      <div className="space-y-2">
                        {phase.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <div 
                              className="w-2 h-2 rounded-full mt-2"
                              style={{backgroundColor: phase.color}}
                            ></div>
                            <span className="font-nunito text-[#6B7280] text-sm leading-relaxed">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}
