"use client";

import React from "react";
import { User, Sparkles, GraduationCap, CheckCircle2, Cpu } from "lucide-react";
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
            <User className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Abdullah Metlo
          </h2>
          <p className="mt-3 text-slate-600 dark:text-zinc-400 text-sm sm:text-base">
            Software Developer, Data Specialist, and Computer Science Graduate from Swansea University.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Bio Card (Left) */}
          <div className="lg:col-span-7 bg-white/85 dark:bg-zinc-950/85 border border-slate-200/90 dark:border-zinc-800/90 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-lg dark:shadow-xl dark:shadow-black/80 backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#0072b1] dark:text-sky-400 font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Background & Engineering Passion</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Bridging rigorous CS theory with production software delivery.
              </h3>
              <p className="text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
                I am a Computer Science graduate from Swansea University with hands-on full-stack development experience, automated web data scrapers, and adaptive machine learning systems.
              </p>
              <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-4">
                During my tenure as an Assistant Web Developer at SAJAK and through extensive software engineering projects, I have developed transactional platforms handling thousands of transactions, eliminated system downtime bottlenecks, and built end-to-end data analytics pipelines.
              </p>
            </div>

            {/* Quick Metrics Banner */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200 dark:border-zinc-900 text-center">
              <div className="bg-slate-50 dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800/80 rounded-xl p-3">
                <div className="text-lg sm:text-xl font-bold text-[#0072b1] dark:text-sky-400">BSc (Hons)</div>
                <div className="text-[11px] text-slate-500 dark:text-zinc-400">Swansea Univ</div>
              </div>
              <div className="bg-slate-50 dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800/80 rounded-xl p-3">
                <div className="text-lg sm:text-xl font-bold text-[#0072b1] dark:text-sky-400">4,000+</div>
                <div className="text-[11px] text-slate-500 dark:text-zinc-400">Transactions</div>
              </div>
              <div className="bg-slate-50 dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800/80 rounded-xl p-3">
                <div className="text-lg sm:text-xl font-bold text-[#0072b1] dark:text-sky-400">50k+</div>
                <div className="text-[11px] text-slate-500 dark:text-zinc-400">Daily Data Scrapes</div>
              </div>
            </div>
          </div>

          {/* Education & Core Disciplines (Right) */}
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
