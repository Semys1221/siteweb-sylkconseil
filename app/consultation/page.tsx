import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Consultation() {
  return (
    <div className="bg-white">
      <PageHero
        title="Session Stratégique Privée"
        subtitle="Un temps dédié pour structurer, avec clarté et précision, l'architecture de vos futurs succès financiers."
      />
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-neutral-600 mb-8">
            Vous souhaitez faire le point sur votre situation patrimoniale ? Réservez un créneau
            avec Stéphane Lawnicki pour un échange confidentiel et sans engagement.
          </p>
          <Link
            href="https://calendly.com/syli-conseils/30min"
            target="_blank"
            className="inline-flex items-center gap-3 bg-[#111111] hover:bg-black text-white rounded-full px-6 py-3.5 text-sm font-medium transition-all group"
          >
            Réserver un créneau
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
