"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

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
          ? "bg-white/80 dark:bg-black/75 backdrop-blur-md border-b border-slate-200/80 dark:border-zinc-900/90 shadow-md dark:shadow-xl dark:shadow-black/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Interactive Logo */}
          <a
            href="#"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#0072b1] rounded-xl p-1.5 transition-all"
            aria-label="Abdullah Metlo Home"
          >
            {/* Glowing Icon Monogram */}
            <div className="w-9 h-9 rounded-lg bg-white dark:bg-zinc-950 border border-[#0072b1]/40 flex items-center justify-center shadow-sm dark:shadow-lg dark:shadow-[#0072b1]/20 group-hover:border-[#0072b1] group-hover:shadow-md transition-all duration-300">
              <span className="font-mono font-bold text-sm bg-gradient-to-r from-sky-500 to-[#0072b1] bg-clip-text text-transparent">
                AM
              </span>
            </div>

            {/* Smooth Expanding Text Container */}
            <div className="flex items-baseline overflow-hidden font-mono tracking-tight text-sm sm:text-base">
              <motion.span
                initial={{ width: 0, opacity: 0, x: -10 }}
                animate={{
                  width: isLogoHovered ? "auto" : 0,
                  opacity: isLogoHovered ? 1 : 0,
                  x: isLogoHovered ? 0 : -10,
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden whitespace-nowrap text-slate-800 dark:text-zinc-300 font-semibold inline-block"
              >
                ABDULLAH&nbsp;
              </motion.span>
              <span className="text-[#0072b1] dark:text-sky-400 font-bold tracking-wider">
                METLO
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border border-slate-200/80 dark:border-zinc-800/80 rounded-full px-4 py-1.5 shadow-sm dark:shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900 rounded-full transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials, Theme Toggle & Action Button */}
          <div className="hidden md:flex items-center gap-2.5">
            <ThemeToggle />

            <a
              href={portfolioData.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900 rounded-lg transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 dark:text-zinc-400 hover:text-[#0072b1] dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-zinc-900 rounded-lg transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#0072b1] to-sky-600 hover:from-[#005f94] hover:to-sky-500 text-white font-semibold text-xs px-4 py-2 rounded-lg shadow-sm dark:shadow-lg dark:shadow-[#0072b1]/25 hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button & Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0072b1] rounded-lg bg-slate-100 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-zinc-800 mt-3 px-6 py-5 mx-4 rounded-2xl shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-zinc-300 hover:text-[#0072b1] dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-zinc-900 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-200 dark:border-zinc-800/80 flex items-center justify-between">
              <div className="flex gap-2">
                <a
                  href={portfolioData.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900 rounded-lg"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-500 dark:text-zinc-400 hover:text-[#0072b1] dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-zinc-900 rounded-lg"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 bg-[#0072b1] text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm"
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
