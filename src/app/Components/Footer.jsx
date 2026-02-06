"use client";

import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function Footer() {
  return (
    <footer className="bg-neutral-950/10 text-gray-300 border-t border-neutral-800 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        {/* 1️⃣ Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            <TextAnimate animation="blurInUp" by="line">
              DevOps Team
            </TextAnimate>
          </h2>
          <p className="text-sm leading-relaxed">
            We are a passionate team of developers & innovators building modern
            web apps using Next.js, React, and cutting-edge technologies.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/project" className="hover:text-blue-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-blue-400 transition">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Connect With Us
          </h3>
          <div className="flex gap-4 text-2xl">
            {/* <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaFacebook />
            </Link> */}
            <Link
              href="https://github.com/azijulhakimbd/DevOps"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </Link>
            {/* <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </Link> */}
            <Link href="mailto:azijul.info@gmail.com" className="hover:text-blue-400 transition">
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} DevOps Team. All Rights Reserved.
      </div>
    </footer>
  );
}
