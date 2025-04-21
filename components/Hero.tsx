"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"

// Geometric shape component
const GeometricShape = ({
  size,
  position,
  delay,
  duration,
  className = "",
}: {
  size: string
  position: { [key: string]: string }
  delay: number
  duration: number
  className?: string
}) => {
  return (
    <motion.div
      className={`geometric-shape ${className}`}
      style={{ width: size, height: size, ...position }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        opacity: 1,
        scale: 1,
      }}
      transition={{
        y: {
          duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        },
        x: {
          duration: duration * 1.3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        },
        opacity: { duration: 1, delay },
        scale: { duration: 1, delay },
      }}
    />
  )
}

// Animated name component
const AnimatedName = () => {
  const [isAtex, setIsAtex] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAtex((prev) => !prev)
    }, 10000) // Switch every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div className="mb-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-metallic-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Daniel Esteban
      </motion.h1>
      <motion.h1
        className="text-4xl md:text-6xl font-orbitron text-gradient mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {isAtex ? "Atex" : "Pereira Rosas"}
      </motion.h1>
    </motion.div>
  )
}

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Geometric shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        <GeometricShape size="300px" position={{ top: "10%", left: "5%" }} delay={0.2} duration={8} />
        <GeometricShape size="200px" position={{ top: "60%", left: "15%" }} delay={0.5} duration={12} />
        <GeometricShape size="250px" position={{ top: "20%", right: "10%" }} delay={0.3} duration={10} />
        <GeometricShape size="180px" position={{ bottom: "15%", right: "20%" }} delay={0.7} duration={9} />
        <GeometricShape size="220px" position={{ bottom: "30%", left: "50%" }} delay={0.4} duration={11} />
      </div>

      {/* Radial gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-70"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="badge">
              <span>{t("hero.badge")}</span>
            </div>
          </motion.div>

          {/* Animated Name */}
          <AnimatedName />

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            <span className="text-neon-green">&lt;</span>
            {t("hero.tagline")}
            <span className="text-neon-green">/&gt;</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl mx-auto text-gray-400 mb-10 backdrop-blur-sm bg-anthracite/30 p-4 rounded-lg"
          >
            {t("hero.intro")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="metallic-button primary">
              <span className="button-text">
                <Link href="#projects">{t("hero.viewProjects")}</Link>
              </span>
            </button>

            <button className="metallic-button secondary">
              <span className="button-text">
                <Link href="#contact">{t("hero.contactMe")}</Link>
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
          className="w-6 h-10 border-2 border-neon-green rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-2 bg-neon-green rounded-full mt-2"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
