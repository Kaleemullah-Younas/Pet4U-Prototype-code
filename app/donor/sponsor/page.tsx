"use client"

import * as React from "react"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Heart,
  CalendarClock,
  Award,
  Clock,
  Calendar,
  ChevronRight,
  PlusCircle,
  DollarSign,
  Gift,
  LineChart,
  MessageCircle,
  Camera,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/components/ui/use-toast"

export default function SponsorPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = React.useState("current")

  const handleRenewSponsor = () => {
    toast({
      title: "Sponsorship Renewed",
      description: "Thank you for renewing your sponsorship of Bella!",
    })
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Your Sponsorships</h1>
          <p className="text-muted-foreground">Manage your sponsored animals and see the impact of your support</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Sponsorship Summary</CardTitle>
                    <CardDescription>Overview of your current sponsorships</CardDescription>
                  </div>
                  <Button>
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Sponsor New Animal
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-cyan-50">
                    <div className="text-3xl font-bold text-cyan-600">4</div>
                    <div className="text-sm text-muted-foreground">Active Sponsorships</div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-green-50">
                    <div className="text-3xl font-bold text-green-600">$95</div>
                    <div className="text-sm text-muted-foreground">Monthly Contribution</div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-amber-50">
                    <div className="text-3xl font-bold text-amber-600">2+</div>
                    <div className="text-sm text-muted-foreground">Years Supporting</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="current" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="current">
                  <Heart className="h-4 w-4 mr-2" />
                  Current (4)
                </TabsTrigger>
                <TabsTrigger value="past">
                  <Clock className="h-4 w-4 mr-2" />
                  Past (2)
                </TabsTrigger>
                <TabsTrigger value="plans">
                  <Award className="h-4 w-4 mr-2" />
                  Sponsorship Plans
                </TabsTrigger>
              </TabsList>

              <TabsContent value="current" className="space-y-4 mt-4">
                {[
                  {
                    id: 1,
                    name: "Bella",
                    type: "Dog",
                    breed: "Golden Retriever",
                    age: "3 years",
                    image: "/placeholder.svg?height=120&width=120",
                    since: "Feb 12, 2025",
                    renewal: "Feb 12, 2026",
                    plan: "Premium",
                    amount: "$35/month",
                    story: "Bella was rescued from an abusive home and is now thriving in our shelter.",
                    updates: 7,
                    status: "Medical treatment",
                  },
                  {
                    id: 2,
                    name: "Oliver",
                    type: "Cat",
                    breed: "Tabby",
                    age: "2 years",
                    image: "/placeholder.svg?height=120&width=120",
                    since: "Apr 5, 2025",
                    renewal: "Apr 5, 2026",
                    plan: "Standard",
                    amount: "$20/month",
                    story: "Oliver was found as a stray kitten and is waiting for his forever home.",
                    updates: 3,
                    status: "Available for adoption",
                  },
                  {
                    id: 3,
                    name: "Max",
                    type: "Dog",
                    breed: "German Shepherd",
                    age: "5 years",
                    image: "/placeholder.svg?height=120&width=120",
                    since: "Jan 15, 2025",
                    renewal: "Jan 15, 2026",
                    plan: "Premium",
                    amount: "$35/month",
                    story: "Max was retired from police work and is now looking for a loving home.",
                    updates: 5,
                    status: "In training",
                  },
                  {
                    id: 4,
                    name: "Whiskers",
                    type: "Cat",
                    breed: "Siamese",
                    age: "1 year",
                    image: "/placeholder.svg?height=120&width=120",
                    since: "May 3, 2025",
                    renewal: "May 3, 2026",
                    plan: "Basic",
                    amount: "$15/month",
                    story: "Whiskers was born in our shelter and is waiting for adoption.",
                    updates: 2,
                    status: "With foster family",
                  },
                ].map((animal) => (
                  <Card key={animal.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-40 h-40 md:h-auto">
                        <img
                          src={animal.image || "/placeholder.svg"}
                          alt={animal.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                          <div>
                            <h3 className="text-lg font-bold">{animal.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {animal.breed} • {animal.age}
                            </p>
                          </div>
                          <Badge
                            className={
                              animal.status === "Medical treatment"
                                ? "bg-red-100 text-red-800 hover:bg-red-100"
                                : animal.status === "Available for adoption"
                                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                                  : animal.status === "In training"
                                    ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                    : "bg-amber-100 text-amber-800 hover:bg-amber-100"
                            }
                          >
                            {animal.status}
                          </Badge>
                        </div>

                        <Separator className="my-3" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm mb-3">
                          <div className="flex items-center">
                            <CalendarClock className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>Since: {animal.since}</span>
                          </div>
                          <div className="flex items-center">
                            <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>
                              {animal.plan}: {animal.amount}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>Renews: {animal.renewal}</span>
                          </div>
                        </div>

                        <p className="text-sm mb-3 line-clamp-2">{animal.story}</p>

                        <div className="flex flex-wrap gap-2 justify-between items-center">
                          <div className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{animal.updates} updates</span>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View Profile
                            </Button>
                            <Button
                              variant="default"
                              size="sm"
                              className="bg-cyan-600 hover:bg-cyan-700"
                              onClick={animal.id === 1 ? handleRenewSponsor : undefined}
                            >
                              {animal.id === 1 ? "Renew Soon" : "Manage"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="past" className="space-y-4 mt-4">
                {[
                  {
                    id: 5,
                    name: "Rocky",
                    type: "Dog",
                    breed: "Pitbull Mix",
                    age: "4 years",
                    image: "/placeholder.svg?height=120&width=120",
                    period: "Jan 2024 - Dec 2024",
                    plan: "Standard",
                    amount: "$20/month",
                    status: "Adopted",
                    reason: "Successfully adopted by the Martinez family",
                  },
                  {
                    id: 6,
                    name: "Luna",
                    type: "Cat",
                    breed: "Maine Coon",
                    age: "3 years",
                    image: "/placeholder.svg?height=120&width=120",
                    period: "Mar 2023 - Mar 2024",
                    plan: "Premium",
                    amount: "$35/month",
                    status: "Adopted",
                    reason: "Found her forever home with an elderly couple",
                  },
                ].map((animal) => (
                  <Card key={animal.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-40 h-40 md:h-auto relative">
                        <img
                          src={animal.image || "/placeholder.svg"}
                          alt={animal.name}
                          className="w-full h-full object-cover grayscale"
                        />
                        <div className="absolute top-0 right-0 m-2">
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{animal.status}</Badge>
                        </div>
                      </div>
                      <div className="flex-1 p-4">
                        <div>
                          <h3 className="text-lg font-bold">{animal.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {animal.breed} • {animal.age}
                          </p>
                        </div>

                        <Separator className="my-3" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-3">
                          <div className="flex items-center">
                            <CalendarClock className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>Period: {animal.period}</span>
                          </div>
                          <div className="flex items-center">
                            <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>
                              {animal.plan}: {animal.amount}
                            </span>
                          </div>
                        </div>

                        <p className="text-sm mb-3">{animal.reason}</p>

                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm">
                            View Adoption Story
                          </Button>
                          <Button variant="default" size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                            Sponsor Another Pet
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="plans" className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Basic Plan",
                      price: "$15",
                      description: "Support a shelter animal with essential care",
                      features: [
                        "Food and basic supplies",
                        "Monthly update email",
                        "Name on sponsor wall",
                        "Digital certificate",
                      ],
                      highlight: false,
                      color: "bg-gray-100",
                    },
                    {
                      title: "Standard Plan",
                      price: "$25",
                      description: "Provide enhanced care for shelter animals",
                      features: [
                        "All Basic Plan features",
                        "Bi-weekly updates",
                        "Training and enrichment",
                        "Personalized postcard from your pet",
                        "Quarterly video updates",
                      ],
                      highlight: true,
                      color: "bg-cyan-50",
                    },
                    {
                      title: "Premium Plan",
                      price: "$35",
                      description: "Give comprehensive support to animals with special needs",
                      features: [
                        "All Standard Plan features",
                        "Weekly updates",
                        "Medical procedure coverage",
                        "Annual sponsorship plaque",
                        "Virtual meet and greet sessions",
                        "Shelter visitor privileges",
                      ],
                      highlight: false,
                      color: "bg-green-50",
                    },
                  ].map((plan, index) => (
                    <Card
                      key={index}
                      className={`overflow-hidden ${plan.highlight ? "border-cyan-600 shadow-md" : ""}`}
                    >
                      <CardHeader className={`${plan.color}`}>
                        {plan.highlight && (
                          <div className="absolute top-0 right-0 -mt-1 -mr-1">
                            <Badge className="bg-cyan-600">Most Popular</Badge>
                          </div>
                        )}
                        <CardTitle>{plan.title}</CardTitle>
                        <div className="flex items-baseline mt-2">
                          <span className="text-3xl font-bold">{plan.price}</span>
                          <span className="text-sm text-muted-foreground ml-1">/month</span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-sm mb-4">{plan.description}</p>
                        <ul className="space-y-2">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <ChevronRight className="h-4 w-4 mr-2 mt-1 text-cyan-600" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className={`w-full ${plan.highlight ? "bg-cyan-600 hover:bg-cyan-700" : ""}`}>
                          Choose Plan
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Impact</CardTitle>
                <CardDescription>How your sponsorships are helping</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Medical Care</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Food & Nutrition</span>
                    <span className="font-medium">30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Training & Enrichment</span>
                    <span className="font-medium">15%</span>
                  </div>
                  <Progress value={15} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Shelter Operations</span>
                    <span className="font-medium">10%</span>
                  </div>
                  <Progress value={10} className="h-2" />
                </div>

                <Separator className="my-2" />

                <div className="rounded-lg border p-4">
                  <div className="flex items-center mb-2">
                    <LineChart className="h-5 w-5 mr-2 text-cyan-600" />
                    <h3 className="font-medium">Your Support Timeline</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <div>Total Months as Sponsor</div>
                        <div className="font-bold text-2xl text-cyan-600">24</div>
                      </div>
                      <div className="text-sm">
                        <div>Animals Helped</div>
                        <div className="font-bold text-2xl text-green-600">6</div>
                      </div>
                    </div>

                    <div className="border-l-2 border-cyan-200 pl-4 space-y-3">
                      <div className="relative">
                        <div className="absolute -left-[1.625rem] top-0 h-4 w-4 rounded-full bg-cyan-600"></div>
                        <div className="text-sm">
                          <div className="font-medium">May 2025</div>
                          <div className="text-muted-foreground">Started sponsoring Whiskers</div>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[1.625rem] top-0 h-4 w-4 rounded-full bg-cyan-600"></div>
                        <div className="text-sm">
                          <div className="font-medium">Apr 2025</div>
                          <div className="text-muted-foreground">Started sponsoring Oliver</div>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[1.625rem] top-0 h-4 w-4 rounded-full bg-green-600"></div>
                        <div className="text-sm">
                          <div className="font-medium">Mar 2024</div>
                          <div className="text-muted-foreground">Luna was adopted!</div>
                        </div>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full">
                      View Full Timeline
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/donor/communication">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Send Message About Sponsorship
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Gift className="mr-2 h-4 w-4" />
                  Give a Sponsorship as Gift
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Camera className="mr-2 h-4 w-4" />
                  Request Pet Photo Update
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Manage Payment Methods
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Featured Sponsor</CardTitle>
                <CardDescription>Sponsor of the Month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Sponsor" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Sponsoring 7 animals</p>
                    <p className="text-sm text-muted-foreground">Since January 2023</p>
                  </div>
                </div>
                <p className="text-sm italic">
                  "Sponsoring these beautiful animals has been such a rewarding experience. It's amazing to see their
                  progress and know that I'm making a difference."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
