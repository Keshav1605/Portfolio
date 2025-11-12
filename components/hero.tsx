"use client"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-black to-gray-900 opacity-60"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Keshav
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-light">
            Java Backend Developer | Prompt Engineering Enthusiast
          </p>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Just a learner, a vibe coder — figuring things out one line at a time.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button
            onClick={() => handleSmoothScroll("projects")}
            className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-base font-semibold rounded-lg group cursor-pointer"
          >
            View My Work
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={() => handleSmoothScroll("contact")}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-900 px-8 py-6 text-base font-semibold rounded-lg bg-transparent cursor-pointer"
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-6 justify-center"
        >
          <a
            href="https://github.com/Keshav1605"
            className="text-gray-400 hover:text-white transition-colors p-3 rounded-full border border-gray-700 hover:border-gray-500"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/keshav-jaiswal16"
            className="text-gray-400 hover:text-white transition-colors p-3 rounded-full border border-gray-700 hover:border-gray-500"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:keshavjais1605@gmail.com"
            className="text-gray-400 hover:text-white transition-colors p-3 rounded-full border border-gray-700 hover:border-gray-500"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-gray-400 text-sm">Scroll to explore</div>
      </motion.div>
    </section>
  )
}
