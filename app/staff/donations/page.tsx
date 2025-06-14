"use client"

import { useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Mail, Printer, Download } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"

export default function DonationProcessingPage() {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDonation, setSelectedDonation] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("new")
  const [donationDate, setDonationDate] = useState<Date>()
  const [donationType, setDonationType] = useState("one-time")
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [sendReceipt, setSendReceipt] = useState(true)
  const [isAnonymous, setIsAnonymous] = useState(false)

  // Sample donation data
  const donations = [
    {
      id: "DON-1001",
      donorName: "John Smith",
      donorEmail: "john.smith@example.com",
      donorPhone: "(555) 123-4567",
      amount: 250.0,
      date: "2023-05-18",
      type: "One-time",
      paymentMethod: "Credit Card",
      status: "Processed",
      notes: "General donation",
      receiptSent: true,
    },
    {
      id: "DON-1002",
      donorName: "Jane Doe",
      donorEmail: "jane.doe@example.com",
      donorPhone: "(555) 987-6543",
      amount: 100.0,
      date: "2023-05-15",
      type: "Monthly",
      paymentMethod: "Bank Transfer",
      status: "Processed",
      notes: "Monthly sponsor",
      receiptSent: true,
    },
    {
      id: "DON-1003",
      donorName: "Anonymous",
      donorEmail: "",
      donorPhone: "",
      amount: 500.0,
      date: "2023-05-10",
      type: "One-time",
      paymentMethod: "Cash",
      status: "Processed",
      notes: "Anonymous donation",
      receiptSent: false,
    },
    {
      id: "DON-1004",
      donorName: "Pet Lovers Inc.",
      donorEmail: "donations@petlovers.example.com",
      donorPhone: "(555) 456-7890",
      amount: 1000.0,
      date: "2023-05-05",
      type: "Corporate",
      paymentMethod: "Check",
      status: "Pending",
      notes: "Corporate sponsorship",
      receiptSent: false,
    },
    {
      id: "DON-1005",
      donorName: "Bob Johnson",
      donorEmail: "bob.johnson@example.com",
      donorPhone: "(555) 234-5678",
      amount: 75.0,
      date: "2023-05-03",
      type: "One-time",
      paymentMethod: "Credit Card",
      status: "Pending",
      notes: "In memory of Buddy",
      receiptSent: false,
    },
  ]

  const getFilteredDonations = () => {
    let filtered = donations

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (donation) =>
          donation.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          donation.donorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          donation.donorEmail.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filter by tab
    if (activeTab === "new") {
      return filtered.filter((donation) => donation.status === "Pending")
    } else if (activeTab === "processed") {
      return filtered.filter((donation) => donation.status === "Processed")
    } else if (activeTab === "receipts") {
      return filtered.filter((donation) => !donation.receiptSent && donation.status === "Processed")
    }

    return filtered
  }

  const filteredDonations = getFilteredDonations()

  const handleDonationSelect = (donation: any) => {
    setSelectedDonation(donation)
  }

  const handleProcessDonation = () => {
    if (selectedDonation) {
      setSelectedDonation({
        ...selectedDonation,
        status: "Processed",
      })

      toast({
        title: "Donation Processed",
        description: `Donation ${selectedDonation.id} has been processed successfully.`,
      })
    }
  }

  const handleSendReceipt = () => {
    if (selectedDonation) {
      setSelectedDonation({
        ...selectedDonation,
        receiptSent: true,
      })

      toast({
        title: "Receipt Sent",
        description: `Receipt sent to ${selectedDonation.donorEmail}.`,
      })
    }
  }

  const handlePrintDetails = () => {
    toast({
      title: "Print",
      description: "Printing donation details...",
    })
  }

  const handleDownloadDetails = () => {
    toast({
      title: "Download",
      description: "Downloading donation details...",
    })
  }

  return (
    <MainLayout>
      <div className="container mx-auto py-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Donation Processing</CardTitle>
            <CardDescription>Manage and process incoming donations.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="new" className="space-y-4" onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="new">New Donations</TabsTrigger>
                <TabsTrigger value="processed">Processed Donations</TabsTrigger>
                <TabsTrigger value="receipts">Receipts to Send</TabsTrigger>
                <TabsTrigger value="all">All Donations</TabsTrigger>
              </TabsList>
              <div className="flex items-center space-x-2">
                <Input
                  type="search"
                  placeholder="Search donations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="h-4 w-4 text-gray-500" />
              </div>
              <TabsContent value="new" className="space-y-4">
                {filteredDonations.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4">
                    {filteredDonations.map((donation) => (
                      <Card
                        key={donation.id}
                        className="border-2 border-gray-200 hover:border-blue-500 cursor-pointer"
                        onClick={() => handleDonationSelect(donation)}
                      >
                        <CardHeader>
                          <CardTitle>{donation.donorName}</CardTitle>
                          <CardDescription>
                            Amount: ${donation.amount} - Date: {donation.date}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>Type: {donation.type}</p>
                          <p>Payment Method: {donation.paymentMethod}</p>
                          <Badge variant="secondary">{donation.status}</Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p>No new donations found.</p>
                )}
              </TabsContent>
              <TabsContent value="processed" className="space-y-4">
                {filteredDonations.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4">
                    {filteredDonations.map((donation) => (
                      <Card
                        key={donation.id}
                        className="border-2 border-gray-200 hover:border-blue-500 cursor-pointer"
                        onClick={() => handleDonationSelect(donation)}
                      >
                        <CardHeader>
                          <CardTitle>{donation.donorName}</CardTitle>
                          <CardDescription>
                            Amount: ${donation.amount} - Date: {donation.date}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>Type: {donation.type}</p>
                          <p>Payment Method: {donation.paymentMethod}</p>
                          <Badge variant="outline">{donation.status}</Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p>No processed donations found.</p>
                )}
              </TabsContent>
              <TabsContent value="receipts" className="space-y-4">
                {filteredDonations.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4">
                    {filteredDonations.map((donation) => (
                      <Card
                        key={donation.id}
                        className="border-2 border-gray-200 hover:border-blue-500 cursor-pointer"
                        onClick={() => handleDonationSelect(donation)}
                      >
                        <CardHeader>
                          <CardTitle>{donation.donorName}</CardTitle>
                          <CardDescription>
                            Amount: ${donation.amount} - Date: {donation.date}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>Type: {donation.type}</p>
                          <p>Payment Method: {donation.paymentMethod}</p>
                          <Badge variant="destructive">Receipt Needed</Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p>No receipts to send.</p>
                )}
              </TabsContent>
              <TabsContent value="all" className="space-y-4">
                {filteredDonations.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4">
                    {filteredDonations.map((donation) => (
                      <Card
                        key={donation.id}
                        className="border-2 border-gray-200 hover:border-blue-500 cursor-pointer"
                        onClick={() => handleDonationSelect(donation)}
                      >
                        <CardHeader>
                          <CardTitle>{donation.donorName}</CardTitle>
                          <CardDescription>
                            Amount: ${donation.amount} - Date: {donation.date}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>Type: {donation.type}</p>
                          <p>Payment Method: {donation.paymentMethod}</p>
                          <Badge variant="secondary">{donation.status}</Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p>No donations found.</p>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            {selectedDonation ? (
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="text-lg font-semibold">{selectedDonation.donorName}</h3>
                  <p className="text-sm text-gray-500">{selectedDonation.donorEmail}</p>
                  <p className="text-sm text-gray-500">{selectedDonation.donorPhone}</p>
                </div>
                <div>
                  <p>Amount: ${selectedDonation.amount}</p>
                  <p>Date: {selectedDonation.date}</p>
                  <p>Type: {selectedDonation.type}</p>
                  <p>Payment Method: {selectedDonation.paymentMethod}</p>
                  <p>Notes: {selectedDonation.notes}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {selectedDonation.status !== "Processed" && (
                    <Button onClick={handleProcessDonation}>Process Donation</Button>
                  )}
                  {!selectedDonation.receiptSent && selectedDonation.status === "Processed" && (
                    <Button variant="outline" onClick={handleSendReceipt}>
                      Send Receipt
                      <Mail className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                  <Button variant="secondary" onClick={handlePrintDetails}>
                    Print Details
                    <Printer className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="secondary" onClick={handleDownloadDetails}>
                    Download Details
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <p>Select a donation to view details.</p>
            )}
          </CardFooter>
        </Card>
      </div>
    </MainLayout>
  )
}
