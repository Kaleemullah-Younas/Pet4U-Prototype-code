"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, Plus, Search, Trash2 } from "lucide-react"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

type Appointment = {
  id: string
  title: string
  date: Date
  time: string
  type: string
  petName: string
  petId: string
  clientName: string
  clientEmail: string
  clientPhone: string
  status: "scheduled" | "checked-in" | "in-progress" | "completed" | "cancelled"
  notes: string
}

export default function AppointmentManagementPage() {
  const [date, setDate] = useState<Date>(new Date())
  const [searchTerm, setSearchTerm] = useState("")

  // Sample appointment data
  const appointments: Appointment[] = [
    {
      id: "APT-1234",
      title: "Adoption Meeting",
      date: new Date(),
      time: "10:00 AM",
      type: "adoption",
      petName: "Buddy",
      petId: "A12345",
      clientName: "John Smith",
      clientEmail: "john.smith@example.com",
      clientPhone: "(555) 123-4567",
      status: "scheduled",
      notes: "First meeting with potential adopter",
    },
    {
      id: "APT-1235",
      title: "Veterinary Check-up",
      date: new Date(),
      time: "11:30 AM",
      type: "medical",
      petName: "Luna",
      petId: "A12346",
      clientName: "Dr. Martinez",
      clientEmail: "martinez@vetclinic.com",
      clientPhone: "(555) 234-5678",
      status: "checked-in",
      notes: "Routine check-up and vaccinations",
    },
    {
      id: "APT-1236",
      title: "Foster Introduction",
      date: new Date(),
      time: "1:00 PM",
      type: "foster",
      petName: "Whiskers",
      petId: "A12347",
      clientName: "Sarah Johnson",
      clientEmail: "sarah.j@example.com",
      clientPhone: "(555) 345-6789",
      status: "scheduled",
      notes: "Meeting with new foster parent",
    },
    {
      id: "APT-1237",
      title: "Behavioral Assessment",
      date: new Date(),
      time: "2:30 PM",
      type: "behavioral",
      petName: "Rex",
      petId: "A12348",
      clientName: "Michael Brown",
      clientEmail: "mbrown@example.com",
      clientPhone: "(555) 456-7890",
      status: "in-progress",
      notes: "Assessing behavior for adoption readiness",
    },
    {
      id: "APT-1238",
      title: "Follow-up Adoption",
      date: new Date(),
      time: "4:00 PM",
      type: "adoption",
      petName: "Mittens",
      petId: "A12349",
      clientName: "Emily Davis",
      clientEmail: "emily.d@example.com",
      clientPhone: "(555) 567-8901",
      status: "completed",
      notes: "Final adoption paperwork and handover",
    },
  ]

  const filteredAppointments = appointments.filter((apt) => {
    const matchesSearch =
      apt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.petName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.id.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesSearch
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Scheduled
          </Badge>
        )
      case "checked-in":
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
            Checked In
          </Badge>
        )
      case "in-progress":
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            In Progress
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Completed
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Cancelled
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Appointment Management</h1>
        <p className="text-muted-foreground">Schedule and manage appointments for adoptions, medical care, and more</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search appointments"
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600">
              <Plus className="h-4 w-4 mr-2" />
              New Appointment
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Schedule New Appointment</DialogTitle>
              <DialogDescription>
                Create a new appointment for adoption, medical care, or other services
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Appointment Title</Label>
                  <Input id="title" placeholder="Enter appointment title" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Appointment Type</Label>
                  <Select>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="adoption">Adoption Meeting</SelectItem>
                      <SelectItem value="medical">Veterinary Care</SelectItem>
                      <SelectItem value="foster">Foster Meeting</SelectItem>
                      <SelectItem value="behavioral">Behavioral Assessment</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Select>
                    <SelectTrigger id="time">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9:00">9:00 AM</SelectItem>
                      <SelectItem value="9:30">9:30 AM</SelectItem>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="10:30">10:30 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="11:30">11:30 AM</SelectItem>
                      <SelectItem value="12:00">12:00 PM</SelectItem>
                      <SelectItem value="12:30">12:30 PM</SelectItem>
                      <SelectItem value="13:00">1:00 PM</SelectItem>
                      <SelectItem value="13:30">1:30 PM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="14:30">2:30 PM</SelectItem>
                      <SelectItem value="15:00">3:00 PM</SelectItem>
                      <SelectItem value="15:30">3:30 PM</SelectItem>
                      <SelectItem value="16:00">4:00 PM</SelectItem>
                      <SelectItem value="16:30">4:30 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="pet-id">Pet ID</Label>
                  <Input id="pet-id" placeholder="Enter pet ID" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pet-name">Pet Name</Label>
                  <Input id="pet-name" placeholder="Enter pet name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="client-name">Client Name</Label>
                  <Input id="client-name" placeholder="Enter client name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="client-email">Client Email</Label>
                  <Input id="client-email" type="email" placeholder="Enter client email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="client-phone">Client Phone</Label>
                  <Input id="client-phone" placeholder="Enter client phone" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Add any additional notes or instructions" />
            </div>

            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600">
                Schedule Appointment
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="calendar" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>

        <TabsContent value="calendar" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Appointments Calendar</span>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => setDate(new Date())}>
                    Today
                  </Button>
                </div>
              </CardTitle>
              <CardDescription>{format(date, "MMMM yyyy")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md">
                <div className="grid grid-cols-7 gap-px bg-muted">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="bg-background p-2 text-center text-sm font-medium">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-px bg-muted">
                  {Array.from({ length: 35 }).map((_, i) => (
                    <div
                      key={i}
                      className={cn("bg-background min-h-24 p-2", i === 15 && "bg-cyan-50 dark:bg-cyan-950/20")}
                    >
                      <div className="font-medium text-sm">{(i % 31) + 1}</div>
                      {i === 15 && (
                        <div className="mt-1 space-y-1">
                          <div className="bg-blue-100 text-blue-800 text-xs p-1 rounded truncate">
                            10:00 AM - Adoption Meeting
                          </div>
                          <div className="bg-green-100 text-green-800 text-xs p-1 rounded truncate">
                            11:30 AM - Vet Check-up
                          </div>
                          <div className="bg-purple-100 text-purple-800 text-xs p-1 rounded truncate">
                            1:00 PM - Foster Intro
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="list" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Appointments List</CardTitle>
              <CardDescription>View and manage all scheduled appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-3 text-left font-medium">Time</th>
                      <th className="p-3 text-left font-medium">Title</th>
                      <th className="p-3 text-left font-medium">Pet</th>
                      <th className="p-3 text-left font-medium">Client</th>
                      <th className="p-3 text-left font-medium">Type</th>
                      <th className="p-3 text-left font-medium">Status</th>
                      <th className="p-3 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAppointments.map((appointment) => (
                      <tr key={appointment.id} className="border-b hover:bg-muted/50">
                        <td className="p-3">{appointment.time}</td>
                        <td className="p-3">{appointment.title}</td>
                        <td className="p-3">
                          <div className="font-medium">{appointment.petName}</div>
                          <div className="text-xs text-muted-foreground">{appointment.petId}</div>
                        </td>
                        <td className="p-3">
                          <div className="font-medium">{appointment.clientName}</div>
                          <div className="text-xs text-muted-foreground">{appointment.clientEmail}</div>
                        </td>
                        <td className="p-3 capitalize">{appointment.type}</td>
                        <td className="p-3">{getStatusBadge(appointment.status)}</td>
                        <td className="p-3">
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  Edit
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Edit Appointment</DialogTitle>
                                  <DialogDescription>Update appointment details</DialogDescription>
                                </DialogHeader>
                                {/* Edit form would go here - similar to the create form */}
                                <DialogFooter>
                                  <Button variant="outline">Cancel</Button>
                                  <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600">
                                    Save Changes
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">Showing {filteredAppointments.length} appointments</div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
