import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import LenisWrapper from "@/components/LenisWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anantason = localFont({
  src: "../public/fonts/Anantason-ExtraBold.7983b4a767e21885a261.f29bda3a2c22e3995680f7d283b8324d.woff2",
  variable: "--font-anantason",
  weight: "800",
  display: "swap",
});

const nunitoSans = localFont({
  src: "../public/fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf",
  variable: "--font-nunito",
  weight: "200 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TOKEN8",
  description: "Internet Capital Market for the masses",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anantason.variable} ${nunitoSans.variable} antialiased font-nunito`}
      >
        <LenisWrapper>
          {children}
        </LenisWrapper>
        <Toaster />
      </body>
    </html>
  );
}
