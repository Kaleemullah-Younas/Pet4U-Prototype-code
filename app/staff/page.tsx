"use client"

import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { PawPrint, Users, Calendar, Clock, Package, DollarSign, BarChart, Plus, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function StaffDashboardPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Staff Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening at the shelter today.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Animals in Shelter</CardTitle>
              <PawPrint className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">+3 from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Applications</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 new today</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">3 adoptions, 5 visits</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Volunteer Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="animals">
          <TabsList>
            <TabsTrigger value="animals">Animals</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
          </TabsList>
          <TabsContent value="animals" className="space-y-4">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">Recent Animal Intakes</h2>
              <Button asChild>
                <Link href="/staff/intake">
                  <Plus className="mr-2 h-4 w-4" />
                  New Intake
                </Link>
              </Button>
            </div>
            <div className="rounded-md border">
              <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                <div>ID</div>
                <div>Name</div>
                <div>Type</div>
                <div>Intake Date</div>
                <div>Status</div>
              </div>
              {[
                { id: "A-1234", name: "Rocky", type: "Dog", date: "2023-05-18", status: "Available" },
                { id: "A-1235", name: "Mittens", type: "Cat", date: "2023-05-17", status: "Medical Hold" },
                { id: "A-1236", name: "Buddy", type: "Dog", date: "2023-05-15", status: "Available" },
                { id: "A-1237", name: "Whiskers", type: "Cat", date: "2023-05-14", status: "Available" },
                { id: "A-1238", name: "Rex", type: "Dog", date: "2023-05-12", status: "Pending Adoption" },
              ].map((animal) => (
                <div key={animal.id} className="grid grid-cols-5 gap-4 border-t p-4">
                  <div>{animal.id}</div>
                  <div>{animal.name}</div>
                  <div>{animal.type}</div>
                  <div>{animal.date}</div>
                  <div>
                    <Badge
                      variant="outline"
                      className={
                        animal.status === "Available"
                          ? "bg-green-50 text-green-700"
                          : animal.status === "Medical Hold"
                            ? "bg-red-50 text-red-700"
                            : "bg-yellow-50 text-yellow-700"
                      }
                    >
                      {animal.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <Button variant="outline" asChild>
                <Link href="/staff/intake">
                  View All Animals
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-4">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">Recent Applications</h2>
              <Button asChild>
                <Link href="/staff/adoptions">Process Applications</Link>
              </Button>
            </div>
            <div className="rounded-md border">
              <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                <div>ID</div>
                <div>Applicant</div>
                <div>Pet</div>
                <div>Date</div>
                <div>Status</div>
              </div>
              {[
                { id: "APP-567", name: "John Smith", pet: "Rocky", date: "2023-05-18", status: "Pending Review" },
                {
                  id: "APP-566",
                  name: "Jane Doe",
                  pet: "Whiskers",
                  date: "2023-05-17",
                  status: "Home Visit Scheduled",
                },
                { id: "APP-565", name: "Bob Johnson", pet: "Buddy", date: "2023-05-15", status: "Approved" },
                { id: "APP-564", name: "Alice Brown", pet: "Mittens", date: "2023-05-14", status: "Pending Review" },
                { id: "APP-563", name: "Charlie Davis", pet: "Rex", date: "2023-05-12", status: "Denied" },
              ].map((app) => (
                <div key={app.id} className="grid grid-cols-5 gap-4 border-t p-4">
                  <div>{app.id}</div>
                  <div>{app.name}</div>
                  <div>{app.pet}</div>
                  <div>{app.date}</div>
                  <div>
                    <Badge
                      variant="outline"
                      className={
                        app.status === "Approved"
                          ? "bg-green-50 text-green-700"
                          : app.status === "Denied"
                            ? "bg-red-50 text-red-700"
                            : "bg-yellow-50 text-yellow-700"
                      }
                    >
                      {app.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <Button variant="outline" asChild>
                <Link href="/staff/adoptions">
                  View All Applications
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="appointments" className="space-y-4">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">Today's Appointments</h2>
              <Button asChild>
                <Link href="/staff/appointments">
                  <Plus className="mr-2 h-4 w-4" />
                  New Appointment
                </Link>
              </Button>
            </div>
            <div className="rounded-md border">
              <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                <div>Time</div>
                <div>Visitor</div>
                <div>Pet</div>
                <div>Type</div>
                <div>Status</div>
              </div>
              {[
                { time: "9:00 AM", name: "John Smith", pet: "Rocky", type: "Meet & Greet", status: "Confirmed" },
                { time: "10:30 AM", name: "Jane Doe", pet: "Whiskers", type: "Home Visit", status: "Confirmed" },
                {
                  time: "1:00 PM",
                  name: "Bob Johnson",
                  pet: "Buddy",
                  type: "Adoption Finalization",
                  status: "Confirmed",
                },
                { time: "2:30 PM", name: "Alice Brown", pet: "Mittens", type: "Meet & Greet", status: "Pending" },
                {
                  time: "4:00 PM",
                  name: "Charlie Davis",
                  pet: "Rex",
                  type: "Adoption Finalization",
                  status: "Confirmed",
                },
              ].map((app, index) => (
                <div key={index} className="grid grid-cols-5 gap-4 border-t p-4">
                  <div>{app.time}</div>
                  <div>{app.name}</div>
                  <div>{app.pet}</div>
                  <div>{app.type}</div>
                  <div>
                    <Badge
                      variant="outline"
                      className={
                        app.status === "Confirmed" ? "bg-green-50 text-green-700" : "bg-yellow-50 text-yellow-700"
                      }
                    >
                      {app.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <Button variant="outline" asChild>
                <Link href="/staff/appointments">
                  View All Appointments
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="inventory" className="space-y-4">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">Inventory Status</h2>
              <Button asChild>
                <Link href="/staff/inventory">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Inventory
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Dog Food</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24 bags</div>
                  <div className="mt-2 h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-3/4 rounded-full bg-green-500"></div>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">75% of capacity</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cat Food</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18 bags</div>
                  <div className="mt-2 h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-1/2 rounded-full bg-yellow-500"></div>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">50% of capacity</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Medications</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5 items</div>
                  <div className="mt-2 h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-1/4 rounded-full bg-red-500"></div>
                  </div>
                  <p className="mt-1 text-xs text-red-500 font-medium">Low stock - reorder needed</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-end">
              <Button variant="outline" asChild>
                <Link href="/staff/inventory">
                  View Full Inventory
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Donations</CardTitle>
              <CardDescription>Donations received in the past 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Anonymous", amount: "$250", date: "May 18, 2023", type: "One-time" },
                  { name: "John Smith", amount: "$100", date: "May 15, 2023", type: "Monthly" },
                  { name: "Jane Doe", amount: "$500", date: "May 10, 2023", type: "One-time" },
                  { name: "Pet Lovers Inc.", amount: "$1,000", date: "May 5, 2023", type: "Corporate" },
                ].map((donation, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">{donation.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {donation.date} • {donation.type}
                      </p>
                    </div>
                    <div className="ml-auto font-medium">{donation.amount}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Adoption Statistics</CardTitle>
              <CardDescription>Adoption trends for the current year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="text-2xl font-bold">127</div>
                  <div className="text-xs text-muted-foreground">Total Adoptions</div>
                </div>
                <div className="ml-auto flex items-center rounded-md bg-green-50 px-2 py-1 text-xs text-green-700">
                  <span>+12% from last year</span>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-xs">
                  <div>Dogs</div>
                  <div className="font-medium">72 (57%)</div>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[57%] rounded-full bg-primary"></div>
                </div>
                <div className="flex justify-between text-xs">
                  <div>Cats</div>
                  <div className="font-medium">48 (38%)</div>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[38%] rounded-full bg-primary"></div>
                </div>
                <div className="flex justify-between text-xs">
                  <div>Other</div>
                  <div className="font-medium">7 (5%)</div>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[5%] rounded-full bg-primary"></div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/staff/reports">
                    <BarChart className="mr-2 h-4 w-4" />
                    View Reports
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
