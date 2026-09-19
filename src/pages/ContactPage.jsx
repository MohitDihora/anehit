import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import { Clock, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="py-10 sm:py-12 bg-blueprint">
      <div className="studio-container mb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-sky-700 mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
            <span>DIRECT INTAKE // TECHNICAL SCOPING</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight mb-4 leading-tight">
            Let's Talk About Your Project
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Whether you need a new web application, a full-stack platform, or an AI workflow integration, we're ready to explore how we can build it with precision.
          </p>
        </div>
      </div>

      {/* Scoping Call Expectations Strip */}
      <div className="studio-container mb-8 sm:mb-12">
        <div className="p-6 rounded-xl bg-white border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-600 shadow-sm">
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-900 font-semibold block mb-0.5">30-Minute Scoping</span>
              <span>An engineer asking questions about your system and goals.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-900 font-semibold block mb-0.5">Fixed Milestone Pricing</span>
              <span>Transparent milestone estimates and defined delivery scopes.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-900 font-semibold block mb-0.5">Direct Developer NDA</span>
              <span>We respect intellectual property and sign mutual agreements.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}
