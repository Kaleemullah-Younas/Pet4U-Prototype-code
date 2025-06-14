"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Clock, FileText, Filter, Search, XCircle } from "lucide-react"
import { Input } from "@/components/ui/input"

type Application = {
  id: string
  applicantName: string
  applicantEmail: string
  applicantPhone: string
  petName: string
  petId: string
  petType: string
  petImage: string
  dateSubmitted: string
  status: "pending" | "review" | "approved" | "rejected" | "completed"
}

export default function AdoptionProcessingPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const applications: Application[] = [
    {
      id: "APP-1234",
      applicantName: "John Smith",
      applicantEmail: "john.smith@example.com",
      applicantPhone: "(555) 123-4567",
      petName: "Buddy",
      petId: "A12345",
      petType: "Dog",
      petImage: "/placeholder.svg?height=80&width=80",
      dateSubmitted: "2023-05-18",
      status: "pending",
    },
    {
      id: "APP-1235",
      applicantName: "Sarah Johnson",
      applicantEmail: "sarah.j@example.com",
      applicantPhone: "(555) 234-5678",
      petName: "Whiskers",
      petId: "A12346",
      petType: "Cat",
      petImage: "/placeholder.svg?height=80&width=80",
      dateSubmitted: "2023-05-17",
      status: "review",
    },
    {
      id: "APP-1236",
      applicantName: "Michael Brown",
      applicantEmail: "mbrown@example.com",
      applicantPhone: "(555) 345-6789",
      petName: "Rex",
      petId: "A12347",
      petType: "Dog",
      petImage: "/placeholder.svg?height=80&width=80",
      dateSubmitted: "2023-05-16",
      status: "approved",
    },
    {
      id: "APP-1237",
      applicantName: "Emily Davis",
      applicantEmail: "emily.d@example.com",
      applicantPhone: "(555) 456-7890",
      petName: "Mittens",
      petId: "A12348",
      petType: "Cat",
      petImage: "/placeholder.svg?height=80&width=80",
      dateSubmitted: "2023-05-15",
      status: "rejected",
    },
    {
      id: "APP-1238",
      applicantName: "David Wilson",
      applicantEmail: "dwilson@example.com",
      applicantPhone: "(555) 567-8901",
      petName: "Luna",
      petId: "A12349",
      petType: "Dog",
      petImage: "/placeholder.svg?height=80&width=80",
      dateSubmitted: "2023-05-14",
      status: "completed",
    },
  ]

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.petName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || app.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
            Pending
          </Badge>
        )
      case "review":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            In Review
          </Badge>
        )
      case "approved":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Approved
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Rejected
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            Completed
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Adoption Processing Queue</h1>
        <p className="text-muted-foreground">Review and process adoption applications</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by applicant, pet, or application ID"
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Applications</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="review">In Review</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="queue" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="queue">Queue</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="queue" className="mt-6">
          <div className="space-y-4">
            {filteredApplications
              .filter((app) => app.status === "pending")
              .map((application) => (
                <ApplicationCard key={application.id} application={application} />
              ))}
            {filteredApplications.filter((app) => app.status === "pending").length === 0 && (
              <div className="text-center py-10">
                <p className="text-muted-foreground">No pending applications</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="in-progress" className="mt-6">
          <div className="space-y-4">
            {filteredApplications
              .filter((app) => app.status === "review" || app.status === "approved")
              .map((application) => (
                <ApplicationCard key={application.id} application={application} />
              ))}
            {filteredApplications.filter((app) => app.status === "review" || app.status === "approved").length ===
              0 && (
              <div className="text-center py-10">
                <p className="text-muted-foreground">No applications in progress</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <div className="space-y-4">
            {filteredApplications
              .filter((app) => app.status === "completed" || app.status === "rejected")
              .map((application) => (
                <ApplicationCard key={application.id} application={application} />
              ))}
            {filteredApplications.filter((app) => app.status === "completed" || app.status === "rejected").length ===
              0 && (
              <div className="text-center py-10">
                <p className="text-muted-foreground">No completed applications</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ApplicationCard({ application }: { application: Application }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <span>{application.id}</span>
              {getStatusBadge(application.status)}
            </CardTitle>
            <CardDescription>Submitted on {new Date(application.dateSubmitted).toLocaleDateString()}</CardDescription>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Application {application.id}</DialogTitle>
                <DialogDescription>
                  Submitted on {new Date(application.dateSubmitted).toLocaleDateString()}
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Applicant Information</h3>
                    <div className="mt-2 space-y-2">
                      <div>
                        <span className="text-sm text-muted-foreground">Name:</span>
                        <p>{application.applicantName}</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Email:</span>
                        <p>{application.applicantEmail}</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Phone:</span>
                        <p>{application.applicantPhone}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Application Details</h3>
                    <div className="mt-2 space-y-2">
                      <div>
                        <span className="text-sm text-muted-foreground">Housing Type:</span>
                        <p>House with yard</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Previous Pet Experience:</span>
                        <p>Yes, 5+ years</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Other Pets:</span>
                        <p>1 cat (spayed, 3 years old)</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Children in Home:</span>
                        <p>No</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Pet Information</h3>
                    <div className="mt-2 flex items-center gap-4">
                      <Avatar className="h-16 w-16 rounded-md">
                        <img src={application.petImage || "/placeholder.svg"} alt={application.petName} />
                      </Avatar>
                      <div>
                        <p className="font-medium">{application.petName}</p>
                        <p className="text-sm text-muted-foreground">ID: {application.petId}</p>
                        <p className="text-sm text-muted-foreground">{application.petType}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">References</h3>
                    <div className="mt-2 space-y-2">
                      <div>
                        <span className="text-sm text-muted-foreground">Personal Reference:</span>
                        <p>Jane Doe, (555) 987-6543</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Veterinary Reference:</span>
                        <p>Dr. Smith, City Vet Clinic</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Update Status</h3>
                    <div className="mt-2 space-y-4">
                      <Select defaultValue={application.status}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="review">In Review</SelectItem>
                          <SelectItem value="approved">Approved</SelectItem>
                          <SelectItem value="rejected">Rejected</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>

                      <div className="space-y-2">
                        <Label htmlFor="notes">Staff Notes</Label>
                        <Textarea id="notes" placeholder="Add notes about this application" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600">
                  Save Changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 rounded-md">
              <img src={application.petImage || "/placeholder.svg"} alt={application.petName} />
            </Avatar>
            <div>
              <p className="font-medium">{application.petName}</p>
              <p className="text-sm text-muted-foreground">{application.petType}</p>
            </div>
          </div>

          <div className="md:border-l md:pl-4 flex-1">
            <p className="font-medium">{application.applicantName}</p>
            <p className="text-sm text-muted-foreground">{application.applicantEmail}</p>
            <p className="text-sm text-muted-foreground">{application.applicantPhone}</p>
          </div>

          <div className="flex gap-2">
            {application.status === "pending" && (
              <>
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Start Review
                </Button>
              </>
            )}

            {application.status === "review" && (
              <>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-1 text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <XCircle className="h-4 w-4" />
                  Reject
                </Button>
                <Button
                  size="sm"
                  className="flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Approve
                </Button>
              </>
            )}

            {application.status === "approved" && (
              <Button size="sm" className="flex items-center gap-1 bg-purple-500 hover:bg-purple-600">
                <CheckCircle2 className="h-4 w-4" />
                Complete Adoption
              </Button>
            )}

            {(application.status === "completed" || application.status === "rejected") && (
              <Button size="sm" variant="outline" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                View Records
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function getStatusBadge(status: string) {
  switch (status) {
    case "pending":
      return (
        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
          Pending
        </Badge>
      )
    case "review":
      return (
        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
          In Review
        </Badge>
      )
    case "approved":
      return (
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          Approved
        </Badge>
      )
    case "rejected":
      return (
        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
          Rejected
        </Badge>
      )
    case "completed":
      return (
        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
          Completed
        </Badge>
      )
    default:
      return <Badge variant="outline">Unknown</Badge>
  }
}
