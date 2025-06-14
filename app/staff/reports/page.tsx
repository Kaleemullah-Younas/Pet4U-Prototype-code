import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "lucide-react"

export default function StaffReportsPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
        <p className="text-muted-foreground">View and analyze shelter data and performance metrics</p>
      </div>

      <Tabs defaultValue="adoption">
        <TabsList className="grid grid-cols-4 md:w-[600px]">
          <TabsTrigger value="adoption">Adoptions</TabsTrigger>
          <TabsTrigger value="medical">Medical</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="donations">Donations</TabsTrigger>
        </TabsList>

        <TabsContent value="adoption" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Adoption Rate</CardTitle>
                <CardDescription>Monthly adoption success rate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                  <LineChart className="h-16 w-16 text-cyan-500" />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-2xl font-bold text-green-500">78%</p>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Time to Adoption</CardTitle>
                <CardDescription>Average days until adoption</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                  <BarChart className="h-16 w-16 text-cyan-500" />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-2xl font-bold text-green-500">18 days</p>
                  <p className="text-xs text-muted-foreground">-3 days from last month</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Species Distribution</CardTitle>
                <CardDescription>Adoption by animal type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                  <PieChart className="h-16 w-16 text-cyan-500" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                    <span>Dogs (45%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>Cats (38%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span>Birds (10%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span>Others (7%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Adoption Trends</CardTitle>
              <CardDescription>Number of adoptions over the past 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                <BarChart className="h-24 w-24 text-cyan-500" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="medical" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Vaccination Rate</CardTitle>
                <CardDescription>Percentage of animals vaccinated</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                  <PieChart className="h-16 w-16 text-cyan-500" />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-2xl font-bold text-green-500">94%</p>
                  <p className="text-xs text-muted-foreground">+2% from last month</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Treatment Types</CardTitle>
                <CardDescription>Common medical procedures</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                  <BarChart className="h-16 w-16 text-cyan-500" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Spay/Neuter</span>
                    <span className="font-medium">42%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Vaccinations</span>
                    <span className="font-medium">28%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Dental</span>
                    <span className="font-medium">15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Health Status</CardTitle>
                <CardDescription>Current animal health conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                  <PieChart className="h-16 w-16 text-cyan-500" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>Healthy (76%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span>Minor Issues (18%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span>Needs Care (6%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Levels</CardTitle>
                <CardDescription>Current stock levels by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <BarChart className="h-24 w-24 text-cyan-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Consumption Rate</CardTitle>
                <CardDescription>Monthly usage of supplies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <LineChart className="h-24 w-24 text-cyan-500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="donations" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Total Donations</CardTitle>
                <CardDescription>Monthly donation amounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                  <LineChart className="h-16 w-16 text-cyan-500" />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-2xl font-bold text-green-500">$24,850</p>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Donation Types</CardTitle>
                <CardDescription>Monetary vs. supplies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                  <PieChart className="h-16 w-16 text-cyan-500" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                    <span>Monetary (65%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>Supplies (35%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Donor Retention</CardTitle>
                <CardDescription>Recurring vs. one-time donors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                  <PieChart className="h-16 w-16 text-cyan-500" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                    <span>Recurring (42%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>One-time (58%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
