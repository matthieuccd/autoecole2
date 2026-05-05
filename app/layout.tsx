import type { Metadata } from "next"
import { Syne, DM_Sans } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/lib/config"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import WhatsAppWidget from "@/components/WhatsAppWidget"

const syne = Syne({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
})

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: `Auto-école ${siteConfig.name} – Permis auto & moto | ${siteConfig.city} ${siteConfig.arrondissement}`,
  description: siteConfig.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${syne.variable} ${dmSans.variable} bg-cream`}>
      <body className="bg-cream">
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  )
}
