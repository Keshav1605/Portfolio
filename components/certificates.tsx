"use client"
import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { certificates } from "@/data/certificates"

export function Certificates() {
  return (
    <section className="relative py-20 sm:py-32 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Certifications & Courses</h2>
          <p className="text-gray-400 text-lg">Professional credentials and continuous learning</p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/50 hover:scale-105 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Award className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-white">{cert.title}</CardTitle>
                  <CardDescription className="text-gray-400">{cert.organization}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between h-full">
                  <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
