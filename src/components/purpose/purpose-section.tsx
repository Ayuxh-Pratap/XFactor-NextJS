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
    </section>
  )
}

export default PurposeSection


