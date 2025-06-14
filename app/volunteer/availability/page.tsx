"use client"

import type React from "react"

import { useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { format } from "date-fns"
import { CalendarIcon, Clock, Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function VolunteerAvailabilityPage() {
  const { toast } = useToast()
  const [date, setDate] = useState<Date>()
  const [timeSlots, setTimeSlots] = useState<string[]>([])
  const [role, setRole] = useState("")
  const [recurringType, setRecurringType] = useState("one-time")
  const [weeklyDays, setWeeklyDays] = useState<string[]>([])

  const handleTimeSlotToggle = (slot: string) => {
    setTimeSlots((prev) => (prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot]))
  }

  const handleWeeklyDayToggle = (day: string) => {
    setWeeklyDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Availability Submitted",
      description:
        recurringType === "one-time"
          ? `Your availability for ${date ? format(date, "PPP") : ""} has been submitted.`
          : "Your recurring availability has been submitted.",
    })
  }

  const availableTimeSlots = [
    "9:00 AM - 11:00 AM",
    "11:00 AM - 1:00 PM",
    "1:00 PM - 3:00 PM",
    "3:00 PM - 5:00 PM",
    "5:00 PM - 7:00 PM",
  ]

  const volunteerRoles = [
    { id: "dog-walker", name: "Dog Walker" },
    { id: "cat-socializer", name: "Cat Socializer" },
    { id: "adoption-counselor", name: "Adoption Counselor" },
    { id: "event-support", name: "Event Support" },
    { id: "admin-support", name: "Administrative Support" },
    { id: "cleaning-crew", name: "Cleaning Crew" },
  ]

  const daysOfWeek = [
    { id: "monday", name: "Monday" },
    { id: "tuesday", name: "Tuesday" },
    { id: "wednesday", name: "Wednesday" },
    { id: "thursday", name: "Thursday" },
    { id: "friday", name: "Friday" },
    { id: "saturday", name: "Saturday" },
    { id: "sunday", name: "Sunday" },
  ]

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Submit Availability</h1>
          <p className="text-muted-foreground">Let us know when you're available to volunteer</p>
        </div>

        <Tabs defaultValue="one-time" onValueChange={setRecurringType}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="one-time">One-Time Availability</TabsTrigger>
            <TabsTrigger value="recurring">Recurring Availability</TabsTrigger>
          </TabsList>

          <TabsContent value="one-time" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>One-Time Availability</CardTitle>
                <CardDescription>Submit your availability for a specific date</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Select Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => {
                            // Disable past dates
                            const today = new Date()
                            today.setHours(0, 0, 0, 0)
                            return date < today
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>Select Time Slots</Label>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                      {availableTimeSlots.map((slot) => (
                        <div
                          key={slot}
                          className={cn(
                            "flex items-center justify-between rounded-md border p-3",
                            timeSlots.includes(slot) && "border-primary bg-primary/5",
                          )}
                        >
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>{slot}</span>
                          </div>
                          <Checkbox
                            checked={timeSlots.includes(slot)}
                            onCheckedChange={() => handleTimeSlotToggle(slot)}
                          />
                        </div>
                      ))}
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
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={!date || timeSlots.length === 0 || !role}>
                    Submit Availability
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="recurring" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recurring Availability</CardTitle>
                <CardDescription>Submit your regular weekly availability</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Select Days of the Week</Label>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                      {daysOfWeek.map((day) => (
                        <div
                          key={day.id}
                          className={cn(
                            "flex items-center justify-between rounded-md border p-3",
                            weeklyDays.includes(day.id) && "border-primary bg-primary/5",
                          )}
                        >
                          <span>{day.name}</span>
                          <Checkbox
                            checked={weeklyDays.includes(day.id)}
                            onCheckedChange={() => handleWeeklyDayToggle(day.id)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Select Time Slots</Label>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                      {availableTimeSlots.map((slot) => (
                        <div
                          key={slot}
                          className={cn(
                            "flex items-center justify-between rounded-md border p-3",
                            timeSlots.includes(slot) && "border-primary bg-primary/5",
                          )}
                        >
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>{slot}</span>
                          </div>
                          <Checkbox
                            checked={timeSlots.includes(slot)}
                            onCheckedChange={() => handleTimeSlotToggle(slot)}
                          />
                        </div>
                      ))}
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
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={weeklyDays.length === 0 || timeSlots.length === 0 || !role}
                  >
                    Submit Recurring Availability
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Current Schedule</CardTitle>
            <CardDescription>Your upcoming volunteer shifts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  date: "May 20, 2023",
                  time: "9:00 AM - 1:00 PM",
                  role: "Dog Walker",
                  status: "Confirmed",
                },
                {
                  date: "May 23, 2023",
                  time: "2:00 PM - 6:00 PM",
                  role: "Cat Socializer",
                  status: "Confirmed",
                },
                {
                  date: "May 27, 2023",
                  time: "10:00 AM - 2:00 PM",
                  role: "Adoption Event",
                  status: "Pending",
                },
              ].map((shift, index) => (
                <div key={index} className="flex items-center justify-between rounded-md border p-4">
                  <div className="space-y-1">
                    <p className="font-medium">{shift.date}</p>
                    <p className="text-sm text-muted-foreground">
                      {shift.time} • {shift.role}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {shift.status === "Confirmed" ? (
                      <span className="flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                        <Check className="mr-1 h-3 w-3" />
                        Confirmed
                      </span>
                    ) : (
                      <span className="flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700">
                        <Clock className="mr-1 h-3 w-3" />
                        Pending
                      </span>
                    )}
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Cancel</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}
