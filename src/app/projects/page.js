"use client";

import Link from "next/link";
import { TextAnimate } from "@/components/magicui/text-animate";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../../../public/projects";

export default function Projects() {
  return (
    <section className="py-26 px-4 min-h-screen mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
        Our <span className="text-blue-400">Projects</span>
      </h1>

    <div className="max-w-7xl mx-auto">
          {/* ✅ Responsive Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, description, image, live, github }, idx) => (
          <div
            key={idx}
            className="bg-blue-900/10 rounded-2xl shadow-lg overflow-hidden hover:shadow-blue-400/40 transition-all"
          >
            {/* ✅ Project Image */}
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>

            {/* ✅ Project Content */}
            <div className="p-6 space-y-4">
              {/* Title with Animation */}
              <TextAnimate
                animation="blurInUp"
                by="line"
                className="text-xl md:text-2xl font-semibold text-white"
              >
                {title}
              </TextAnimate>

              {/* Description */}
              <TextAnimate
                animation="blurInUp"
                by="line"
                className="text-gray-300 text-sm md:text-base leading-relaxed"
              >
                {description}
              </TextAnimate>

              {/* Buttons: Live + GitHub */}
              <div className="flex items-center gap-4">
                <RainbowButton>
                  <Link href={live} target="_blank" className="flex items-center gap-2">
                    <FaExternalLinkAlt /> Live
                  </Link>
                </RainbowButton>

                <RainbowButton>
                  <Link href={github} target="_blank" className="flex items-center gap-2">
                    <FaGithub /> GitHub
                  </Link>
                </RainbowButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
