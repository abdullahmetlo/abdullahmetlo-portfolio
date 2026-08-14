"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Sparkles, Terminal, Database, Code2, Cpu } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function AnimatedBanner() {
  const { profile } = portfolioData;

  const slides = [
    {
      title: "Abdullah Metlo",
      subtitle: "CS Graduate • Swansea University",
      tag: "Software Developer",
      icon: Sparkles,
      gradient: "from-sky-300 via-white to-sky-200",
      accent: "#0072b1",
    },
    {
      title: "Python",
      subtitle: "Automated Web Scraping & Pipelines",
      tag: "FastAPI • Playwright • Scrapy",
      icon: Terminal,
      gradient: "from-sky-200 via-cyan-100 to-sky-300",
      accent: "#0284c7",
    },
    {
      title: "Data Analysis",
      subtitle: "Predictive ML & Quantitative Systems",
      tag: "Pandas • Scikit-Learn • Power BI",
      icon: Database,
      gradient: "from-cyan-200 via-white to-blue-200",
      accent: "#06b6d4",
    },
    {
      title: "Developer",
      subtitle: "Full-Stack Web Engineering",
      tag: "Next.js • React • Node • Django",
      icon: Code2,
      gradient: "from-sky-100 via-white to-cyan-300",
      accent: "#0072b1",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[currentIndex];
  const IconComponent = current.icon;

  return (
    <div className="relative h-36 sm:h-40 w-full overflow-hidden border-b border-slate-200/80 dark:border-zinc-800/60 bg-gradient-to-br from-[#005a8c] via-[#0072b1] to-[#043d63] select-none">
      {/* Background Animated Gradient Mesh & Geometric Wave SVG */}
      <div className="absolute inset-0 opacity-35 bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:16px_16px]" />
      
      {/* Flowing Wave Vector Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 500 150"
      >
        <motion.path
          d="M0,70 C150,130 350,10 500,80 L500,150 L0,150 Z"
          fill="rgba(6, 182, 212, 0.25)"
          animate={{
            d: [
              "M0,70 C150,130 350,10 500,80 L500,150 L0,150 Z",
              "M0,85 C150,30 350,120 500,60 L500,150 L0,150 Z",
              "M0,70 C150,130 350,10 500,80 L500,150 L0,150 Z",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,100 C180,40 320,130 500,90"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1.2"
          fill="none"
          animate={{
            d: [
              "M0,100 C180,40 320,130 500,90",
              "M0,80 C180,120 320,50 500,110",
              "M0,100 C180,40 320,130 500,90",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,50 C120,110 380,30 500,70"
          stroke="rgba(186, 230, 253, 0.35)"
          strokeWidth="1"
          fill="none"
          animate={{
            d: [
              "M0,50 C120,110 380,30 500,70",
              "M0,75 C120,20 380,100 500,45",
              "M0,50 C120,110 380,30 500,70",
            ],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Floating Ambient Glowing Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-8 -top-8 w-44 h-44 bg-cyan-400/25 rounded-full blur-2xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.45, 0.2],
          x: [0, -15, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-10 bottom-0 w-36 h-36 bg-sky-300/20 rounded-full blur-xl pointer-events-none"
      />

      {/* Top Right Email Pill Header */}
      <div className="absolute top-2.5 right-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono tracking-wider shadow-sm">
        <Mail className="w-3 h-3 text-sky-300" />
        <span className="truncate max-w-[150px] sm:max-w-[200px] uppercase font-semibold">
          {profile.email}
        </span>
      </div>

      {/* Central Animated Content Switcher */}
      <div className="relative h-full w-full flex flex-col justify-center items-center text-center px-4 pt-1 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[10px] font-medium tracking-wide mb-1.5 shadow-sm">
              <IconComponent className="w-3 h-3 text-sky-200 animate-pulse" />
              <span>{current.tag}</span>
            </div>

            {/* Main Title (Rotating: Abdullah Metlo -> Python -> Data Analysis -> Developer) */}
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white drop-shadow-md">
              <span className={`bg-gradient-to-r ${current.gradient} bg-clip-text text-transparent`}>
                {current.title}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-[11px] sm:text-xs text-sky-100/90 font-medium tracking-wide drop-shadow-sm mt-0.5">
              {current.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicator Dots */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
          {slides.map((_, sIdx) => (
            <button
              key={sIdx}
              onClick={() => setCurrentIndex(sIdx)}
              aria-label={`Go to slide ${sIdx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                sIdx === currentIndex
                  ? "w-5 h-1.5 bg-white shadow-sm"
                  : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Subtle Vignette Overlay to blend with Card */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 pointer-events-none" />
    </div>
  );
}
