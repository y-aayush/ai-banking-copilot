"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Upload, FileText, X, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  uploadDate: Date
  category: "statement" | "tax" | "account"
}

export function FileUploadManager() {
  const [dragActive, setDragActive] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [uploading, setUploading] = useState(false)
  const { toast } = useToast()

  // Handle drag events
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  // Handle drop
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }

  // Handle file input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files)
    }
  }

  // Process uploaded files
  const handleFiles = async (files: FileList) => {
    setUploading(true)

    for (let i = 0; i < files.length; i++) {
      const file = files[i]

      // Validate file type
      if (file.type !== "application/pdf") {
        toast({
          title: "Invalid File Type",
          description: `${file.name} is not a PDF file. Only PDF files are accepted.`,
          variant: "destructive",
        })
        continue
      }

      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: `${file.name} is too large. Maximum file size is 10MB.`,
          variant: "destructive",
        })
        continue
      }

      // Determine category based on filename
      let category: "statement" | "tax" | "account" = "account"
      if (file.name.toLowerCase().includes("statement")) {
        category = "statement"
      } else if (file.name.toLowerCase().includes("1099") || file.name.toLowerCase().includes("tax")) {
        category = "tax"
      }

      // Simulate upload (in real app, this would upload to blob storage)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const uploadedFile: UploadedFile = {
        id: `file-${Date.now()}-${i}`,
        name: file.name,
        size: file.size,
        type: file.type,
        uploadDate: new Date(),
        category,
      }

      setUploadedFiles((prev) => [...prev, uploadedFile])

      toast({
        title: "File Uploaded Successfully",
        description: `${file.name} has been uploaded and is now available.`,
      })
    }

    setUploading(false)
  }

  // Remove uploaded file
  const removeFile = (fileId: string) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId))
    toast({
      title: "File Removed",
      description: "The file has been removed from your documents.",
    })
  }

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Upload className="h-5 w-5 mr-2 text-amber-600" />
          Upload Documents
        </CardTitle>
        <CardDescription>Upload your bank statements, tax documents, and other account-related files</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Upload Area */}
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive ? "border-amber-500 bg-amber-50" : "border-gray-300 hover:border-amber-400 hover:bg-gray-50"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            multiple
            accept=".pdf"
            onChange={handleChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={uploading}
          />

          <div className="space-y-4">
            <div className="mx-auto w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <Upload className="h-6 w-6 text-amber-600" />
            </div>

            <div>
              <p className="text-lg font-medium text-gray-900">
                {uploading ? "Uploading..." : "Drop files here or click to browse"}
              </p>
              <p className="text-sm text-gray-500 mt-1">PDF files only, up to 10MB each</p>
            </div>

            {uploading && (
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-amber-600 h-2 rounded-full animate-pulse" style={{ width: "60%" }}></div>
              </div>
            )}
          </div>
        </div>

        {/* File Requirements */}
        <Alert className="mt-4">
          <FileText className="h-4 w-4" />
          <AlertDescription>
            <strong>Supported files:</strong> Bank statements, tax documents (1099-INT, W-2, etc.), account agreements,
            and other PDF documents related to your account.
          </AlertDescription>
        </Alert>

        {/* Uploaded Files List */}
        {uploadedFiles.length > 0 && (
          <div className="mt-6">
            <h4 className="font-medium text-gray-900 mb-3">Recently Uploaded Files</h4>
            <div className="space-y-2">
              {uploadedFiles.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{file.name}</p>
                      <p className="text-xs text-gray-500">
                        {formatFileSize(file.size)} • {file.category} • {file.uploadDate.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(file.id)}
                    className="text-gray-400 hover:text-red-600"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
