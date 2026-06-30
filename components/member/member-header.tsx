"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Bell, LogOut, User, Home } from "lucide-react"
import { Logo } from "@/components/logo"
import { useAuth } from "@/components/auth/auth-context"
import Link from "next/link"

export function MemberHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  const navigation = [
    { name: "Dashboard", href: "/member/dashboard", icon: Home },
    { name: "Accounts", href: "/member/accounts", icon: User },
    { name: "Statements", href: "/member/statements", icon: User },
    { name: "Transfers", href: "/member/transfers", icon: User },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Home Link */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              <Logo size="medium" variant="dark" />
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-black">
                <Home className="h-4 w-4 mr-2" />
                HOME
              </Button>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Info and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              <div className="font-medium text-black">{user?.name}</div>
              <div className="text-xs text-gray-500">Customer</div>
            </div>
            <Bell className="h-5 w-5 text-gray-600 cursor-pointer hover:text-black" />
            <Button variant="outline" size="sm" onClick={logout} className="border-gray-300 hover:bg-gray-100">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
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
                <Logo size="medium" variant="dark" />
              </div>
              <div className="flex flex-col space-y-4">
                <div className="text-center pb-4 border-b">
                  <div className="font-medium text-black">{user?.name}</div>
                  <div className="text-sm text-gray-600">Customer</div>
                </div>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    <Home className="h-4 w-4 mr-2" />
                    HOME
                  </Button>
                </Link>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-black px-3 py-2 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t pt-4">
                  <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-100" onClick={logout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
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
