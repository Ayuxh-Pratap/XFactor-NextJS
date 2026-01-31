import VideoCapsule from "./video-capsule"

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
      <div className="relative mx-auto w-full max-w-7xl mt-[20rem] h-[600px] md:h-[700px] rounded-3xl overflow-hidden">
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

        {/* Purple gradient overlay from bottom to top */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#4c1d95] via-[#4c1d95]/50 to-transparent pointer-events-none"
          aria-hidden
        />

        {/* Dark purple overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/15 px-6 md:px-8 lg:px-12 py-6 rounded-2xl my-4 mx-4">
          <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
            <div className="font-bold text-white text-lg md:text-xl">
              Rising talent costs
            </div>
            <div className="flex items-center gap-4 flex-1 justify-end">
              <p className="text-white text-sm md:text-base max-w-2xl text-right">
                Full-time executives are expensive, slow to hire, and hard to retain.
              </p>
              <div className="flex flex-col gap-1">
                <div className="w-1 h-1 rounded-full bg-white/70" />
                <div className="w-1 h-1 rounded-full bg-white/70" />
                <div className="w-1 h-1 rounded-full bg-white/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PurposeSection


