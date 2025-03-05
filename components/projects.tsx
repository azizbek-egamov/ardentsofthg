"use client"
import Image from "next/image"
import Slider from "react-slick"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A convenient and secure platform for online sales.",
      image: "/images/img11-Dox-pLmG.png",
    },
    {
      title: "Mobile Application",
      description: "Intuitive and interactive mobile applications for users.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Web Development",
      description: "Creation and development of modern and functional websites.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "UI/UX Design",
      description: "Intuitive user interface designs for enhanced user experiences.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "AI Integration",
      description: "Smart AI-powered solutions to automate and optimize processes.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure for robust and flexible applications.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    dotsClass: "slick-dots custom-dots",
    customPaging: () => <div className="w-3 h-3 mx-1 rounded-full bg-primary/30 hover:bg-primary transition-colors" />,
  }

  return (
    <section id="projects" className="section-container bg-muted/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Among our implemented projects are the following.</p>

        <div className="max-w-6xl mx-auto px-4 mt-12">
          <Slider {...settings} className="featured-carousel -mx-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-[400px] overflow-hidden border-t-4 border-t-primary hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <span className="text-white text-2xl font-bold">+</span>
                      </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground flex-grow overflow-hidden">{project.description}</p>
                    </div>
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

export default Projects

