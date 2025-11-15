"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export type GlowEffectProps = {
  className?: string
  style?: React.CSSProperties
  colors?: string[]
  mode?:
    | "rotate"
    | "pulse"
    | "breathe"
    | "colorShift"
    | "flowHorizontal"
    | "static"
  blur?:
    | number
    | "softest"
    | "soft"
    | "medium"
    | "strong"
    | "stronger"
    | "strongest"
    | "none"
  scale?: number
  duration?: number
}

export function GlowEffect({
  className,
  style,
  colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F"],
  mode = "rotate",
  blur = "medium",
  scale = 1,
  duration = 5,
}: GlowEffectProps) {
  const BASE_TRANSITION: any = {
    repeat: Infinity,
    duration: duration,
    ease: "linear",
  }

  const animations: Record<string, any> = {
    rotate: {
      background: [
        `conic-gradient(from 0deg at 50% 50%, ${colors.join(", ")})`,
        `conic-gradient(from 360deg at 50% 50%, ${colors.join(", ")})`,
      ],
      transition: BASE_TRANSITION,
    },
    pulse: {
      background: [
        `radial-gradient(circle at 50% 50%, ${colors[0]} 0%, transparent 100%)`,
      ],
      scale: [1 * scale, 1.1 * scale, 1 * scale],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        ...BASE_TRANSITION,
        repeatType: "mirror" as const,
      },
    },
    breathe: {
      background: [
        `radial-gradient(circle at 50% 50%, ${colors[0]} 0%, transparent 100%)`,
      ],
      scale: [1 * scale, 1.05 * scale, 1 * scale],
      transition: {
        ...BASE_TRANSITION,
        repeatType: "mirror" as const,
      },
    },
    colorShift: {
      background: [
        `conic-gradient(from 0deg at 50% 50%, ${colors.join(", ")})`,
      ],
      transition: {
        ...BASE_TRANSITION,
        repeatType: "mirror" as const,
      },
    },
    flowHorizontal: {
      background: [
        `linear-gradient(to right, ${colors.join(", ")})`,
      ],
      transition: {
        ...BASE_TRANSITION,
        repeatType: "mirror" as const,
      },
    },
    static: {
      background: `linear-gradient(to right, ${colors.join(", ")})`,
    },
  }

  const getBlurClass = (blur: GlowEffectProps["blur"]) => {
    if (typeof blur === "number") {
      return `blur-[${blur}px]`
    }

    const presets = {
      softest: "blur-sm",
      soft: "blur",
      medium: "blur-md",
      strong: "blur-lg",
      stronger: "blur-xl",
      strongest: "blur-2xl",
      none: "blur-none",
    }

    return presets[blur as keyof typeof presets]
  }

  return (
    <motion.div
      style={
        {
          ...style,
          "--scale": scale,
          willChange: "transform",
          backfaceVisibility: "hidden",
        } as React.CSSProperties
      }
      animate={animations[mode] as any}
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        "transform-gpu",
        getBlurClass(blur),
        className
      )}
    />
  )
}
