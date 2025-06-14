"use client"

import type React from "react"

import { useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/components/ui/use-toast"
import { DollarSign, CreditCard, Calendar, Heart, PawPrint, Gift, ArrowRight } from "lucide-react"

export default function DonorPage() {
  const { toast } = useToast()
  const [donationAmount, setDonationAmount] = useState("50")
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState("one-time")
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [isRecurring, setIsRecurring] = useState(false)
  const [dedicationType, setDedicationType] = useState("")
  const [dedicationInfo, setDedicationInfo] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleDedicationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setDedicationInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Donation Successful",
      description: `Thank you for your ${isRecurring ? "recurring " : ""}donation of $${
        customAmount || donationAmount
      }!`,
    })
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Make a Donation</h1>
          <p className="text-muted-foreground">Your generosity helps us provide care and shelter for animals in need</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Donation Information</CardTitle>
                <CardDescription>Choose your donation amount and frequency</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Donation Amount</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {["25", "50", "100", "250"].map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant={donationAmount === amount ? "default" : "outline"}
                        className={donationAmount === amount ? "bg-primary text-primary-foreground" : ""}
                        onClick={() => {
                          setDonationAmount(amount)
                          setCustomAmount("")
                        }}
                      >
                        ${amount}
                      </Button>
                    ))}
                    <div className="col-span-3 mt-2">
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          type="number"
                          placeholder="Custom Amount"
                          className="pl-10"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value)
                            setDonationAmount("")
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="recurring-donation">Make this a monthly donation</Label>
                    <Switch id="recurring-donation" checked={isRecurring} onCheckedChange={setIsRecurring} />
                  </div>
                  {isRecurring && (
                    <p className="text-sm text-muted-foreground">
                      Your card will be charged ${customAmount || donationAmount} on the same day each month. You can
                      cancel anytime.
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Dedication (Optional)</Label>
                  <RadioGroup value={dedicationType} onValueChange={setDedicationType}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="" id="no-dedication" />
                      <Label htmlFor="no-dedication">No dedication</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="honor" id="in-honor" />
                      <Label htmlFor="in-honor">In honor of</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="memory" id="in-memory" />
                      <Label htmlFor="in-memory">In memory of</Label>
                    </div>
                  </RadioGroup>
                </div>

                {dedicationType && (
                  <div className="space-y-4 rounded-md border p-4">
                    <div className="space-y-2">
                      <Label htmlFor="dedication-name">
                        {dedicationType === "honor" ? "Honoree's Name" : "In Memory of"}
                      </Label>
                      <Input
                        id="dedication-name"
                        name="name"
                        value={dedicationInfo.name}
                        onChange={handleDedicationChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dedication-email">Recipient's Email (Optional)</Label>
                      <Input
                        id="dedication-email"
                        name="email"
                        type="email"
                        value={dedicationInfo.email}
                        onChange={handleDedicationChange}
                        placeholder="We'll send them a notification of your gift"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dedication-message">Personal Message (Optional)</Label>
                      <Textarea
                        id="dedication-message"
                        name="message"
                        value={dedicationInfo.message}
                        onChange={handleDedicationChange}
                        placeholder="Add a personal message to include with the notification"
                        rows={3}
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
                <CardDescription>Enter your payment details securely</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Payment Method</Label>
                  <Tabs defaultValue="credit-card" value={paymentMethod} onValueChange={setPaymentMethod}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="credit-card">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Credit Card
                      </TabsTrigger>
                      <TabsTrigger value="paypal">
                        <svg
                          className="mr-2 h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.5 8.25H4.5C3.67157 8.25 3 8.92157 3 9.75V18.75C3 19.5784 3.67157 20.25 4.5 20.25H19.5C20.3284 20.25 21 19.5784 21 18.75V9.75C21 8.92157 20.3284 8.25 19.5 8.25Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 14.25H21"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        PayPal
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="credit-card" className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-name">Name on Card</Label>
                        <Input id="card-name" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry-date">Expiry Date</Label>
                          <Input id="expiry-date" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="paypal" className="pt-4">
                      <div className="rounded-md bg-muted p-4 text-center">
                        <p className="text-sm text-muted-foreground">
                          You will be redirected to PayPal to complete your donation after clicking "Donate Now".
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg" onClick={handleSubmit}>
                  Donate ${customAmount || donationAmount} {isRecurring ? "Monthly" : "Now"}
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Impact</CardTitle>
                <CardDescription>See how your donation helps animals in need</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <PawPrint className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">$25 provides</p>
                      <p className="text-sm text-muted-foreground">Food for one animal for two weeks</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">$50 provides</p>
                      <p className="text-sm text-muted-foreground">Vaccinations and preventative care for one animal</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Gift className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">$100 provides</p>
                      <p className="text-sm text-muted-foreground">Spay/neuter surgery for one animal</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">$250 provides</p>
                      <p className="text-sm text-muted-foreground">Complete care for one animal for an entire month</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Other Ways to Help</CardTitle>
                <CardDescription>Beyond financial donations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md border p-4">
                  <h3 className="font-medium mb-2">Donate Supplies</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We always need pet food, bedding, toys, cleaning supplies, and more. Check our wishlist for current
                    needs.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="#wishlist">View Wishlist</a>
                  </Button>
                </div>

                <div className="rounded-md border p-4">
                  <h3 className="font-medium mb-2">Volunteer Your Time</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Help walk dogs, socialize cats, assist with events, or provide administrative support.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/volunteer">Volunteer Opportunities</a>
                  </Button>
                </div>

                <div className="rounded-md border p-4">
                  <h3 className="font-medium mb-2">Become a Foster</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Provide temporary care for animals awaiting their forever homes.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/foster">Learn About Fostering</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Donation History</CardTitle>
                <CardDescription>View your past contributions</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/donor/history">
                    View Donation History
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
