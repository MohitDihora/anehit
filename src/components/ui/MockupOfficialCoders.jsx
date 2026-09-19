import React from 'react';
import { GraduationCap, Award, BookOpen, Lock, CheckCircle2 } from 'lucide-react';

export default function MockupOfficialCoders() {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-200/90 bg-white shadow-md font-sans text-slate-900 transition-all">
      {/* Realistic Browser Viewport Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-slate-100/90 border-b border-slate-200">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white border border-slate-200/80 text-[10px] font-mono text-slate-600 shadow-2xs">
          <Lock className="w-2.5 h-2.5 text-blue-600" />
          <span>officialcoders.io/course/fullstack</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[9px] font-mono text-blue-700 font-semibold uppercase">LMS Portal</span>
        </div>
      </div>

      {/* Realistic Student Dashboard Viewport */}
      <div className="p-3.5 space-y-2.5 bg-gradient-to-b from-blue-50/40 to-white text-xs">
        {/* Course Progress Banner */}
        <div className="p-2.5 rounded-lg bg-white border border-blue-100 shadow-2xs">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-xs">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-[11px] leading-tight">Full-Stack Web & REST APIs</div>
                <div className="text-[10px] text-blue-700 font-mono">Module 04 of 05</div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-blue-800 border border-blue-200">
              85% Done
            </span>
          </div>

          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="w-[85%] h-full bg-gradient-to-r from-blue-600 to-sky-500 rounded-full" />
          </div>
        </div>

        {/* Current Lesson & Quiz Results */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
            <div className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-semibold mb-0.5">Active Lesson</div>
            <div className="text-[11px] font-bold text-slate-900 flex items-center gap-1 truncate">
              <BookOpen className="w-3 h-3 text-blue-600 shrink-0" />
              <span className="truncate">JWT Auth & RBAC</span>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-emerald-50/70 border border-emerald-200">
            <div className="font-mono text-[9px] uppercase tracking-wider text-emerald-700 font-semibold mb-0.5">Assessment</div>
            <div className="text-[11px] font-bold text-emerald-900 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
              <span>10 / 10 Verified</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between p-1.5 rounded-lg bg-amber-50/70 border border-amber-200/70 text-[10px] font-mono text-amber-900">
          <span className="flex items-center gap-1 font-semibold">
            <Award className="w-3 h-3 text-amber-600" />
            Verifiable PDF Certificate Ready
          </span>
          <span className="text-amber-800 underline font-bold cursor-pointer">Preview</span>
        </div>
      </div>
    </div>
  );
}
