import Link from "next/link"
import { siteConfig } from "@/lib/config"

const formations = [
  { 
    id: "permis-b", 
    tag: "Permis auto", 
    title: "Permis B", 
    badge: "À partir de 17 ans", 
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=700&q=80", 
    desc: "La formation complète au permis voiture, en boîte manuelle ou automatique.", 
    items: [
      "Accès illimité au code en ligne",
      "20h de conduite incluses",
      "Bilan de compétences avant l'examen",
      "Accompagnement le jour de l'examen",
      "Financement CPF possible"
    ], 
    prices: [
      { label: "Boîte manuelle", val: "à partir de 1 390 €" }, 
      { label: "Boîte automatique", val: "à partir de 1 190 €" }
    ] 
  },
  { 
    id: "moto", 
    tag: "Permis moto", 
    title: "Permis A1 & A2", 
    badge: "Dès 16 ans", 
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80", 
    desc: "Formation complète sur notre plateau homologué avec des motos récentes.", 
    items: [
      "Formation BSR / AM",
      "Permis A1 (moto jusqu'à 125 cm³)",
      "Permis A2 (moto bridée jusqu'à 35 kW)",
      "Passerelle A2 → A",
      "Plateau homologué sécurisé"
    ], 
    prices: [
      { label: "Formation BSR", val: "350 €" }, 
      { label: "Permis A2", val: "à partir de 1 290 €" }
    ], 
    reverse: true 
  },
  { 
    id: "aac", 
    tag: "Conduite accompagnée", 
    title: "AAC – Conduite accompagnée", 
    badge: "Dès 15 ans", 
    img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=700&q=80", 
    desc: "La meilleure façon de préparer son permis. Accumulez des kilomètres avant votre examen.", 
    items: [
      "Accessible dès 15 ans",
      "Minimum 3 000 km recommandé",
      "Examen possible dès 17 ans et demi",
      "Assurance jeune conducteur réduite",
      "Taux de réussite supérieur de 15 points"
    ], 
    prices: [
      { label: "Forfait AAC complet", val: "à partir de 1 290 €" }
    ] 
  },
]

export default function Formations() {
  return (
    <>
      {/* Header */}
      <section className="pt-[120px] pb-16 bg-navy">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange bg-orange/15 px-4 py-1.5 rounded-full mb-4">
            Nos formations
          </span>
          <h1 className="font-syne font-[800] text-white mb-4">
            Choisissez votre<br />
            <span className="text-orange italic">formation</span>
          </h1>
          <p className="text-white/65 font-light text-lg max-w-lg">
            Du code à l&apos;examen, nous proposons toutes les filières agréées.
          </p>
        </div>
      </section>

      {/* Formation sections */}
      {formations.map((f, i) => (
        <section 
          key={f.id} 
          id={f.id} 
          className={`py-20 ${i % 2 === 1 ? "bg-cream-2" : "bg-cream"}`}
        >
          <div className={`max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${f.reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative rounded-2xl overflow-hidden h-[400px]">
              <img 
                src={f.img} 
                alt={f.title} 
                className="w-full h-full object-cover" 
              />
              <span className="absolute top-5 left-5 bg-orange text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                {f.badge}
              </span>
            </div>
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange bg-orange/10 px-4 py-1.5 rounded-full mb-3">
                {f.tag}
              </span>
              <h2 className="font-syne font-bold text-text mb-4">{f.title}</h2>
              <p className="text-text-secondary mb-6">{f.desc}</p>
              <ul className="space-y-2.5 mb-6">
                {f.items.map(item => (
                  <li key={item} className="flex gap-3 text-sm text-text-secondary">
                    <span className="text-orange font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-cream-2 rounded-xl p-5 mb-6 space-y-2">
                {f.prices.map(p => (
                  <div key={p.label} className="flex justify-between text-sm">
                    <span className="text-text-secondary">{p.label}</span>
                    <span className="font-syne font-bold text-navy">{p.val}</span>
                  </div>
                ))}
              </div>
              <Link 
                href="/contact" 
                className="inline-block bg-orange hover:bg-orange-light text-white font-syne font-bold px-7 py-3.5 rounded-xl transition-all duration-[220ms] hover:-translate-y-0.5"
              >
                S&apos;inscrire
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-syne font-bold text-white mb-4">
            Une question sur nos formations ?
          </h2>
          <p className="text-white/65 mb-8">
            Le premier rendez-vous est gratuit et sans engagement.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              href="/contact" 
              className="bg-orange hover:bg-orange-light text-white font-syne font-bold px-8 py-4 rounded-xl transition-all duration-[220ms] hover:-translate-y-0.5"
            >
              Nous contacter
            </Link>
            <a 
              href={siteConfig.phoneHref} 
              className="border border-white/30 hover:border-white text-white px-8 py-4 rounded-xl transition-colors duration-[220ms]"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
