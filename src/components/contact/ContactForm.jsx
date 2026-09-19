import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, ArrowUpRight, Mail, Briefcase } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';
import SectionHeader from '../common/SectionHeader';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Custom Software Development',
    budget: 'Not sure yet',
    details: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    'Custom Software Development',
    'Web & Mobile App Development',
    'E-commerce Website',
    'Payment Gateway Integration',
    'Portfolio & Brand Sites',
    'AI-Powered Application Development',
    'Authentication & Security Systems',
    'Real-Time & Multilingual Communication Features',
    'LMS & Certification Platforms',
    'Admin Dashboards & Internal Tools',
    'Post-Launch Maintenance & Support Retainers',
    'Other'
  ];

  const budgetOptions = [
    'Not sure yet',
    'Under $500',
    '$500 – $1,000',
    '$1,000 – $2,500',
    '$2,500 – $5,000',
    '$5,000+'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.details.trim()) {
      errs.details = 'Please briefly share what you would like to build';
    } else if (formData.details.trim().length < 15) {
      errs.details = 'Please provide a little more detail (at least 15 characters)';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="studio-container">
        <SectionHeader
          figNumber="FIG. 08"
          label="Direct Inquiries"
          title="Let's Talk About Your Project"
          subtitle="Have an idea, business requirement or existing product that needs development? Tell us about it."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Left Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="studio-card p-6 sm:p-8 md:p-10 border-slate-200 bg-white shadow-sm">
              {submitted ? (
                <div className="py-12 px-4 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-slate-900">
                    Inquiry Received
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-slate-900 font-semibold">{formData.name}</span>. One of our founding engineers will review your project scope and follow up with you at <span className="text-slate-900 font-semibold">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        service: 'Website Development',
                        budget: 'Not sure yet',
                        details: '',
                      });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 hover:bg-slate-200 transition-colors font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block font-mono text-xs text-slate-700 mb-1.5 uppercase tracking-wider font-semibold">
                        Your Name <span className="text-sky-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600 transition-colors placeholder:text-slate-400 ${
                          errors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-300 hover:border-slate-400'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block font-mono text-xs text-slate-700 mb-1.5 uppercase tracking-wider font-semibold">
                        Email Address <span className="text-sky-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600 transition-colors placeholder:text-slate-400 ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300 hover:border-slate-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company / Business */}
                  <div>
                    <label htmlFor="company" className="block font-mono text-xs text-slate-700 mb-1.5 uppercase tracking-wider font-semibold">
                      Company / Business <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Labs or Personal Project"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600 transition-colors placeholder:text-slate-400"
                    />
                  </div>

                  {/* Service & Budget Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="block font-mono text-xs text-slate-700 mb-1.5 uppercase tracking-wider font-semibold">
                        Service Required
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600 transition-colors"
                      >
                        {servicesList.map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label htmlFor="budget" className="block font-mono text-xs text-slate-700 mb-1.5 uppercase tracking-wider font-semibold">
                        Estimated Budget <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600 transition-colors"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="details" className="block font-mono text-xs text-slate-700 mb-1.5 uppercase tracking-wider font-semibold">
                      Project Details <span className="text-sky-600">*</span>
                    </label>
                    <textarea
                      id="details"
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Describe what you want to build, existing systems, target timeline, or specific challenges..."
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600 transition-colors placeholder:text-slate-400 resize-y ${
                        errors.details ? 'border-red-400 bg-red-50/30' : 'border-slate-300 hover:border-slate-400'
                      }`}
                    />
                    {errors.details && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.details}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-slate-900 hover:bg-sky-600 text-white font-semibold text-sm transition-all shadow-md active:scale-98"
                    >
                      <span>Send Project Inquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <p className="mt-2 text-[11px] font-mono text-slate-500">
                      Direct review by founding engineers • 24-hour response turnaround
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="studio-card p-6 sm:p-7 md:p-8 border-slate-200 bg-white space-y-6 shadow-sm">
              <div>
                <span className="font-mono text-xs text-sky-700 uppercase tracking-wider font-bold">
                  Direct Channels
                </span>
                <h3 className="font-display font-bold text-xl text-slate-950 mt-1">
                  Let's build something useful together.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Prefer direct communication over a form? Reach out via our verified channels below for direct founder discussion.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {/* Email */}
                <a
                  href="mailto:contact@anehittech.com"
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-sky-50/30 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sky-700 group-hover:border-sky-400 shadow-xs">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Email Us</div>
                      <div className="text-xs sm:text-sm font-mono text-slate-900 font-semibold group-hover:text-sky-700">
                        contact@anehittech.com
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-700" />
                </a>

                {/* Upwork */}
                <a
                  href="https://www.upwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-sky-50/30 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sky-700 group-hover:border-sky-400 shadow-xs">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Upwork Freelancing</div>
                      <div className="text-xs sm:text-sm font-mono text-slate-900 font-semibold group-hover:text-sky-700">
                        Hire via Upwork Contract
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-700" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-sky-50/30 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sky-700 group-hover:border-sky-400 shadow-xs">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Professional Network</div>
                      <div className="text-xs sm:text-sm font-mono text-slate-900 font-semibold group-hover:text-sky-700">
                        LinkedIn Studio Presence
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-700" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-sky-50/30 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sky-700 group-hover:border-sky-400 shadow-xs">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Open Repositories</div>
                      <div className="text-xs sm:text-sm font-mono text-slate-900 font-semibold group-hover:text-sky-700">
                        GitHub Profile & Code
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-700" />
                </a>
              </div>
            </div>

            {/* Availability Note */}
            <div className="p-5 rounded-xl bg-sky-50/80 border border-sky-200 text-xs text-slate-600 space-y-2">
              <div className="font-mono text-sky-800 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Project Intake Status
              </div>
              <p className="leading-relaxed text-[11px]">
                We accept selective client engagements each quarter to maintain high technical focus and hands-on founder commitment.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
