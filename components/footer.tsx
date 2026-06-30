import { Logo } from "@/components/logo"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Products: ["Checking Accounts", "Savings Accounts", "Money Market", "CDs"],
    Support: ["Contact Us", "FAQs", "Mobile App", "Security Center"],
    Company: ["About Us", "Careers", "Blog", "Newsroom"],
    Legal: ["Privacy Policy", "Terms of Service", "Accessibility", "Security"],
  }

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo variant="light" size="medium" />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Simple, secure, and transparent banking for everyone. We&apos;re committed to helping you manage your money with ease and confidence.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 lg:mb-0">
              © 2026 AI-Banking. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
