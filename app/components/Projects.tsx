"use client";

import React, { useState } from "react";
import { FolderGit2, Github, Sparkles, ArrowUpRight, Filter } from "lucide-react";
import { portfolioData, Project } from "../data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Full-Stack", "Machine Learning", "Data & Automation"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-600/10 blur-[140px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Project Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Systems & Applications
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl">
              Production web applications, automated distributed web scrapers, and predictive machine learning models.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-zinc-950/90 border border-zinc-800 p-1.5 rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === cat
                    ? "bg-emerald-500 text-black font-bold shadow-md shadow-emerald-950/40"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="bg-zinc-950/85 border border-zinc-800/90 hover:border-emerald-500/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden shadow-xl shadow-black/80"
            >
              {/* Top Accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  project.accentColor || "from-emerald-500 to-cyan-500"
                } opacity-70 group-hover:h-1.5 transition-all duration-300`}
              />

              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="inline-block text-[11px] font-mono font-semibold text-emerald-400 mb-1.5">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-900 rounded-lg transition-colors"
                        aria-label="Live Demo"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {project.metrics && (
                  <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl px-3.5 py-2 mb-6 flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="font-mono text-emerald-400 font-semibold">
                      {project.metrics}
                    </span>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-zinc-900/90 text-zinc-300 text-xs font-mono border border-zinc-800"
                    >
                      {tag}
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
