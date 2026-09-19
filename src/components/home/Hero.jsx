import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronRight, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';
import ProjectMockupRenderer from '../ui/ProjectMockupRenderer';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('multitranslate-ai');

  const previewTabs = [
    { id: 'multitranslate-ai', label: 'MultiTranslate AI' },
    { id: 'agenstory', label: 'AgenStory' },
    { id: 'imposter', label: 'Imposter' },
  ];

  return (
    <section className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 md:pt-20 md:pb-28 overflow-hidden bg-blueprint border-b border-slate-200">
      <div className="studio-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-left">

            {/* Main Headline */}
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-slate-950 tracking-tight leading-[1.12]">
              We Build Digital Products That Move Businesses Forward.
            </h1>

            {/* Supporting Copy */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              AneHit IT Tech helps startups, businesses and founders turn ideas into modern websites, full-stack applications and AI-powered digital experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-sky-600 text-white font-semibold text-sm transition-all shadow-md active:scale-98"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm transition-all active:scale-98 shadow-xs"
              >
                <span>Explore Our Work</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Direct Engineer Access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Modern React & APIs</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Clean Architecture</span>
              </div>
            </div>
          </div>

          {/* Right Column: Workbench Visual */}
          <div className="lg:col-span-6 w-full">
            <div className="studio-card p-3 sm:p-4 relative shadow-xl border-slate-200 bg-white">

              {/* Workbench Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-2 py-2 border-b border-slate-100 mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <span className="font-mono text-[11px] text-slate-500 ml-2 font-medium">
                    STUDIO_WORKBENCH
                  </span>
                </div>

                {/* Switch Tabs */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 overflow-x-auto max-w-full">
                  {previewTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all whitespace-nowrap ${activeTab === tab.id
                          ? 'bg-white text-slate-900 font-semibold shadow-xs border border-slate-200'
                          : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive Mockup */}
              <div className="w-full overflow-hidden">
                <ProjectMockupRenderer projectId={activeTab} />
              </div>

              {/* Quick Info Strip */}
              <div className="mt-3 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-600">
                <div className="flex items-center gap-1.5 truncate">
                  <Terminal className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span className="truncate">Interactive verified build</span>
                </div>
                <Link
                  to={`/work/${activeTab}`}
                  className="text-sky-600 hover:underline flex items-center gap-1 font-medium shrink-0 ml-2"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
