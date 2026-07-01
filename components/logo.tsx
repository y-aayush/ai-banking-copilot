"use client"

interface LogoProps {
  size?: "small" | "medium" | "large" | "xlarge" | "xxlarge" | "hero"
  variant?: "light" | "dark"
  className?: string
}

export function Logo({ size = "medium", variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-black"
  
  const sizeClasses = {
    small: "text-lg",
    medium: "text-2xl",
    large: "text-4xl",
    xlarge: "text-5xl",
    xxlarge: "text-6xl",
    hero: "text-7xl",
  }

  return (
    <div className={`font-bold ${sizeClasses[size]} ${textColor} ${className}`}>
      AI-Banking
    </div>
  )
}
