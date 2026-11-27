import React from 'react';
import { ClipboardCheck } from 'lucide-react';

/** Owner-provided trust point: Certificate of Analysis with every shipment. */
export default function CoaNote({ className = '' }) {
  return (
    <p className={`flex items-start gap-3 rounded-2xl bg-ink p-4 sm:p-5 text-sm sm:text-[15px] text-white leading-snug ${className}`}>
      <ClipboardCheck className="w-5 h-5 text-kraft-300 shrink-0 mt-0.5" />
      <span>
        <strong className="font-bold text-kraft-300">Certificate of Analysis (COA) with every shipment:</strong>{' '}
        GSM, BF, moisture, board thickness, ECT and carton weight
      </span>
    </p>
  );
}
