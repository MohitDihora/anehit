import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  MessageSquare, 
  Compass, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

export default function AboutPage() {
  const coreValues = [
    {
      icon: MessageSquare,
      title: "Direct & Honest Communication",
      description: "You talk directly with the engineers building your product. No account managers, no confusing jargon, and no lost details in translation."
    },
    {
      icon: Zap,
      title: "Fast, Thoughtful Iterations",
      description: "We work in small, focused sprints with quick turnaround times. You see continuous progress and interactive previews every single week."
    },
    {
      icon: ShieldCheck,
      title: "Craft Over Shortcuts",
      description: "We write clean, well-tested, and maintainable code. Your software is built on solid foundations so it scales gracefully as your business grows."
    },
    {
      icon: Compass,
      title: "Genuine Technical Partnership",
      description: "We treat your project like our own. If there is a simpler, more cost-effective way to achieve your goal, we'll recommend it upfront."
    }
  ];

  const collaborationSteps = [
    {
      step: "01",
      title: "Listen & Understand",
      desc: "We start by deeply understanding your goals, your target audience, and the problem you want to solve before writing any code."
    },
    {
      step: "02",
      title: "Clear Plan & Milestones",
      desc: "You get a straightforward roadmap with realistic timelines, defined deliverables, and transparent estimates with zero surprises."
    },
    {
      step: "03",
      title: "Build & Share Previews",
      desc: "We build in public with interactive staging links, allowing you to test, touch, and give feedback on features as they are crafted."
    },
    {
      step: "04",
      title: "Launch & Reliable Support",
      desc: "We rigorously test across devices, handle production deployment, and remain by your side to make sure everything runs smoothly."
    }
  ];

  return (
    <div className="py-12 sm:py-16 md:py-24 bg-blueprint">
      <div className="studio-container">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-sky-700 mb-5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>WHO WE ARE & HOW WE WORK</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight mb-5 leading-[1.15]">
            Thoughtful engineering for people building ambitious things.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
            We are an independent software development studio focused on crafting fast, dependable websites, web applications, and AI integrations. We believe great software is born from clear communication, honest collaboration, and building with genuine care.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-600 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-sky-600" />
              100% Direct Developer Access
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-sky-600" />
              No Middleman Overhead
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-sky-600" />
              Clean, Scalable Codebases
            </span>
          </div>
        </div>

        {/* Our Studio Philosophy & Why It Matters */}
        <div className="studio-card p-6 sm:p-8 md:p-10 border-slate-200 bg-white mb-12 sm:mb-14 shadow-sm">
          <div className="max-w-3xl space-y-4 mb-8">
            <div className="text-xs font-mono text-sky-700 uppercase tracking-wider font-semibold">
              Our Philosophy
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-950">
              Why We Keep Our Studio Hands-On & Independent
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              In traditional agencies, client visions often get diluted. Your ideas pass through account executives, sales reps, and project coordinators before reaching junior developers you never speak with. Misunderstandings happen, velocity slows down, and the craft suffers.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At <strong className="text-slate-900 font-semibold">AneHit IT Tech</strong>, we operate on a fundamentally different model: you collaborate directly with the engineers who design your database, write your code, and deploy your product. No middle layers. No lost context. Just honest craftsmanship and clear results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-slate-100">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Working Style Breakdown */}
        <div className="studio-card p-6 sm:p-8 md:p-10 border-slate-200 bg-white mb-12 sm:mb-14 shadow-sm">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-mono text-sky-700 uppercase tracking-wider font-semibold mb-2">
              The Journey
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-950 mb-3">
              What It Feels Like To Work With Us
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We believe building software should be an enjoyable, transparent, and collaborative process. Here is how we turn your vision into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {collaborationSteps.map((style, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs font-bold text-sky-700 mb-2.5 flex items-center justify-between">
                    <span>STEP {style.step}</span>
                    <span className="w-2 h-2 rounded-full bg-sky-200" />
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-900 mb-2">
                    {style.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {style.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Human-Friendly CTA */}
        <div className="studio-card p-8 sm:p-10 md:p-12 border-slate-200 bg-linear-to-br from-white via-slate-50 to-sky-50/30 text-center shadow-sm">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-xs font-mono text-sky-700 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>HAVE A PROJECT IN MIND?</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950 tracking-tight">
              Let's have a simple, no-pressure conversation.
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Whether you're starting from scratch with a brand new idea, modernizing an existing app, or exploring AI features, we'd love to hear about it.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950 hover:bg-sky-600 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-200 transition-colors shadow-xs"
              >
                <span>Explore Our Work</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
