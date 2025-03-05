"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Smartphone, Globe, ChevronLeft, ChevronRight } from "lucide-react"
import { useApp } from "@/lib/context/AppContext"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

export default function Projects() {
  const { t } = useApp()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  const projects = [
    {
      title: t("projects.ecommerce"),
      description: t("projects.ecommerce.desc"),
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      image: "/images/img11-Dox-pLmG.png",
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
    <section id="projects" className="section-container relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="section-title">{t("projects.title")}</h2>
        <p className="section-subtitle">{t("projects.description")}</p>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4">
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
                      <p className="line-clamp-3">{project.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        {t("projects.details")}
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className={`absolute top-1/2 -translate-y-1/2 left-2 z-10 rounded-full ${!prevBtnEnabled ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={`absolute top-1/2 -translate-y-1/2 right-2 z-10 rounded-full ${!nextBtnEnabled ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

