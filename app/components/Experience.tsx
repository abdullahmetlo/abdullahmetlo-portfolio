"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { portfolioData, ExperienceItem } from "../data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    "exp-1": true, // Default first item open
  });

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#0072b1]/10 blur-[140px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-sky-500/10 blur-[140px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0072b1]/10 dark:bg-sky-950/60 border border-[#0072b1]/25 dark:border-sky-800/40 text-[#0072b1] dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience & Track Record
          </h2>
          <p className="mt-3 text-slate-600 dark:text-zinc-400 text-sm sm:text-base">
            Proven engineering contributions across scalable full-stack development, database query optimization, and quantitative business improvements.
          </p>
        </div>

        {/* Timeline Layout with Dates on Left Side */}
        <div className="relative space-y-12 sm:space-y-14">
          {experience.map((item: ExperienceItem, idx: number) => {
            const isExpanded = !!expandedItems[item.id];
            const isLatest = idx === 0;

            return (
              <div
                key={item.id}
                className="relative grid grid-cols-1 md:grid-cols-[180px_auto_1fr] gap-4 md:gap-8 items-start group"
              >
                {/* 1. Left Column: Date on the Left Side of Timeline */}
                <div className="hidden md:flex flex-col items-end pt-5">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-900/90 border border-[#0072b1]/30 dark:border-sky-700/50 shadow-md shadow-slate-200/50 dark:shadow-black/60 backdrop-blur-md text-slate-800 dark:text-zinc-200 text-xs font-mono font-bold group-hover:border-[#0072b1] dark:group-hover:border-sky-400 transition-colors">
                    <Calendar className="w-3.5 h-3.5 text-[#0072b1] dark:text-sky-400 shrink-0" />
                    <span>{item.period}</span>
                    {isLatest && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-md border border-emerald-500/20 ml-1">
                        Latest
                      </span>
                    )}
                  </div>
                </div>

                {/* 2. Middle Column: Timeline Spine & Glowing Node */}
                <div className="hidden md:flex flex-col items-center self-stretch relative">
                  {/* Vertical Spine Line */}
                  <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#0072b1] via-sky-400/80 to-[#0072b1]/10 rounded-full" />

                  {/* Glowing Milestone Node */}
                  <div className="relative mt-5 flex items-center justify-center shrink-0 w-10 h-10 rounded-full bg-white dark:bg-zinc-950 border-2 border-[#0072b1] shadow-lg shadow-[#0072b1]/30 dark:shadow-[#0072b1]/50 group-hover:border-sky-400 group-hover:scale-110 transition-all duration-300 z-10">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#0072b1] dark:bg-sky-400" />
                    {isLatest && (
                      <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Mobile Date Header (Visible only on mobile screens < md) */}
                <div className="flex md:hidden items-center gap-2 mb-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-[#0072b1]/30 dark:border-sky-700/50 text-slate-800 dark:text-zinc-200 text-xs font-mono font-bold shadow-sm">
                    <Calendar className="w-3.5 h-3.5 text-[#0072b1] dark:text-sky-400" />
                    <span>{item.period}</span>
                    {isLatest && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-md border border-emerald-500/20 ml-1">
                        Latest
                      </span>
                    )}
                  </div>
                </div>

                {/* 3. Right Column: Experience Card */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleExpand(item.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                  className="bg-white/90 dark:bg-zinc-950/90 border border-slate-200/90 dark:border-zinc-800/90 rounded-2xl p-6 sm:p-7 shadow-lg dark:shadow-xl dark:shadow-black/80 backdrop-blur-md hover:border-[#0072b1]/60 dark:hover:border-[#0072b1]/60 transition-all duration-300 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#0072b1]/40 relative overflow-hidden"
                >
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0072b1] via-sky-400 to-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />

                  {/* Card Header: 
                      Line 1: Title
                      Line 2: @ Company
                      Line 3: Location 
                  */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      {/* Line 1: Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#0072b1] dark:group-hover:text-sky-400 transition-colors leading-snug">
                        {item.role}
                      </h3>

                      {/* Line 2: @ Company */}
                      <div className="text-sm sm:text-base font-semibold text-[#0072b1] dark:text-sky-400 mt-1">
                        @{item.company}
                      </div>

                      {/* Line 3: Location */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-zinc-400 mt-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#0072b1] dark:text-sky-400 shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Metric Badges Summary */}
                    {item.metrics && item.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 self-start sm:self-auto shrink-0">
                        <span className="inline-flex items-center gap-1 bg-[#0072b1]/10 dark:bg-sky-950/70 border border-[#0072b1]/20 dark:border-sky-800/50 text-[#0072b1] dark:text-sky-300 text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-sm">
                          <TrendingUp className="w-3 h-3" />
                          {item.metrics[0]}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Brief High-Impact Summary */}
                  <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Expandable Quantitative Bullets with Faint Grey Separator Lines */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 pb-2 border-t border-slate-200 dark:border-zinc-800/80 divide-y divide-slate-200/70 dark:divide-zinc-800/70">
                          {item.bulletPoints.map((bullet, bIdx) => (
                            <div
                              key={bIdx}
                              className="py-3 first:pt-1.5 last:pb-1.5 flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed"
                            >
                              <span className="text-[#0072b1] dark:text-sky-400 font-bold mt-0.5 shrink-0 text-base leading-none">
                                ▸
                              </span>
                              <span className="flex-1">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Footer: Interactive Toggle & Tech Tags */}
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pt-4 border-t border-slate-200 dark:border-zinc-900 mt-2">
                    {/* Tech Tags Flow */}
                    <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 text-[11px] font-mono text-slate-700 dark:text-zinc-300 hover:border-[#0072b1]/50 hover:text-[#0072b1] dark:hover:text-sky-400 transition-all duration-150"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Click Card Cue / See More Indicator */}
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0072b1] dark:text-sky-400 shrink-0 whitespace-nowrap self-end py-1 px-2.5 rounded-lg bg-[#0072b1]/5 dark:bg-[#0072b1]/10 group-hover:bg-[#0072b1]/15 transition-colors">
                      <span>{isExpanded ? "See less" : "See more"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
