"use client"

import { useState } from "react"
import { useAuth } from "@/components/auth/auth-context"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"
import {
  Shield,
  Eye,
  EyeOff,
  Settings,
  LogOut,
  Home,
  Bell,
  ArrowUpRight,
  Download,
  Search,
  Wallet,
  PiggyBank,
  FileText,
  TrendingUp,
  Send,
  Camera,
  Star,
  ArrowDownLeft,
} from "lucide-react"
import { useRouter } from "next/navigation"

// Import new UI components
import { FinanceCard } from "@/components/ui/finance-card"
import { TransactionList } from "@/components/ui/transaction-list"
import { AccountSummary } from "@/components/ui/account-summary"
import { QuickActions } from "@/components/ui/quick-actions"

// Import the new StatementCenter component
import { StatementCenter } from "@/components/member/statement-center"
import { DocumentManager } from "@/components/member/document-manager"
import { FileUploadManager } from "@/components/member/file-upload-manager"

export function PrivateMemberPage() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [showBalances, setShowBalances] = useState(true)
  const [activeTab, setActiveTab] = useState("ledger") // Default to ledger view
  const [showNotifications, setShowNotifications] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterMonth, setFilterMonth] = useState("all")
  const [filterType, setFilterType] = useState("all")
  const { toast } = useToast()
  const [showAccountDetails, setShowAccountDetails] = useState(false)

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const handleHome = () => {
    router.push("/")
  }

  // Updated Joshua's account data with correct account number
  const accounts = [
    {
      id: "333475631078",
      name: "Business Checking",
      type: "checking",
      balance: 52814.17,
      availableBalance: 52814.17,
      currency: "USD",
      number: "****1078",
      routingNumber: "031101279",
      interestRate: "0.01%",
      openedDate: "2025-02-01",
    },
    {
      id: "875106972074",
      name: "Business Savings",
      type: "savings",
      balance: 22000.0,
      availableBalance: 22000.0,
      currency: "USD",
      number: "****2074",
      routingNumber: "031101279",
      interestRate: "1.75%",
      openedDate: "2025-02-01",
    },
  ]

  // Updated transaction ledger - current through June 10, 2025
  const transactions = [
    // June 2025 transactions - Current through today
    {
      id: "txn-2025-06-10",
      date: "2025-06-10",
      description: "Office Supplies - Staples",
      amount: -89.45,
      type: "debit",
      category: "Office",
      balance: 52814.17,
      account: "Business Checking",
    },
    {
      id: "txn-2025-06-09",
      date: "2025-06-09",
      description: "Client Payment - Johnson LLC",
      amount: 3250.0,
      type: "credit",
      category: "Income",
      balance: 52903.62,
      account: "Business Checking",
    },
    {
      id: "txn-2025-06-08",
      date: "2025-06-08",
      description: "Cash Deposit ATM",
      amount: 5200.0,
      type: "credit",
      category: "Income",
      balance: 49653.62,
      account: "Business Checking",
    },
    {
      id: "txn-2025-06-07-2",
      date: "2025-06-07",
      description: "Wire fee",
      amount: -15.0,
      type: "debit",
      category: "Fees",
      balance: 44453.62,
      account: "Business Checking",
    },
    {
      id: "txn-2025-06-07-1",
      date: "2025-06-07",
      description: "Wire Payroll",
      amount: -11500.0,
      type: "debit",
      category: "Payroll",
      balance: 44468.62,
      account: "Business Checking",
    },
    {
      id: "txn-2025-06-06",
      date: "2025-06-06",
      description: "Payment Lowe's Companies, Inc.",
      amount: -142.87,
      type: "debit",
      category: "Office",
      balance: 55968.62,
      account: "Business Checking",
    },
    {
      id: "txn-2025-06-05-3",
      date: "2025-06-05",
      description: "Client Payment - Mountain View Properties",
      amount: 3250.0,
      type: "credit",
      category: "Income",
      balance: 56111.49,
      account: "Business Checking",
    },
    {
      id: "txn-2025-06-05-2",
      date: "2025-06-05",
      description: "Wire fee",
      amount: -10.0,
      type: "debit",
      category: "Fees",
      balance: 52861.49,
      account: "Business Checking",
    },
    {
      id: "txn-2025-06-05-1",
      date: "2025-06-05",
      description: "Wire to Jenny's Furniture Rental and Staging",
      amount: -1250.0,
      type: "debit",
      category: "Office",
      balance: 52871.49,
      account: "Business Checking",
    },
    {
      id: "txn-2025-06-04-2",
      date: "2025-06-04",
      description: "ACH Payment Amex",
      amount: -612.45,
      type: "debit",
      category: "Credit Card",
      balance: 54121.49,
      account: "Business Checking",
    },
    {
      id: "txn-2025-06-04-1",
      date: "2025-06-04",
      description: "Client Deposit - Summit Realty",
      amount: 2500.0,
      type: "credit",
      category: "Income",
      balance: 54733.94,
      account: "Business Checking",
    },
    {
      id: "txn-2025-06-03-2",
      date: "2025-06-03",
      description: "APPLE.COM 9856505256 CA, USA",
      amount: -19.99,
      type: "debit",
      category: "Subscriptions",
      balance: 52233.94,
      account: "Business Checking",
    },
    {
      id: "txn-2025-06-03-1",
      date: "2025-06-03",
      description: "Client Retainer - Evergreen Investments",
      amount: 5000.0,
      type: "credit",
      category: "Income",
      balance: 52253.93,
      account: "Business Checking",
    },
    {
      id: "txn-2025-06-02-2",
      date: "2025-06-02",
      description: "Payment Colorado Springs Utilities",
      amount: -215.32,
      type: "debit",
      category: "Utilities",
      balance: 47253.93,
      account: "Business Checking",
    },
    {
      id: "txn-2025-06-02-1",
      date: "2025-06-02",
      description: "Client Payment - Blue Ridge Development",
      amount: 4200.0,
      type: "credit",
      category: "Income",
      balance: 47469.25,
      account: "Business Checking",
    },
    {
      id: "txn-2025-06-01-3",
      date: "2025-06-01",
      description: "Client Deposit - Aspen Heights",
      amount: 3000.0,
      type: "credit",
      category: "Income",
      balance: 43269.25,
      account: "Business Checking",
    },
    {
      id: "txn-2025-06-01-2",
      date: "2025-06-01",
      description: "Wire fee",
      amount: -15.0,
      type: "debit",
      category: "Fees",
      balance: 40269.25,
      account: "Business Checking",
    },
    {
      id: "txn-2025-06-01-1",
      date: "2025-06-01",
      description: "Wire to AC HERITAGE PROPERTIES Rent Payment",
      amount: -6400.0,
      type: "debit",
      category: "Rent",
      balance: 40284.25,
      account: "Business Checking",
    },

    // May 2025 transactions (from statement)
    {
      id: "txn-2025-05-31-2",
      date: "2025-05-31",
      description: "Cash Deposit ATM",
      amount: 8700.0,
      type: "credit",
      category: "Income",
      balance: 47614.17,
      account: "Business Checking",
    },
    {
      id: "txn-2025-05-31-1",
      date: "2025-05-31",
      description: "Wire fee",
      amount: -15.0,
      type: "debit",
      category: "Fees",
      balance: 38914.17,
      account: "Business Checking",
    },
    {
      id: "txn-2025-05-29-2",
      date: "2025-05-29",
      description: "Wire to Ellen Brennan",
      amount: -1900.0,
      type: "debit",
      category: "Contractors",
      balance: 38929.17,
      account: "Business Checking",
    },
    {
      id: "txn-2025-05-29-1",
      date: "2025-05-29",
      description: "Payment Lowe's Companies, Inc.",
      amount: -101.25,
      type: "debit",
      category: "Office",
      balance: 40829.17,
      account: "Business Checking",
    },
    {
      id: "txn-2025-05-28",
      date: "2025-05-28",
      description: "Payment to Denver Commercial Outlet",
      amount: -302.42,
      type: "debit",
      category: "Office",
      balance: 40930.42,
      account: "Business Checking",
    },
    {
      id: "txn-2025-05-27-2",
      date: "2025-05-27",
      description: "Wire fee",
      amount: -10.0,
      type: "debit",
      category: "Fees",
      balance: 41232.84,
      account: "Business Checking",
    },
    {
      id: "txn-2025-05-27-1",
      date: "2025-05-27",
      description: "Wire to Madeline Erickson",
      amount: -1100.0,
      type: "debit",
      category: "Contractors",
      balance: 41242.84,
      account: "Business Checking",
    },
    {
      id: "txn-2025-05-26-4",
      date: "2025-05-26",
      description: "Payment to Chief Petroleum Co",
      amount: -500.0,
      type: "debit",
      category: "Utilities",
      balance: 42342.84,
      account: "Business Checking",
    },
    {
      id: "txn-2025-05-26-3",
      date: "2025-05-26",
      description: "APPLE.COM 9423805231 CA, USA",
      amount: -14.99,
      type: "debit",
      category: "Subscriptions",
      balance: 42842.84,
      account: "Business Checking",
    },
    {
      id: "txn-2025-05-26-2",
      date: "2025-05-26",
      description: "KEAP.COM 8668000098 AZ, +18668000004, USA",
      amount: -50.42,
      type: "debit",
      category: "Software",
      balance: 42857.83,
      account: "Business Checking",
    },
    {
      id: "txn-2025-05-26-1",
      date: "2025-05-26",
      description: "Deposit PayPal",
      amount: 4500.0,
      type: "credit",
      category: "Income",
      balance: 42908.25,
      account: "Business Checking",
    },
    {
      id: "txn-2025-05-25",
      date: "2025-05-25",
      description: "Payment The Home Depot, Inc.",
      amount: -182.52,
      type: "debit",
      category: "Office",
      balance: 38408.25,
      account: "Business Checking",
    },
    {
      id: "txn-2025-05-23",
      date: "2025-05-23",
      description: "Wire fee",
      amount: -15.0,
      type: "debit",
      category: "Fees",
      balance: 38590.77,
      account: "Business Checking",
    },
    {
      id: "txn-2025-05-21",
      date: "2025-05-21",
      description: "Wire Payroll",
      amount: -11520.0,
      type: "debit",
      category: "Payroll",
      balance: 38605.77,
      account: "Business Checking",
    },
    {
      id: "txn-2025-05-20-2",
      date: "2025-05-20",
      description: "Payment to King Soopers",
      amount: -85.41,
      type: "debit",
      category: "Office",
      balance: 50125.77,
      account: "Business Checking",
    },
    {
      id: "txn-2025-05-20-1",
      date: "2025-05-20",
      description: "Wire fee",
      amount: -10.0,
      type: "debit",
      category: "Fees",
      balance: 50211.18,
      account: "Business Checking",
    },
    {
      id: "txn-2025-05-19-4",
      date: "2025-05-19",
      description: "Wire to Elias Whitney",
      amount: -1000.0,
      type: "debit",
      category: "Contractors",
      balance: 50221.18,
      account: "Business Checking",
    },
    {
      id: "txn-2025-05-19-3",
      date: "2025-05-19",
      description: "APPLE.COM 9455898584 CA, USA",
      amount: -19.99,
      type: "debit",
      category: "Subscriptions",
      balance: 51221.18,
      account: "Business Checking",
    },
    {
      id: "txn-2025-05-19-2",
      date: "2025-05-19",
      description: "Amazon.com 4619548054 WA, USA",
      amount: -100.81,
      type: "debit",
      category: "Office",
      balance: 51241.17,
      account: "Business Checking",
    },
    {
      id: "txn-2025-05-19-1",
      date: "2025-05-19",
      description: "Cash Deposit ATM",
      amount: 6750.0,
      type: "credit",
      category: "Income",
      balance: 51341.98,
      account: "Business Checking",
    },
  ]

  // Filter transactions based on user input
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesMonth = filterMonth === "all" || transaction.date.split("-")[1] === filterMonth.padStart(2, "0")
    const matchesType = filterType === "all" || transaction.type === filterType

    return matchesSearch && matchesMonth && matchesType
  })

  // Sort transactions by date (newest first)
  const sortedTransactions = [...filteredTransactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  // Calculate total assets
  const totalAssets = accounts.reduce((sum, account) => sum + account.balance, 0)

  const toggleAccountDetails = () => {
    setShowAccountDetails(!showAccountDetails)
    if (!showAccountDetails) {
      toast({
        title: "Account Details Displayed",
        description: "Your account and routing numbers are now visible.",
      })
    }
  }

  // Check if user is Joshua (business user, not admin)
  const isJoshua = user?.name === "Joshua C Voehringer"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enhanced Header with Home Button */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Logo variant="light" size="medium" />
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">Business Banking Portal</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                  <Shield className="h-3 w-3 mr-1" />
                  Secure
                </Badge>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative"
                  onClick={() => setShowNotifications(!showNotifications)}
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
                </Button>
              </div>

              <div className="hidden md:flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                  <p className="text-xs text-gray-500">{user?.company}</p>
                </div>
                <Avatar className="h-8 w-8 ring-2 ring-amber-200">
                  <AvatarFallback className="bg-gradient-to-br from-amber-400 to-orange-500 text-white font-semibold">
                    {user?.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" onClick={handleHome} className="text-gray-600 hover:text-gray-900">
                  <Home className="h-4 w-4 md:mr-2" />
                  <span className="hidden md:inline">Home</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <LogOut className="h-4 w-4 md:mr-2" />
                  <span className="hidden md:inline">Sign Out</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Welcome Banner */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2 flex items-center">Welcome back, {user?.name}</h1>
                <p className="text-amber-100 mb-2">Business Banking Portal</p>
                <p className="text-amber-200 text-sm">
                  Last login: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
                </p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold mb-2">
                  {showBalances ? `$${totalAssets.toLocaleString()}` : "••••••"}
                </div>
                <div className="flex items-center justify-end">
                  <span className="text-sm text-amber-100 mr-2">Total Assets</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-amber-100 hover:text-white hover:bg-white/20"
                    onClick={() => setShowBalances(!showBalances)}
                  >
                    {showBalances ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Tabs with Home Tab */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-7 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="home" className="data-[state=active]:bg-white">
              <Home className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Home</span>
            </TabsTrigger>
            <TabsTrigger value="ledger" className="data-[state=active]:bg-white">
              Transaction Ledger
            </TabsTrigger>
            <TabsTrigger value="overview" className="data-[state=active]:bg-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="accounts" className="data-[state=active]:bg-white">
              Accounts
            </TabsTrigger>
            <TabsTrigger value="transfers" className="data-[state=active]:bg-white">
              Transfers
            </TabsTrigger>
            <TabsTrigger value="statements" className="data-[state=active]:bg-white">
              Statements
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-white">
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Home Tab */}
          <TabsContent value="home" className="space-y-6">
            <div className="text-center py-12">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to PP Commercial</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Your comprehensive business banking solution. Manage your accounts, view transactions, and access all
                  your financial tools in one secure platform.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card
                    className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setActiveTab("ledger")}
                  >
                    <div className="text-center">
                      <Search className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Transaction Ledger</h3>
                      <p className="text-gray-600">View and search your complete transaction history</p>
                    </div>
                  </Card>
                  <Card
                    className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setActiveTab("accounts")}
                  >
                    <div className="text-center">
                      <Wallet className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Account Management</h3>
                      <p className="text-gray-600">Manage your business checking and savings accounts</p>
                    </div>
                  </Card>
                  <Card
                    className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setActiveTab("transfers")}
                  >
                    <div className="text-center">
                      <Send className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Transfer Funds</h3>
                      <p className="text-gray-600">Move money between accounts or to external recipients</p>
                    </div>
                  </Card>
                  <Card
                    className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setActiveTab("statements")}
                  >
                    <div className="text-center">
                      <FileText className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Statements & Documents</h3>
                      <p className="text-gray-600">Download statements and important documents</p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Transaction Ledger Tab - Default View */}
          <TabsContent value="ledger" className="space-y-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Transaction Ledger</h1>
              <p className="text-gray-600 mt-1">Complete transaction history for ONE LIMITED</p>
              <p className="text-sm text-gray-500">Account: 333475631078 | Current Balance: $52,814.17</p>
            </div>

            {/* Search and Filters */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Search & Filter Transactions</CardTitle>
                <CardDescription>Find specific transactions in your account history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <Input
                      placeholder="Search transactions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <select
                      value={filterMonth}
                      onChange={(e) => setFilterMonth(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    >
                      <option value="all">All Months</option>
                      <option value="06">June 2025</option>
                      <option value="05">May 2025</option>
                      <option value="04">April 2025</option>
                      <option value="03">March 2025</option>
                      <option value="02">February 2025</option>
                    </select>
                  </div>
                  <div>
                    <select
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    >
                      <option value="all">All Types</option>
                      <option value="credit">Credits</option>
                      <option value="debit">Debits</option>
                    </select>
                  </div>
                  <div>
                    <Button variant="outline" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transaction List */}
            <Card>
              <CardHeader>
                <CardTitle>Transactions ({sortedTransactions.length})</CardTitle>
                <CardDescription>Showing {sortedTransactions.length} transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {sortedTransactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            transaction.type === "credit" ? "bg-green-100" : "bg-red-100"
                          }`}
                        >
                          {transaction.type === "credit" ? (
                            <ArrowDownLeft className="h-5 w-5 text-green-600" />
                          ) : (
                            <ArrowUpRight className="h-5 w-5 text-red-600" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{transaction.description}</div>
                          <div className="text-sm text-gray-600">
                            {new Date(transaction.date).toLocaleDateString()} • {transaction.category}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`font-semibold ${
                            transaction.type === "credit" ? "text-green-600" : "text-gray-900"
                          }`}
                        >
                          {transaction.type === "credit" ? "+" : ""}$
                          {Math.abs(transaction.amount).toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </div>
                        {transaction.balance && (
                          <div className="text-xs text-gray-500">
                            Balance: $
                            {transaction.balance.toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Account Summary with new UI */}
            <AccountSummary
              accounts={accounts}
              showBalances={showBalances}
              onToggleBalances={() => setShowBalances(!showBalances)}
              className="mb-6"
            />

            {/* Finance Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <FinanceCard
                title="Monthly Income"
                value={25200}
                change={{ value: 8.2, type: "increase", period: "vs last month" }}
                icon={<TrendingUp className="h-5 w-5" />}
                variant="gradient"
              />
              <FinanceCard
                title="Monthly Expenses"
                value={18950}
                change={{ value: 3.1, type: "increase", period: "vs last month" }}
                icon={<ArrowUpRight className="h-5 w-5" />}
              />
              <FinanceCard
                title="Savings Goal"
                value={75}
                change={{ value: 12.5, type: "increase", period: "progress" }}
                icon={<PiggyBank className="h-5 w-5" />}
                suffix="%"
              />
              <FinanceCard
                title="Credit Score"
                value={785}
                change={{ value: 15, type: "increase", period: "points up" }}
                icon={<Star className="h-5 w-5" />}
              />
            </div>

            {/* Quick Actions with functional buttons */}
            <QuickActions
              actions={[
                {
                  id: "transfer",
                  label: "Transfer Money",
                  icon: <Send className="h-5 w-5" />,
                  onClick: () => setActiveTab("transfers"),
                  variant: "primary",
                },
                {
                  id: "statements",
                  label: "Download Statements",
                  icon: <FileText className="h-5 w-5" />,
                  onClick: () => setActiveTab("statements"),
                },
                {
                  id: "search",
                  label: "Search Transactions",
                  icon: <Search className="h-5 w-5" />,
                  onClick: () => setActiveTab("ledger"),
                },
              ]}
              className="mb-6"
            />

            {/* Recent Transaction List */}
            <TransactionList transactions={sortedTransactions.slice(0, 10)} title="Recent Activity" className="mb-6" />
          </TabsContent>

          {/* Accounts Tab */}
          <TabsContent value="accounts" className="space-y-6">
            <div className="grid gap-6">
              {accounts.map((account) => (
                <Card key={account.id} className="overflow-hidden bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                  <div className="flex flex-col md:flex-row">
                    <div className="p-6 flex-1">
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                            account.type === "checking"
                              ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white"
                              : "bg-gradient-to-br from-green-500 to-green-600 text-white"
                          }`}
                        >
                          {account.type === "checking" ? (
                            <Wallet className="h-6 w-6" />
                          ) : (
                            <PiggyBank className="h-6 w-6" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{account.name}</h3>
                          <p className="text-sm text-gray-500">
                            {account.number} • {account.interestRate} APY
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6 mb-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Available Balance</p>
                          <p className="text-2xl font-bold text-gray-900">
                            {showBalances
                              ? `$${account.availableBalance.toLocaleString("en-US", {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}`
                              : "••••••"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Current Balance</p>
                          <p className="text-2xl font-bold text-gray-900">
                            {showBalances
                              ? `$${account.balance.toLocaleString("en-US", {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}`
                              : "••••••"}
                          </p>
                        </div>
                      </div>

                      {/* Add Account Details Button and Display */}
                      <div className="mt-4 border-t pt-4">
                        <Button
                          variant="outline"
                          onClick={toggleAccountDetails}
                          className="w-full flex items-center justify-center"
                        >
                          {showAccountDetails ? "Hide Account Details" : "Show Account Details"}
                        </Button>

                        {showAccountDetails && (
                          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-xs text-amber-700 font-medium">Account Number</p>
                                <p className="text-sm font-bold text-amber-900">{account.id}</p>
                              </div>
                              <div>
                                <p className="text-xs text-amber-700 font-medium">Routing Number</p>
                                <p className="text-sm font-bold text-amber-900">{account.routingNumber}</p>
                              </div>
                            </div>
                            <p className="text-xs text-amber-600 mt-2">
                              <Shield className="h-3 w-3 inline mr-1" />
                              This information is sensitive. Please keep it secure.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 border-t md:border-t-0 md:border-l border-gray-200 md:w-72">
                      <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
                      <div className="space-y-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start hover:bg-white"
                          onClick={() => setActiveTab("transfers")}
                        >
                          <ArrowUpRight className="h-4 w-4 mr-2" />
                          Transfer Money
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start hover:bg-white"
                          onClick={() => setActiveTab("statements")}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download Statement
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start hover:bg-white"
                          onClick={() => setActiveTab("ledger")}
                        >
                          <Search className="h-4 w-4 mr-2" />
                          Search Transactions
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start hover:bg-white">
                          <Settings className="h-4 w-4 mr-2" />
                          Account Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Statements Tab with the new StatementCenter component */}
          <TabsContent value="statements" className="space-y-6">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Use the new StatementCenter component */}
              <StatementCenter />

              {/* Keep the existing document managers */}
              <DocumentManager />
              <FileUploadManager />
            </div>
          </TabsContent>

          {/* Transfers Tab */}
          <TabsContent value="transfers">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Transfer Funds</CardTitle>
                <CardDescription>Move money between your accounts or to external recipients</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="from">From Account</Label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
                      <option>Business Checking (****1078) - $52,814.17</option>
                      <option>Business Savings (****2074) - $22,000.00</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="to">To Account</Label>
                    <Input id="to" placeholder="Select destination account or enter external account" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="amount">Amount</Label>
                    <Input id="amount" type="number" placeholder="0.00" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="memo">Memo (Optional)</Label>
                    <Input id="memo" placeholder="Add a note for this transfer" />
                  </div>
                </form>
              </CardContent>
              <CardContent>
                <Button
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                  onClick={() =>
                    toast({
                      title: "Transfer Initiated!",
                      description: "Your transfer has been successfully processed.",
                    })
                  }
                >
                  <Send className="h-4 w-4 mr-2" />
                  Initiate Transfer
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences and security settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">Email Notifications</Label>
                      <p className="text-sm text-gray-500">Receive account alerts via email</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">Two-Factor Authentication</Label>
                      <p className="text-sm text-gray-500">Add an extra layer of security</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">Paperless Statements</Label>
                      <p className="text-sm text-gray-500">Receive statements electronically</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="pt-4 border-t">
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                      Save Changes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
