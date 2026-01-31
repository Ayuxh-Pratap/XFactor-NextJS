"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

const steps = [
    { id: 1, text: "Initial consultation and needs assessment" },
    { id: 2, text: "Strategic planning and framework development" },
    { id: 3, text: "Rapid deployment and team integration" },
    { id: 4, text: "Ongoing optimization and performance tracking" },
    { id: 5, text: "Scalable growth and continuous improvement" },
]

const TIMER_DURATION = 3000 // 3s per step

export default function PropositionSection() {
    const [activeStep, setActiveStep] = useState(0)
    const [progress, setProgress] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)

    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, {
        once: true,
        margin: "-200px",
    })

    // Start animation ONLY once when section enters view
    useEffect(() => {
        if (isInView && !hasStarted) {
            setHasStarted(true)
        }
    }, [isInView, hasStarted])

    // Deterministic step loop
    useEffect(() => {
        if (!hasStarted) return

        setProgress(0)

        const startTime = performance.now()

        const tick = (now: number) => {
            const elapsed = now - startTime
            const percentage = Math.min((elapsed / TIMER_DURATION) * 100, 100)

            setProgress(percentage)

            if (percentage < 100) {
                requestAnimationFrame(tick)
            } else {
                setTimeout(() => {
                    setActiveStep((prev) => (prev + 1) % steps.length)
                }, 250)
            }
        }

        requestAnimationFrame(tick)
    }, [activeStep, hasStarted])

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-[#f6f7fb] py-[10%]">

            <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8">
                {/* Text Section */}
                <motion.div
                    className="max-w-5xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs font-semibold tracking-[0.35em] text-[#7c2cff]">
                        • PROPOSITION
                    </p>

                    <h2 className="mt-5 text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.05] tracking-tight text-[#0b0b12]">
                        A smarter, faster, more flexible alternative to full-time hires.
                    </h2>
                </motion.div>

                {/* Image + Steps */}
                <div className="mt-12 md:mt-16 grid gap-8 md:gap-12 md:grid-cols-[1fr_1fr] md:items-center">
                    {/* Image */}
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f5] to-[#e5e5e5]
              flex items-center justify-center">
                            <p className="text-[#0b0b12]/40 text-sm">Image placeholder</p>
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="space-y-6">
                        {steps.map((step, index) => {
                            const isActive = index === activeStep

                            return (
                                <div key={step.id}>
                                    <motion.p
                                        className={`mb-2 text-base md:text-lg transition-colors ${isActive
                                                ? "text-[#0b0b12] font-medium"
                                                : "text-[#0b0b12]/60"
                                            }`}
                                        animate={{ opacity: isActive ? 1 : 0.6 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {step.text}
                                    </motion.p>

                                    <div className="relative h-px bg-gray-200 overflow-hidden">
                                        {isActive && (
                                            <motion.div
                                                className="absolute left-0 top-0 h-full bg-[#7c2cff]"
                                                style={{ width: `${progress}%` }}
                                            />
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
