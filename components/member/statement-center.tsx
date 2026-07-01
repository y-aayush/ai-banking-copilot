"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import {
  FileText,
  Download,
  Eye,
  Upload,
  Calendar,
  DollarSign,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertCircle,
  Paperclip,
  X,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface StatementData {
  month: string
  year: number
  period: string
  accountNumber: string
  beginningBalance: string
  endingBalance: string
  deposits: string
  withdrawals: string
  fileName: string
}

interface UploadedFile {
  file: File
  url: string
  uploadDate: string
  originalName: string
}

const STATEMENTS: StatementData[] = [
  {
    month: "February",
    year: 2025,
    period: "Feb. 1, 2025 - Feb. 28, 2025",
    accountNumber: "333475631078",
    beginningBalance: "$31,323.82",
    endingBalance: "$28,279.52",
    deposits: "$33,618.69",
    withdrawals: "$-36,662.99",
    fileName: "PP_Commercial_Statement_February_2025.pdf",
  },
  {
    month: "March",
    year: 2025,
    period: "Mar. 1, 2025 - Mar. 31, 2025",
    accountNumber: "333475631078",
    beginningBalance: "$28,279.52",
    endingBalance: "$33,435.12",
    deposits: "$41,582.07",
    withdrawals: "$-36,426.47",
    fileName: "PP_Commercial_Statement_March_2025.pdf",
  },
  {
    month: "April",
    year: 2025,
    period: "Apr. 1, 2025 - Apr. 30, 2025",
    accountNumber: "333475631078",
    beginningBalance: "$33,435.12",
    endingBalance: "$34,902.54",
    deposits: "$40,241.61",
    withdrawals: "$-38,774.19",
    fileName: "PP_Commercial_Statement_April_2025.pdf",
  },
  {
    month: "May",
    year: 2025,
    period: "May. 1, 2025 - May. 31, 2025",
    accountNumber: "333475631078",
    beginningBalance: "$34,902.54",
    endingBalance: "$47,614.17",
    deposits: "$51,730.31",
    withdrawals: "$-39,018.68",
    fileName: "PP_Commercial_Statement_May_2025.pdf",
  },
]

