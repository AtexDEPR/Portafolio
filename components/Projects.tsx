"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, ExternalLink, Code, Layers, Server, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

type Project = {
  id: number
  title: string
  description: {
    en: string
    es: string
  }
  image: string
  technologies: string[]
  category: string
  type: "frontend" | "backend" | "fullstack"
  github?: string
  live?: string
  achievements: {
    en: string[]
    es: string[]
  }
  learnings: {
    en: string
    es: string
  }
}

const ProjectCard = ({ project }: { project: Project }) => {
  const { i18n, t } = useTranslation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [isHovered, setIsHovered] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "frontend":
        return <Code className="w-5 h-5" />
      case "backend":
        return <Server className="w-5 h-5" />
      case "fullstack":
        return <Layers className="w-5 h-5" />
      default:
        return <Globe className="w-5 h-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "frontend":
        return "bg-indigo/10 text-indigo border-indigo/30"
      case "backend":
        return "bg-emerald/10 text-emerald border-emerald/30"
      case "fullstack":
        return "bg-neon-green/10 text-neon-green border-neon-green/30"
      default:
        return "bg-gray-700/30 text-gray-300 border-gray-600"
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="bg-dark-surface/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        {/* Project type badge */}
        <div className="absolute top-3 left-3">
          <div
            className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(project.type)}`}
          >
            {getTypeIcon(project.type)}
            <span className="ml-1 capitalize">{project.type}</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-black/60">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="secondary" className="bg-black/60">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-3">
          {i18n.language === "en" ? project.description.en : project.description.es}
        </p>

        <div className="mb-4">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-sm font-semibold text-neon-green hover:underline focus:outline-none"
          >
            {showDetails ? t("projects.hideDetails") : t("projects.showDetails")}
          </button>

          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2"
            >
              <h4 className="text-sm font-semibold text-neon-green mb-2">{t("projects.achievements")}</h4>
              <ul className="text-xs text-gray-300 space-y-1 list-disc pl-4 mb-3">
                {(i18n.language === "en" ? project.achievements.en : project.achievements.es).map(
                  (achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ),
                )}
              </ul>

              <h4 className="text-sm font-semibold text-neon-green mb-2">{t("projects.learnings")}</h4>
              <p className="text-xs text-gray-300 mb-3">
                {i18n.language === "en" ? project.learnings.en : project.learnings.es}
              </p>

              <div className="flex flex-wrap gap-1 mt-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <div className="flex space-x-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <button className="metallic-button primary">
                <span className="button-text flex items-center">
                  <Github size={16} className="mr-1 button-icon" />
                  GitHub
                </span>
              </button>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <button className="metallic-button secondary">
                <span className="button-text flex items-center">
                  <ExternalLink size={16} className="mr-1 button-icon" />
                  Demo
                </span>
              </button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [filter, setFilter] = useState("all")

  const projects: Project[] = [
    {
      id: 1,
      title: "Camello - Plataforma para Freelancers",
      description: {
        en: "Marketplace platform for hiring and offering freelance services, connecting talent with opportunities.",
        es: "Plataforma tipo marketplace para contratar y ofrecer servicios freelance, conectando talento con oportunidades.",
      },
      image: "/img/camello.png",
      technologies: ["React", "JavaScript", "TailwindCSS", "Spring Boot", "MySQL"],
      category: "web",
      type: "fullstack",
      github: "https://github.com/AtexDEPR/camello",
      live: "https://atexdepr.github.io/camello/",
      achievements: {
        en: [
          "Designed and implemented a complete marketplace with user profiles",
          "Created a job matching algorithm to connect freelancers with opportunities",
          "Implemented secure payment processing and review system",
        ],
        es: [
          "Diseñé e implementé un marketplace completo con perfiles de usuario",
          "Creé un algoritmo de emparejamiento de trabajos para conectar freelancers con oportunidades",
          "Implementé procesamiento seguro de pagos y sistema de reseñas",
        ],
      },
      learnings: {
        en: "Full Stack development, clean architecture, backend-frontend integration, and implementing complex business logic.",
        es: "Desarrollo Full Stack, arquitectura limpia, integración backend-frontend e implementación de lógica de negocio compleja.",
      },
    },
    {
      id: 2,
      title: "Pizza Fiesta - Gestión de Pizzería",
      description: {
        en: "Relational database model for a pizzeria with order management, ingredients, and custom pricing.",
        es: "Modelo de base de datos relacional para una pizzería con control de pedidos, ingredientes y precios personalizados.",
      },
      image: "/img/pizza-fiesta.png",
      technologies: ["MySQL", "DrawSQL", "StarUML"],
      category: "database",
      type: "backend",
      github: "https://github.com/AtexDEPR/Pizza-Fiesta-base-de-datos-",
      achievements: {
        en: [
          "Designed a normalized database schema with complex relationships",
          "Created advanced SQL queries for business intelligence",
          "Implemented stored procedures for order processing",
        ],
        es: [
          "Diseñé un esquema de base de datos normalizado con relaciones complejas",
          "Creé consultas SQL avanzadas para inteligencia de negocios",
          "Implementé procedimientos almacenados para procesamiento de pedidos",
        ],
      },
      learnings: {
        en: "Logical and physical modeling, referential integrity, complex SQL queries, and database optimization.",
        es: "Modelado lógico y físico, integridad referencial, consultas SQL complejas y optimización de bases de datos.",
      },
    },
    {
      id: 3,
      title: "Sakila - Sistema de Alquiler de Películas",
      description: {
        en: "Extension of the Sakila database with queries, functions, triggers, and events for a video rental system.",
        es: "Extensión de la base Sakila con consultas, funciones, triggers y eventos para un sistema de videoclub.",
      },
      image: "/img/sakila.png",
      technologies: ["MySQL", "SQL Functions", "Triggers", "Events"],
      category: "database",
      type: "backend",
      github: "https://github.com/AtexDEPR/Sakila-Campus",
      achievements: {
        en: [
          "Extended the standard Sakila database with custom functionality",
          "Created complex reporting queries for business analytics",
          "Implemented automated processes with SQL events",
        ],
        es: [
          "Extendí la base de datos estándar Sakila con funcionalidad personalizada",
          "Creé consultas de informes complejas para análisis de negocios",
          "Implementé procesos automatizados con eventos SQL",
        ],
      },
      learnings: {
        en: "Advanced SQL programming, complex logic with functions and triggers, and automation with SQL events.",
        es: "Programación avanzada en SQL, lógica compleja con funciones y triggers, y automatización con eventos SQL.",
      },
    },
    {
      id: 4,
      title: "Tetris & Tres en Raya",
      description: {
        en: "Classic games developed from scratch as practice for logic and graphical structures.",
        es: "Juegos clásicos desarrollados desde cero como práctica de lógica y estructuras gráficas.",
      },
      image: "/img/tetris-tres-en-raya.png",
      technologies: ["JavaScript", "HTML", "CSS", "Canvas API"],
      category: "game",
      type: "frontend",
      github: "https://github.com/AtexDEPR/PORTAFOLIO-V3",
      live: "https://danielpereira-games.netlify.app/",
      achievements: {
        en: [
          "Built game logic and physics from scratch using vanilla JavaScript",
          "Implemented responsive design for mobile and desktop play",
          "Created local storage system for saving high scores",
        ],
        es: [
          "Construí lógica de juego y física desde cero usando JavaScript puro",
          "Implementé diseño responsivo para juego en móvil y escritorio",
          "Creé sistema de almacenamiento local para guardar puntuaciones altas",
        ],
      },
      learnings: {
        en: "Algorithmic logic, DOM manipulation, responsive design basics, and game state management.",
        es: "Lógica algorítmica, manipulación del DOM, diseño responsivo básico y gestión de estados de juego.",
      },
    },
    {
      id: 5,
      title: "Los Ambientales - Gestión de Parques Naturales",
      description: {
        en: "System for recording data from natural parks supervised by the Ministry of Environment.",
        es: "Sistema para registrar datos de parques naturales supervisados por el Ministerio del Medio Ambiente.",
      },
      image: "/img/los-ambientales.png",
      technologies: ["MySQL", "Database Design", "SQL"],
      category: "database",
      type: "backend",
      github: "https://github.com/AtexDEPR/Los-Ambientales",
      achievements: {
        en: [
          "Designed a normalized database for environmental data management",
          "Created complex queries for environmental impact analysis",
          "Implemented data integrity constraints for accurate reporting",
        ],
        es: [
          "Diseñé una base de datos normalizada para gestión de datos ambientales",
          "Creé consultas complejas para análisis de impacto ambiental",
          "Implementé restricciones de integridad de datos para informes precisos",
        ],
      },
      learnings: {
        en: "Normalization, complex relationships, and natural resource management via database.",
        es: "Normalización, relaciones complejas y gestión de recursos naturales a través de base de datos.",
      },
    },
    {
      id: 6,
      title: "Fundación CultuVivo",
      description: {
        en: "Institutional website for a cultural foundation with event calendar and resource library.",
        es: "Sitio web institucional para una fundación cultural con calendario de eventos y biblioteca de recursos.",
      },
      image: "/img/cultuvivo.png",
      technologies: ["HTML", "CSS", "Bulma", "JavaScript"],
      category: "web",
      type: "frontend",
      github: "https://github.com/AtexDEPR/Proyecto_CultuVivo",
      live: "https://atexdepr.github.io/Proyecto_CultuVivo/CultuVivo/index.html",
      achievements: {
        en: [
          "Designed and implemented a responsive website using Bulma framework",
          "Created accessible UI components following WCAG guidelines",
          "Optimized site performance for fast loading times",
        ],
        es: [
          "Diseñé e implementé un sitio web responsivo usando el framework Bulma",
          "Creé componentes UI accesibles siguiendo las pautas WCAG",
          "Optimicé el rendimiento del sitio para tiempos de carga rápidos",
        ],
      },
      learnings: {
        en: "Design framework mastery, clear structure, accessibility, and responsive design principles.",
        es: "Dominio de frameworks de diseño, estructura clara, accesibilidad y principios de diseño responsivo.",
      },
    },
    {
      id: 7,
      title: "Sistema de Gestión de Biblioteca",
      description: {
        en: "Library management system with book tracking, user accounts, and lending functionality.",
        es: "Sistema de gestión de biblioteca con seguimiento de libros, cuentas de usuario y funcionalidad de préstamo.",
      },
      image: "/img/proximamente.png",
      technologies: ["Java", "OOP", "Swing", "File I/O"],
      category: "desktop",
      type: "fullstack",
      achievements: {
        en: [
          "Implemented object-oriented design with proper inheritance and encapsulation",
          "Created a user-friendly GUI with Java Swing",
          "Developed a persistent storage system for library data",
        ],
        es: [
          "Implementé diseño orientado a objetos con herencia y encapsulamiento adecuados",
          "Creé una GUI amigable con Java Swing",
          "Desarrollé un sistema de almacenamiento persistente para datos de biblioteca",
        ],
      },
      learnings: {
        en: "Object-oriented programming, GUI development, file persistence, and business logic implementation.",
        es: "Programación orientada a objetos, desarrollo de GUI, persistencia de archivos e implementación de lógica de negocio.",
      },
    },
    {
      id: 8,
      title: "API RESTful de Gestión de Inventario",
      description: {
        en: "RESTful API for inventory management with authentication, CRUD operations, and reporting.",
        es: "API RESTful para gestión de inventario con autenticación, operaciones CRUD e informes.",
      },
      image: "/img/proximamente.png",
      technologies: ["Spring Boot", "MySQL", "JPA/Hibernate", "JWT"],
      category: "api",
      type: "backend",
      achievements: {
        en: [
          "Designed a RESTful API following best practices and clean architecture",
          "Implemented secure authentication with JWT",
          "Created comprehensive documentation with Swagger",
        ],
        es: [
          "Diseñé una API RESTful siguiendo mejores prácticas y arquitectura limpia",
          "Implementé autenticación segura con JWT",
          "Creé documentación completa con Swagger",
        ],
      },
      learnings: {
        en: "Authentication, CRUD operations, clean architecture, and JPA/Hibernate usage.",
        es: "Autenticación, operaciones CRUD, arquitectura limpia y uso de JPA/Hibernate.",
      },
    },
  ]

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.type === filter)

  // Categorías para los filtros
  const categories = [
    { id: "all", label: t("projects.filters.all"), icon: <Globe size={16} className="mr-2" /> },
    { id: "frontend", label: t("projects.filters.frontend"), icon: <Code size={16} className="mr-2" /> },
    { id: "backend", label: t("projects.filters.backend"), icon: <Server size={16} className="mr-2" /> },
    { id: "fullstack", label: t("projects.filters.fullstack"), icon: <Layers size={16} className="mr-2" /> },
  ]

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4 responsive-container">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 text-center flex items-center justify-center"
        >
          <span className="text-neon-green mr-2">#</span>
          {t("projects.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-10"
        >
          {t("projects.subtitle")}
        </motion.p>

        <div className="flex justify-center mb-10 overflow-x-auto pb-4 responsive-scroll">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`metallic-button ${filter === category.id ? "primary" : "secondary"}`}
                onClick={() => setFilter(category.id)}
              >
                <span className="button-text flex items-center">
                  {category.icon}
                  {category.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
            <p className="text-gray-400">{t("projects.noProjects")}</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
