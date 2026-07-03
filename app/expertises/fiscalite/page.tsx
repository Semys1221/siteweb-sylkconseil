import { PageHero } from "@/components/PageHero";

export default function Fiscalite() {
  return (
    <div className="bg-white">
      <PageHero title="Stratégie Fiscale" subtitle="Optimisez votre fiscalité avec une approche sur-mesure." />
      <section className="py-16 px-6 max-w-3xl mx-auto text-neutral-700 leading-relaxed space-y-6">
        <p>L&apos;optimisation fiscale est au cœur de notre expertise. Nous vous accompagnons dans la mise en place de solutions adaptées à votre situation personnelle et professionnelle.</p>
        <p>De la gestion de votre imposition sur le revenu à la structuration de votre patrimoine immobilier et financier, chaque décision est prise dans une logique de performance et de sécurité juridique.</p>
      </section>
    </div>
  );
}
