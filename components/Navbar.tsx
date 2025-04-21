"use client"

import { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import Link from "next/link"

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [language, setLanguage] = useState(i18n.language || "en")
  const [activeSection, setActiveSection] = useState("home")
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en"
    i18n.changeLanguage(newLanguage)
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  // Navbar animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  }

  // Link hover animation
  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#4f46e5",
      textShadow: "0 0 8px rgba(79, 70, 229, 0.7)",
      transition: { duration: 0.2 },
    },
  }

  return (
    <motion.nav
      ref={navRef}
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-dark-surface/80 backdrop-blur-md py-2 shadow-lg shadow-indigo/10" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-bold relative group">
          <span className="text-white group-hover:opacity-0 transition-opacity duration-300">Daniel Esteban</span>
          <span className="text-gradient absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Atex
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <motion.div whileHover="hover" variants={linkVariants}>
                  <Link
                    href={link.href}
                    className={`relative px-2 py-1 ${
                      activeSection === link.href.substring(1) ? "text-indigo" : "text-gray-300"
                    }`}
                    onClick={() => setActiveSection(link.href.substring(1))}
                  >
                    {link.name}
                    {activeSection === link.href.substring(1) && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo to-pink"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-2">
            <label className="language-switch">
              <input type="checkbox" className="checkbox" checked={language === "es"} onChange={toggleLanguage} />
              <span className="language-slider">
                <span className="language-label en">EN</span>
                <span className="language-label es">ES</span>
              </span>
            </label>
          </div>

          <a href="/resume.pdf" download="Daniel_Esteban_Resume.pdf" className="metallic-button primary">
            <span className="button-text flex items-center">
              <Download size={16} className="mr-2" />
              {t("nav.resume")}
            </span>
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <motion.button className="lg:hidden text-white" whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} className="text-indigo" /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-dark-surface/95 backdrop-blur-md border-t border-indigo/20"
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-gray-300 hover:text-indigo transition-colors block py-2 ${
                        activeSection === link.href.substring(1) ? "text-indigo" : ""
                      }`}
                      onClick={() => {
                        setIsOpen(false)
                        setActiveSection(link.href.substring(1))
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-4 border-t border-gray-800">
                  <div className="flex items-center justify-between">
                    <span>{t("nav.language")}</span>
                    <div className="flex items-center space-x-2">
                      <label className="language-switch">
                        <input
                          type="checkbox"
                          className="checkbox"
                          checked={language === "es"}
                          onChange={toggleLanguage}
                        />
                        <span className="language-slider">
                          <span className="language-label en">EN</span>
                          <span className="language-label es">ES</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="/resume.pdf" download="Daniel_Esteban_Resume.pdf" className="metallic-button primary w-full">
                    <span className="button-text flex items-center justify-center">
                      <Download size={16} className="mr-2" />
                      {t("nav.resume")}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
