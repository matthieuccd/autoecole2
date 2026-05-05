import Link from "next/link"
import { siteConfig } from "@/lib/config"

const reviews = [
  { i: "SC", name: "Sarah C.", ctx: "Permis B – Juillet 2024", stars: 5, text: "J'ai eu mon permis du premier coup après seulement 3 mois. Les moniteurs sont patients et vraiment pédagogues. Je recommande à 100% !" },
  { i: "MK", name: "Mehdi K.", ctx: "Permis B CPF – Octobre 2024", stars: 5, text: "Grâce au CPF j'ai pu financer ma formation sans débourser un centime. L'équipe m'a accompagné dans toutes les démarches.", featured: true },
  { i: "LC", name: "Léa C.", ctx: "AAC – Mars 2025", stars: 5, text: "Super ambiance, moniteurs au top. Permis obtenu à 17 ans et demi avec la conduite accompagnée !" },
  { i: "AR", name: "Antoine R.", ctx: "Permis B – Janvier 2025", stars: 5, text: "Excellent suivi. Mon moniteur Thomas a su adapter sa pédagogie à mon niveau. La différence avec ma précédente auto-école est flagrante." },
  { i: "JD", name: "Julien D.", ctx: "Permis A2 – Novembre 2024", stars: 5, text: "J'ai pris le permis moto A2 après mon permis voiture. Même qualité de formation, même bonne ambiance." },
  { i: "NB", name: "Nadia B.", ctx: "Code + Permis B – Juin 2024", stars: 5, text: "Très bonne auto-école. J'ai eu mon code du premier coup avec 43/40 grâce aux entraînements en ligne." },
  { i: "FT", name: "Fatima T.", ctx: "Permis B CPF – Août 2024", stars: 5, text: "Accueil chaleureux dès le premier rendez-vous. La secrétaire a tout expliqué clairement sur le CPF. Très professionnel !" },
  { i: "RM", name: "Romain M.", ctx: "Permis B – Avril 2025", stars: 4, text: "Très bonne formation globalement. Parfois un peu d'attente pour les créneaux en haute saison, mais la qualité compense largement." },
  { i: "PL", name: "Patricia L.", ctx: "AAC (parent) – Février 2025", stars: 5, text: "Mon fils a eu son permis à 17 ans et demi. Moniteurs sérieux, véhicules propres et récents. Nous recommandons vivement." },
]

export default function Avis() {
  return (
    <>
      <section className="pt-[120px] pb-16 bg-navy">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange bg-orange/15 px-4 py-1.5 rounded-full mb-4">Avis élèves</span>
          <h1 className="font-syne font-black text-white mb-4">Ils ont eu leur permis<br /><span className="text-orange italic">avec nous</span></h1>
          <p className="text-white/65 font-light text-lg max-w-lg">Plus de 200 avis vérifiés. Note moyenne 4.9/5.</p>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center gap-12 bg-white rounded-2xl p-10 border border-stone-100">
            <div className="text-center">
              <div className="font-syne font-black text-navy text-7xl leading-none">4.9</div>
              <div className="text-orange text-xl tracking-widest my-2">★★★★★</div>
              <div className="text-sm text-stone-400">Basé sur 214 avis</div>
            </div>
            <div className="flex-1 w-full space-y-2.5">
              {[["5 ★","89%"],["4 ★","8%"],["3 ★","2%"],["2 ★","1%"],["1 ★","0%"]].map(([label, pct]) => (
                <div key={label} className="flex items-center gap-3 text-sm text-stone-500">
                  <span className="w-8">{label}</span>
                  <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden"><div className="h-full bg-orange rounded-full" style={{ width: pct }} /></div>
                  <span className="w-8 text-right">{pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map(r => (
            <div key={r.name} className={`rounded-2xl p-8 flex flex-col gap-4 border ${r.featured ? "bg-navy border-navy" : "bg-white border-stone-200"}`}>
              <div className="text-orange tracking-widest">{"★".repeat(r.stars)}{"☆".repeat(5-r.stars)}</div>
              <p className={`text-sm italic leading-relaxed flex-1 ${r.featured ? "text-white/85" : "text-stone-500"}`}>"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-syne font-bold text-xs flex-shrink-0 ${r.featured ? "bg-white/15 text-white" : "bg-stone-100 text-navy"}`}>{r.i}</div>
                <div>
                  <div className={`font-semibold text-sm ${r.featured ? "text-white" : "text-navy"}`}>{r.name}</div>
                  <div className={`text-xs ${r.featured ? "text-white/50" : "text-stone-400"}`}>{r.ctx}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-syne font-bold text-white mb-4">Rejoignez nos élèves satisfaits</h2>
          <p className="text-white/65 mb-8">Premier rendez-vous gratuit et sans engagement.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-orange hover:bg-orange-light text-white font-syne font-bold px-8 py-4 rounded-xl transition-colors">Prendre rendez-vous</Link>
            <a href={siteConfig.phoneHref} className="border border-white/30 hover:border-white text-white px-8 py-4 rounded-xl transition-colors">{siteConfig.phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
