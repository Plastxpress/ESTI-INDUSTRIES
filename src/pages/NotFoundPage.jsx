import React from 'react';
import PageHeader from '../components/PageHeader';

export default function NotFoundPage() {
  return (
    <div className="readable">
      <PageHeader crumbs={[{ name: 'Home', href: '/' }, { name: 'Page not found' }]} title="Page not found">
        <p className="mt-4 text-base text-slate-700">
          <a href="/" className="font-bold text-kraft-700 underline underline-offset-2">Go to the home page</a>
        </p>
      </PageHeader>
    </div>
  );
}
