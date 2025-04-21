"use client"

import type React from "react"

import { useState, type FormEvent, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useToast } from "@/hooks/use-toast"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send, CheckCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

// Define the EmailJS configuration type
type EmailJSConfig = {
  serviceId: string
  templateId: string
  publicKey: string
}

const Contact = () => {
  const { t } = useTranslation()
  const { toast } = useToast()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // EmailJS configuration
  const [emailJSConfig, setEmailJSConfig] = useState<EmailJSConfig>({
    serviceId: "service_j8joz3e",
    templateId: "template_ud3il2b",
    publicKey: "fq9IJr9IPVaEHZNe8",
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [isConfigured, setIsConfigured] = useState(true)

  // Check if EmailJS is configured from localStorage on component mount
  useEffect(() => {
    const storedConfig = localStorage.getItem("emailjs_config")
    if (storedConfig) {
      try {
        const config = JSON.parse(storedConfig)
        setEmailJSConfig(config)
        setIsConfigured(true)
      } catch (error) {
        console.error("Error parsing EmailJS config:", error)
      }
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleConfigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEmailJSConfig((prev) => ({ ...prev, [name]: value }))
  }

  const saveConfig = () => {
    if (emailJSConfig.serviceId && emailJSConfig.templateId && emailJSConfig.publicKey) {
      localStorage.setItem("emailjs_config", JSON.stringify(emailJSConfig))
      setIsConfigured(true)
      toast({
        title: "Configuration Saved",
        description: "EmailJS configuration has been saved successfully.",
      })
    } else {
      toast({
        title: "Configuration Error",
        description: "Please fill in all EmailJS configuration fields.",
        variant: "destructive",
      })
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        emailJSConfig.serviceId,
        emailJSConfig.templateId,
        {
          to_name: "Daniel", // Recipient name (you can customize this)
          nombre: formData.name,
          email: formData.email,
          mensaje: formData.message,
        },
        emailJSConfig.publicKey,
      )

      toast({
        title: t("contact.success.title"),
        description: t("contact.success.message"),
      })

      setIsSent(true)

      // Reset form
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
        })
        setIsSent(false)
      }, 3000)
    } catch (error) {
      console.error("Error sending email:", error)
      toast({
        title: t("contact.error.title"),
        description: t("contact.error.message"),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} className="icon-animate" />,
      url: "https://github.com/AtexDEPR",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} className="icon-animate" />,
      url: "https://www.linkedin.com/in/daniel-pereira-8b090a358/",
    },
    {
      name: "Email",
      icon: <Mail size={24} className="icon-animate" />,
      url: "mailto:danielpereira.json@gmail.com",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4 responsive-container">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 text-center flex items-center justify-center"
        >
          <span className="text-neon-green mr-2">#</span>
          {t("contact.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          {t("contact.subtitle")}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 responsive-grid">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-dark-surface/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800"
          >
            {!isConfigured ? (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4 text-neon-green">Configure EmailJS</h3>
                <p className="text-gray-400 mb-4">
                  Please enter your EmailJS configuration details to enable the contact form:
                </p>
                <div>
                  <label htmlFor="serviceId" className="block text-sm font-medium text-gray-300 mb-1">
                    Service ID
                  </label>
                  <Input
                    id="serviceId"
                    name="serviceId"
                    value={emailJSConfig.serviceId}
                    onChange={handleConfigChange}
                    placeholder="e.g., service_abc123"
                    className="bg-dark-surface/70 border-gray-700 focus:border-neon-green"
                  />
                </div>
                <div>
                  <label htmlFor="templateId" className="block text-sm font-medium text-gray-300 mb-1">
                    Template ID
                  </label>
                  <Input
                    id="templateId"
                    name="templateId"
                    value={emailJSConfig.templateId}
                    onChange={handleConfigChange}
                    placeholder="e.g., template_xyz789"
                    className="bg-dark-surface/70 border-gray-700 focus:border-neon-green"
                  />
                </div>
                <div>
                  <label htmlFor="publicKey" className="block text-sm font-medium text-gray-300 mb-1">
                    Public Key
                  </label>
                  <Input
                    id="publicKey"
                    name="publicKey"
                    value={emailJSConfig.publicKey}
                    onChange={handleConfigChange}
                    placeholder="e.g., Abc123XyzPQR"
                    className="bg-dark-surface/70 border-gray-700 focus:border-neon-green"
                  />
                </div>
                <button onClick={saveConfig} className="metallic-button primary w-full">
                  <span className="button-text flex items-center justify-center">
                    <Send className="send-icon" size={18} />
                    Save Configuration
                  </span>
                </button>
                <p className="text-xs text-gray-500 mt-2">
                  Note: Configuration will be saved in your browser's local storage.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold mb-4 text-neon-green">{t("contact.form.title")}</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      {t("contact.form.name")}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-dark-surface/70 border-gray-700 focus:border-neon-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      {t("contact.form.email")}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-dark-surface/70 border-gray-700 focus:border-neon-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      {t("contact.form.message")}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-dark-surface/70 border-gray-700 focus:border-neon-green"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`send-button ${isSubmitting ? "sending" : ""} ${isSent ? "sent" : ""}`}
                  >
                    <span className="button-text flex items-center justify-center">
                      {!isSent ? (
                        <>
                          <Send className="send-icon" size={18} />
                          {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
                        </>
                      ) : (
                        <>
                          <CheckCircle className="send-icon" size={18} />
                          {t("contact.success.title")}
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-between"
          >
            <div className="bg-dark-surface/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 mb-6">
              <h3 className="text-xl font-semibold mb-4 text-neon-green">{t("contact.connect.title")}</h3>
              <p className="text-gray-400 mb-6">{t("contact.connect.message")}</p>
              <div className="flex flex-col space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-neon-green transition-colors"
                  >
                    <div className="p-2 rounded-full bg-dark-surface">{link.icon}</div>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-dark-surface/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-neon-green">{t("contact.location.title")}</h3>
              <p className="text-gray-400 mb-2">{t("contact.location.based")}</p>
              <p className="text-white font-medium">Bucaramanga, Colombia</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
