import React from 'react';
import PageHeader from '../components/PageHeader';
import BoardSpec from '../components/BoardSpec';
import DieLine from '../components/DieLine';
import InquiryForm from '../components/InquiryForm';

// The two existing interactive tools (moved from /about), text unchanged.
export default function PackagingGuidePage() {
  return (
    <div className="readable">
      <PageHeader crumbs={[{ name: 'Home', href: '/' }, { name: 'Packaging Guide' }]} title="Packaging Guide" />

      {/* Step 1 — board build-up (its own H2: "Start from the board, not the box") */}
      <section aria-label="Step 1" className="bg-white border-b border-line">
        <BoardSpec step="Step 1" />
      </section>

      {/* Step 2 — die-line calculator (H2: "Die-line · FEFCO 0201 regular slotted carton") */}
      <section aria-label="Step 2" className="py-12 lg:py-16 bg-paper border-b border-line">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-kraft-700">Step 2</p>
          <DieLine headingLevel={2} className="" />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </div>
  );
}
