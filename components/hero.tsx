"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useApp } from "@/lib/context/AppContext"

export default function Hero() {
  const { t } = useApp()

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90"></div>
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10 dark:opacity-5"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("hero.title")}</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">{t("hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={scrollToContact}>
              {t("hero.cta.contact")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("hero.cta.learnMore")}
            </Button>
          </div>

          {/* Hero image */}
          <motion.div
            className="mt-12 relative max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="/dsdfghergiejx.jpg"
                alt="ArdentSoft Dashboard"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

