import React, { useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, ArrowRight, Layers, Award } from 'lucide-react';

export default function InquiryModal({ solution, onClose, onRequestQuote }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!solution) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-slate-900 border border-slate-700/80 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 text-white flex flex-col">
        
        {/* Header with image banner */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-t-3xl bg-slate-950">
          <img
            src={solution.image}
            alt={solution.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center transition-colors shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Solution Category Tag */}
          <div className="absolute bottom-4 left-6">
            <span className="px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider">
              {solution.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display mt-2">
              {solution.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {solution.summary}
          </p>

          {/* Technical Specifications Matrix */}
          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Verified Engineering Capabilities
            </h4>
            <ul className="space-y-2.5">
              {solution.specs.map((spec, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Typical Industrial Applications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Recommended Use Cases & Verticals
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 bg-slate-800/40 p-3.5 rounded-xl border border-slate-800">
              {solution.applications}
            </p>
          </div>

          {/* Compliance notice */}
          <div className="flex items-center gap-3 text-xs text-slate-400 border-t border-slate-800 pt-4">
            <Award className="w-5 h-5 text-amber-500 shrink-0" />
            <span>Manufactured according to TAPPI, ASTM D4169, and ISO 9001:2015 compression benchmarks.</span>
          </div>

          {/* Modal Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                onRequestQuote(solution.title);
                onClose();
              }}
              className="flex-1 py-3.5 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold shadow-lg shadow-amber-600/30 flex items-center justify-center gap-2 transition-colors"
            >
              <span>Request Quote for this Solution</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="py-3.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold transition-colors"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
