"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "Stéphane a une approche méthodique et une expertise d'une clarté rare qui permettent enfin de piloter sa fiscalité en toute confiance.",
    author: "Pierre L.",
    title: "Dirigeant, Paris",
    initial: "P",
  },
  {
    quote:
      "Moi qui redoutais le côté rébarbatif de la gestion de patrimoine, j'ai découvert une démarche fluide, percutante et absolument captivante.",
    author: "Sophie M.",
    title: "Chef d'entreprise, Lyon",
    initial: "S",
  },
  {
    quote:
      "C'est structuré, c'est méthodique et surtout on comprend tout : on sent tout de suite le pro qui maîtrise son sujet à 100 %",
    author: "Marc R.",
    title: "Médecin, Bordeaux",
    initial: "M",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-sm font-semibold tracking-widest text-slate-400 uppercase mb-6">
          <span className="text-lg leading-none">◇</span> TÉMOIGNAGES
        </div>

        <h2 className="text-4xl lg:text-5xl font-light text-[#1A1A1A] tracking-tight leading-[1.1] mb-16">
          Ils nous font confiance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white p-6 lg:p-8 rounded-[24px] border border-gray-100 shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold mb-4">
                {t.initial}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <div className="text-sm font-semibold text-slate-900">{t.author}</div>
                <div className="text-xs text-slate-400">{t.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
