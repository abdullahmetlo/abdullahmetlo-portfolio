"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-900 bg-black/90 py-12 text-zinc-400 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Location */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-xs text-emerald-400">
              AM
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                {portfolioData.profile.name}
              </div>
              <div className="text-xs text-zinc-500 font-mono">
                BSc Computer Science • {portfolioData.profile.location}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs text-zinc-400">
            <a
              href={portfolioData.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-zinc-700">•</span>
            <a
              href={portfolioData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-zinc-700">•</span>
            <a
              href={`mailto:${portfolioData.profile.email}`}
              className="hover:text-zinc-200 transition-colors"
            >
              Email
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4 text-xs text-zinc-500">
            <span>
              © {new Date().getFullYear()} {portfolioData.profile.name}.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
