"use client";

import Link from "next/link";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { TextAnimate } from "@/components/magicui/text-animate";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 px-4 text-center">
      {/* 🔢 Animated 404 Heading */}
      <TextAnimate
        animation="blurInUp"
        by="line"
        className="text-7xl md:text-8xl font-extrabold text-blue-400 drop-shadow-lg"
      >
        404
      </TextAnimate>

      {/* 📝 Subtitle */}
      <TextAnimate
        animation="blurInUp"
        by="line"
        className="mt-4 text-lg md:text-2xl text-gray-300 max-w-xl"
      >
        Oops! The page you are looking for doesn’t exist or has been moved.
      </TextAnimate>

      {/* 🎯 CTA Button */}
      <div className="mt-8">
        <RainbowButton>
          <Link href="/" className="flex items-center gap-2 text-lg">
            <FaHome /> Go Back Home
          </Link>
        </RainbowButton>
      </div>

      {/* ✨ Extra Decoration (Optional) */}
      <div className="absolute bottom-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} DevOps Team</p>
      </div>
    </section>
  );
}
