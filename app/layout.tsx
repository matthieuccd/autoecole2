import type { Metadata } from "next"
import "./globals.css"
import { siteConfig } from "@/lib/config"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import WhatsAppWidget from "@/components/WhatsAppWidget"

export const metadata: Metadata = {
  title: `Auto-école ${siteConfig.name} – Permis auto & moto | ${siteConfig.city} ${siteConfig.arrondissement}`,
  description: siteConfig.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  )
}
