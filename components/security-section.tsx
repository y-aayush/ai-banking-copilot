import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, AlertTriangle } from "lucide-react"

export function SecuritySection() {
  return (
    <section id="security" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Your Security is Our Priority</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use industry-leading security measures to protect your money and personal information.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">DCGF Insured</h3>
                  <p className="text-gray-600">
                    Your deposits are insured up to $250,000 by the Federal Deposit Insurance Corporation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">256-bit Encryption</h3>
                  <p className="text-gray-600">
                    All data transmission is protected with the same level of encryption used by major financial
                    institutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">24/7 Monitoring</h3>
                  <p className="text-gray-600">
                    Our advanced fraud detection systems monitor your accounts around the clock for suspicious activity.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Zero Liability</h3>
                  <p className="text-gray-600">
                    You're not responsible for unauthorized transactions when you report them promptly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="bg-gray-100 border-gray-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">Security Certifications</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-300">
                    <span className="font-medium text-black">SOC 2 Type II Certified</span>
                    <Badge variant="secondary" className="bg-gray-800 text-white">
                      Verified
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-300">
                    <span className="font-medium text-black">SWIFT CSP Assessment Certified</span>
                    <Badge variant="secondary" className="bg-gray-800 text-white">
                      Verified
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-300">
                    <span className="font-medium text-black">ISO 27001 Certified</span>
                    <Badge variant="secondary" className="bg-gray-800 text-white">
                      Verified
                    </Badge>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg border border-gray-300">
                  <p className="text-sm text-gray-700 text-center">
                    <strong>Security Tip:</strong> Never share your login credentials or personal information via email
                    or phone. We will never ask for this information.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
