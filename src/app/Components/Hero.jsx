"use client";

import { RainbowButton } from "@/components/magicui/rainbow-button";
import { TextAnimate } from "@/components/magicui/text-animate";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-gray-900 to-black px-4">
      {/* 🖼️ Hero Content */}
      <div className="text-center space-y-6">
        {/* ✅ Responsive Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          <TextAnimate animation="blurInUp" by="h1">Welcome to <span className="text-blue-400">DevOps</span> Teams</TextAnimate> 
        </h1>

        {/* ✅ Animated Description */}
        <TextAnimate animation="blurInUp" by="p">
          <span className="text-gray-200 sm:text-md md:text-xl lg:text-2xl mx-auto">
            Welcome to DevOps – a passionate team of developers and innovators
            working together <br /> to build amazing web applications using React/Next.js
            and modern technologies.
          </span>
        </TextAnimate>

        {/* ✅ Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <RainbowButton>
            <Link href="/project" className="w-full block text-center">
              View Project
            </Link>
          </RainbowButton>

          <RainbowButton>
            <Link href="/team" className="w-full block text-center">
              Our Teams
            </Link>
          </RainbowButton>
        </div>
      </div>
    </section>
  );
}
