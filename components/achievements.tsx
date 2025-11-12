"use client"
import { motion } from "framer-motion"
import { Trophy, Lightbulb, Camera, Code } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { achievements } from "@/data/certificates"

const iconMap = {
  trophy: Trophy,
  lightbulb: Lightbulb,
  camera: Camera,
  code: Code,
}

export function Achievements() {
  return (
    <section className="relative py-20 sm:py-32 bg-black overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Achievements & Highlights</h2>
          <p className="text-gray-400 text-lg">Key milestones and notable accomplishments</p>
        </motion.div>

        {/* Achievements List */}
        <div className="space-y-6">
          {achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/50 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <IconComponent className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-white">{achievement.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
