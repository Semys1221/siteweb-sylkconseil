"use client";

import { useCallback, useState } from "react";
import { Check, Copy } from "lucide-react";

interface SignatureItem {
  slug: string;
  label: string;
  html: string;
}

export function SignaturesClient({ items }: { items: SignatureItem[] }) {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = useCallback(async (slug: string, html: string) => {
    try {
      await navigator.clipboard.writeText(html);
      setCopied(slug);
      setTimeout(() => setCopied(null), 2000);
    } catch {}
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 px-6">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl font-light mb-8">Signatures Email</h1>
        <div className="space-y-8">
          {items.map((item) => (
            <div key={item.slug} className="border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-medium text-white/70">{item.label}</h2>
                <button
                  onClick={() => handleCopy(item.slug, item.html)}
                  className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/60 transition-colors"
                >
                  {copied === item.slug ? (
                    <><Check size={14} className="text-green-400" /> Copié</>
                  ) : (
                    <><Copy size={14} /> Copier le HTML</>
                  )}
                </button>
              </div>
              <div
                className="bg-white rounded-xl p-4 flex items-center justify-center min-h-[120px]"
                dangerouslySetInnerHTML={{ __html: item.html }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
