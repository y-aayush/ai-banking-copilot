import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? Our friendly support team is here to help you anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Customer Support</h4>
                  <p className="text-gray-700">+977+BANK-NOW</p>
                  <p className="text-sm text-gray-500">Available 24/7 for your convenience</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Email Support</h4>
                  <p className="text-gray-700">support@ai-bank.com</p>
                  <p className="text-sm text-gray-500">Response within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">ATM Network</h4>
                  <p className="text-gray-700">55,000+ fee-free ATMs nationwide</p>
                  <Button variant="link" className="p-0 h-auto text-black hover:text-gray-700">
                    Find an ATM near you
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Service Hours</h4>
                  <div className="text-gray-700 text-sm space-y-1">
                    <p>Monday - Friday: 8:00 AM - 8:00 PM NPT</p>
                    <p>Saturday: 9:00 AM - 5:00 PM NPT</p>
                    <p>Sunday: 10:00 AM - 4:00 PM NPT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-white border-gray-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-black mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white text-black"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white text-black"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white text-black"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white text-black"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white text-black">
                    <option>Select a subject</option>
                    <option>Account Help</option>
                    <option>Technical Support</option>
                    <option>Feedback</option>
                    <option>Security Concern</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white text-black"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <Button className="w-full bg-black hover:bg-gray-900 text-white" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
