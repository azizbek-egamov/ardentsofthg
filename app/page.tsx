import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Team from "@/components/team"
import Partners from "@/components/partners"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <AboutUs />
      <Services />
      <Projects />
      <Team />
      <Partners />
      <Testimonials />
      <Contact />
    </div>
  )
}

