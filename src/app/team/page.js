"use client";

import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { TextAnimate } from "@/components/magicui/text-animate";
import team from "../../../public/team";

export default function Team() {
  return (
    <section className="py-26 px-4 min-h-screen mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
        Meet Our <span className="text-blue-400">Team</span>
      </h1>

      <div className="max-w-6xl mx-auto">
        {/* ✅ Responsive Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map(
            ({ name, role, image, facebook, linkedin, github }, idx) => (
              <div
                key={idx}
                className="bg-blue-900/10 rounded-2xl shadow-lg overflow-hidden hover:shadow-blue-400/40 transition-all"
              >
                {/* ✅ Member Image */}
                <div className="relative w-full h-96 overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>

                {/* ✅ Member Info */}
                <div className="p-6 text-center space-y-4">
                  <TextAnimate
                    animation="blurInUp"
                    by="line"
                    className="text-xl md:text-2xl font-semibold text-white"
                  >
                    {name}
                  </TextAnimate>

                  <TextAnimate
                    animation="blurInUp"
                    by="line"
                    className="text-gray-300 text-sm md:text-base leading-relaxed"
                  >
                    {role}
                  </TextAnimate>

                  {/* ✅ Social Links */}
                  <div className="flex justify-center gap-4 text-lg">
                    <a
                      href={facebook}
                      target="_blank"
                      className="text-blue-400 hover:text-white"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href={linkedin}
                      target="_blank"
                      className="text-blue-400 hover:text-white"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href={github}
                      target="_blank"
                      className="text-blue-400 hover:text-white"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
