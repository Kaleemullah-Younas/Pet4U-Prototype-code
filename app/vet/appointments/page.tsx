import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarClock, CheckCircle, Clock, Search } from "lucide-react"

export default function VetAppointmentsPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Scheduled Appointments</h1>
        <p className="text-muted-foreground">View and manage your upcoming veterinary appointments</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
              <CardDescription>Select a date to view appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar mode="single" className="rounded-md border" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Summary</CardTitle>
              <CardDescription>Your schedule at a glance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CalendarClock className="h-4 w-4 text-cyan-500" />
                  <span>Today</span>
                </div>
                <span className="font-medium">4 appointments</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CalendarClock className="h-4 w-4 text-cyan-500" />
                  <span>Tomorrow</span>
                </div>
                <span className="font-medium">6 appointments</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CalendarClock className="h-4 w-4 text-cyan-500" />
                  <span>This Week</span>
                </div>
                <span className="font-medium">18 appointments</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-2/3">
          <Tabs defaultValue="today">
            <TabsList>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="today" className="space-y-4 mt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">May 20, 2025</h3>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search appointments..."
                    className="pl-8 h-9 w-[200px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </div>
              </div>

              {[
                {
                  time: "9:00 AM",
                  petName: "Max",
                  petType: "Dog - Golden Retriever",
                  owner: "John Smith",
                  reason: "Annual Checkup & Vaccinations",
                },
                {
                  time: "10:30 AM",
                  petName: "Luna",
                  petType: "Cat - Siamese",
                  owner: "Sarah Johnson",
                  reason: "Dental Cleaning",
                },
                {
                  time: "1:15 PM",
                  petName: "Rocky",
                  petType: "Dog - German Shepherd",
                  owner: "Michael Brown",
                  reason: "Skin Condition Assessment",
                },
                {
                  time: "3:45 PM",
                  petName: "Bella",
                  petType: "Cat - Maine Coon",
                  owner: "Emily Davis",
                  reason: "Post-Surgery Follow-up",
                },
              ].map((appointment, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-cyan-100 text-cyan-700 p-2 rounded-full">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">{appointment.time}</p>
                          <p className="text-sm text-muted-foreground">
                            {appointment.petName} - {appointment.petType}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{appointment.owner}</p>
                        <p className="text-sm text-muted-foreground">{appointment.reason}</p>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                        Start Appointment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="upcoming" className="space-y-4 mt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Upcoming Appointments</h3>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search appointments..."
                    className="pl-8 h-9 w-[200px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </div>
              </div>

              {[
                {
                  date: "May 21, 2025",
                  time: "11:00 AM",
                  petName: "Charlie",
                  petType: "Dog - Beagle",
                  owner: "Jessica Wilson",
                  reason: "Ear Infection",
                },
                {
                  date: "May 21, 2025",
                  time: "2:30 PM",
                  petName: "Oliver",
                  petType: "Cat - Tabby",
                  owner: "David Martinez",
                  reason: "Vaccination Booster",
                },
                {
                  date: "May 22, 2025",
                  time: "9:30 AM",
                  petName: "Daisy",
                  petType: "Dog - Poodle",
                  owner: "Amanda Taylor",
                  reason: "Grooming & Checkup",
                },
              ].map((appointment, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 text-green-700 p-2 rounded-full">
                          <CalendarClock className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">
                            {appointment.date} - {appointment.time}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {appointment.petName} - {appointment.petType}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{appointment.owner}</p>
                        <p className="text-sm text-muted-foreground">{appointment.reason}</p>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="completed" className="space-y-4 mt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Completed Appointments</h3>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search appointments..."
                    className="pl-8 h-9 w-[200px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </div>
              </div>

              {[
                {
                  date: "May 19, 2025",
                  time: "10:00 AM",
                  petName: "Milo",
                  petType: "Dog - Labrador",
                  owner: "Robert Johnson",
                  reason: "Annual Checkup",
                },
                {
                  date: "May 18, 2025",
                  time: "3:15 PM",
                  petName: "Lucy",
                  petType: "Cat - Persian",
                  owner: "Jennifer Adams",
                  reason: "Dental Cleaning",
                },
              ].map((appointment, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-100 text-gray-700 p-2 rounded-full">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">
                            {appointment.date} - {appointment.time}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {appointment.petName} - {appointment.petType}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{appointment.owner}</p>
                        <p className="text-sm text-muted-foreground">{appointment.reason}</p>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                      <Button variant="outline" size="sm">
                        View Record
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
