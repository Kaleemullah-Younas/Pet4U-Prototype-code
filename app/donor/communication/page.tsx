import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { CalendarDays, Clock, MessageCircle, MessageSquare, PenSquare, Send } from "lucide-react"

export default function SponsorCommunicationPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Sponsor Communications</h1>
        <p className="text-muted-foreground">Stay connected with your sponsored pets and shelter staff</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="md:col-span-3">
          <CardHeader className="pb-2">
            <CardTitle>Your Sponsored Pets</CardTitle>
            <CardDescription>Connect with the animals you're helping</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  name: "Buddy",
                  type: "Golden Retriever",
                  since: "January 2025",
                  updates: 12,
                  status: "In shelter",
                  image: "/placeholder.svg?height=150&width=150",
                },
                {
                  name: "Luna",
                  type: "Siamese Cat",
                  since: "March 2025",
                  updates: 5,
                  status: "In foster care",
                  image: "/placeholder.svg?height=150&width=150",
                },
                {
                  name: "Max",
                  type: "German Shepherd",
                  since: "November 2024",
                  updates: 18,
                  status: "Adopted",
                  image: "/placeholder.svg?height=150&width=150",
                },
              ].map((pet, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="p-2">
                    <div className="rounded-md overflow-hidden h-36 mb-2">
                      <img
                        src={pet.image || "/placeholder.svg"}
                        alt={pet.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{pet.name}</h3>
                          <p className="text-xs text-muted-foreground">{pet.type}</p>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            pet.status === "Adopted"
                              ? "bg-green-100 text-green-800"
                              : pet.status === "In foster care"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {pet.status}
                        </span>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>Sponsoring since {pet.since}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-xs text-muted-foreground">{pet.updates} updates</span>
                        <Button variant="outline" size="sm">
                          View Updates
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Communication Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">35</p>
                  <p className="text-xs text-muted-foreground">Total Updates</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <PenSquare className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">12</p>
                  <p className="text-xs text-muted-foreground">Your Messages</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">5 months</p>
                  <p className="text-xs text-muted-foreground">Average Sponsorship</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recent-updates">
        <TabsList className="grid grid-cols-2 md:w-[400px]">
          <TabsTrigger value="recent-updates">Recent Updates</TabsTrigger>
          <TabsTrigger value="send-message">Send Message</TabsTrigger>
        </TabsList>

        <TabsContent value="recent-updates" className="space-y-4 pt-4">
          <div className="space-y-4">
            {[
              {
                pet: "Buddy",
                date: "May 18, 2025",
                from: "Dr. Maria Chen (Veterinarian)",
                message:
                  "Buddy had his regular checkup today. I'm happy to report he's in excellent health! His weight is ideal at 65 lbs, and his coat is looking healthy and shiny. His hip dysplasia shows no signs of worsening, and he's responding well to his joint supplements. He was a very good boy during the examination and enjoyed the treats afterward!",
                type: "Medical Update",
              },
              {
                pet: "Luna",
                date: "May 15, 2025",
                from: "Sarah Johnson (Foster Care Provider)",
                message:
                  "Luna is settling in beautifully in her foster home. She's found her favorite sunny spot by the window and spends most afternoons napping there. She's become much more social this week, actively seeking attention and purring loudly when petted. Her appetite is excellent, and she's particularly fond of the wet food you donated. Thank you for your continuous support!",
                type: "Foster Update",
              },
              {
                pet: "Max",
                date: "May 12, 2025",
                from: "Thomas Brown (Adopter)",
                message:
                  "We wanted to share some photos of Max enjoying his new home! He's adjusted wonderfully and is already part of the family. The kids adore him, and he's been incredibly gentle with them. He loves our daily walks in the park and has made several doggy friends in the neighborhood. We're forever grateful for your sponsorship that helped with his medical treatments before adoption.",
                type: "Adoption Update",
                images: ["/placeholder.svg?height=120&width=180", "/placeholder.svg?height=120&width=180"],
              },
            ].map((update, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div>
                      <CardTitle>
                        {update.pet}: {update.type}
                      </CardTitle>
                      <CardDescription>From: {update.from}</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">{update.date}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{update.message}</p>

                  {update.images && (
                    <div className="flex gap-2 mt-4">
                      {update.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="rounded-md overflow-hidden">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`${update.pet} update ${imgIndex + 1}`}
                            className="h-24 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Reply
                  </Button>
                  {update.type === "Adoption Update" && (
                    <Button variant="outline" size="sm">
                      Send Congratulations
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="send-message" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Communicate with shelter staff or ask for updates about your sponsored pets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form>
                <div className="space-y-4">
                  <FormField
                    name="recipient"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Send To</FormLabel>
                        <Select>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select recipient" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="staff">Shelter Staff</SelectItem>
                            <SelectItem value="vet">Veterinary Team</SelectItem>
                            <SelectItem value="foster">Foster Coordinator</SelectItem>
                            <SelectItem value="buddy">About Buddy</SelectItem>
                            <SelectItem value="luna">About Luna</SelectItem>
                            <SelectItem value="max">About Max (Adopted)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>Choose who you'd like to contact</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter message subject" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Type your message here..." className="min-h-[200px]" {...field} />
                        </FormControl>
                        <FormDescription>Your message will be responded to within 48 hours</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save Draft</Button>
              <Button className="bg-cyan-600 hover:bg-cyan-700">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
