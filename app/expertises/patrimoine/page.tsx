import { PageHero } from "@/components/PageHero";

export default function Patrimoine() {
  return (
    <div className="bg-white">
      <PageHero title="Gestion de Patrimoine" subtitle="Structurez et diversifiez votre patrimoine pour le long terme." />
      <section className="py-16 px-6 max-w-3xl mx-auto text-neutral-700 leading-relaxed space-y-6">
        <p>Une gestion de patrimoine efficace repose sur une vision globale de votre situation. Nous analysons vos actifs, vos objectifs et votre tolérance au risque pour construire une stratégie d&apos;investissement cohérente.</p>
        <p>Notre approche couvre l&apos;ensemble des classes d&apos;actifs : immobilier, financier, non-coté, et assurance-vie.</p>
      </section>
    </div>
  );
}
