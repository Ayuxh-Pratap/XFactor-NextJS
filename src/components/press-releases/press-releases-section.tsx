"use client"

import { motion } from "framer-motion"

const featuredArticle = {
  id: 1,
  date: "22 NOV, 2025",
  title: "Beyond the corner office: the new age of on-demand leadership",
  snippet:
    "Full-time c-suite roles aren't the only way to lead with impact anymore. businesses today need flexibility...",
  image: "/placeholder-article.jpg",
}

const articles = [
  {
    id: 2,
    date: "22 NOV, 2025",
    title: "When growth becomes a system not a struggle, not a struggle",
    snippet:
      "Full-time c-suite roles aren't the only way to lead with impact anymore. businesses today need flexibility...",
  },
  {
    id: 3,
    date: "22 NOV, 2025",
    title: "When growth becomes a system not a struggle, not a struggle",
    snippet:
      "Full-time c-suite roles aren't the only way to lead with impact anymore. businesses today need flexibility...",
  },
]

export default function PressReleasesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f7fb] py-[10%]">
      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8">
        {/* Top: Label, Heading, Subheading */}
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
            • PRESS RELEASES
          </motion.p>

          <motion.h2
            className="mt-5 text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.05] tracking-tight text-[#0b0b12]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            Proven outcomes across sectors
          </motion.h2>

          <motion.p
            className="mt-6 text-base md:text-lg leading-7 text-[#0b0b12]/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            Real leadership. real results.
          </motion.p>
        </motion.div>

        {/* Separator */}
        <div className="my-8 h-px w-full bg-gray-200" />

        {/* Content Section */}
        <motion.div
          className="grid gap-8 md:grid-cols-[1.5fr_1fr]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Left: Featured Article */}
          <div className="rounded-2xl bg-[#9F54E6]/15 p-4 sm:p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              {/* Image */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-200 order-2 md:order-1">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                  <span className="text-xs sm:text-sm text-gray-400">Image placeholder</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 sm:space-y-4 order-1 md:order-2">
                <p className="text-xs font-medium uppercase tracking-wider text-[#0b0b12]/60">
                  {featuredArticle.date}
                </p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight text-[#0b0b12]">
                  {featuredArticle.title}
                </h3>
                <p className="text-xs sm:text-sm leading-6 text-[#0b0b12]/70">
                  {featuredArticle.snippet}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Sidebar Articles */}
          <div className="space-y-0">
            {articles.map((article, index) => (
              <div key={article.id}>
                <div className="py-4 sm:py-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#0b0b12]/60">
                    {article.date}
                  </p>
                  <h3 className="mt-2 text-base sm:text-lg font-semibold leading-tight text-[#0b0b12]">
                    {article.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 text-[#0b0b12]/70">
                    {article.snippet}
                  </p>
                </div>
                {/* Separator between articles */}
                {index < articles.length - 1 && (
                  <div className="h-px w-full bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

