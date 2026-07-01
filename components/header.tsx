"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import { Logo } from "@/components/logo"
import Link from "next/link"

const navigation = [
  { name: "AI Capabilities", href: "#ai-capabilities" },
  { name: "Products", href: "#accounts" },
  { name: "Features", href: "#features" },
  { name: "Security", href: "#security" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLogin = () => {
    window.location.href = "/login"
  }

  const handleSignup = () => {
    window.location.href = "/signup"
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo size="large" variant="dark" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-1" />
              +977-BANK-NOW
            </div>
            <Button variant="outline" size="sm" onClick={handleLogin}>
              Login
            </Button>
            <Button size="sm" className="bg-black hover:bg-gray-900 text-white" onClick={handleSignup}>
              Open Account
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex justify-center mb-6 mt-4">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Logo size="large" variant="dark" />
                </Link>
              </div>
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-black px-3 py-2 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="border-t pt-4 space-y-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setIsOpen(false)
                      handleLogin()
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    className="w-full bg-black hover:bg-gray-900 text-white"
                    onClick={() => {
                      setIsOpen(false)
                      handleSignup()
                    }}
                  >
                    Open Account
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
