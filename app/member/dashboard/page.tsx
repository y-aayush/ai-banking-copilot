import { ProtectedRoute } from "@/components/auth/protected-route"
import { MemberHeader } from "@/components/member/member-header"
import { MemberDashboard } from "@/components/member/member-dashboard"

export default function MemberDashboardPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white">
        <MemberHeader />
        <main>
          <MemberDashboard />
        </main>
      </div>
    </ProtectedRoute>
  )
}
