import { cn } from "@/lib/utils"

interface SpotlightProps {
  className?: string
  fill?: string
}

export function Spotlight({ className, fill = "white" }: SpotlightProps) {
  return (
    <svg
      className={cn("animate-pulse pointer-events-none absolute z-50 opacity-60", className)}
      width="500"
      height="500"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="250" cy="250" r="200" fill={fill} opacity="0.15" filter="url(#filter0_f_103_20)" />
      <circle cx="250" cy="250" r="150" fill={fill} opacity="0.25" filter="url(#filter1_f_103_20)" />
      <defs>
        <filter
          id="filter0_f_103_20"
          x="0"
          y="0"
          width="500"
          height="500"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="80" />
        </filter>
        <filter
          id="filter1_f_103_20"
          x="50"
          y="50"
          width="400"
          height="400"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
        </filter>
      </defs>
    </svg>
  )
}
