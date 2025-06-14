"use client"

import type React from "react"

import { useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { CalendarIcon, Clock, MapPin, ArrowLeft, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function AppointmentsPage() {
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [date, setDate] = useState<Date>()
  const [appointmentType, setAppointmentType] = useState("meet-greet")
  const [timeSlot, setTimeSlot] = useState("")
  const [location, setLocation] = useState("main-shelter")
  const [petId, setPetId] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Appointment Scheduled",
      description: `Your ${appointmentType === "meet-greet" ? "meet & greet" : "adoption finalization"} appointment has been scheduled for ${date ? format(date, "PPP") : ""} at ${timeSlot}.`,
    })
    setStep(3)
  }

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

  const pets = [
    { id: "1", name: "Max", type: "Dog", breed: "Golden Retriever" },
    { id: "2", name: "Luna", type: "Cat", breed: "Siamese" },
    { id: "3", name: "Buddy", type: "Dog", breed: "Labrador" },
  ]

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Schedule an Appointment</h1>
          <p className="text-muted-foreground">Book a time to meet a pet or finalize an adoption</p>
        </div>

        <div className="flex justify-between border-b pb-4">
          <div className={`flex items-center ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 1 ? "bg-primary text-primary-foreground" : "border"}`}
            >
              {step > 1 ? <Check className="h-4 w-4" /> : "1"}
            </div>
            <span className="ml-2 hidden md:inline">Appointment Details</span>
          </div>
          <div className={`flex items-center ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 2 ? "bg-primary text-primary-foreground" : "border"}`}
            >
              {step > 2 ? <Check className="h-4 w-4" /> : "2"}
            </div>
            <span className="ml-2 hidden md:inline">Review & Confirm</span>
          </div>
          <div className={`flex items-center ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 3 ? "bg-primary text-primary-foreground" : "border"}`}
            >
              3
            </div>
            <span className="ml-2 hidden md:inline">Confirmation</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Appointment Details</CardTitle>
                <CardDescription>Select your preferred date, time, and location</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Appointment Type</Label>
                  <RadioGroup
                    value={appointmentType}
                    onValueChange={setAppointmentType}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div>
                      <RadioGroupItem value="meet-greet" id="meet-greet" className="peer sr-only" />
                      <Label
                        htmlFor="meet-greet"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <CalendarIcon className="mb-3 h-6 w-6 text-primary" />
                        Meet & Greet
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="adoption-finalization"
                        id="adoption-finalization"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="adoption-finalization"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <Check className="mb-3 h-6 w-6 text-primary" />
                        Adoption Finalization
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Select Pet</Label>
                  <Select value={petId} onValueChange={setPetId} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a pet" />
                    </SelectTrigger>
                    <SelectContent>
                      {pets.map((pet) => (
                        <SelectItem key={pet.id} value={pet.id}>
                          {pet.name} ({pet.type} - {pet.breed})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

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
                          // Disable past dates and weekends
                          const today = new Date()
                          today.setHours(0, 0, 0, 0)
                          const day = date.getDay()
                          return date < today || day === 0 || day === 6
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {date && (
                  <div className="space-y-2">
                    <Label>Select Time</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((slot) => (
                        <Button
                          key={slot}
                          type="button"
                          variant={timeSlot === slot ? "default" : "outline"}
                          className={timeSlot === slot ? "bg-primary text-primary-foreground" : ""}
                          onClick={() => setTimeSlot(slot)}
                        >
                          {slot}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label>Location</Label>
                  <RadioGroup value={location} onValueChange={setLocation} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="main-shelter" id="main-shelter" />
                      <Label htmlFor="main-shelter" className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4 text-primary" />
                        Main Shelter (123 Adoption Lane)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="downtown-shelter" id="downtown-shelter" />
                      <Label htmlFor="downtown-shelter" className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4 text-primary" />
                        Downtown Shelter (456 Pet Street)
                      </Label>
                    </div>
                    {appointmentType === "meet-greet" && (
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="virtual" id="virtual" />
                        <Label htmlFor="virtual" className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4 text-primary" />
                          Virtual Meeting (Video Call)
                        </Label>
                      </div>
                    )}
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Input id="notes" placeholder="Any special requests or information" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="button" variant="outline" asChild>
                  <Link href="/adopter">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Cancel
                  </Link>
                </Button>
                <Button type="button" onClick={() => setStep(2)} disabled={!date || !timeSlot || !petId}>
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Review & Confirm</CardTitle>
                <CardDescription>Please review your appointment details before confirming</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Appointment Type</p>
                      <p className="font-medium">
                        {appointmentType === "meet-greet" ? "Meet & Greet" : "Adoption Finalization"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Pet</p>
                      <p className="font-medium">
                        {pets.find((p) => p.id === petId)?.name} ({pets.find((p) => p.id === petId)?.type})
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-medium">{date ? format(date, "PPP") : ""}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p className="font-medium">{timeSlot}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">
                        {location === "main-shelter"
                          ? "Main Shelter (123 Adoption Lane)"
                          : location === "downtown-shelter"
                            ? "Downtown Shelter (456 Pet Street)"
                            : "Virtual Meeting (Video Call)"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-md bg-muted p-4">
                  <div className="flex items-start space-x-2">
                    <Clock className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Important Information</p>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>Please arrive 10 minutes before your scheduled time.</li>
                        <li>Bring a valid ID for verification purposes.</li>
                        <li>For adoption finalization, please bring the adoption fee (cash or card accepted).</li>
                        <li>If you need to reschedule, please do so at least 24 hours in advance.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => setStep(1)}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button type="submit">Confirm Appointment</Button>
              </CardFooter>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Appointment Confirmed</CardTitle>
                <CardDescription>Your appointment has been successfully scheduled</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md bg-green-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">Appointment Scheduled</h3>
                      <div className="mt-2 text-sm text-green-700">
                        <p>
                          Your {appointmentType === "meet-greet" ? "meet & greet" : "adoption finalization"} appointment
                          with {pets.find((p) => p.id === petId)?.name} has been scheduled for{" "}
                          {date ? format(date, "PPP") : ""} at {timeSlot}.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Appointment Type</p>
                      <p className="font-medium">
                        {appointmentType === "meet-greet" ? "Meet & Greet" : "Adoption Finalization"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Pet</p>
                      <p className="font-medium">
                        {pets.find((p) => p.id === petId)?.name} ({pets.find((p) => p.id === petId)?.type})
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-medium">{date ? format(date, "PPP") : ""}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p className="font-medium">{timeSlot}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">
                        {location === "main-shelter"
                          ? "Main Shelter (123 Adoption Lane)"
                          : location === "downtown-shelter"
                            ? "Downtown Shelter (456 Pet Street)"
                            : "Virtual Meeting (Video Call)"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-md bg-muted p-4">
                  <div className="flex items-start space-x-2">
                    <Clock className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">What to Expect</p>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>You will receive a confirmation email with these details.</li>
                        <li>A reminder will be sent 24 hours before your appointment.</li>
                        <li>If you need to reschedule, please do so at least 24 hours in advance.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/adopter/status">View All Appointments</Link>
                </Button>
                <Button asChild>
                  <Link href="/adopter">
                    Return to Pet Catalogue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          )}
        </form>
      </div>
    </MainLayout>
  )
}
