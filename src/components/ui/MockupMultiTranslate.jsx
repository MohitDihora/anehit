import React, { useState } from 'react';
import { Copy, Check, Sparkles, Volume2 } from 'lucide-react';

export default function MockupMultiTranslate() {
  const [copied, setCopied] = useState(false);
  const [targetLang, setTargetLang] = useState('Spanish');
  
  const translations = {
    Spanish: "Construimos productos digitales modernos que impulsan a las empresas.",
    French: "Nous concevons des produits numériques modernes qui font progresser les entreprises.",
    German: "Wir entwickeln moderne digitale Produkte, die Unternehmen voranbringen.",
    Japanese: "私たちはビジネスを前進させる最新のデジタル製品を構築します。"
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl font-sans text-sm text-slate-100">
      {/* App Bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-slate-950 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-1 sm:ml-2 font-mono text-[11px] sm:text-xs text-slate-400 flex items-center gap-1.5 truncate">
            <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="truncate">multitranslate-ai.vercel.app</span>
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
            AI Engine
          </span>
        </div>
      </div>

      {/* Language Controls */}
      <div className="p-3 sm:p-4 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 bg-slate-900">
        {/* Source Pane */}
        <div className="p-3 sm:p-4 rounded-lg bg-slate-800/80 border border-slate-700 flex flex-col justify-between min-h-[9.5rem] sm:min-h-[11rem]">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-700/60 text-xs font-mono text-slate-400">
              <span className="text-sky-400 font-semibold">SOURCE: ENGLISH</span>
              <span className="text-[11px]">12 words</span>
            </div>
            <p className="text-white font-medium text-xs sm:text-sm leading-relaxed">
              We build modern digital products that move businesses forward.
            </p>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-700/40 mt-2">
            <span className="font-mono text-[11px]">Auto-detect</span>
            <Volume2 className="w-4 h-4 hover:text-sky-400 cursor-pointer" />
          </div>
        </div>

        {/* Target Pane */}
        <div className="p-3 sm:p-4 rounded-lg bg-slate-950 border border-sky-900/60 flex flex-col justify-between min-h-[9.5rem] sm:min-h-[11rem]">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs font-mono text-slate-400 flex-wrap gap-1">
              <span className="text-slate-400 text-[11px]">TARGET:</span>
              <div className="flex gap-1">
                {['Spanish', 'French', 'German'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setTargetLang(lang)}
                    className={`px-2 py-0.5 rounded text-[10px] sm:text-[11px] transition-colors ${
                      targetLang === lang
                        ? 'bg-sky-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-white bg-slate-800'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-sky-200 font-medium text-xs sm:text-sm leading-relaxed">
              {translations[targetLang] || translations.Spanish}
            </p>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800 mt-2">
            <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Verified translation
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-white transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
