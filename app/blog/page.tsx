import { PageHero } from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    category: "Fiscalité",
    title: "Loi de finances 2026 : les mesures clés pour les dirigeants",
    excerpt: "Découvrez les principales dispositions fiscales de la loi de finances 2026 qui impactent les dirigeants d'entreprise.",
    date: "Janvier 2026",
  },
  {
    id: 2,
    category: "Retraite",
    title: "Préparer sa retraite de dirigeant : les pièges à éviter",
    excerpt: "Anticiper sa retraite quand on est dirigeant nécessite une stratégie spécifique. Les erreurs les plus courantes et comment les éviter.",
    date: "Décembre 2025",
  },
];

export default function Blog() {
  return (
    <div className="bg-white">
      <PageHero title="Blog" subtitle="Actualités et conseils en gestion de patrimoine" />

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="grid gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="border border-gray-100 rounded-2xl p-6 hover:shadow-sm transition-shadow">
              <div className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-2">
                {post.category}
              </div>
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-2">{post.title}</h2>
              <p className="text-sm text-neutral-500 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">{post.date}</span>
                <Link href="#" className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1">
                  Lire l'article <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
