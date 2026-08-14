"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  Database,
  BrainCircuit,
  Mail,
  Github,
  Linkedin,
  GraduationCap,
} from "lucide-react";
import LinkedInCard from "./LinkedInCard";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { profile } = portfolioData;

  return (
    <section className="relative min-h-[94vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden">
      {/* Ambient background light gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-[#0072b1]/15 via-sky-600/10 to-cyan-500/10 blur-[140px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute -top-12 -left-20 w-96 h-96 bg-[#0072b1]/15 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column: Floating LinkedIn Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <LinkedInCard />
          </motion.div>

          {/* Right Column: Pitch Card, Focus Highlights & Action CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18] mb-5">
              Engineering web apps,{" "}
              <span className="bg-gradient-to-r from-sky-500 via-[#0072b1] to-cyan-500 bg-clip-text text-transparent">
                automated pipelines
              </span>{" "}
              & adaptive ML systems.
            </h1>

            {/* Right Sub-Card / Engaging Pitch */}
            <div className="bg-white/85 dark:bg-zinc-950/80 border border-slate-200/90 dark:border-zinc-800/90 rounded-2xl p-5 sm:p-6 mb-7 backdrop-blur-md text-left shadow-lg dark:shadow-xl dark:shadow-black/80 w-full max-w-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0072b1] to-cyan-400 opacity-70" />
              <div className="flex items-start gap-3 mb-2">
                <div className="p-2 rounded-lg bg-[#0072b1]/10 text-[#0072b1] dark:text-sky-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold text-[#0072b1] dark:text-sky-400">
                    Swansea University CS Graduate
                  </div>
                  <div className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 font-normal leading-relaxed mt-1">
                    {profile.pitch}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick 3-Pillar Capability Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mb-8">
              <div className="bg-white/80 dark:bg-zinc-950/70 border border-slate-200/90 dark:border-zinc-800/80 rounded-xl p-3.5 text-left flex items-start gap-3 shadow-sm dark:shadow-none">
                <div className="p-2 rounded-lg bg-[#0072b1]/10 text-[#0072b1] dark:text-sky-400 shrink-0">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">Full-Stack Apps</div>
                  <div className="text-[11px] text-slate-500 dark:text-zinc-400">Next.js, React, Django & Node</div>
                </div>
              </div>

              <div className="bg-white/80 dark:bg-zinc-950/70 border border-slate-200/90 dark:border-zinc-800/80 rounded-xl p-3.5 text-left flex items-start gap-3 shadow-sm dark:shadow-none">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">Web Scraping</div>
                  <div className="text-[11px] text-slate-500 dark:text-zinc-400">Automated Python & Playwright</div>
                </div>
              </div>

              <div className="bg-white/80 dark:bg-zinc-950/70 border border-slate-200/90 dark:border-zinc-800/80 rounded-xl p-3.5 text-left flex items-start gap-3 shadow-sm dark:shadow-none">
                <div className="p-2 rounded-lg bg-[#0072b1]/10 text-[#0072b1] dark:text-sky-400 shrink-0">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">ML & Analytics</div>
                  <div className="text-[11px] text-slate-500 dark:text-zinc-400">Scikit-Learn, Pandas, Power BI</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-7">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0072b1] to-sky-600 hover:from-[#005f94] hover:to-sky-500 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md dark:shadow-lg dark:shadow-[#0072b1]/30 hover:shadow-[#0072b1]/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-slate-800 hover:text-slate-900 dark:text-zinc-200 dark:hover:text-white font-medium text-sm px-6 py-3 rounded-xl border border-slate-300 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-zinc-700 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-[#0072b1] dark:text-sky-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-4 text-slate-500 dark:text-zinc-400 text-xs">
              <span className="text-slate-400 dark:text-zinc-500 font-mono">Connect:</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5 font-medium"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-300 dark:text-zinc-700">•</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0072b1] dark:hover:text-sky-400 transition-colors flex items-center gap-1.5 font-medium"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0072b1] dark:text-sky-400" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300 dark:text-zinc-700">•</span>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-slate-900 dark:hover:text-zinc-200 transition-colors flex items-center gap-1.5 font-medium"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{profile.email}</span>
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
