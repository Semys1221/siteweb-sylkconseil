import { PageHero } from "@/components/PageHero";

export default function LeCabinet() {
  return (
    <div className="bg-white">
      <PageHero
        title="Une expertise indépendante au service de votre patrimoine"
        subtitle="SYLK Conseils est un cabinet de conseil en gestion de patrimoine dédié aux dirigeants, cadres supérieurs et familles."
      />

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-8 text-neutral-700 leading-relaxed">
          <p>
            Fort de plus de 10 années d&apos;expérience dans le conseil patrimonial, Stéphane
            Lawnicki a fondé SYLK Conseils avec une vision claire : offrir un accompagnement
            sur-mesure, indépendant et exigeant.
          </p>
          <p>
            Le cabinet intervient sur l&apos;ensemble des dimensions du patrimoine : fiscalité,
            retraite, transmission, immobilier et financier. Chaque stratégie est conçue sur mesure,
            en fonction des objectifs et de la situation personnelle de chaque client.
          </p>
        </div>
      </section>
    </div>
  );
}
