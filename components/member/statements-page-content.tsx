"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import {
  FileText,
  Download,
  Eye,
  Upload,
  CheckCircle2,
  AlertCircle,
  Paperclip,
  X,
  Calendar,
  Building2,
  DollarSign,
  TrendingUp,
  TrendingDown,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Statement {
  month: string
  available: boolean
  fileName?: string
  beginningBalance?: number
  endingBalance?: number
  deposits?: number
  withdrawals?: number
}

interface UploadedFile {
  file: File
  url: string
  uploadDate: string
  originalName: string
}

interface StatementsPageContentProps {
  statements: Statement[]
}

export function StatementsPageContent({ statements }: StatementsPageContentProps) {
  const [uploadedStatements, setUploadedStatements] = useState<Record<string, UploadedFile>>({})
  const { toast } = useToast()

  // Load uploaded statements from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("pp-commercial-uploaded-statements")
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
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

  // Save uploaded statements to localStorage
  useEffect(() => {
    const toSave: Record<string, { url: string; uploadDate: string; originalName: string }> = {}

    Object.keys(uploadedStatements).forEach((key) => {
      toSave[key] = {
        url: uploadedStatements[key].url,
        uploadDate: uploadedStatements[key].uploadDate,
        originalName: uploadedStatements[key].originalName,
      }
    })

    localStorage.setItem("pp-commercial-uploaded-statements", JSON.stringify(toSave))
  }, [uploadedStatements])

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, statement: Statement) => {
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

    const url = URL.createObjectURL(file)
    const uploadDate = new Date().toISOString()

    setUploadedStatements((prev) => ({
      ...prev,
      [statement.month]: {
        file,
        url,
        uploadDate,
        originalName: file.name,
      },
    }))

    toast({
      title: "Statement Uploaded Successfully",
      description: `${statement.month} 2025 statement has been attached and is now available.`,
    })

    event.target.value = ""
  }

  const viewStatement = (statement: Statement) => {
    const uploadedFile = uploadedStatements[statement.month]

    if (uploadedFile) {
      // View uploaded file
      window.open(uploadedFile.url, "_blank")
      toast({
        title: "Statement Opened",
        description: `Viewing ${statement.month} 2025 statement.`,
      })
    } else if (statement.available && statement.fileName) {
      // View server file
      window.open(`/statements/${statement.fileName}`, "_blank")
      toast({
        title: "Statement Opened",
        description: `Viewing ${statement.month} 2025 statement.`,
      })
    } else {
      toast({
        title: "Statement Not Available",
        description: "Please upload this statement first.",
        variant: "destructive",
      })
    }
  }

  const downloadStatement = (statement: Statement) => {
    const uploadedFile = uploadedStatements[statement.month]

    if (uploadedFile) {
      // Download uploaded file
      const link = document.createElement("a")
      link.href = uploadedFile.url
      link.download = uploadedFile.originalName
      link.click()

      toast({
        title: "Statement Downloaded",
        description: `${statement.month} 2025 statement downloaded successfully.`,
      })
    } else if (statement.available && statement.fileName) {
      // Download server file
      const link = document.createElement("a")
      link.href = `/statements/${statement.fileName}`
      link.download = statement.fileName
      link.click()

      toast({
        title: "Statement Downloaded",
        description: `${statement.month} 2025 statement downloaded successfully.`,
      })
    } else {
      toast({
        title: "Statement Not Available",
        description: "Please upload this statement first.",
        variant: "destructive",
      })
    }
  }

  const removeUploadedStatement = (statement: Statement) => {
    const uploadedFile = uploadedStatements[statement.month]

    if (uploadedFile) {
      URL.revokeObjectURL(uploadedFile.url)

      setUploadedStatements((prev) => {
        const newState = { ...prev }
        delete newState[statement.month]
        return newState
      })

      toast({
        title: "Uploaded Statement Removed",
        description: `${statement.month} 2025 uploaded statement has been removed.`,
      })
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  // Calculate progress
  const totalStatements = statements.length
  const availableCount = statements.filter(
    (statement) => statement.available || uploadedStatements[statement.month],
  ).length
  const uploadProgress = totalStatements > 0 ? Math.round((availableCount / totalStatements) * 100) : 0

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center">
                <Building2 className="h-6 w-6 mr-3 text-amber-600" />
                PP Commercial Banking Statements
              </CardTitle>
              <p className="text-gray-600 mt-1">Account: 333475631078 • Joshua C Voehringer • 2025 Statements</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Statement Year</div>
              <div className="text-lg font-semibold">2025</div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Progress Card */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="font-medium text-gray-900">Statement Availability Progress</div>
            <div className="text-sm text-gray-600">
              {availableCount} of {totalStatements} Available ({uploadProgress}%)
            </div>
          </div>
          <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-amber-500 to-amber-600 h-3 transition-all duration-500 ease-out"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        </CardContent>
      </Card>

      {/* Statements Grid */}
      <div className="grid gap-4">
        {statements.map((statement) => {
          const uploadedFile = uploadedStatements[statement.month]
          const hasUploadedFile = !!uploadedFile
          const hasServerFile = statement.available
          const isAvailable = hasUploadedFile || hasServerFile

          return (
            <Card
              key={statement.month}
              className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  {/* Left Side - Statement Info */}
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isAvailable ? "bg-green-100" : "bg-amber-100"
                      }`}
                    >
                      {isAvailable ? (
                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                      ) : (
                        <FileText className="h-6 w-6 text-amber-600" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold">{statement.month} 2025 Statement</h3>
                        {isAvailable && (
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Available
                          </Badge>
                        )}
                        {!isAvailable && (
                          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                            <Upload className="h-3 w-3 mr-1" />
                            Upload Required
                          </Badge>
                        )}
                      </div>

                      <div className="text-sm text-gray-600 mt-1">
                        <Calendar className="h-3 w-3 inline mr-1" />
                        Statement Period: {statement.month} 1-31, 2025
                      </div>

                      {/* Balance Information */}
                      {statement.available && statement.beginningBalance !== undefined && (
                        <div className="flex items-center space-x-4 mt-2 text-sm">
                          <div className="flex items-center text-blue-600">
                            <DollarSign className="h-3 w-3 mr-1" />
                            Beginning: {formatCurrency(statement.beginningBalance)}
                          </div>
                          <div className="flex items-center text-green-600">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Ending: {formatCurrency(statement.endingBalance || 0)}
                          </div>
                          {statement.deposits && statement.deposits > 0 && (
                            <div className="flex items-center text-emerald-600">
                              <span className="text-xs">+{formatCurrency(statement.deposits)}</span>
                            </div>
                          )}
                          {statement.withdrawals && statement.withdrawals < 0 && (
                            <div className="flex items-center text-red-600">
                              <TrendingDown className="h-3 w-3 mr-1" />
                              <span className="text-xs">{formatCurrency(statement.withdrawals)}</span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* File Source Info */}
                      {hasUploadedFile && (
                        <div className="flex items-center mt-2 text-sm text-blue-600">
                          <Paperclip className="h-3 w-3 mr-1" />
                          Uploaded: {uploadedFile.originalName}
                          <span className="text-gray-500 ml-2">
                            ({new Date(uploadedFile.uploadDate).toLocaleDateString()})
                          </span>
                        </div>
                      )}

                      {hasServerFile && !hasUploadedFile && (
                        <div className="flex items-center mt-2 text-sm text-green-600">
                          <FileText className="h-3 w-3 mr-1" />
                          Server File: {statement.fileName}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Side - Actions */}
                  <div className="flex items-center space-x-2">
                    {isAvailable ? (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => viewStatement(statement)}
                          className="bg-blue-50 hover:bg-blue-100 border-blue-200"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => downloadStatement(statement)}
                          className="bg-green-50 hover:bg-green-100 border-green-200"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                        {hasUploadedFile && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeUploadedStatement(statement)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </>
                    ) : (
                      <label className="cursor-pointer">
                        <Button variant="outline" size="sm" className="bg-amber-50 hover:bg-amber-100 border-amber-200">
                          <Upload className="h-4 w-4 mr-1" />
                          Upload PDF
                        </Button>
                        <Input
                          type="file"
                          accept="application/pdf"
                          className="hidden"
                          onChange={(e) => handleFileUpload(e, statement)}
                        />
                      </label>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Account Summary Card */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 shadow-lg">
        <CardContent className="p-6">
          <h4 className="font-semibold text-amber-900 mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            2025 Account Summary
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-700">
                {formatCurrency(statements.find((s) => s.month === "February")?.beginningBalance || 0)}
              </div>
              <div className="text-sm text-amber-600">Feb Starting</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-700">
                {formatCurrency(statements.find((s) => s.month === "May")?.endingBalance || 0)}
              </div>
              <div className="text-sm text-green-600">May Ending</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-700">
                {formatCurrency(statements.filter((s) => s.deposits).reduce((sum, s) => sum + (s.deposits || 0), 0))}
              </div>
              <div className="text-sm text-blue-600">Total Deposits</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-700">
                {formatCurrency(
                  statements.filter((s) => s.withdrawals).reduce((sum, s) => sum + (s.withdrawals || 0), 0),
                )}
              </div>
              <div className="text-sm text-red-600">Total Withdrawals</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Help Section */}
      <Card className="bg-blue-50/80 backdrop-blur-sm border-blue-200 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900 mb-2">Statement Management</h4>
              <div className="text-sm text-blue-800 space-y-1">
                <p>
                  • <strong>Server Files:</strong> Pre-loaded statements are automatically available with full
                  transaction details
                </p>
                <p>
                  • <strong>Upload Files:</strong> Upload your own PDF statements for missing months
                </p>
                <p>
                  • <strong>Priority:</strong> Uploaded files take precedence over server files
                </p>
                <p>
                  • <strong>Support:</strong> Contact PP Commercial Banking at 1-800-PPC-BANK for assistance
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
