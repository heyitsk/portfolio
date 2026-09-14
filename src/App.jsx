import { useEffect, useState } from "react"
import BootSequence from "./components/BootSequence"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Writing from "./components/Writing"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const BOOT_KEY = "portfolio-boot-seen"

export default function App() {
  const [showBoot, setShowBoot] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem(BOOT_KEY)) {
      setShowBoot(true)
    }
  }, [])

  function handleBootDone() {
    sessionStorage.setItem(BOOT_KEY, "1")
    setShowBoot(false)
  }

  return (
    <>
      {showBoot && <BootSequence onDone={handleBootDone} />}
      <div className={showBoot ? "invisible" : ""}>
        <Nav />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Writing />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
