import { PageHero } from "@/components/PageHero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const expertises = [
  {
    title: "Stratégie Fiscale",
    desc: "Optimisation de votre fiscalité dans le respect des cadres légaux.",
    href: "/expertises/fiscalite",
  },
  {
    title: "Gestion de Patrimoine",
    desc: "Structuration et diversification de votre patrimoine.",
    href: "/expertises/patrimoine",
  },
  {
    title: "Transmission",
    desc: "Anticipation et organisation de la transmission de votre patrimoine.",
    href: "/expertises/transmission",
  },
  {
    title: "Retraite",
    desc: "Préparation et optimisation de votre retraite.",
    href: "/expertises/retraite",
  },
];

export default function Expertises() {
  return (
    <div className="bg-white">
      <PageHero title="Nos Expertises" subtitle="Un accompagnement complet sur l'ensemble des dimensions de votre patrimoine." />
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertises.map((e, i) => (
            <Link
              key={i}
              href={e.href}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2 group-hover:text-blue-600 transition-colors">
                {e.title}
              </h3>
              <p className="text-sm text-neutral-500">{e.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                En savoir plus <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
