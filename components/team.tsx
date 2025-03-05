"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useApp } from "@/lib/context/AppContext"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Team() {
  const { t } = useApp()

  const teamMembers = [
    {
      name: "Shohruhbek Rajabov",
      role: "Python dasturchi | Project Manager",
      avatar: "/images/ceo.jpg",
      description: "Experienced in building scalable web applications using modern technologies.",
    },
    {
      name: "Bog'ibek Matyoqubov",
      role: "Mobile dasturchi / team lead",
      avatar: "/images/bogibek.jpg",
      description: "Experienced in building scalable web applications using modern technologies.",
    },
    {
      name: "Azizbek Sadullayev",
      role: "Python dasturchi",
      avatar: "/images/Azizbrek-DoBX-d6O.jpg",
      description: "Experienced in building scalable web applications using modern technologies.",
    },
    {
      name: "Muhammad Quranboyev",
      role: "Frontend dasturchi",
      avatar: "/images/muhammad-CNV6AlJG.jpg",
      description: "Passionate about creating intuitive and visually appealing user interfaces.",
    },
    {
      name: "Og'abek Marimov",
      role: "Python dasturchi",
      avatar: "/images/ogabek.jpg",
      description: "Specializes in developing cross-platform mobile applications for iOS and Android.",
    },
    {
      name: "Mustafa Eshchanov",
      role: "Frontend dasturchi",
      avatar: "/images/mustafa-B21sVLIe.jpg",
      description: "Specializes in developing cross-platform mobile applications for iOS and Android.",
    },
    {
      name: "Timurbek Madraximov",
      role: "Grafik dizayner & Project Manager",
      avatar: "/images/temur-C5aNGFdT.jpg",
      description: "Experienced in leading and coordinating complex IT projects to successful completion.",
    },
    {
      name: "Mirzohid Xudayberganov",
      role: "Backend dastruchi",
      avatar: "/images/mirzohid.jpg",
      description: "Pythonchi",
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    dotsClass: "slick-dots custom-dots",
    customPaging: () => <div className="w-3 h-3 mx-1 rounded-full bg-primary/30 hover:bg-primary transition-colors" />,
  }

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

        <div className="max-w-6xl mx-auto px-4 mt-12">
          <Slider {...settings} className="team-carousel -mx-2">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-[400px] overflow-hidden border-t-4 border-t-primary hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="relative w-24 h-24 mb-4 overflow-hidden rounded-full">
                      <img
                        src={member.avatar || "/placeholder.svg"}
                        alt={member.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                    <p className="text-sm flex-grow overflow-hidden">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Slider>
        </div>
      </motion.div>

      <style jsx global>{`
        .slick-list, .slick-track {
          display: flex !important;
        }
        .slick-slide {
          height: auto !important;
        }
        .slick-slide > div {
          height: 100%;
        }
        .slick-prev, .slick-next {
          width: 40px;
          height: 40px;
          background-color: hsl(var(--primary));
          border-radius: 50%;
          z-index: 10;
        }
        .slick-prev {
          left: -5px;
        }
        .slick-next {
          right: -5px;
        }
        .slick-prev:hover, .slick-next:hover {
          background-color: hsl(var(--primary));
          opacity: 0.8;
        }
        .slick-prev:before, .slick-next:before {
          font-size: 20px;
          opacity: 1;
        }
        .slick-dots {
          bottom: -40px;
        }
        .dark .slick-track {
          margin-left: 0;
        }
        @media (max-width: 640px) {
          .slick-prev {
            left: 0;
          }
          .slick-next {
            right: 0;
          }
        }
      `}</style>
    </section>
  )
}
