"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Cpu } from "lucide-react";
import { SkillDetail } from "../data/portfolioData";

interface SkillDetailModalProps {
  skill: SkillDetail | null;
  onClose: () => void;
}

export default function SkillDetailModal({ skill, onClose }: SkillDetailModalProps) {
  if (!skill) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-lg bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-7 shadow-2xl shadow-slate-900/20 dark:shadow-[#0072b1]/30 z-10 overflow-hidden"
        >
          {/* Top Glow Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0072b1] via-sky-400 to-cyan-400" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 dark:text-zinc-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-start gap-3.5 mb-5">
            <div className="w-12 h-12 rounded-xl bg-[#0072b1]/10 border border-[#0072b1]/30 flex items-center justify-center text-[#0072b1] dark:text-sky-400 shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#0072b1] dark:text-sky-400 uppercase tracking-wider font-semibold">
                {skill.category}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {skill.name}
              </h3>
            </div>
          </div>

          {/* Animated 3-Dot Gauge for Proficiency */}
          <div className="bg-slate-50 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 rounded-xl p-4 mb-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">Proficiency Gauge</span>
              <span className="text-xs font-bold text-[#0072b1] dark:text-sky-400 bg-[#0072b1]/10 dark:bg-sky-950/80 border border-[#0072b1]/20 dark:border-sky-800/60 px-2 py-0.5 rounded">
                {skill.level}
              </span>
            </div>

            {/* 3-Dot Meter */}
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((dotIndex) => {
                const isActive = dotIndex <= skill.levelScore;
                return (
                  <div
                    key={dotIndex}
                    className={`flex-1 h-2 rounded-full transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-to-r from-[#0072b1] to-sky-400 shadow-sm shadow-[#0072b1]/50"
                        : "bg-slate-200 dark:bg-zinc-800"
                    }`}
                  />
                );
              })}
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 dark:text-zinc-500 font-mono mt-1.5">
              <span>Foundation</span>
              <span>Advanced</span>
              <span>Expert / Lead</span>
            </div>
          </div>

          {/* Skill Description */}
          <div className="mb-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-1.5">
              Overview
            </h4>
            <p className="text-sm text-slate-700 dark:text-zinc-200 leading-relaxed">
              {skill.description}
            </p>
          </div>

          {/* Practical Usage Context */}
          <div className="mb-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#0072b1] dark:text-sky-400" />
              <span>Real-World Application & Impact</span>
            </h4>
            <ul className="space-y-2">
              {skill.practicalUsage.map((usage, uIdx) => (
                <li
                  key={uIdx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 p-2.5 rounded-lg"
                >
                  <span className="text-[#0072b1] dark:text-sky-400 font-bold mt-0.5">▸</span>
                  <span>{usage}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Projects Tags */}
          {skill.relatedProjects && skill.relatedProjects.length > 0 && (
            <div className="pt-3 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono">Applied in:</span>
              <div className="flex flex-wrap gap-1.5">
                {skill.relatedProjects.map((proj, pIdx) => (
                  <span
                    key={pIdx}
                    className="px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-[11px] font-mono text-slate-700 dark:text-zinc-300"
                  >
                    {proj}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
