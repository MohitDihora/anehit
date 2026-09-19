import React from 'react';
import { Activity, ShieldCheck, FileText, CheckCircle2, Lock } from 'lucide-react';

export default function MockupMedExplain() {
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
          <Lock className="w-2.5 h-2.5 text-emerald-600" />
          <span>medexplain.ai/report/analysis</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] font-mono text-emerald-700 font-semibold uppercase">Live AI</span>
        </div>
      </div>

      {/* Realistic Clinical Telemetry Viewport */}
      <div className="p-3.5 space-y-2.5 bg-gradient-to-b from-slate-50 to-white text-xs">
        {/* Patient Report Banner */}
        <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/80 border border-emerald-200/80">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-xs">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-[11px] leading-tight">Serum Ferritin Analysis</div>
              <div className="text-[10px] text-emerald-800 font-mono">Panel #8429 • Complete</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300">
            310 ng/mL (Elevated)
          </span>
        </div>

        {/* Plain Language & Questions Grid */}
        <div className="space-y-2">
          <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-700 font-bold uppercase mb-1">
              <FileText className="w-3 h-3 text-emerald-600" />
              <span>Plain-English Breakdown</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-snug">
              Ferritin is a cellular protein that stores iron. Elevated levels typically reflect high systemic iron stores or mild inflammation.
            </p>
          </div>

          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-600">
            <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>3 Doctor Consultation Points Generated</span>
            </span>
            <span className="text-sky-700 font-bold">HIPAA Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
}
