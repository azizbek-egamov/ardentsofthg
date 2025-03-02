"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useApp } from "@/lib/context/AppContext"

export default function Team() {
  const { t } = useApp()

  const teamMembers = [
    {
      name: "Shohruhbek Rajabov",
      role: "Python dasturchi | Project Manager",
      avatar:
        "/images/ceo.jpg",
      description: "Experienced in building scalable web applications using modern technologies.",
    },
    {
      name: "Bog'ibek Matyoqubov",
      role: "Mobile dasturchi / team lead",
      avatar:
        "/images/bogibek.jpg",
      description: "Experienced in building scalable web applications using modern technologies.",
    },
    {
      name: "Azizbek Sadullayev",
      role: "Python dasturchi",
      avatar:
        "/images/Azizbrek-DoBX-d6O.jpg",
      description: "Experienced in building scalable web applications using modern technologies.",
    },
    {
      name: "Muhammad Quranboyev",
      role: "Frontend dasturchi",
      avatar:
        "/images/muhammad-CNV6AlJG.jpg",
      description: "Passionate about creating intuitive and visually appealing user interfaces.",
    },
    {
      name: "Og'abek Marimov",
      role: "Python dasturchi",
      avatar:
        "/images/ogabek.jpg",
      description: "Specializes in developing cross-platform mobile applications for iOS and Android.",
    },
    {
      name: "Mustafa Eshchanov",
      role: "Frontend dasturchi",
      avatar:
        "/images/mustafa-B21sVLIe.jpg",
      description: "Specializes in developing cross-platform mobile applications for iOS and Android.",
    },
    {
      name: "Timurbek Madraximov",
      role: "Grafik dizayner & Project Manager",
      avatar:
        "/images/temur-C5aNGFdT.jpg",
      description: "Experienced in leading and coordinating complex IT projects to successful completion.",
    },
    {
      name: "Mirzohid Xudayberganov",
      role: "Backend dastruchi",
      avatar:
        "/images/mirzohid.jpg",
      description: "Pythonchi",
    },
  ]

  return (
    <section id="team" className="section-container bg-muted/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">{t("team.title")}</h2>
        <p className="section-subtitle">{t("team.description")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 mb-4 overflow-hidden rounded-full">
                    <img
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                  <p className="text-sm">{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

