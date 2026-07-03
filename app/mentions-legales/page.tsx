import { PageHero } from "@/components/PageHero";

export default function MentionsLegales() {
  return (
    <div className="bg-white">
      <PageHero title="Mentions Légales" />
      <section className="py-24 px-6 max-w-3xl mx-auto space-y-8 text-neutral-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-black">Éditeur du site</h2>
        <p>
          SYLK Conseils SAS au capital de 1000 Euros<br />
          RCS Lyon 879 235 521 — SIRET 879 235 521 00017 — NAF 6619B<br />
          ORIAS n°1900 8912
        </p>
        <h2 className="text-xl font-semibold text-black">Contact</h2>
        <p>Email : direction@sylkconseils.com</p>
      </section>
    </div>
  );
}
