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
        title="Production Architectural Matrix"
        subtitle="Engineered tier-by-tier with strict type contracts, verified benchmarks, and zero vendor lock-in."
      />

      {/* Bottom CTA Consultation Card */}
      <div className="studio-container mt-14 sm:mt-20 text-center">
        <div className="p-8 sm:p-12 rounded-[32px] bg-white border border-slate-200/90 shadow-2xs max-w-3xl mx-auto space-y-5">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950">
            Have a Specific Tech Stack Requirement?
          </h3>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Whether your project requires Next.js, Node/Express, PostgreSQL, Python LLM pipelines, or Shopify integrations, we adapt to your existing infrastructure.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-950 hover:bg-sky-600 text-white font-semibold text-base transition-all shadow-md active:scale-98"
            >
              <span>Discuss Your Tech Stack</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
