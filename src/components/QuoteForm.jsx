import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Download, 
  FileText, 
  Boxes,
  Loader2,
  HelpCircle
} from 'lucide-react';

export default function QuoteForm({ selectedSolution, selectedIndustry, onClearSelection }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phone: '',
    packagingSolution: 'Heavy-Duty Corrugated Boxes',
    orderVolume: '2,000 – 10,000 units',
    dimensions: '',
    technicalMessage: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  // Auto-fill when a user clicks a product solution card or industry
  useEffect(() => {
    if (selectedSolution) {
      setFormData(prev => ({ ...prev, packagingSolution: selectedSolution }));
    }
  }, [selectedSolution]);

  useEffect(() => {
    if (selectedIndustry) {
      setFormData(prev => ({
        ...prev,
        technicalMessage: prev.technicalMessage 
          ? `${prev.technicalMessage} [Industry: ${selectedIndustry}]` 
          : `Custom requirement for: ${selectedIndustry}`
      }));
    }
  }, [selectedIndustry]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API submission delay
    setTimeout(() => {
      const randomId = 'ESTI-' + Math.floor(100000 + Math.random() * 900000);
      setInquiryId(randomId);
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      workEmail: '',
      phone: '',
      packagingSolution: 'Heavy-Duty Corrugated Boxes',
      orderVolume: '2,000 – 10,000 units',
      dimensions: '',
      technicalMessage: ''
    });
    if (onClearSelection) onClearSelection();
  };

  return (
    <section id="quote" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-900/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Direct B2B Commercial Inquiry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            Request an Engineering <span className="text-amber-500">Quote</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Speak directly with our packaging technical team. Receive custom flute recommendations, CAD prototypes, and volume-tiered cost estimates.
          </p>
        </div>

        {/* 2-Column Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Address */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-7 sm:p-8 backdrop-blur-sm shadow-xl">
              <h3 className="text-xl font-bold text-white font-display flex items-center gap-2 mb-2">
                <Boxes className="w-5 h-5 text-amber-500" />
                ESTI Packaging Headquarters
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Industrial Corrugated Manufacturing, Converting & Automated Packaging Design Center.
              </p>

              <div className="mt-8 space-y-6">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold tracking-wider text-slate-400">Plant & Corporate Office</p>
                    <p className="text-sm font-semibold text-slate-100 mt-0.5">
                      Plot 42-45, Industrial Corrugated Park,<br />
                      Phase II, Manufacturing Corridor, India
                    </p>
                  </div>
                </div>

                {/* Technical Hotline */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold tracking-wider text-slate-400">Direct B2B Desk</p>
                    <p className="text-sm font-semibold text-slate-100 mt-0.5">
                      +91 (0) 98200 12345 / +91 (0) 80000 67890
                    </p>
                    <p className="text-xs text-amber-400/90 font-medium mt-0.5">Mon – Sat: 8:30 AM to 7:00 PM IST</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold tracking-wider text-slate-400">Inquiry & RFQ Inbox</p>
                    <p className="text-sm font-semibold text-slate-100 mt-0.5">
                      sales@estipackaging.com
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">Response turnaround under 2 business hours</p>
                  </div>
                </div>

              </div>

              {/* Response SLA badge */}
              <div className="mt-8 p-4 rounded-xl bg-slate-900/90 border border-slate-700 flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-white">Guaranteed Rapid Turnaround:</span>{' '}
                  <span className="text-slate-300">Detailed formal quotation and flute calculation sent within 2 to 4 hours.</span>
                </div>
              </div>

            </div>

            {/* Credibility & Downloads Card */}
            <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-left">
                <FileText className="w-8 h-8 text-amber-400 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-white">ESTI Technical Spec Sheet</p>
                  <p className="text-xs text-slate-400">PDF: Flute profiles, bursting test chart, UN guidelines (4.2 MB)</p>
                </div>
              </div>
              <a
                href="#quote"
                onClick={(e) => {
                  e.preventDefault();
                  alert("ESTI Packaging Technical Catalog will be emailed with your inquiry details.");
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold whitespace-nowrap transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Catalog PDF</span>
              </a>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-800/95 border border-slate-700 rounded-3xl p-7 sm:p-10 shadow-2xl backdrop-blur-md">
              
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    Quotation Request Received!
                  </h3>
                  <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-amber-400 text-xs font-mono font-semibold">
                    Inquiry Ref: {inquiryId}
                  </div>
                  <p className="mt-4 text-slate-300 max-w-md text-sm leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Our senior packaging engineer is reviewing your specs for <strong className="text-amber-400">{formData.packagingSolution}</strong>. We will send the proposal to <strong className="text-white">{formData.workEmail}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-8 px-6 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="border-b border-slate-700 pb-4 mb-6">
                    <h3 className="text-xl font-bold text-white font-display">
                      B2B Quotation Specification Form
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Complete this form to receive board recommendations and factory-direct pricing.
                    </p>
                  </div>

                  {/* 2-Column: Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Full Name <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Company Name <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Industrial Components Ltd"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* 2-Column: Work Email & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Work Email <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="workEmail"
                        required
                        value={formData.workEmail}
                        onChange={handleChange}
                        placeholder="procurement@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone / WhatsApp <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* 2-Column: Packaging Solution Dropdown & Order Volume */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Packaging Solution Needed <span className="text-amber-500">*</span>
                      </label>
                      <select
                        name="packagingSolution"
                        value={formData.packagingSolution}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-slate-100 text-sm focus:outline-none transition-colors"
                      >
                        <option value="Heavy-Duty Corrugated Boxes">Heavy-Duty Corrugated Boxes (5 & 7-Ply)</option>
                        <option value="Industrial & Protective Packaging">Industrial & Protective (Dividers / Pads)</option>
                        <option value="Export & Sea Cartons">Export & Sea Cartons (ISPM-15 / Hydrophobic)</option>
                        <option value="Custom Die-Cut Packaging">Custom Die-Cut Packaging (CAD Precision)</option>
                        <option value="FMCG & Regular Cartons">FMCG & Regular Cartons (RSC / HSC)</option>
                        <option value="Agricultural & Produce Packaging">Agricultural & Produce Packaging (Ventilated)</option>
                        <option value="U.N. Certified Flammable / Hazmat">U.N. Certified Hazmat Packaging (UN 1266)</option>
                        <option value="Custom Tailored Corrugated Solution">Other / Custom Tailored Formulation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Estimated Order Volume <span className="text-amber-500">*</span>
                      </label>
                      <select
                        name="orderVolume"
                        value={formData.orderVolume}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-slate-100 text-sm focus:outline-none transition-colors"
                      >
                        <option value="500 – 2,000 units">500 – 2,000 units (Trial / Pilot Batch)</option>
                        <option value="2,000 – 10,000 units">2,000 – 10,000 units (Regular Commercial)</option>
                        <option value="10,000 – 50,000 units">10,000 – 50,000 units (High-Volume Production)</option>
                        <option value="50,000+ units">50,000+ units (Enterprise / Continuous JIT)</option>
                      </select>
                    </div>
                  </div>

                  {/* Target Box Dimensions & Flute Specs */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center justify-between">
                      <span>Target Dimensions (L × W × H) & Flute Preference</span>
                      <span className="text-[11px] text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="text"
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleChange}
                      placeholder="e.g. 600 x 400 x 500 mm, Double Wall BC Flute, 50kg payload"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Technical Message / Specific Requirements */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Technical Message / Handling Conditions
                    </label>
                    <textarea
                      name="technicalMessage"
                      rows={3}
                      value={formData.technicalMessage}
                      onChange={handleChange}
                      placeholder="Tell us about your product weight, transit method (road/sea/air), stacking height, or special requirements (waterproofing, UN mark, internal cushioning)..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button with Loading State */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-base shadow-lg shadow-amber-600/30 hover:shadow-amber-600/45 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Processing Engineering Spec...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Request For Quote</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
                    <ShieldCheck className="w-4 h-4 text-amber-500" />
                    <span>Your technical blueprints and contact data are strictly confidential (NDA safe).</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
