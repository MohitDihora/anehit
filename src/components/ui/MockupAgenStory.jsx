import React, { useState } from 'react';
import { BookOpen, Sparkles, Feather, Compass } from 'lucide-react';

export default function MockupAgenStory() {
  const [selectedGenre, setSelectedGenre] = useState('Cyberpunk');

  const storySnippets = {
    Cyberpunk: "Rain streaked against the neon-lit glass of Sector 9. Mara adjusted her ocular interface, decoding the encrypted transmission that shouldn't have existed.",
    SciFi: "The orbital relay drifted silently above Kepler-452b. A faint rhythmic pulse echoed through the communication deck—not from Earth, but from deep within the asteroid belt.",
    Mystery: "The grandfather clock chimed precisely at midnight, striking thirteen times. In the dimly lit study of Blackwood Manor, the sealed envelope had already vanished."
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
            <Feather className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span className="truncate">gen-story-gamma.vercel.app</span>
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800 shrink-0">
          Creative Suite
        </span>
      </div>

      <div className="p-3 sm:p-4 space-y-3 bg-slate-900">
        {/* Story Configuration Pills */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-2 sm:p-2.5 rounded-lg bg-slate-800 border border-slate-700">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <Compass className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span className="text-[11px] font-mono text-slate-400">GENRE:</span>
            {['Cyberpunk', 'SciFi', 'Mystery'].map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                  selectedGenre === genre
                    ? 'bg-purple-600 text-white font-medium shadow-xs'
                    : 'text-slate-300 hover:text-white bg-slate-700/60'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
          <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">Chapter 1 / 4</span>
        </div>

        {/* Narrative Card */}
        <div className="p-3 sm:p-4 rounded-lg bg-slate-950 border border-purple-950/80">
          <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-800 text-xs text-slate-400 font-mono">
            <span className="text-purple-300 flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              CHAPTER I: THE PROTOCOL
            </span>
            <span className="text-emerald-400 text-[11px]">AI Generated</span>
          </div>
          <p className="text-slate-200 leading-relaxed font-serif text-xs sm:text-sm italic">
            "{storySnippets[selectedGenre]}"
          </p>
          <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="text-[10px] font-mono text-slate-400">Tone: Atmospheric</span>
            <button className="flex items-center gap-1 text-[11px] font-mono text-purple-300 hover:text-purple-200">
              <Sparkles className="w-3 h-3" />
              <span>Generate Scene 2</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
