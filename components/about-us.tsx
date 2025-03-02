"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Lightbulb, Clock } from "lucide-react"
import { useApp } from "@/lib/context/AppContext"

export default function AboutUs() {
  const { t } = useApp()

  const benefits = [
    {
      title: t("about.benefits.team"),
      description: t("about.benefits.team.desc"),
      icon: <Users className="h-6 w-6 text-primary flex-shrink-0" />,
    },
    {
      title: t("about.benefits.solutions"),
      description: t("about.benefits.solutions.desc"),
      icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
    },
    {
      title: t("about.benefits.support"),
      description: t("about.benefits.support.desc"),
      icon: <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />,
    },
    {
      title: t("about.benefits.ontime"),
      description: t("about.benefits.ontime.desc"),
      icon: <Clock className="h-6 w-6 text-primary flex-shrink-0" />,
    },
  ]

  return (
    <section id="about" className="section-container relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">{t("about.title")}</h2>
        <p className="section-subtitle">{t("about.description")}</p>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">{t("about.benefits.title")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-md transition-shadow border-l-4 border-l-primary">
                  <CardContent className="p-6 flex items-start gap-4">
                    {benefit.icon}
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Company stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary/10 rounded-lg p-6 text-center"
          >
            <p className="text-4xl font-bold text-primary mb-2">5+</p>
            <p className="text-sm">{t("about.stats.experience")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-primary/10 rounded-lg p-6 text-center"
          >
            <p className="text-4xl font-bold text-primary mb-2">50+</p>
            <p className="text-sm">{t("about.stats.projects")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-primary/10 rounded-lg p-6 text-center"
          >
            <p className="text-4xl font-bold text-primary mb-2">30+</p>
            <p className="text-sm">{t("about.stats.clients")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-primary/10 rounded-lg p-6 text-center"
          >
            <p className="text-4xl font-bold text-primary mb-2">15+</p>
            <p className="text-sm">{t("about.stats.specialists")}</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

