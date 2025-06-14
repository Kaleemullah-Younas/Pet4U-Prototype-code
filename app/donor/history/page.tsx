import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Eye, FileBarChartIcon as FileBar, Heart, Printer } from "lucide-react"

export default function DonationHistoryPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Donation History & Impact</h1>
        <p className="text-muted-foreground">Track your contributions and see the impact you've made</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <Card className="md:w-1/3">
          <CardHeader className="pb-2">
            <CardTitle>Total Contributions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">$1,850.00</div>
            <p className="text-sm text-muted-foreground">Lifetime donations</p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="border rounded-lg p-3 text-center">
                <div className="text-xl font-semibold">12</div>
                <p className="text-xs text-muted-foreground">Donations</p>
              </div>
              <div className="border rounded-lg p-3 text-center">
                <div className="text-xl font-semibold">3</div>
                <p className="text-xs text-muted-foreground">Pets Sponsored</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
              <Heart className="w-4 h-4 mr-2" /> Donate Again
            </Button>
          </CardFooter>
        </Card>

        <Card className="md:w-2/3">
          <CardHeader className="pb-2">
            <CardTitle>Your Impact Summary</CardTitle>
            <CardDescription>How your donations have helped</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mx-auto mb-2">
                  <Heart className="w-6 h-6" />
                </div>
                <div className="text-xl font-semibold">24</div>
                <p className="text-sm text-muted-foreground">Animals Helped</p>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-syringe"
                  >
                    <path d="m14 7 5.5 5.5" />
                    <path d="m18 2 4 4" />
                    <path d="m17 7 3-3" />
                    <path d="m19 9-3 3" />
                    <path d="M3 21 8.5 15.5" />
                    <path d="m7 14 0.5 0.5" />
                    <path d="m5.5 12.5 1 1" />
                    <path d="m4 11 1.5 1.5" />
                    <path d="M7 14 2.5 9.5" />
                    <path d="m4 11-1.5 1.5" />
                    <path d="M14 3 6 11" />
                  </svg>
                </div>
                <div className="text-xl font-semibold">12</div>
                <p className="text-sm text-muted-foreground">Medical Treatments</p>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mx-auto mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-home"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div className="text-xl font-semibold">7</div>
                <p className="text-sm text-muted-foreground">Adoptions Facilitated</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="donation-history">
        <TabsList className="grid grid-cols-2 md:w-[400px]">
          <TabsTrigger value="donation-history">Donation History</TabsTrigger>
          <TabsTrigger value="impact-reports">Impact Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="donation-history" className="space-y-4 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-2 w-full md:w-auto">
              <div className="grid gap-2">
                <Label htmlFor="year">Year</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="year" className="w-[120px]">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="type">Type</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="type" className="w-[150px]">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Donations</SelectItem>
                    <SelectItem value="one-time">One-time</SelectItem>
                    <SelectItem value="recurring">Recurring</SelectItem>
                    <SelectItem value="sponsorship">Sponsorship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm">
                <Printer className="mr-2 h-4 w-4" />
                Print
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium">Date</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Amount</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Type</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Receipt</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {[
                    {
                      date: "May 10, 2025",
                      amount: "$250.00",
                      type: "Monthly Sponsorship",
                      status: "Processed",
                    },
                    {
                      date: "Apr 10, 2025",
                      amount: "$250.00",
                      type: "Monthly Sponsorship",
                      status: "Processed",
                    },
                    {
                      date: "Mar 10, 2025",
                      amount: "$250.00",
                      type: "Monthly Sponsorship",
                      status: "Processed",
                    },
                    {
                      date: "Feb 14, 2025",
                      amount: "$500.00",
                      type: "One-time Donation",
                      status: "Processed",
                    },
                    {
                      date: "Dec 25, 2024",
                      amount: "$350.00",
                      type: "Holiday Campaign",
                      status: "Processed",
                    },
                  ].map((donation, i) => (
                    <tr key={i} className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle">{donation.date}</td>
                      <td className="p-4 align-middle font-medium">{donation.amount}</td>
                      <td className="p-4 align-middle">{donation.type}</td>
                      <td className="p-4 align-middle">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </td>
                      <td className="p-4 align-middle">
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                          {donation.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="impact-reports" className="space-y-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex gap-2">
              <div className="grid gap-2">
                <Label htmlFor="period">Period</Label>
                <Select defaultValue="2025-q1">
                  <SelectTrigger id="period" className="w-[180px]">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025-q1">Q1 2025</SelectItem>
                    <SelectItem value="2024-q4">Q4 2024</SelectItem>
                    <SelectItem value="2024-q3">Q3 2024</SelectItem>
                    <SelectItem value="2024-q2">Q2 2024</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle>Q1 2025 Impact Report</CardTitle>
                <CardDescription>January - March 2025</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm">
                <p className="mb-4">
                  Your generosity in the first quarter of 2025 has made a significant difference in the lives of shelter
                  animals. Here's how your contributions have been put to work:
                </p>

                <div className="border rounded-lg p-4 my-4">
                  <h3 className="font-semibold text-lg mb-2">Donation Allocation</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Medical Care</span>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-cyan-600 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Food & Supplies</span>
                        <span className="text-sm font-medium">30%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-green-600 rounded-full" style={{ width: "30%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Shelter Operations</span>
                        <span className="text-sm font-medium">15%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-amber-500 rounded-full" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Community Programs</span>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-purple-500 rounded-full" style={{ width: "10%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-2">Success Stories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=180&width=320"
                        alt="Before and after photo of rescued dog"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium">Max's Transformation</h4>
                      <p className="text-sm text-muted-foreground">
                        Max arrived severely malnourished and has made a remarkable recovery through our medical
                        program.
                      </p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=180&width=320"
                        alt="Adoption day photo"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium">Luna Finds a Home</h4>
                      <p className="text-sm text-muted-foreground">
                        After 6 months in our care, Luna found her forever home with the Johnson family.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Eye className="mr-2 h-4 w-4" />
                View Detailed Stats
              </Button>
              <Button variant="outline" size="sm">
                <FileBar className="mr-2 h-4 w-4" />
                View Previous Reports
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
