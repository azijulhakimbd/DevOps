"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          Dev<span className="text-blue-400">Ops</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-200 font-medium">
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-blue-400 transition">
            Projects
          </Link>
          <Link href="/team" className="hover:text-blue-400 transition">
            Team
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-200 text-2xl md:hidden"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-800">
          <div className="flex flex-col space-y-4 py-4 px-6 text-gray-200">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Home
            </Link>
            <Link
              href="/project"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Projects
            </Link>
            <Link
              href="/team"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Team
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
