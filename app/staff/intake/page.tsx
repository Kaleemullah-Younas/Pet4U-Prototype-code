"use client"

import type React from "react"

import { useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { CalendarIcon, Camera, PlusCircle, MinusCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function AnimalIntakePage() {
  const { toast } = useToast()
  const [intakeDate, setIntakeDate] = useState<Date>()
  const [birthDate, setBirthDate] = useState<Date>()
  const [animalType, setAnimalType] = useState("dog")
  const [gender, setGender] = useState("")
  const [spayedNeutered, setSpayedNeutered] = useState(false)
  const [microchipped, setMicrochipped] = useState(false)
  const [vaccinated, setVaccinated] = useState(false)
  const [medicalConditions, setMedicalConditions] = useState<string[]>([])
  const [behavioralNotes, setBehavioralNotes] = useState("")
  const [intakeSource, setIntakeSource] = useState("")
  const [intakeReason, setIntakeReason] = useState("")
  const [photos, setPhotos] = useState<string[]>([])
  const [vaccines, setVaccines] = useState([{ name: "", date: "" }])

  const handleAddVaccine = () => {
    setVaccines([...vaccines, { name: "", date: "" }])
  }

  const handleRemoveVaccine = (index: number) => {
    const newVaccines = [...vaccines]
    newVaccines.splice(index, 1)
    setVaccines(newVaccines)
  }

  const handleVaccineChange = (index: number, field: string, value: string) => {
    const newVaccines = [...vaccines]
    newVaccines[index] = { ...newVaccines[index], [field]: value }
    setVaccines(newVaccines)
  }

  const handleMedicalConditionToggle = (condition: string) => {
    setMedicalConditions((prev) =>
      prev.includes(condition) ? prev.filter((c) => c !== condition) : [...prev, condition],
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Animal Intake Recorded",
      description: "The animal has been successfully added to the system.",
    })
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Animal Intake</h1>
          <p className="text-muted-foreground">Record information about a new animal entering the shelter</p>
        </div>

        <Tabs defaultValue="basic-info">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic-info">Basic Info</TabsTrigger>
            <TabsTrigger value="medical">Medical</TabsTrigger>
            <TabsTrigger value="behavioral">Behavioral</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
          </TabsList>

          <form onSubmit={handleSubmit}>
            <TabsContent value="basic-info" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>Enter the animal's basic details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="animal-name">Name</Label>
                      <Input id="animal-name" placeholder="Animal's name (if known)" />
                    </div>
                    <div className="space-y-2">
                      <Label>Animal Type</Label>
                      <RadioGroup value={animalType} onValueChange={setAnimalType} className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="dog" id="dog" />
                          <Label htmlFor="dog">Dog</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cat" id="cat" />
                          <Label htmlFor="cat">Cat</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other-animal" />
                          <Label htmlFor="other-animal">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  {animalType === "other" && (
                    <div className="space-y-2">
                      <Label htmlFor="other-type">Specify Animal Type</Label>
                      <Input id="other-type" placeholder="e.g., Rabbit, Bird, etc." />
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="breed">Breed</Label>
                      <Input id="breed" placeholder="Breed or mix (if known)" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="color">Color/Markings</Label>
                      <Input id="color" placeholder="Primary color and markings" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Gender</Label>
                      <RadioGroup value={gender} onValueChange={setGender} className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female">Female</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unknown" id="unknown-gender" />
                          <Label htmlFor="unknown-gender">Unknown</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label>Approximate Age</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select age category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="baby">Baby (0-6 months)</SelectItem>
                          <SelectItem value="young">Young (6 months-2 years)</SelectItem>
                          <SelectItem value="adult">Adult (2-8 years)</SelectItem>
                          <SelectItem value="senior">Senior (8+ years)</SelectItem>
                          <SelectItem value="unknown">Unknown</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Estimated Birth Date (if known)</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !birthDate && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {birthDate ? format(birthDate, "PPP") : <span>Select date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={birthDate}
                            onSelect={setBirthDate}
                            initialFocus
                            disabled={(date) => {
                              // Disable future dates
                              const today = new Date()
                              return date > today
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label>Intake Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !intakeDate && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {intakeDate ? format(intakeDate, "PPP") : <span>Select date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={intakeDate} onSelect={setIntakeDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Intake Source</Label>
                    <Select value={intakeSource} onValueChange={setIntakeSource}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select intake source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="stray">Stray/Found</SelectItem>
                        <SelectItem value="owner-surrender">Owner Surrender</SelectItem>
                        <SelectItem value="transfer">Transfer from Another Shelter</SelectItem>
                        <SelectItem value="returned">Returned Adoption</SelectItem>
                        <SelectItem value="born-in-care">Born in Care</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="intake-reason">Reason for Intake</Label>
                    <Textarea
                      id="intake-reason"
                      placeholder="Describe the circumstances of the animal's arrival"
                      value={intakeReason}
                      onChange={(e) => setIntakeReason(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="microchip">Microchip Number (if available)</Label>
                    <Input id="microchip" placeholder="Enter microchip number" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="medical" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Medical Information</CardTitle>
                  <CardDescription>Record the animal's health status and medical history</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="spayed-neutered"
                        checked={spayedNeutered}
                        onCheckedChange={(checked) => setSpayedNeutered(!!checked)}
                      />
                      <Label htmlFor="spayed-neutered">Spayed/Neutered</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="microchipped"
                        checked={microchipped}
                        onCheckedChange={(checked) => setMicrochipped(!!checked)}
                      />
                      <Label htmlFor="microchipped">Microchipped</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="vaccinated"
                        checked={vaccinated}
                        onCheckedChange={(checked) => setVaccinated(!!checked)}
                      />
                      <Label htmlFor="vaccinated">Vaccinated</Label>
                    </div>
                  </div>

                  {vaccinated && (
                    <div className="space-y-4 rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">Vaccination Records</h3>
                        <Button type="button" variant="outline" size="sm" onClick={handleAddVaccine}>
                          <PlusCircle className="mr-2 h-4 w-4" />
                          Add Vaccine
                        </Button>
                      </div>
                      {vaccines.map((vaccine, index) => (
                        <div key={index} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor={`vaccine-name-${index}`}>Vaccine Name</Label>
                            <Input
                              id={`vaccine-name-${index}`}
                              value={vaccine.name}
                              onChange={(e) => handleVaccineChange(index, "name", e.target.value)}
                              placeholder="e.g., Rabies, DHPP"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`vaccine-date-${index}`}>Date Administered</Label>
                            <div className="flex">
                              <Input
                                id={`vaccine-date-${index}`}
                                type="date"
                                value={vaccine.date}
                                onChange={(e) => handleVaccineChange(index, "date", e.target.value)}
                                className="flex-1"
                              />
                              {vaccines.length > 1 && (
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleRemoveVaccine(index)}
                                  className="ml-2"
                                >
                                  <MinusCircle className="h-4 w-4 text-destructive" />
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label>Medical Conditions (check all that apply)</Label>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {[
                        "Dental Issues",
                        "Skin Conditions",
                        "Ear Infections",
                        "Eye Issues",
                        "Respiratory Issues",
                        "Digestive Issues",
                        "Parasites",
                        "Injuries",
                        "Chronic Illness",
                        "None/Healthy",
                      ].map((condition) => (
                        <div key={condition} className="flex items-center space-x-2">
                          <Checkbox
                            id={`condition-${condition}`}
                            checked={medicalConditions.includes(condition)}
                            onCheckedChange={() => handleMedicalConditionToggle(condition)}
                          />
                          <Label htmlFor={`condition-${condition}`}>{condition}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="medical-notes">Medical Notes</Label>
                    <Textarea
                      id="medical-notes"
                      placeholder="Detailed information about the animal's health, medications, treatment plans, etc."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight</Label>
                    <div className="flex">
                      <Input id="weight" type="number" placeholder="Weight" className="flex-1" />
                      <Select defaultValue="lbs">
                        <SelectTrigger className="w-24 ml-2">
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lbs">lbs</SelectItem>
                          <SelectItem value="kg">kg</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="behavioral" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Behavioral Assessment</CardTitle>
                  <CardDescription>Record the animal's temperament and behavior</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Temperament with People</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select temperament" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="friendly">Friendly/Social</SelectItem>
                        <SelectItem value="shy">Shy/Timid</SelectItem>
                        <SelectItem value="fearful">Fearful</SelectItem>
                        <SelectItem value="aggressive">Aggressive</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Temperament with Other Animals</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select temperament" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="good">Good with other animals</SelectItem>
                        <SelectItem value="selective">Selective with other animals</SelectItem>
                        <SelectItem value="not-good">Not good with other animals</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Energy Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select energy level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>House Trained</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="working-on-it">Working on it</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="behavioral-notes">Behavioral Notes</Label>
                    <Textarea
                      id="behavioral-notes"
                      placeholder="Detailed information about the animal's behavior, training needs, special considerations, etc."
                      rows={4}
                      value={behavioralNotes}
                      onChange={(e) => setBehavioralNotes(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Special Needs/Considerations</Label>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {[
                        "Special Diet",
                        "Medication Required",
                        "Separation Anxiety",
                        "Needs Training",
                        "Senior Care",
                        "Medical Monitoring",
                        "Behavioral Support",
                        "None",
                      ].map((need) => (
                        <div key={need} className="flex items-center space-x-2">
                          <Checkbox id={`need-${need}`} />
                          <Label htmlFor={`need-${need}`}>{need}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="photos" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Photos & Media</CardTitle>
                  <CardDescription>Upload photos of the animal</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    <div className="flex h-40 flex-col items-center justify-center rounded-md border border-dashed p-4">
                      <Camera className="mb-2 h-8 w-8 text-muted-foreground" />
                      <div className="space-y-1 text-center">
                        <p className="text-sm font-medium">Upload Photo</p>
                        <p className="text-xs text-muted-foreground">Drag & drop or click to browse</p>
                      </div>
                      <Input type="file" accept="image/*" className="hidden" id="photo-upload" />
                      <Label
                        htmlFor="photo-upload"
                        className="mt-2 cursor-pointer rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground"
                      >
                        Browse
                      </Label>
                    </div>

                    {/* Placeholder for uploaded photos */}
                    {[1, 2].map((index) => (
                      <div
                        key={index}
                        className="relative flex h-40 items-center justify-center rounded-md border bg-muted"
                      >
                        <p className="text-sm text-muted-foreground">Photo {index}</p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-1 top-1 h-6 w-6 rounded-full bg-background/80"
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="photo-notes">Photo Notes</Label>
                    <Textarea
                      id="photo-notes"
                      placeholder="Add notes about the photos (e.g., which is the primary photo, specific markings visible, etc.)"
                      rows={2}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">
                    Complete Intake
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </form>
        </Tabs>
      </div>
    </MainLayout>
  )
}
