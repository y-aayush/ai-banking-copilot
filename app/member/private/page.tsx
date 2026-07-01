import { ProtectedRoute } from "@/components/auth/protected-route"
import { PrivateMemberPage } from "@/components/member/private-member-page"

export default function PrivateMember() {
  return (
    <ProtectedRoute>
      <PrivateMemberPage />
    </ProtectedRoute>
  )
}
