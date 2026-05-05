"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/lib/config"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { href: "/formations", label: "Formations" },
    { href: "/financement", label: "Financement" },
    { href: "/avis", label: "Avis" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-navy shadow-lg" 
          : "bg-navy/95 backdrop-blur-md"
      } border-b border-white/5`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center font-syne font-[800] text-white text-sm">
            {siteConfig.shortName}
          </span>
          <span className="font-syne font-bold text-sm text-white leading-tight">
            {siteConfig.name.split(" ")[0]}<br/>
            <span className="text-orange-light">{siteConfig.name.split(" ")[1]}</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link 
              key={l.href} 
              href={l.href} 
              className={`text-sm font-medium transition-colors duration-[220ms] ${
                pathname === l.href 
                  ? "text-white" 
                  : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a 
            href={siteConfig.phoneHref} 
            className="bg-orange hover:bg-orange-light text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors duration-[220ms]"
          >
            {siteConfig.phone}
          </a>
        </nav>

        {/* Burger */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-1" 
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-navy border-t border-white/5 overflow-hidden transition-all duration-300 ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {links.map(l => (
            <Link 
              key={l.href} 
              href={l.href} 
              onClick={() => setOpen(false)} 
              className={`py-3 text-base border-b border-white/5 transition-colors ${
                pathname === l.href ? "text-white" : "text-white/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a 
            href={siteConfig.phoneHref} 
            className="text-orange font-semibold py-3 text-base"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </header>
  )
}
