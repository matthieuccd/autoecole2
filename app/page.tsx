import Link from "next/link"
import { siteConfig } from "@/lib/config"

export default function Home() {
  const reviews = [
    { initials: "SC", name: "Sarah C.", context: "Permis B – Juillet 2024", text: "J'ai eu mon permis du premier coup après seulement 3 mois. Les moniteurs sont patients et vraiment pédagogues. Je recommande à 100% !" },
    { initials: "MK", name: "Mehdi K.", context: "Permis B CPF – Octobre 2024", text: "Grâce au CPF j'ai pu financer ma formation sans débourser un centime. L'équipe m'a accompagné dans toutes les démarches.", featured: true },
    { initials: "LC", name: "Léa C.", context: "AAC – Mars 2025", text: "Super ambiance, moniteurs au top. Permis obtenu à 17 ans et demi avec la conduite accompagnée !" },
  ]

  const whyUs = [
    { num: "01", title: "Taux de réussite exceptionnel", desc: "92% de nos élèves obtiennent leur permis du premier coup, bien au-dessus de la moyenne nationale de 58%." },
    { num: "02", title: "Moniteurs diplômés", desc: "Une équipe de 5 moniteurs titulaires du BEPECASER, formés aux dernières méthodes pédagogiques." },
    { num: "03", title: "Financement facilité", desc: "Acceptation du CPF, paiement en 4x sans frais, et aide au montage des dossiers de financement." },
    { num: "04", title: "Flexibilité totale", desc: "Réservez vos créneaux en ligne 24h/24. Leçons disponibles du lundi au samedi, de 8h à 20h." },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start pt-[140px] pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={siteConfig.heroImage} 
            alt="Voiture d'auto-école" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/75 to-navy/40" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/70 border border-white/20 px-4 py-2 rounded-full mb-7">
              Auto-école à {siteConfig.city} {siteConfig.arrondissement} depuis {siteConfig.foundedYear}
            </span>
            <h1 className="font-syne font-[800] text-white mb-5">
              Passez votre permis<br />
              <span className="text-orange italic">avec confiance</span>
            </h1>
            <p className="text-white/80 text-lg font-light max-w-lg mb-9 leading-relaxed">
              {siteConfig.name} vous accompagne du code à la route. Formation personnalisée, moniteurs diplômés, taux de réussite supérieur à la moyenne nationale.
            </p>
            <div className="flex gap-4 flex-wrap mb-14">
              <Link 
                href="/contact" 
                className="bg-orange hover:bg-orange-light text-white font-syne font-bold px-7 py-4 rounded-xl transition-all duration-[220ms] ease-out hover:-translate-y-0.5"
              >
                Réserver ma place
              </Link>
              <Link 
                href="/formations" 
                className="text-white font-medium py-4 border-b border-white/40 hover:border-white transition-colors duration-[220ms]"
              >
                Nos formations →
              </Link>
            </div>
            <div className="flex items-center gap-6">
              {siteConfig.stats.map((s, i) => (
                <div key={i} className="flex items-center gap-6">
                  {i > 0 && <div className="w-px h-10 bg-white/15" />}
                  <div>
                    <div className="font-syne font-[800] text-white text-2xl leading-none">{s.value}</div>
                    <div className="text-white/55 text-xs mt-1">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section className="py-24 bg-cream-2">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange bg-orange/10 px-4 py-1.5 rounded-full mb-4">
              Nos formations
            </span>
            <h2 className="font-syne font-bold text-text">
              Tout ce qu&apos;il vous faut<br />pour conduire librement
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🚗", title: "Permis B", desc: "Boîte manuelle ou automatique. Formule classique ou accélérée.", href: "/formations#permis-b", accent: true },
              { icon: "🏍️", title: "Permis moto", desc: "A1, A2, passerelle. Formation sur plateau homologué.", href: "/formations#moto" },
              { icon: "👨‍👧", title: "Conduite accompagnée", desc: "Dès 15 ans. Accumulez de l'expérience avant l'examen.", href: "/formations#aac" },
              { icon: "📱", title: "Code en ligne", desc: "Accès illimité à notre plateforme. 24h/24, sur tous appareils.", href: "/formations#code" },
            ].map((c, i) => (
              <Link 
                key={c.title} 
                href={c.href} 
                className={`rounded-2xl p-8 flex flex-col gap-3 border transition-all duration-[220ms] ease-out hover:-translate-y-1 hover:shadow-xl ${
                  c.accent 
                    ? "bg-navy text-white border-navy" 
                    : "bg-white border-stone-200"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="text-3xl">{c.icon}</span>
                <h3 className={`font-syne font-bold text-lg ${c.accent ? "text-white" : "text-navy"}`}>
                  {c.title}
                </h3>
                <p className={`text-sm flex-1 leading-relaxed ${c.accent ? "text-white/70" : "text-text-secondary"}`}>
                  {c.desc}
                </p>
                <span className={`text-sm font-semibold ${c.accent ? "text-orange-light" : "text-orange"}`}>
                  En savoir plus →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange bg-orange/10 px-4 py-1.5 rounded-full mb-4">
              Pourquoi nous choisir
            </span>
            <h2 className="font-syne font-bold text-text">
              Une auto-école qui fait<br />la différence
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) => (
              <div key={item.num} className="relative pl-6 border-l-4 border-orange">
                <span className="block font-syne font-[800] text-5xl text-stone-200 leading-none mb-4">
                  {item.num}
                </span>
                <h3 className="font-syne font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CPF Banner Section */}
      <section className="py-24 bg-navy-2">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange bg-orange/15 px-4 py-1.5 rounded-full mb-5">
              Financement
            </span>
            <h2 className="font-syne font-bold text-white mb-5">
              Votre permis financé<br />par le CPF
            </h2>
            <p className="text-white/65 font-light text-lg leading-relaxed mb-8">
              Utilisez votre Compte Personnel de Formation pour financer tout ou partie de votre permis. Nos conseillers vous guident gratuitement.
            </p>
            <Link 
              href="/financement" 
              className="bg-orange hover:bg-orange-light text-white font-syne font-bold px-7 py-4 rounded-xl transition-all duration-[220ms] ease-out hover:-translate-y-0.5 inline-block"
            >
              Vérifier mes droits CPF
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-9 shadow-2xl shadow-black/30">
            <p className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-2">Mon CPF</p>
            <p className="font-syne font-[800] text-navy text-5xl mb-1">1 800 €</p>
            <p className="text-text-secondary text-sm mb-5">disponibles sur votre compte</p>
            <div className="h-2 bg-stone-100 rounded-full mb-4">
              <div className="h-full w-[72%] bg-orange rounded-full" />
            </div>
            <p className="text-orange font-semibold text-sm">→ Utilisables pour votre permis</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-cream-2">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange bg-orange/10 px-4 py-1.5 rounded-full mb-4">
              Ils nous font confiance
            </span>
            <h2 className="font-syne font-bold text-text">
              Ce que disent<br />nos élèves
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {reviews.map((r, i) => (
              <div 
                key={r.name} 
                className={`rounded-2xl p-8 flex flex-col gap-4 border transition-all duration-[220ms] ease-out hover:-translate-y-1 hover:shadow-lg ${
                  r.featured 
                    ? "bg-navy border-navy" 
                    : "bg-white border-stone-200"
                }`}
              >
                <div className="text-orange text-base tracking-widest">★★★★★</div>
                <p className={`text-sm italic leading-relaxed flex-1 ${r.featured ? "text-white/85" : "text-text-secondary"}`}>
                  &quot;{r.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-syne font-bold text-xs ${
                    r.featured 
                      ? "bg-white/15 text-white" 
                      : "bg-stone-100 text-navy"
                  }`}>
                    {r.initials}
                  </div>
                  <div>
                    <div className={`font-semibold text-sm ${r.featured ? "text-white" : "text-navy"}`}>
                      {r.name}
                    </div>
                    <div className={`text-xs ${r.featured ? "text-white/50" : "text-stone-400"}`}>
                      {r.context}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link 
              href="/avis" 
              className="inline-flex border-2 border-navy text-navy hover:bg-navy hover:text-white font-syne font-bold px-7 py-3.5 rounded-xl transition-all duration-[220ms]"
            >
              Voir tous les avis →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-syne font-bold text-white mb-4">
            Prêt à démarrer<br />votre formation ?
          </h2>
          <p className="text-white/65 font-light text-lg max-w-md mx-auto mb-10">
            Premier rendez-vous gratuit. Nous étudions votre situation et vous proposons la formule la plus adaptée.
          </p>
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            <Link 
              href="/contact" 
              className="bg-orange hover:bg-orange-light text-white font-syne font-bold px-8 py-4 rounded-xl transition-all duration-[220ms] ease-out hover:-translate-y-0.5 text-base"
            >
              Prendre rendez-vous
            </Link>
            <a 
              href={siteConfig.phoneHref} 
              className="border border-white/30 hover:border-white text-white font-medium px-8 py-4 rounded-xl transition-colors duration-[220ms]"
            >
              {siteConfig.phone}
            </a>
          </div>
          <div className="flex justify-center gap-8 text-sm text-white/40 flex-wrap">
            <span>📍 {siteConfig.address}, {siteConfig.city} {siteConfig.arrondissement}</span>
            <span>🕐 Lun–Sam : 9h–19h</span>
          </div>
        </div>
      </section>
    </>
  )
}
