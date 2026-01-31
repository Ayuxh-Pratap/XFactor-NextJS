"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function PingSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f6f7fb] pt-[10%]">
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
              • PING
            </motion.p>

            <motion.h2
              className="mt-5 text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.05] tracking-tight text-[#0b0b12]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              Ready to accelerate your next phase?
            </motion.h2>

            <motion.p
              className="mt-6 text-base md:text-lg leading-7 text-[#0b0b12]/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              Let's explore how fractional leadership can unlock your growth.
            </motion.p>
          </motion.div>

          {/* Main Container: Purple Gradient */}
          <motion.div
            className="mt-12 rounded-t-3xl bg-gradient-to-br from-[#5b21b6] via-[#7c2cff] to-[#9F54E6] p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="grid gap-8 md:grid-cols-[1fr_1px_1fr] md:items-start">
              {/* Left Column: Contact Information */}
              <div className="space-y-6">
                {/* Logo */}
                <div>
                  <p className="text-sm text-white/80">the</p>
                  <h3 className="text-3xl font-bold text-white">
                    <span className="text-white">X</span>Fractor
                  </h3>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-white" />
                  <p className="text-sm text-white">Singapore | India | UAE</p>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-white" />
                  <p className="text-sm text-white">
                    akshay@thexfractor.com | gayatri@thexfractor.com
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-white" />
                  <p className="text-sm text-white">
                    +65 93831510 | +91 9769923174
                  </p>
                </div>

                {/* Button */}
                <Button
                  className="mt-8 rounded-full bg-[#9F54E6] px-6 py-6 text-white hover:bg-[#8b3dd4]"
                >
                  Schedule a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Separator */}
              <div className="hidden h-full w-px bg-white/20 md:block" />

              {/* Right Column: Contact Form */}
              <div className="space-y-4">
                {/* First Row: First Name & Last Name */}
                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:ring-white/20"
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:ring-white/20"
                  />
                </div>

                {/* Second Row: Email & Phone */}
                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:ring-white/20"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:ring-white/20"
                  />
                </div>

                {/* Message Field */}
                <Textarea
                  placeholder="Message"
                  rows={4}
                  className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:ring-white/20"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5b21b6] py-4">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 md:px-8">
          <p className="text-sm text-white">©2025 XFractor</p>
          <p className="text-sm text-white">Made by Double Works</p>
        </div>
      </footer>
    </>
  )
}

