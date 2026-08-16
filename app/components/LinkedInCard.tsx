"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Building2,
  GraduationCap,
  Send,
  UserPlus,
  MoreHorizontal,
  CheckCircle2,
  Maximize2,
  X,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import AnimatedBanner from "./AnimatedBanner";

export default function LinkedInCard() {
  const { profile } = portfolioData;
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

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

  // Close photo modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsPhotoModalOpen(false);
    };
    if (isPhotoModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPhotoModalOpen]);

  return (
    <>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-lg mx-auto py-4 select-none [perspective:1000px]"
      >
        {/* Ambient background glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0072b1]/25 via-sky-500/20 to-blue-600/20 rounded-3xl blur-2xl opacity-60 -z-10 pointer-events-none" />

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
          className="w-full bg-white/95 dark:bg-zinc-950/90 border border-slate-200/90 dark:border-zinc-800/90 shadow-xl dark:shadow-2xl shadow-slate-200/60 dark:shadow-black rounded-2xl overflow-hidden backdrop-blur-xl relative transition-colors duration-300 hover:border-[#0072b1]/50"
        >
          {/* Soft Dynamic Glare Sheen Layer */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0.65 : 0,
              background: `radial-gradient(circle 350px at ${glareX} ${glareY}, rgba(56, 189, 248, 0.15), transparent 70%)`,
            }}
          />

          {/* Top Animated Interactive Banner */}
          <AnimatedBanner />

          {/* Card Content Area */}
          <div className="px-5 sm:px-6 pb-6 pt-0 relative">
            {/* Avatar Section overlapping banner */}
            <div className="flex justify-between items-end -mt-16 mb-4">
              <div className="relative group/avatar">
                {/* High contrast frame with blue open-to-work accent */}
                <div
                  onClick={() => setIsPhotoModalOpen(true)}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-[#0072b1] via-sky-400 to-cyan-400 shadow-xl dark:shadow-2xl shadow-[#0072b1]/30 relative cursor-pointer group-hover/avatar:scale-105 transition-transform duration-300"
                  title="Click to enlarge profile photo"
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-zinc-900 border-2 border-white dark:border-zinc-950 flex items-center justify-center relative">
                    <img
                      src="/profile.jpg"
                      alt={profile.name}
                      className="w-full h-full object-cover object-[100%_53%] scale-350 origin-[47%] transition-transform duration-300 group-hover/avatar:scale-160"
                    />

                    {/* Hover Overlay with Maximize Icon */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[1px]">
                      <Maximize2 className="w-5 h-5 text-white drop-shadow-md" />
                    </div>
                  </div>

                  {/* Online Status Dot (Green) */}
                  <div
                    className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-zinc-950 shadow-md ring-2 ring-white dark:ring-zinc-950 z-10"
                    title="Available for roles"
                  />
                </div>
              </div>

              {/* University & Role Indicators */}
              <div className="flex flex-col items-end text-right gap-1 pb-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-zinc-300 font-medium">
                  <Building2 className="w-3.5 h-3.5 text-[#0072b1] dark:text-sky-400 shrink-0" />
                  <span className="truncate max-w-[150px] sm:max-w-[180px] text-[11px]">
                    {profile.educationOrg}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-zinc-400 font-normal">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-400 shrink-0" />
                  <span className="truncate max-w-[150px] sm:max-w-[180px] text-[11px]">
                    {profile.educationDegree}
                  </span>
                </div>
              </div>
            </div>

            {/* Name and Pronouns */}
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {profile.name}
              </h3>
              <span className="inline-flex items-center text-[#0072b1] dark:text-sky-400" title="Verified Profile">
                <CheckCircle2 className="w-4 h-4 fill-[#0072b1] text-white dark:text-zinc-950" />
              </span>
              <span className="text-[11px] text-slate-600 dark:text-zinc-400 bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 px-2 py-0.5 rounded">
                {profile.pronouns}
              </span>
            </div>

            {/* Primary Headline */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-200 font-normal leading-snug mb-2.5">
              {profile.headline}
            </p>

            {/* Location and Contact Info */}
            <div className="flex items-center flex-wrap gap-x-2.5 gap-y-1 text-xs text-slate-500 dark:text-zinc-400 mb-3.5">
              <div className="flex items-center gap-1 text-slate-700 dark:text-zinc-300 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#0072b1] dark:text-sky-400 shrink-0" />
                <span>{profile.location}</span>
              </div>
              <span className="text-slate-300 dark:text-zinc-600">•</span>
              <a
                href="#contact"
                className="text-[#0072b1] hover:underline font-medium transition-colors"
              >
                Contact info
              </a>
            </div>

            {/* Connections Count */}
            <div className="flex items-center gap-2 text-xs text-[#0072b1] font-semibold mb-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
              >
                {profile.connectionsCount} connections
              </a>
            </div>

            {/* LinkedIn Action Buttons Row */}
            <div className="flex items-center gap-2 mb-4">
              {/* Primary Action Button */}
              <a
                href="#contact"
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#0072b1] hover:bg-[#005f94] text-white font-bold text-xs sm:text-sm py-2 px-3 rounded-full transition-all duration-200 shadow-md shadow-[#0072b1]/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Message</span>
              </a>

              {/* Connect Button leading directly to LinkedIn profile */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 font-medium text-xs sm:text-sm py-2 px-3 rounded-full border border-[#0072b1]/60 text-[#0072b1] dark:text-sky-400 hover:bg-[#0072b1]/10 hover:border-[#0072b1] transition-all duration-200"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Connect</span>
              </a>

              {/* More Menu Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowMoreMenu(!showMoreMenu)}
                  className="p-2 text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 rounded-full hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors"
                  aria-label="More options"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>

                {showMoreMenu && (
                  <div className="absolute right-0 bottom-full mb-2 w-48 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl shadow-xl py-1.5 z-40 text-xs">
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setShowMoreMenu(false)}
                      className="block px-3.5 py-2 text-[#0072b1] dark:text-sky-400 font-semibold hover:bg-slate-100 dark:hover:bg-[#0072b1]/15"
                    >
                      Open LinkedIn Profile ↗
                    </a>
                    <a
                      href="#experience"
                      onClick={() => setShowMoreMenu(false)}
                      className="block px-3.5 py-2 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-[#0072b1]/15 hover:text-[#0072b1] dark:hover:text-sky-400"
                    >
                      View SAJAK Experience
                    </a>
                    <a
                      href="#skills"
                      onClick={() => setShowMoreMenu(false)}
                      className="block px-3.5 py-2 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-[#0072b1]/15 hover:text-[#0072b1] dark:hover:text-sky-400"
                    >
                      View Tech Proficiency
                    </a>
                    <a
                      href="#certifications"
                      onClick={() => setShowMoreMenu(false)}
                      className="block px-3.5 py-2 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-[#0072b1]/15 hover:text-[#0072b1] dark:hover:text-sky-400"
                    >
                      View Certifications
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enlarged Profile Photo Lightbox Modal */}
      <AnimatePresence>
        {isPhotoModalOpen && (
          <div
            onClick={() => setIsPhotoModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-3xl max-w-md w-full overflow-hidden shadow-2xl relative flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {profile.name}
                  </h3>
                  <span className="inline-flex items-center text-[#0072b1] dark:text-sky-400">
                    <CheckCircle2 className="w-4 h-4 fill-[#0072b1] text-white dark:text-zinc-950" />
                  </span>
                </div>
                <button
                  onClick={() => setIsPhotoModalOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-900 transition-colors cursor-pointer"
                  aria-label="Close photo preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body - High-Resolution Image */}
              <div className="relative w-full aspect-square bg-slate-900 flex items-center justify-center overflow-hidden p-3">
                <img
                  src="/profile.jpg"
                  alt={profile.name}
                  className="w-full h-full object-cover object-[50%_25%] scale-140 origin-center transition-transform duration-300 group-hover/avatar:scale-190"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 bg-slate-50 dark:bg-zinc-900/60 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between gap-3 text-xs text-slate-600 dark:text-zinc-300">
                <span className="font-mono text-[#0072b1] dark:text-sky-400 font-medium">
                  {profile.currentRole}
                </span>
                <span className="text-slate-500 dark:text-zinc-400">
                  {profile.location}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
