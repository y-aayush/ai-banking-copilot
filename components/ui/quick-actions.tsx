"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface QuickAction {
  id: string
  label: string
  icon: React.ReactNode
  onClick: () => void
  variant?: "default" | "primary" | "secondary"
  disabled?: boolean
}

interface QuickActionsProps {
  actions: QuickAction[]
  title?: string
  columns?: 2 | 3 | 4
  className?: string
}

export function QuickActions({ actions, title = "Quick Actions", columns = 4, className }: QuickActionsProps) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  }

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-neutral-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={cn("grid gap-3", gridCols[columns])}>
          {actions.map((action) => (
            <Button
              key={action.id}
              variant={action.variant === "primary" ? "default" : "outline"}
              className={cn(
                "h-20 flex flex-col items-center justify-center p-3 space-y-2",
                "hover:shadow-md transition-all duration-200",
                action.variant === "primary" && "bg-primary-500 hover:bg-primary-600 text-white",
                action.disabled && "opacity-50 cursor-not-allowed",
              )}
              onClick={action.onClick}
              disabled={action.disabled}
            >
              <div className="text-xl">{action.icon}</div>
              <span className="text-xs font-medium text-center leading-tight">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
