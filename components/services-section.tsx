import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, PiggyBank, Home, Car, TrendingUp, Building2, ArrowRight } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: CreditCard,
      title: "Checking Accounts",
      description: "Fee-free checking with mobile banking, online bill pay, and nationwide ATM access.",
      features: ["No monthly fees", "Mobile deposits", "Free ATM network"],
      cta: "Open Checking",
    },
    {
      icon: PiggyBank,
      title: "Savings Accounts",
      description: "High-yield savings accounts to help your money grow with competitive interest rates.",
      features: ["4.2% APY", "No minimum balance", "FDIC insured"],
      cta: "Start Saving",
    },
    {
      icon: Home,
      title: "Home Loans",
      description: "Competitive mortgage rates and personalized service to help you buy your dream home.",
      features: ["Low rates", "Fast approval", "Expert guidance"],
      cta: "Get Pre-approved",
    },
    {
      icon: Car,
      title: "Auto Loans",
      description: "Finance your next vehicle with flexible terms and competitive rates.",
      features: ["Quick approval", "Flexible terms", "New & used cars"],
      cta: "Apply Now",
    },
    {
      icon: TrendingUp,
      title: "Investment Services",
      description: "Build wealth with our comprehensive investment and retirement planning services.",
      features: ["Portfolio management", "Retirement planning", "Expert advisors"],
      cta: "Start Investing",
    },
    {
      icon: Building2,
      title: "Business Banking",
      description: "Complete banking solutions designed to help your business grow and succeed.",
      features: ["Business accounts", "Commercial loans", "Merchant services"],
      cta: "Learn More",
    },
  ]

  return (
    <section id="personal" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gold mb-4">Complete Banking Solutions</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From everyday banking to major life purchases, we have the right products and services to meet your
            financial needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 bg-slate-700/50 border-slate-600"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-yellow-400" />
                  </div>
                  <CardTitle className="text-xl text-gold">{service.title}</CardTitle>
                  <CardDescription className="text-slate-400">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {service.cta === "Open Checking" && (
                    <Button variant="outline" className="w-full group" asChild>
                      <a href="/apply/checking">
                        Open Checking
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  )}
                  {service.cta === "Start Saving" && (
                    <Button variant="outline" className="w-full group" asChild>
                      <a href="/apply/savings">
                        Start Saving
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  )}
                  {service.cta === "Get Pre-approved" && (
                    <Button variant="outline" className="w-full group" asChild>
                      <a href="/apply/loans">
                        Get Pre-approved
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  )}
                  {service.cta === "Apply Now" && (
                    <Button variant="outline" className="w-full group" asChild>
                      <a href="/apply/loans">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  )}
                  {service.cta === "Start Investing" && (
                    <Button variant="outline" className="w-full group" asChild>
                      <a href="/apply/investment">
                        Start Investing
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  )}
                  {service.cta === "Learn More" && (
                    <Button variant="outline" className="w-full group" asChild>
                      <a href="/apply/business">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
