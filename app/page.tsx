import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AICapabilities } from "@/components/ai-capabilities"
import { ServicesOverview } from "@/components/services-overview"
import { FeaturesSection } from "@/components/features-section"
import { SecuritySection } from "@/components/security-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import ChatbotWidget from "@/chatbot/components/ChatbotWidget"


export const metadata = {
  title: "AI Banking - 24/7 Intelligent Banking Assistant",
  description: "Experience the future of banking with our 24/7 AI assistant. Smart financial insights, instant answers, and personalized money management.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        
        <HeroSection />
        <AICapabilities />
        <ServicesOverview />
        <FeaturesSection />
        <SecuritySection />
        <ContactSection />
        
        
      </main>
      <Footer />
      <ChatbotWidget />
      
    </div>
  )
}
