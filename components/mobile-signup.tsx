"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowRight, ArrowLeft, Clock, Smartphone } from "lucide-react"
import { Logo } from "@/components/logo"

export function MobileSignup() {
  const [step, setStep] = useState(1)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      setFormSubmitted(true)
    }
  }

  const renderStepContent = () => {
    if (formSubmitted) {
      return (
        <div className="text-center py-8 px-4">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">🎉 Account Approved!</h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Your Bank Magic business account is ready! Check your email for account details and next steps.
          </p>
          <div className="space-y-3">
            <Button className="w-full h-14 text-lg bg-amber-600 hover:bg-amber-700 rounded-xl">
              <Smartphone className="mr-2 h-5 w-5" />
              Download Bank Magic App
            </Button>
            <Button variant="outline" className="w-full h-14 text-lg rounded-xl">
              Explore Services
            </Button>
          </div>
        </div>
      )
    }

    switch (step) {
      case 1:
        return (
          <div className="p-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell us about your business</h2>
              <p className="text-gray-600">Just a few quick details to get started</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-3">Business Name</label>
                <input
                  type="text"
                  className="w-full h-14 px-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="Enter your business name"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-3">Business Type</label>
                <select
                  className="w-full h-14 px-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors appearance-none bg-white"
                  required
                >
                  <option value="">Select business type</option>
                  <option value="sole_proprietorship">Sole Proprietorship</option>
                  <option value="llc">Limited Liability Company (LLC)</option>
                  <option value="corporation">Corporation</option>
                  <option value="partnership">Partnership</option>
                  <option value="nonprofit">Non-Profit</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-3">Years in Business</label>
                <select
                  className="w-full h-14 px-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors appearance-none bg-white"
                  required
                >
                  <option value="">Select years in business</option>
                  <option value="new">New Business / Not Yet Started</option>
                  <option value="less_than_1">Less than 1 year</option>
                  <option value="1_to_3">1-3 years</option>
                  <option value="3_to_5">3-5 years</option>
                  <option value="5_plus">5+ years</option>
                </select>
              </div>

              <Button type="submit" className="w-full h-14 text-lg bg-amber-600 hover:bg-amber-700 rounded-xl mt-8">
                Continue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        )
      case 2:
        return (
          <div className="p-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your contact information</h2>
              <p className="text-gray-600">How can we reach you?</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">First Name</label>
                  <input
                    type="text"
                    className="w-full h-14 px-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="First name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Last Name</label>
                  <input
                    type="text"
                    className="w-full h-14 px-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-3">Email Address</label>
                <input
                  type="email"
                  inputMode="email"
                  className="w-full h-14 px-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="ringer@0ne0nes.com"
                  required
                  defaultValue="ringer@0ne0nes.com"
                />
                <p className="text-sm text-gray-500 mt-1">Note: ringer@0ne0nes.com</p>
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-3">Phone Number</label>
                <input
                  type="tel"
                  inputMode="tel"
                  className="w-full h-14 px-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>

              <div className="flex gap-3 mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1 h-14 text-lg rounded-xl"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back
                </Button>
                <Button type="submit" className="flex-1 h-14 text-lg bg-amber-600 hover:bg-amber-700 rounded-xl">
                  Continue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        )
      case 3:
        return (
          <div className="p-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Account preferences</h2>
              <p className="text-gray-600">Choose what works best for you</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-3">Account Type</label>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-amber-500 transition-colors">
                    <input type="radio" name="accountType" value="basic" className="mr-4 w-5 h-5" required />
                    <div>
                      <div className="font-semibold text-gray-900">Basic Business Checking</div>
                      <div className="text-sm text-gray-600">Perfect for small businesses</div>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-amber-500 transition-colors">
                    <input type="radio" name="accountType" value="premium" className="mr-4 w-5 h-5" />
                    <div>
                      <div className="font-semibold text-gray-900">Premium Business Checking</div>
                      <div className="text-sm text-gray-600">More features and benefits</div>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-amber-500 transition-colors">
                    <input type="radio" name="accountType" value="combo" className="mr-4 w-5 h-5" />
                    <div>
                      <div className="font-semibold text-gray-900">Checking & Savings Combo</div>
                      <div className="text-sm text-gray-600">Best value package</div>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-3">Monthly Transactions</label>
                <select
                  className="w-full h-14 px-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors appearance-none bg-white"
                  required
                >
                  <option value="">Select transaction volume</option>
                  <option value="low">Less than 100 transactions</option>
                  <option value="medium">100-500 transactions</option>
                  <option value="high">500+ transactions</option>
                </select>
              </div>

              <div className="bg-amber-50 p-4 rounded-xl">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-5 h-5" required />
                  <span className="text-sm text-gray-700 leading-relaxed">
                    I agree to the <span className="text-amber-600 underline">Terms of Service</span> and{" "}
                    <span className="text-amber-600 underline">Privacy Policy</span>
                  </span>
                </label>
              </div>

              <div className="flex gap-3 mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(2)}
                  className="flex-1 h-14 text-lg rounded-xl"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back
                </Button>
                <Button type="submit" className="flex-1 h-14 text-lg bg-green-600 hover:bg-green-700 rounded-xl">
                  Open Account
                  <CheckCircle className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      {/* Mobile Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <Logo variant="light" size="small" />
          {!formSubmitted && (
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-medium text-gray-700">3 min</span>
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      {!formSubmitted && (
        <div className="bg-white px-4 py-3 border-b border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Step {step} of 3</span>
            <span className="text-sm text-gray-500">{Math.round((step / 3) * 100)}% complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-amber-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="px-4 py-6">
        <Card className="w-full max-w-md mx-auto shadow-lg border-0 rounded-2xl overflow-hidden">
          {renderStepContent()}
        </Card>
      </div>

      {/* Mobile Benefits Section */}
      {!formSubmitted && (
        <div className="px-4 pb-8">
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Why businesses choose Bank Magic</h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Instant Approval</div>
                    <div className="text-sm text-gray-600">Get approved in minutes</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                    <div className="h-5 w-5 text-amber-600 flex items-center justify-center">
                      <span className="text-amber-600 font-bold">✨</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Magical Banking</div>
                    <div className="text-sm text-gray-600">Experience the magic of modern banking</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold text-sm">$0</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">No Hidden Fees</div>
                    <div className="text-sm text-gray-600">Transparent pricing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
