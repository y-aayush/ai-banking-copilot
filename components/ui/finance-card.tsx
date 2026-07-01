import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FinanceCardProps {
  title: string
  value: string | number
  change?: {
    value: number
    type: "increase" | "decrease"
    period?: string
  }
  icon?: React.ReactNode
  className?: string
  variant?: "default" | "gradient" | "minimal"
}

export function FinanceCard({ title, value, change, icon, className, variant = "default" }: FinanceCardProps) {
  const formatValue = (val: string | number) => {
    if (typeof val === "number") {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }).format(val)
    }
    return val
  }

  const cardVariants = {
    default: "bg-white border border-neutral-200",
    gradient: "bg-gradient-to-br from-primary-500 to-primary-600 text-white border-0",
    minimal: "bg-neutral-50 border-0",
  }

  return (
    <Card
      className={cn(
        "transition-all duration-200 hover:shadow-lg hover:-translate-y-1",
        cardVariants[variant],
        className,
      )}
    >
      <CardHeader className="pb-3">
        <CardTitle
          className={cn(
            "text-sm font-medium flex items-center justify-between",
            variant === "gradient" ? "text-white/90" : "text-neutral-600",
          )}
        >
          {title}
          {icon && (
            <div
              className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center",
                variant === "gradient" ? "bg-white/20" : "bg-primary-100",
              )}
            >
              {icon}
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className={cn("text-3xl font-bold mb-2", variant === "gradient" ? "text-white" : "text-neutral-900")}>
          {formatValue(value)}
        </div>
        {change && (
          <div
            className={cn(
              "flex items-center text-sm font-medium",
              change.type === "increase"
                ? variant === "gradient"
                  ? "text-green-200"
                  : "text-green-600"
                : variant === "gradient"
                  ? "text-red-200"
                  : "text-red-600",
            )}
          >
            <span className="mr-1">{change.type === "increase" ? "↗" : "↘"}</span>
            {Math.abs(change.value)}%
            {change.period && (
              <span className={cn("ml-1", variant === "gradient" ? "text-white/70" : "text-neutral-500")}>
                {change.period}
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
