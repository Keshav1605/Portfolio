"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Contact() {
  const contacts = [
    { icon: Mail, label: "Email", value: "hello@keshav.dev", href: "mailto:hello@keshav.dev" },
    { icon: Github, label: "GitHub", value: "@keshavdev", href: "#" },
    { icon: Linkedin, label: "LinkedIn", value: "keshav", href: "#" },
    { icon: Twitter, label: "Twitter", value: "@keshavdev", href: "#" },
  ]

  return (
    <section id="contact" className="relative py-20 sm:py-32 bg-black overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 text-lg mb-8">
            Have a project in mind or just want to chat? Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        {/* Contact Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
              >
                <Icon className="w-6 h-6 mb-3 text-gray-400 group-hover:text-white transition-colors" />
                <div className="text-sm text-gray-400 mb-1">{contact.label}</div>
                <div className="font-semibold text-white group-hover:translate-x-1 transition-transform">
                  {contact.value}
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-base font-semibold rounded-lg">
            Start a Project
          </Button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-gray-800"
        >
          <p className="text-gray-500 text-sm">Built with React, Next.js, and Tailwind CSS. Deployed on Vercel.</p>
          <p className="text-gray-600 text-xs mt-2">© 2025 Keshav. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}
