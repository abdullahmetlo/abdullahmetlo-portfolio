"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import LinkedInCard from "./LinkedInCard";
import { portfolioData } from "../data/portfolioData";

const GLYPHS = "!@#$%^&*<>[]{}|;:,.<>/?~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// Decryption Solver for "Hello World!!"
function DecryptedHelloWorld({ text = "Hello World!!" }: { text?: string }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let iteration = 0;
    const maxIterations = 2;
    const speed = 18;

    const interval = setInterval(() => {
      const solvedLength = Math.floor(iteration / maxIterations);

      if (solvedLength >= text.length) {
        setDisplayText(text);
        clearInterval(interval);
        return;
      }

      let result = "";
      for (let i = 0; i < text.length; i++) {
        if (i < solvedLength) {
          result += text[i];
        } else if (text[i] === " " || text[i] === "\n") {
          result += text[i];
        } else {
          result += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }

      setDisplayText(result);
      iteration++;
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText || text}</span>;
}

interface TypewriterPhrase {
  text: string;
  gradientClass: string;
  cursorColor: string;
}

const ROTATING_PHRASES: TypewriterPhrase[] = [
  {
    text: "a Software Developer",
    gradientClass: "from-sky-500 via-[#0072b1] to-cyan-400",
    cursorColor: "bg-[#0072b1] dark:bg-sky-400",
  },
  {
    text: "a Clean Code Advocate",
    gradientClass: "from-emerald-400 via-teal-500 to-emerald-500",
    cursorColor: "bg-emerald-500",
  },
  {
    text: "an Avid Reader",
    gradientClass: "from-violet-400 via-purple-500 to-indigo-400",
    cursorColor: "bg-purple-500",
  },
  {
    text: "a Gamer",
    gradientClass: "from-amber-400 via-orange-500 to-rose-400",
    cursorColor: "bg-amber-500",
  },
  {
    text: "your next engineering hire",
    gradientClass: "from-amber-400 via-yellow-500 to-rose-400",
    cursorColor: "bg-amber-500",
  },
];

// Infinite Typewriter Hook Component
function InfiniteTypewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = ROTATING_PHRASES[phraseIndex].text;

    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing forward
      if (currentText.length < fullText.length) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, 75);
      } else {
        // Finished typing phrase, pause before backspacing
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      // Backspacing
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, 40);
      } else {
        // Finished backspacing, rotate to next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, phraseIndex]);

  const currentPhrase = ROTATING_PHRASES[phraseIndex];

  return (
    <div className="flex flex-col mb-7 text-left select-none">
      {/* Decrypted "Hello World!!" Line */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0072b1]/10 dark:bg-sky-950/60 border border-[#0072b1]/25 dark:border-sky-800/40 text-[#0072b1] dark:text-sky-400 text-xs sm:text-sm font-mono font-bold w-fit mb-3 shadow-sm">
        <span className="inline-block w-2 h-2 rounded-full bg-[#0072b1] dark:bg-sky-400 animate-pulse" />
        <DecryptedHelloWorld text="Hello World!!" />
      </div>

      {/* Welcome to my Portfolio - Glass Plaque Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-slate-200/90 dark:border-zinc-800/90 shadow-sm dark:shadow-md mb-6 sm:mb-8 w-fit">
        <Sparkles className="w-4 h-4 text-[#0072b1] dark:text-sky-400 shrink-0" />
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Welcome to my <span className="bg-gradient-to-r from-[#0072b1] via-sky-400 to-cyan-400 bg-clip-text text-transparent">Portfolio</span>
        </h2>
      </div>

      {/* Main Dynamic Headline: "I am [rotating text]" */}
      <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2] min-h-[90px] sm:min-h-[115px] flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span>I am</span>
        <span
          className={`bg-gradient-to-r ${currentPhrase.gradientClass} bg-clip-text text-transparent font-extrabold`}
        >
          {currentText}
        </span>
        {/* Blinking Typewriter Cursor */}
        <span
          className={`inline-block w-1 sm:w-1.5 h-7 sm:h-9 ml-0.5 ${currentPhrase.cursorColor} animate-pulse align-middle rounded-full`}
        />
      </h1>

    </div>
  );
}

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

          {/* Right Column: Decrypted Hello World & Infinite Rotating Typewriter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Dynamic Infinite Typewriter Headline */}
            <InfiniteTypewriter />



          </motion.div>
        </div>
      </div>

      {/* Floating Scroll-Down Indicator Button */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group flex flex-col items-center gap-1.5 focus:outline-none"
          aria-label="Scroll to About section"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md border border-slate-200/90 dark:border-zinc-800/90 text-slate-500 dark:text-zinc-400 group-hover:text-[#0072b1] dark:group-hover:text-sky-400 group-hover:border-[#0072b1]/50 dark:group-hover:border-sky-400/50 shadow-md shadow-slate-200/50 dark:shadow-black/60 flex items-center justify-center transition-colors"
          >
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-0.5 transition-transform" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
