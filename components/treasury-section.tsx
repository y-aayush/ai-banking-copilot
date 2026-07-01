import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Zap, BarChart3, Lock, Repeat, FileCheck, ArrowRight } from "lucide-react"

export function TreasurySection() {
  const treasuryServices = [
    {
      icon: Zap,
      title: "ACH Services",
      description: "Automated Clearing House services for efficient electronic payments and collections.",
      features: ["Direct deposit payroll", "Vendor payments", "Customer collections", "Same-day ACH available"],
    },
    {
      icon: Shield,
      title: "Fraud Prevention",
      description: "Advanced security measures to protect your business from payment fraud and cyber threats.",
      features: ["Positive pay", "ACH blocks & filters", "Wire transfer controls", "Account monitoring"],
    },
    {
      icon: BarChart3,
      title: "Cash Flow Management",
      description: "Optimize your cash position with automated investment and concentration services.",
      features: ["Sweep accounts", "Investment options", "Concentration banking", "Liquidity management"],
    },
    {
      icon: Lock,
      title: "Lockbox Services",
      description: "Accelerate receivables collection with our secure lockbox processing services.",
      features: ["Retail & wholesale lockbox", "Electronic reporting", "Image services", "Exception handling"],
    },
    {
      icon: Repeat,
      title: "Wire Transfer Services",
      description: "Secure domestic and international wire transfers with competitive rates and fast processing.",
      features: ["Same-day processing", "International wires", "Repetitive wire templates", "Online initiation"],
    },
    {
      icon: FileCheck,
      title: "Account Reconciliation",
      description: "Streamline your reconciliation process with automated reporting and exception management.",
      features: ["Automated reconciliation", "Exception reporting", "Historical data access", "Custom reporting"],
    },
  ]

  return (
    <section id="treasury" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gold mb-4">Treasury Management Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sophisticated cash management solutions to optimize your business operations and improve efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treasuryServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-gold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">Why Choose Our Treasury Services?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-amber-600 rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-gold">Dedicated Relationship Manager</h4>
                  <p className="text-gray-600 text-sm">Personal service from experienced treasury professionals</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-amber-600 rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-gold">Advanced Technology Platform</h4>
                  <p className="text-gray-600 text-sm">State-of-the-art online banking and reporting tools</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-amber-600 rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-gold">Customized Solutions</h4>
                  <p className="text-gray-600 text-sm">Tailored services to meet your specific business needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-amber-600 rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-gold">Competitive Pricing</h4>
                  <p className="text-gray-600 text-sm">Transparent, competitive pricing with no hidden fees</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-slate-700 to-slate-600 border-0 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Optimize Your Cash Management?</h3>
              <p className="text-gray-300 mb-6">
                Let our treasury management experts analyze your current processes and recommend solutions to improve
                efficiency and reduce costs.
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  Request Treasury Analysis
                </Button>
                <Button
                  variant="outline"
                  className="w-full text-white border-gray-500 hover:bg-gray-700 hover:text-white"
                >
                  Download Service Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
