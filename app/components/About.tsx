"use client";

import React from "react";
import { User, Sparkles, GraduationCap, CheckCircle2, Award, Terminal, Cpu } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { profile } = portfolioData;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-600/10 blur-[130px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Abdullah Metlo
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Software Developer, Data Specialist, and Computer Science Graduate from Swansea University.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Bio Card (Left) */}
          <div className="lg:col-span-7 bg-zinc-950/85 border border-zinc-800/90 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-xl shadow-black/80 backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 mb-4 text-emerald-400 font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Background & Engineering Passion</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Bridging rigorous CS theory with production software delivery.
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
                I am a Computer Science graduate from Swansea University with hands-on full-stack development experience, automated web data scrapers, and adaptive machine learning systems.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-4">
                During my tenure as an Assistant Web Developer at SAJAK and through extensive software engineering projects, I have developed transactional platforms handling thousands of transactions, eliminated system downtime bottlenecks, and built end-to-end data analytics pipelines.
              </p>
            </div>

            {/* Quick Metrics Banner */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-zinc-900 text-center">
              <div className="bg-zinc-900/80 border border-zinc-800/80 rounded-xl p-3">
                <div className="text-lg sm:text-xl font-bold text-emerald-400">BSc (Hons)</div>
                <div className="text-[11px] text-zinc-400">Swansea Univ</div>
              </div>
              <div className="bg-zinc-900/80 border border-zinc-800/80 rounded-xl p-3">
                <div className="text-lg sm:text-xl font-bold text-emerald-400">4,000+</div>
                <div className="text-[11px] text-zinc-400">Transactions</div>
              </div>
              <div className="bg-zinc-900/80 border border-zinc-800/80 rounded-xl p-3">
                <div className="text-lg sm:text-xl font-bold text-emerald-400">50k+</div>
                <div className="text-[11px] text-zinc-400">Daily Data Scrapes</div>
              </div>
            </div>
          </div>

          {/* Education & Core Disciplines (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Education Card */}
            <div className="bg-zinc-950/85 border border-zinc-800/90 rounded-2xl p-6 shadow-xl shadow-black/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    {profile.educationOrg}
                  </h4>
                  <div className="text-xs text-emerald-400 font-medium">
                    {profile.educationDegree}
                  </div>
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Core coursework: Data Structures, Algorithms, Software Engineering, Machine Learning, Database Architecture, and Distributed Systems.
              </p>
            </div>

            {/* Core Competencies Box */}
            <div className="bg-zinc-950/85 border border-zinc-800/90 rounded-2xl p-6 shadow-xl shadow-black/80 flex-1 flex flex-col justify-between">
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span>Primary Engineering Focus</span>
              </h4>
              <div className="space-y-2.5 text-xs text-zinc-300">
                <div className="flex items-center gap-2 bg-zinc-900/60 p-2.5 rounded-lg border border-zinc-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full-Stack Web Engineering (Next.js, React, Node, Django)</span>
                </div>
                <div className="flex items-center gap-2 bg-zinc-900/60 p-2.5 rounded-lg border border-zinc-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Automated Data Scraping & Pipeline Engineering (Python, Playwright)</span>
                </div>
                <div className="flex items-center gap-2 bg-zinc-900/60 p-2.5 rounded-lg border border-zinc-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
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
