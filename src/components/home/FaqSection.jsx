import React, { useState } from 'react';
import { ChevronDown, MessageSquare, ArrowUpRight, HelpCircle } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { faqs } from '../../data/faqs';
import { Link } from 'react-router-dom';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="studio-container">
        <SectionHeader
          figNumber="FIG. 07"
          label="Transparency & Clarity"
          title="Frequently Asked Questions"
          subtitle="Direct answers to common questions about timelines, pricing, intellectual property, and how we collaborate."
        />

        <div className="max-w-4xl mx-auto">
          {/* FAQ Accordion List */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-sky-200 shadow-sm'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-200 ${
                        isOpen
                          ? 'bg-sky-50 border-sky-200 text-sky-600 rotate-180'
                          : 'bg-slate-50 border-slate-200 text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100 animate-fadeIn">
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Help & CTA Strip */}
          <div className="mt-10 sm:mt-12 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base">
                  Have a specific technical question or unique scope?
                </h4>
                <p className="text-xs sm:text-sm text-slate-500">
                  Talk directly with our lead developers. We provide candid architectural advice with zero sales pressure.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-sky-600 text-white text-xs font-mono font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>Ask Us Directly</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
