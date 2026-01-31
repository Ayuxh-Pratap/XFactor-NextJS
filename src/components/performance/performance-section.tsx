"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "L'Angélus Group, Singapore",
    description:
      "+872% D2C paid revenue | +500% social bookings | +10% online bookings",
  },
  {
    id: 2,
    title: "AI-Native Marketing Company",
    description:
      "$1.1M new pipeline | $150K new revenue 7,500+ TAM | 100 active prospect",
  },
  {
    id: 3,
    title: "Social Impact Work",
    description:
      "Purpose and narrative transformation for I-Saksham & Sauramandala Foundation.",
  },
  {
    id: 4,
    title: "Tech Startup Scaling",
    description:
      "3x revenue growth | 200% team expansion | Market entry in 3 new regions",
  },
]

const testimonials = [
  {
    id: 1,
    title: "Enterprise Client",
    description:
      "XFractor transformed our go-to-market strategy. Their fractional leadership model delivered results faster than we imagined.",
  },
  {
    id: 2,
    title: "Growth Stage Company",
    description:
      "The expertise we gained through XFractor was invaluable. They helped us scale operations while maintaining our culture and values.",
  },
  {
    id: 3,
    title: "Startup Founder",
    description:
      "Having access to senior leadership without the full-time commitment was exactly what we needed. Highly recommend their approach.",
  },
  {
    id: 4,
    title: "Industry Leader",
    description:
      "XFractor's team brought strategic clarity and execution excellence. They're true operators who understand how to drive results.",
  },
]

export default function PerformanceSection() {
  const [activeTab, setActiveTab] = useState<"testimonials" | "case-studies">(
    "case-studies"
  )
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return

    const scrollAmount = 400
    const currentScroll = scrollContainerRef.current.scrollLeft
    const targetScroll =
      direction === "left"
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount

    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    })
  }

  const items = activeTab === "case-studies" ? caseStudies : testimonials

  return (
    <section className="relative overflow-hidden bg-[#9F54E6]/10 py-[10%]">
      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8">
        {/* Top: Label and Heading */}
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
            • PERFORMANCE
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
        </motion.div>

        {/* Controls: Toggle Buttons and Navigation Arrows */}
        <motion.div
          className="mt-8 flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Toggle Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("testimonials")}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                activeTab === "testimonials"
                  ? "bg-[#7c2cff] text-white"
                  : "bg-gray-200 text-[#0b0b12] border border-gray-300"
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => setActiveTab("case-studies")}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                activeTab === "case-studies"
                  ? "bg-[#7c2cff] text-white"
                  : "bg-gray-200 text-[#0b0b12] border border-gray-300"
              }`}
            >
              Case studies
            </button>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-[#7c2cff] transition-colors hover:bg-gray-50"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7c2cff] text-white transition-colors hover:bg-[#6b21a8]"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        {/* Separator */}
        <div className="my-8 h-px w-full bg-gray-200" />


        {/* Content Carousel */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className="min-w-[350px] max-w-[400px] p-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <h3 className="text-lg font-semibold text-[#0b0b12]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#0b0b12]/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

