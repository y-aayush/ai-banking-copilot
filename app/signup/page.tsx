import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SimplifiedSignup } from "@/components/simplified-signup"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Open Your Bank Account
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create your personal bank account securely in just a few minutes and
              enjoy AI-powered banking anytime, anywhere.
            </p>
          </div>

          <SimplifiedSignup />

        </div>
      </main>

      <Footer />
    </div>
  )
}