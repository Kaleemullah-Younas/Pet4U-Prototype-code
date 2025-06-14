"use client"

import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, FileText, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ApplicationStatusPage() {
  // Sample application data
  const applications = [
    {
      id: "APP-1234",
      petName: "Max",
      petType: "Dog",
      petBreed: "Golden Retriever",
      petImage: "/placeholder.svg?height=100&width=100",
      status: "Under Review",
      submittedDate: "May 15, 2023",
      lastUpdated: "May 17, 2023",
      nextStep: "Home Visit",
      nextStepDate: "May 22, 2023",
      notes:
        "Your application is being reviewed by our adoption team. We'll contact you to schedule a home visit soon.",
    },
    {
      id: "APP-1235",
      petName: "Luna",
      petType: "Cat",
      petBreed: "Siamese",
      petImage: "/placeholder.svg?height=100&width=100",
      status: "Approved",
      submittedDate: "May 10, 2023",
      lastUpdated: "May 18, 2023",
      nextStep: "Adoption Finalization",
      nextStepDate: "May 25, 2023",
      notes:
        "Congratulations! Your application has been approved. Please schedule an appointment to finalize the adoption.",
    },
    {
      id: "APP-1236",
      petName: "Buddy",
      petType: "Dog",
      petBreed: "Labrador",
      petImage: "/placeholder.svg?height=100&width=100",
      status: "Completed",
      submittedDate: "April 20, 2023",
      lastUpdated: "May 5, 2023",
      nextStep: "None",
      nextStepDate: "",
      notes: "Adoption completed. Thank you for providing a loving home for Buddy!",
    },
  ]

  // Sample appointments data
  const appointments = [
    {
      id: "APT-5678",
      type: "Meet & Greet",
      petName: "Max",
      date: "May 22, 2023",
      time: "10:00 AM",
      location: "Main Shelter",
      status: "Scheduled",
    },
    {
      id: "APT-5679",
      type: "Adoption Finalization",
      petName: "Luna",
      date: "May 25, 2023",
      time: "2:00 PM",
      location: "Main Shelter",
      status: "Scheduled",
    },
    {
      id: "APT-5680",
      type: "Home Visit",
      petName: "Max",
      date: "May 20, 2023",
      time: "1:00 PM",
      location: "Your Home",
      status: "Completed",
    },
  ]

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Application Status</h1>
          <p className="text-muted-foreground">Track the progress of your adoption applications</p>
        </div>

        <Tabs defaultValue="applications">
          <TabsList>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
          </TabsList>
          <TabsContent value="applications" className="space-y-6">
            {applications.map((application) => (
              <Card key={application.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{application.petName}</CardTitle>
                    <Badge
                      variant="outline"
                      className={
                        application.status === "Approved"
                          ? "bg-green-50 text-green-700"
                          : application.status === "Under Review"
                            ? "bg-yellow-50 text-yellow-700"
                            : "bg-blue-50 text-blue-700"
                      }
                    >
                      {application.status}
                    </Badge>
                  </div>
                  <CardDescription>
                    Application ID: {application.id} • Submitted: {application.submittedDate}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-md">
                      <Image
                        src={application.petImage || "/placeholder.svg"}
                        alt={application.petName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-muted-foreground">Pet Type:</p>
                          <p>{application.petType}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Breed:</p>
                          <p>{application.petBreed}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Last Updated:</p>
                          <p>{application.lastUpdated}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Next Step:</p>
                          <p>
                            {application.nextStep}
                            {application.nextStepDate && ` (${application.nextStepDate})`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-md bg-muted p-4">
                    <div className="flex items-start space-x-2">
                      <FileText className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Notes</p>
                        <p className="text-sm text-muted-foreground">{application.notes}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {application.status === "Approved" && (
                      <Button asChild>
                        <Link href="/adopter/appointments">Schedule Finalization</Link>
                      </Button>
                    )}
                    <Button variant="outline" asChild>
                      <Link href={`/adopter/pet/${application.petName.toLowerCase()}`}>View Pet Details</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/help">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Contact Support
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex justify-center">
              <Button asChild>
                <Link href="/adopter">
                  Browse More Pets
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="appointments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Your scheduled visits and meetings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {appointments
                    .filter((apt) => apt.status === "Scheduled")
                    .map((appointment) => (
                      <div key={appointment.id} className="flex items-start space-x-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          {appointment.type === "Meet & Greet" ? (
                            <Calendar className="h-5 w-5 text-primary" />
                          ) : (
                            <Clock className="h-5 w-5 text-primary" />
                          )}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">
                              {appointment.type} with {appointment.petName}
                            </p>
                            <Badge variant="outline" className="bg-green-50 text-green-700">
                              {appointment.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {appointment.date} at {appointment.time}
                          </p>
                          <p className="text-sm text-muted-foreground">Location: {appointment.location}</p>
                        </div>
                        <div>
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                        </div>
                      </div>
                    ))}

                  {appointments.filter((apt) => apt.status === "Scheduled").length === 0 && (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <Calendar className="h-12 w-12 text-muted-foreground/50 mb-4" />
                      <p className="text-muted-foreground">No upcoming appointments</p>
                      <Button variant="link" asChild>
                        <Link href="/adopter/appointments">Schedule an appointment</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Past Appointments</CardTitle>
                <CardDescription>Your completed visits and meetings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {appointments
                    .filter((apt) => apt.status === "Completed")
                    .map((appointment) => (
                      <div key={appointment.id} className="flex items-start space-x-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                          {appointment.type === "Meet & Greet" ? (
                            <Calendar className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <Clock className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">
                              {appointment.type} with {appointment.petName}
                            </p>
                            <Badge variant="outline" className="bg-muted text-muted-foreground">
                              {appointment.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {appointment.date} at {appointment.time}
                          </p>
                          <p className="text-sm text-muted-foreground">Location: {appointment.location}</p>
                        </div>
                      </div>
                    ))}

                  {appointments.filter((apt) => apt.status === "Completed").length === 0 && (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <Clock className="h-12 w-12 text-muted-foreground/50 mb-4" />
                      <p className="text-muted-foreground">No past appointments</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}
