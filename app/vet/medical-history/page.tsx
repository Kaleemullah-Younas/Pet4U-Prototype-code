import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Filter, Printer, Search } from "lucide-react"

export default function PetMedicalHistoryPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Pet Medical History</h1>
        <p className="text-muted-foreground">View complete medical records for pets</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Pet Records</CardTitle>
          <CardDescription>Find a pet by ID, name, or owner information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search by pet ID, name, or owner..." className="pl-8" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
            <Button className="bg-cyan-600 hover:bg-cyan-700">Search</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Max (ID: 123)</CardTitle>
              <CardDescription>Golden Retriever • Male • 4 years old</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Printer className="mr-2 h-4 w-4" />
                Print
              </Button>
              <Button variant="outline" size="sm">
                <FileText className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Pet Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <dt className="font-medium">Owner:</dt>
                        <dd>John Smith</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium">Breed:</dt>
                        <dd>Golden Retriever</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium">Date of Birth:</dt>
                        <dd>May 15, 2021</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium">Weight:</dt>
                        <dd>68 lbs (30.8 kg)</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium">Microchip:</dt>
                        <dd>985121033284756</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium">Allergies:</dt>
                        <dd>None known</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
              </div>

              <div className="md:w-2/3">
                <Tabs defaultValue="records">
                  <TabsList>
                    <TabsTrigger value="records">Medical Records</TabsTrigger>
                    <TabsTrigger value="vaccinations">Vaccinations</TabsTrigger>
                    <TabsTrigger value="medications">Medications</TabsTrigger>
                    <TabsTrigger value="lab">Lab Results</TabsTrigger>
                  </TabsList>

                  <TabsContent value="records" className="space-y-4 mt-4">
                    {[
                      {
                        date: "May 19, 2025",
                        type: "Annual Checkup",
                        vet: "Dr. Sarah Johnson",
                        notes:
                          "Healthy overall. Slight tartar buildup on teeth, recommend dental cleaning in next 3-6 months. Weight is appropriate for age and breed.",
                      },
                      {
                        date: "November 12, 2024",
                        type: "Skin Condition",
                        vet: "Dr. Michael Chen",
                        notes:
                          "Presented with mild dermatitis on left forepaw. Prescribed medicated shampoo and 7-day course of antihistamines. Follow up in 2 weeks if not improved.",
                      },
                      {
                        date: "May 20, 2024",
                        type: "Annual Checkup",
                        vet: "Dr. Sarah Johnson",
                        notes:
                          "All vitals normal. Vaccinations updated. Heartworm test negative. Recommended continuing monthly preventatives.",
                      },
                    ].map((record, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex flex-col md:flex-row justify-between">
                            <div>
                              <p className="font-medium">
                                {record.date} - {record.type}
                              </p>
                              <p className="text-sm text-muted-foreground">Veterinarian: {record.vet}</p>
                            </div>
                            <Button variant="outline" size="sm" className="mt-2 md:mt-0">
                              View Details
                            </Button>
                          </div>
                          <div className="mt-2">
                            <p className="text-sm">{record.notes}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="vaccinations" className="mt-4">
                    <Card>
                      <CardContent className="p-4">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2 font-medium">Vaccine</th>
                              <th className="text-left py-2 font-medium">Date</th>
                              <th className="text-left py-2 font-medium">Expiration</th>
                              <th className="text-left py-2 font-medium">Administered By</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-2">Rabies</td>
                              <td className="py-2">May 19, 2025</td>
                              <td className="py-2">May 19, 2028</td>
                              <td className="py-2">Dr. Sarah Johnson</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2">DHPP</td>
                              <td className="py-2">May 19, 2025</td>
                              <td className="py-2">May 19, 2026</td>
                              <td className="py-2">Dr. Sarah Johnson</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2">Bordetella</td>
                              <td className="py-2">November 12, 2024</td>
                              <td className="py-2">November 12, 2025</td>
                              <td className="py-2">Dr. Michael Chen</td>
                            </tr>
                            <tr>
                              <td className="py-2">Leptospirosis</td>
                              <td className="py-2">May 20, 2024</td>
                              <td className="py-2">May 20, 2025</td>
                              <td className="py-2">Dr. Sarah Johnson</td>
                            </tr>
                          </tbody>
                        </table>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="medications" className="mt-4">
                    <Card>
                      <CardContent className="p-4">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2 font-medium">Medication</th>
                              <th className="text-left py-2 font-medium">Dosage</th>
                              <th className="text-left py-2 font-medium">Start Date</th>
                              <th className="text-left py-2 font-medium">End Date</th>
                              <th className="text-left py-2 font-medium">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-2">Heartgard Plus</td>
                              <td className="py-2">1 chew monthly</td>
                              <td className="py-2">May 19, 2025</td>
                              <td className="py-2">Ongoing</td>
                              <td className="py-2">
                                <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2">NexGard</td>
                              <td className="py-2">1 chew monthly</td>
                              <td className="py-2">May 19, 2025</td>
                              <td className="py-2">Ongoing</td>
                              <td className="py-2">
                                <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-2">Apoquel</td>
                              <td className="py-2">16mg once daily</td>
                              <td className="py-2">November 12, 2024</td>
                              <td className="py-2">November 19, 2024</td>
                              <td className="py-2">
                                <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                                  Completed
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="lab" className="mt-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          <div className="border rounded-md p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">Annual Bloodwork</h4>
                                <p className="text-sm text-muted-foreground">May 19, 2025</p>
                              </div>
                              <Button variant="outline" size="sm">
                                View Report
                              </Button>
                            </div>
                            <div className="mt-2">
                              <p className="text-sm">
                                Complete blood count and chemistry panel. All values within normal ranges.
                              </p>
                            </div>
                          </div>

                          <div className="border rounded-md p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">Heartworm Test</h4>
                                <p className="text-sm text-muted-foreground">May 19, 2025</p>
                              </div>
                              <Button variant="outline" size="sm">
                                View Report
                              </Button>
                            </div>
                            <div className="mt-2">
                              <p className="text-sm">Heartworm antigen test - Negative</p>
                            </div>
                          </div>

                          <div className="border rounded-md p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">Skin Scraping Analysis</h4>
                                <p className="text-sm text-muted-foreground">November 12, 2024</p>
                              </div>
                              <Button variant="outline" size="sm">
                                View Report
                              </Button>
                            </div>
                            <div className="mt-2">
                              <p className="text-sm">
                                No parasites or fungal elements observed. Mild inflammatory cells present.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
