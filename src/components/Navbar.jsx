import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, MessageSquare, Layers, Award, Clock, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Packaging with Purpose', href: '#purpose' },
    { name: 'Industries', href: '#industries' },
    { name: 'Factory & Specs', href: '#factory' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      
      {/* Top Info Bar (Contact & Accreditations) */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          
          {/* Direct Phone & Email Links */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>(+91) 983 318 2733</span>
            </span>
            <a 
              href="mailto:sunil@estipackaging.com" 
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">sunil@estipackaging.com</span>
              <span className="sm:hidden">Email</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Mumbai • Khopoli • Pune</span>
            </div>
          </div>

          {/* Badges / Accreditations */}
          <div className="hidden md:flex items-center space-x-3 text-[11px] text-slate-400 font-medium">
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3 text-emerald-400" />
              Since 1995 (30+ Years)
            </span>
            <span className="text-slate-700">|</span>
            <span className="inline-flex items-center gap-1">
              <Award className="w-3 h-3 text-emerald-400" />
              1,200 MT/Mo Capacity
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-emerald-400 font-semibold">
              UN 1266 Certified
            </span>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3'
            : 'bg-white border-b border-slate-100 py-4 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Title */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <img 
                src="/assets/images/esti-logo-emblem.png" 
                alt="ESTI Packaging Logo" 
                className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0a1240] font-display flex items-center gap-1 leading-none">
                  ESTI <span className="text-blue-700">PACKAGING</span>
                </span>
                <span className="sr-only">Industry</span>
                <div 
                  aria-hidden="true" 
                  className="flex justify-between w-full text-[9px] sm:text-[10.5px] uppercase text-slate-500 font-extrabold mt-1 select-none leading-none tracking-normal"
                >
                  <span>I</span>
                  <span>N</span>
                  <span>D</span>
                  <span>U</span>
                  <span>S</span>
                  <span>T</span>
                  <span>R</span>
                  <span>Y</span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Direct Factory Tag on Right */}
            <div className="hidden sm:flex items-center">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
              >
                <span>Direct Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-2 animate-fadeIn shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:text-emerald-600 hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-3 border-t border-slate-100 text-center text-xs text-slate-500">
              Email: <span className="font-medium text-slate-800">sunil@estipackaging.com</span>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
