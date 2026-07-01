"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Logo } from "@/components/logo"
import {
  Users,
  CreditCard,
  Settings,
  Shield,
  FileText,
  BarChart3,
  LogOut,
  Search,
  Bell,
  User,
  ChevronDown,
  CheckCircle,
  Filter,
  RefreshCw,
  Crown,
  Eye,
} from "lucide-react"

export function AdminPortal() {
  const router = useRouter()
  const [adminData, setAdminData] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [searchQuery, setSearchQuery] = useState("")
  const [notifications, setNotifications] = useState(3)

  useEffect(() => {
    // Get admin data from localStorage
    const storedData = localStorage.getItem("adminAuth")
    if (!storedData) {
      router.push("/admin/login")
      return
    }

    setAdminData(JSON.parse(storedData))
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    router.push("/admin/login")
  }

  if (!adminData) {
    return <div className="min-h-screen bg-slate-900 flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Admin Header */}
      <header className="border-b border-slate-700 bg-slate-800 sticky top-0 z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <Logo size="small" variant="light" />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-gold flex items-center">
                <Crown className="h-5 w-5 text-yellow-500 mr-2" />
                PP Commercial Admin Portal
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-yellow-600 flex items-center justify-center">
                <User className="h-5 w-5 text-slate-900" />
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-medium">{adminData.name}</div>
                <div className="text-xs text-slate-400">{adminData.role}</div>
              </div>
              <ChevronDown className="h-4 w-4 text-slate-400" />
            </div>

            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
              <span className="hidden md:inline ml-2">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-20 md:w-64 bg-slate-800 min-h-[calc(100vh-64px)] p-4 border-r border-slate-700">
          <div className="space-y-2">
            <Button
              variant={activeTab === "dashboard" ? "default" : "ghost"}
              className={`w-full justify-start ${activeTab === "dashboard" ? "bg-yellow-600 text-slate-900 hover:bg-yellow-700" : "text-slate-300"}`}
              onClick={() => setActiveTab("dashboard")}
            >
              <BarChart3 className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Dashboard</span>
            </Button>

            <Button
              variant={activeTab === "customers" ? "default" : "ghost"}
              className={`w-full justify-start ${activeTab === "customers" ? "bg-yellow-600 text-slate-900 hover:bg-yellow-700" : "text-slate-300"}`}
              onClick={() => setActiveTab("customers")}
            >
              <Users className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Customers</span>
            </Button>

            <Button
              variant={activeTab === "transactions" ? "default" : "ghost"}
              className={`w-full justify-start ${activeTab === "transactions" ? "bg-yellow-600 text-slate-900 hover:bg-yellow-700" : "text-slate-300"}`}
              onClick={() => setActiveTab("transactions")}
            >
              <CreditCard className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Transactions</span>
            </Button>

            <Button
              variant={activeTab === "system" ? "default" : "ghost"}
              className={`w-full justify-start ${activeTab === "system" ? "bg-yellow-600 text-slate-900 hover:bg-yellow-700" : "text-slate-300"}`}
              onClick={() => setActiveTab("system")}
            >
              <Settings className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">System</span>
            </Button>

            <Button
              variant={activeTab === "security" ? "default" : "ghost"}
              className={`w-full justify-start ${activeTab === "security" ? "bg-yellow-600 text-slate-900 hover:bg-yellow-700" : "text-slate-300"}`}
              onClick={() => setActiveTab("security")}
            >
              <Shield className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Security</span>
            </Button>

            <Button
              variant={activeTab === "reports" ? "default" : "ghost"}
              className={`w-full justify-start ${activeTab === "reports" ? "bg-yellow-600 text-slate-900 hover:bg-yellow-700" : "text-slate-300"}`}
              onClick={() => setActiveTab("reports")}
            >
              <FileText className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Reports</span>
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gold">PP Commercial Admin Dashboard</h2>
                <Button size="sm" className="bg-slate-700 hover:bg-slate-600">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh Data
                </Button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-gold">Total Assets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gold">$24,583,694.28</div>
                    <p className="text-sm text-green-500 mt-1 flex items-center">
                      <span className="flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M12 7a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L12 12.586V7z"
                            clipRule="evenodd"
                          />
                        </svg>
                        2.5%
                      </span>
                      <span className="text-slate-400 ml-1">from last month</span>
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-gold">Active Customers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gold">1,284</div>
                    <p className="text-sm text-green-500 mt-1 flex items-center">
                      <span className="flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M12 7a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L12 12.586V7z"
                            clipRule="evenodd"
                          />
                        </svg>
                        4.3%
                      </span>
                      <span className="text-slate-400 ml-1">from last month</span>
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-gold">Transactions (24h)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gold">3,842</div>
                    <p className="text-sm text-yellow-500 mt-1 flex items-center">
                      <span className="flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M8 13a1 1 0 100-2H4.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L4.414 13H8z"
                            clipRule="evenodd"
                          />
                        </svg>
                        0.2%
                      </span>
                      <span className="text-slate-400 ml-1">from yesterday</span>
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-gold">System Uptime</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gold">99.98%</div>
                    <p className="text-sm text-green-500 mt-1 flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      <span className="text-slate-400">All systems operational</span>
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* System Status */}
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                  <CardDescription className="text-slate-400">
                    Current status of all PP Commercial systems
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                        <span>Core Banking System</span>
                      </div>
                      <Badge className="bg-green-600">Operational</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                        <span>Payment Processing</span>
                      </div>
                      <Badge className="bg-green-600">Operational</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></div>
                        <span>External APIs</span>
                      </div>
                      <Badge className="bg-yellow-600">Partial Outage</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                        <span>Customer Portal</span>
                      </div>
                      <Badge className="bg-green-600">Operational</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                        <span>Mobile Banking</span>
                      </div>
                      <Badge className="bg-green-600">Operational</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription className="text-slate-400">Latest system events and admin actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="min-w-[60px] text-xs text-slate-400">2m ago</div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">Joshua Ringer</span> logged into the admin portal
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="min-w-[60px] text-xs text-slate-400">15m ago</div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">System</span> completed daily backup
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="min-w-[60px] text-xs text-slate-400">32m ago</div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">Joshua Ringer</span> approved transaction #38291
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="min-w-[60px] text-xs text-slate-400">1h ago</div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">System</span> detected unusual login attempt (blocked)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="min-w-[60px] text-xs text-slate-400">2h ago</div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">Joshua Ringer</span> updated system settings
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "customers" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gold">Customer Management</h2>
                <div className="flex space-x-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                    <Input
                      type="search"
                      placeholder="Search customers..."
                      className="pl-8 bg-slate-800 border-slate-700 text-slate-100"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-slate-900">Add Customer</Button>
                </div>
              </div>

              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-700">
                          <th className="text-left p-4 text-slate-400 font-medium">Customer</th>
                          <th className="text-left p-4 text-slate-400 font-medium">Account #</th>
                          <th className="text-left p-4 text-slate-400 font-medium">Balance</th>
                          <th className="text-left p-4 text-slate-400 font-medium">Status</th>
                          <th className="text-left p-4 text-slate-400 font-medium">Last Login</th>
                          <th className="text-right p-4 text-slate-400 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-700">
                          <td className="p-4">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                                JR
                              </div>
                              <div>
                                <div className="font-medium">Joshua Ringer</div>
                                <div className="text-xs text-slate-400">ringerone@example.com</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="font-mono">1001-2938-4756</div>
                          </td>
                          <td className="p-4">
                            <div className="font-medium">$128,459.32</div>
                          </td>
                          <td className="p-4">
                            <Badge className="bg-green-600">Active</Badge>
                          </td>
                          <td className="p-4">
                            <div className="text-slate-300">Just now</div>
                          </td>
                          <td className="p-4 text-right">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>

                        <tr className="border-b border-slate-700">
                          <td className="p-4">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center mr-3">
                                MS
                              </div>
                              <div>
                                <div className="font-medium">Maria Smith</div>
                                <div className="text-xs text-slate-400">maria.s@example.com</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="font-mono">1001-8765-3920</div>
                          </td>
                          <td className="p-4">
                            <div className="font-medium">$85,231.45</div>
                          </td>
                          <td className="p-4">
                            <Badge className="bg-green-600">Active</Badge>
                          </td>
                          <td className="p-4">
                            <div className="text-slate-300">2 hours ago</div>
                          </td>
                          <td className="p-4 text-right">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>

                        <tr className="border-b border-slate-700">
                          <td className="p-4">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                                RJ
                              </div>
                              <div>
                                <div className="font-medium">Robert Johnson</div>
                                <div className="text-xs text-slate-400">robert.j@example.com</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="font-mono">1001-4567-8901</div>
                          </td>
                          <td className="p-4">
                            <div className="font-medium">$42,876.19</div>
                          </td>
                          <td className="p-4">
                            <Badge className="bg-yellow-600">Pending</Badge>
                          </td>
                          <td className="p-4">
                            <div className="text-slate-300">1 day ago</div>
                          </td>
                          <td className="p-4 text-right">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>

                        <tr className="border-b border-slate-700">
                          <td className="p-4">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center mr-3">
                                AT
                              </div>
                              <div>
                                <div className="font-medium">Alice Thompson</div>
                                <div className="text-xs text-slate-400">alice.t@example.com</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="font-mono">1001-3456-7890</div>
                          </td>
                          <td className="p-4">
                            <div className="font-medium">$103,542.87</div>
                          </td>
                          <td className="p-4">
                            <Badge className="bg-red-600">Locked</Badge>
                          </td>
                          <td className="p-4">
                            <div className="text-slate-300">5 days ago</div>
                          </td>
                          <td className="p-4 text-right">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>

                        <tr>
                          <td className="p-4">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-amber-600 flex items-center justify-center mr-3">
                                DW
                              </div>
                              <div>
                                <div className="font-medium">David Wilson</div>
                                <div className="text-xs text-slate-400">david.w@example.com</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="font-mono">1001-2345-6789</div>
                          </td>
                          <td className="p-4">
                            <div className="font-medium">$67,890.54</div>
                          </td>
                          <td className="p-4">
                            <Badge className="bg-green-600">Active</Badge>
                          </td>
                          <td className="p-4">
                            <div className="text-slate-300">3 hours ago</div>
                          </td>
                          <td className="p-4 text-right">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "transactions" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gold">Transaction Management</h2>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-slate-900">Export Transactions</Button>
              </div>
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <p className="text-slate-400">Transaction management interface coming soon...</p>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "system" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gold">System Settings</h2>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-slate-900">Save Changes</Button>
              </div>
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <p className="text-slate-400">System configuration interface coming soon...</p>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gold">Security Center</h2>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-slate-900">Security Audit</Button>
              </div>
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <p className="text-slate-400">Security management interface coming soon...</p>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "reports" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gold">Reports & Analytics</h2>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-slate-900">Generate Report</Button>
              </div>
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <p className="text-slate-400">Reports and analytics interface coming soon...</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
