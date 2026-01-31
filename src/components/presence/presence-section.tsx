"use client"

import { motion } from "framer-motion"

const locations = [
  {
    id: 1,
    name: "Singapore",
    flag: "🇸🇬",
  },
  {
    id: 2,
    name: "India",
    flag: "🇮🇳",
  },
  {
    id: 3,
    name: "UAE",
    flag: "🇦🇪",
  },
]

export default function PresenceSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f7fb]">
      <div className="relative">
        {/* Top: Quote Container */}
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="rounded-t-2xl w-full mx-auto bg-[#9F54E6]/10 px-4 py-3 md:px-6 md:py-6">
            <motion.p
              className="text-center text-lg md:text-xl lg:text-2xl font-bold leading-tight text-[#0b0b12]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
               "Leadership when you need it. Precision without the permanence."
            </motion.p>
          </div>
        </motion.div>

        {/* Bottom: Presence Bar */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#5b21b6] px-4 sm:px-6 md:px-8 py-4 md:py-5">
            {/* Left: PRESENCE Label */}
            <div className="text-sm md:text-base font-medium uppercase tracking-wider text-white">
              PRESENCE
            </div>

            {/* Right: Locations with Flags */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
              {locations.map((location, index) => (
                <div key={location.id} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    {/* Flag Icon */}
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/20 text-base sm:text-lg md:text-xl shrink-0">
                      {location.flag}
                    </div>
                    {/* Country Name */}
                    <span className="text-xs sm:text-sm md:text-base font-medium text-white whitespace-nowrap">
                      {location.name}
                    </span>
                  </div>
                  {/* Separator */}
                  {index < locations.length - 1 && (
                    <div className="h-4 sm:h-6 w-[1px] bg-white/40 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

