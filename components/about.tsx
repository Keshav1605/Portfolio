"use client"
import { motion } from "framer-motion"
import { Code2, Palette, Zap } from "lucide-react"

export function About() {
  const skills = [
    {
      icon: Code2,
      title: "Development",
      items: ["Learning Java", "Basic HTML & CSS", "JavaScript fundamentals", "Problem solving"],
    },
    {
      icon: Palette,
      title: "Design",
      items: ["Simple layouts", "Color & typography basics", "Figma exploration", "Sketching ideas"],
    },
    {
      icon: Zap,
      title: "Growth",
      items: ["Responsive pages", "Performance basics", "Accessibility awareness", "Eager to learn"],
    },
  ]

  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-b from-black to-gray-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I’m a curious learner who loves turning ideas into simple, meaningful projects.
            Currently diving into Java while exploring how code and design come together.
            I learn by doing — experimenting, breaking, fixing, and growing with every line I write.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <Icon className="w-8 h-8 mb-4 text-white" />
                <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-400 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
