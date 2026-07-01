"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth/auth-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Logo } from "@/components/logo"
import { AlertCircle, Eye, EyeOff } from "lucide-react"

export function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      console.log("Login attempt:", formData)

      // Simulate authentication delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Demo credentials validation
      if (formData.email === "demo@bank.com" && formData.password === "Demo123!") {
        const userData = {
          userId: "demo123",
          name: "Aayush Yadav",
          email: formData.email,
          loginTime: new Date().toLocaleString(),
        }

        login(userData)
        window.location.href = "/member/private"
      } else {
        setError("Invalid email or password. Please try again.")
      }
    } catch (error) {
      console.error("Login error:", error)
      setError("An error occurred during login. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo variant="dark" size="large" />
          </div>
          <h1 className="text-3xl font-bold text-black mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <Card className="shadow-lg border-gray-200">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-2xl font-bold text-center text-black">
              Customer Login
            </CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="h-12 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-12 px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-black hover:bg-gray-900 text-white font-semibold"
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-gray-100 rounded-lg border border-gray-300">
              <h4 className="font-semibold text-black mb-2">Demo Credentials</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p>
                  <strong>Email:</strong> demo@bank.com
                </p>
                <p>
                  <strong>Password:</strong> Demo123!
                </p>
              </div>
            </div>

            {/* Help Links */}
            <div className="flex justify-between text-sm">
              <button
                type="button"
                className="text-black hover:text-gray-700 font-medium"
                onClick={() => router.push("/forgot-password")}
              >
                Forgot Password?
              </button>
              <button
                type="button"
                className="text-black hover:text-gray-700 font-medium"
                onClick={() => router.push("/signup")}
              >
                Open an Account
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2024 ProBank. All rights reserved.</p>
          <p>Your account is protected by bank-grade security.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
