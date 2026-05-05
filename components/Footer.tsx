import Link from "next/link"
import { siteConfig } from "@/lib/config"

export default function Footer() {
  return (
    <footer className="bg-footer pt-16 pb-0">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-14">
        {/* Logo & Tagline */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center font-syne font-[800] text-white text-sm">
              {siteConfig.shortName}
            </span>
            <span className="font-syne font-bold text-sm text-white leading-tight">
              {siteConfig.name.split(" ")[0]}<br/>
              <span className="text-orange-light">{siteConfig.name.split(" ")[1]}</span>
            </span>
          </Link>
          <p className="text-sm text-white/40 leading-relaxed">
            Auto-école agréée, certifiée Qualiopi.<br/>
            N° agrément : {siteConfig.agrement}
          </p>
        </div>

        {/* Formations links */}
        <div className="flex flex-col gap-2">
          <strong className="text-xs uppercase tracking-widest text-white/40 mb-1">Formations</strong>
          <Link href="/formations#permis-b" className="text-sm text-white/60 hover:text-white transition-colors duration-[220ms]">
            Permis B
          </Link>
          <Link href="/formations#moto" className="text-sm text-white/60 hover:text-white transition-colors duration-[220ms]">
            Permis moto
          </Link>
          <Link href="/formations#aac" className="text-sm text-white/60 hover:text-white transition-colors duration-[220ms]">
            Conduite accompagnée
          </Link>
          <Link href="/formations#code" className="text-sm text-white/60 hover:text-white transition-colors duration-[220ms]">
            Code en ligne
          </Link>
        </div>

        {/* Info links */}
        <div className="flex flex-col gap-2">
          <strong className="text-xs uppercase tracking-widest text-white/40 mb-1">Infos pratiques</strong>
          <Link href="/financement" className="text-sm text-white/60 hover:text-white transition-colors duration-[220ms]">
            Financement CPF
          </Link>
          <Link href="/avis" className="text-sm text-white/60 hover:text-white transition-colors duration-[220ms]">
            Avis élèves
          </Link>
          <Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors duration-[220ms]">
            Contact & accès
          </Link>
        </div>

        {/* Address block */}
        <div className="flex flex-col gap-2">
          <strong className="text-xs uppercase tracking-widest text-white/40 mb-1">Nous trouver</strong>
          <p className="text-sm text-white/60 leading-relaxed">
            {siteConfig.address}<br/>
            {siteConfig.zipCode} {siteConfig.city}
          </p>
          <a 
            href={siteConfig.phoneHref} 
            className="text-sm text-white/60 hover:text-white transition-colors duration-[220ms]"
          >
            {siteConfig.phone}
          </a>
          <a 
            href={`mailto:${siteConfig.email}`} 
            className="text-sm text-white/60 hover:text-white transition-colors duration-[220ms]"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>

      {/* Bottom border separator */}
      <div className="border-t border-white/5 px-6 py-5 text-center">
        <p className="text-xs text-white/20">
          © {new Date().getFullYear()} Auto-école {siteConfig.name} · Tous droits réservés
        </p>
      </div>
    </footer>
  )
}
