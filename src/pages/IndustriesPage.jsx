import React from 'react';
import PageHeader from '../components/PageHeader';
import IndustriesSection from '../components/IndustriesSection';
import { ContactCta } from './HomePage';

export default function IndustriesPage() {
  return (
    <div className="readable">
      <PageHeader
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Industries' }]}
        eyebrow="Tailored Industry Engineering"
        title="Packaging Solutions Built for Every Industry"
      />
      <IndustriesSection asPage />
      <ContactCta />
    </div>
  );
}
