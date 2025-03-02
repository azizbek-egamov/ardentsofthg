"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Smartphone, Globe } from "lucide-react"
import { useApp } from "@/lib/context/AppContext"

export default function Projects() {
  const { t } = useApp()

  const projects = [
    {
      title: t("projects.ecommerce"),
      description: t("projects.ecommerce.desc"),
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      image:
        "/images/img11-Dox-pLmG.png",
      color: "bg-blue-500/10",
    },
    {
      title: t("projects.mobile"),
      description: t("projects.mobile.desc"),
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      color: "bg-emerald-500/10",
    },
    {
      title: t("projects.web"),
      description: t("projects.web.desc"),
      icon: <Globe className="h-10 w-10 text-primary" />,
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      color: "bg-amber-500/10",
    },
    
  ]

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">{t("projects.title")}</h2>
        <p className="section-subtitle">{t("projects.description")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`h-full overflow-hidden hover:shadow-lg transition-shadow border-t-4 border-t-primary ${project.color}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {project.icon}
                    <CardTitle>{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    {t("projects.details")}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

