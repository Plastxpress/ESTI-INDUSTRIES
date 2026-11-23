import React from 'react';
import { Home, LayoutGrid, Phone, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { PRODUCTS } from '../data/products';

export default function NotFoundPage() {
  const links = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/#products', label: 'Products', icon: LayoutGrid },
    { href: '/contact', label: 'Contact', icon: Phone },
  ];
  return (
    <div className="readable">
      <PageHeader crumbs={[{ name: 'Home', href: '/' }, { name: 'Page not found' }]} title="Page not found">
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-ink-soft">
          Sorry, this page doesn’t exist or has moved. These links will get you back on track:
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="inline-flex items-center gap-2 min-h-12 px-6 rounded-full bg-ink hover:bg-ink-2 text-white font-bold transition-colors"
            >
              <Icon className="w-4 h-4 text-kraft-300" /> {label}
            </a>
          ))}
        </div>
      </PageHeader>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-grotesk text-2xl font-extrabold text-ink">Products</h2>
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {PRODUCTS.map((p) => (
              <li key={p.id}>
                <a href={p.path} className="group flex items-center justify-between gap-3 min-h-12 px-4 rounded-2xl border border-line hover:border-kraft-400 text-ink font-semibold">
                  {p.title}
                  <ArrowRight className="w-4 h-4 shrink-0 text-kraft-700 transition-transform group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
