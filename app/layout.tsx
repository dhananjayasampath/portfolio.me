import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./SmoothScroll"; // import client component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Modern portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-white bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat">
        
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/60 -z-10"></div>

        {/* 👇 Client component here */}
        <SmoothScroll />

        {children}
      </body>
    </html>
  );
}