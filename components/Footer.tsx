"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, Download } from "lucide-react"

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div>
            <Link href="#home" className="text-2xl font-bold mb-4 block">
              <span className="text-white">Daniel</span> <span className="text-neon-green">&quot;Atex&quot;</span>
            </Link>
            <p className="text-gray-400 mb-4">{t("footer.tagline")}</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/AtexDEPR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-green transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-pereira-8b090a358/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-green transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:danielpereira.json@gmail.com"
                className="text-gray-400 hover:text-neon-green transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-neon-green transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-neon-green transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-400 hover:text-neon-green transition-colors">
                  {t("nav.skills")}
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-neon-green transition-colors">
                  {t("nav.projects")}
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-gray-400 hover:text-neon-green transition-colors">
                  {t("nav.experience")}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-neon-green transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t("footer.contact")}</h3>
            <p className="text-gray-400 mb-2">{t("footer.location")}</p>
            <p className="text-gray-400 mb-4">Email: danielpereira.json@gmail.com</p>
            <a
              href="/resume.pdf"
              download="Daniel_Esteban_Resume.pdf"
              className="flex items-center text-neon-green hover:underline"
            >
              <Download size={16} className="mr-2" />
              {t("footer.downloadResume")}
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm"
        >
          <p>
            &copy; {currentYear} Daniel &quot;Atex&quot;. {t("footer.rights")}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
