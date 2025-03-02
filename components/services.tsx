"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Code, Smartphone, Globe, Lightbulb, Shield, Layers } from "lucide-react"
import { useApp } from "@/lib/context/AppContext"

export default function Services() {
  const { t } = useApp()

  const services = [
    {
      title: t("services.software"),
      description: t("services.software.desc"),
      icon: <Code className="h-10 w-10 text-primary" />,
      color: "bg-blue-500/10 dark:bg-blue-500/5",
    },
    {
      title: t("services.mobile"),
      description: t("services.mobile.desc"),
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      color: "bg-emerald-500/10 dark:bg-emerald-500/5",
    },
    {
      title: t("services.fullstack"),
      description: t("services.fullstack.desc"),
      icon: <Layers className="h-10 w-10 text-primary" />,
      color: "bg-purple-500/10 dark:bg-purple-500/5",
    },
    {
      title: t("services.consulting"),
      description: t("services.consulting.desc"),
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      color: "bg-amber-500/10 dark:bg-amber-500/5",
    },
    {
      title: t("services.qa"),
      description: t("services.qa.desc"),
      icon: <Shield className="h-10 w-10 text-primary" />,
      color: "bg-red-500/10 dark:bg-red-500/5",
    },
    {
      title: t("services.api"),
      description: t("services.api.desc"),
      icon: <Globe className="h-10 w-10 text-primary" />,
      color: "bg-cyan-500/10 dark:bg-cyan-500/5",
    },
  ]

  return (
    <section id="services" className="section-container bg-muted/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">{t("services.title")}</h2>
        <p className="section-subtitle">{t("services.description")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full hover:shadow-md transition-shadow border-t-4 border-t-primary ${service.color}`}>
                <CardHeader>
                  <div className="mb-4 p-3 rounded-full w-fit bg-primary/10">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

