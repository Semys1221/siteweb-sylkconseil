"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { useFlowStore } from "./store";

const questions = [
  {
    key: "statut",
    label: "Quel est le statut de votre structure ?",
    options: [
      { value: "", label: "Sélectionnez une option" },
      { value: "solo", label: "Solo" },
      { value: "associe", label: "Associé en société" },
    ],
  },
  {
    key: "imposition",
    label: "Quelle est votre tranche d'imposition annuelle estimée ?",
    options: [
      { value: "", label: "Sélectionnez une option" },
      { value: "moins_10k", label: "< 10k€" },
      { value: "10k_30k", label: "10k€ – 30k€" },
      { value: "plus_30k", label: "+ 30k€" },
    ],
  },
  {
    key: "leviers",
    label: "Avez-vous déjà mis en place des leviers d'optimisation ?",
    options: [
      { value: "", label: "Sélectionnez une option" },
      { value: "oui", label: "Oui" },
      { value: "non", label: "Non" },
    ],
  },
];

export function QualificationForm() {
  const answers = useFlowStore((s) => s.answers);
  const answerQuestion = useFlowStore((s) => s.answerQuestion);
  const advance = useFlowStore((s) => s.advance);
  const [current, setCurrent] = useState(0);
  const q = questions[current];

  const progress = ((current + 1) / questions.length) * 100;
  const isLast = current === questions.length - 1;
  const canContinue = answers[q.key] && answers[q.key] !== "";

  const handleNext = () => {
    if (isLast) {
      advance();
    } else {
      setCurrent((c) => c + 1);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Progress */}
      <div className="w-full h-1 bg-white/10 rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.25 }}
        >
          <p className="text-xs text-white/40 mb-2 tracking-widest uppercase">
            Question {current + 1}/{questions.length}
          </p>
          <h3 className="text-lg text-white/90 mb-6">{q.label}</h3>

          <div className="space-y-2">
            {q.options.map((opt) => {
              const selected = answers[q.key] === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => answerQuestion(q.key, opt.value)}
                  className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                    selected
                      ? "border-blue-500 bg-blue-500/10 text-blue-300"
                      : "border-white/10 text-white/60 hover:border-white/20 hover:text-white/80"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => current > 0 && setCurrent((c) => c - 1)}
          disabled={current === 0}
          className="flex items-center gap-1 text-xs text-white/40 hover:text-white/60 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowLeft size={14} /> Précédent
        </button>
        <button
          onClick={handleNext}
          disabled={!canContinue}
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 disabled:bg-white/10 disabled:text-white/30 text-white text-sm font-medium transition-all disabled:cursor-not-allowed"
        >
          {isLast ? (
            <>
              Terminer <CheckCircle2 size={16} />
            </>
          ) : (
            <>
              Suivant <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
