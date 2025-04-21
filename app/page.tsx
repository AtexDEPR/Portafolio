"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useEffect } from "react"
import i18n from "@/lib/i18n"
import { I18nextProvider } from "react-i18next"

export default function Home() {
  const { t } = useTranslation()

  useEffect(() => {
    // Initialize language from localStorage or default to English
    const savedLanguage = localStorage.getItem("language") || "en"
    i18n.changeLanguage(savedLanguage)
  }, [])

  return (
    <I18nextProvider i18n={i18n}>
      <main className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navbar />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </motion.div>
      </main>
    </I18nextProvider>
  )
}
