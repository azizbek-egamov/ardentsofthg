"use client"

import React from "react"
import { motion } from "framer-motion"
import { useApp } from "@/lib/context/AppContext"
import Image from "next/image"

const Partners = () => {
  const { t } = useApp()

  const partners = [
    { name: "Company A", logo: "https://i.ibb.co/q5XDptD/client-logo-1.png" },
    { name: "Company B", logo: "https://i.ibb.co/LSmZvJD/client-logo-4.png" },
    { name: "Company C", logo: "https://i.ibb.co/pK9KdhT/client-logo-5.png" },
    { name: "Company D", logo: "https://i.ibb.co/Q6PRFPg/client-logo-3.png" },
    // Add more partners as needed
  ]

  return (
    <section id="partners" className="section-container bg-muted/50 overflow-hidden py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">{t("partners.title")}</h2>
        <p className="section-subtitle">{t("partners.description")}</p>

        <div className="container flex-vertical mt-12">
          <div className="flex-horizontal">
            <div className="spacer-60"></div>
            <div className="flex-vertical">
              <div className="marquee-horizontal-large">
                <div className="track-horizontal">
                  <div className="flex-horizontal">
                    {[...partners, ...partners].map((partner, index) => (
                      <React.Fragment key={index}>
                        <div className="icon-container-alt">
                          <Image
                            src={partner.logo || "/placeholder.svg"}
                            alt={partner.name}
                            width={150}
                            height={90}
                            className="icon"
                          />
                        </div>
                        <div className="spacer-30"></div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
              <div className="marquee-horizontal-large">
                <div className="track-horizontal-alt">
                  <div className="flex-horizontal">
                    {[...partners, ...partners].reverse().map((partner, index) => (
                      <React.Fragment key={index}>
                        <div className="icon-container-alt">
                          <Image
                            src={partner.logo || "/placeholder.svg"}
                            alt={partner.name}
                            width={150}
                            height={90}
                            className="icon"
                          />
                        </div>
                        <div className="spacer-30"></div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        .container {
          width: 90%;
          max-width: 1400px;
          margin-right: auto;
          margin-left: auto;
          padding-right: 60px;
          padding-left: 60px;
        }
        .flex-vertical {
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .flex-horizontal {
          display: flex;
          width: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        .spacer-60 {
          width: 60px;
          height: 60px;
        }
        .spacer-30 {
          width: 30px;
          height: 30px;
        }
        .marquee-horizontal-large {
          position: relative;
          z-index: 200;
          display: flex;
          overflow: hidden;
          width: 100%;
          height: 190px;
          justify-content: flex-start;
          align-items: center;
          flex: 0 0 auto;
        }
        .track-horizontal {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          position: absolute;
          white-space: nowrap;
          will-change: transform;
          animation: marquee-horizontal 20s linear infinite;
        }
        .track-horizontal-alt {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          position: absolute;
          white-space: nowrap;
          will-change: transform;
          animation: marquee-horizontal-alt 20s linear infinite;
        }
        .icon-container-alt {
          display: flex;
          width: 250px;
          height: 150px;
          padding-right: 30px;
          padding-left: 30px;
          justify-content: center;
          align-items: center;
          flex: 0 0 auto;
          border-radius: 8px;
          border: 1px solid #eaeaea;
          background-color: #ffffff;
        }
        .marquee-cover-horizontal {
          position: absolute;
          left: 0%;
          top: 0%;
          right: 0%;
          bottom: 0%;
          z-index: 10;
          background-image: linear-gradient(270deg, hsla(var(--background) / 0) 70%, hsl(var(--background))),
            linear-gradient(270deg, hsl(var(--background)), hsla(var(--background) / 0) 30%);
        }
        @keyframes marquee-horizontal {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-horizontal-alt {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}

export default Partners

