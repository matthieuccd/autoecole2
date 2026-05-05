"use client"
import { useState } from "react"
import { siteConfig } from "@/lib/config"

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <>
      {/* Header */}
      <section className="pt-[120px] pb-16 bg-navy">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange bg-orange/15 px-4 py-1.5 rounded-full mb-4">
            Contact
          </span>
          <h1 className="font-syne font-[800] text-white mb-4">
            Venez nous<br />
            <span className="text-orange italic">rencontrer</span>
          </h1>
          <p className="text-white/65 font-light text-lg max-w-lg">
            Premier rendez-vous gratuit et sans engagement. Ouvert du lundi au samedi.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-16 items-start">
          {/* Form */}
          <div className="md:col-span-3">
            <h2 className="font-syne font-bold text-text mb-8">Envoyer un message</h2>
            {sent ? (
              <div className="text-center py-16 bg-cream-2 rounded-2xl">
                <div className="text-5xl text-green-500 mb-4">✓</div>
                <h3 className="font-syne font-bold text-text mb-2">Message envoyé !</h3>
                <p className="text-text-secondary">Nous vous répondrons dans les 24 heures ouvrées.</p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={e => { e.preventDefault(); setSent(true) }}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-text">Prénom *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Marie" 
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm bg-white text-text focus:outline-none focus:border-navy transition-colors duration-[220ms]" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-text">Nom *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Dupont" 
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm bg-white text-text focus:outline-none focus:border-navy transition-colors duration-[220ms]" 
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-text">Email *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="marie@exemple.fr" 
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm bg-white text-text focus:outline-none focus:border-navy transition-colors duration-[220ms]" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-text">Téléphone</label>
                  <input 
                    type="tel" 
                    placeholder="06 12 34 56 78" 
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm bg-white text-text focus:outline-none focus:border-navy transition-colors duration-[220ms]" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-text">Formation souhaitée</label>
                  <select className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm bg-white text-text focus:outline-none focus:border-navy transition-colors duration-[220ms]">
                    <option value="">Choisir une formation</option>
                    <option>Permis B – boîte manuelle</option>
                    <option>Permis B – boîte automatique</option>
                    <option>Conduite accompagnée (AAC)</option>
                    <option>Permis moto A1 / A2</option>
                    <option>Je ne sais pas encore</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-text">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Votre question..." 
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm bg-white text-text focus:outline-none focus:border-navy transition-colors duration-[220ms] resize-none" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-orange hover:bg-orange-light text-white font-syne font-bold py-4 rounded-xl transition-all duration-[220ms] hover:-translate-y-0.5"
                >
                  Envoyer ma demande
                </button>
                <p className="text-xs text-text-secondary text-center">
                  Nous vous répondons dans les 24h ouvrées.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-5">
            {/* Address Card */}
            <div className="bg-cream-2 rounded-2xl p-7">
              <h3 className="font-syne font-bold text-text mb-5">Nous trouver</h3>
              <div className="space-y-4">
                {[
                  { icon: "📍", label: "Adresse", val: `${siteConfig.address}\n${siteConfig.zipCode} ${siteConfig.city}` },
                  { icon: "📞", label: "Téléphone", val: siteConfig.phone, href: siteConfig.phoneHref },
                  { icon: "✉️", label: "Email", val: siteConfig.email, href: `mailto:${siteConfig.email}` },
                ].map(r => (
                  <div key={r.label} className="flex gap-4">
                    <span className="text-xl">{r.icon}</span>
                    <div>
                      <div className="text-xs font-semibold text-text-secondary mb-0.5">{r.label}</div>
                      {r.href ? (
                        <a href={r.href} className="text-sm text-text hover:text-navy transition-colors duration-[220ms]">
                          {r.val}
                        </a>
                      ) : (
                        <p className="text-sm text-text whitespace-pre-line">{r.val}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-cream-2 rounded-2xl p-7">
              <h3 className="font-syne font-bold text-text mb-4">Horaires</h3>
              <div className="space-y-2">
                {siteConfig.hours.map(h => (
                  <div 
                    key={h.day} 
                    className={`flex justify-between text-sm py-1.5 border-b border-stone-200 last:border-0 ${
                      h.closed ? "text-text-secondary" : "text-text"
                    }`}
                  >
                    <span>{h.day}</span>
                    <span className={h.closed ? "" : "font-medium"}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-[200px]">
              <iframe 
                src={siteConfig.mapEmbedSrc} 
                width="100%" 
                height="200" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Carte Google Maps"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
