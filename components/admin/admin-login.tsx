"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Logo } from "@/components/logo"
import { Shield, AlertCircle } from "lucide-react"

export function AdminLogin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Simulate API call with timeout
    setTimeout(() => {
      if (username === "Ringerone" && password === "Ringer123!") {
        // Store admin session in localStorage
        localStorage.setItem(
          "adminAuth",
          JSON.stringify({
            isAdmin: true,
            username: "Ringerone",
            name: "Joshua Ringer",
            role: "System Administrator",
            loginTime: new Date().toISOString(),
          }),
        )
        router.push("/admin/portal")
      } else {
        setError("Invalid username or password")
        setLoading(false)
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-slate-700 bg-slate-800 text-slate-100">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="mb-4 flex items-center justify-center">
            <Logo size="medium" variant="light" />
          </div>
          <CardTitle className="text-2xl font-bold text-center flex items-center">
            <Shield className="mr-2 h-6 w-6 text-yellow-500" />
            Admin Portal
          </CardTitle>
          <CardDescription className="text-slate-400">Secure access for Bank Magic administrators</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4 bg-red-900/30 border-red-800 text-red-200">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium text-slate-300">
                  Username
                </label>
                <Input
                  id="username"
                  placeholder="Enter your admin username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="bg-slate-700 border-slate-600 text-slate-100"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-slate-300">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-slate-700 border-slate-600 text-slate-100"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-slate-900"
                disabled={loading}
              >
                {loading ? "Authenticating..." : "Login to Admin Portal"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t border-slate-700 pt-4">
          <p className="text-xs text-slate-400 text-center w-full">
            This is a secure system. All login attempts are monitored and recorded. Unauthorized access is strictly
            prohibited.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
