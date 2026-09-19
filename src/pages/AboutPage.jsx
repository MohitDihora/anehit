import React from 'react';
import { Link } from 'react-router-dom';
import { studioInfo, teamMembers } from '../data/team';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/common/BrandIcons';

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 md:py-24 bg-blueprint">
      <div className="studio-container">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-sky-700 mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
            <span>STUDIO PROFILE // TWO-PERSON TEAM</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight mb-4 leading-tight">
            A Small Team. Serious About Building.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {studioInfo.positioning} {studioInfo.philosophy}
          </p>
        </div>

        {/* The Studio Philosophy & Model */}
        <div className="studio-card p-6 sm:p-8 md:p-10 border-slate-200 bg-white mb-12 sm:mb-14 shadow-sm">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-display font-bold text-2xl text-slate-950">
              Why We Keep Our Studio Deliberately Focused
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              In traditional agencies, your vision gets translated by salespeople, assigned to project managers, and ultimately built by junior developers you will never speak to.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At <strong className="text-slate-900 font-semibold">Anehit Tech</strong>, we operate differently: you work directly with the two engineers who write your code, architect your database, and ship your product. No middle layers. No lost context.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 mt-8 border-t border-slate-100">
            {studioInfo.advantages.map((adv, idx) => (
              <div key={idx} className="space-y-2">
                <div className="font-mono text-xs font-bold text-sky-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                  <span>{adv.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Cards */}
        <div className="mb-12 sm:mb-14">
          <h2 className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-6 font-semibold">
            Founders & Engineers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="studio-card p-6 sm:p-8 border-slate-200 bg-white flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 font-mono font-bold text-xl shadow-xs">
                      {member.initials}
                    </div>
                    <div>
                      <div className="text-xs font-mono text-sky-700 uppercase tracking-wider mb-0.5 font-semibold">
                        Co-Founder & Developer
                      </div>
                      <h3 className="font-display font-bold text-xl text-slate-950">
                        {member.name}
                      </h3>
                      <p className="text-xs font-mono text-slate-500">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-mono text-slate-500 uppercase font-medium">
                      Technical Domains:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.focus.map((item, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-950 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-950 transition-colors"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Direct Contributor
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Working Style Breakdown */}
        <div className="studio-card p-6 sm:p-8 md:p-10 border-slate-200 bg-white mb-12 sm:mb-14 shadow-sm">
          <h2 className="font-display font-bold text-2xl text-slate-950 mb-4">
            How We Collaborate With Clients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {studioInfo.workingStyle.map((style, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-mono text-xs font-bold text-sky-700 mb-1">
                  0{idx + 1}. {style.title}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {style.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-slate-900 hover:bg-sky-600 text-white font-semibold text-sm transition-colors shadow-sm"
          >
            <span>Start a Project With Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
