// ============================================
// MASTER CONFIG — change only this file per client
// ============================================

export const siteConfig = {
  // Identity
  name: "Vitesse Liberté",
  shortName: "VL",
  tagline: "La réussite au permis, TOP CHRONO",
  description: "Auto-école Vitesse Liberté vous forme au permis de conduire à Lyon 3ème. Permis auto, moto, conduite accompagnée. Financement CPF disponible.",

  // Location
  address: "14 rue de la République",
  city: "Lyon",
  arrondissement: "3ème",
  zipCode: "69003",
  region: "Rhône-Alpes",

  // Contact
  phone: "04 78 12 34 56",
  phoneHref: "tel:0478123456",
  whatsapp: "33478123456",
  whatsappMessage: "Bonjour, je souhaite avoir des informations sur vos formations au permis de conduire.",
  email: "contact@vitesse-liberte.fr",

  // Hours
  hours: [
    { day: "Lundi",    time: "9h – 19h", closed: false },
    { day: "Mardi",    time: "9h – 19h", closed: false },
    { day: "Mercredi", time: "9h – 19h", closed: false },
    { day: "Jeudi",    time: "9h – 19h", closed: false },
    { day: "Vendredi", time: "9h – 19h", closed: false },
    { day: "Samedi",   time: "9h – 17h", closed: false },
    { day: "Dimanche", time: "Fermé",    closed: true  },
  ],

  // Brand
  accentColor: "#f05a28",
  foundedYear: "2012",
  agrement: "EA069-0042",

  // Stats
  stats: [
    { value: "92%",  label: "Taux de réussite" },
    { value: "+800", label: "Élèves formés" },
    { value: "12 ans", label: "d'expérience" },
  ],

  // Services offered (toggle true/false)
  services: {
    permisB:      true,
    permisAuto:   true,
    moto:         true,
    aac:          true,
    code:         true,
    cpf:          true,
    postPermis:   false,
    passerelleBEA: false,
  },

  // Google Maps embed src
  mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.5!2d4.8357!3d45.7578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea5e4b8a4b1d%3A0x0!2sRue+de+la+R%C3%A9publique%2C+Lyon!5e0!3m2!1sfr!2sfr!4v1",

  // Hero image (Unsplash URL or local /public path)
  heroImage: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1400&q=80",
}

export type SiteConfig = typeof siteConfig
