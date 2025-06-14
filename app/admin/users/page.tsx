import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  AlertTriangle,
  ArrowUpDown,
  Download,
  Filter,
  Lock,
  MoreHorizontal,
  PenSquare,
  Plus,
  RefreshCw,
  Search,
  Shield,
  Trash,
  UserPlus,
  Users,
} from "lucide-react"

export default function UserManagementPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">User & Role Management</h1>
        <p className="text-muted-foreground">Manage users, permissions, and access controls</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <Card className="md:w-1/4">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>System Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">246</div>
            <p className="text-sm text-muted-foreground">Total registered users</p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="border rounded-lg p-3">
                <div className="text-sm font-medium">Active</div>
                <div className="text-xl font-semibold text-green-600">219</div>
                <p className="text-xs text-muted-foreground">89% of users</p>
              </div>
              <div className="border rounded-lg p-3">
                <div className="text-sm font-medium">Inactive</div>
                <div className="text-xl font-semibold text-amber-600">27</div>
                <p className="text-xs text-muted-foreground">11% of users</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:w-3/4">
          <CardHeader className="pb-2">
            <CardTitle>User Roles Distribution</CardTitle>
            <CardDescription>Overview of user types across the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { role: "Adopters", count: 152, color: "bg-cyan-600" },
                { role: "Staff", count: 35, color: "bg-green-600" },
                { role: "Volunteers", count: 42, color: "bg-purple-600" },
                { role: "Veterinarians", count: 8, color: "bg-amber-600" },
                { role: "Administrators", count: 9, color: "bg-rose-600" },
              ].map((item, index) => (
                <div key={index} className="border rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <div className="text-sm font-medium">{item.role}</div>
                  </div>
                  <div className="text-xl font-semibold mt-1">{item.count}</div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2">
                    <div
                      className={`h-1.5 rounded-full ${item.color}`}
                      style={{ width: `${(item.count / 246) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users">
        <TabsList className="grid grid-cols-3 md:w-[400px]">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="roles">Roles</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4 pt-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="relative md:w-80">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search users..." className="pl-8" />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Select>
                <SelectTrigger className="h-9 w-[150px]">
                  <SelectValue placeholder="All Roles" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="adopter">Adopter</SelectItem>
                  <SelectItem value="staff">Staff</SelectItem>
                  <SelectItem value="volunteer">Volunteer</SelectItem>
                  <SelectItem value="vet">Veterinarian</SelectItem>
                  <SelectItem value="admin">Administrator</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add User
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New User</DialogTitle>
                    <DialogDescription>Create a new user account with assigned roles</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input id="name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">
                        Email
                      </Label>
                      <Input id="email" type="email" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="role" className="text-right">
                        Role
                      </Label>
                      <Select>
                        <SelectTrigger id="role" className="col-span-3">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="adopter">Adopter</SelectItem>
                          <SelectItem value="staff">Staff</SelectItem>
                          <SelectItem value="volunteer">Volunteer</SelectItem>
                          <SelectItem value="vet">Veterinarian</SelectItem>
                          <SelectItem value="admin">Administrator</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label className="text-right">Status</Label>
                      <div className="flex items-center space-x-2 col-span-3">
                        <Switch id="user-status" />
                        <Label htmlFor="user-status">Active account</Label>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-cyan-600 hover:bg-cyan-700">Create User</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="rounded-md border">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="select-all" />
                        <Label htmlFor="select-all" className="text-xs font-normal">
                          Select All
                        </Label>
                      </div>
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      <button className="flex items-center gap-1">
                        Name
                        <ArrowUpDown className="h-3 w-3" />
                      </button>
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Role</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Last Login</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {[
                    {
                      name: "Sarah Johnson",
                      email: "sarah.johnson@example.com",
                      role: "Administrator",
                      status: "Active",
                      lastLogin: "Today at 9:42 AM",
                    },
                    {
                      name: "Michael Chen",
                      email: "michael.chen@example.com",
                      role: "Veterinarian",
                      status: "Active",
                      lastLogin: "Yesterday at 4:15 PM",
                    },
                    {
                      name: "Emily Rodriguez",
                      email: "emily.rodriguez@example.com",
                      role: "Staff",
                      status: "Active",
                      lastLogin: "May 18, 2025",
                    },
                    {
                      name: "David Kim",
                      email: "david.kim@example.com",
                      role: "Volunteer",
                      status: "Inactive",
                      lastLogin: "Apr 25, 2025",
                    },
                    {
                      name: "Jessica Taylor",
                      email: "jessica.taylor@example.com",
                      role: "Adopter",
                      status: "Active",
                      lastLogin: "May 19, 2025",
                    },
                  ].map((user, i) => (
                    <tr key={i} className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle">
                        <Checkbox id={`select-${i}`} />
                      </td>
                      <td className="p-4 align-middle font-medium">{user.name}</td>
                      <td className="p-4 align-middle">{user.email}</td>
                      <td className="p-4 align-middle">
                        <Badge
                          variant={
                            user.role === "Administrator"
                              ? "destructive"
                              : user.role === "Veterinarian"
                                ? "warning"
                                : user.role === "Staff"
                                  ? "default"
                                  : user.role === "Volunteer"
                                    ? "secondary"
                                    : "outline"
                          }
                        >
                          {user.role}
                        </Badge>
                      </td>
                      <td className="p-4 align-middle">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            user.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="p-4 align-middle text-muted-foreground">{user.lastLogin}</td>
                      <td className="p-4 align-middle">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <PenSquare className="mr-2 h-4 w-4" />
                              Edit Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Shield className="mr-2 h-4 w-4" />
                              Modify Permissions
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Lock className="mr-2 h-4 w-4" />
                              Reset Password
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <Trash className="mr-2 h-4 w-4" />
                              Delete User
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
            <div className="text-sm text-muted-foreground">Showing 5 of 246 users</div>
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

        <TabsContent value="roles" className="space-y-4 pt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">System Roles</h3>
            <Button className="bg-cyan-600 hover:bg-cyan-700" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Create New Role
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "Administrator",
                description: "Full system access and control",
                userCount: 9,
                permissions: 42,
                color: "rose",
              },
              {
                name: "Staff Member",
                description: "Shelter operations management",
                userCount: 35,
                permissions: 28,
                color: "green",
              },
              {
                name: "Veterinarian",
                description: "Medical record access and management",
                userCount: 8,
                permissions: 15,
                color: "amber",
              },
              {
                name: "Volunteer Coordinator",
                description: "Volunteer scheduling and management",
                userCount: 5,
                permissions: 12,
                color: "violet",
              },
              {
                name: "Volunteer",
                description: "Limited access to volunteer features",
                userCount: 42,
                permissions: 8,
                color: "purple",
              },
              {
                name: "Adopter",
                description: "Access to adoption applications and pet profiles",
                userCount: 152,
                permissions: 6,
                color: "cyan",
              },
            ].map((role, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className={`text-${role.color}-600`}>{role.name}</CardTitle>
                    <Badge variant="outline">{role.userCount} Users</Badge>
                  </div>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span>Permissions:</span>
                      <span className="font-medium">{role.permissions}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        View Users
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="permissions" className="space-y-4 pt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Permission Management</h3>

            <Select defaultValue="administrator">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select role to edit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="administrator">Administrator</SelectItem>
                <SelectItem value="staff">Staff Member</SelectItem>
                <SelectItem value="vet">Veterinarian</SelectItem>
                <SelectItem value="volunteer-coord">Volunteer Coordinator</SelectItem>
                <SelectItem value="volunteer">Volunteer</SelectItem>
                <SelectItem value="adopter">Adopter</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Administrator Role Permissions</CardTitle>
              <CardDescription>Define what administrators can access and modify</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    category: "User Management",
                    permissions: [
                      { name: "Create users", granted: true },
                      { name: "Delete users", granted: true },
                      { name: "Reset passwords", granted: true },
                      { name: "Manage roles", granted: true },
                    ],
                  },
                  {
                    category: "Pet Records",
                    permissions: [
                      { name: "Create pet profiles", granted: true },
                      { name: "Update medical records", granted: true },
                      { name: "Delete pet records", granted: true },
                      { name: "Access sensitive information", granted: true },
                    ],
                  },
                  {
                    category: "Financial Data",
                    permissions: [
                      { name: "View donation records", granted: true },
                      { name: "Process refunds", granted: true },
                      { name: "Generate financial reports", granted: true },
                      { name: "Manage payment methods", granted: true },
                    ],
                  },
                ].map((section, sectionIndex) => (
                  <div key={sectionIndex} className="border rounded-md p-4">
                    <h4 className="font-medium mb-2">{section.category}</h4>
                    <div className="space-y-2">
                      {section.permissions.map((permission, permissionIndex) => (
                        <div key={permissionIndex} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id={`permission-${sectionIndex}-${permissionIndex}`}
                              checked={permission.granted}
                            />
                            <Label htmlFor={`permission-${sectionIndex}-${permissionIndex}`}>{permission.name}</Label>
                          </div>
                          {permission.name.includes("Delete") && (
                            <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">
                              <AlertTriangle className="h-3 w-3 mr-1" />
                              Sensitive
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardContent className="border-t pt-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <RefreshCw className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Last updated: May 15, 2025</span>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline">Reset to Default</Button>
                  <Button className="bg-cyan-600 hover:bg-cyan-700">Save Changes</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
