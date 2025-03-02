"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react"
import { useApp } from "@/lib/context/AppContext"

export default function Footer() {
  const { t } = useApp()

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-primary">ArdentSoft</h3>
            <p className="text-muted-foreground mb-4 max-w-md">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  {t("footer.services.software")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  {t("footer.services.mobile")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  {t("footer.services.fullstack")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  {t("footer.services.consulting")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  {t("footer.services.api")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.contact")}</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>{t("footer.address")}</p>
              <p>{t("footer.phone")}</p>
              <p>{t("footer.email")}</p>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}

