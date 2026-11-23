import React from 'react';
import { FileCheck2, MapPin, Star, Receipt, ExternalLink, Quote } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHead from '../components/SectionHead';
import { COMPANY_INFO, isFilled, filledCertificates, filledReviews } from '../data/companyInfo';
import { ADDRESS_TEXT } from '../data/site';

/**
 * Company Info — only sections the owner has filled in are rendered.
 * (The whole route is unpublished until at least one is filled: see data/companyInfo.js.)
 */
export default function CompanyInfoPage() {
  const certs = filledCertificates();
  const reviews = filledReviews();
  const { gstNumber, mapEmbedUrl, businessProfileUrl } = COMPANY_INFO;

  return (
    <div className="readable">
      <PageHeader crumbs={[{ name: 'Home', href: '/' }, { name: 'Company Info' }]} title="Company Info" />

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {isFilled(gstNumber) && (
            <div>
              <SectionHead eyebrow="Registration" title="GST Number" />
              <p className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-line px-5 py-4 font-grotesk text-xl font-bold text-ink">
                <Receipt className="w-5 h-5 text-kraft-700" /> {gstNumber}
              </p>
            </div>
          )}

          {certs.length > 0 && (
            <div>
              <SectionHead eyebrow="Quality" title="Certificates" />
              <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {certs.map((c) => (
                  <li key={c.name} className="flex items-start gap-4 rounded-3xl border border-line p-6">
                    <span className="w-12 h-12 rounded-2xl bg-ink text-kraft-300 flex items-center justify-center shrink-0"><FileCheck2 className="w-6 h-6" /></span>
                    <div>
                      <h3 className="font-grotesk text-xl font-bold text-ink">{c.name} Certificate</h3>
                      {isFilled(c.certificateNumber) && <p className="mt-1 text-sm text-ink-soft">Certificate No. {c.certificateNumber}</p>}
                      {isFilled(c.file) && (
                        <a href={c.file} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 min-h-11 px-5 rounded-full bg-ink text-white text-sm font-bold hover:bg-ink-2">
                          View certificate <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(isFilled(mapEmbedUrl) || isFilled(businessProfileUrl)) && (
            <div>
              <SectionHead eyebrow="Location" title="Find Us on Google" lead={ADDRESS_TEXT} />
              {isFilled(businessProfileUrl) && (
                <a href={businessProfileUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 min-h-12 px-6 rounded-full bg-kraft-500 hover:bg-kraft-400 text-ink font-bold">
                  <MapPin className="w-4 h-4" /> Google Business Profile <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {isFilled(mapEmbedUrl) && (
                <div className="mt-6 rounded-3xl overflow-hidden border border-line">
                  <iframe title={`Map: ${ADDRESS_TEXT}`} src={mapEmbedUrl} width="1200" height="420" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="block w-full h-[340px] sm:h-[420px] border-0" />
                </div>
              )}
            </div>
          )}

          {reviews.length > 0 && (
            <div>
              <SectionHead eyebrow="Customers" title="Customer Reviews" />
              <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reviews.map((r) => (
                  <li key={`${r.name}-${r.text.slice(0, 20)}`} className="rounded-3xl bg-paper p-6">
                    <Quote className="w-6 h-6 text-kraft-700" />
                    <blockquote className="mt-3 text-ink leading-relaxed">{r.text}</blockquote>
                    <p className="mt-4 text-sm font-bold text-ink">{r.name}</p>
                    {isFilled(r.company) && <p className="text-sm text-ink-soft">{r.company}</p>}
                    {isFilled(r.source) && (
                      <p className="mt-1 inline-flex items-center gap-1 text-xs text-ink-soft"><Star className="w-3.5 h-3.5 text-kraft-700" /> {r.source}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
