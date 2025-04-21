"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Code, Database, Palette, BookOpen, Globe, Volume2, VolumeX } from "lucide-react"

// Photo carousel component
const PhotoCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const slides = [
    {
      type: "image",
      src: "/img/profile-photo-1.webp",
      alt: "Profile photo 1",
      caption: "Daniel Esteban - Software Developer",
    },
    {
      type: "image",
      src: "/img/profile-photo-2.png",
      alt: "Profile photo 2",
      caption: "Working on projects",
    },
    {
      type: "image",
      src: "/img/profile-photo-3.png",
      alt: "Profile photo 3",
      caption: "Professional portrait",
    },
    {
      type: "image",
      src: "/img/profile-photo-4.png",
      alt: "Profile photo 4",
      caption: "Creative ideas",
    },
    {
      type: "video",
      src: `https://www.youtube.com/embed/lNRAqqo-1HY?si=AI04trUQE_3lx72n&autoplay=1&mute=${isMuted ? 1 : 0}`,
      poster:
        "https://sjc.microlink.io/ZGZ5PO7ZeszQrUD2dGwfrt8xNXJydV8bqzxzVOHGKAf2X8z22C1vh3E012_B7HmN70TOfqfrGuVFFZCPemOo6g.jpeg",
      caption: "Music inspiration",
      isYoutube: true,
    },
  ]

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, slides.length])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveSlide((prev) => (prev + 1) % slides.length)
  }

  const handleDotClick = (index: number) => {
    setAutoplay(false)
    setActiveSlide(index)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)

    // Si tenemos acceso al iframe actual, podemos intentar controlar el sonido directamente
    if (iframeRef.current && activeSlide === 4) {
      try {
        // Recrear el iframe con el nuevo estado de mute
        const currentSrc = iframeRef.current.src
        iframeRef.current.src = currentSrc.replace(isMuted ? "mute=1" : "mute=0", isMuted ? "mute=0" : "mute=1")
      } catch (error) {
        console.error("Error al cambiar el estado de mute:", error)
      }
    }
  }

  // Generar la URL del video con el estado de mute actualizado
  const getVideoSrc = () => {
    const baseUrl = "https://www.youtube.com/embed/lNRAqqo-1HY"
    return `${baseUrl}?si=AI04trUQE_3lx72n&autoplay=1&mute=${isMuted ? 1 : 0}`
  }

  return (
    <div className="carousel-container h-full">
      {slides.map((slide, index) => (
        <div key={index} className={`carousel-slide ${activeSlide === index ? "active" : ""}`}>
          {slide.type === "image" ? (
            <>
              <Image
                src={slide.src || "/placeholder.svg"}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {slide.caption && (
                <div className="absolute bottom-12 left-4 right-4 z-30 bg-black/60 p-2 rounded-md backdrop-blur-sm">
                  <p className="text-white text-sm text-center">{slide.caption}</p>
                </div>
              )}
            </>
          ) : (
            <>
              {slide.isYoutube ? (
                <div className="w-full h-full flex items-center justify-center bg-black">
                  {activeSlide === index && (
                    <iframe
                      ref={iframeRef}
                      key={`youtube-${isMuted}`}
                      src={getVideoSrc()}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full absolute inset-0"
                      onLoad={() => setAutoplay(false)}
                    ></iframe>
                  )}

                  {/* Botón para activar/desactivar sonido */}
                  {activeSlide === index && (
                    <button
                      onClick={toggleMute}
                      className="absolute bottom-20 right-4 z-40 p-3 bg-black/70 hover:bg-black/90 rounded-full transition-all duration-300 text-white hover:text-neon-green"
                      aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                    >
                      {isMuted ? <VolumeX size={24} className="animate-pulse" /> : <Volume2 size={24} />}
                    </button>
                  )}
                </div>
              ) : (
                <video
                  controls
                  poster={slide.poster}
                  className="w-full h-full object-cover"
                  onPlay={() => setAutoplay(false)}
                >
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {slide.caption && (
                <div className="absolute bottom-12 left-4 right-4 z-30 bg-black/60 p-2 rounded-md backdrop-blur-sm">
                  <p className="text-white text-sm text-center">{slide.caption}</p>
                </div>
              )}
            </>
          )}
        </div>
      ))}

      <div className="carousel-controls">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${activeSlide === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      <div className="carousel-arrow prev" onClick={handlePrev}>
        <ChevronLeft className="text-white" />
      </div>

      <div className="carousel-arrow next" onClick={handleNext}>
        <ChevronRight className="text-white" />
      </div>
    </div>
  )
}

const About = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const skills = [
    {
      category: t("about.skills.frontend.title"),
      icon: <Code className="w-5 h-5 text-neon-green" />,
      description: t("about.skills.frontend.description"),
    },
    {
      category: t("about.skills.backend.title"),
      icon: <Database className="w-5 h-5 text-neon-green" />,
      description: t("about.skills.backend.description"),
    },
    {
      category: t("about.skills.design.title"),
      icon: <Palette className="w-5 h-5 text-neon-green" />,
      description: t("about.skills.design.description"),
    },
    {
      category: t("about.skills.learning.title"),
      icon: <BookOpen className="w-5 h-5 text-neon-green" />,
      description: t("about.skills.learning.description"),
    },
    {
      category: t("about.skills.bilingual.title"),
      icon: <Globe className="w-5 h-5 text-neon-green" />,
      description: t("about.skills.bilingual.description"),
    },
  ]

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 responsive-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center responsive-grid"
        >
          {/* Image Carousel */}
          <motion.div
            variants={itemVariants}
            className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-lg shadow-neon-green/20 border border-neon-green/20 hover:border-neon-green/40 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-neon-green/5 z-10 rounded-lg"></div>
            <PhotoCarousel />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent z-20"></div>
            <div className="absolute bottom-4 left-4 z-30">
              <span className="text-sm text-gray-300">{t("about.location")}</span>
              <h3 className="text-xl font-bold text-neon-green">Bucaramanga, Colombia</h3>
            </div>

            {/* Tech-inspired overlay elements */}
            <div className="absolute top-4 right-4 z-30 flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-pink animate-pulse"></div>
              <div
                className="w-3 h-3 rounded-full bg-neon-green animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full bg-chrome-green animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            <div className="absolute top-0 left-0 right-0 h-8 bg-dark-surface/50 z-20 flex items-center px-4">
              <div className="text-xs text-neon-green font-mono">profile.exe</div>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-neon-green mr-2">#</span>
              {t("about.title")}
            </motion.h2>

            <motion.div variants={itemVariants} className="card mb-6">
              <p className="text-gray-300 leading-relaxed">
                Soy un desarrollador curioso y creativo, con ganas de crear experiencias digitales que realmente marquen
                la diferencia. Me gusta aprender cosas nuevas, resolver problemas y trabajar en equipo. Busco crecer
                cada día y dejar huella con lo que hago. Me considero alguien sincero, adaptable y siempre con buena
                energía. Sueño con construir proyectos que impacten de forma positiva en el mundo. Disfruto los retos y
                me emociona ver mis ideas tomar forma. Este es solo el comienzo de todo lo que quiero lograr.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="card mb-6">
              <h3 className="text-xl font-semibold mb-3 text-neon-green">Enfoque profesional</h3>
              <p className="text-neon-green">Mi objetivo es crear tecnología que impacte y deje huella.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="card">
              <h3 className="text-xl font-semibold mb-3 text-neon-green">{t("about.specialization")}</h3>
              <div className="grid grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-3 bg-black/50 rounded-lg border border-neon-green/10 hover:border-neon-green/30 transition-all duration-300"
                  >
                    <div className="text-neon-green mb-2 p-2 bg-black/70 rounded-full">{skill.icon}</div>
                    <h4 className="font-medium text-white text-center text-sm">{skill.category}</h4>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
