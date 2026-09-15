import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientTicker from './components/ClientTicker';
import Products from './components/Products';
import IndustriesSection from './components/IndustriesSection';
import Factory from './components/Factory';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      {/* 1. Header with Top Info Bar & Direct Contact */}
      <Navbar />

      {/* Main Single-Page Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 2.5 Moving Client Logo Ticker (Directly below Hero!) */}
        <ClientTicker />

        {/* 3. Product Portfolio with Details (Directly after Hero & Ticker!) */}
        <Products />

        {/* 4. Packaging Solutions Built for Every Industry & 16 Verticals */}
        <IndustriesSection />

        {/* 4. Factory Infrastructure, Machinery & Export FTA Advantage */}
        <Factory />

        {/* 5. Direct Contact & Locations (No Quote Button, No Database!) */}
        <Contact />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
