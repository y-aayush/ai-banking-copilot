"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Calendar, Eye, Mail, CheckCircle, Clock } from "lucide-react"
import { useAuth } from "@/components/auth/auth-context"

interface Statement {
  id: string
  month: string
  year: number
  accountType: string
  accountNumber: string
  statementDate: string
  beginningBalance: number
  endingBalance: number
  deposits: number
  withdrawals: number
  pages: number
  size: string
  status: "available" | "processing" | "archived"
}

export function BluevineStatements() {
  const { user } = useAuth()
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null)

  // Bluevine statements data from the provided documents
  const statements: Statement[] = [
    {
      id: "stmt-2025-05",
      month: "May",
      year: 2025,
      accountType: "Business Checking",
      accountNumber: "875106972073",
      statementDate: "2025-05-31",
      beginningBalance: 34902.54,
      endingBalance: 47614.17,
      deposits: 51730.31,
      withdrawals: -39018.68,
      pages: 12,
      size: "3.2 MB",
      status: "available",
    },
    {
      id: "stmt-2025-04",
      month: "April",
      year: 2025,
      accountType: "Business Checking",
      accountNumber: "875106972073",
      statementDate: "2025-04-30",
      beginningBalance: 33435.12,
      endingBalance: 34902.54,
      deposits: 40241.61,
      withdrawals: -38774.19,
      pages: 10,
      size: "2.8 MB",
      status: "available",
    },
    {
      id: "stmt-2025-03",
      month: "March",
      year: 2025,
      accountType: "Business Checking",
      accountNumber: "875106972073",
      statementDate: "2025-03-31",
      beginningBalance: 28279.52,
      endingBalance: 33435.12,
      deposits: 41582.07,
      withdrawals: -36426.47,
      pages: 11,
      size: "3.0 MB",
      status: "available",
    },
    {
      id: "stmt-2025-02",
      month: "February",
      year: 2025,
      accountType: "Business Checking",
      accountNumber: "875106972073",
      statementDate: "2025-02-28",
      beginningBalance: 31323.82,
      endingBalance: 28279.52,
      deposits: 33618.69,
      withdrawals: -36662.99,
      pages: 9,
      size: "2.6 MB",
      status: "available",
    },
    {
      id: "stmt-2025-06",
      month: "June",
      year: 2025,
      accountType: "Business Checking",
      accountNumber: "875106972073",
      statementDate: "2025-06-30",
      beginningBalance: 47614.17,
      endingBalance: 0,
      deposits: 0,
      withdrawals: 0,
      pages: 0,
      size: "0 MB",
      status: "processing",
    },
  ]

  const handleDownload = (statement: Statement) => {
    console.log(`Downloading statement: ${statement.id}`)
    // In a real app, this would download the statement
  }

  const handleEmailStatement = (statement: Statement) => {
    console.log(`Emailing statement: ${statement.id} to ringer@0ne0nes.com`)
    // In a real app, this would email the statement
  }

  const handleViewStatement = (statement: Statement) => {
    setSelectedMonth(statement.month)
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Bluevine Statements</h2>
        <Badge className="bg-blue-100 text-blue-800">External Account</Badge>
      </div>

      <div className="grid gap-4">
        {statements.map((statement) => (
          <Card key={statement.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-blue-600" />
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
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-gray-600 hover:text-gray-900"
                        onClick={() => handleViewStatement(statement)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleDownload(statement)}
                        className="bg-blue-600 hover:bg-blue-700"
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

      {selectedMonth && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>{selectedMonth} 2025 Statement Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {statements
                .filter((stmt) => stmt.month === selectedMonth)
                .map((statement) => (
                  <div key={statement.id} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-500">Beginning Balance</div>
                        <div className="text-xl font-bold">
                          ${statement.beginningBalance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-500">Ending Balance</div>
                        <div className="text-xl font-bold">
                          ${statement.endingBalance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-sm text-green-600">Deposits/Credits</div>
                        <div className="text-xl font-bold text-green-700">
                          +${statement.deposits.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </div>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <div className="text-sm text-red-600">Withdrawals/Debits</div>
                        <div className="text-xl font-bold text-red-700">
                          ${statement.withdrawals.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h4 className="font-medium mb-2">FDIC-Insured Institution Balances</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between p-2 bg-blue-50 rounded">
                          <span>Coastal Community Bank</span>
                          <span className="font-medium">$41,279.46</span>
                        </div>
                        <div className="flex justify-between p-2 bg-blue-50 rounded">
                          <span>Cadence Bank N.A.</span>
                          <span className="font-medium">$14,824.97</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
