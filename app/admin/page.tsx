"use client"

import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Settings,
  ShieldCheck,
  BarChart,
  Database,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  UserCog,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboardPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">System overview and management</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,248</div>
              <p className="text-xs text-muted-foreground">+24 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Status</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Healthy</div>
              <p className="text-xs text-muted-foreground">All systems operational</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Security Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Database Size</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.2 GB</div>
              <p className="text-xs text-muted-foreground">42% of allocated space</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users">
          <TabsList>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="logs">Audit Logs</TabsTrigger>
            <TabsTrigger value="kpi">KPIs</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="users" className="space-y-4">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">User Management</h2>
              <Button asChild>
                <Link href="/admin/users">
                  <UserCog className="mr-2 h-4 w-4" />
                  Manage Users
                </Link>
              </Button>
            </div>
            <div className="rounded-md border">
              <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                <div>Name</div>
                <div>Email</div>
                <div>Role</div>
                <div>Status</div>
                <div>Last Login</div>
              </div>
              {[
                {
                  name: "John Smith",
                  email: "john@example.com",
                  role: "Admin",
                  status: "Active",
                  lastLogin: "2023-05-18 09:24",
                },
                {
                  name: "Jane Doe",
                  email: "jane@example.com",
                  role: "Staff",
                  status: "Active",
                  lastLogin: "2023-05-18 08:15",
                },
                {
                  name: "Bob Johnson",
                  email: "bob@example.com",
                  role: "Volunteer",
                  status: "Active",
                  lastLogin: "2023-05-17 14:30",
                },
                {
                  name: "Alice Brown",
                  email: "alice@example.com",
                  role: "Adopter",
                  status: "Active",
                  lastLogin: "2023-05-16 11:45",
                },
                {
                  name: "Charlie Davis",
                  email: "charlie@example.com",
                  role: "Veterinarian",
                  status: "Inactive",
                  lastLogin: "2023-05-10 16:20",
                },
              ].map((user, index) => (
                <div key={index} className="grid grid-cols-5 gap-4 border-t p-4">
                  <div>{user.name}</div>
                  <div>{user.email}</div>
                  <div>{user.role}</div>
                  <div>
                    <Badge
                      variant="outline"
                      className={user.status === "Active" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}
                    >
                      {user.status}
                    </Badge>
                  </div>
                  <div>{user.lastLogin}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <Button variant="outline" asChild>
                <Link href="/admin/users">
                  View All Users
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="logs" className="space-y-4">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">Recent Audit Logs</h2>
              <Button asChild>
                <Link href="/admin/logs">
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  View All Logs
                </Link>
              </Button>
            </div>
            <div className="rounded-md border">
              <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                <div>Timestamp</div>
                <div>User</div>
                <div>Action</div>
                <div>Resource</div>
                <div>IP Address</div>
              </div>
              {[
                {
                  timestamp: "2023-05-18 09:24:15",
                  user: "John Smith",
                  action: "LOGIN",
                  resource: "System",
                  ip: "192.168.1.1",
                },
                {
                  timestamp: "2023-05-18 09:15:22",
                  user: "Jane Doe",
                  action: "UPDATE",
                  resource: "Pet #A-1234",
                  ip: "192.168.1.2",
                },
                {
                  timestamp: "2023-05-18 08:45:10",
                  user: "Bob Johnson",
                  action: "CREATE",
                  resource: "Appointment #123",
                  ip: "192.168.1.3",
                },
                {
                  timestamp: "2023-05-17 16:30:45",
                  user: "Alice Brown",
                  action: "DELETE",
                  resource: "Donation #456",
                  ip: "192.168.1.4",
                },
                {
                  timestamp: "2023-05-17 14:20:30",
                  user: "Charlie Davis",
                  action: "EXPORT",
                  resource: "Reports",
                  ip: "192.168.1.5",
                },
              ].map((log, index) => (
                <div key={index} className="grid grid-cols-5 gap-4 border-t p-4">
                  <div>{log.timestamp}</div>
                  <div>{log.user}</div>
                  <div>
                    <Badge
                      variant="outline"
                      className={
                        log.action === "LOGIN"
                          ? "bg-blue-50 text-blue-700"
                          : log.action === "CREATE"
                            ? "bg-green-50 text-green-700"
                            : log.action === "UPDATE"
                              ? "bg-yellow-50 text-yellow-700"
                              : log.action === "DELETE"
                                ? "bg-red-50 text-red-700"
                                : "bg-gray-50 text-gray-700"
                      }
                    >
                      {log.action}
                    </Badge>
                  </div>
                  <div>{log.resource}</div>
                  <div>{log.ip}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <Button variant="outline" asChild>
                <Link href="/admin/logs">
                  View All Logs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="kpi" className="space-y-4">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">Key Performance Indicators</h2>
              <Button asChild>
                <Link href="/admin/kpi">
                  <BarChart className="mr-2 h-4 w-4" />
                  View All KPIs
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Adoption Rate</CardTitle>
                  <CardDescription>Percentage of animals adopted vs. intake</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="text-2xl font-bold">78%</div>
                    <div className="ml-auto flex items-center rounded-md bg-green-50 px-2 py-1 text-xs text-green-700">
                      <span>+5% from last month</span>
                    </div>
                  </div>
                  <div className="mt-4 h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[78%] rounded-full bg-primary"></div>
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <div>0%</div>
                    <div>50%</div>
                    <div>100%</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Average Length of Stay</CardTitle>
                  <CardDescription>Average days animals spend in the shelter</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="text-2xl font-bold">24 days</div>
                    <div className="ml-auto flex items-center rounded-md bg-green-50 px-2 py-1 text-xs text-green-700">
                      <span>-3 days from last month</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-xs">
                      <div>Dogs</div>
                      <div className="font-medium">21 days</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[70%] rounded-full bg-primary"></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <div>Cats</div>
                      <div className="font-medium">28 days</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[85%] rounded-full bg-primary"></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <div>Other</div>
                      <div className="font-medium">18 days</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[60%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-end">
              <Button variant="outline" asChild>
                <Link href="/admin/kpi">
                  View All KPIs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">System Settings</h2>
              <Button asChild>
                <Link href="/admin/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Manage Settings
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Basic system configuration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <div className="font-medium">System Name</div>
                      <div>Pet4U</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="font-medium">Contact Email</div>
                      <div>admin@pet4u.com</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="font-medium">Timezone</div>
                      <div>America/New_York (UTC-04:00)</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="font-medium">Date Format</div>
                      <div>MM/DD/YYYY</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>System security configuration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <div className="font-medium">Two-Factor Authentication</div>
                      <div className="text-green-600">Enabled</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="font-medium">Password Policy</div>
                      <div>Strong</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="font-medium">Session Timeout</div>
                      <div>30 minutes</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="font-medium">Failed Login Attempts</div>
                      <div>5 attempts</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-end">
              <Button variant="outline" asChild>
                <Link href="/admin/settings">
                  Manage All Settings
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>System Notifications</CardTitle>
              <CardDescription>Recent system alerts and notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Database Backup Completed",
                    description: "Daily backup completed successfully",
                    timestamp: "Today, 3:00 AM",
                    type: "success",
                  },
                  {
                    title: "Security Update Available",
                    description: "New security patch available for installation",
                    timestamp: "Yesterday, 10:15 AM",
                    type: "warning",
                  },
                  {
                    title: "User Account Locked",
                    description: "Multiple failed login attempts detected",
                    timestamp: "May 16, 2023, 2:30 PM",
                    type: "error",
                  },
                  {
                    title: "System Maintenance",
                    description: "Scheduled maintenance completed",
                    timestamp: "May 15, 2023, 1:00 AM",
                    type: "info",
                  },
                ].map((notification, index) => (
                  <div key={index} className="flex items-start">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full ${
                        notification.type === "success"
                          ? "bg-green-100"
                          : notification.type === "warning"
                            ? "bg-yellow-100"
                            : notification.type === "error"
                              ? "bg-red-100"
                              : "bg-blue-100"
                      }`}
                    >
                      {notification.type === "success" ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : notification.type === "warning" ? (
                        <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      ) : notification.type === "error" ? (
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                      ) : (
                        <ShieldCheck className="h-5 w-5 text-blue-600" />
                      )}
                    </div>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">{notification.title}</p>
                      <p className="text-sm text-muted-foreground">{notification.description}</p>
                      <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>API Usage</CardTitle>
              <CardDescription>API requests and usage statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="text-2xl font-bold">24,521</div>
                <div className="ml-2 text-xs text-muted-foreground">requests this month</div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-xs">
                  <div>GET Requests</div>
                  <div className="font-medium">18,432 (75%)</div>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[75%] rounded-full bg-blue-500"></div>
                </div>
                <div className="flex justify-between text-xs">
                  <div>POST Requests</div>
                  <div className="font-medium">4,904 (20%)</div>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[20%] rounded-full bg-green-500"></div>
                </div>
                <div className="flex justify-between text-xs">
                  <div>PUT/DELETE Requests</div>
                  <div className="font-medium">1,185 (5%)</div>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[5%] rounded-full bg-yellow-500"></div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/admin/api">
                    <Database className="mr-2 h-4 w-4" />
                    Manage API
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
