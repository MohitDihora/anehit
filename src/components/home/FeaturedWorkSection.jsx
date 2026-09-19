import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  Layers,
  Cpu,
  Globe,
  Layout
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { projects } from '../../data/projects';
import ProjectMockupRenderer from '../ui/ProjectMockupRenderer';
import ScrollStack, { ScrollStackItem } from '../ui/ScrollStack';

export default function FeaturedWorkSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isExpanded, setIsExpanded] = useState(false);

  // Category definitions with clean readable labels and icons
  const categories = [
    { id: 'All', label: 'All Projects', count: 6, icon: Sparkles },
    { id: 'AI', label: 'AI Applications', count: 2, icon: Cpu },
    { id: 'Web Apps', label: 'Web Apps', count: 2, icon: Globe },
    { id: 'Full Stack', label: 'Full Stack', count: 2, icon: Layers },
    { id: 'Business Websites', label: 'Brand Sites', count: 1, icon: Layout },
  ];

  const allFiltered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.filterCategory === activeFilter);

  // Show top 3 by default when on "All" unless user expands
  const displayedProjects = (activeFilter === 'All' && !isExpanded)
    ? allFiltered.slice(0, 3)
    : allFiltered;

  return (
    <section id="work" className="py-16 sm:py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="studio-container">
        
        {/* Header and Redesigned Modern Filter Bar */}
        <SectionHeader
          figNumber="FIG. 02"
          label="Real Portfolio"
          title="Selected Work & Deployments"
          subtitle="Explore our real-world software products, live applications, and full-stack systems with transparent architecture and verifiable links."
          centered={true}
          className="mb-8 sm:mb-10"
        />

        {/* Attractive, Modern Segmented Filter Bar - Perfectly Centered & Aligned */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 sm:mb-14">
          {/* Filter Pills Container */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm overflow-x-auto no-scrollbar max-w-full">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveFilter(cat.id);
                    setIsExpanded(false);
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-slate-950 text-white shadow-md shadow-slate-950/20'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-sky-400' : 'text-slate-400'}`} />
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

          {/* Interactive Collapse / Expand Action Button */}
          {activeFilter === 'All' && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <span>{isExpanded ? 'Show Top 3 Projects' : `Show All ${projects.length} Deployments`}</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-slate-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-500" />
              )}
            </button>
          )}
        </div>

        {/* Caspian-Style Animated Sticky Stacking Deck */}
        <ScrollStack
          key={activeFilter + (isExpanded ? '-exp' : '-col')}
          itemDistance={40}
          itemScale={0.025}
          itemStackDistance={24}
          stackPosition="12%"
          scaleEndPosition="6%"
          baseScale={0.92}
          useWindowScroll={true}
        >
          {displayedProjects.map((project, index) => {
            const isEven = index % 2 === 1; // Alternating layout flag
            const projectNumber = String(index + 1).padStart(2, '0');

            return (
              <ScrollStackItem
                key={project.id}
                itemClassName="bg-white border border-slate-200/90 hover:border-slate-300 transition-colors p-6 sm:p-8 lg:p-10 shadow-[0_14px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Info Column */}
                  <div className={`space-y-5 lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    {/* Index & Category Badges with Readable Fonts */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-sky-800 bg-sky-50 border border-sky-200 px-3 py-1 rounded-lg">
                        PROJECT {projectNumber}
                      </span>
                      <span className="studio-badge bg-slate-100 text-slate-800 border-slate-200 text-xs font-semibold py-1">
                        {project.category}
                      </span>
                      {project.liveUrl ? (
                        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg flex items-center gap-1.5 ml-auto sm:ml-0">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          Live Production
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-lg flex items-center gap-1.5 ml-auto sm:ml-0">
                          <span className="w-2 h-2 rounded-full bg-sky-500" />
                          Architecture Verified
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950 tracking-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="space-y-2 py-1">
                      <div className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">
                        Key Architectural Deliverables:
                      </div>
                      <ul className="space-y-2 text-sm text-slate-700">
                        {project.keyFeatures ? (
                          project.keyFeatures.slice(0, 2).map((feat, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                              <span className="leading-snug">{feat}</span>
                            </li>
                          ))
                        ) : (
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                            <span>Scalable modular architecture with high-performance responsive UI</span>
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Tech Stack Pills with Readable Font */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-4 pt-5 border-t border-slate-100">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-sm font-semibold transition-all shadow-sm"
                        >
                          <span>View Live Application</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <Link
                        to={`/work/${project.id}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-700 hover:text-sky-900 transition-colors py-2"
                      >
                        <span>Full Project Architecture →</span>
                      </Link>
                    </div>
                  </div>

                  {/* Visual Showcase Column (Spacious col-span-7) */}
                  <div className={`lg:col-span-7 w-full overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <ProjectMockupRenderer projectId={project.id} />
                  </div>

                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>

        {/* Bottom Expand Toggle Bar */}
        <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          {activeFilter === 'All' && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-sm font-bold text-slate-800 hover:text-slate-950 transition-all shadow-sm cursor-pointer"
            >
              <span>
                {isExpanded
                  ? 'Collapse to Top 3 Projects ↑'
                  : `Show All 6 Deployments (3 more) ↓`}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-sky-600" />
              ) : (
                <ChevronDown className="w-4 h-4 text-sky-600" />
              )}
            </button>
          )}

          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-sm font-semibold transition-colors shadow-sm"
          >
            <span>Explore Dedicated Work Page</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
