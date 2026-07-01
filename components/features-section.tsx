import { Card, CardContent } from "@/components/ui/card"
import { Brain, Clock, Smartphone, Headphones, Shield, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced AI analyzes your finances to provide personalized recommendations",
    },
    {
      icon: Clock,
      title: "24/7 AI Assistant",
      description: "Talk to our AI anytime for instant answers and financial guidance",
    },
    {
      icon: Smartphone,
      title: "Intelligent Mobile App",
      description: "AI learns your habits and adapts the app experience just for you",
    },
    {
      icon: Headphones,
      title: "Always Available",
      description: "No wait times—AI responds instantly to all your banking questions",
    },
    {
      icon: Shield,
      title: "AI Security",
      description: "Machine learning detects fraud before it happens to protect you",
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "AI automates routine tasks so you focus on what matters most",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Why Choose AI Banking?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine artificial intelligence with transparent service to deliver an exceptional banking experience that learns and adapts to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="border-0 shadow-none bg-white">
                <CardContent className="text-center p-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
