import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
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
  ArrowUpRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { services } from '../../data/services';
import InteractiveCard from '../ui/InteractiveCard';

export default function ServicesSection() {
  const [isExpanded, setIsExpanded] = useState(false);

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

  // Show only 3 cards by default, or all 11 when expanded
  const displayedServices = isExpanded ? services : services.slice(0, 3);

  return (
    <section id="services" className="py-14 sm:py-18 md:py-24 bg-[#f8fafc] border-b border-slate-200">
      <div className="studio-container">
        
        {/* Section Header with Quick Collapse / Expand Action */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <SectionHeader
            figNumber="FIG. 01"
            label="Services & Engineering"
            title="What We Build"
            subtitle="Specialized software development disciplines engineered for business growth, performance, and scalability."
            className="mb-0"
          />

          {/* Quick Collapse Icon Button in Header */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-sky-300 hover:bg-sky-50/50 text-xs font-mono font-semibold text-slate-700 hover:text-sky-700 transition-all shadow-2xs cursor-pointer"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? 'Collapse View' : 'Show All 11 Disciplines'}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-sky-600" />
            ) : (
              <ChevronDown className="w-4 h-4 text-sky-600" />
            )}
          </button>
        </div>

        {/* Dynamic Services Grid (3 cards collapsed, 11 expanded) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
          {displayedServices.map((service) => {
            const Icon = iconMap[service.number] || Code2;
            return (
              <InteractiveCard
                key={service.id}
                className="studio-card p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden bg-gradient-to-b from-white via-slate-50/40 to-white border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-xl"
              >
                {/* Top Discipline Bar */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-50 group-hover:border-sky-300 group-hover:text-sky-700 transition-colors shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-400 group-hover:text-sky-700 transition-colors font-medium">
                      DISCIPLINE {service.number}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-2.5 group-hover:text-sky-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Bottom Deliverables & CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-700 hover:text-sky-900 font-semibold transition-colors"
                  >
                    <span>Explore Scope & Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </InteractiveCard>
            );
          })}
        </div>

        {/* Prominent Bottom Expand / Collapse Toggle Bar */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 hover:text-slate-950 font-bold transition-all shadow-xs hover:shadow-sm cursor-pointer"
          >
            <span>
              {isExpanded
                ? 'Collapse to Top Disciplines ↑'
                : `Show All 11 Services & Disciplines (${services.length - 3} more) ↓`}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-sky-600" />
            ) : (
              <ChevronDown className="w-4 h-4 text-sky-600" />
            )}
          </button>

          <Link
            to="/services"
            className="text-xs font-mono text-sky-700 hover:text-sky-900 font-semibold px-4 py-3"
          >
            <span>View Full Deliverables & Tech Stacks →</span>
          </Link>
        </div>

        {/* Compact Scoping Callout Strip */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base">
              Need a hybrid combination of frontend craft and custom backend APIs?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500">
              We engineer both sides without handoff gaps or junior developers.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-sky-600 text-white text-xs font-mono font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 shadow-xs shrink-0"
          >
            <span>Discuss Requirements</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
