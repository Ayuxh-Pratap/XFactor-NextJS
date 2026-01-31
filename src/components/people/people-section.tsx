"use client"

import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    id: 1,
    name: "Akshay Trivedi",
    role: "Strategy & Growth",
    linkedinUrl: "#",
    image: "/placeholder-avatar.jpg",
  },
  {
    id: 2,
    name: "Matthias Yeo",
    role: "Technology & Innovation",
    linkedinUrl: "#",
    image: "/placeholder-avatar.jpg",
  },
  {
    id: 3,
    name: "Gayatri Gogate",
    role: "Brand & Marketing",
    linkedinUrl: "#",
    image: "/placeholder-avatar.jpg",
  },
  {
    id: 4,
    name: "Sunita Kaur",
    role: "Leadership & Culture",
    linkedinUrl: "#",
    image: "/placeholder-avatar.jpg",
  },
]

export default function PeopleSection() {
  return (
    <section className="relative overflow-hidden bg-[#9F54E6]/10 pt-[10%]">
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
            • PEOPLE
          </motion.p>

          <motion.h2
            className="mt-5 text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.05] tracking-tight text-[#0b0b12]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            A collective of proven leaders
          </motion.h2>

          <motion.p
            className="mt-6 max-w-2xl text-base md:text-lg leading-7 text-[#0b0b12]/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            We're operators, not consultants. Leaders who've built, scaled, and
            transformed businesses across markets.
          </motion.p>
        </motion.div>

        {/* Bottom: Team Cards */}
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {/* Profile Image */}
              <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-xl bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                  <span className="text-1xl text-gray-400">placeholder</span>
                </div>
              </div>

              {/* Name, Role, and LinkedIn */}
              <div className="flex items-start justify-between gap-4">
                {/* Left: Name and Role */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#0b0b12]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#0b0b12]/70">
                    {member.role}
                  </p>
                </div>

                {/* Right: LinkedIn Icon */}
                <Link
                  href={member.linkedinUrl}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7c2cff]/10 text-[#7c2cff] transition-colors hover:bg-[#7c2cff]/20"
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

