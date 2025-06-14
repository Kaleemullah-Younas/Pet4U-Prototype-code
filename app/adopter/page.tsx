"use client"

import { useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Heart, Search, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample pet data
const pets = [
  {
    id: 1,
    name: "Max",
    type: "Dog",
    breed: "Golden Retriever",
    age: "2 years",
    gender: "Male",
    image: "/placeholder.svg?height=300&width=300",
    status: "Available",
  },
  {
    id: 2,
    name: "Luna",
    type: "Cat",
    breed: "Siamese",
    age: "1 year",
    gender: "Female",
    image: "/placeholder.svg?height=300&width=300",
    status: "Available",
  },
  {
    id: 3,
    name: "Buddy",
    type: "Dog",
    breed: "Labrador",
    age: "3 years",
    gender: "Male",
    image: "/placeholder.svg?height=300&width=300",
    status: "Available",
  },
  {
    id: 4,
    name: "Whiskers",
    type: "Cat",
    breed: "Maine Coon",
    age: "4 years",
    gender: "Male",
    image: "/placeholder.svg?height=300&width=300",
    status: "Available",
  },
  {
    id: 5,
    name: "Daisy",
    type: "Dog",
    breed: "Beagle",
    age: "2 years",
    gender: "Female",
    image: "/placeholder.svg?height=300&width=300",
    status: "Available",
  },
  {
    id: 6,
    name: "Oliver",
    type: "Cat",
    breed: "Tabby",
    age: "1 year",
    gender: "Male",
    image: "/placeholder.svg?height=300&width=300",
    status: "Available",
  },
]

export default function AdopterPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [petType, setPetType] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  // Filter pets based on search term and pet type
  const filteredPets = pets.filter((pet) => {
    const matchesSearch =
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.breed.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = petType === "all" || pet.type.toLowerCase() === petType.toLowerCase()
    return matchesSearch && matchesType
  })

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Pet Catalogue</h1>
          <p className="text-muted-foreground">Browse available pets and find your perfect companion</p>
        </div>

        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setPetType}>
            <TabsList>
              <TabsTrigger value="all">All Pets</TabsTrigger>
              <TabsTrigger value="dog">Dogs</TabsTrigger>
              <TabsTrigger value="cat">Cats</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search pets..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </div>

        {showFilters && (
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Select defaultValue="any">
                    <SelectTrigger id="age">
                      <SelectValue placeholder="Any age" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any age</SelectItem>
                      <SelectItem value="baby">Baby</SelectItem>
                      <SelectItem value="young">Young</SelectItem>
                      <SelectItem value="adult">Adult</SelectItem>
                      <SelectItem value="senior">Senior</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select defaultValue="any">
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Any gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any gender</SelectItem>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="size">Size</Label>
                  <Select defaultValue="any">
                    <SelectTrigger id="size">
                      <SelectValue placeholder="Any size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any size</SelectItem>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Select defaultValue="any">
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Any location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any location</SelectItem>
                      <SelectItem value="shelter1">Main Shelter</SelectItem>
                      <SelectItem value="shelter2">Downtown Shelter</SelectItem>
                      <SelectItem value="foster">Foster Home</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setShowFilters(false)}>
                Cancel
              </Button>
              <Button>Apply Filters</Button>
            </CardFooter>
          </Card>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPets.map((pet) => (
            <Card key={pet.id} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={pet.image || "/placeholder.svg"} alt={pet.name} fill className="object-cover" />
                <div className="absolute right-2 top-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/80 text-rose-500 hover:bg-white/90 hover:text-rose-600"
                  >
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Add to favorites</span>
                  </Button>
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>{pet.name}</CardTitle>
                  <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                    {pet.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Type:</span> {pet.type}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Age:</span> {pet.age}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Breed:</span> {pet.breed}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Gender:</span> {pet.gender}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <div className="flex w-full gap-2">
                  <Button asChild variant="outline" className="flex-1">
                    <Link href={`/adopter/pet/${pet.id}`}>View Details</Link>
                  </Button>
                  <Button asChild className="flex-1">
                    <Link href={`/adopter/application?petId=${pet.id}`}>Adopt Me</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredPets.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
            <div className="text-muted-foreground">No pets found matching your criteria</div>
            <Button
              variant="link"
              onClick={() => {
                setSearchTerm("")
                setPetType("all")
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </MainLayout>
  )
}
