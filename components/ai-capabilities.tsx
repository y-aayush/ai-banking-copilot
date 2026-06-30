"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Brain,
  MessageCircle,
  TrendingUp,
  Zap,
  Shield,
  Lightbulb,
  BarChart3,
  Clock,
  Target,
  Wallet,
  AlertCircle,
  Settings,
} from "lucide-react"

export function AICapabilities() {
  const capabilities = [
    {
      icon: Brain,
      title: "Account Intelligence",
      description: "Understand your account status, balances, and transaction history instantly",
    },
    {
      icon: MessageCircle,
      title: "Natural Conversations",
      description: "Ask anything in plain English and get conversational responses",
    },
    {
      icon: TrendingUp,
      title: "Spending Analytics",
      description: "Track spending patterns and identify areas to save money",
    },
    {
      icon: Zap,
      title: "Instant Transactions",
      description: "Perform transfers and payments through conversational AI commands",
    },
    {
      icon: Lightbulb,
      title: "Financial Insights",
      description: "Receive AI-powered recommendations to improve your financial health",
    },
    {
      icon: Target,
      title: "Goal Planning",
      description: "Set and track financial goals with AI-guided planning assistance",
    },
    {
      icon: Wallet,
      title: "Budget Management",
      description: "Create and maintain budgets with smart category tracking",
    },
    {
      icon: AlertCircle,
      title: "Fraud Protection",
      description: "Real-time alerts and AI detection for suspicious transactions",
    },
    {
      icon: BarChart3,
      title: "Financial Reports",
      description: "Generate detailed financial reports and summaries on demand",
    },
    {
      icon: Clock,
      title: "Bill Reminders",
      description: "Never miss a bill with AI-powered payment reminders",
    },
    {
      icon: Shield,
      title: "Security Assistance",
      description: "Get help with account security and fraud prevention tips",
    },
    {
      icon: Settings,
      title: "Personalization",
      description: "AI learns your preferences and adapts recommendations over time",
    },
  ]

  return (
    <section id="ai-capabilities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">What Our AI Can Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive capabilities of our 24/7 AI banking assistant. From account management to financial planning, our AI is designed to simplify your banking experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon
            return (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-lg font-semibold text-black mb-2">{capability.title}</h3>
                    <p className="text-sm text-gray-600">{capability.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 bg-white rounded-lg border border-gray-200 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Always Learning, Always Improving</h3>
              <p className="text-gray-600 mb-4">
                Our AI assistant learns from your banking patterns and continuously improves to provide better recommendations. The more you interact with it, the more personalized your experience becomes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-black text-white text-xs font-bold">✓</div>
                  </div>
                  <span className="text-gray-700">Learns your financial habits and preferences</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-black text-white text-xs font-bold">✓</div>
                  </div>
                  <span className="text-gray-700">Adapts recommendations based on your goals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-black text-white text-xs font-bold">✓</div>
                  </div>
                  <span className="text-gray-700">Improves accuracy with every interaction</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-black text-white text-xs font-bold">✓</div>
                  </div>
                  <span className="text-gray-700">Stays updated with latest financial trends</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-300">
                  <p className="text-sm font-semibold text-black mb-2">AI Learning Process</p>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex justify-between items-center">
                      <span>Week 1: Initial patterns</span>
                      <span className="w-16 h-2 bg-gray-300 rounded-full overflow-hidden">
                        <div className="h-full w-1/4 bg-black rounded-full"></div>
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Month 1: Optimization</span>
                      <span className="w-16 h-2 bg-gray-300 rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-black rounded-full"></div>
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Month 3: Personalization</span>
                      <span className="w-16 h-2 bg-gray-300 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-black rounded-full"></div>
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Ongoing: Continuous</span>
                      <span className="w-16 h-2 bg-gray-300 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-black rounded-full"></div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
