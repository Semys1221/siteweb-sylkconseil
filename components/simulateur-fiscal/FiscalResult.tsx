"use client";

export default function FiscalResult({
  tmi, revenus, epargne,
}: {
  tmi: number;
  revenus: number;
  epargne: number;
}) {
  const economieAnnuelle = Math.round(epargne * 12 * (tmi / 100));

  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center">
      <p className="text-sm text-white/50 mb-2">Économie d'impôt estimée</p>
      <p className="text-4xl font-light text-green-400 font-mono">
        {economieAnnuelle.toLocaleString("fr-FR")} €
      </p>
      <p className="text-xs text-white/30 mt-2">par an, sur la base de votre capacité d'épargne</p>
    </div>
  );
}
