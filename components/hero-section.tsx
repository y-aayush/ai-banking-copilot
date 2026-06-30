"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Shield, Users, DollarSign, Lock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-gray-100 rounded-full">
              <span className="text-sm font-semibold text-black">✨ Powered by AI</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
              Banking with
              <span className="block">Intelligent AI</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Experience the future of banking with our 24/7 AI Assistant. Get smart financial insights, instant answers to banking questions, and personalized money management—all powered by advanced artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-900 text-white"
                onClick={() => (window.location.href = "/signup")}
              >
                Start AI Banking
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Chat with AI Now
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-300">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-black" />
                </div>
                <div className="text-2xl font-bold text-black">24/7</div>
                <div className="text-sm text-gray-600">AI Support</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="h-6 w-6 text-black" />
                </div>
                <div className="text-2xl font-bold text-black">0%</div>
                <div className="text-sm text-gray-600">Hidden Fees</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-black" />
                </div>
                <div className="text-2xl font-bold text-black">Military</div>
                <div className="text-sm text-gray-600">Grade Security</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <div className="text-2xl font-bold text-black">2M+</div>
                <div className="text-sm text-gray-600">AI Users</div>
              </div>
            </div>
          </div>

          <div className="relative bg-gray-100 rounded-lg p-8 lg:p-12">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 text-gray-300">
              <Lock className="h-32 w-32" opacity={0.1} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-black mb-6">AI Assistant Powers</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-black text-white text-sm font-bold">✓</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Instant Answers</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Get immediate responses to banking questions 24/7 without waiting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-black text-white text-sm font-bold">✓</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Smart Recommendations</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      AI analyzes your spending to offer personalized financial advice.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-black text-white text-sm font-bold">✓</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Budget Intelligence</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Automated financial planning and expense tracking powered by AI.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-black text-white text-sm font-bold">✓</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Fraud Detection</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      AI monitors transactions for unusual activity in real-time.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                className="w-full mt-8 bg-black hover:bg-gray-900 text-white"
                size="lg"
                onClick={() => (window.location.href = "/signup")}
              >
                Start Banking Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
