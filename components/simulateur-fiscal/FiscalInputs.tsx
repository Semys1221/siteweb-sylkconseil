"use client";

export default function FiscalInputs({
  tmi, revenus, epargne, onChange,
}: {
  tmi: number;
  revenus: number;
  epargne: number;
  onChange: (field: "tmi" | "revenus" | "epargne", value: number) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm text-white/70 mb-2">Tranche marginale d'imposition (%)</label>
        <input
          type="range"
          min={0}
          max={45}
          step={5}
          value={tmi}
          onChange={(e) => onChange("tmi", Number(e.target.value))}
          className="w-full"
        />
        <span className="text-sm text-blue-300 font-mono">{tmi}%</span>
      </div>
      <div>
        <label className="block text-sm text-white/70 mb-2">Revenus annuels (€)</label>
        <input
          type="range"
          min={30000}
          max={500000}
          step={5000}
          value={revenus}
          onChange={(e) => onChange("revenus", Number(e.target.value))}
          className="w-full"
        />
        <span className="text-sm text-blue-300 font-mono">{revenus.toLocaleString("fr-FR")} €</span>
      </div>
      <div>
        <label className="block text-sm text-white/70 mb-2">Capacité d'épargne mensuelle (€)</label>
        <input
          type="range"
          min={500}
          max={10000}
          step={500}
          value={epargne}
          onChange={(e) => onChange("epargne", Number(e.target.value))}
          className="w-full"
        />
        <span className="text-sm text-blue-300 font-mono">{epargne.toLocaleString("fr-FR")} €</span>
      </div>
    </div>
  );
}
