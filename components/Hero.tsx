"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";

export default function HeroSection() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleWhitepaperDownload = async () => {
    if (isDownloading) return;
    
    setIsDownloading(true);
    
    // Show loading toast with your brand colors
    const loadingToast = toast.loading("Preparing your whitepaper...", {
      duration: Infinity,
      style: {
        background: '#33604C',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontWeight: '600',
        fontSize: '14px'
      }
    });

    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const link = document.createElement('a');
      link.href = '/Token 8 Whitepaper.pdf';
      link.download = 'Token 8 Whitepaper.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.dismiss(loadingToast);
      toast.success("Whitepaper downloaded successfully! 🎉", {
        description: "",
        duration: 4000,
        style: {
          background: '#33604C',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontWeight: '600',
          fontSize: '14px'
        }
      });
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Download failed", {
        description: "Please try again.",
        duration: 4000,
        style: {
          background: '#9D4F3B',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontWeight: '600',
          fontSize: '14px'
        }
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden" id="home">
      {/* Main Content Container */}
      <div className="h-full flex flex-col lg:flex-row lg:items-center lg:justify-between pt-16 lg:pt-24 pb-8 lg:pb-16">
        {/* Left Content */}
        <div className="flex-1 max-w-3xl px-6 lg:px-12 lg:ml-8 mb-8 lg:mb-0">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <p className="text-[#33604C] font-black font-anantason tracking-wide text-sm lg:text-md uppercase">
                TOKEN 8
              </p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-anantason font-bold text-[#374151] leading-tight">
                COMING SOON...
              </h1>
              <p className="text-[#484d56] font-nunito text-base lg:text-lg max-w-md leading-relaxed">
                {/* Token8 is unlocking access to real-world real estate through
                tokenization on Solana. <br />
                <br /> */}
                Fractional ownership. Turning illiquid real estate into liquid tokens.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-4">
              <Button
                className={`
                  bg-[#33604C] hover:bg-[#2A4F3F] font-anantason text-white px-6 lg:px-8 py-3 rounded-md font-black uppercase text-sm lg:text-base cursor-pointer
                  transition-all duration-300 ease-in-out
                  hover:scale-105 hover:shadow-lg
                  active:scale-95
                  ${isDownloading ? 'animate-pulse scale-95' : ''}
                  relative overflow-hidden
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                  before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700
                `}
                size="lg"
                onClick={handleWhitepaperDownload}
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    DOWNLOADING...
                  </span>
                ) : (
                  "WHITEPAPER"
                )}
              </Button>
              <Link href="#about" className="w-full">
                <Button
                  variant="outline"
                  className="border-[#9D4F3B] w-full lg:w-auto bg-transparent font-anantason font-black border-2 text-[#9D4F3B] hover:bg-[#9D4F3B] hover:text-white px-6 lg:px-8 py-3 rounded-md text-sm lg:text-base cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95"
                  size="lg"
                >
                  ABOUT US
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1 flex justify-end items-center min-h-[350px] lg:min-h-[500px]">
          <div className="w-full max-w-xl lg:max-w-none">
            <Image
              src="/img/house-right.png"
              alt="Modern house 3D illustration"
              width={600}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
