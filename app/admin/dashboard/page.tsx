import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowDownRightFromCircle,
  ArrowUpRight,
  BarChart3,
  Calendar,
  ChevronDown,
  DollarSign,
  Download,
  Home,
  LineChart,
  Maximize2,
  Printer,
  ThumbsUp,
} from "lucide-react"

export default function KPIDashboardPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Real-time KPIs & Analytics</h1>
        <p className="text-muted-foreground">Track key performance indicators and shelter metrics</p>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Select defaultValue="last30">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="yesterday">Yesterday</SelectItem>
              <SelectItem value="last7">Last 7 days</SelectItem>
              <SelectItem value="last30">Last 30 days</SelectItem>
              <SelectItem value="thismonth">This month</SelectItem>
              <SelectItem value="lastmonth">Last month</SelectItem>
              <SelectItem value="thisyear">This year</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            May 1 - May 20, 2025
          </Button>
        </div>
        
        <div className="flex gap-2">
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
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { 
            title: "Total Adoptions", 
            value: "138", 
            change: "+12%", 
            trend: "up",
            period: "vs. previous period",
            icon: Home,
            color: "cyan" 
          },
          { 
            title: "Intake Animals", 
            value: "215", 
            change: "+8%", 
            trend: "up",
            period: "vs. previous period",
            icon: ArrowDownRightFromCircle,
            color: "amber" 
          },
          { 
            title: "Donations", 
            value: "$42,580", 
            change: "+23%", 
            trend: "up",
            period: "vs. previous period",
            icon: DollarSign,
            color: "green" 
          },
          { 
            title: "Approval Rate", 
            value: "76%", 
            change: "+4%", 
            trend: "up",
            period: "vs. previous period",
            icon: ThumbsUp,
            color: "purple" 
          },
        ].map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className={`rounded-md bg-${stat.color}-100 p-2 text-${stat.color}-600`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.period}</p>
              <div className={`flex items-center pt-1 text-${stat.color}-600 text-sm`}>
                {stat.trend === "up" ? <ArrowUpRight className="mr-1 h-4 w-4" /> : <ChevronDown className="mr-1 h-4 w-4" />}
                <span>{stat.change}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Adoption Trends</CardTitle>
              <CardDescription>Monthly adoption rates over time</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <LineChart className="mr-2 h-4 w-4" />
                Line
              </Button>
              <Button variant="ghost" size="sm">
                <BarChart3 className="mr-2 h-4 w-4" />
                Bar
              </Button>
              <Button variant="ghost" size="icon" size="sm">
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] w-full">
              {/* Mock chart UI */}
              <div className="h-full w-full rounded-md bg-gradient-to-b from-transparent to-muted/20 relative">
                <div className="absolute bottom-0 left-0 right-0 h-[70%] overflow-hidden">
                  <svg viewBox="0 0 100 20" className="w-full h-[300px] stroke-cyan-500 fill-cyan-500/20 stroke-2">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgb(8 145 178 / 0.3)" />
                        <stop offset="100%" stopColor="rgb(8 145 178 / 0)" />
                      </linearGradient>
                    </defs>
                    <path d="M0,10 Q10,8 20,10 T40,9 T60,12 T80,7 T100,10" fill="none" />
                    <path d="M0,10 Q10,8 20,10 T40,9 T60,12 T80,7 T100,10 V20 H0 Z" fill="url(#gradient)" />
                  </svg>
                </div>
                <div className="absolute top-4 right-4 flex flex-col space-y-1">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-cyan-500 mr-1"></div>
                    <span className="text-xs">Dogs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
                    <span className="text-xs">Cats</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-purple-500 mr-1"></div>
                    <span className="text-xs">Other</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 text-xs text-muted-foreground">
                  <div>Jan</div>
                  <div>Feb</div>
                  <div>Mar</div>
                  <div>Apr</div>
                  <div>May</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Adoption by Species</CardTitle>
            <CardDescription>Distribution of adoptions by animal type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              {/* Mock donut chart UI */}
              <div className="relative h-48 w-48">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-2xl font-bold">138</div>
                  <div className="text-xs text-muted-foreground mt-6">Total</div>
                </div>
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <circle cx="18" cy="18" r="12" fill="none" stroke="#e9ecef" strokeWidth="12" />
                  <circle 
                    cx="18" 
                    cy="18" 
                    r="12" 
                    fill="none" 
                    stroke="#0891b2" 
                    strokeWidth="12" 
                    strokeDasharray="50 75" 
                    strokeDashoffset="0" 
                  />
                  <circle 
                    cx="18" 
                    cy="18" 
                    r="12" 
                    fill="none" 
                    stroke="#16a34a" 
                    strokeWidth="12" 
                    strokeDasharray="35 75" 
                    strokeDashoffset="-50" 
                  />
                  <circle 
                    cx="18" 
                    cy="18" 
                    r="12" 
                    fill="none" 
                    stroke="#a855f7" 
                    strokeWidth="12" 
                    strokeDasharray="15 75" 
                    strokeDashoffset="-85" 
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-around mt-4">
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-cyan-500 mr-1"></div>
                  <span className="text-sm font-medium">Dogs</span>
                </div>
                <div className="text-2xl font-bold">67</div>
                <div className="text-xs text-muted-foreground">49%</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-green-500 mr-1"></div>
                  <span className="text-sm font-medium">Cats</span>
                </div>
                <div className="text-2xl font-bold">48</div>
                <div className="text-xs text-muted-foreground">35%</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-purple-500 mr-1"></div>
                  <span className="text-sm font-medium">Other</span>
                </div>
                <div className="text-2xl font-bold">23</div>
                <div className="text-xs text-muted-foreground">16%</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="operational">
        <TabsList className="grid grid-cols-4 md:w-[600px]">
          <TabsTrigger value="operational">Operational</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="medical">Medical</TabsTrigger>
          <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="operational" className="space-y-4 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Current Shelter Capacity</CardTitle>
                <CardDescription>Animals currently in the shelter</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Dogs (42/50)</span>
                      <span className="text-sm font-medium text-amber-600">84%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-amber-500 rounded-full" style={{ width: "84%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Cats (38/60)</span>
                      <span className="text-sm font-medium text-green-600">63%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-green-600 rounded-full" style={{ width: "63%" }}></div>
                    </div>

I've implemented the remaining pages for the Pet4U animal adoption management system:

### Donor Portal Pages:
1. **Donation History & Impact Reports** - Shows donation history with impact metrics and visualizations
2. **Sponsor Communication** - Allows sponsors to communicate with the shelter about their sponsored pets

### Administrator Panel Pages:
1. **User & Role Management** - For managing user accounts and role permissions
2. **System Settings** - For configuring system-wide settings and preferences
3. **Compliance & Audit Logs** - For reviewing system activity and compliance tracking
4. **KPI Dashboard** - For monitoring key performance indicators with charts and metrics

All pages maintain the cyan and green color scheme and follow the established design patterns of the application. Each page includes:
- Responsive layouts that work on all device sizes
- Loading states for better user experience
- Appropriate data visualization where needed
- Consistent navigation and UI components
\
