import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  MessageSquareCode, 
  Code2, 
  Target, 
  ShieldCheck, 
  Award,
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

export default function WhyUsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  const pillars = [
    {
      id: '01',
      title: 'Direct Senior Engineer Access',
      subtitle: 'Zero middle managers. Zero lost-in-translation handoffs.',
      description: 'When you work with AneHit IT Tech, you talk directly with the senior engineers designing, architecting, and writing your code. No account executives, no junior subcontractors, and no communication lag.',
      highlight: 'Direct Founder & Engineer Communication',
      icon: MessageSquareCode,
      tagColor: 'text-sky-700 bg-sky-50 border-sky-200',
      iconBg: 'bg-sky-500/10 text-sky-600 border-sky-200',
      activeBorder: 'border-sky-300 ring-2 ring-sky-100',
      glow: 'rgba(14, 165, 233, 0.12)',
      deliverables: [
        'Direct Slack, WhatsApp, or Upwork communication with founders',
        'Weekly async video walkthroughs after every milestone deploy',
        'Transparent architectural decisions with zero tech jargon'
      ]
    },
    {
      id: '02',
      title: 'Modern Architecture & Clean Code',
      subtitle: 'Built for 5+ years of longevity, not an annual rebuild.',
      description: 'We engineer using modern React 19, TypeScript, Tailwind CSS, scalable Node/Python backends, and strict relational schemas. Modular, well-documented code ensures any engineer can maintain or extend it.',
      highlight: 'Modern Stacks. Strict Type Safety.',
      icon: Code2,
      tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
      activeBorder: 'border-emerald-300 ring-2 ring-emerald-100',
      glow: 'rgba(16, 185, 129, 0.12)',
      deliverables: [
        'Component-driven architecture with zero spaghetti dependencies',
        'Lighthouse 95+ performance scores and sub-1s load times',
        'Comprehensive inline documentation and deployment READMEs'
      ]
    },
    {
      id: '03',
      title: 'Business-Driven Engineering',
      subtitle: 'Code that directly serves metrics, conversion, and retention.',
      description: 'We don’t just write code to check off feature tickets. We analyze your business model, customer workflows, and monetization channels so every technical decision drives real commercial growth.',
      highlight: 'Outcome-Oriented Technical Direction',
      icon: Target,
      tagColor: 'text-amber-800 bg-amber-50 border-amber-200',
      iconBg: 'bg-amber-500/10 text-amber-600 border-amber-200',
      activeBorder: 'border-amber-300 ring-2 ring-amber-100',
      glow: 'rgba(245, 158, 11, 0.12)',
      deliverables: [
        'Conversion-optimized user flows and tactile micro-interactions',
        'Pragmatic MVP scoping to launch in weeks, not months',
        'Built-in analytics and custom event tracking hooks'
      ]
    },
    {
      id: '04',
      title: 'End-to-End Delivery & Ownership',
      subtitle: 'From initial concept to verified production deploy.',
      description: 'We take complete responsibility for the full development lifecycle—from wireframing and frontend engineering to database models, security auditing, payment gateway setup, and cloud deployment.',
      highlight: '100% Full Lifecycle Coverage',
      icon: ShieldCheck,
      tagColor: 'text-purple-700 bg-purple-50 border-purple-200',
      iconBg: 'bg-purple-500/10 text-purple-600 border-purple-200',
      activeBorder: 'border-purple-300 ring-2 ring-purple-100',
      glow: 'rgba(168, 85, 247, 0.12)',
      deliverables: [
        'Live staging preview environment before every final release',
        'Automated CI/CD build tests with zero-downtime deployment',
        'Post-launch 30-day warranty and retainer maintenance support'
      ]
    },
    {
      id: '05',
      title: '100% IP Ownership & Transparent Pricing',
      subtitle: 'You own every line of code, asset, and repository.',
      description: 'No vendor lock-in, no hidden hourly markups, and no proprietary licensing fees. You receive complete intellectual property ownership, full GitHub repository rights, and fixed milestone agreements.',
      highlight: 'Zero Lock-in. Complete Freedom.',
      icon: Award,
      tagColor: 'text-rose-700 bg-rose-50 border-rose-200',
      iconBg: 'bg-rose-500/10 text-rose-600 border-rose-200',
      activeBorder: 'border-rose-300 ring-2 ring-rose-100',
      glow: 'rgba(244, 63, 94, 0.12)',
      deliverables: [
        'Fixed milestone pricing with zero budget surprises',
        'Immediate Git repo ownership transfer on milestone signoff',
        'Full Upwork Escrow or direct contract protection'
      ]
    }
  ];

  const total = pillars.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay functionality with pause on hover
  useEffect(() => {
    if (isPaused || isDragging) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, isDragging, nextSlide]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - dragStartX;
    // Dampen drag effect
    setDragOffset(diff * 0.7);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -50) {
      nextSlide();
    } else if (dragOffset > 50) {
      prevSlide();
    }
    setDragOffset(0);
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX;
    setDragOffset(diff * 0.6);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -60) {
      nextSlide();
    } else if (dragOffset > 60) {
      prevSlide();
    }
    setDragOffset(0);
  };

  const currentPillar = pillars[currentIndex];
  const Icon = currentPillar.icon;

  return (
    <section 
      id="why-us" 
      className="py-16 sm:py-20 md:py-28 bg-white border-b border-slate-200 relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        if (isDragging) handleMouseUp();
      }}
    >
      <div className="studio-container">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <SectionHeader
            figNumber="FIG. 04"
            label="The Studio Advantage"
            title="Why Work With Us"
            subtitle="We are an engineering studio built around craft, clarity, and accountability—not an agency that hands your project off to junior subcontractors."
            className="mb-0"
          />

          {/* Swipe Card Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <span className="font-mono text-xs sm:text-sm text-slate-500 font-bold px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
              <span className="text-slate-900">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="text-slate-400 mx-1">/</span>
              <span>{String(total).padStart(2, '0')}</span>
            </span>

            <button
              onClick={prevSlide}
              aria-label="Previous Advantage Card"
              className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next Advantage Card"
              className="p-3 rounded-xl bg-slate-900 border border-slate-900 text-white hover:bg-sky-600 hover:border-sky-600 transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swipe Card Stage with Overflow Hidden */}
        <div 
          ref={trackRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y rounded-[28px] sm:rounded-[36px]"
        >
          {/* Multi-Card Sliding Track */}
          <div 
            className="flex items-stretch will-change-transform"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
              transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              const isActive = idx === currentIndex;

              return (
                <div 
                  key={pillar.id}
                  className="w-full shrink-0 flex-none px-0.5 sm:px-1 box-border transition-all duration-300"
                  style={{
                    opacity: isActive ? 1 : 0.4,
                    transform: isActive ? 'scale(1)' : 'scale(0.985)',
                    transition: 'opacity 0.4s ease, transform 0.4s ease'
                  }}
                >
                  <div className="studio-card p-6 sm:p-10 md:p-12 bg-gradient-to-b from-white via-slate-50/40 to-white border border-slate-200/90 shadow-[0_16px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.09)] rounded-[28px] sm:rounded-[36px] relative overflow-hidden h-full flex flex-col justify-between">
                    
                    {/* Subtle Ambient Background Radial Tint */}
                    <div 
                      className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-700 opacity-60"
                      style={{ background: pillar.glow }}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 flex-grow">
                      
                      {/* Left Narrative Column */}
                      <div className="lg:col-span-7 space-y-5">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-mono text-xs sm:text-sm font-bold px-3 py-1 rounded-lg border bg-slate-900 text-white shadow-xs">
                            PILLAR {pillar.id}
                          </span>
                          <span className={`text-xs sm:text-sm font-bold px-3 py-1 rounded-lg border ${pillar.tagColor}`}>
                            {pillar.highlight}
                          </span>
                        </div>

                        <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-slate-950 tracking-tight leading-tight">
                          {pillar.title}
                        </h3>

                        <p className="text-sky-800 text-base sm:text-lg font-semibold">
                          {pillar.subtitle}
                        </p>

                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                          {pillar.description}
                        </p>

                        <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-500">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Swipe or click arrows to explore all 5 studio advantages</span>
                        </div>
                      </div>

                      {/* Right Concrete Deliverables Card */}
                      <div className="lg:col-span-5 bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
                        <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${pillar.iconBg}`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="font-display font-bold text-base text-slate-950">
                              Studio Guarantee
                            </div>
                            <div className="text-xs text-slate-500 font-mono">
                              STANDARDS // VERIFIED
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3 pt-1">
                          {pillar.deliverables.map((item, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                              <span className="text-sm sm:text-[15px] text-slate-700 leading-snug font-medium">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                          <span>ACCOUNTABILITY</span>
                          <span className="text-sky-700 font-bold">100% DIRECT SENIOR DUO</span>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Minimalist Slide Indicators */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2">
          {pillars.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-8 bg-slate-950 shadow-xs'
                  : 'w-2.5 bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
