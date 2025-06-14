"use client"

import type React from "react"

import { useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { format } from "date-fns"
import { CalendarIcon, Clock, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function VolunteerHoursPage() {
  const { toast } = useToast()
  const [date, setDate] = useState<Date>()
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [role, setRole] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Hours Logged",
      description: `You've successfully logged ${calculateHours()} hours for ${date ? format(date, "PPP") : ""}.`,
    })
    // Reset form
    setDate(undefined)
    setStartTime("")
    setEndTime("")
    setRole("")
    setDescription("")
  }

  const calculateHours = () => {
    if (!startTime || !endTime) return 0

    const [startHour, startMinute] = startTime.split(":").map(Number)
    const [endHour, endMinute] = endTime.split(":").map(Number)

    const start = startHour * 60 + startMinute
    const end = endHour * 60 + endMinute

    return ((end - start) / 60).toFixed(1)
  }

  const volunteerRoles = [
    { id: "dog-walker", name: "Dog Walker" },
    { id: "cat-socializer", name: "Cat Socializer" },
    { id: "adoption-counselor", name: "Adoption Counselor" },
    { id: "event-support", name: "Event Support" },
    { id: "admin-support", name: "Administrative Support" },
    { id: "cleaning-crew", name: "Cleaning Crew" },
  ]

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Log Volunteer Hours</h1>
          <p className="text-muted-foreground">Record the time you've spent volunteering</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Log Hours</CardTitle>
                <CardDescription>Enter details about your volunteer work</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => {
                            // Disable future dates
                            const today = new Date()
                            today.setHours(23, 59, 59, 999)
                            return date > today
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="start-time">Start Time</Label>
                      <Input
                        id="start-time"
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="end-time">End Time</Label>
                      <Input
                        id="end-time"
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Volunteer Role</Label>
                    <Select value={role} onValueChange={setRole} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        {volunteerRoles.map((role) => (
                          <SelectItem key={role.id} value={role.id}>
                            {role.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description of Activities</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe what you did during your volunteer shift"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </div>

                  {startTime && endTime && (
                    <div className="rounded-md bg-primary/5 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Clock className="mr-2 h-5 w-5 text-primary" />
                          <span className="font-medium">Total Hours:</span>
                        </div>
                        <span className="text-lg font-bold">{calculateHours()}</span>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={!date || !startTime || !endTime || !role || !description}
                  >
                    Log Hours
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hours Summary</CardTitle>
                <CardDescription>Your volunteer contribution this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total Hours This Month</p>
                    <p className="text-2xl font-bold">12.5</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Monthly Goal</span>
                    <span>20 hours</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[62.5%] rounded-full bg-primary"></div>
                  </div>
                  <p className="text-xs text-muted-foreground text-right">62.5% complete</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Hours by Role</p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Dog Walker</span>
                      <span>5.5 hours</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[44%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Cat Socializer</span>
                      <span>3.0 hours</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[24%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Event Support</span>
                      <span>4.0 hours</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[32%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Hours</CardTitle>
                <CardDescription>Your recently logged volunteer hours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      date: "May 18, 2023",
                      hours: "2.5",
                      role: "Dog Walker",
                    },
                    {
                      date: "May 15, 2023",
                      hours: "3.0",
                      role: "Cat Socializer",
                    },
                    {
                      date: "May 12, 2023",
                      hours: "4.0",
                      role: "Event Support",
                    },
                    {
                      date: "May 10, 2023",
                      hours: "3.0",
                      role: "Dog Walker",
                    },
                  ].map((entry, index) => (
                    <div key={index} className="flex items-center justify-between rounded-md border p-3">
                      <div className="space-y-1">
                        <p className="font-medium">{entry.date}</p>
                        <p className="text-sm text-muted-foreground">{entry.role}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-medium">{entry.hours} hours</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  View All Hours
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
