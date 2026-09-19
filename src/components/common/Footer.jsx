import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Briefcase } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1d] border-t border-slate-800 text-slate-300 pt-16 pb-12">
      <div className="studio-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Studio Info Column */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 flex items-center justify-center shrink-0 shadow-md group-hover:border-sky-500 transition-colors">
                <img 
                  src="/anehit-logo.png" 
                  alt="AneHit Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl text-white">AneHit</span>
                <span className="text-xs text-slate-400 tracking-wider uppercase font-semibold block mt-0.5">
                  Ideas to Impact
                </span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm sm:text-base max-w-md leading-relaxed">
              Building modern digital products for businesses, startups and ideas. A two-person software studio focused on web applications, AI solutions, and reliable digital systems.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-700/50 text-xs sm:text-sm font-semibold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for New Projects & Freelance Contracts
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs sm:text-sm uppercase tracking-wider text-slate-400 mb-4 font-bold">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-slate-400 hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-slate-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Studio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Freelance Profiles */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4 font-semibold">
              Connect & Hire
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://www.upwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors group"
                >
                  <Briefcase className="w-4 h-4 text-slate-400 group-hover:text-sky-400" />
                  <span>Upwork Profile</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors group"
                >
                  <LinkedinIcon className="w-4 h-4 text-slate-400 group-hover:text-sky-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors group"
                >
                  <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-sky-400" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-xs font-mono text-sky-400 hover:text-sky-300 font-medium"
                >
                  <span>Start a Technical Scoping Call →</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 Anehit Tech. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Surat, India & Global Remote</span>
            <span>•</span>
            <span>Two-Person Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
