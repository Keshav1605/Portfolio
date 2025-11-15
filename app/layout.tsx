import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Loader from "@/components/ui/loader"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Keshav - Full Stack Developer & Creative Technologist",
  description:
    "Explore my portfolio of interactive web experiences, 3D integrations, and full-stack projects. Building beautiful digital experiences with React, Next.js, and modern web technologies.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "https://img.icons8.com/?size=100&id=okOWzJV55XPz&format=png&color=000000",
        type: "image/png",
      },
    ],
    apple: "https://img.icons8.com/?size=180&id=okOWzJV55XPz&format=png&color=000000",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Loader />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
