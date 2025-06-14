"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

// Sample pet data
const pets = [
  { id: "1", name: "Max", type: "Dog", breed: "Golden Retriever" },
  { id: "2", name: "Luna", type: "Cat", breed: "Siamese" },
  { id: "3", name: "Buddy", type: "Dog", breed: "Labrador" },
]

export default function AdoptionApplicationPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { toast } = useToast()
  const petId = searchParams.get("petId")

  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal details
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",

    // Housing information
    housingType: "",
    ownRent: "",
    landlordName: "",
    landlordPhone: "",
    hasYard: false,
    fenced: false,

    // Pet selection
    selectedPetId: petId || "",

    // Additional information
    otherPets: "",
    experience: "",
    workSchedule: "",
    reason: "",

    // Agreement
    agreeTerms: false,
    agreeVisit: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handlePetSelection = (id: string) => {
    setFormData((prev) => ({ ...prev, selectedPetId: id }))
  }

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, you would submit the form data to your backend
    console.log("Form submitted:", formData)

    // Show success message and redirect
    toast({
      title: "Application Submitted",
      description: "Your adoption application has been submitted successfully.",
    })

    // Redirect to confirmation page
    router.push("/adopter/status")
  }

  const selectedPet = pets.find((pet) => pet.id === formData.selectedPetId)

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Adoption Application</h1>
          <p className="text-muted-foreground">Complete this application to begin the adoption process</p>
        </div>

        <div className="flex justify-between border-b pb-4">
          <div className={`flex items-center ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 1 ? "bg-primary text-primary-foreground" : "border"}`}
            >
              {step > 1 ? <Check className="h-4 w-4" /> : "1"}
            </div>
            <span className="ml-2 hidden md:inline">Personal Details</span>
          </div>
          <div className={`flex items-center ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 2 ? "bg-primary text-primary-foreground" : "border"}`}
            >
              {step > 2 ? <Check className="h-4 w-4" /> : "2"}
            </div>
            <span className="ml-2 hidden md:inline">Pet Selection</span>
          </div>
          <div className={`flex items-center ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 3 ? "bg-primary text-primary-foreground" : "border"}`}
            >
              {step > 3 ? <Check className="h-4 w-4" /> : "3"}
            </div>
            <span className="ml-2 hidden md:inline">Review & Submit</span>
          </div>
          <div className={`flex items-center ${step >= 4 ? "text-primary" : "text-muted-foreground"}`}>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 4 ? "bg-primary text-primary-foreground" : "border"}`}
            >
              4
            </div>
            <span className="ml-2 hidden md:inline">Confirmation</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Personal Details</CardTitle>
                <CardDescription>Please provide your contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" name="address" value={formData.address} onChange={handleChange} required />
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" name="city" value={formData.city} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" name="state" value={formData.state} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" name="zip" value={formData.zip} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Housing Type</Label>
                    <RadioGroup
                      value={formData.housingType}
                      onValueChange={(value) => handleRadioChange("housingType", value)}
                      required
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="house" id="house" />
                        <Label htmlFor="house">House</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="apartment" id="apartment" />
                        <Label htmlFor="apartment">Apartment</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="condo" id="condo" />
                        <Label htmlFor="condo">Condo</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other-housing" />
                        <Label htmlFor="other-housing">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label>Do you own or rent?</Label>
                    <RadioGroup
                      value={formData.ownRent}
                      onValueChange={(value) => handleRadioChange("ownRent", value)}
                      required
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="own" id="own" />
                        <Label htmlFor="own">Own</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="rent" id="rent" />
                        <Label htmlFor="rent">Rent</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.ownRent === "rent" && (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="landlordName">Landlord Name</Label>
                        <Input
                          id="landlordName"
                          name="landlordName"
                          value={formData.landlordName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="landlordPhone">Landlord Phone</Label>
                        <Input
                          id="landlordPhone"
                          name="landlordPhone"
                          value={formData.landlordPhone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="hasYard"
                        checked={formData.hasYard}
                        onCheckedChange={(checked) => handleCheckboxChange("hasYard", checked as boolean)}
                      />
                      <Label htmlFor="hasYard">Do you have a yard?</Label>
                    </div>
                  </div>

                  {formData.hasYard && (
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="fenced"
                          checked={formData.fenced}
                          onCheckedChange={(checked) => handleCheckboxChange("fenced", checked as boolean)}
                        />
                        <Label htmlFor="fenced">Is your yard fenced?</Label>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => router.push("/adopter")}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Cancel
                </Button>
                <Button type="button" onClick={nextStep}>
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Pet Selection</CardTitle>
                <CardDescription>Select the pet you would like to adopt</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {petId ? (
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <p className="font-medium">{selectedPet?.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {selectedPet?.type} • {selectedPet?.breed}
                        </p>
                      </div>
                      <Button variant="outline" onClick={() => setFormData((prev) => ({ ...prev, selectedPetId: "" }))}>
                        Change
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">Please select a pet from the list below:</p>
                    <div className="space-y-2">
                      {pets.map((pet) => (
                        <div
                          key={pet.id}
                          className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 ${
                            formData.selectedPetId === pet.id ? "border-primary bg-primary/5" : ""
                          }`}
                          onClick={() => handlePetSelection(pet.id)}
                        >
                          <div>
                            <p className="font-medium">{pet.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {pet.type} • {pet.breed}
                            </p>
                          </div>
                          <div
                            className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                              formData.selectedPetId === pet.id
                                ? "border-primary bg-primary text-primary-foreground"
                                : ""
                            }`}
                          >
                            {formData.selectedPetId === pet.id && <Check className="h-3 w-3" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="otherPets">Do you have other pets? If yes, please describe.</Label>
                    <Textarea
                      id="otherPets"
                      name="otherPets"
                      value={formData.otherPets}
                      onChange={handleChange}
                      placeholder="Type of pets, ages, temperament, etc."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">What experience do you have with pets?</Label>
                    <Textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="Previous pet ownership, experience with this breed, etc."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="workSchedule">What is your typical work schedule?</Label>
                    <Textarea
                      id="workSchedule"
                      name="workSchedule"
                      value={formData.workSchedule}
                      onChange={handleChange}
                      placeholder="Hours away from home, work from home, etc."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Why do you want to adopt this pet?</Label>
                    <Textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      placeholder="Your reasons for wanting to adopt this specific pet."
                      required
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="button" variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button type="button" onClick={nextStep} disabled={!formData.selectedPetId || !formData.reason}>
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Review & Submit</CardTitle>
                <CardDescription>Please review your application before submitting</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Personal Information</h3>
                    <div className="mt-2 grid grid-cols-1 gap-2 rounded-lg border p-4 sm:grid-cols-2">
                      <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p>
                          {formData.firstName} {formData.lastName}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p>{formData.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p>{formData.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Address</p>
                        <p>
                          {formData.address}, {formData.city}, {formData.state} {formData.zip}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Housing</p>
                        <p>
                          {formData.housingType} ({formData.ownRent})
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Yard</p>
                        <p>{formData.hasYard ? `Yes${formData.fenced ? ", Fenced" : ", Not Fenced"}` : "No"}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Pet Selection</h3>
                    <div className="mt-2 rounded-lg border p-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Selected Pet</p>
                        <p>
                          {selectedPet?.name} ({selectedPet?.type} - {selectedPet?.breed})
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Additional Information</h3>
                    <div className="mt-2 space-y-4 rounded-lg border p-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Other Pets</p>
                        <p>{formData.otherPets || "None"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Experience</p>
                        <p>{formData.experience || "None provided"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Work Schedule</p>
                        <p>{formData.workSchedule || "None provided"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Reason for Adoption</p>
                        <p>{formData.reason}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeTerms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleCheckboxChange("agreeTerms", checked as boolean)}
                        required
                      />
                      <Label htmlFor="agreeTerms">I agree to the terms and conditions of the adoption process</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeVisit"
                        checked={formData.agreeVisit}
                        onCheckedChange={(checked) => handleCheckboxChange("agreeVisit", checked as boolean)}
                        required
                      />
                      <Label htmlFor="agreeVisit">I agree to a home visit as part of the adoption process</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="button" variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button type="submit" disabled={!formData.agreeTerms || !formData.agreeVisit}>
                  Submit Application
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Application Submitted</CardTitle>
                <CardDescription>Thank you for your adoption application</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md bg-green-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">Application Successful</h3>
                      <div className="mt-2 text-sm text-green-700">
                        <p>
                          Your application has been submitted successfully. Our team will review your application and
                          contact you within 2-3 business days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Next Steps</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        1
                      </span>
                      <span className="ml-2">Application Review (2-3 business days)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        2
                      </span>
                      <span className="ml-2">Phone Interview</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        3
                      </span>
                      <span className="ml-2">Home Visit (if applicable)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        4
                      </span>
                      <span className="ml-2">Meet & Greet with the Pet</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        5
                      </span>
                      <span className="ml-2">Adoption Finalization</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/adopter/status">View Application Status</Link>
                </Button>
              </CardFooter>
            </Card>
          )}
        </form>
      </div>
    </MainLayout>
  )
}
