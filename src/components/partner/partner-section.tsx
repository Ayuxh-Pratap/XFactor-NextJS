"use client"

import { motion } from "framer-motion"
import { ParallaxText } from "./parallax-text"

const companies = [
  { id: 1, name: "OMG", logo: "OMG" },
  { id: 2, name: "KPMG", logo: "KPMG" },
  { id: 3, name: "McDonald's", logo: "McDonald's" },
  { id: 4, name: "TESCO", logo: "TESCO" },
  { id: 5, name: "SKECHERS", logo: "SKECHERS" },
  { id: 6, name: "HSBC", logo: "HSBC" },
]

export default function PartnerSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f7fb] py-[10%]">
      <div className="relative mx-auto w-full">
        {/* Top: Label, Heading, Subheading */}
        <motion.div
          className="max-w-7xl mx-auto px-4 md:px-8"
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
            • PARTNER
          </motion.p>

          <motion.h2
            className="mt-5 text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.05] tracking-tight text-[#0b0b12] max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            Trusted by businesses across the globe
          </motion.h2>

          <motion.p
            className="mt-6 text-base md:text-lg leading-7 text-[#0b0b12]/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            Enterprises • startups • founder-led companies • social impact
            organisations
          </motion.p>
        </motion.div>

        {/* Marquee Rows */}
        <div className="mt-12">
          {/* First Marquee Row */}
          <ParallaxText
            baseVelocity={5}
            wrapperClassName="bg-transparent"
            className="py-0 gap-0"
          >
            {companies.map((company) => (
              <div
                key={`first-${company.id}`}
                className="flex h-20 sm:h-24 min-w-[150px] sm:min-w-[180px] md:min-w-[200px] shrink-0 items-center justify-center border border-[#9F54E6]/20 bg-white px-4 sm:px-6 md:px-8"
              >
                <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-600 grayscale">
                  {company.logo}
                </span>
              </div>
            ))}
          </ParallaxText>

          {/* Second Marquee Row (reverse direction) */}
          <ParallaxText
            baseVelocity={-5}
            wrapperClassName="bg-transparent"
            className="py-0 gap-0"
          >
            {companies.map((company) => (
              <div
                key={`second-${company.id}`}
                className="flex h-20 sm:h-24 min-w-[150px] sm:min-w-[180px] md:min-w-[200px] shrink-0 items-center justify-center border border-[#9F54E6]/20 bg-white px-4 sm:px-6 md:px-8"
              >
                <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-600 grayscale">
                  {company.logo}
                </span>
              </div>
            ))}
          </ParallaxText>
        </div>
      </div>
    </section>
  )
}

