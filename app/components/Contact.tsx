"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, MessageSquare, CheckCircle2, Linkedin, Github } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { profile } = portfolioData;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0072b1]/15 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0072b1]/10 dark:bg-sky-950/60 border border-[#0072b1]/25 dark:border-sky-800/40 text-[#0072b1] dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch With Abdullah
          </h2>
          <p className="mt-3 text-slate-600 dark:text-zinc-400 text-sm sm:text-base">
            Open to software developer roles, ML & data engineering opportunities, or technical inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="bg-white/85 dark:bg-zinc-950/85 border border-slate-200/90 dark:border-zinc-800/90 rounded-2xl p-6 sm:p-8 shadow-lg dark:shadow-xl dark:shadow-black/80">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Direct Communication
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0072b1]/10 border border-[#0072b1]/30 flex items-center justify-center text-[#0072b1] dark:text-sky-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-zinc-500 font-mono">Direct Email</div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-[#0072b1] dark:hover:text-sky-400 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-zinc-500 font-mono">Location</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {profile.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-zinc-900">
                <div className="text-xs text-slate-500 dark:text-zinc-500 font-mono mb-3">
                  Online Profiles
                </div>
                <div className="flex gap-3">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-[#0072b1]/60 text-xs font-medium text-slate-800 dark:text-zinc-200 hover:text-[#0072b1] dark:hover:text-white transition-all shadow-sm dark:shadow-none"
                  >
                    <Linkedin className="w-4 h-4 text-[#0072b1] dark:text-sky-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 text-xs font-medium text-slate-800 dark:text-zinc-200 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm dark:shadow-none"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Availability Status Box */}
            <div className="bg-[#0072b1]/10 dark:bg-gradient-to-r dark:from-[#0072b1]/15 dark:to-sky-950/40 border border-[#0072b1]/25 dark:border-[#0072b1]/30 rounded-2xl p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0072b1] dark:bg-sky-400 animate-pulse" />
                <span>Immediate Availability</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                Eligible to work in the UK. Seeking full-time Software Developer, Full-Stack, and Data/ML roles.
              </p>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7">
            <div className="bg-white/85 dark:bg-zinc-950/85 border border-slate-200/90 dark:border-zinc-800/90 rounded-2xl p-6 sm:p-8 shadow-lg dark:shadow-xl dark:shadow-black/80">
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#0072b1]/10 dark:bg-[#0072b1]/20 text-[#0072b1] dark:text-sky-400 flex items-center justify-center mb-4 border border-[#0072b1]/30 dark:border-[#0072b1]/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Received!</h4>
                  <p className="text-sm text-slate-600 dark:text-zinc-300 max-w-sm mb-6">
                    Thank you for contacting me. I will review your message and reply promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#0072b1] dark:text-sky-400 hover:underline font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-zinc-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full bg-slate-50 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-[#0072b1] focus:ring-1 focus:ring-[#0072b1] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-zinc-300 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full bg-slate-50 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-[#0072b1] focus:ring-1 focus:ring-[#0072b1] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-zinc-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Opportunity / Project Discussion"
                      className="w-full bg-slate-50 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-[#0072b1] focus:ring-1 focus:ring-[#0072b1] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-zinc-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about the role, team, or project..."
                      className="w-full bg-slate-50 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-[#0072b1] focus:ring-1 focus:ring-[#0072b1] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0072b1] to-sky-600 hover:from-[#005f94] hover:to-sky-500 text-white font-bold py-3 px-6 rounded-xl shadow-md dark:shadow-lg dark:shadow-[#0072b1]/30 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
