"use client"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Certificates } from "@/components/certificates"
import { Achievements } from "@/components/achievements"

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Achievements />
      <Contact />
    </main>
  )
}
