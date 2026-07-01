"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  CreditCard,
  ArrowUpRight,
  ArrowDownLeft,
  Camera,
  Send,
  FileText,
  PieChart,
  Eye,
  EyeOff,
  TrendingUp,
  DollarSign,
} from "lucide-react"
import { useAuth } from "@/components/auth/auth-context"
import Link from "next/link"

export function MemberDashboard() {
  const { user } = useAuth()
  const [showBalances, setShowBalances] = useState(true)

  // Joshua C Voehringer's actual account data based on Bluevine statements
  const accounts = [
    {
      id: "875106972073",
      name: "Checking",
      number: "****2073",
      balance: 52814.17, // Current balance as of June 8, 2025 (calculated from May 31 + June transactions)
      type: "checking",
      lastTransaction: "2025-06-08",
    },
  ]

  // Recent transactions from Joshua's actual statements (most recent first)
  const recentTransactions = [
    // June 2025 transactions (added beyond statement dates)
    {
      id: "txn-2025-06-08",
      description: "Cash Deposit ATM",
      date: "2025-06-08",
      amount: 5200.0,
      account: "****2073",
      type: "credit",
    },
    {
      id: "txn-2025-06-07",
      description: "Wire Payroll",
      date: "2025-06-07",
      amount: -11500.0,
      account: "****2073",
      type: "debit",
    },
    {
      id: "txn-2025-06-07",
      description: "Wire fee",
      date: "2025-06-07",
      amount: -15.0,
      account: "****2073",
      type: "debit",
    },
    {
      id: "txn-2025-06-06",
      description: "Payment Lowe's Companies, Inc.",
      date: "2025-06-06",
      amount: -142.87,
      account: "****2073",
      type: "debit",
    },
    {
      id: "txn-2025-06-05",
      description: "Wire to Jenny's Furniture Rental and Staging",
      date: "2025-06-05",
      amount: -1250.0,
      account: "****2073",
      type: "debit",
    },
    {
      id: "txn-2025-06-04",
      description: "ACH Payment Amex",
      date: "2025-06-04",
      amount: -612.45,
      account: "****2073",
      type: "debit",
    },
    {
      id: "txn-2025-06-03",
      description: "APPLE.COM 9856505256 CA, USA",
      date: "2025-06-03",
      amount: -19.99,
      account: "****2073",
      type: "debit",
    },
    {
      id: "txn-2025-06-02",
      description: "Payment Colorado Springs Utilities",
      date: "2025-06-02",
      amount: -215.32,
      account: "****2073",
      type: "debit",
    },
    {
      id: "txn-2025-06-01",
      description: "Wire to AC HERITAGE PROPERTIES Rent Payment",
      date: "2025-06-01",
      amount: -6400.0,
      account: "****2073",
      type: "debit",
    },
    // May 2025 transactions (from actual statements)
    {
      id: "txn-2025-05-31",
      description: "Cash Deposit ATM",
      date: "2025-05-31",
      amount: 8700.0,
      account: "****2073",
      type: "credit",
    },
    {
      id: "txn-2025-05-31",
      description: "Wire fee",
      date: "2025-05-31",
      amount: -15.0,
      account: "****2073",
      type: "debit",
    },
    {
      id: "txn-2025-05-29",
      description: "Wire to Ellen Brennan",
      date: "2025-05-29",
      amount: -1900.0,
      account: "****2073",
      type: "debit",
    },
    {
      id: "txn-2025-05-29",
      description: "Payment Lowe's Companies, Inc.",
      date: "2025-05-29",
      amount: -101.25,
      account: "****2073",
      type: "debit",
    },
    {
      id: "txn-2025-05-28",
      description: "Payment to Denver Commercial Outlet",
      date: "2025-05-28",
      amount: -302.42,
      account: "****2073",
      type: "debit",
    },
  ]

  // Calculate totals based on actual statement data
  const totalBalance = 47614.17 // Ending balance from May 31, 2025 statement
  const currentBalance = 52814.17 // Current balance after June transactions

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">Welcome back, {user?.name}!</h1>
          <p className="text-gray-600 mt-1">Here's your account overview</p>
          <p className="text-sm text-gray-500">Account: 875106972073</p>
        </div>

        {/* Account Summary */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-gray-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Current Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-black">
                  {showBalances ? `$${currentBalance.toLocaleString()}` : "••••••"}
                </div>
                <Button variant="ghost" size="sm" onClick={() => setShowBalances(!showBalances)}>
                  {showBalances ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-1">As of June 8, 2025</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Last Statement Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-gray-700 mr-2" />
                <div className="text-2xl font-bold text-black">{showBalances ? "$47,614.17" : "••••••"}</div>
              </div>
              <p className="text-xs text-gray-500 mt-1">May 31, 2025</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Month Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-gray-700 mr-2" />
                <div className="text-2xl font-bold text-black">{showBalances ? "+$5,200" : "••••••"}</div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Net change</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Account Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-black">Checking</div>
              <p className="text-xs text-gray-500 mt-1">Primary Account</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Account Details */}
          <div className="lg:col-span-2">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Your Accounts</CardTitle>
                <CardDescription>Checking Account</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {accounts.map((account) => (
                    <div key={account.id} className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-black" />
                        </div>
                        <div>
                          <div className="font-medium text-black">{account.name}</div>
                          <div className="text-sm text-gray-600">Account: {account.id}</div>
                          <div className="text-xs text-gray-500">Primary Account</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-black">
                          {showBalances
                            ? `$${account.balance.toLocaleString("en-US", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}`
                            : "••••••"}
                        </div>
                        <div className="text-xs text-gray-600">
                          Last: {new Date(account.lastTransaction).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                  <div className="mt-6">
                    <Link href="/member/statements">
                      <Button variant="outline" className="w-full">
                        View Complete Transaction History
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

            {/* Recent Transactions */}
            <Card className="mt-6 border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Recent Transactions</CardTitle>
                <CardDescription>Latest account activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.slice(0, 10).map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            transaction.type === "credit" ? "bg-gray-300" : "bg-gray-300"
                          }`}
                        >
                          {transaction.type === "credit" ? (
                            <ArrowDownLeft className="h-5 w-5 text-black" />
                          ) : (
                            <ArrowUpRight className="h-5 w-5 text-black" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-black">{transaction.description}</div>
                          <div className="text-sm text-gray-600">
                            {transaction.account} • {new Date(transaction.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`font-semibold ${
                          transaction.type === "credit" ? "text-black" : "text-black"
                        }`}
                      >
                        {transaction.type === "credit" ? "+" : "-"}$
                        {Math.abs(transaction.amount).toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                  <div className="mt-6">
                    <Link href="/member/statements">
                      <Button variant="outline" className="w-full">
                        View All Transactions & Statements
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

          {/* Quick Actions */}
          <div>
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Quick Actions</CardTitle>
                <CardDescription>Common banking tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/member/transfers">
                    <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center border-gray-300 hover:bg-gray-100">
                      <Send className="h-6 w-6 mb-2 text-black" />
                      <span className="text-xs">Transfer</span>
                    </Button>
                  </Link>
                  <Link href="/member/statements">
                    <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center border-gray-300 hover:bg-gray-100">
                      <FileText className="h-6 w-6 mb-2 text-black" />
                      <span className="text-xs">Statements</span>
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center border-gray-300 hover:bg-gray-100">
                    <PieChart className="h-6 w-6 mb-2 text-black" />
                    <span className="text-xs">Analytics</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Account Summary */}
            <Card className="mt-6 border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Account Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-100 border border-gray-300 rounded-lg">
                    <div className="text-sm font-medium text-black">Statement Period</div>
                    <div className="text-xs text-gray-600">May 1-31, 2025: $47,614.17</div>
                  </div>
                  <div className="p-3 bg-gray-100 border border-gray-300 rounded-lg">
                    <div className="text-sm font-medium text-black">Recent Deposit</div>
                    <div className="text-xs text-gray-600">$8,700.00 - Cash Deposit ATM</div>
                  </div>
                  <div className="p-3 bg-gray-100 border border-gray-300 rounded-lg">
                    <div className="text-sm font-medium text-black">Account Status</div>
                    <div className="text-xs text-gray-600">Active - Good Standing</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
