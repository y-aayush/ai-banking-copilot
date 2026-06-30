"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Account {
  id: string
  name: string
  type: string
  balance: number
  accountNumber: string
  status: "active" | "inactive" | "frozen"
  lastActivity: string
}

interface AccountSummaryProps {
  accounts: Account[]
  showBalances?: boolean
  onToggleBalances?: () => void
  className?: string
}

export function AccountSummary({ accounts, showBalances = true, onToggleBalances, className }: AccountSummaryProps) {
  const getAccountIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "checking":
        return "💳"
      case "savings":
        return "🏦"
      case "credit":
        return "💰"
      case "investment":
        return "📈"
      default:
        return "🏛️"
    }
  }

  const getStatusColor = (status: Account["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      case "frozen":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0)

  return (
    <div className={cn("space-y-4", className)}>
      {/* Total Balance Card */}
      <Card className="bank-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm font-medium">Total Balance</p>
              <p className="text-3xl font-bold text-white mt-1">
                {showBalances ? `$${totalBalance.toLocaleString("en-US", { minimumFractionDigits: 2 })}` : "••••••"}
              </p>
              <p className="text-white/60 text-xs mt-1">
                Across {accounts.length} account{accounts.length !== 1 ? "s" : ""}
              </p>
            </div>
            {onToggleBalances && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggleBalances}
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                {showBalances ? "👁️" : "👁️‍🗨️"}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Individual Accounts */}
      <div className="space-y-3">
        {accounts.map((account) => (
          <Card key={account.id} className="balance-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-lg">
                    {getAccountIcon(account.type)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">{account.name}</h3>
                    <p className="text-sm text-neutral-600">{account.accountNumber}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge className={cn("text-xs", getStatusColor(account.status))}>{account.status}</Badge>
                      <span className="text-xs text-neutral-500">
                        Last activity: {new Date(account.lastActivity).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-neutral-900">
                    {showBalances
                      ? `$${account.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}`
                      : "••••••"}
                  </p>
                  <p className="text-sm text-neutral-600 capitalize">{account.type}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
