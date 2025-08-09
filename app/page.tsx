import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Send, X } from "lucide-react";
import HeroSection from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import Header from "@/components/Header";
import AboutSection from "@/components/About";
import FAQSection from "@/components/FAQ";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import FooterDivider from "@/components/FooterDivider";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FDFAF1] relative">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <HeroSection />
      <AboutSection />
      <Divider />
      <FAQSection />
      <div className="relative">
        <FooterDivider className="absolute top-0 left-0 w-full z-10" />
        <Footer />
      </div>

      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
}
