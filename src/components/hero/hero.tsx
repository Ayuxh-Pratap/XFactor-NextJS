"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar/navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Video background */}
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

      {/* Gradient overlay for readability */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#7c2cff]/40 via-[#7a2aff]/30 to-[#4c1d95]/50"
        aria-hidden
      />

      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,#ffffff40,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,#ff6bff3b,transparent_65%)] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        {/* Hero body pinned to bottom-left */}
        <main className="mx-auto flex w-full max-w-6xl flex-1 items-end px-4 pb-16 sm:pb-20 md:pb-[10%] md:px-8">
          {/* Left: Copy */}
          <section className="max-w-xl space-y-4 sm:space-y-6 text-left">
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                >
                  Fractional Leadership.
                </motion.span>
                <motion.span
                  className="block text-white/90"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                >
                  Real Outcomes.
                </motion.span>
              </h1>
              <motion.p
                className="max-w-xl text-base text-white/80 md:text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                Senior expertise on demand. Fast, flexible and built for modern
                business. Unlock strategic momentum without the overhead of a
                full-time executive team.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-4 pt-2 sm:flex-row"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <Button
                size="lg"
                className="h-11 rounded-full bg-[#9F54E6] px-7 text-sm font-semibold text-white shadow-lg cursor-pointer transition-colors hover:bg-[#7d2fbe]"
              >
                Book a discovery call
              </Button>
              <Link
                href="#how-fractional-works"
                className="inline-flex items-center text-sm font-semibold text-white underline decoration-white/50 underline-offset-4 transition-colors hover:decoration-white/100"
              >
                How fractional leadership works
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Hero


