"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { useApp } from "@/lib/context/AppContext"

export default function Testimonials() {
  const { t } = useApp()

  const testimonials = [
    {
      name: "Mijoz A",
      role: "CEO, Tech Solutions",
      avatar: "https://placehold.co/200x200/4f46e5/ffffff?text=A",
      quote:
        "ArdentSoft bilan ishlash men uchun ajoyib tajriba bo'ldi. Ular har bir detalga e'tibor berishadi va loyihani o'z vaqtida yakunlashadi.",
    },
    {
      name: "Mijoz B",
      role: "Marketing Director, Digital Agency",
      avatar: "https://placehold.co/200x200/10b981/ffffff?text=B",
      quote:
        "Loyiham vaqtida va mukammal bajarildi. ArdentSoft jamoasiga rahmat. Ularning professional yondashuvi va texnik bilimi juda yuqori darajada.",
    },
  ]

  return (
    <section id="testimonials" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">{t("testimonials.title")}</h2>
        <p className="section-subtitle">{t("testimonials.description")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow border-t-4 border-t-primary">
                <CardContent className="p-6">
                  <div className="mb-6 text-primary">
                    <Quote className="h-8 w-8" />
                  </div>
                  <p className="mb-6 italic">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

