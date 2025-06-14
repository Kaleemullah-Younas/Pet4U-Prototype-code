import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import {
  AlertCircle,
  AlertTriangle,
  ArrowDownToLine,
  CalendarIcon,
  Clock,
  Download,
  Eye,
  Filter,
  HelpCircle,
  Info,
  MoreHorizontal,
  Search,
  XCircle,
} from "lucide-react"

export default function ComplianceLogsPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Compliance & Audit Logs</h1>
        <p className="text-muted-foreground">Monitor system activity and ensure regulatory compliance</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <Card className="md:w-1/4">
          <CardHeader className="pb-2">
            <CardTitle>Log Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-lg p-3 text-center">
                  <div className="text-xl font-semibold">2,463</div>
                  <p className="text-xs text-muted-foreground">Total Events</p>
                </div>
                <div className="border rounded-lg p-3 text-center">
                  <div className="text-xl font-semibold text-amber-600">18</div>
                  <p className="text-xs text-muted-foreground">Warnings</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-lg p-3 text-center">
                  <div className="text-xl font-semibold text-red-600">4</div>
                  <p className="text-xs text-muted-foreground">Errors</p>
                </div>
                <div className="border rounded-lg p-3 text-center">
                  <div className="text-xl font-semibold text-cyan-600">97</div>
                  <p className="text-xs text-muted-foreground">Today's Events</p>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <div className="text-sm font-medium">Recent Activity</div>
                <div className="text-xs space-y-1">
                  <div className="flex items-start">
                    <div className="h-2 w-2 mt-1 rounded-full bg-green-600 mr-2"></div>
                    <div>
                      <p className="text-muted-foreground">Login: admin@pet4u.com</p>
                      <p className="text-muted-foreground">4 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-2 w-2 mt-1 rounded-full bg-amber-600 mr-2"></div>
                    <div>
                      <p className="text-muted-foreground">Failed login attempt</p>
                      <p className="text-muted-foreground">15 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-2 w-2 mt-1 rounded-full bg-green-600 mr-2"></div>
                    <div>
                      <p className="text-muted-foreground">User role updated</p>
                      <p className="text-muted-foreground">1 hour ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:w-3/4">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Compliance Status</CardTitle>
                <CardDescription>System compliance with regulatory requirements</CardDescription>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">
                      Compliance status is updated daily based on system logs and configuration
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "GDPR Compliance",
                  status: "Compliant",
                  lastCheck: "Today at 01:00 AM",
                  items: [
                    { name: "Data Encryption", status: "Pass" },
                    { name: "Privacy Notices", status: "Pass" },
                    { name: "Data Retention", status: "Pass" },
                    { name: "Subject Access", status: "Pass" },
                  ],
                },
                {
                  title: "Animal Welfare Standards",
                  status: "Attention Needed",
                  lastCheck: "Today at 01:00 AM",
                  items: [
                    { name: "Housing Records", status: "Pass" },
                    { name: "Medical Records", status: "Pass" },
                    { name: "Inspection Reports", status: "Warning" },
                    { name: "Staff Training", status: "Pass" },
                  ],
                },
                {
                  title: "Financial Reporting",
                  status: "Compliant",
                  lastCheck: "Today at 01:00 AM",
                  items: [
                    { name: "Donation Records", status: "Pass" },
                    { name: "Expense Tracking", status: "Pass" },
                    { name: "Tax Documentation", status: "Pass" },
                    { name: "Audit Trail", status: "Pass" },
                  ],
                },
              ].map((compliance, index) => (
                <Card key={index}>
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-md">{compliance.title}</CardTitle>
                      <Badge
                        variant={compliance.status === "Compliant" ? "outline" : "secondary"}
                        className={`${
                          compliance.status === "Compliant"
                            ? "bg-green-50 text-green-700 border-green-200"
                            : "bg-amber-50 text-amber-700 border-amber-200"
                        }`}
                      >
                        {compliance.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-xs">Last check: {compliance.lastCheck}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-2">
                    <div className="space-y-1">
                      {compliance.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-center text-sm">
                          <span>{item.name}</span>
                          <span
                            className={`flex items-center ${
                              item.status === "Pass"
                                ? "text-green-600"
                                : item.status === "Warning"
                                  ? "text-amber-600"
                                  : "text-red-600"
                            }`}
                          >
                            {item.status === "Pass" ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-check"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            ) : item.status === "Warning" ? (
                              <AlertTriangle className="h-4 w-4" />
                            ) : (
                              <XCircle className="h-4 w-4" />
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="audit-logs">
        <TabsList className="grid grid-cols-2 md:w-[400px]">
          <TabsTrigger value="audit-logs">Audit Logs</TabsTrigger>
          <TabsTrigger value="system-logs">System Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="audit-logs" className="space-y-4 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search logs..." className="pl-8" />
              </div>

              <div className="flex gap-2 w-full md:w-auto">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Events</SelectItem>
                    <SelectItem value="auth">Authentication</SelectItem>
                    <SelectItem value="data">Data Access</SelectItem>
                    <SelectItem value="config">Configuration</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="icon">
                  <CalendarIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium">Timestamp</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">User</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Category</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Action</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">IP Address</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                    <th className="h-12 px-4 text-right align-middle font-medium">Details</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {[
                    {
                      timestamp: "2025-05-20 10:42:15",
                      user: "admin@pet4u.com",
                      category: "Authentication",
                      action: "User Login",
                      ip: "192.168.1.5",
                      status: "Success",
                    },
                    {
                      timestamp: "2025-05-20 10:15:32",
                      user: "unknown",
                      category: "Authentication",
                      action: "Failed Login",
                      ip: "203.0.113.42",
                      status: "Warning",
                    },
                    {
                      timestamp: "2025-05-20 09:37:18",
                      user: "sarah.johnson@example.com",
                      category: "Data Access",
                      action: "Medical Record Access",
                      ip: "192.168.1.10",
                      status: "Success",
                    },
                    {
                      timestamp: "2025-05-20 09:22:04",
                      user: "michael.chen@example.com",
                      category: "Configuration",
                      action: "Role Permission Change",
                      ip: "192.168.1.15",
                      status: "Success",
                    },
                    {
                      timestamp: "2025-05-20 08:55:47",
                      user: "system",
                      category: "System",
                      action: "Backup Failed",
                      ip: "localhost",
                      status: "Error",
                    },
                    {
                      timestamp: "2025-05-20 08:47:31",
                      user: "emily.rodriguez@example.com",
                      category: "Data Access",
                      action: "Financial Record Export",
                      ip: "192.168.1.22",
                      status: "Success",
                    },
                    {
                      timestamp: "2025-05-20 08:30:15",
                      user: "admin@pet4u.com",
                      category: "Configuration",
                      action: "System Settings Update",
                      ip: "192.168.1.5",
                      status: "Success",
                    },
                  ].map((log, i) => (
                    <tr key={i} className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle font-mono text-xs">
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                          {log.timestamp}
                        </div>
                      </td>
                      <td className="p-4 align-middle">{log.user}</td>
                      <td className="p-4 align-middle">
                        <Badge
                          variant="outline"
                          className={
                            log.category === "Authentication"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : log.category === "Data Access"
                                ? "bg-purple-50 text-purple-700 border-purple-200"
                                : log.category === "Configuration"
                                  ? "bg-amber-50 text-amber-700 border-amber-200"
                                  : "bg-gray-50 text-gray-700 border-gray-200"
                          }
                        >
                          {log.category}
                        </Badge>
                      </td>
                      <td className="p-4 align-middle">{log.action}</td>
                      <td className="p-4 align-middle font-mono text-xs">{log.ip}</td>
                      <td className="p-4 align-middle">
                        <div className="flex items-center">
                          {log.status === "Success" ? (
                            <div className="flex items-center text-green-600">
                              <div className="h-2 w-2 rounded-full bg-green-600 mr-2"></div>
                              Success
                            </div>
                          ) : log.status === "Warning" ? (
                            <div className="flex items-center text-amber-600">
                              <div className="h-2 w-2 rounded-full bg-amber-600 mr-2"></div>
                              Warning
                            </div>
                          ) : (
                            <div className="flex items-center text-red-600">
                              <div className="h-2 w-2 rounded-full bg-red-600 mr-2"></div>
                              Error
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="p-4 align-middle text-right">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Showing 7 of 2,463 events</div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="system-logs" className="space-y-4 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search system logs..." className="pl-8" />
              </div>

              <div className="flex gap-2 w-full md:w-auto">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Log level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="info">Info</SelectItem>
                    <SelectItem value="warning">Warning</SelectItem>
                    <SelectItem value="error">Error</SelectItem>
                    <SelectItem value="debug">Debug</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Component" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Components</SelectItem>
                    <SelectItem value="database">Database</SelectItem>
                    <SelectItem value="api">API</SelectItem>
                    <SelectItem value="auth">Authentication</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="cron">Scheduler</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download Logs
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium">Timestamp</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Level</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Component</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Message</th>
                    <th className="h-12 px-4 text-right align-middle font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {[
                    {
                      timestamp: "2025-05-20 10:45:23",
                      level: "INFO",
                      component: "Authentication",
                      message: "User admin@pet4u.com logged in successfully",
                    },
                    {
                      timestamp: "2025-05-20 10:15:32",
                      level: "WARNING",
                      component: "Authentication",
                      message: "Failed login attempt for user unknown from IP 203.0.113.42",
                    },
                    {
                      timestamp: "2025-05-20 09:30:18",
                      level: "INFO",
                      component: "Database",
                      message: "Database backup started",
                    },
                    {
                      timestamp: "2025-05-20 09:22:04",
                      level: "INFO",
                      component: "User Management",
                      message: "User role updated: volunteer_coordinator assigned to user michael.chen@example.com",
                    },
                    {
                      timestamp: "2025-05-20 08:55:47",
                      level: "ERROR",
                      component: "Database",
                      message: "Database backup failed: insufficient disk space",
                    },
                    {
                      timestamp: "2025-05-20 08:30:15",
                      level: "INFO",
                      component: "System",
                      message: "System settings updated by admin@pet4u.com",
                    },
                    {
                      timestamp: "2025-05-20 08:05:33",
                      level: "INFO",
                      component: "Email",
                      message: "Sent 15 scheduled notification emails",
                    },
                    {
                      timestamp: "2025-05-20 07:00:01",
                      level: "INFO",
                      component: "Scheduler",
                      message: "Daily maintenance tasks started",
                    },
                    {
                      timestamp: "2025-05-20 06:58:42",
                      level: "WARNING",
                      component: "API",
                      message: "API rate limit exceeded for endpoint /api/v1/pets from IP 192.168.1.100",
                    },
                    {
                      timestamp: "2025-05-20 00:15:00",
                      level: "ERROR",
                      component: "Email",
                      message: "Failed to connect to SMTP server: Connection timeout",
                    },
                  ].map((log, i) => (
                    <tr key={i} className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle font-mono text-xs">{log.timestamp}</td>
                      <td className="p-4 align-middle">
                        {log.level === "INFO" ? (
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            <Info className="h-3 w-3 mr-1" />
                            INFO
                          </Badge>
                        ) : log.level === "WARNING" ? (
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            WARNING
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            ERROR
                          </Badge>
                        )}
                      </td>
                      <td className="p-4 align-middle">{log.component}</td>
                      <td className="p-4 align-middle truncate max-w-md">{log.message}</td>
                      <td className="p-4 align-middle text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <ArrowDownToLine className="mr-2 h-4 w-4" />
                              Download
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Showing 10 of 5,128 log entries</div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
