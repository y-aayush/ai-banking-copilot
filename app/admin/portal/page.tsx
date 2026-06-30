"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { AdminPortal } from "@/components/admin/admin-portal"

export default function AdminPortalPage() {
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated as admin
    const adminAuth = localStorage.getItem("adminAuth")
    if (!adminAuth) {
      router.push("/admin/login")
    }
  }, [router])

  return <AdminPortal />
}
