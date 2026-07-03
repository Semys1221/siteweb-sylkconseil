import Link from "next/link";
import { Linkedin } from "lucide-react";
import { tenantConfig } from "@/lib/tenant-config";

const legal = [
  "Courtier et Conseiller en investissements financiers enregistré auprès de la CNCEF, association agréée auprès de l'AMF",
  "Agent Immobilier — Carte Transaction sur Immeubles n° CPI69 012020 000 045246 enregistrée auprès de la CCI de Lyon",
  "Responsabilité civile professionnelle et garantie financière souscrites auprès de MMA IARD n°112 788 909",
];

const societes = [
  "SYLK Conseils SAS au capital de 1000 Euros — RCS Lyon 879 235 521 — SIRET 879 235 521 00017 — NAF 6619B — ORIAS n°1900 8912",
  "SYCLEA Finances EI — RCS Lyon 819 550 591 — SIRET 819 550 591 00021 — NAF 6622Z — ORIAS n°12500 6331",
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0f] text-white/60">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-white font-semibold mb-4">{tenantConfig.name}</h4>
            <p className="text-sm leading-relaxed">{tenantConfig.tagline}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/le-cabinet" className="hover:text-white transition-colors">Le Cabinet</Link></li>
              <li><Link href="/expertises" className="hover:text-white transition-colors">Expertises</Link></li>
              <li><Link href="/consultation" className="hover:text-white transition-colors">Consultation</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${tenantConfig.contact.email}`} className="hover:text-white transition-colors">
                  {tenantConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={tenantConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <Linkedin size={14} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 space-y-4">
          {legal.map((l, i) => (
            <p key={i} className="text-[10px] leading-relaxed text-white/40">{l}</p>
          ))}
          <div className="pt-4 space-y-1">
            {societes.map((s, i) => (
              <p key={i} className="text-[10px] text-white/30">{s}</p>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 text-[10px] flex flex-col sm:flex-row justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} {tenantConfig.name}. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="/cgu" className="hover:text-white transition-colors">CGU</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
