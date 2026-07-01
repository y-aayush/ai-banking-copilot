"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export interface User {
  companyId: string
  userId: string
  name: string
  company: string
  loginTime: string
}

export interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (userData: User) => void
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check for existing session on mount
    try {
      const storedUser = localStorage.getItem("banklyUser")
      console.log("Stored user:", storedUser)
      if (storedUser) {
        const userData = JSON.parse(storedUser)
        console.log("Parsed user data:", userData)
        setUser(userData)
      }
    } catch (error) {
      console.error("Error loading user session:", error)
      localStorage.removeItem("banklyUser")
    }
    setIsLoading(false)
  }, [])

  const login = (userData: User) => {
    console.log("Logging in user:", userData)
    setUser(userData)
    localStorage.setItem("banklyUser", JSON.stringify(userData))
  }

  const logout = () => {
    console.log("Logging out user")
    setUser(null)
    localStorage.removeItem("banklyUser")
    router.push("/")
  }

  const value = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
