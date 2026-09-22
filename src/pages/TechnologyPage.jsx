import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Cpu, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';
import TechEcosystemMarquee from '../components/home/TechEcosystemMarquee';
import TechStackSection from '../components/home/TechStackSection';

export default function TechnologyPage() {
  return (
    <div className="py-12 sm:py-16 md:py-24 bg-blueprint min-h-screen">
      <div className="studio-container mb-12 sm:mb-16">
        
        {/* Centered Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-sky-700 mb-4 shadow-2xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
            <span>ARCHITECTURAL TOOLING & ECOSYSTEM</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight mb-4 leading-tight">
            Our Technology Stack & Modern Ecosystem
          </h1>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We select production-proven frameworks, robust databases, and modern deployment tools that guarantee long-term stability, speed, and effortless scaling.
          </p>
        </div>

        {/* Engineering Principles Strip (Clean Modern Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all duration-300 space-y-2 group">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-sky-600 group-hover:text-white transition-all">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-slate-900 text-base group-hover:text-sky-700 transition-colors">
              Zero Artificial Complexity
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We avoid bloated, brittle dependencies in favor of clean, maintainable modular codebases with high testability.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 space-y-2 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
              Production Security & RBAC
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              JWT token rotation, PCI-compliant payment tokenization, and strict schema input validation by default.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all duration-300 space-y-2 group">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-purple-600 group-hover:text-white transition-all">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-slate-900 text-base group-hover:text-purple-700 transition-colors">
              High-Concurrency Telemetry
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Low-latency WebSockets, Redis pub/sub channels, and global edge CDN distribution with sub-50ms ping.
            </p>
          </div>
        </div>

      </div>

      {/* Animated Marquee Strip */}
      <TechEcosystemMarquee />

      {/* Architectural Tier Cards Section */}
      <TechStackSection 
        title="The Technologies We Build With"
        subtitle="Every tool we use is chosen for stability, speed, and long-term reliability — so your application runs smoothly, scales easily, and remains 100% yours."
      />

      {/* Bottom CTA Consultation Card - Sleek Dark Floating Card Matching Reference */}
      <div className="studio-container mt-14 sm:mt-20 text-center">
        <div className="relative overflow-hidden p-10 sm:p-14 md:p-16 rounded-[32px] bg-[#070b14] border border-slate-800/90 shadow-2xl max-w-4xl mx-auto space-y-6">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Glowing Center Icon Badge */}
          <div className="relative z-10 w-12 h-12 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-sky-400 flex items-center justify-center mx-auto shadow-inner">
            <Sparkles className="w-5 h-5" />
          </div>

          {/* Heading */}
          <h3 className="relative z-10 font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
            Have a Specific Tech Stack Requirement?
          </h3>

          {/* Subtitle */}
          <p className="relative z-10 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Whether your project requires Next.js, Node/Express, PostgreSQL, Python LLM pipelines, or Shopify integrations, we adapt to your existing infrastructure.
          </p>

          {/* Dual Action Buttons */}
          <div className="relative z-10 pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold text-sm transition-all shadow-md active:scale-98"
            >
              <span>Start a Technical Conversation</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </Link>

            <Link
              to="/case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-sm font-semibold transition-all active:scale-98"
            >
              <span>Explore Case Studies</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
