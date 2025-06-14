"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Paperclip, Plus, Save } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

export default function VetTreatmentRecordsPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Treatment Records</h1>
        <p className="text-muted-foreground">Submit and manage treatment records for pets</p>
      </div>

      <Tabs defaultValue="new">
        <TabsList>
          <TabsTrigger value="new">New Record</TabsTrigger>
          <TabsTrigger value="recent">Recent Submissions</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="new" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>New Treatment Record</CardTitle>
              <CardDescription>Create a new treatment record for a pet</CardDescription>
            </CardHeader>
            <CardContent>
              <NewTreatmentForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recent" className="space-y-6 mt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Recently Submitted Records</h3>
            <Button variant="outline" size="sm">
              <FileText className="mr-2 h-4 w-4" />
              Export Records
            </Button>
          </div>

          {[
            {
              date: "May 19, 2025",
              petName: "Max",
              petType: "Golden Retriever",
              owner: "John Smith",
              treatment: "Annual Checkup & Vaccinations",
              status: "Completed",
            },
            {
              date: "May 18, 2025",
              petName: "Luna",
              petType: "Siamese Cat",
              owner: "Sarah Johnson",
              treatment: "Dental Cleaning",
              status: "Completed",
            },
            {
              date: "May 17, 2025",
              petName: "Rocky",
              petType: "German Shepherd",
              owner: "Michael Brown",
              treatment: "Skin Condition Assessment",
              status: "Pending Review",
            },
          ].map((record, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">
                      {record.petName} - {record.petType}
                    </p>
                    <p className="text-sm text-muted-foreground">Owner: {record.owner}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">{record.date}</p>
                    <p className="text-sm font-medium text-cyan-600">{record.status}</p>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm">Treatment: {record.treatment}</p>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="templates" className="space-y-6 mt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Treatment Templates</h3>
            <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
              <Plus className="mr-2 h-4 w-4" />
              Create Template
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: "Routine Vaccination",
                description: "Standard template for routine vaccinations",
                lastUsed: "2 days ago",
              },
              {
                name: "Dental Cleaning",
                description: "Comprehensive dental cleaning procedure",
                lastUsed: "1 week ago",
              },
              {
                name: "Spay/Neuter",
                description: "Standard spay/neuter procedure and aftercare",
                lastUsed: "3 weeks ago",
              },
              {
                name: "Annual Checkup",
                description: "Complete annual wellness examination",
                lastUsed: "1 month ago",
              },
              {
                name: "Emergency Assessment",
                description: "Quick emergency assessment protocol",
                lastUsed: "2 months ago",
              },
            ].map((template, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Last used: {template.lastUsed}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" className="w-full">
                    Use Template
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function NewTreatmentForm() {
  const formSchema = z.object({
    petId: z.string({
      required_error: "Please select a pet",
    }),
    treatmentDate: z.string({
      required_error: "Please select a treatment date",
    }),
    treatmentType: z.string({
      required_error: "Please select a treatment type",
    }),
    medications: z.string().optional(),
    diagnosis: z.string().optional(),
    treatmentNotes: z.string().optional(),
    followUpInstructions: z.string().optional(),
    attachments: z.array(z.string()).optional(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      medications: "",
      diagnosis: "",
      treatmentNotes: "",
      followUpInstructions: "",
      attachments: [],
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // In a real app, you would submit the form data to your backend here
    alert("Treatment record submitted successfully!")
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="petId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pet ID / Name</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a pet" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="max-123">Max (ID: 123) - Golden Retriever</SelectItem>
                      <SelectItem value="luna-456">Luna (ID: 456) - Siamese Cat</SelectItem>
                      <SelectItem value="rocky-789">Rocky (ID: 789) - German Shepherd</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>Select the pet that received treatment</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="treatmentDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Treatment Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="treatmentType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Treatment Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select treatment type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="exam">General Examination</SelectItem>
                      <SelectItem value="vaccination">Vaccination</SelectItem>
                      <SelectItem value="surgery">Surgery</SelectItem>
                      <SelectItem value="dental">Dental Procedure</SelectItem>
                      <SelectItem value="emergency">Emergency Care</SelectItem>
                      <SelectItem value="followup">Follow-up Visit</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="medications"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Medications Prescribed</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter medications (comma separated)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4">
            <FormField
              control={form.control}
              name="diagnosis"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Diagnosis</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter diagnosis details" className="min-h-[80px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="treatmentNotes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Treatment Notes</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter detailed treatment notes" className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="followUpInstructions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Follow-up Instructions</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter follow-up care instructions" className="min-h-[80px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <FormField
            control={form.control}
            name="attachments"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Attachments</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Button type="button" variant="outline" size="sm">
                      <Paperclip className="mr-2 h-4 w-4" />
                      Attach Files
                    </Button>
                    <p className="text-sm text-muted-foreground">No files attached</p>
                  </div>
                </FormControl>
                <FormDescription>Attach relevant files (X-rays, lab results, etc.)</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between">
          <Button type="button" variant="outline">
            Save as Draft
          </Button>
          <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700">
            <Save className="mr-2 h-4 w-4" />
            Submit Record
          </Button>
        </div>
      </form>
    </Form>
  )
}
