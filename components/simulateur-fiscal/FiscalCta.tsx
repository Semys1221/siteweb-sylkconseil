"use client";

import { tenantConfig } from "@/lib/tenant-config";

export default function FiscalCta() {
  return (
    <div className="text-center">
      <a
        href={tenantConfig.calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all"
      >
        Prendre rendez-vous avec un conseiller
      </a>
    </div>
  );
}
