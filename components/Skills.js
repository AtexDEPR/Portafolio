"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Layers, Palette } from "lucide-react"

const Skills = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Frontend skills
  const frontendSkills = ["React", "Angular", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind"]

  // Backend skills
  const backendSkills = ["Python", "Django", "Java", "Spring Boot", "SQL"]

  // Tools and other skills
  const toolsSkills = ["Git", "Docker", "Figma", "VS Code", "Scrum"]

  // Soft skills
  const softSkills = [
    t("skills.soft.teamwork"),
    t("skills.soft.leadership"),
    t("skills.soft.adaptability"),
    t("skills.soft.communication"),
    t("skills.soft.criticalThinking"),
    t("skills.soft.problemSolving"),
  ]

  // Function to render skill items with text only
  const renderSkillItems = (skills) => {
    return skills.map((skill) => (
      <div
        key={skill}
        className="flex items-center justify-center p-3 bg-black/50 rounded-lg border border-neon-green/10 hover:border-neon-green/30 transition-all duration-300"
      >
        <span className="text-sm text-center">{skill}</span>
      </div>
    ))
  }

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center flex items-center justify-center"
        >
          <span className="text-neon-green mr-2">#</span>
          {t("skills.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend Skills */}
          <div className="bg-dark-surface/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-neon-green/20 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 mr-3 text-neon-green">
                <Code />
              </div>
              <h3 className="text-xl font-semibold">{t("skills.frontend")}</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">{renderSkillItems(frontendSkills)}</div>
          </div>

          {/* Backend Skills */}
          <div className="bg-dark-surface/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-neon-green/20 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 mr-3 text-neon-green">
                <Database />
              </div>
              <h3 className="text-xl font-semibold">{t("skills.backend")}</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">{renderSkillItems(backendSkills)}</div>
          </div>

          {/* Tools & Others */}
          <div className="bg-dark-surface/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-neon-green/20 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 mr-3 text-neon-green">
                <Layers />
              </div>
              <h3 className="text-xl font-semibold">{t("skills.tools")}</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">{renderSkillItems(toolsSkills)}</div>
          </div>

          {/* Soft Skills */}
          <div className="bg-dark-surface/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-neon-green/20 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 mr-3 text-neon-green">
                <Palette />
              </div>
              <h3 className="text-xl font-semibold">{t("skills.soft.title")}</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">{renderSkillItems(softSkills)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
