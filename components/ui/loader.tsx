'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2500) // show for 2.5 seconds
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-center"
          >
            <motion.div
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="bg-linear-to-r from-neutral-100 via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
                Keshav&nbsp;Jaiswal
              </span>
            </motion.div>

            {/* Animated underline */}
            <motion.div
              className="h-1 mx-auto bg-linear-to-r from-neutral-300 to-neutral-700 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            />

            {/* Subtitle with fade-in */}
            <motion.p
              className="mt-6 text-neutral-400 text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Full Stack Developer & Creative Technologist
            </motion.p>

            {/* Pulsing dot indicator */}
            <motion.div
              className="mt-8 flex justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[0, 1, 2].map((dot) => (
                <motion.div
                  key={dot}
                  className="w-2 h-2 bg-neutral-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: dot * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
