"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  BarChart3,
  Target,
  Settings,
  DollarSign,
} from "lucide-react"

const proficiencies = [
  {
    id: 1,
    title: "Strategy & planning",
    shortDescription: "Roadmaps, business models, scale strategy.",
    fullDescription:
      "Building comprehensive strategic frameworks that align with your business goals and drive sustainable growth.",
    icon: Target,
  },
  {
    id: 2,
    title: "Product & operations",
    shortDescription: "Systems, processes, cross-functional execution.",
    fullDescription:
      "Streamlining operations and building scalable infrastructure that enables your team to execute efficiently.",
    icon: Settings,
  },
  {
    id: 3,
    title: "Brand & go-to-market",
    shortDescription:
      "Marketing engines, storytelling, demand generation.",
    fullDescription:
      "Accelerating market presence through strategic initiatives and data-driven insights.",
    icon: BarChart3,
  },
  {
    id: 4,
    title: "Finance & commercial",
    shortDescription:
      "Unit economics, pricing, governance frameworks.",
    fullDescription:
      "Establishing financial discipline and commercial strategies that maximize value creation.",
    icon: DollarSign,
  },
]

export default function ProficienciesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden bg-[#f6f7fb] py-[10%]">
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60
          [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)]
          [background-size:44px_44px]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
          {/* LEFT CONTENT — UNCHANGED */}
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] text-[#7c2cff]">
              • PROFICIENCIES
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.05] tracking-tight text-[#0b0b12]">
              C-suite expertise without
              the full-time overhead.
            </h2>

            <p className="mt-6 max-w-md text-base md:text-lg leading-7 text-[#0b0b12]/70">
              XFractor embeds experienced operators into your business—bringing
              clarity, structure, and execution momentum.
            </p>
          </div>

          {/* RIGHT — CARDS */}
          <div className="grid grid-cols-2 gap-4">
            {proficiencies.map((item) => {
              const Icon = item.icon
              const isHovered = hoveredId === item.id

              return (
                <motion.div
                  key={item.id}
                  className="relative cursor-pointer"
                  onHoverStart={() => setHoveredId(item.id)}
                  onHoverEnd={() => setHoveredId(null)}
                >
                  <motion.div
                    className="relative h-[280px] rounded-2xl p-6 overflow-hidden"
                    animate={{
                      background: isHovered
                        ? "linear-gradient(to bottom, #5b21b6, #7c2cff)"
                        : "#f5f5f5",
                      borderColor: isHovered
                        ? "transparent"
                        : "rgba(124,44,255,0.35)",
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    style={{
                      borderWidth: "1px",
                      borderStyle: "solid",
                    }}
                  >
                    {/* CONTENT CONTAINER - Animates from bottom to top */}
                    <motion.div
                      className="absolute inset-0 p-6 flex flex-col"
                      animate={{
                        justifyContent: isHovered ? "flex-start" : "flex-end",
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      {/* Icon - only visible when hovered */}
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.1,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          className="mb-4"
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </motion.div>
                      )}

                      {/* Title */}
                      <motion.h3
                        className="text-lg font-semibold mb-2"
                        animate={{
                          color: isHovered ? "#ffffff" : "#0b0b12",
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                      >
                        {item.title}
                      </motion.h3>

                      {/* Short Description */}
                      <motion.p
                        className="text-sm mb-3"
                        animate={{
                          color: isHovered ? "#ffffff" : "rgba(11, 11, 18, 0.7)",
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                      >
                        {item.shortDescription}
                      </motion.p>

                      {/* Full Description - only visible when hovered */}
                      {isHovered && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.15,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          className="text-sm leading-6 text-white/90"
                        >
                          {item.fullDescription}
                        </motion.p>
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}