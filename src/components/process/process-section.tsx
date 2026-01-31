"use client"

import { motion } from "framer-motion"

export default function ProcessSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center py-20 sm:py-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero/process.png')",
        }}
        aria-hidden
      />

      {/* Purple gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#4c1d95]/80 via-[#7c2cff]/70 to-[#5b21b6]/90 opacity-50"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 md:px-8 text-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Label */}
          <motion.p
            className="text-xs font-semibold tracking-[0.35em] text-white/90"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            • PROCESS
          </motion.p>

          {/* Main Title */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight text-white px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              The XFractor Way
            </motion.span>
            <motion.span
              className="block mt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              From Insight To Impact.
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            Fast to onboard, easy to scale. designed for impact.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

