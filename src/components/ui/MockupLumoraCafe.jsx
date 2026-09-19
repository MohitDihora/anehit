import React from 'react';
import { Coffee, MapPin, ArrowRight, Lock, Calendar } from 'lucide-react';

export default function MockupLumoraCafe() {
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
          <Lock className="w-2.5 h-2.5 text-amber-600" />
          <span>lumoracafe.coffee</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="text-[9px] font-mono text-amber-800 font-semibold uppercase">Open 7am</span>
        </div>
      </div>

      {/* Realistic Artisan Cafe Viewport */}
      <div className="p-3.5 space-y-2.5 bg-gradient-to-b from-amber-50/40 via-stone-50 to-white text-xs">
        {/* Roastery Feature Banner */}
        <div className="p-2.5 rounded-lg bg-stone-900 text-stone-100 flex items-center justify-between shadow-xs">
          <div>
            <div className="text-[9px] font-mono tracking-widest text-amber-400 uppercase font-semibold">Specialty Roasters</div>
            <div className="font-bold text-[12px] leading-tight text-white">Artisan Single-Origin Roast</div>
          </div>
          <span className="px-2 py-1 rounded bg-amber-500 text-stone-950 font-bold text-[10px] flex items-center gap-1">
            <span>Book Table</span>
            <ArrowRight className="w-2.5 h-2.5" />
          </span>
        </div>

        {/* Featured Items Grid */}
        <div className="space-y-1.5">
          <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
            <div className="min-w-0 pr-2">
              <div className="font-bold text-[11px] text-slate-900 truncate">Single Origin Cortado</div>
              <div className="text-[10px] text-slate-500 truncate">Ethiopian Yirgacheffe, steamed oat milk</div>
            </div>
            <span className="font-mono text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              $4.80
            </span>
          </div>

          <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
            <div className="min-w-0 pr-2">
              <div className="font-bold text-[11px] text-slate-900 truncate">Bourbon Barrel Cold Drip</div>
              <div className="text-[10px] text-slate-500 truncate">18-hour slow extraction, vanilla notes</div>
            </div>
            <span className="font-mono text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              $5.50
            </span>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-0.5">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-amber-600" />
            Specialty Roastery & Cafe
          </span>
          <span className="text-emerald-700 font-semibold">99 Lighthouse Score</span>
        </div>
      </div>
    </div>
  );
}
