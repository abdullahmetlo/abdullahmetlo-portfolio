"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
  Building2,
  ExternalLink,
} from "lucide-react";
import { portfolioData, Certification } from "../data/portfolioData";

export default function Certifications() {
  const { certifications } = portfolioData;
  const carouselRef = useRef<HTMLDivElement>(null);

  // Drag-to-scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Drag physics & tracking refs
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const isDownRef = useRef(false);
  const dragDistanceRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  // Smooth scroll helper
  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const cardWidth = 360 + 24; // Card width + gap
      carouselRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  // Continuous gentle auto-swipe
  useEffect(() => {
    if (isHovered || isDragging || selectedCert) return;

    const interval = setInterval(() => {
      if (!carouselRef.current) return;
      const el = carouselRef.current;
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScroll - 15) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const cardWidth = 360 + 24;
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isHovered, isDragging, selectedCert]);

  // Window-level mouse up / move for seamless, glitch-free dragging
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDownRef.current || !carouselRef.current) return;
      e.preventDefault();

      const currentX = e.pageX;
      const walk = (currentX - startXRef.current);
      carouselRef.current.scrollLeft = scrollLeftRef.current - walk;

      // Track velocity for smooth momentum release
      const now = performance.now();
      const dt = now - lastTimeRef.current;
      if (dt > 0) {
        velocityRef.current = (currentX - lastXRef.current) / dt;
      }
      lastXRef.current = currentX;
      lastTimeRef.current = now;
      dragDistanceRef.current = Math.abs(walk);
    };

    const handleGlobalMouseUp = () => {
      if (!isDownRef.current) return;
      isDownRef.current = false;
      setIsDragging(false);

      // Apply momentum decay on release for ultra-smooth gliding
      if (carouselRef.current && Math.abs(velocityRef.current) > 0.2) {
        let currentVelocity = velocityRef.current * 12;
        const decay = () => {
          if (!carouselRef.current || Math.abs(currentVelocity) < 0.5) {
            if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
            return;
          }
          carouselRef.current.scrollLeft -= currentVelocity;
          currentVelocity *= 0.92; // friction
          rafIdRef.current = requestAnimationFrame(decay);
        };
        rafIdRef.current = requestAnimationFrame(decay);
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    window.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // Mouse Down on Carousel
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);

    isDownRef.current = true;
    setIsDragging(true);
    dragDistanceRef.current = 0;
    startXRef.current = e.pageX;
    scrollLeftRef.current = carouselRef.current.scrollLeft;
    lastXRef.current = e.pageX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="certifications"
      className="py-24 relative overflow-hidden select-none"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#0072b1]/15 blur-[140px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0072b1]/10 dark:bg-sky-950/60 border border-[#0072b1]/25 dark:border-sky-800/40 text-[#0072b1] dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Qualifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Certifications & Accreditations
            </h2>
          </div>

          {/* Carousel Next & Previous Buttons */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors shadow-sm dark:shadow-none cursor-pointer"
              aria-label="Previous certification"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors shadow-sm dark:shadow-none cursor-pointer"
              aria-label="Next certification"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container (with Smooth Click-and-Drag + Auto-Swipe) */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={handleMouseDown}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className={`flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none ${isDragging
            ? "cursor-grabbing select-none"
            : "cursor-grab scroll-smooth snap-x snap-mandatory"
            }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {certifications.map((cert: Certification) => (
            <div
              key={cert.id}
              className="min-w-[320px] sm:min-w-[360px] max-w-[360px] bg-white/90 dark:bg-zinc-950/90 border border-slate-200/90 dark:border-zinc-800/90 hover:border-[#0072b1]/60 dark:hover:border-[#0072b1]/60 rounded-2xl p-5 sm:p-6 shadow-lg dark:shadow-xl dark:shadow-black/80 flex flex-col justify-between snap-start group transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0072b1] via-sky-400 to-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* 1. Picture Section */}
                <div
                  onClick={(e) => {
                    if (dragDistanceRef.current > 8) {
                      e.preventDefault();
                      return;
                    }
                    setSelectedCert(cert);
                  }}
                  className="relative w-full h-44 sm:h-48 mb-5 rounded-xl overflow-hidden bg-slate-100 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800/80 group/img cursor-pointer"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 640px) 320px, 360px"
                    className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105 pointer-events-none"
                    draggable={false}
                  />

                  {/* Hover Overlay with Preview Icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-slate-900 text-xs font-semibold shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5 text-[#0072b1]" />
                      <span>View Certificate</span>
                    </span>
                  </div>
                </div>

                {/* 2. Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#0072b1] dark:group-hover:text-sky-400 transition-colors mb-2 leading-snug">
                  {cert.title}
                </h3>

                {/* 3. Where I did the certification (Issuer) */}
                <div className="text-xs font-semibold text-[#0072b1] dark:text-sky-400 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{cert.issuer}</span>
                </div>

                {/* 4. Short Overview about the certification */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-5">
                  {cert.description}
                </p>
              </div>

              {/* 5. Tags / Keywords gained doing this certification */}
              <div className="pt-4 border-t border-slate-100 dark:border-zinc-900/90 mt-2">
                <div className="flex items-center gap-1.5 mb-2 text-[11px] font-mono text-slate-600 dark:text-zinc-400 font-medium">
                  <Sparkles className="w-3 h-3 text-[#0072b1] dark:text-sky-400" />
                  <span>Skills</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 text-[10px] font-mono text-slate-600 dark:text-zinc-400 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Fullscreen Modal / Lightbox */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {selectedCert.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-[#0072b1] dark:text-sky-400 mt-0.5">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{selectedCert.issuer}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-900 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body - Image Preview */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[420px] bg-slate-900 flex items-center justify-center p-2 sm:p-4">
              <div className="relative w-full h-[320px] sm:h-[450px]">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-slate-50 dark:bg-zinc-900/60 border-t border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {selectedCert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-xs font-mono text-slate-700 dark:text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
              <button
                onClick={() => window.open(selectedCert.image, "_blank")}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#0072b1] hover:bg-[#005a8c] text-white text-xs font-semibold shadow-md transition-colors cursor-pointer self-start sm:self-auto"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
