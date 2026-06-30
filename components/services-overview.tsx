import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  CreditCard,
  PiggyBank,
  Smartphone,
  Globe,
  ShoppingCart,
  Users,
  Calculator,
  FileText,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export function ServicesOverview() {
  const services = [
    {
      icon: CheckCircle,
      title: "AI-Powered Checking",
      description: "Unlimited transactions with AI-powered fraud detection and spending insights.",
      features: ["No monthly fees", "AI spending tracker", "Fraud alerts", "AI recommendations"],
      cta: "Open Account",
      href: "/apply/checking",
    },
    {
      icon: PiggyBank,
      title: "Smart Savings",
      description: "AI analyzes spending and automatically suggests optimal savings strategies.",
      features: ["High APY rates", "AI-driven goals", "Auto-transfer", "FDIC insured"],
      cta: "Start Saving",
      href: "/apply/savings",
    },
    {
      icon: Smartphone,
      title: "AI Banking App",
      description: "AI-first mobile banking with natural language commands and instant assistance.",
      features: ["AI chat support", "Voice commands", "Smart notifications", "Predictive insights"],
      cta: "Get App",
      href: "/apply/digital-banking",
    },
    {
      icon: CreditCard,
      title: "Intelligent Credit Card",
      description: "AI-powered card with personalized rewards and spending optimization.",
      features: ["Smart rewards", "AI cash back", "Fraud protection", "Usage analytics"],
      cta: "Apply Now",
      href: "/apply/credit-cards",
    },
    {
      icon: Globe,
      title: "Smart Money Transfers",
      description: "AI-optimized transfers with real-time rate conversion and cost analysis.",
      features: ["Instant transfers", "AI rates", "Fee optimization", "Global reach"],
      cta: "Transfer Money",
      href: "/apply/transfers",
    },
    {
      icon: Calculator,
      title: "AI Financial Advisor",
      description: "24/7 personal AI advisor providing real-time financial guidance and planning.",
      features: ["AI planning", "Budget optimization", "Goal tracking", "Market insights"],
      cta: "Get Started",
      href: "/apply/planning",
    },
  ]

  return (
    <section id="accounts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">AI Banking Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every product is powered by artificial intelligence to help you make smarter financial decisions and save more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full border-gray-200">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-lg text-black">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <div className="w-1 h-1 bg-black rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full group text-black border-gray-300 hover:bg-gray-100" asChild>
                    <a href={service.href}>
                      {service.cta}
                      <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
