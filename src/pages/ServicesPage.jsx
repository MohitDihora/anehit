import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { 
  CheckCircle2, 
  ArrowUpRight, 
  Code2, 
  Smartphone, 
  ShoppingBag, 
  CreditCard, 
  Sparkles, 
  Bot, 
  ShieldCheck, 
  Radio, 
  GraduationCap, 
  LayoutDashboard, 
  Wrench,
  Globe,
  Layers,
  Zap,
  ChevronRight,
  ChevronLeft,
  SlidersHorizontal
} from 'lucide-react';
import ServiceCardVisual from '../components/ui/ServiceCardVisual';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);
  const [viewMode, setViewMode] = useState('console'); // 'console' (zero-scroll split workbench) | 'grid' (compact grid)

  const iconMap = {
    '01': Code2,
    '02': Smartphone,
    '03': ShoppingBag,
    '04': CreditCard,
    '05': Sparkles,
    '06': Bot,
    '07': ShieldCheck,
    '08': Radio,
    '09': GraduationCap,
    '10': LayoutDashboard,
    '11': Wrench,
  };

  const categoryMap = {
    '01': 'Core',
    '02': 'Core',
    '03': 'Commerce-Platforms',
    '04': 'Commerce-Platforms',
    '05': 'AI-Security',
    '06': 'AI-Security',
    '07': 'AI-Security',
    '08': 'AI-Security',
    '09': 'Commerce-Platforms',
    '10': 'Core',
    '11': 'Core',
  };

  const categories = [
    { id: 'All', label: 'All 11 Disciplines', count: 11 },
    { id: 'Core', label: 'Core Software & Architecture', count: 4 },
    { id: 'AI-Security', label: 'AI, Security & Communication', count: 4 },
    { id: 'Commerce-Platforms', label: 'E-Commerce & Platforms', count: 3 },
  ];

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(s => categoryMap[s.number] === activeCategory);

  // If currently selected service is filtered out, fall back to first in filtered list
  const activeService = filteredServices.find(s => s.id === selectedServiceId) || filteredServices[0] || services[0];
  const activeIndex = services.findIndex(s => s.id === activeService.id);
  const ActiveIcon = iconMap[activeService.number] || Globe;

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % services.length;
    setSelectedServiceId(services[nextIndex].id);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + services.length) % services.length;
    setSelectedServiceId(services[prevIndex].id);
  };

  return (
    <div className="py-10 sm:py-14 md:py-20 bg-blueprint min-h-screen">
      <div className="studio-container">
        
        {/* Centered Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-sky-700 mb-3.5 shadow-2xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
            <span>FULL-SPECTRUM SOFTWARE DISCIPLINES</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight mb-3.5 leading-tight">
            Engineering Services Built for Real Outcomes
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Explore all 11 disciplines below. Select any discipline on the left to view its live telemetry simulator, deliverables, and technical architecture in place without endless scrolling.
          </p>
        </div>

        {/* Category Filter & View Mode Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 sm:mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-2xs overflow-x-auto no-scrollbar max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    const newFiltered = cat.id === 'All' ? services : services.filter(s => categoryMap[s.number] === cat.id);
                    if (newFiltered.length > 0) {
                      setSelectedServiceId(newFiltered[0].id);
                    }
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-slate-950 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-md font-mono ${
                    isActive ? 'bg-slate-800 text-sky-300' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Switcher: Interactive Console (Zero Scroll) vs Grid Matrix */}
          <div className="inline-flex items-center p-1 rounded-xl bg-white border border-slate-200 shadow-2xs shrink-0">
            <button
              onClick={() => setViewMode('console')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'console'
                  ? 'bg-sky-50 text-sky-700 border border-sky-200 font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Interactive Stage (Zero Scroll)</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-sky-50 text-sky-700 border border-sky-200 font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Full Grid ({filteredServices.length})</span>
            </button>
          </div>

        </div>

        {/* VIEW MODE 1: Interactive Split-Stage Architecture Console (Zero Endless Scrolling) */}
        {viewMode === 'console' && (
          <div className="rounded-[32px] bg-white border border-slate-200 shadow-sm overflow-hidden mb-14 transition-all duration-300">
            
            {/* Top Command Bar */}
            <div className="px-6 sm:px-8 py-3.5 bg-slate-950 text-white flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-sky-300 font-bold uppercase tracking-wider">
                  DISCIPLINE {activeService.number} OF 11 // LIVE STUDIO WORKBENCH
                </span>
              </div>
              
              {/* Quick Arrow Stepper */}
              <div className="flex items-center gap-3">
                <span className="text-slate-400 font-mono text-[11px] hidden sm:inline">
                  Use arrows to switch:
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous discipline"
                    className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-xs text-sky-400 px-2 font-bold">
                    {activeService.number} / 11
                  </span>
                  <button
                    onClick={handleNext}
                    aria-label="Next discipline"
                    className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Split Stage: Left Discipline Directory + Right Live Stage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
              
              {/* Left Column: Vertical Discipline Navigator Rail */}
              <div className="lg:col-span-5 bg-slate-50/70 border-b lg:border-b-0 lg:border-r border-slate-200 p-3 sm:p-4 space-y-1.5 overflow-y-auto max-h-[620px]">
                <div className="px-3 pt-1 pb-2 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>Select Discipline:</span>
                  <span className="text-sky-700">{filteredServices.length} Available</span>
                </div>

                {filteredServices.map((service) => {
                  const isSelected = service.id === activeService.id;
                  const Icon = iconMap[service.number] || Globe;

                  return (
                    <button
                      key={service.id}
                      onClick={() => setSelectedServiceId(service.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-slate-950 text-white shadow-md scale-[1.01]'
                          : 'hover:bg-white hover:border-slate-200 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors shadow-2xs ${
                          isSelected 
                            ? 'bg-sky-500 text-white' 
                            : 'bg-white border border-slate-200 text-slate-600'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <div className="flex items-center gap-1.5">
                            <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-sky-300' : 'text-slate-400'}`}>
                              {service.number}
                            </span>
                            <span className="font-display font-bold text-sm tracking-tight truncate">
                              {service.title}
                            </span>
                          </div>
                          <div className={`text-xs truncate font-normal ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                            {service.shortDescription}
                          </div>
                        </div>
                      </div>

                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? 'text-sky-400 translate-x-0.5' : 'text-slate-300 opacity-40'
                      }`} />
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Live Interactive Focus Stage (Telemetry HUD + Deliverables + CTA) */}
              <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-white space-y-6">
                
                {/* Discipline Header & Identity */}
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="font-mono text-xs font-bold text-sky-800 bg-sky-50 border border-sky-200 px-3 py-1 rounded-lg">
                      DISCIPLINE {activeService.number}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg">
                      Production Verified
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-950 tracking-tight mb-3">
                    {activeService.title}
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                    {activeService.fullDescription}
                  </p>

                  {/* Ideal Application Highlight Box */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5 font-mono">
                      <Zap className="w-3.5 h-3.5 text-sky-600" />
                      <span>Ideal Business Application</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {activeService.idealFor}
                    </p>
                  </div>

                  {/* Live Animated Telemetry HUD Simulator */}
                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center justify-between">
                      <span>Architecture & Telemetry Simulator</span>
                      <span className="text-sky-700 text-[11px] font-mono font-semibold">LIVE HUD</span>
                    </div>
                    <ServiceCardVisual serviceNumber={activeService.number} />
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Included Deliverables:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeService.deliverables.map((del, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/80 text-xs text-slate-700 font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Badges */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Engineered With:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeService.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    to={`/contact?service=${encodeURIComponent(activeService.title)}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950 hover:bg-sky-600 text-white font-semibold text-sm transition-all shadow-sm active:scale-98"
                  >
                    <span>Scope a {activeService.title} Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 font-semibold cursor-pointer"
                  >
                    <span>Next Discipline</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* VIEW MODE 2: Full Grid Matrix (Compact Responsive Grid) */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {filteredServices.map((service) => {
              const Icon = iconMap[service.number] || Globe;
              return (
                <div
                  key={service.id}
                  className="studio-card p-6 sm:p-7 rounded-[28px] bg-white border border-slate-200 shadow-2xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-3.5 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-slate-950 text-white flex items-center justify-center shrink-0 group-hover:bg-sky-600 transition-colors shadow-2xs">
                          <Icon className="w-4 h-4 text-sky-400 group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-900">
                          DISCIPLINE {service.number}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        VERIFIED
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-slate-950 mb-2 group-hover:text-sky-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>

                    <div className="mb-4">
                      <ServiceCardVisual serviceNumber={service.number} />
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:text-sky-900"
                    >
                      <span>Scope Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() => {
                        setSelectedServiceId(service.id);
                        setViewMode('console');
                      }}
                      className="text-xs font-mono text-slate-500 hover:text-slate-900 cursor-pointer"
                    >
                      Open Full Stage ➔
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Consultation Strip */}
        <div className="p-6 sm:p-10 rounded-[32px] bg-white border border-slate-200 shadow-sm text-center max-w-3xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950">
            Have a Specific Architectural Requirement?
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Every business has distinct workflows. We are happy to review your technical specs, mockups, or existing codebase and provide a realistic, fixed-scope milestone proposal.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-950 hover:bg-sky-600 text-white font-semibold text-base transition-all shadow-md active:scale-98"
            >
              <span>Schedule a Technical Discovery Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
