import React from 'react';

export default function SectionHeader({
  figNumber = "FIG. 01",
  label = "Discipline",
  title,
  subtitle,
  centered = false,
  className = ""
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {/* Blueprint Figure Tag */}
      <div className={`flex items-center gap-2.5 mb-3.5 ${centered ? 'justify-center' : ''}`}>
        <span className="font-mono text-xs sm:text-sm text-sky-800 border border-sky-300 bg-sky-50/90 px-2.5 py-0.5 rounded-md font-bold tracking-wider">
          {figNumber}
        </span>
        <span className="text-xs sm:text-sm tracking-wider uppercase text-slate-600 font-semibold">
          {label}
        </span>
        {!centered && <div className="h-px bg-slate-200 flex-1 max-w-[100px]" />}
      </div>

      {/* Main Title */}
      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight leading-[1.15]">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-3.5 text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
