"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Calendar, Search, Eye, Mail, CheckCircle, Clock } from "lucide-react"
import { useAuth } from "@/components/auth/auth-context"

interface Statement {
  id: string
  month: string
  year: number
  accountType: string
  accountNumber: string
  statementDate: string
  pages: number
  size: string
  status: "available" | "processing" | "archived"
}

export function MemberStatementsPage() {
  const { user } = useAuth()
  const [selectedAccount, setSelectedAccount] = useState("all")
  const [selectedYear, setSelectedYear] = useState("2024")
  const [searchTerm, setSearchTerm] = useState("")

  // User-specific statements (in real app, this would come from API based on user ID)
  const statements: Statement[] = [
    {
      id: `${user?.userId}-stmt-2024-06`,
      month: "June",
      year: 2024,
      accountType: "Business Checking",
      accountNumber: "****1234",
      statementDate: "2024-06-30",
      pages: 8,
      size: "2.4 MB",
      status: "available",
    },
    {
      id: `${user?.userId}-stmt-2024-05`,
      month: "May",
      year: 2024,
      accountType: "Business Checking",
      accountNumber: "****1234",
      statementDate: "2024-05-31",
      pages: 12,
      size: "3.1 MB",
      status: "available",
    },
    {
      id: `${user?.userId}-stmt-2024-04`,
      month: "April",
      year: 2024,
      accountType: "Business Checking",
      accountNumber: "****1234",
      statementDate: "2024-04-30",
      pages: 10,
      size: "2.8 MB",
      status: "available",
    },
    {
      id: `${user?.userId}-stmt-2024-06-savings`,
      month: "June",
      year: 2024,
      accountType: "Business Savings",
      accountNumber: "****5678",
      statementDate: "2024-06-30",
      pages: 3,
      size: "1.2 MB",
      status: "available",
    },
    {
      id: `${user?.userId}-stmt-2024-07`,
      month: "July",
      year: 2024,
      accountType: "Business Checking",
      accountNumber: "****1234",
      statementDate: "2024-07-31",
      pages: 0,
      size: "0 MB",
      status: "processing",
    },
  ]

  const accounts = [
    { value: "all", label: "All Accounts" },
    { value: "****1234", label: "Business Checking (****1234)" },
    { value: "****5678", label: "Business Savings (****5678)" },
    { value: "****9012", label: "Business Credit Card (****9012)" },
  ]

  const years = ["2024", "2023", "2022", "2021", "2020"]

  const filteredStatements = statements.filter((statement) => {
    const matchesAccount = selectedAccount === "all" || statement.accountNumber === selectedAccount
    const matchesYear = statement.year.toString() === selectedYear
    const matchesSearch =
      searchTerm === "" ||
      statement.month.toLowerCase().includes(searchTerm.toLowerCase()) ||
      statement.accountType.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesAccount && matchesYear && matchesSearch
  })

  const handleDownload = (statement: Statement) => {
    console.log(`Downloading statement: ${statement.id} for user: ${user?.userId}`)
    // In real app, this would download user-specific statement
  }

  const handleEmailStatement = (statement: Statement) => {
    console.log(`Emailing statement: ${statement.id} to user: ${user?.userId}`)
    // In real app, this would email to user's registered email
  }

  const getStatusBadge = (status: Statement["status"]) => {
    switch (status) {
      case "available":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            Available
          </Badge>
        )
      case "processing":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            <Clock className="h-3 w-3 mr-1" />
            Processing
          </Badge>
        )
      case "archived":
        return (
          <Badge variant="secondary" className="bg-gray-100 text-gray-800">
            Archived
          </Badge>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Bank Statements</h1>
          <p className="text-gray-600 mt-1">Download your monthly account statements for {user?.company}</p>
        </div>

        {/* Filters */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Account</label>
            <select
              value={selectedAccount}
              onChange={(e) => setSelectedAccount(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              {accounts.map((account) => (
                <option key={account.value} value={account.value}>
                  {account.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search statements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Statements List */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {filteredStatements.length} Statement{filteredStatements.length !== 1 ? "s" : ""} Found
          </h2>
        </div>

        <div className="grid gap-4">
          {filteredStatements.map((statement) => (
            <Card key={statement.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {statement.month} {statement.year} Statement
                      </h3>
                      <p className="text-gray-600">
                        {statement.accountType} {statement.accountNumber}
                      </p>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(statement.statementDate).toLocaleDateString()}
                        </span>
                        {statement.status === "available" && (
                          <>
                            <span>{statement.pages} pages</span>
                            <span>{statement.size}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    {getStatusBadge(statement.status)}

                    {statement.status === "available" && (
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEmailStatement(statement)}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          <Mail className="h-4 w-4 mr-1" />
                          Email
                        </Button>
                        <Button variant="outline" size="sm" className="text-gray-600 hover:text-gray-900">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleDownload(statement)}
                          className="bg-amber-600 hover:bg-amber-700"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    )}

                    {statement.status === "processing" && (
                      <p className="text-sm text-gray-500">Available in 1-2 business days</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredStatements.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Statements Found</h3>
              <p className="text-gray-600">
                Try adjusting your filters or search terms to find the statements you're looking for.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
