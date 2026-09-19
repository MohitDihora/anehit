import React, { useState } from 'react';
import { 
  Cpu, 
  Server, 
  Database, 
  Bot, 
  Cloud, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Layers, 
  Zap, 
  ArrowRight,
  Sparkles,
  ArrowUpRight,
  ExternalLink,
  Lock,
  Code2,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

// Custom Crisp Brand & Technology SVG Icons
function TechLogo({ name, className = "w-5 h-5" }) {
  switch (name) {
    case 'React 19':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'Next.js':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.87 13.5l-4.73-6.66v6.66H9.5V7.5h1.76l4.63 6.55V7.5h1.48v8h-1.5z" />
        </svg>
      );
    case 'TypeScript':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
          <path d="M11.5 11h-3v7H7v-7H4V9.5h7.5V11zm7.2 4.2c-.4.5-1.1.8-2 .8-1.2 0-2.1-.6-2.1-1.8 0-1.3 1-1.7 2.2-2 .8-.2 1.3-.4 1.3-.8 0-.4-.4-.6-1-.6-.6 0-1 .3-1.2.8l-1.3-.7c.4-.9 1.4-1.4 2.6-1.4 1.4 0 2.4.7 2.4 1.9 0 1.2-.9 1.7-2.1 2-.9.2-1.4.4-1.4.8 0 .4.4.6 1.1.6.6 0 1.2-.3 1.4-.7l1.1.9z" fill="#fff" />
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case 'JavaScript ES6+':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#F7DF1E" />
          <path d="M7 16.5c.3.5.7.8 1.4.8.7 0 1.1-.4 1.1-1.3v-4.5h1.5v4.5c0 1.7-1 2.5-2.6 2.5-1.3 0-2.1-.6-2.5-1.5l1.1-.5zm7.2-.2c.4.6 1.1 1 2 1 .8 0 1.4-.4 1.4-1 0-.6-.5-.9-1.4-1.2l-.7-.3c-1.3-.5-2.1-1.2-2.1-2.4 0-1.4 1.1-2.4 2.7-2.4 1.2 0 2 .5 2.5 1.4l-1.1.7c-.3-.5-.7-.8-1.4-.8-.7 0-1.2.4-1.2.9 0 .5.4.8 1.2 1.1l.7.3c1.5.6 2.3 1.3 2.3 2.6 0 1.6-1.2 2.6-3 2.6-1.5 0-2.5-.7-3-1.8l1.2-.7z" fill="#000" />
        </svg>
      );
    case 'Node.js':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.31L4.84 8.5v7l7.16 4.19 7.16-4.19v-7L12 4.31zM11 8h2v5.5h2.5V15H11V8z" />
        </svg>
      );
    case 'Express.js':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'WebSockets':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8l4-4m0 0l4 4M8 4v16m12-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      );
    case 'Python / Flask':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3v2.8h5.9v.8H6.5S4 6.7 4 10.5c0 3.8 2.2 3.7 2.2 3.7h1.3v-1.8s-.1-2.2 2.2-2.2h5.7s2.1.1 2.1-2.1V4.2S17.7 2 11.9 2zm-1.6 1.7c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM12.1 22c3.1 0 2.9-1.3 2.9-1.3v-2.8H9.1v-.8h8.4s2.5.2 2.5-3.6c0-3.8-2.2-3.7-2.2-3.7h-1.3v1.8s.1 2.2-2.2 2.2H8.6s-2.1-.1-2.1 2.1v3.9s-.2 2.2 5.6 2.2zm1.6-1.7c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
        </svg>
      );
    case 'PostgreSQL':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93V15h-2v3.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 11v2h2V9.5l4 3.5V11l3.79-1.79c.13.58.21 1.17.21 1.79 0 4.08-3.05 7.44-7 7.93z" />
        </svg>
      );
    case 'MongoDB':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 2C11.5 2 7 8 7 13.5c0 3.6 2.2 6.5 5 7.5v-19zm0 0c.5 0 5 6 5 11.5 0 3.6-2.2 6.5-5 7.5v-19z" />
        </svg>
      );
    case 'Redis Cache':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 8l-8.5-4.25L2 12l10 5 10-5-1.5-6.25L12 10zm0 7l-8.5-4.25L2 17l10 5 10-5-1.5-4.25L12 17z" />
        </svg>
      );
    case 'OpenAI & Claude':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case 'Vercel Edge':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 2L2 19.5h20L12 2z" />
        </svg>
      );
    case 'AWS Cloud':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M18.5 10.5c0-.83-.67-1.5-1.5-1.5-.15 0-.29.02-.43.06C15.91 7.24 14.12 6 12 6c-2.76 0-5 2.24-5 5 0 .28.02.55.07.82C5.3 12.44 4 13.82 4 15.5 4 17.43 5.57 19 7.5 19h10c2.21 0 4-1.79 4-4 0-1.86-1.28-3.41-3-3.86v-.64z" />
        </svg>
      );
    case 'GitHub Actions':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9v6m6-3h6m-3-3l3 3-3 3" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M9 9h6v6H9z" />
        </svg>
      );
  }
}

