import { Play } from "lucide-react"

function VideoCapsule() {
  return (
    <div className="mt-10 flex w-full max-w-lg mx-auto items-center justify-center">
      <div className="relative h-[180px] w-[440px] shrink-0 overflow-hidden rounded-full bg-black shadow-[0_10px_30px_rgba(0,0,0,0.25)] ring-1 ring-black/10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          aria-hidden
        >
          <source src="/hero/hero-bg.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/40"
          aria-hidden
        />

        <button
          type="button"
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 inline-flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow-sm transition hover:bg-white"
        >
          <Play className="ml-0.5 size-5 fill-black" />
        </button>
      </div>
    </div>
  )
}

export function PurposeSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f7fb] py-[10%]">
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:44px_44px]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-8">
        {/* Top container: label + heading */}
        <div className="max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.35em] text-[#7c2cff]">
            — PURPOSE
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-[4.3rem] font-semibold leading-[1.05] tracking-tight text-[#0b0b12]">
            <span className="text-[#9F54E6]">Business Needs</span> Have Changed.
            <br />
            Leadership Models Haven’t.
          </h2>
        </div>

        {/* Bottom container: split capsule + paragraph */}
        <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center justify-center">
          <div>
            <VideoCapsule />
          </div>

          <div className="md:pl-2">
            <p className="max-w-md text-base md:text-md lg:text-lg leading-7 text-[#0b0b12]/70">
              Fractional leadership gives you the expertise you need—faster,
              leaner, and with measurable impact—an agile way to grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PurposeSection


