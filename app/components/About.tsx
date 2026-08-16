"use client";

import React from "react";
import { GraduationCap, CheckCircle2, Cpu, Code2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { profile } = portfolioData;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#0072b1]/15 blur-[130px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0072b1]/10 dark:bg-sky-950/60 border border-[#0072b1]/25 dark:border-sky-800/40 text-[#0072b1] dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Terminal Window UI (Left Column) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border border-slate-200/90 dark:border-zinc-800/90 rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl dark:shadow-black/90 transition-all duration-300 relative group text-left h-full flex flex-col justify-between">
              {/* Top Subtle Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0072b1] via-sky-400 to-cyan-400 opacity-80" />

              {/* Terminal Title Bar */}
              <div className="bg-slate-100/80 dark:bg-zinc-900/80 border-b border-slate-200/80 dark:border-zinc-800/80 px-4 py-2.5 flex items-center justify-between">
                {/* 3 Windows Window Control Buttons */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/30 hover:opacity-100 transition-opacity inline-block cursor-default" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/30 hover:opacity-100 transition-opacity inline-block cursor-default" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/30 hover:opacity-100 transition-opacity inline-block cursor-default" />
                </div>

                {/* Terminal Center Header Title */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-zinc-400 font-medium">
                  <Code2 className="w-3.5 h-3.5 text-[#0072b1] dark:text-sky-400" />
                  <span>abdullah@portfolio: ~ (zsh)</span>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>ready</span>
                </div>
              </div>

              {/* Terminal Body with Monospace Commands & Clean Outputs */}
              <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm space-y-3.5 select-text flex-1">
                {/* Command 1: whoami */}
                <div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-zinc-300 font-medium">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">abdullah@dev</span>
                    <span className="text-slate-400 dark:text-zinc-600">:</span>
                    <span className="text-[#0072b1] dark:text-sky-400 font-semibold">~</span>
                    <span className="text-slate-400 dark:text-zinc-500">$</span>
                    <span className="text-slate-900 dark:text-white font-semibold">whoami</span>
                  </div>
                  <div className="text-slate-600 dark:text-zinc-300 mt-1 pl-4 border-l-2 border-[#0072b1]/30">
                    <span className="text-[#0072b1] dark:text-sky-400 font-semibold">Abdullah Metlo</span>
                    <span className="text-slate-400 dark:text-zinc-500"> — </span>
                    <span>BSc (Hons) Computer Science Graduate (Swansea University)</span>
                  </div>
                </div>

                {/* Command 2: cat pitch.txt */}
                <div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-zinc-300 font-medium">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">abdullah@dev</span>
                    <span className="text-slate-400 dark:text-zinc-600">:</span>
                    <span className="text-[#0072b1] dark:text-sky-400 font-semibold">~</span>
                    <span className="text-slate-400 dark:text-zinc-500">$</span>
                    <span className="text-slate-900 dark:text-white font-semibold">cat pitch.txt</span>
                  </div>
                  <div className="text-slate-700 dark:text-zinc-200 mt-1 pl-4 border-l-2 border-sky-400/40 leading-relaxed font-sans text-xs sm:text-sm">
                    {profile.pitch}
                  </div>
                </div>

                {/* Command 3: Core competencies */}
                <div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-zinc-300 font-medium">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">abdullah@dev</span>
                    <span className="text-slate-400 dark:text-zinc-600">:</span>
                    <span className="text-[#0072b1] dark:text-sky-400 font-semibold">~</span>
                    <span className="text-slate-400 dark:text-zinc-500">$</span>
                    <span className="text-slate-900 dark:text-white font-semibold">./get-stack.sh</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1.5 pl-4 border-l-2 border-emerald-400/40">
                    {["React & Next.js", "Python", "Docker & CI/CD", "PostgreSQL", "Machine Learning"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-[11px] text-slate-700 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Active Blinking Prompt Line */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">abdullah@dev</span>
                  <span className="text-slate-400 dark:text-zinc-600">:</span>
                  <span className="text-[#0072b1] dark:text-sky-400 font-semibold">~</span>
                  <span className="text-slate-400 dark:text-zinc-500">$</span>
                  <span className="inline-block w-2.5 h-4 bg-[#0072b1] dark:bg-sky-400 animate-pulse rounded-xs" />
                </div>
              </div>

              {/* Quick Metrics Banner */}
              <div className="grid grid-cols-3 gap-3 p-4 sm:p-5 border-t border-slate-200/80 dark:border-zinc-800/80 text-center bg-slate-50/50 dark:bg-zinc-900/40">
                <div className="bg-white/90 dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800/80 rounded-xl p-2.5 shadow-sm">
                  <div className="text-base sm:text-lg font-bold text-[#0072b1] dark:text-sky-400">BSc (Hons)</div>
                  <div className="text-[10px] text-slate-500 dark:text-zinc-400">Swansea Univ</div>
                </div>
                <div className="bg-white/90 dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800/80 rounded-xl p-2.5 shadow-sm">
                  <div className="text-base sm:text-lg font-bold text-[#0072b1] dark:text-sky-400">4,000+</div>
                  <div className="text-[10px] text-slate-500 dark:text-zinc-400">Transactions</div>
                </div>
                <div className="bg-white/90 dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800/80 rounded-xl p-2.5 shadow-sm">
                  <div className="text-base sm:text-lg font-bold text-[#0072b1] dark:text-sky-400">50k+</div>
                  <div className="text-[10px] text-slate-500 dark:text-zinc-400">Daily Scrapes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Core Disciplines (Right Column) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Education Card */}
            <div className="bg-white/85 dark:bg-zinc-950/85 border border-slate-200/90 dark:border-zinc-800/90 rounded-2xl p-6 shadow-lg dark:shadow-xl dark:shadow-black/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#0072b1]/10 border border-[#0072b1]/30 flex items-center justify-center text-[#0072b1] dark:text-sky-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {profile.educationOrg}
                  </h4>
                  <div className="text-xs text-[#0072b1] dark:text-sky-400 font-medium">
                    {profile.educationDegree}
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                Core coursework: Data Structures, Algorithms, Software Engineering, Machine Learning, Database Architecture, and Distributed Systems.
              </p>
            </div>

            {/* Core Competencies Box */}
            <div className="bg-white/85 dark:bg-zinc-950/85 border border-slate-200/90 dark:border-zinc-800/90 rounded-2xl p-6 shadow-lg dark:shadow-xl dark:shadow-black/80 flex-1 flex flex-col justify-between">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#0072b1] dark:text-sky-400" />
                <span>Primary Engineering Focus</span>
              </h4>
              <div className="space-y-2.5 text-xs text-slate-700 dark:text-zinc-300">
                <div className="flex items-center gap-2 bg-slate-50 dark:bg-zinc-900/60 p-2.5 rounded-lg border border-slate-200 dark:border-zinc-800/80">
                  <CheckCircle2 className="w-4 h-4 text-[#0072b1] dark:text-sky-400 shrink-0" />
                  <span>Full-Stack Web Engineering (Next.js, React, Node, Django)</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 dark:bg-zinc-900/60 p-2.5 rounded-lg border border-slate-200 dark:border-zinc-800/80">
                  <CheckCircle2 className="w-4 h-4 text-[#0072b1] dark:text-sky-400 shrink-0" />
                  <span>Automated Data Scraping & Pipeline Engineering (Python, Playwright)</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 dark:bg-zinc-900/60 p-2.5 rounded-lg border border-slate-200 dark:border-zinc-800/80">
                  <CheckCircle2 className="w-4 h-4 text-[#0072b1] dark:text-sky-400 shrink-0" />
                  <span>Machine Learning & Business Intelligence (Scikit-Learn, Power BI)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
