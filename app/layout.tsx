import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdullah Metlo | Computer Science Graduate & Software Developer",
  description:
    "Portfolio of Abdullah Metlo - Computer Science Graduate from Swansea University, Software Developer experienced in full-stack web applications, automated web-scraping scripts, and adaptive machine learning systems.",
  keywords: [
    "Abdullah Metlo",
    "Software Developer",
    "Swansea University",
    "Full-Stack Developer",
    "Machine Learning",
    "Data Analysis",
    "Web Scraping",
    "London UK",
    "Next.js",
    "Python",
  ],
};

import { ThemeProvider } from "./context/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased dark`}
    >
      <body className="min-h-screen bg-[#f8fafc] dark:bg-[#05070c] text-slate-900 dark:text-zinc-100 flex flex-col font-sans selection:bg-[#0072b1] selection:text-white transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
