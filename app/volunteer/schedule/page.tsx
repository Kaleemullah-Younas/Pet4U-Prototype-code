"use client"

import { useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { format, addDays, startOfWeek } from "date-fns"
import { Clock, Check, X, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function VolunteerSchedulePage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [view, setView] = useState<"week" | "month">("week")
  const [selectedShift, setSelectedShift] = useState<any>(null)

  // Sample volunteer shifts
  const shifts = [
    {
      id: 1,
      date: addDays(new Date(), 1),
      startTime: "9:00 AM",
      endTime: "1:00 PM",
      role: "Dog Walker",
      location: "Main Shelter",
      status: "Confirmed",
    },
    {
      id: 2,
      date: addDays(new Date(), 4),
      startTime: "2:00 PM",
      endTime: "6:00 PM",
      role: "Cat Socializer",
      location: "Main Shelter",
      status: "Confirmed",
    },
    {
      id: 3,
      date: addDays(new Date(), 7),
      startTime: "10:00 AM",
      endTime: "2:00 PM",
      role: "Adoption Event",
      location: "Downtown Shelter",
      status: "Pending",
    },
    {
      id: 4,
      date: addDays(new Date(), 10),
      startTime: "1:00 PM",
      endTime: "5:00 PM",
      role: "Administrative Support",
      location: "Main Shelter",
      status: "Confirmed",
    },
  ]

  // Generate days for the week view
  const generateWeekDays = (date: Date) => {
    const start = startOfWeek(date, { weekStartsOn: 1 }) // Start on Monday
    return Array.from({ length: 7 }).map((_, i) => addDays(start, i))
  }

  const weekDays = generateWeekDays(currentDate)

  // Navigate to previous/next week or month
  const navigatePrevious = () => {
    setCurrentDate(view === "week" ? addDays(currentDate, -7) : addDays(currentDate, -30))
  }

  const navigateNext = () => {
    setCurrentDate(view === "week" ? addDays(currentDate, 7) : addDays(currentDate, 30))
  }

  // Filter shifts for the current week
  const getShiftsForDay = (date: Date) => {
    return shifts.filter(
      (shift) =>
        shift.date.getDate() === date.getDate() &&
        shift.date.getMonth() === date.getMonth() &&
        shift.date.getFullYear() === date.getFullYear(),
    )
  }

  // Handle shift selection
  const handleShiftSelect = (shift: any) => {
    setSelectedShift(shift)
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Volunteer Schedule</h1>
          <p className="text-muted-foreground">View and manage your upcoming volunteer shifts</p>
        </div>

        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <Tabs defaultValue="week" value={view} onValueChange={(v) => setView(v as "week" | "month")}>
            <TabsList>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={navigatePrevious}>
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button variant="outline" onClick={() => setCurrentDate(new Date())}>
              Today
            </Button>
            <Button variant="outline" size="icon" onClick={navigateNext}>
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        <TabsContent value="week" className="mt-0">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  {format(weekDays[0], "MMMM d")} - {format(weekDays[6], "MMMM d, yyyy")}
                </CardTitle>
                <Button variant="outline" asChild>
                  <Link href="/volunteer/availability">Submit Availability</Link>
                </Button>
              </div>
              <CardDescription>Your scheduled shifts for this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1">
                {weekDays.map((day, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-1 text-sm font-medium">{format(day, "EEE")}</div>
                    <div
                      className={`rounded-full p-2 text-sm ${
                        day.getDate() === new Date().getDate() &&
                        day.getMonth() === new Date().getMonth() &&
                        day.getFullYear() === new Date().getFullYear()
                          ? "bg-primary text-primary-foreground"
                          : ""
                      }`}
                    >
                      {format(day, "d")}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-7 gap-1">
                {weekDays.map((day, index) => {
                  const dayShifts = getShiftsForDay(day)
                  return (
                    <div key={index} className="min-h-24 border-t pt-2">
                      {dayShifts.length > 0 ? (
                        <div className="space-y-2">
                          {dayShifts.map((shift) => (
                            <div
                              key={shift.id}
                              className={`cursor-pointer rounded-md p-2 text-xs ${
                                shift.status === "Confirmed"
                                  ? "bg-primary/10 hover:bg-primary/20"
                                  : "bg-yellow-50 hover:bg-yellow-100"
                              }`}
                              onClick={() => handleShiftSelect(shift)}
                            >
                              <div className="font-medium">{shift.role}</div>
                              <div>
                                {shift.startTime} - {shift.endTime}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
                          No shifts
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="month" className="mt-0">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{format(currentDate, "MMMM yyyy")}</CardTitle>
                <Button variant="outline" asChild>
                  <Link href="/volunteer/availability">Submit Availability</Link>
                </Button>
              </div>
              <CardDescription>Your scheduled shifts for this month</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={currentDate}
                onSelect={(date) => date && setCurrentDate(date)}
                className="rounded-md border"
                components={{
                  DayContent: ({ day }) => {
                    const dayShifts = getShiftsForDay(day)
                    return (
                      <div className="flex h-full w-full flex-col">
                        <div>{format(day, "d")}</div>
                        {dayShifts.length > 0 && (
                          <div className="mt-auto">
                            {dayShifts.map((shift) => (
                              <div
                                key={shift.id}
                                className={`mt-1 h-1 w-full rounded-full ${
                                  shift.status === "Confirmed" ? "bg-primary" : "bg-yellow-400"
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleShiftSelect(shift)
                                }}
                              ></div>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  },
                }}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {selectedShift && (
          <Card>
            <CardHeader>
              <CardTitle>Shift Details</CardTitle>
              <CardDescription>{format(selectedShift.date, "EEEE, MMMM d, yyyy")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Role</h3>
                  <p>{selectedShift.role}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Time</h3>
                  <p>
                    {selectedShift.startTime} - {selectedShift.endTime}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                  <p>{selectedShift.location}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
                  <Badge
                    variant="outline"
                    className={
                      selectedShift.status === "Confirmed"
                        ? "bg-green-50 text-green-700"
                        : "bg-yellow-50 text-yellow-700"
                    }
                  >
                    {selectedShift.status}
                  </Badge>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1">
                  <Clock className="mr-2 h-4 w-4" />
                  Log Hours
                </Button>
                <Button variant="outline" className="flex-1 text-destructive hover:bg-destructive/10">
                  <X className="mr-2 h-4 w-4" />
                  Cancel Shift
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Shifts</CardTitle>
            <CardDescription>Your next scheduled volunteer shifts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {shifts
                .filter((shift) => shift.date >= new Date())
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .slice(0, 3)
                .map((shift) => (
                  <div key={shift.id} className="flex items-center justify-between rounded-md border p-4">
                    <div className="space-y-1">
                      <p className="font-medium">{format(shift.date, "EEEE, MMMM d, yyyy")}</p>
                      <p className="text-sm text-muted-foreground">
                        {shift.startTime} - {shift.endTime} • {shift.role}
                      </p>
                      <p className="text-sm text-muted-foreground">{shift.location}</p>
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
                    </div>
                  </div>
                ))}

              {shifts.filter((shift) => shift.date >= new Date()).length === 0 && (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <Calendar className="h-12 w-12 text-muted-foreground/50 mb-4" />
                  <p className="text-muted-foreground">No upcoming shifts</p>
                  <Button variant="link" asChild>
                    <Link href="/volunteer/availability">Submit your availability</Link>
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}
