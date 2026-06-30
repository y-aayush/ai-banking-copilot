"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { FileText } from "lucide-react"

const STATEMENTS = ["January", "February", "March", "April", "May"]

export function StatementManager() {
  const [uploads, setUploads] = useState({})

  useEffect(() => {
    const saved = localStorage.getItem("pp-commercial-statements")
    if (saved) {
      setUploads(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("pp-commercial-statements", JSON.stringify(uploads))
  }, [uploads])

  const handleUpload = (e, month) => {
    const file = e.target.files[0]
    if (!file) return
    if (file.type !== "application/pdf" || file.size > 10 * 1024 * 1024) {
      alert("Only PDFs under 10MB are allowed.")
      return
    }
    const url = URL.createObjectURL(file)
    setUploads((prev) => ({ ...prev, [month]: { url, name: file.name } }))
  }

  const handleRemove = (month) => {
    setUploads((prev) => {
      const copy = { ...prev }
      if (copy[month]?.url) {
        URL.revokeObjectURL(copy[month].url)
      }
      delete copy[month]
      return copy
    })
  }

  const uploadedCount = Object.keys(uploads).length
  const total = STATEMENTS.length
  const completion = Math.round((uploadedCount / total) * 100)

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center">
          <FileText className="h-5 w-5 mr-2 text-amber-600" />
          Bank Statements
        </CardTitle>
        <CardDescription>Monthly account statements from PP Commercial</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Progress Section */}
        <div className="border p-4 rounded-lg bg-amber-50/50">
          <div className="flex justify-between items-center mb-4">
            <div className="font-medium text-amber-900">Upload Progress</div>
            <div className="text-sm text-amber-700">
              {uploadedCount} / {total} Uploaded ({completion}%)
            </div>
          </div>
          <div className="w-full bg-amber-200 h-3 rounded-full overflow-hidden">
            <div
              className="bg-amber-600 h-3 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${completion}%` }}
            ></div>
          </div>
        </div>

        {/* Statements List */}
        <ul className="space-y-3">
          {STATEMENTS.map((month) => {
            const isUploaded = uploads[month]
            return (
              <li
                key={month}
                className="flex justify-between items-center border p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isUploaded ? "bg-green-100" : "bg-gray-100"
                    }`}
                  >
                    {isUploaded ? (
                      <span className="text-green-600 text-lg">✅</span>
                    ) : (
                      <FileText className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{month} 2025 Statement</div>
                    <div className="text-sm text-gray-500">Account: ****1078 • Business Checking</div>
                    <div className="text-xs text-gray-400 mt-1">
                      {isUploaded ? (
                        <span className="text-green-600 font-medium">✓ Available for viewing</span>
                      ) : (
                        <span className="text-amber-600">Upload required</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  {!isUploaded && (
                    <label className="cursor-pointer bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Upload PDF
                      <input
                        type="file"
                        accept="application/pdf"
                        className="hidden"
                        onChange={(e) => handleUpload(e, month)}
                      />
                    </label>
                  )}

                  {isUploaded && (
                    <>
                      <a
                        href={uploads[month].url}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        View
                      </a>
                      <a
                        href={uploads[month].url}
                        download={uploads[month].name}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Download
                      </a>
                      <button
                        onClick={() => handleRemove(month)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Remove
                      </button>
                    </>
                  )}
                </div>
              </li>
            )
          })}
        </ul>

        {/* Summary Footer */}
        <div className="text-center text-sm text-gray-500 pt-4 border-t">
          {completion === 100 ? (
            <span className="text-green-600 font-medium">🎉 All statements uploaded successfully!</span>
          ) : (
            <span>Upload your monthly statements to access them anytime</span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
