import { PageHero } from "@/components/PageHero";

export default function Transmission() {
  return (
    <div className="bg-white">
      <PageHero title="Transmission" subtitle="Anticipez et organisez la transmission de votre patrimoine." />
      <section className="py-16 px-6 max-w-3xl mx-auto text-neutral-700 leading-relaxed space-y-6">
        <p>La transmission de votre patrimoine est un moment clé qui nécessite une préparation minutieuse. Nous vous aidons à structurer votre succession dans le respect de vos volontés et avec une optimisation fiscale adaptée.</p>
        <p>Donation, pacte Dutreil, assurance-vie, démembrement : chaque outil est étudié en fonction de votre situation familiale et patrimoniale.</p>
      </section>
    </div>
  );
}
