"use client"

import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Stethoscope, FileText, ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function VetDashboardPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Veterinary Partner Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Manage appointments and medical records</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Next: 10:30 AM - Buddy (Checkup)</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Records</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Treatment records to complete</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Week</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Scheduled appointments</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Patients Treated</CardTitle>
              <Stethoscope className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center space-x-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search for a patient..." className="max-w-sm" />
        </div>

        <Tabs defaultValue="appointments">
          <TabsList>
            <TabsTrigger value="appointments">Today's Appointments</TabsTrigger>
            <TabsTrigger value="pending">Pending Records</TabsTrigger>
            <TabsTrigger value="recent">Recent Patients</TabsTrigger>
          </TabsList>
          <TabsContent value="appointments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>May 20, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      time: "9:00 AM",
                      pet: "Max",
                      type: "Golden Retriever",
                      owner: "John Smith",
                      reason: "Vaccination",
                      status: "Completed",
                    },
                    {
                      time: "10:30 AM",
                      pet: "Buddy",
                      type: "Labrador",
                      owner: "Jane Doe",
                      reason: "Checkup",
                      status: "Upcoming",
                    },
                    {
                      time: "1:00 PM",
                      pet: "Luna",
                      type: "Siamese Cat",
                      owner: "Bob Johnson",
                      reason: "Dental Cleaning",
                      status: "Upcoming",
                    },
                    {
                      time: "2:30 PM",
                      pet: "Daisy",
                      type: "Beagle",
                      owner: "Alice Brown",
                      reason: "Skin Issue",
                      status: "Upcoming",
                    },
                    {
                      time: "4:00 PM",
                      pet: "Oliver",
                      type: "Tabby Cat",
                      owner: "Charlie Davis",
                      reason: "Neutering",
                      status: "Upcoming",
                    },
                  ].map((appointment, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="min-w-24 text-sm font-medium">{appointment.time}</div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">
                            {appointment.pet} ({appointment.type})
                          </p>
                          <Badge
                            variant="outline"
                            className={
                              appointment.status === "Completed"
                                ? "bg-green-50 text-green-700"
                                : "bg-blue-50 text-blue-700"
                            }
                          >
                            {appointment.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Owner: {appointment.owner}</p>
                        <p className="text-sm text-muted-foreground">Reason: {appointment.reason}</p>
                      </div>
                      <div>
                        <Button
                          variant="outline"
                          size="sm"
                          className={appointment.status === "Completed" ? "hidden" : ""}
                        >
                          Start Visit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/vet/appointments">
                    View All Appointments
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Treatment Records</CardTitle>
                <CardDescription>Records that need to be completed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      date: "May 19, 2023",
                      pet: "Rocky",
                      type: "German Shepherd",
                      owner: "Michael Wilson",
                      reason: "Injury Assessment",
                    },
                    {
                      date: "May 18, 2023",
                      pet: "Whiskers",
                      type: "Maine Coon",
                      owner: "Sarah Johnson",
                      reason: "Respiratory Issue",
                    },
                    {
                      date: "May 17, 2023",
                      pet: "Bella",
                      type: "Poodle",
                      owner: "David Thompson",
                      reason: "Annual Checkup",
                    },
                  ].map((record, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="min-w-24 text-sm font-medium">{record.date}</div>
                      <div className="flex-1 space-y-1">
                        <p className="font-medium">
                          {record.pet} ({record.type})
                        </p>
                        <p className="text-sm text-muted-foreground">Owner: {record.owner}</p>
                        <p className="text-sm text-muted-foreground">Reason: {record.reason}</p>
                      </div>
                      <div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/vet/treatment?pet=${record.pet}`}>Complete Record</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/vet/treatment">
                    View All Pending Records
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="recent" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recently Treated Patients</CardTitle>
                <CardDescription>Patients seen in the last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      date: "May 19, 2023",
                      pet: "Max",
                      type: "Golden Retriever",
                      owner: "John Smith",
                      treatment: "Vaccination",
                    },
                    {
                      date: "May 18, 2023",
                      pet: "Luna",
                      type: "Siamese Cat",
                      owner: "Jane Doe",
                      treatment: "Dental Cleaning",
                    },
                    {
                      date: "May 17, 2023",
                      pet: "Buddy",
                      type: "Labrador",
                      owner: "Bob Johnson",
                      treatment: "Ear Infection",
                    },
                    {
                      date: "May 16, 2023",
                      pet: "Daisy",
                      type: "Beagle",
                      owner: "Alice Brown",
                      treatment: "Vaccinations",
                    },
                    {
                      date: "May 15, 2023",
                      pet: "Oliver",
                      type: "Tabby Cat",
                      owner: "Charlie Davis",
                      treatment: "Neutering",
                    },
                  ].map((patient, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="min-w-24 text-sm font-medium">{patient.date}</div>
                      <div className="flex-1 space-y-1">
                        <p className="font-medium">
                          {patient.pet} ({patient.type})
                        </p>
                        <p className="text-sm text-muted-foreground">Owner: {patient.owner}</p>
                        <p className="text-sm text-muted-foreground">Treatment: {patient.treatment}</p>
                      </div>
                      <div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/vet/history?pet=${patient.pet}`}>View History</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/vet/history">
                    View All Patient Records
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}
