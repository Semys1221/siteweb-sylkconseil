import { PageHero } from "@/components/PageHero";

export default function Cgu() {
  return (
    <div className="bg-white">
      <PageHero title="Conditions Générales d'Utilisation" />
      <section className="py-24 px-6 max-w-3xl mx-auto space-y-8 text-neutral-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-black">Objet</h2>
        <p>Les présentes CGU régissent l&apos;utilisation du site internet sylkconseils.com et de ses services associés.</p>
        <h2 className="text-xl font-semibold text-black">Responsabilité</h2>
        <p>Les informations fournies sur ce site le sont à titre indicatif et ne sauraient constituer un conseil personnalisé. La responsabilité de SYLK Conseils ne saurait être engagée en cas d&apos;utilisation inappropriée des informations diffusées.</p>
      </section>
    </div>
  );
}
