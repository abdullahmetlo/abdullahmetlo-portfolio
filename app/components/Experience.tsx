"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  Sparkles,
  TrendingUp,
  Award,
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
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Track Record
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Proven contributions across high-impact web development, database optimization, and quantitative improvements.
          </p>
        </div>

        {/* Vertical Spine Timeline Layout */}
        <div className="relative pl-6 sm:pl-10 space-y-10 before:absolute before:inset-0 before:left-2 sm:before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-zinc-800 before:to-zinc-900">
          {experience.map((item: ExperienceItem) => {
            const isExpanded = !!expandedItems[item.id];

            return (
              <div key={item.id} className="relative group">
                {/* Timeline Spine Dot */}
                <div className="absolute -left-6 sm:-left-10 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-950 border-2 border-emerald-400 shadow-md shadow-emerald-500/50 group-hover:scale-125 transition-transform" />

                {/* Experience Card */}
                <div className="bg-zinc-950/85 border border-zinc-800/90 rounded-2xl p-6 sm:p-7 shadow-xl shadow-black/80 backdrop-blur-md hover:border-zinc-700 transition-all duration-300">
                  
                  {/* Card Header: Role - @company */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white flex items-center flex-wrap gap-2">
                        <span>{item.role}</span>
                        <span className="text-emerald-400 font-semibold">
                          @{item.company}
                        </span>
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-zinc-400 mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-emerald-400" />
                          {item.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 font-mono text-zinc-300">
                          <Calendar className="w-3 h-3 text-zinc-400" />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {/* Metric Badges Summary */}
                    {item.metrics && item.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 self-start sm:self-auto">
                        <span className="inline-flex items-center gap-1 bg-emerald-950/70 border border-emerald-800/50 text-emerald-300 text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                          <TrendingUp className="w-3 h-3" />
                          {item.metrics[0]}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Brief High-Impact Introductory Line */}
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Expandable Quantitative Bullets */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 pb-4 border-t border-zinc-800/80 space-y-2.5">
                          {item.bulletPoints.map((bullet, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                              <span className="text-emerald-400 font-bold mt-0.5">▸</span>
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Footer: Interactive Toggle & Tech Tags */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-zinc-900">
                    {/* Tech Tags Flow */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono text-zinc-300 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-zinc-800/80 transition-all duration-150"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* See More / See Less Button */}
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors self-end sm:self-auto py-1 px-2.5 rounded-lg hover:bg-emerald-950/40"
                    >
                      <span>{isExpanded ? "See less" : "See quantitative achievements"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
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
