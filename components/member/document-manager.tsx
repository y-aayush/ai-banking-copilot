"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardDescription } from "@/components/ui/card"
import { Receipt, Info, Eye, Download, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Document {
  id: string
  name: string
  category: "tax" | "account"
  date: string
  size: string
  path: string
}

export function DocumentManager() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState<"tax" | "account">("tax")
  const { toast } = useToast()

  // Document data with blob paths
  const documents: Document[] = [
    {
      id: "doc-tax-1",
      name: "2024 1099-INT",
      category: "tax",
      date: "2025-01-31",
      size: "1.2 MB",
      path: "/documents/2024_1099-INT.pdf",
    },
    {
      id: "doc-tax-2",
      name: "2023 1099-INT",
      category: "tax",
      date: "2024-01-31",
      size: "1.1 MB",
      path: "/documents/2023_1099-INT.pdf",
    },
    {
      id: "doc-tax-3",
      name: "2024 Year-End Summary",
      category: "tax",
      date: "2025-01-15",
      size: "2.4 MB",
      path: "/documents/2024_Year-End_Summary.pdf",
    },
    {
      id: "doc-account-1",
      name: "Account Agreement",
      category: "account",
      date: "2025-02-01",
      size: "3.5 MB",
      path: "/documents/Account_Agreement.pdf",
    },
    {
      id: "doc-account-2",
      name: "Privacy Policy",
      category: "account",
      date: "2025-02-01",
      size: "1.8 MB",
      path: "/documents/Privacy_Policy.pdf",
    },
    {
      id: "doc-account-3",
      name: "Fee Schedule",
      category: "account",
      date: "2025-02-01",
      size: "1.2 MB",
      path: "/documents/Fee_Schedule.pdf",
    },
  ]

  // Filter documents based on search term and active tab
  const filteredDocuments = documents.filter((document) => {
    const matchesSearch = searchTerm === "" || document.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = document.category === activeTab

    return matchesSearch && matchesCategory
  })

  // View document function
  const viewDocument = (document: Document) => {
    window.open(document.path, "_blank")
    toast({
      title: "Document Opened",
      description: `${document.name} opened in a new tab.`,
    })
  }

  // Download document function
  const downloadDocument = (document: Document) => {
    const link = document.createElement("a")
    link.href = document.path
    link.download = document.name.replace(/\s+/g, "_") + ".pdf"
    link.click()
    toast({
      title: "Document Downloaded",
      description: `${document.name} has been downloaded.`,
    })
  }

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader className="pb-3">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "tax" | "account")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tax" className="data-[state=active]:bg-white">
              <Receipt className="h-4 w-4 mr-2" />
              Tax Documents
            </TabsTrigger>
            <TabsTrigger value="account" className="data-[state=active]:bg-white">
              <Info className="h-4 w-4 mr-2" />
              Account Documents
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <CardDescription>
          {activeTab === "tax" ? "Annual tax forms and summaries" : "Important account information and agreements"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="space-y-3">
          {filteredDocuments.map((document) => (
            <div
              key={document.id}
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-white/50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    document.category === "tax" ? "bg-green-100" : "bg-blue-100"
                  }`}
                >
                  {document.category === "tax" ? (
                    <Receipt className={`h-4 w-4 text-green-600`} />
                  ) : (
                    <Info className={`h-4 w-4 text-blue-600`} />
                  )}
                </div>
                <div>
                  <span className="font-medium text-gray-900">{document.name}</span>
                  <p className="text-xs text-gray-500">
                    {new Date(document.date).toLocaleDateString()} • {document.size}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={() => viewDocument(document)}>
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                <Button variant="outline" size="sm" onClick={() => downloadDocument(document)}>
                  <Download className="h-4 w-4 mr-1" />
                  PDF
                </Button>
              </div>
            </div>
          ))}

          {filteredDocuments.length === 0 && (
            <div className="text-center py-8">
              {activeTab === "tax" ? (
                <Receipt className="h-12 w-12 text-gray-300 mx-auto mb-2" />
              ) : (
                <Info className="h-12 w-12 text-gray-300 mx-auto mb-2" />
              )}
              <p className="text-gray-500">No documents found matching your search criteria.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
