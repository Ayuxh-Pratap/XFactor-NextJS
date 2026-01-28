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
        <main className="mx-auto flex w-full max-w-6xl flex-1 items-end px-4 pb-[10%] md:px-8">
          {/* Left: Copy */}
          <section className="max-w-xl space-y-6 text-left">
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                <span className="block">Fractional Leadership.</span>
                <span className="block text-white/90">Real Outcomes.</span>
              </h1>
              <p className="max-w-xl text-base text-white/80 md:text-lg">
                Senior expertise on demand. Fast, flexible and built for modern
                business. Unlock strategic momentum without the overhead of a
                full-time executive team.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row">
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
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Hero


