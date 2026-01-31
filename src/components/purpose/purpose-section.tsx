"use client"

import { motion } from "framer-motion"
import VideoCapsule from "./video-capsule"

export function PurposeSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f7fb] pt-[10%]">
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:44px_44px]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-8">
        {/* Top container: label + heading */}
        <motion.div
          className="max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.p
            className="text-xs font-semibold tracking-[0.35em] text-[#7c2cff]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            — PURPOSE
          </motion.p>

          <motion.h2
            className="mt-5 text-4xl md:text-5xl lg:text-[4.3rem] font-semibold leading-[1.05] tracking-tight text-[#0b0b12]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="text-[#9F54E6]">Business Needs</span> Have Changed.
            <br />
            Leadership Models Haven't.
          </motion.h2>
        </motion.div>

        {/* Bottom container: split capsule + paragraph */}
        <motion.div
          className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <VideoCapsule />
          </motion.div>

          <motion.div
            className="md:pl-2 text-center md:text-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="max-w-md mx-auto md:mx-0 text-base md:text-md lg:text-lg leading-7 text-[#0b0b12]/70">
              Fractional leadership gives you the expertise you need—faster,
              leaner, and with measurable impact—an agile way to grow.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="relative mx-auto w-full max-w-7xl mt-12 md:mt-32 lg:mt-[20rem] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden px-4 md:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        >
          <source src="/hero/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Purple gradient overlay from bottom to top */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#4c1d95] via-[#4c1d95]/50 to-transparent pointer-events-none"
          aria-hidden
        />

        {/* Dark purple overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/15 px-4 md:px-6 lg:px-12 py-4 md:py-6 rounded-2xl my-2 md:my-4 mx-2 md:mx-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 max-w-7xl mx-auto">
            <div className="font-bold text-white text-base sm:text-lg md:text-xl">
              Rising talent costs
            </div>
            <div className="flex items-center gap-3 sm:gap-4 flex-1 justify-end">
              <p className="text-white text-xs sm:text-sm md:text-base max-w-2xl text-left sm:text-right">
                Full-time executives are expensive, slow to hire, and hard to retain.
              </p>
              <div className="flex flex-col gap-1 shrink-0">
                <div className="w-1 h-1 rounded-full bg-white/70" />
                <div className="w-1 h-1 rounded-full bg-white/70" />
                <div className="w-1 h-1 rounded-full bg-white/70" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default PurposeSection


