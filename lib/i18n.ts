import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// English translations
const enTranslations = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    resume: "Resume",
    language: "Language",
  },
  hero: {
    tagline: "I design the code of the future with ingenuity, purpose, and a style that can't be copied",
    intro:
      "Software developer with technical training at Campuslands and a background in audiovisuals. I create digital solutions that combine functionality and design, from web platforms like Camello to automation systems in Minecraft. My goal: to create technology that impacts and leaves a mark.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    badge: "Software Developer",
  },
  about: {
    title: "About Me",
    intro:
      "I'm a curious and creative developer, eager to create digital experiences that truly make a difference. I enjoy learning new things, solving problems, and working in teams. I seek to grow every day and leave my mark with what I do. I consider myself honest, adaptable, and always with good energy. I dream of building projects that positively impact the world. I enjoy challenges and get excited seeing my ideas take shape. This is just the beginning of everything I want to achieve.",
    education:
      "I've led teams using Scrum methodology for projects like landing pages and web platforms. My approach combines programming logic with visual design principles to create complete solutions.",
    purpose: "My goal is to create technology that impacts and leaves a mark.",
    location: "Based in",
    specialization: "Areas of specialization",
    skills: {
      frontend: {
        title: "Frontend Development",
        description:
          "I build interfaces with React and JavaScript/TypeScript. I've developed projects like Camello and web mini-games with a focus on user experience.",
      },
      backend: {
        title: "Backend Development",
        description:
          "I implement systems with Spring Boot and Python. I've created APIs for Camello and developed a chatbot for a fast food chain.",
      },
      design: {
        title: "UX/UI Design",
        description:
          "I apply my audiovisual training to create intuitive interfaces. I use Figma to prototype before coding.",
      },
      learning: {
        title: "Continuous Learning",
        description:
          "I stay updated with blogs like Dev.to, channels like Fireship, and courses on platforms like Frontend Masters and Platzi.",
      },
      bilingual: {
        title: "Bilingual Communication",
        description:
          "I handle English at an intermediate-advanced level, allowing me to collaborate in international teams and access technical documentation.",
      },
    },
  },
  skills: {
    title: "Skills",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools & Others",
    soft: {
      title: "Soft Skills",
      teamwork: "Teamwork",
      leadership: "Leadership",
      adaptability: "Adaptability",
      communication: "Communication",
      criticalThinking: "Critical Thinking",
      problemSolving: "Problem Solving",
      empathy: "Empathy",
    },
  },
  projects: {
    title: "Projects",
    subtitle: "Projects I've developed combining design, logic, and functionality to create complete digital solutions",
    filters: {
      all: "All Projects",
      frontend: "Frontend",
      backend: "Backend",
      fullstack: "Full Stack",
    },
    achievements: "Key Achievements:",
    learnings: "What I Learned:",
    showDetails: "Show details",
    hideDetails: "Hide details",
    noProjects: "No projects found in this category yet.",
  },
  experience: {
    title: "Experience",
    subtitle: "My academic journey and projects that have shaped my profile as a developer",
    keyAchievements: "Key achievements:",
  },
  contact: {
    title: "Contact",
    subtitle: "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
    form: {
      title: "Send me a message",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      sending: "Sending...",
    },
    connect: {
      title: "Let's connect",
      message: "Prefer connecting through social media? Find me on these platforms:",
    },
    location: {
      title: "Location",
      based: "Based in",
    },
    success: {
      title: "Message sent!",
      message: "Thank you for your message. I'll get back to you soon.",
    },
    error: {
      title: "Error",
      message: "There was an error sending your message. Please try again later.",
    },
  },
  footer: {
    tagline: "Creating digital experiences that leave a mark",
    quickLinks: "Quick Links",
    contact: "Contact Info",
    location: "Bucaramanga, Colombia",
    downloadResume: "Download Resume",
    rights: "All rights reserved.",
  },
}

