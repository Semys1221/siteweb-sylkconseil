import { PageHero } from "@/components/PageHero";

export default function Retraite() {
  return (
    <div className="bg-white">
      <PageHero title="Retraite" subtitle="Préparez et optimisez votre retraite en toute sérénité." />
      <section className="py-16 px-6 max-w-3xl mx-auto text-neutral-700 leading-relaxed space-y-6">
        <p>La préparation de la retraite est un enjeu majeur pour les dirigeants et cadres supérieurs. Nous vous accompagnons dans le choix des solutions d&apos;épargne et de placement les mieux adaptées à vos objectifs.</p>
        <p>PER, contrat Madelin, immobilier locatif, ou encore stratégie de désendettement : nous construisons avec vous un plan de retraite personnalisé.</p>
      </section>
    </div>
  );
}
