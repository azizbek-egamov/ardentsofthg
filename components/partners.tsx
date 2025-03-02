"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useApp } from "@/lib/context/AppContext"

export default function Partners() {
  const { t } = useApp()

  const partners = [
    {
      name: "Kompaniya A",
      logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      description: "Biz bilan birgalikda muvaffaqiyatli loyihalar amalga oshirilgan.",
    },
    {
      name: "Kompaniya B",
      logo: "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Innovatsion yechimlar yaratishda hamkorlik qilgan.",
    },
    {
      name: "Kompaniya C",
      logo: "https://images.unsplash.com/photo-1637592156979-95f44c286423?q=80&w=1513&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Bizning xizmatlarimizdan foydalanib, o'z bizneslarini rivojlantirgan.",
    },
  ]

  return (
    <section id="partners" className="section-container bg-muted/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">{t("partners.title")}</h2>
        <p className="section-subtitle">{t("partners.description")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6 flex flex-col items-center justify-center">
                  <div className="mb-6 p-4 rounded-lg overflow-hidden">
                    <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="h-20 object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                  <p className="text-center text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

