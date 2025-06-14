"use client"

import type React from "react"

import { useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Search, HelpCircle, MessageSquare, Phone, Mail } from "lucide-react"

export default function HelpPage() {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message Sent",
      description: "We've received your message and will respond shortly.",
    })
    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  // FAQ data
  const faqCategories = {
    adoption: [
      {
        question: "What is the adoption process?",
        answer:
          "Our adoption process typically involves browsing available pets, submitting an application, a review process, a meet and greet with the pet, and finally completing the adoption paperwork and paying the adoption fee.",
      },
      {
        question: "What are the adoption fees?",
        answer:
          "Adoption fees vary depending on the animal. Dogs typically range from $100-$300, cats from $50-$150, and other animals vary. All adoption fees include spay/neuter, vaccinations, and microchipping.",
      },
      {
        question: "Can I adopt if I live in an apartment?",
        answer:
          "Yes! Many of our animals do well in apartments. We consider each animal's needs and your living situation during the adoption process to ensure a good match.",
      },
      {
        question: "How long does the adoption process take?",
        answer:
          "The adoption process typically takes 3-7 days from application to bringing your pet home, depending on the completeness of your application and the availability of references.",
      },
    ],
    volunteering: [
      {
        question: "How do I become a volunteer?",
        answer:
          "To become a volunteer, you'll need to complete an application, attend an orientation session, and complete any required training for your specific volunteer role.",
      },
      {
        question: "What volunteer opportunities are available?",
        answer:
          "We offer various volunteer roles including dog walking, cat socialization, adoption counseling, event support, administrative help, foster care, and more.",
      },
      {
        question: "Is there a minimum age requirement for volunteers?",
        answer:
          "Volunteers must be at least 16 years old to volunteer independently. Youth ages 12-15 can volunteer alongside a parent or guardian.",
      },
      {
        question: "How many hours do I need to commit?",
        answer:
          "We ask for a minimum commitment of 4 hours per month for at least 3 months, but many of our volunteers contribute more time.",
      },
    ],
    donations: [
      {
        question: "How can I donate to Pet4U?",
        answer:
          "You can donate online through our website, mail a check, donate supplies from our wishlist, or set up a recurring monthly donation.",
      },
      {
        question: "Are donations tax-deductible?",
        answer:
          "Yes, Pet4U is a 501(c)(3) nonprofit organization, so all donations are tax-deductible to the extent allowed by law.",
      },
      {
        question: "What does my donation fund?",
        answer:
          "Your donations help fund animal care (food, shelter, medical treatment), facility maintenance, adoption programs, community outreach, and educational initiatives.",
      },
      {
        question: "Can I donate supplies instead of money?",
        answer:
          "We always need supplies like pet food, bedding, toys, cleaning supplies, and more. Check our website for our current wishlist.",
      },
    ],
    account: [
      {
        question: "How do I reset my password?",
        answer:
          "You can reset your password by clicking the 'Forgot Password' link on the login page and following the instructions sent to your email.",
      },
      {
        question: "How do I update my contact information?",
        answer: "You can update your contact information in your profile settings after logging into your account.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Yes, we take data security seriously. We use encryption and follow best practices to protect your personal information.",
      },
      {
        question: "Can I have multiple accounts?",
        answer:
          "We recommend having only one account per person to keep your adoption history, volunteer hours, and donations in one place.",
      },
    ],
  }

  // Filter FAQs based on search query
  const filteredFAQs = searchQuery
    ? Object.entries(faqCategories).reduce(
        (acc, [category, questions]) => {
          const filtered = questions.filter(
            (q) =>
              q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
          )
          if (filtered.length > 0) {
            acc[category] = filtered
          }
          return acc
        },
        {} as Record<string, (typeof faqCategories)[keyof typeof faqCategories]>,
      )
    : faqCategories

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
          <p className="text-muted-foreground">Find answers to common questions or contact our support team</p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search for help..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs defaultValue="faq">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="faq">
              <HelpCircle className="mr-2 h-4 w-4" />
              FAQ
            </TabsTrigger>
            <TabsTrigger value="contact">
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Us
            </TabsTrigger>
          </TabsList>

          <TabsContent value="faq" className="space-y-4">
            {Object.keys(filteredFAQs).length === 0 ? (
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <HelpCircle className="h-12 w-12 text-muted-foreground/50 mb-4" />
                    <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
                    <Button variant="link" onClick={() => setSearchQuery("")}>
                      Clear search
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              Object.entries(filteredFAQs).map(([category, questions]) => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle>{category.charAt(0).toUpperCase() + category.slice(1)}</CardTitle>
                    <CardDescription>Frequently asked questions about {category.toLowerCase()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {questions.map((faq, index) => (
                        <AccordionItem key={index} value={`${category}-${index}`}>
                          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                          <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="contact">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out to us through these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone Support</h3>
                      <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                      <p className="text-xs text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email Support</h3>
                      <p className="text-sm text-muted-foreground">support@pet4u.example.com</p>
                      <p className="text-xs text-muted-foreground">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Live Chat</h3>
                      <p className="text-sm text-muted-foreground">Available on our website</p>
                      <p className="text-xs text-muted-foreground">Monday - Friday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4 mt-6">
                    <h3 className="font-medium mb-2">Visit Us</h3>
                    <address className="not-italic text-sm text-muted-foreground">
                      <p>Pet4U Adoption Center</p>
                      <p>123 Adoption Lane</p>
                      <p>Petville, CA 12345</p>
                    </address>
                    <p className="text-xs text-muted-foreground mt-2">Open daily: 10:00 AM - 6:00 PM</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>Fill out this form and we'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactFormSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactFormChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={contactForm.email}
                        onChange={handleContactFormChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleContactFormChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={contactForm.message}
                        onChange={handleContactFormChange}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}
