"use client";

import React, { useRef } from "react";
import { Award, CheckCircle2, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { portfolioData, Certification } from "../data/portfolioData";

export default function Certifications() {
  const { certifications } = portfolioData;
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 340;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#0072b1]/15 blur-[130px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Carousel Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0072b1]/10 dark:bg-sky-950/60 border border-[#0072b1]/25 dark:border-sky-800/40 text-[#0072b1] dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Qualifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Certifications & Accreditations
            </h2>
            <p className="mt-3 text-slate-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl">
              Professional credentials validating technical acumen in Cloud Computing, Business Intelligence, and Machine Learning.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors shadow-sm dark:shadow-none"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors shadow-sm dark:shadow-none"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Horizontal Slider */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {certifications.map((cert: Certification) => (
            <div
              key={cert.id}
              className="min-w-[300px] sm:min-w-[340px] max-w-[340px] bg-white/85 dark:bg-zinc-950/85 border border-slate-200/90 dark:border-zinc-800/90 hover:border-[#0072b1]/50 dark:hover:border-[#0072b1]/50 rounded-2xl p-6 shadow-lg dark:shadow-xl dark:shadow-black/80 flex flex-col justify-between snap-start group transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0072b1] via-sky-400 to-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Issuer Badge & Verification Icon */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0072b1]/10 border border-[#0072b1]/20 flex items-center justify-center text-[#0072b1] dark:text-sky-400 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-600 dark:text-zinc-400 bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 px-2 py-0.5 rounded">
                    {cert.issueDate}
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#0072b1] dark:group-hover:text-sky-400 transition-colors mb-1.5 leading-snug">
                  {cert.title}
                </h3>

                {/* Issuing Organisation */}
                <div className="text-xs font-semibold text-[#0072b1] dark:text-sky-400 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed mb-5">
                  {cert.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="pt-3 border-t border-slate-200 dark:border-zinc-900">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 text-[10px] font-mono text-slate-600 dark:text-zinc-400"
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
    </section>
  );
}
