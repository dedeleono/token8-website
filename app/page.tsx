import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Send, X } from "lucide-react";
import HeroSection from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import Header from "@/components/Header";
import AboutSection from "@/components/About";
import WhatIsToken8 from "@/components/WhatIsToken8";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Compliance from "@/components/Compliance";
import FAQSection from "@/components/FAQ";
import JoinTheMovement from "@/components/JoinTheMovement";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import FooterDivider from "@/components/FooterDivider";
import ComingSoon from "@/components/home2";
import ComingSoonAlt from "@/components/home3";
import Section2 from "@/components/section2";

export default function HomePage() {
  return (
    // <div className="min-h-screen bg-[#FDFAF1] relative">
    //   {/* Header */}
    //   <Header />

    //   {/* Main Content */}
    //   <HeroSection />
    //   <WhatIsToken8 />
    //   <HowItWorks />
    //   <Benefits />
    //   {/* <Compliance /> */}
    //   <AboutSection />
    //   <Divider />
    //   <FAQSection />
    //   <JoinTheMovement />
    //   <div className="relative">
    //     <FooterDivider className="absolute top-0 left-0 w-full z-10" />
    //     <Footer />
    //   </div>

    //   {/* Bottom Navigation */}
    //   <Navigation />

    // </div>
    // <ComingSoon />
    <>
      <ComingSoonAlt />
      <Section2 />
    </>
  );
}
