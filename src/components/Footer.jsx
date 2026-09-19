import { Layers, ShieldCheck, Mail, Phone, MapPin, ArrowUp, Globe, Check } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white p-1.5 shadow-sm flex items-center justify-center shrink-0">
                <img 
                  src="/assets/images/esti-logo-emblem.png" 
                  alt="ESTI Packaging Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white font-display flex items-center gap-1 leading-none">
                  ESTI <span className="text-blue-400">PACKAGING</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-slate-400 font-extrabold mt-1">
                  I N D U S T R Y
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Your trusted partner in custom corrugated packaging solutions with over 30 years of experience in box manufacturing (Since 1995).
            </p>

            <p className="text-xs font-bold text-emerald-400 tracking-wide">
              Engineered for strength. Designed for performance. Built for your industry.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" /> ISO 9001
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-emerald-400 font-medium">
                UN 1266 Certified
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-emerald-400 font-medium">
                100% Recyclable
              </span>
            </div>
          </div>

          {/* Product Portfolio */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display mb-4">
              Products
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">Corrugated Boxes (3, 5, 7-Ply)</a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">Jumbo & Pallet Boxes</a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">Custom & Large-Format Boxes</a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">Die-Cut Packaging & Partitions</a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">Document Storage & Archival Boxes</a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">UN 1266 Certified Hazmat Boxes</a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">Angle Boards & Edge Protectors</a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">Self-Adhesive Printed Tapes</a>
              </li>
            </ul>
          </div>

          {/* Manufacturing Units */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display mb-4">
              Manufacturing Units
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-300">Mumbai:</strong> Deonar, Mumbai - 400 088
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-300">Khopoli:</strong> Dheku, Khopoli - 410 203
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-300">Pune:</strong> Shirur - Ranjangaon Industrial Zone
                </div>
              </li>
            </ul>
          </div>

          {/* Direct Commercial Contacts */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919833182733" className="hover:text-emerald-400 font-semibold transition-colors">
                  (+91) 983 318 2733
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=esteepack@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 transition-colors break-all"
                >
                  esteepack@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:sunil@estipackaging.com" className="hover:text-emerald-400 transition-colors break-all">
                  sunil@estipackaging.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300">www.estipackaging.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-sky-400 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32Z"/>
                </svg>
                <a 
                  href="https://www.linkedin.com/in/estipack/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-sky-400 transition-colors"
                >
                  linkedin.com/in/estipack/
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} ESTI Packaging Industry. All rights reserved. Direct B2B packaging solutions.
          </div>

          <div className="flex items-center gap-4">
            <span>Deonar, Mumbai • Khopoli • Pune</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
