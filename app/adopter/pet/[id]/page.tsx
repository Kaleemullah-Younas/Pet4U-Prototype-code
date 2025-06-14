"use client"

import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Heart, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Sample pet data - in a real app, this would come from an API
const pet = {
  id: 1,
  name: "Max",
  type: "Dog",
  breed: "Golden Retriever",
  age: "2 years",
  gender: "Male",
  size: "Large",
  color: "Golden",
  image: "/placeholder.svg?height=400&width=600",
  status: "Available",
  description:
    "Max is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks. He's great with children and other dogs, and would make a perfect addition to an active family. He's house-trained and knows basic commands like sit, stay, and come.",
  medicalInfo: "Max is up-to-date on all vaccinations, neutered, and microchipped. He has no known health issues.",
  behavior:
    "Max is friendly, energetic, and social. He gets along well with other dogs and children. He can be a bit excitable when meeting new people but calms down quickly.",
  requirements:
    "Max needs a home with a yard where he can run and play. He requires regular exercise and mental stimulation. Experience with large breeds is preferred but not required.",
  shelterInfo: {
    name: "Main Shelter",
    address: "123 Adoption Lane, Petville, CA 12345",
    phone: "(555) 123-4567",
  },
}

export default function PetDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the pet data based on the ID
  const petId = params.id

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/adopter">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">{pet.name}</h1>
          <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
            {pet.status}
          </Badge>
        </div>

        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src={pet.image || "/placeholder.svg"} alt={pet.name} fill className="object-cover" />
            </div>

            <Tabs defaultValue="about">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="medical">Medical</TabsTrigger>
                <TabsTrigger value="behavior">Behavior</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="space-y-4 pt-4">
                <p>{pet.description}</p>
              </TabsContent>
              <TabsContent value="medical" className="space-y-4 pt-4">
                <p>{pet.medicalInfo}</p>
              </TabsContent>
              <TabsContent value="behavior" className="space-y-4 pt-4">
                <p>{pet.behavior}</p>
              </TabsContent>
              <TabsContent value="requirements" className="space-y-4 pt-4">
                <p>{pet.requirements}</p>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Type</p>
                      <p className="font-medium">{pet.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Breed</p>
                      <p className="font-medium">{pet.breed}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Age</p>
                      <p className="font-medium">{pet.age}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Gender</p>
                      <p className="font-medium">{pet.gender}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Size</p>
                      <p className="font-medium">{pet.size}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Color</p>
                      <p className="font-medium">{pet.color}</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-sm text-muted-foreground">Shelter Information</p>
                    <p className="font-medium">{pet.shelterInfo.name}</p>
                    <p className="text-sm">{pet.shelterInfo.address}</p>
                    <p className="text-sm">{pet.shelterInfo.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-2">
              <Button asChild>
                <Link href={`/adopter/application?petId=${pet.id}`}>Start Adoption Process</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={`/adopter/appointments?petId=${pet.id}`}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Visit
                </Link>
              </Button>
              <Button variant="ghost" className="text-rose-500 hover:text-rose-600 hover:bg-rose-50">
                <Heart className="mr-2 h-4 w-4" />
                Add to Favorites
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
