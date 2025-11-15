"use client"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Script from "next/script"
import { BackgroundPathsAnimation } from "./background-paths"

export function Hero() {
  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 dark:bg-neutral-950">
      {/* Animated Background Paths */}
      <BackgroundPathsAnimation />

      <Script src="https://unpkg.com/@splinetool/viewer@1.11.4/build/spline-viewer.js" type="module" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-screen">
          {/* Center Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/80">
                Keshav
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-light">
              Java Backend Developer | Prompt Engineering Enthusiast
            </p>

            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Just a learner, a vibe coder — figuring things out one line at a time.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center"
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
                className="border-gray-600 text-gray-300 hover:bg-neutral-900 px-8 py-6 text-base font-semibold rounded-lg bg-transparent cursor-pointer"
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
          </motion.div>


        </div>
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
