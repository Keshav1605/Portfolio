"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Portfolio",
    description: "A immersive portfolio experience featuring Spline 3D models and smooth animations.",
    tags: ["React", "Three.js", "Spline", "Framer Motion"],
    github: "https://github.com/Keshav1605/portfolio",
    live: "https://keshavjaiswal.xyz",
    featured: true,
  },
  {
    title: "Astroguard",
    description: "Trained YOLO-v8 model with duality ai falcon datasset of space station images.",
    tags: ["Python", "YoloV8", "Duality AI"],
    github: "https://github.com/Keshav1605/astroguard",
    live: "#",
  },
  {
    title: "Revenue-Rescue",
    description: "AI based analysis of company's dataset and predicting customer churn and helping company saving it",
    tags: ["Next.js", "OpenAI", "Node.js", "API"],
    github: "https://github.com/Keshav1605/Revenue-Rescue",
    live: "https://revenue-rescue.vercel.app/",
  },
  {
    title: "Uber Clone",
    description: "Uber Clone app.",
    tags: ["React", "TypeScript", "Storybook", "Vitest"],
    github: "https://github.com/Keshav1605/Uber-Clone",
    live: "#",
  },
  // {
  //   title: "Data Analytics Dashboard",
  //   description: "Real-time data visualization dashboard with interactive charts and custom metrics.",
  //   tags: ["Next.js", "Recharts", "Drizzle ORM", "PostgreSQL"],
  //   github: "#",
  //   live: "#",
  // },
  // {
  //   title: "E-commerce Platform",
  //   description: "Full-stack e-commerce solution with product management, payments, and inventory.",
  //   tags: ["Next.js", "Stripe", "Prisma", "MongoDB"],
  //   github: "#",
  //   live: "#",
  // },
]

export function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-32 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg">A selection of my latest work and side projects</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/50 group overflow-hidden">
                <CardHeader>
                  <CardTitle className="group-hover:text-white transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6 pt-6 border-t border-gray-800">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
