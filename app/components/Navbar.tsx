"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/75 backdrop-blur-md border-b border-zinc-900/90 shadow-xl shadow-black/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Interactive Logo: Displays METLO by default; on hover ABDULLAH pops out from the left */}
          <a
            href="#"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-xl p-1.5 transition-all"
            aria-label="Abdullah Metlo Home"
          >
            {/* Emerald Glowing Icon Monogram */}
            <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-emerald-500/30 flex items-center justify-center shadow-lg shadow-emerald-950/50 group-hover:border-emerald-400/80 group-hover:shadow-emerald-500/20 transition-all duration-300">
              <span className="font-mono font-bold text-sm bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                AM
              </span>
            </div>

            {/* Smooth Expanding Text Container: ABDULLAH pops out from the left of METLO */}
            <div className="flex items-baseline overflow-hidden font-mono tracking-tight text-sm sm:text-base">
              <motion.span
                initial={{ width: 0, opacity: 0, x: -10 }}
                animate={{
                  width: isLogoHovered ? "auto" : 0,
                  opacity: isLogoHovered ? 1 : 0,
                  x: isLogoHovered ? 0 : -10,
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden whitespace-nowrap text-zinc-300 font-semibold inline-block"
              >
                ABDULLAH&nbsp;
              </motion.span>
              <span className="text-emerald-400 font-bold tracking-wider">
                METLO
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 rounded-full px-4 py-1.5 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-full transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials & Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={portfolioData.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-900 rounded-lg transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-black font-semibold text-xs px-4 py-2 rounded-lg shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/35 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg bg-zinc-900/90 border border-zinc-800"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 mt-3 px-6 py-5 mx-4 rounded-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-emerald-400 hover:bg-zinc-900 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-zinc-800/80 flex items-center justify-between">
              <div className="flex gap-3">
                <a
                  href={portfolioData.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zinc-400 hover:text-white"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zinc-400 hover:text-emerald-400"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 bg-emerald-500 text-black text-xs font-semibold px-4 py-2 rounded-lg"
              >
                <span>Contact</span>
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