// Spanish translations
const esTranslations = {
  nav: {
    home: "Inicio",
    about: "Sobre Mí",
    skills: "Habilidades",
    projects: "Proyectos",
    experience: "Experiencia",
    contact: "Contacto",
    resume: "Currículum",
    language: "Idioma",
  },
  hero: {
    tagline: "Diseño el código del futuro con ingenio, propósito y un estilo que no se copia",
    intro:
      "Desarrollador con formación técnica en Campuslands y background en audiovisuales. Creo soluciones digitales que combinan funcionalidad y diseño, desde plataformas web como Camello hasta sistemas de automatización en Minecraft. Mi objetivo: crear tecnología que impacte y deje huella.",
    viewProjects: "Ver Proyectos",
    contactMe: "Contáctame",
    badge: "Desarrollador de Software",
  },
  about: {
    title: "Sobre Mí",
    intro:
      "Soy un desarrollador curioso y creativo, con ganas de crear experiencias digitales que realmente marquen la diferencia. Me gusta aprender cosas nuevas, resolver problemas y trabajar en equipo. Busco crecer cada día y dejar huella con lo que hago. Me considero alguien sincero, adaptable y siempre con buena energía. Sueño con construir proyectos que impacten de forma positiva en el mundo. Disfruto los retos y me emociona ver mis ideas tomar forma. Este es solo el comienzo de todo lo que quiero lograr.",
    education:
      "He liderado equipos en metodología Scrum para proyectos como landing pages y plataformas web. Mi enfoque combina la lógica de programación con principios de diseño visual para crear soluciones completas.",
    purpose: "Mi objetivo es crear tecnología que impacte y deje huella.",
    location: "Ubicado en",
    specialization: "Áreas de especialización",
    skills: {
      frontend: {
        title: "Desarrollo Frontend",
        description:
          "Construyo interfaces con React y JavaScript/TypeScript. He desarrollado proyectos como Camello y minijuegos web con enfoque en experiencia de usuario.",
      },
      backend: {
        title: "Desarrollo Backend",
        description:
          "Implemento sistemas con Spring Boot y Python. He creado APIs para Camello y desarrollado un chatbot para una cadena de comida rápida.",
      },
      design: {
        title: "Diseño UX/UI",
        description:
          "Aplico mi formación en audiovisuales para crear interfaces intuitivas. Utilizo Figma para prototipar antes de codificar.",
      },
      learning: {
        title: "Aprendizaje Continuo",
        description:
          "Me mantengo actualizado con blogs como Dev.to, canales como Fireship, y cursos en plataformas como Frontend Masters y Platzi.",
      },
      bilingual: {
        title: "Comunicación Bilingüe",
        description:
          "Manejo inglés a nivel intermedio-avanzado, permitiéndome colaborar en equipos internacionales y acceder a documentación técnica.",
      },
    },
  },
  skills: {
    title: "Habilidades",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Herramientas y Otros",
    soft: {
      title: "Habilidades Blandas",
      teamwork: "Trabajo en equipo",
      leadership: "Liderazgo",
      adaptability: "Adaptabilidad",
      communication: "Comunicación",
      criticalThinking: "Pensamiento crítico",
      problemSolving: "Resolución de problemas",
      empathy: "Empatía",
    },
  },
  projects: {
    title: "Proyectos",
    subtitle:
      "Proyectos que he desarrollado combinando diseño, lógica y funcionalidad para crear soluciones digitales completas",
    filters: {
      all: "Todos los Proyectos",
      frontend: "Frontend",
      backend: "Backend",
      fullstack: "Full Stack",
    },
    achievements: "Logros Clave:",
    learnings: "Lo que Aprendí:",
    showDetails: "Mostrar detalles",
    hideDetails: "Ocultar detalles",
    noProjects: "Aún no hay proyectos en esta categoría.",
  },
  experience: {
    title: "Experiencia",
    subtitle: "Mi trayectoria académica y proyectos que han formado mi perfil como desarrollador",
    keyAchievements: "Logros clave:",
  },
  contact: {
    title: "Contacto",
    subtitle:
      "No dudes en contactarme si estás buscando un desarrollador, tienes una pregunta o simplemente quieres conectar.",
    form: {
      title: "Envíame un mensaje",
      name: "Tu Nombre",
      email: "Tu Email",
      message: "Tu Mensaje",
      send: "Enviar Mensaje",
      sending: "Enviando...",
    },
    connect: {
      title: "Conectemos",
      message: "¿Prefieres conectar a través de redes sociales? Encuéntrame en estas plataformas:",
    },
    location: {
      title: "Ubicación",
      based: "Ubicado en",
    },
    success: {
      title: "¡Mensaje enviado!",
      message: "Gracias por tu mensaje. Te responderé pronto.",
    },
    error: {
      title: "Error",
      message: "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.",
    },
  },
  footer: {
    tagline: "Creando experiencias digitales que dejan huella",
    quickLinks: "Enlaces Rápidos",
    contact: "Información de Contacto",
    location: "Bucaramanga, Colombia",
    downloadResume: "Descargar Currículum",
    rights: "Todos los derechos reservados.",
  },
}

// Initialize i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    es: {
      translation: esTranslations,
    },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
})

export default i18n