export default function TechStackSection({
  title = "Our Technology Stack",
  subtitle = "Engineered tier-by-tier. We select mature, battle-tested technologies that deliver peak runtime performance, zero vendor lock-in, and clean developer ergonomics."
}) {
  const [activeTierIndex, setActiveTierIndex] = useState(0);
  const [viewMode, setViewMode] = useState('console'); // 'console' | 'overview'

  const tiers = [
    {
      id: "frontend",
      tierNum: "01",
      systemTag: "CLIENT RUNTIME",
      name: "Frontend & UI Engineering",
      headline: "Sub-second paint times, accessible interfaces, and smooth client workflows.",
      accentBg: "bg-sky-50 text-sky-600 border-sky-200",
      accentBorder: "border-sky-300",
      icon: Cpu,
      stats: [
        { label: "Lighthouse Score", val: "99 / 100" },
        { label: "First Contentful Paint", val: "< 0.8s" },
        { label: "Type Safety", val: "Strict 100%" },
      ],
      technologies: [
        { name: "React 19", category: "UI Runtime", benefit: "Concurrent rendering, Suspense & seamless state reactivity" },
        { name: "Next.js", category: "Framework", benefit: "Server-side rendering, ISR & instant global edge caching" },
        { name: "TypeScript", category: "Type Contract", benefit: "Compile-time strict typing and zero runtime undefined crashes" },
        { name: "Tailwind CSS", category: "Design System", benefit: "Utility tokens, zero runtime CSS payload & high accessibility" },
        { name: "JavaScript ES6+", category: "Core Engine", benefit: "Asynchronous micro-tasks, Web Workers & V8 optimizations" },
      ]
    },
    {
      id: "backend",
      tierNum: "02",
      systemTag: "DISTRIBUTED API CORE",
      name: "Backend & Microservices",
      headline: "High-throughput asynchronous services, modular controllers, and resilient schemas.",
      accentBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
      accentBorder: "border-emerald-300",
      icon: Server,
      stats: [
        { label: "API Response Time", val: "< 25ms" },
        { label: "Live Concurrency", val: "10,000+" },
        { label: "Contract Validation", val: "JSON Schema" },
      ],
      technologies: [
        { name: "Node.js", category: "Runtime Engine", benefit: "Non-blocking event loop optimized for high I/O workloads" },
        { name: "Express.js", category: "REST Backbone", benefit: "Predictable middleware pipelines, rate-limiting & router isolation" },
        { name: "WebSockets", category: "Real-time Sync", benefit: "Bi-directional persistent channels with sub-18ms message delivery" },
        { name: "Python / Flask", category: "Data Engine", benefit: "Dedicated microservice scripts, parsing pipelines & machine tasks" },
      ]
    },
    {
      id: "database",
      tierNum: "03",
      systemTag: "PERSISTENCE & CACHE",
      name: "Databases & Data Integrity",
      headline: "ACID-compliant transactions, optimized indexing, and low-latency in-memory cache.",
      accentBg: "bg-indigo-50 text-indigo-600 border-indigo-200",
      accentBorder: "border-indigo-300",
      icon: Database,
      stats: [
        { label: "Indexed Query Time", val: "4ms Avg" },
        { label: "Transaction Safety", val: "ACID Strict" },
        { label: "Cache Read Latency", val: "< 1ms" },
      ],
      technologies: [
        { name: "PostgreSQL", category: "Relational SQL", benefit: "Relational constraints, B-Tree indexes, JSONB & rock-solid backups" },
        { name: "MongoDB", category: "Document Store", benefit: "Flexible unstructured catalogs, nested objects & agile schemas" },
        { name: "Redis Cache", category: "In-Memory Store", benefit: "Sub-millisecond session state, rate limiters & pub/sub messaging" },
      ]
    },
    {
      id: "ai",
      tierNum: "04",
      systemTag: "COGNITIVE AI LAYER",
      name: "Generative AI & LLMs",
      headline: "Frontier language model integrations, streaming token UI, and structured schema guardrails.",
      accentBg: "bg-purple-50 text-purple-600 border-purple-200",
      accentBorder: "border-purple-300",
      icon: Bot,
      stats: [
        { label: "Stream Delivery", val: "SSE Chunks" },
        { label: "Model Fallbacks", val: "Multi-Route" },
        { label: "Hallucination Control", val: "Zod Schema" },
      ],
      technologies: [
        { name: "OpenAI & Claude", category: "Frontier Models", benefit: "Context-engineered prompts, function calling & assistant threads" },
        { name: "OpenRouter Gateway", category: "Failover Engine", benefit: "Multi-provider resilience with automatic retry fallback routing" },
        { name: "Streaming UI", category: "Frontend Protocol", benefit: "Zero perceived latency token-by-token real-time streaming" },
      ]
    },
    {
      id: "devops",
      tierNum: "05",
      systemTag: "GLOBAL EDGE CLUSTER",
      name: "Cloud, DevOps & CI/CD",
      headline: "Edge-routed global CDN, automated build test suites, and 99.99% uptime SLA.",
      accentBg: "bg-cyan-50 text-cyan-600 border-cyan-200",
      accentBorder: "border-cyan-300",
      icon: Cloud,
      stats: [
        { label: "Global Edge Uptime", val: "99.99% SLA" },
        { label: "Cold Start Overhead", val: "0ms Edge" },
        { label: "Build Regression Pass", val: "100% CI" },
      ],
      technologies: [
        { name: "Vercel Edge", category: "Edge Hosting", benefit: "Global Anycast edge deployment with instant rollback points" },
        { name: "AWS Cloud", category: "Infrastructure", benefit: "Encrypted S3 object storage, virtual compute & scalable VPCs" },
        { name: "GitHub Actions", category: "CI/CD Pipeline", benefit: "Automated linting, automated test runs & production deploys" },
      ]
    },
    {
      id: "security",
      tierNum: "06",
      systemTag: "DEFENSE & VERIFICATION",
      name: "Security, Auth & QA",
      headline: "Token rotation, automated regression suites, and hardened cryptographic transport.",
      accentBg: "bg-amber-50 text-amber-600 border-amber-200",
      accentBorder: "border-amber-300",
      icon: ShieldCheck,
      stats: [
        { label: "SSL Lab Grade", val: "A+ Rating" },
        { label: "CSRF & XSS Shield", val: "Hardened" },
        { label: "Device Coverage", val: "Cross-Browser" },
      ],
      technologies: [
        { name: "JWT Auth & RBAC", category: "Session Layer", benefit: "HttpOnly encrypted cookie rotation with fine-grained permissions" },
        { name: "OAuth 2.0", category: "Social SSO", benefit: "Frictionless authentication via Google, GitHub & Apple credentials" },
        { name: "End-to-End QA", category: "Verification", benefit: "Real-device responsive testing & full checkout journey validation" },
      ]
    }
  ];

  const currentTier = tiers[activeTierIndex];

  return (
    <section className="py-14 sm:py-18 md:py-24 bg-[#f8fafc] border-b border-slate-200/90">
      <div className="studio-container">
        
        {/* Section Header */}
        <SectionHeader
          figNumber="FIG. 06"
          label="ARCHITECTURAL INFRASTRUCTURE"
          title={title}
          subtitle={subtitle}
          centered={true}
        />

        {/* View Mode & Tier Selector Nav Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 sm:mb-14">
          
          {/* Tier Switcher Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs overflow-x-auto no-scrollbar max-w-full">
            {tiers.map((t, idx) => {
              const isActive = activeTierIndex === idx && viewMode === 'console';
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setActiveTierIndex(idx);
                    setViewMode('console');
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-slate-950 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  <span className={`font-mono text-[11px] ${isActive ? 'text-sky-300' : 'text-slate-400'}`}>
                    {t.tierNum}
                  </span>
                  <span>{t.name.split('&')[0].trim()}</span>
                </button>
              );
            })}
          </div>

          {/* Toggle between Focused Console & All-Tiers Overview */}
          <div className="inline-flex items-center p-1 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <button
              onClick={() => setViewMode('console')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'console'
                  ? 'bg-sky-50 text-sky-700 border border-sky-200 font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Tier Explorer</span>
            </button>
            <button
              onClick={() => setViewMode('overview')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'overview'
                  ? 'bg-sky-50 text-sky-700 border border-sky-200 font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Full Matrix (6 Tiers)</span>
            </button>
          </div>

        </div>

        {/* VIEW 1: High-End Studio Architecture Workbench (Clean, Airy, Zero Clutter) */}
        {viewMode === 'console' && (
          <div className="rounded-[32px] bg-white border border-slate-200/90 shadow-md overflow-hidden transition-all duration-300">
            
            {/* Top Status Bar */}
            <div className="px-6 sm:px-10 py-4 bg-slate-50/80 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>TIER {currentTier.tierNum} ACTIVE WORKBENCH</span>
                <span className="text-slate-400">•</span>
                <span className="text-sky-700 font-bold uppercase">{currentTier.systemTag}</span>
              </div>
              <div className="flex items-center gap-4 text-slate-500">
                <span>VERIFIED PRODUCTION TOOLING</span>
                <span className="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  100% OPERATIONAL
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-10 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Tier Philosophy & Live Benchmarks */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-50 text-sky-800 border border-sky-200 text-xs font-mono font-bold mb-3">
                    ARCHITECTURAL DISCIPLINE {currentTier.tierNum}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950 tracking-tight mb-3">
                    {currentTier.name}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-normal">
                    {currentTier.headline}
                  </p>
                </div>

                {/* Live Benchmark Metric Cards */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {currentTier.stats.map((st, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                      <div className="font-display font-extrabold text-slate-950 text-base sm:text-lg mb-0.5">
                        {st.val}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium leading-tight">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Practical Guarantee Callout */}
                <div className="p-4 rounded-2xl bg-slate-950 text-slate-300 text-xs leading-relaxed space-y-1.5 font-mono">
                  <div className="text-sky-400 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>ENGINEERING POLICY</span>
                  </div>
                  <p className="text-slate-400 font-sans text-xs leading-relaxed">
                    Zero lock-in. Every component adheres to open-source standards, clean modular encapsulation, and standardized JSON/HTTP interfaces.
                  </p>
                </div>
              </div>

              {/* Right Column: Visual Technology Grid (Airy & Elegant) */}
              <div className="lg:col-span-7 space-y-3.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center justify-between">
                  <span>Selected Production Technologies:</span>
                  <span className="text-sky-700 font-mono font-semibold">{currentTier.technologies.length} Verified Engines</span>
                </div>

                {currentTier.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-sky-300 hover:shadow-md transition-all duration-200 flex items-start gap-4 group"
                  >
                    {/* Brand Icon Tile */}
                    <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 text-slate-800 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-900 transition-all shadow-2xs">
                      <TechLogo name={tech.name} className="w-6 h-6" />
                    </div>

                    {/* Tech Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-display font-bold text-base text-slate-900 group-hover:text-sky-700 transition-colors">
                            {tech.name}
                          </h4>
                          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 font-semibold">
                            {tech.category}
                          </span>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {tech.benefit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Quick-Switch Bar */}
            <div className="px-6 sm:px-10 py-4 bg-slate-50/60 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Next Architecture Layer:</span>
              <button
                onClick={() => setActiveTierIndex((activeTierIndex + 1) % tiers.length)}
                className="inline-flex items-center gap-1.5 text-sky-700 hover:text-sky-900 font-semibold cursor-pointer"
              >
                <span>Jump to Tier {tiers[(activeTierIndex + 1) % tiers.length].tierNum}: {tiers[(activeTierIndex + 1) % tiers.length].name}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* VIEW 2: Full Matrix Grid of all 6 Tiers (Clean Bento, NO Cluttered Boxes) */}
        {viewMode === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {tiers.map((tier, idx) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.id}
                  className="p-6 sm:p-7 rounded-[28px] bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center shrink-0 group-hover:bg-sky-600 transition-colors shadow-2xs">
                          <Icon className="w-5 h-5 text-sky-400 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <span className="font-mono text-xs font-bold text-slate-900 block leading-tight">
                            TIER {tier.tierNum}
                          </span>
                          <span className="font-mono text-[10px] text-sky-700 font-semibold uppercase tracking-wider block">
                            {tier.systemTag}
                          </span>
                        </div>
                      </div>

                      <span className="font-mono text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                        ONLINE
                      </span>
                    </div>

                    {/* Tier Title & Description */}
                    <h3 className="font-display font-bold text-xl text-slate-950 mb-2 group-hover:text-sky-700 transition-colors">
                      {tier.name}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {tier.headline}
                    </p>

                    {/* Clean Tech Pills Matrix (NOT Ugly Boxes!) */}
                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                        Key Technologies:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tier.technologies.map((t, i) => (
                          <div
                            key={i}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-950 hover:text-white hover:border-slate-900 transition-all duration-200 group/pill cursor-default"
                          >
                            <TechLogo name={t.name} className="w-4 h-4 shrink-0" />
                            <span className="text-xs font-semibold text-slate-800 group-hover/pill:text-white transition-colors">
                              {t.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Benchmark Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 truncate">{tier.stats[0].label}:</span>
                    <span className="text-slate-950 font-bold">{tier.stats[0].val}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Integration Reassurance Card */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0 shadow-2xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-900 text-base sm:text-lg mb-1">
                Seamless Integration with Your Existing Stack
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Whether you have an existing PostgreSQL database, AWS infrastructure, or custom APIs, we write modular code that integrates cleanly with zero vendor lock-in.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="font-mono text-xs text-sky-800 font-bold bg-sky-50 border border-sky-200 px-4 py-2 rounded-xl whitespace-nowrap">
              100% Code Ownership
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
