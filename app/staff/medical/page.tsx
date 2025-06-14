"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, FilePlus, Search, Upload } from "lucide-react"
import { cn } from "@/lib/utils"

export default function MedicalRecordsPage() {
  const [date, setDate] = useState<Date>()
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Medical Records</h1>
        <p className="text-muted-foreground">Capture and manage medical records for shelter animals</p>
      </div>

      <Tabs defaultValue="new-record" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="new-record">New Record</TabsTrigger>
          <TabsTrigger value="search-records">Search Records</TabsTrigger>
        </TabsList>

        <TabsContent value="new-record" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FilePlus className="h-5 w-5 text-cyan-500" />
                Create New Medical Record
              </CardTitle>
              <CardDescription>Enter medical information for an animal in the shelter's care</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="animal-id">Animal ID</Label>
                    <Input id="animal-id" placeholder="Enter animal ID" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="animal-name">Animal Name</Label>
                    <Input id="animal-name" placeholder="Enter animal name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="species">Species</Label>
                    <Select>
                      <SelectTrigger id="species">
                        <SelectValue placeholder="Select species" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dog">Dog</SelectItem>
                        <SelectItem value="cat">Cat</SelectItem>
                        <SelectItem value="rabbit">Rabbit</SelectItem>
                        <SelectItem value="bird">Bird</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="record-type">Record Type</Label>
                    <Select>
                      <SelectTrigger id="record-type">
                        <SelectValue placeholder="Select record type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="exam">Routine Examination</SelectItem>
                        <SelectItem value="vaccination">Vaccination</SelectItem>
                        <SelectItem value="treatment">Treatment</SelectItem>
                        <SelectItem value="surgery">Surgery</SelectItem>
                        <SelectItem value="medication">Medication</SelectItem>
                        <SelectItem value="test">Lab Test</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Date of Service</Label>
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
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vet-name">Veterinarian</Label>
                    <Input id="vet-name" placeholder="Enter veterinarian name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input id="weight" type="number" placeholder="Enter weight" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="temperature">Temperature (°C)</Label>
                    <Input id="temperature" type="number" step="0.1" placeholder="Enter temperature" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="diagnosis">Diagnosis/Assessment</Label>
                <Textarea id="diagnosis" placeholder="Enter diagnosis or assessment" rows={3} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="treatment">Treatment/Procedure</Label>
                <Textarea id="treatment" placeholder="Enter treatment details" rows={3} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="medications">Medications Prescribed</Label>
                <Textarea id="medications" placeholder="Enter medication details, dosage, and schedule" rows={2} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea id="notes" placeholder="Enter any additional notes" rows={2} />
              </div>

              <div className="space-y-2">
                <Label>Attachments</Label>
                <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center gap-2">
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Drag and drop files or click to upload</p>
                  <p className="text-xs text-muted-foreground">Upload X-rays, lab results, or other documents</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Select Files
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="follow-up" />
                <Label htmlFor="follow-up">Requires follow-up appointment</Label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600">
                Save Medical Record
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="search-records" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-cyan-500" />
                Search Medical Records
              </CardTitle>
              <CardDescription>Find and view existing medical records</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search by animal ID, name, or record type"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>

              <div className="border rounded-md">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-3 text-left font-medium">Date</th>
                      <th className="p-3 text-left font-medium">Animal ID</th>
                      <th className="p-3 text-left font-medium">Name</th>
                      <th className="p-3 text-left font-medium">Species</th>
                      <th className="p-3 text-left font-medium">Record Type</th>
                      <th className="p-3 text-left font-medium">Veterinarian</th>
                      <th className="p-3 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3">May 18, 2023</td>
                      <td className="p-3">A12345</td>
                      <td className="p-3">Max</td>
                      <td className="p-3">Dog</td>
                      <td className="p-3">Vaccination</td>
                      <td className="p-3">Dr. Johnson</td>
                      <td className="p-3">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3">May 15, 2023</td>
                      <td className="p-3">A12346</td>
                      <td className="p-3">Luna</td>
                      <td className="p-3">Cat</td>
                      <td className="p-3">Surgery</td>
                      <td className="p-3">Dr. Martinez</td>
                      <td className="p-3">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3">May 12, 2023</td>
                      <td className="p-3">A12347</td>
                      <td className="p-3">Bella</td>
                      <td className="p-3">Dog</td>
                      <td className="p-3">Exam</td>
                      <td className="p-3">Dr. Johnson</td>
                      <td className="p-3">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
