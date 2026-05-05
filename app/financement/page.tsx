import Link from "next/link"
import { siteConfig } from "@/lib/config"

const steps = [
  { 
    n: "1", 
    title: "Vérifiez vos droits", 
    desc: "Rendez-vous sur moncompteformation.gouv.fr et connectez-vous avec FranceConnect. Vous verrez le montant disponible sur votre compte CPF." 
  },
  { 
    n: "2", 
    title: "Choisissez votre formation", 
    desc: "Sélectionnez notre offre directement dans l'application Mon Compte Formation. Notre centre est certifié Qualiopi." 
  },
  { 
    n: "3", 
    title: "Validez votre inscription", 
    desc: "Un délai de 11 jours ouvrés s'applique entre la demande et le début de la formation. Nous planifions tout avec vous." 
  },
  { 
    n: "4", 
    title: "Commencez à conduire", 
    desc: "Le CPF règle directement l'auto-école. Vous n'avancez aucun frais — ou seulement le complément si nécessaire." 
  },
]

const faqs = [
  { 
    q: "Mon CPF a-t-il assez pour couvrir tout le permis ?", 
    a: "Cela dépend de votre solde et du forfait choisi. En moyenne, un salarié dispose de 500 € à 1 500 €. Si le montant ne couvre pas la totalité, vous réglez simplement la différence." 
  },
  { 
    q: "Je suis étudiant, puis-je utiliser le CPF ?", 
    a: "Non, le CPF est réservé aux actifs. Les étudiants peuvent bénéficier d'autres aides : aide régionale, prêt permis à 1 € par jour, ou paiement en plusieurs fois sans frais." 
  },
  { 
    q: "Combien de temps dure la procédure CPF ?", 
    a: "Une fois votre dossier validé, un délai légal de 11 jours ouvrés s'écoule avant le début de la formation." 
  },
  { 
    q: "Vitesse Liberté est-elle certifiée Qualiopi ?", 
    a: "Oui. Notre certification Qualiopi est obligatoire pour accepter les financements CPF et atteste de la qualité de nos processus pédagogiques." 
  },
]

export default function Financement() {
  return (
    <>
      {/* Header */}
      <section className="pt-[120px] pb-16 bg-navy">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange bg-orange/15 px-4 py-1.5 rounded-full mb-4">
            Financement
          </span>
          <h1 className="font-syne font-[800] text-white mb-4">
            Votre permis,<br />
            <span className="text-orange italic">financé par le CPF</span>
          </h1>
          <p className="text-white/65 font-light text-lg max-w-lg">
            Depuis 2020, le permis B est éligible au Compte Personnel de Formation. Nous vous accompagnons gratuitement.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 divide-y divide-stone-200">
          {steps.map(s => (
            <div key={s.n} className="flex gap-8 py-10">
              <div className="font-syne font-[800] text-orange text-5xl leading-none min-w-[56px]">
                {s.n}
              </div>
              <div>
                <h3 className="font-syne font-bold text-text mb-2">{s.title}</h3>
                <p className="text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-20 bg-cream-2">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              color: "border-green-500", 
              icon: "✅", 
              title: "Ce qui est éligible", 
              items: [
                "Permis B boîte manuelle",
                "Permis B boîte automatique",
                "Conduite accompagnée (AAC)",
                "Code de la route (inclus)"
              ] 
            },
            { 
              color: "border-orange", 
              icon: "⚠️", 
              title: "Conditions à respecter", 
              items: [
                "Être salarié ou demandeur d'emploi",
                "Pas de permis B dans les 5 dernières années",
                "Formation certifiante (Qualiopi ✓)",
                "Respecter le délai de 11 jours"
              ] 
            },
            { 
              color: "border-blue-500", 
              icon: "💡", 
              title: "Bon à savoir", 
              items: [
                "Montant moyen : 500 à 2 000 €",
                "Peut couvrir 100% dans certains cas",
                "Complément par virement bancaire possible",
                "Nos conseillers vous guident gratuitement"
              ] 
            },
          ].map(c => (
            <div key={c.title} className={`bg-white rounded-2xl p-8 border-t-4 ${c.color}`}>
              <h3 className="font-syne font-bold text-text mb-4">{c.icon} {c.title}</h3>
              <ul className="space-y-2.5">
                {c.items.map(i => (
                  <li key={i} className="text-sm text-text-secondary leading-relaxed">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-2xl mx-auto px-6">
          <div className="mb-10 text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange bg-orange/10 px-4 py-1.5 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="font-syne font-bold text-text">Questions fréquentes sur le CPF</h2>
          </div>
          <div className="divide-y divide-stone-200">
            {faqs.map(f => (
              <details key={f.q} className="group py-5 cursor-pointer">
                <summary className="font-syne font-semibold text-text flex justify-between items-center gap-4 list-none">
                  {f.q}
                  <span className="text-orange text-xl font-light flex-shrink-0 group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="text-text-secondary text-sm leading-relaxed mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-syne font-bold text-white mb-4">
            Besoin d&apos;aide pour votre dossier CPF ?
          </h2>
          <p className="text-white/65 mb-8">
            Nos conseillers vérifient votre éligibilité en 10 minutes.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              href="/contact" 
              className="bg-orange hover:bg-orange-light text-white font-syne font-bold px-8 py-4 rounded-xl transition-all duration-[220ms] hover:-translate-y-0.5"
            >
              Être rappelé gratuitement
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
