"use client"

import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, PawPrint, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function VolunteerDashboardPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Volunteer Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Thank you for your dedication to our animals.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hours This Month</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.5</div>
              <p className="text-xs text-muted-foreground">Goal: 20 hours</p>
              <div className="mt-2 h-2 w-full rounded-full bg-muted">
                <div className="h-2 w-[62.5%] rounded-full bg-primary"></div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Shifts</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Next: Tomorrow, 9:00 AM</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Animals Helped</CardTitle>
              <PawPrint className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Volunteer Level</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Silver</div>
              <p className="text-xs text-muted-foreground">25 more hours to Gold</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Schedule</CardTitle>
              <CardDescription>Your upcoming volunteer shifts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { date: "May 20, 2023", time: "9:00 AM - 1:00 PM", role: "Dog Walker", status: "Confirmed" },
                  { date: "May 23, 2023", time: "2:00 PM - 6:00 PM", role: "Cat Socializer", status: "Confirmed" },
                  { date: "May 27, 2023", time: "10:00 AM - 2:00 PM", role: "Adoption Event", status: "Confirmed" },
                ].map((shift, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">{shift.date}</p>
                      <p className="text-sm text-muted-foreground">
                        {shift.time} • {shift.role}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        {shift.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-end">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/volunteer/schedule">
                    View Full Schedule
                    <ArrowRight className="ml-2 h-4 w-4" />
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
