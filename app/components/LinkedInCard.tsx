"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  MapPin,
  Building2,
  GraduationCap,
  Send,
  UserPlus,
  MoreHorizontal,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function LinkedInCard() {
  const { profile } = portfolioData;
  const [connected, setConnected] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Raw mouse coordinates normalized from -0.5 to 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Ultra-smooth spring physics for soft, elegant, non-jittery response
  const springConfig = { damping: 30, stiffness: 120, mass: 0.8 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Soft tilt angles: hovering top-right tilts card so top-right pops toward viewer
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);

  // Glare position coordinates
  const glareX = useTransform(smoothMouseX, [-0.5, 0.5], ["10%", "90%"]);
  const glareY = useTransform(smoothMouseY, [-0.5, 0.5], ["10%", "90%"]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    // Stable relative coordinate calculation relative to static container
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(Math.max(-0.5, Math.min(0.5, x)));
    mouseY.set(Math.max(-0.5, Math.min(0.5, y)));
  }, [mouseX, mouseY]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg mx-auto py-4 select-none [perspective:1000px]"
    >
      {/* Ambient background glow backdrop */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/15 to-teal-500/20 rounded-3xl blur-2xl opacity-60 -z-10 pointer-events-none" />

      {/* Floating Levitation + 3D Tilt Wrapper */}
      <motion.div
        animate={
          isHovered
            ? { y: -6, scale: 1.02 }
            : {
                y: [-8, 8, -8],
                scale: 1,
                rotate: [-0.3, 0.3, -0.3],
              }
        }
        transition={
          isHovered
            ? { duration: 0.4, ease: "easeOut" }
            : {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full bg-zinc-950/90 border border-zinc-800/90 shadow-2xl shadow-black rounded-2xl overflow-hidden backdrop-blur-xl relative transition-colors duration-300 hover:border-emerald-500/40"
      >
        {/* Soft Dynamic Glare Sheen Layer */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.65 : 0,
            background: `radial-gradient(circle 350px at ${glareX} ${glareY}, rgba(52, 211, 153, 0.12), transparent 70%)`,
          }}
        />

        {/* Top Banner */}
        <div className="relative h-36 sm:h-40 w-full bg-gradient-to-r from-zinc-950 via-slate-900 to-zinc-900 overflow-hidden border-b border-zinc-800/60">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:18px_18px]" />
          <div className="absolute -right-6 -top-6 w-40 h-40 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute left-1/4 -bottom-10 w-32 h-32 bg-cyan-500/15 rounded-full blur-xl pointer-events-none" />

          {/* Top Banner Badge */}
          <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-mono text-zinc-300 border border-zinc-700/60">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>in/abdullah-metlo</span>
          </div>
        </div>

        {/* Card Content Area */}
        <div className="px-5 sm:px-6 pb-6 pt-0 relative">
          {/* Avatar Section overlapping banner */}
          <div className="flex justify-between items-end -mt-16 mb-4">
            <div className="relative group">
              {/* High contrast frame with emerald open-to-work accent */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 shadow-2xl shadow-emerald-950/70 relative">
                <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 border-2 border-zinc-950 flex items-center justify-center relative">
                  <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-slate-900 to-black flex items-center justify-center text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-wider">
                    AM
                  </div>
                </div>
                {/* Online Status Dot */}
                <div
                  className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-zinc-950 shadow-md"
                  title="Available for roles"
                />
              </div>
            </div>

            {/* University & Role Indicators */}
            <div className="flex flex-col items-end text-right gap-1 pb-1">
              <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-medium">
                <Building2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate max-w-[150px] sm:max-w-[180px] text-[11px]">
                  {profile.educationOrg}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-normal">
                <GraduationCap className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span className="truncate max-w-[150px] sm:max-w-[180px] text-[11px]">
                  {profile.educationDegree}
                </span>
              </div>
            </div>
          </div>

          {/* Name and Pronouns */}
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {profile.name}
            </h3>
            <span className="inline-flex items-center text-emerald-400" title="Verified Profile">
              <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-zinc-950" />
            </span>
            <span className="text-[11px] text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
              {profile.pronouns}
            </span>
          </div>

          {/* Primary Headline */}
          <p className="text-xs sm:text-sm text-zinc-200 font-normal leading-snug mb-2.5">
            {profile.headline}
          </p>

          {/* Location and Contact Info */}
          <div className="flex items-center flex-wrap gap-x-2.5 gap-y-1 text-xs text-zinc-400 mb-3.5">
            <div className="flex items-center gap-1 text-zinc-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{profile.location}</span>
            </div>
            <span className="text-zinc-600">•</span>
            <a
              href="#contact"
              className="text-emerald-400 hover:text-emerald-300 hover:underline font-medium transition-colors"
            >
              Contact info
            </a>
          </div>

          {/* Connections Count */}
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold mb-4">
            <span className="hover:underline cursor-pointer">
              {profile.connectionsCount} connections
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400 font-normal">
              {profile.followersCount} followers
            </span>
          </div>

          {/* LinkedIn Action Buttons Row */}
          <div className="flex items-center gap-2 mb-4">
            {/* Primary Action Button */}
            <a
              href="#contact"
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs sm:text-sm py-2 px-3 rounded-full transition-all duration-200 shadow-md shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Message</span>
            </a>

            {/* Connect / Pending Button */}
            <button
              onClick={() => setConnected(!connected)}
              className={`flex-1 inline-flex items-center justify-center gap-1.5 font-medium text-xs sm:text-sm py-2 px-3 rounded-full border transition-all duration-200 ${
                connected
                  ? "bg-zinc-900 border-zinc-700 text-zinc-300"
                  : "border-emerald-500/60 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400"
              }`}
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>{connected ? "Pending" : "Connect"}</span>
            </button>

            {/* More Menu Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowMoreMenu(!showMoreMenu)}
                className="p-2 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded-full hover:bg-zinc-900 transition-colors"
                aria-label="More options"
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>

              {showMoreMenu && (
                <div className="absolute right-0 bottom-full mb-2 w-48 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl py-1.5 z-40 text-xs">
                  <a
                    href="#experience"
                    onClick={() => setShowMoreMenu(false)}
                    className="block px-3.5 py-2 text-zinc-200 hover:bg-emerald-500/15 hover:text-emerald-400"
                  >
                    View SAJAK Experience
                  </a>
                  <a
                    href="#skills"
                    onClick={() => setShowMoreMenu(false)}
                    className="block px-3.5 py-2 text-zinc-200 hover:bg-emerald-500/15 hover:text-emerald-400"
                  >
                    View Tech Proficiency
                  </a>
                  <a
                    href="#certifications"
                    onClick={() => setShowMoreMenu(false)}
                    className="block px-3.5 py-2 text-zinc-200 hover:bg-emerald-500/15 hover:text-emerald-400"
                  >
                    View Certifications
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Open to Work Card */}
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-3.5 text-left">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Open to work</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/70 border border-emerald-800/50 px-2 py-0.5 rounded-full">
                Active
              </span>
            </div>
            <p className="text-[11px] text-zinc-300 leading-tight mb-2">
              {profile.openToWorkRoles.join(" • ")}
            </p>
            <a
              href="#about"
              className="text-[11px] text-emerald-400 hover:underline font-medium inline-flex items-center gap-1"
            >
              See complete bio & qualifications
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
