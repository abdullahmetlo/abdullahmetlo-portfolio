"use client";

import React, { useState } from "react";
import { Cpu, Code2, Database, Wrench, Sparkles, HelpCircle, Layers } from "lucide-react";
import { portfolioData, SkillDetail } from "../data/portfolioData";
import SkillDetailModal from "./SkillDetailModal";

export default function Skills() {
  const { skills } = portfolioData;
  const [selectedSkill, setSelectedSkill] = useState<SkillDetail | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Frontend", "Backend", "Data & ML", "DevOps & Tools"];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technical Proficiency
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Click any skill to inspect the proficiency level gauge, years of experience, and real-world usage context.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-emerald-500 text-black font-bold shadow-md shadow-emerald-950/40"
                  : "bg-zinc-900/90 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredSkills.map((skill: SkillDetail, idx: number) => (
            <button
              key={idx}
              onClick={() => setSelectedSkill(skill)}
              className="bg-zinc-950/80 border border-zinc-800/90 hover:border-emerald-500/60 rounded-xl p-5 text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] group shadow-lg shadow-black/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                    {skill.category}
                  </span>
                  {/* 3-Dot Mini Indicator */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map((dot) => (
                      <span
                        key={dot}
                        className={`w-2 h-2 rounded-full ${
                          dot <= skill.levelScore
                            ? "bg-emerald-400"
                            : "bg-zinc-800"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                  {skill.name}
                </h3>

                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-xs">
                <span className="text-zinc-500 font-mono">{skill.yearsOfExperience}</span>
                <span className="text-emerald-400 group-hover:underline font-semibold flex items-center gap-1 text-[11px]">
                  <span>Inspect details</span>
                  <span>→</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <SkillDetailModal
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />
    </section>
  );
}
