import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Globe, 
  Send, 
  Clock, 
  Building2, 
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

export default function Contact() {
  const [inquirySubject, setInquirySubject] = useState('Corrugated Boxes & Heavy Duty Packaging');
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientMessage, setClientMessage] = useState('');

  const locations = [
    {
      city: 'Mumbai (Corporate & Dispatch)',
      address: 'Deonar, Mumbai - 400 088, Maharashtra, India',
      type: 'Head Office & Commercial Operations'
    },
    {
      city: 'Khopoli (Manufacturing Facility)',
      address: 'Dheku - Khopoli - 410203, Raigad District, Maharashtra',
      type: '2200mm Corrugation & Converting Plant'
    },
    {
      city: 'Pune (Industrial Corridor Unit)',
      address: 'Shirur - Ranjangaon, Pune Industrial Zone, Maharashtra',
      type: 'Automotive & Heavy Industry Supply Unit'
    }
  ];

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`B2B Packaging Inquiry: ${inquirySubject} - ${clientCompany || clientName || 'Buyer'}`);
    const body = encodeURIComponent(
      `Hello Sunil / ESTI Packaging Industry,\n\n` +
      `I would like to inquire about your packaging solutions.\n\n` +
      `Contact Name: ${clientName || 'Not specified'}\n` +
      `Company: ${clientCompany || 'Not specified'}\n` +
      `Phone Number: ${clientPhone || 'Not specified'}\n` +
      `Product of Interest: ${inquirySubject}\n\n` +
      `Requirements / Message:\n${clientMessage || 'Please provide technical catalog, pricing, and minimum order quantities.'}\n\n` +
      `Thank you.`
    );
    window.location.href = `mailto:sunil@estipackaging.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      `Hello Sunil,\nI am contacting ESTI Packaging regarding ${inquirySubject}.\nPlease share product specifications and quotation details.`
    );
    window.open(`https://wa.me/919833182733?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Direct Commercial Contacts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            Get in <span className="text-emerald-400">Touch With Us</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Your trusted partner in packaging. Connect directly with our management and engineering team via Phone, WhatsApp, or Email.
          </p>
        </div>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Phone Card */}
          <div className="p-7 rounded-2xl bg-slate-800/90 border border-slate-700 flex flex-col justify-between hover:border-emerald-400/60 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Calling Line</p>
              <h3 className="text-2xl font-black text-white font-display mt-1">
                (+91) 983 318 2733
              </h3>
              <p className="text-xs text-slate-400 mt-2">
                Mon – Sat: 8:30 AM to 7:30 PM IST. Direct consultation with our technical team.
              </p>
            </div>
            <a
              href="tel:+919833182733"
              className="mt-6 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call (+91) 983 318 2733</span>
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="p-7 rounded-2xl bg-slate-800/90 border border-slate-700 flex flex-col justify-between hover:border-emerald-400/60 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Instant WhatsApp Chat</p>
              <h3 className="text-2xl font-black text-white font-display mt-1">
                +91 983 318 2733
              </h3>
              <p className="text-xs text-slate-400 mt-2">
                Send blueprints, product dimensions, or photos directly on WhatsApp for quick evaluation.
              </p>
            </div>
            <button
              type="button"
              onClick={handleWhatsAppChat}
              className="mt-6 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          {/* Email Card */}
          <div className="p-7 rounded-2xl bg-slate-800/90 border border-slate-700 flex flex-col justify-between hover:border-emerald-400/60 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Corporate & RFQ Inbox</p>
              <h3 className="text-xl sm:text-2xl font-black text-white font-display mt-1 break-all">
                sunil@estipackaging.com
              </h3>
              <p className="text-xs text-slate-400 mt-2">
                Official email for purchase orders, enterprise tenders, and international export queries.
              </p>
            </div>
            <a
              href="mailto:sunil@estipackaging.com"
              className="mt-6 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs sm:text-sm font-bold transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Compose Direct Email</span>
            </a>
          </div>

        </div>

        {/* 2-Column Split: 3 Plant Locations & Quick Mail Composer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: 3 Locations & Company Profiles (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-400" />
                Strategic Manufacturing & Office Locations
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Strategically situated along Western India's primary industrial freight corridors for rapid delivery.
              </p>
            </div>

            <div className="space-y-4">
              {locations.map((loc, i) => (
                <div key={i} className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                        {loc.type}
                      </span>
                      <h4 className="text-base font-bold text-white mt-0.5">
                        {loc.city}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1">
                        {loc.address}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* LinkedIn & Web Links */}
            <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Official Web: <strong>www.estipackaging.com</strong></span>
              </div>
              <a
                href="https://www.linkedin.com/in/estipack/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-xs font-semibold text-white transition-colors"
              >
                <svg className="w-4 h-4 text-sky-400 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32Z"/>
                </svg>
                <span>LinkedIn Profile</span>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Email Launcher (Client-Side, No Database needed!) */}
          <div className="lg:col-span-6">
            <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 sm:p-8">
              
              <div className="border-b border-slate-700 pb-4 mb-5">
                <h3 className="text-xl font-bold text-white font-display">
                  Quick Email Inquiry Generator
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your details below to instantly open a pre-formatted email to <span className="text-emerald-400 font-semibold">sunil@estipackaging.com</span>.
                </p>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4 text-left">
                
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Select Product Category
                  </label>
                  <select
                    value={inquirySubject}
                    onChange={(e) => setInquirySubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Corrugated Boxes & Heavy Duty Cartons">Corrugated Boxes (3, 5, 7-Ply)</option>
                    <option value="Angle Boards & Edge Protectors">Angle Boards & Edge Protectors (V-Boards)</option>
                    <option value="Self-Adhesive Printed Packaging Tapes">Self-Adhesive Printed Tapes</option>
                    <option value="UN 1266 Hazmat Certified Packaging">UN 1266 Hazardous Material Packaging</option>
                    <option value="Custom Contract Packaging & Value Engineering">Custom Formulation / Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Rahul Mehta"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={clientCompany}
                      onChange={(e) => setClientCompany(e.target.value)}
                      placeholder="e.g. Precision Auto Components"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Phone / Mobile Number
                  </label>
                  <input
                    type="tel"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+91 98000 00000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Requirements / Dimensions / Order Volume
                  </label>
                  <textarea
                    rows={3}
                    value={clientMessage}
                    onChange={(e) => setClientMessage(e.target.value)}
                    placeholder="Specify dimensions (L x W x H), payload weight, ply/flute requirements, or target delivery location..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppChat}
                    className="py-3.5 px-5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center pt-1">
                  Clicking "Send via Email Client" will launch your default email client (Outlook, Gmail, Apple Mail) with this message pre-composed.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
