"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { Briefcase, School, Code, ExternalLink, Calendar, MapPin } from "lucide-react"

type Experience = {
  id: number
  title: string
  company: string
  location: string
  date: string
  description: {
    en: string
    es: string
  }
  achievements: {
    en: string[]
    es: string[]
  }
  skills: string[]
  type: "work" | "education" | "project"
  link?: string
}

const ExperienceSection = () => {
  const { t, i18n } = useTranslation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Actualizar la función getColor para usar solo tonos verdes (eliminar morado)
  const getColor = (type: string) => {
    switch (type) {
      case "work":
        return "#00FFFF" // Electric blue
      case "education":
        return "#00FF9D" // Neon green
      case "project":
        return "#66FFCC" // Chrome green
      default:
        return "#00FF9D"
    }
  }

  // Actualizar las fechas y eliminar la entrada del chatbot
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Técnico en Programación de Software",
      company: "Campuslands",
      location: "Bucaramanga, Colombia",
      date: "2025 - Presente",
      description: {
        en: "Currently studying software development with a focus on full-stack technologies. Maintaining an 80% grade average while working on real-world projects.",
        es: "Actualmente estudiando desarrollo de software con enfoque en tecnologías full-stack. Manteniendo un promedio de 80% mientras trabajo en proyectos del mundo real.",
      },
      achievements: {
        en: [
          "Developed a chatbot for a food chain that automated customer service operations",
          "Led a Scrum team to create a landing page for events, completing the project ahead of schedule",
          "Maintained 80% grade average across technical subjects",
        ],
        es: [
          "Desarrollé un chatbot para una cadena de comida que automatizó operaciones de servicio al cliente",
          "Lideré un equipo Scrum para crear una landing page de eventos, completando el proyecto antes de lo programado",
          "Mantuve un promedio de 80% en materias técnicas",
        ],
      },
      skills: ["JavaScript", "React", "Python", "Spring Boot", "MySQL", "Git"],
      type: "education",
    },
    {
      id: 2,
      title: "Técnico en Elaboración de Audiovisuales",
      company: "SENA",
      location: "Bogotá, Colombia",
      date: "2022 - 2023",
      description: {
        en: "Completed technical program in audiovisual production, learning skills that now enhance my approach to UI/UX design and digital content creation.",
        es: "Completé el programa técnico en producción audiovisual, aprendiendo habilidades que ahora mejoran mi enfoque en diseño UI/UX y creación de contenido digital.",
      },
      achievements: {
        en: [
          "Applied visual composition principles that now enhance my UI design approach",
          "Learned storytelling techniques that improve user experience flows",
          "Developed technical skills in digital media production applicable to web development",
        ],
        es: [
          "Apliqué principios de composición visual que ahora mejoran mi enfoque de diseño UI",
          "Aprendí técnicas narrativas que mejoran los flujos de experiencia de usuario",
          "Desarrollé habilidades técnicas en producción de medios digitales aplicables al desarrollo web",
        ],
      },
      skills: ["Video Editing", "Visual Composition", "Digital Media", "Storytelling"],
      type: "education",
    },
    {
      id: 3,
      title: "Bachiller",
      company: "Colegio Técnico Vicente Azuero",
      location: "Floridablanca, Colombia",
      date: "2020",
      description: {
        en: "Completed high school education with a technical focus, laying the foundation for my interest in technology and digital media.",
        es: "Completé la educación secundaria con enfoque técnico, sentando las bases para mi interés en tecnología y medios digitales.",
      },
      achievements: {
        en: [
          "Participated in technology-focused extracurricular activities",
          "Developed initial programming skills through school projects",
          "Graduated with honors in technical subjects",
        ],
        es: [
          "Participé en actividades extracurriculares enfocadas en tecnología",
          "Desarrollé habilidades iniciales de programación a través de proyectos escolares",
          "Me gradué con honores en materias técnicas",
        ],
      },
      skills: ["Basic Programming", "Technical Drawing", "Mathematics", "Physics"],
      type: "education",
    },
    {
      id: 4,
      title: "Desarrollador de Proyecto",
      company: "Camello Platform",
      location: "Bucaramanga, Colombia",
      date: "2025 - Presente",
      description: {
        en: "Led the development of a job marketplace connecting freelancers with clients, featuring a complete platform with user profiles, job listings, and payment processing.",
        es: "Lideré el desarrollo de un marketplace de empleo que conecta freelancers con clientes, con una plataforma completa que incluye perfiles de usuario, listados de trabajos y procesamiento de pagos.",
      },
      achievements: {
        en: [
          "Designed the architecture using React for frontend and Spring Boot for backend",
          "Implemented user authentication and profile management system",
          "Created job matching algorithm to connect freelancers with appropriate opportunities",
        ],
        es: [
          "Diseñé la arquitectura utilizando React para frontend y Spring Boot para backend",
          "Implementé sistema de autenticación de usuarios y gestión de perfiles",
          "Creé algoritmo de emparejamiento de trabajos para conectar freelancers con oportunidades apropiadas",
        ],
      },
      skills: ["React", "Spring Boot", "MySQL", "User Authentication", "API Design"],
      type: "project",
      link: "https://github.com/username/camello",
    },
    {
      id: 6,
      title: "Desarrollador de Minecraft",
      company: "Proyecto Personal",
      location: "Remoto",
      date: "2021 - Presente",
      description: {
        en: "Create custom systems and automation for Minecraft servers, enhancing gameplay and administration with advanced features.",
        es: "Creo sistemas personalizados y automatización para servidores de Minecraft, mejorando la jugabilidad y administración con características avanzadas.",
      },
      achievements: {
        en: [
          "Developed custom plugins and datapacks that enhance player experience",
          "Created automated systems for server management and gameplay mechanics",
          "Built a community around custom Minecraft experiences",
        ],
        es: [
          "Desarrollé plugins personalizados y datapacks que mejoran la experiencia del jugador",
          "Creé sistemas automatizados para gestión de servidores y mecánicas de juego",
          "Construí una comunidad alrededor de experiencias personalizadas de Minecraft",
        ],
      },
      skills: ["Java", "JSON", "Server Configuration", "Game Mechanics", "Community Management"],
      type: "project",
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="text-black" />
      case "education":
        return <School className="text-black" />
      case "project":
        return <Code className="text-black" />
      default:
        return <Briefcase className="text-black" />
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Actualizar el fondo y los elementos decorativos para usar solo tonos verdes
  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-neon-green/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-chrome-green/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 inline-flex items-center">
            <span className="text-neon-green mr-2">#</span>
            {t("experience.title")}
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-neon-green to-transparent mx-auto mt-4"
          ></motion.div>

          <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto mt-6">
            {t("experience.subtitle")}
          </motion.p>
        </motion.div>

        <VerticalTimeline className="custom-timeline" lineColor="rgba(0, 255, 127, 0.2)">
          {experiences.map((exp) => (
            <VerticalTimelineElement
              key={exp.id}
              className="vertical-timeline-element"
              contentStyle={{
                background: "rgba(17, 24, 39, 0.8)",
                color: "#fff",
                border: `1px solid ${getColor(exp.type)}40`,
                borderRadius: "0.75rem",
                boxShadow: `0 4px 20px -5px ${getColor(exp.type)}30`,
                backdropFilter: "blur(10px)",
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${getColor(exp.type)}40`,
              }}
              date={exp.date}
              iconStyle={{
                background: getColor(exp.type),
                color: "#000",
                boxShadow: `0 0 0 4px ${getColor(exp.type)}40, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)`,
              }}
              icon={getIcon(exp.type)}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="vertical-timeline-element-title font-bold text-xl text-white group-hover:text-neon-green transition-colors">
                    {exp.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle text-neon-green mt-1 flex items-center">
                    {exp.company}
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-gray-400 hover:text-neon-green transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </h4>

                  <div className="flex items-center text-gray-400 text-sm mt-2">
                    <Calendar size={14} className="mr-1" />
                    <span>{exp.date}</span>
                    <span className="mx-2">•</span>
                    <MapPin size={14} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-gray-300 my-4">{i18n.language === "en" ? exp.description.en : exp.description.es}</p>

                <div className="mt-2 mb-4">
                  <h5 className="text-sm font-semibold text-neon-green mb-2">Logros clave:</h5>
                  <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                    {(i18n.language === "en" ? exp.achievements.en : exp.achievements.es).map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-black/30 text-xs rounded-full border border-neon-green/20 text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-neon-green/20 rounded-full"></div>
      <div className="absolute top-20 right-20 w-16 h-16 border border-neon-green/20 rounded-full"></div>
    </section>
  )
}

export default ExperienceSection
