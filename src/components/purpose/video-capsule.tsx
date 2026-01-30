import { forwardRef } from "react"
import { Play } from "lucide-react"

const VideoCapsule = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="relative h-[180px] w-[440px] overflow-hidden rounded-full bg-black shadow-xl mx-auto"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero/hero-bg.mp4" type="video/mp4" />
      </video>

      <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-3">
        <Play className="size-5 fill-black" />
      </button>
    </div>
  )
})

VideoCapsule.displayName = "VideoCapsule"
export default VideoCapsule