export function StatementCenter() {
  const [uploadedStatements, setUploadedStatements] = useState<Record<string, UploadedFile>>({})
  const [expandedStatement, setExpandedStatement] = useState<string | null>(null)
  const [selectedYear, setSelectedYear] = useState<number>(2025)
  const { toast } = useToast()

  // Load previously uploaded statements from localStorage
  useEffect(() => {
    const savedStatements = localStorage.getItem("pp-commercial-statements")
    if (savedStatements) {
      try {
        const parsed = JSON.parse(savedStatements)
        const restored: Record<string, UploadedFile> = {}

        Object.keys(parsed).forEach((key) => {
          restored[key] = {
            file: new File([], parsed[key].originalName, { type: "application/pdf" }),
            url: parsed[key].url,
            uploadDate: parsed[key].uploadDate,
            originalName: parsed[key].originalName,
          }
        })

        setUploadedStatements(restored)
      } catch (error) {
        console.error("Error loading saved statements:", error)
      }
    }
  }, [])

  // Save uploaded statements to localStorage whenever they change
  useEffect(() => {
    const toSave: Record<string, { url: string; uploadDate: string; originalName: string }> = {}

    Object.keys(uploadedStatements).forEach((key) => {
      toSave[key] = {
        url: uploadedStatements[key].url,
        uploadDate: uploadedStatements[key].uploadDate,
        originalName: uploadedStatements[key].originalName,
      }
    })

    localStorage.setItem("pp-commercial-statements", JSON.stringify(toSave))
  }, [uploadedStatements])

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, statement: StatementData) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (file.type !== "application/pdf") {
      toast({
        title: "Invalid File Type",
        description: "Please upload a PDF file.",
        variant: "destructive",
      })
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File Too Large",
        description: "Please upload a file smaller than 10MB.",
        variant: "destructive",
      })
      return
    }

    // Create a blob URL for the file
    const url = URL.createObjectURL(file)
    const uploadDate = new Date().toISOString()

    // Add the file to our state with attachment info
    setUploadedStatements((prev) => ({
      ...prev,
      [`${statement.month}-${statement.year}`]: {
        file,
        url,
        uploadDate,
        originalName: file.name,
      },
    }))

    toast({
      title: "Statement Uploaded & Attached",
      description: `${statement.month} ${statement.year} statement has been attached to this period.`,
    })

    // Reset the file input
    event.target.value = ""
  }

  const viewStatement = (statement: StatementData) => {
    const key = `${statement.month}-${statement.year}`
    const uploadedFile = uploadedStatements[key]

    if (uploadedFile) {
      window.open(uploadedFile.url, "_blank")
      toast({
        title: "Statement Opened",
        description: `Viewing attached ${statement.month} ${statement.year} statement.`,
      })
    } else {
      toast({
        title: "No Statement Attached",
        description: "Please upload and attach a statement for this period first.",
        variant: "destructive",
      })
    }
  }

  const downloadStatement = (statement: StatementData) => {
    const key = `${statement.month}-${statement.year}`
    const uploadedFile = uploadedStatements[key]

    if (uploadedFile) {
      const link = document.createElement("a")
      link.href = uploadedFile.url
      link.download = uploadedFile.originalName
      link.click()

      toast({
        title: "Statement Downloaded",
        description: `Downloaded attached ${statement.month} ${statement.year} statement.`,
      })
    } else {
      toast({
        title: "No Statement Attached",
        description: "Please upload and attach a statement for this period first.",
        variant: "destructive",
      })
    }
  }

  const removeAttachment = (statement: StatementData) => {
    const key = `${statement.month}-${statement.year}`
    const uploadedFile = uploadedStatements[key]

    if (uploadedFile) {
      // Revoke the blob URL to free memory
      URL.revokeObjectURL(uploadedFile.url)

      // Remove the statement from our state
      setUploadedStatements((prev) => {
        const newState = { ...prev }
        delete newState[key]
        return newState
      })

      toast({
        title: "Attachment Removed",
        description: `${statement.month} ${statement.year} statement attachment has been removed.`,
      })
    }
  }

  const toggleExpandStatement = (statementKey: string) => {
    if (expandedStatement === statementKey) {
      setExpandedStatement(null)
    } else {
      setExpandedStatement(statementKey)
    }
  }

  // Filter statements by selected year
  const filteredStatements = STATEMENTS.filter((statement) => statement.year === selectedYear)

  // Calculate upload progress
  const totalStatements = filteredStatements.length
  const uploadedCount = filteredStatements.filter(
    (statement) => uploadedStatements[`${statement.month}-${statement.year}`],
  ).length
  const uploadProgress = totalStatements > 0 ? Math.round((uploadedCount / totalStatements) * 100) : 0

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl flex items-center">
              <FileText className="h-5 w-5 mr-2 text-amber-600" />
              Account Statements
            </CardTitle>
            <CardDescription>Upload and attach your PP Commercial bank statements to each period</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm"
            >
              <option value={2025}>2025</option>
              <option value={2024}>2024</option>
            </select>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Upload Progress */}
        <div className="bg-amber-50 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="font-medium text-amber-900">Statement Attachment Progress</div>
            <div className="text-sm text-amber-700">
              {uploadedCount} of {totalStatements} Attached ({uploadProgress}%)
            </div>
          </div>
          <div className="w-full bg-amber-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-amber-600 h-2 transition-all duration-300 ease-out"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Statements List */}
        <div className="space-y-4">
          {filteredStatements.map((statement) => {
            const statementKey = `${statement.month}-${statement.year}`
            const uploadedFile = uploadedStatements[statementKey]
            const isAttached = !!uploadedFile
            const isExpanded = expandedStatement === statementKey

            return (
              <div
                key={statementKey}
                className="border rounded-lg overflow-hidden bg-white transition-all duration-200 hover:shadow-md"
              >
                {/* Statement Header */}
                <div
                  className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 ${isExpanded ? "border-b" : ""}`}
                  onClick={() => toggleExpandStatement(statementKey)}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${isAttached ? "bg-green-100" : "bg-amber-100"}`}
                    >
                      {isAttached ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      ) : (
                        <FileText className="h-5 w-5 text-amber-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium flex items-center">
                        {statement.month} {statement.year} Statement
                        {isAttached && (
                          <div className="ml-2 flex items-center">
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                              <Paperclip className="h-3 w-3 mr-1" />
                              Attached
                            </Badge>
                          </div>
                        )}
                        {!isAttached && (
                          <Badge className="ml-2 bg-amber-100 text-amber-800 hover:bg-amber-100">
                            <Upload className="h-3 w-3 mr-1" />
                            Upload Required
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-gray-500">
                        Period: {statement.period}
                        {isAttached && (
                          <span className="ml-2 text-green-600">• Attached: {uploadedFile.originalName}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {isAttached ? (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            viewStatement(statement)
                          }}
                          className="bg-blue-50 hover:bg-blue-100 border-blue-200"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            downloadStatement(statement)
                          }}
                          className="bg-green-50 hover:bg-green-100 border-green-200"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </>
                    ) : (
                      <label className="cursor-pointer">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => e.stopPropagation()}
                          className="bg-amber-50 hover:bg-amber-100 border-amber-200"
                        >
                          <Upload className="h-4 w-4 mr-1" />
                          Attach PDF
                        </Button>
                        <Input
                          type="file"
                          accept="application/pdf"
                          className="hidden"
                          onChange={(e) => {
                            e.stopPropagation()
                            handleFileUpload(e, statement)
                          }}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </label>
                    )}
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>

                {/* Statement Details (Expanded View) */}
                {isExpanded && (
                  <div className="p-4 bg-gray-50">
                    {/* Attachment Info */}
                    {isAttached && (
                      <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Paperclip className="h-4 w-4 text-green-600 mr-2" />
                            <div>
                              <div className="text-sm font-medium text-green-800">
                                Attached Document: {uploadedFile.originalName}
                              </div>
                              <div className="text-xs text-green-600">
                                Uploaded: {new Date(uploadedFile.uploadDate).toLocaleDateString()} at{" "}
                                {new Date(uploadedFile.uploadDate).toLocaleTimeString()}
                              </div>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            onClick={(e) => {
                              e.stopPropagation()
                              removeAttachment(statement)
                            }}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Financial Summary */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white p-3 rounded-lg border">
                        <div className="text-xs text-gray-500">Beginning Balance</div>
                        <div className="font-medium flex items-center">
                          <DollarSign className="h-3 w-3 text-gray-400 mr-1" />
                          {statement.beginningBalance}
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border">
                        <div className="text-xs text-gray-500">Ending Balance</div>
                        <div className="font-medium flex items-center">
                          <DollarSign className="h-3 w-3 text-gray-400 mr-1" />
                          {statement.endingBalance}
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border">
                        <div className="text-xs text-gray-500">Deposits/Credits</div>
                        <div className="font-medium text-green-600 flex items-center">
                          <DollarSign className="h-3 w-3 text-green-400 mr-1" />
                          {statement.deposits}
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border">
                        <div className="text-xs text-gray-500">Withdrawals/Debits</div>
                        <div className="font-medium text-gray-800 flex items-center">
                          <DollarSign className="h-3 w-3 text-gray-400 mr-1" />
                          {statement.withdrawals}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        <Calendar className="h-3 w-3 inline mr-1" />
                        Account: {statement.accountNumber}
                      </div>

                      {isAttached && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={(e) => {
                            e.stopPropagation()
                            removeAttachment(statement)
                          }}
                        >
                          <X className="h-4 w-4 mr-1" />
                          Remove Attachment
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}

          {filteredStatements.length === 0 && (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-gray-300 mx-auto mb-2" />
              <p className="text-gray-500">No statements available for {selectedYear}.</p>
            </div>
          )}
        </div>

        {/* Help Text */}
        <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
            <div>
              <p className="font-medium mb-1">How Statement Attachments Work</p>
              <p>
                Upload your monthly statements to attach them to each specific period. Once attached, statements will
                show a <Paperclip className="h-3 w-3 inline mx-1" /> icon and can be viewed or downloaded anytime. The
                original filename and upload date are preserved for your records.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
