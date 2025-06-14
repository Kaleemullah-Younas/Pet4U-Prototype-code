"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpDown, Filter, Package, Plus, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { MainLayout } from "@/components/main-layout"
import { useToast } from "@/components/ui/use-toast"
import { Link } from "next/link"

type InventoryItem = {
  id: string
  name: string
  category: string
  quantity: number
  minQuantity: number
  location: string
  lastUpdated: string
  status: "in-stock" | "low-stock" | "out-of-stock"
}

export default function InventoryManagementPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [sortOrder, setSortOrder] = useState("asc")
  const [showFilters, setShowFilters] = useState(false)
  const [stockFilter, setStockFilter] = useState("all")
  
  // Sample inventory data
  const inventoryItems: InventoryItem[] = [
    {
      id: "INV-1234",
      name: "Dog Food - Adult Dry",
      category: "food",
      quantity: 50,
      minQuantity: 10,
      location: "Shelf A1",
      lastUpdated: "2023-11-15",
      status: "in-stock",
    },
    {
      id: "INV-5678",
      name: "Cat Litter - Clumping",
      category: "supplies",
      quantity: 25,
      minQuantity: 5,
      location: "Shelf B2",
      lastUpdated: "2023-11-10",
      status: "in-stock",
    },
    {
      id: "INV-9012",
      name: "Flea & Tick Prevention",
      category: "medication",
      quantity: 5,
      minQuantity: 2,
      location: "Cabinet C3",
      lastUpdated: "2023-11-05",
      status: "low-stock",
    },
    {
      id: "INV-3456",
      name: "Dog Shampoo - Oatmeal",
      category: "supplies",
      quantity: 10,
      minQuantity: 3,
      location: "Shelf B1",
      lastUpdated: "2023-11-01",
      status: "in-stock",
    },
    {
      id: "INV-7890",
      name: "Cat Food - Wet",
      category: "food",
      quantity: 2,
      minQuantity: 5,
      location: "Shelf A2",
      lastUpdated: "2023-10-25",
      status: "out-of-stock",
    },
  ]

  // Sample inventory data
  const inventory = [
    {
      id: "INV-1001",
      name: "Dog Food - Adult",
      category: "Food",
      subcategory: "Dog",
      brand: "Premium Paws",
      unit: "Bag (30 lbs)",
      currentStock: 24,
      minStock: 10,
      location: "Main Storage - Shelf A1",
      lastUpdated: "2023-05-15",
      status: "In Stock",
    },
    {
      id: "INV-1002",
      name: "Cat Food - Adult",
      category: "Food",
      subcategory: "Cat",
      brand: "Feline Feast",
      unit: "Bag (15 lbs)",
      currentStock: 18,
      minStock: 8,
      location: "Main Storage - Shelf A2",
      lastUpdated: "2023-05-14",
      status: "In Stock",
    },
    {
      id: "INV-1003",
      name: "Dog Food - Puppy",
      category: "Food",
      subcategory: "Dog",
      brand: "Premium Paws",
      unit: "Bag (20 lbs)",
      currentStock: 12,
      minStock: 5,
      location: "Main Storage - Shelf A1",
      lastUpdated: "2023-05-10",
      status: "In Stock",
    },
    {
      id: "INV-1004",
      name: "Cat Litter",
      category: "Supplies",
      subcategory: "Cat",
      brand: "Clean Paws",
      unit: "Bag (25 lbs)",
      currentStock: 15,
      minStock: 10,
      location: "Main Storage - Shelf B1",
      lastUpdated: "2023-05-12",
      status: "In Stock",
    },
    {
      id: "INV-1005",
      name: "Flea & Tick Medication - Dogs",
      category: "Medication",
      subcategory: "Dog",
      brand: "PetGuard",
      unit: "Box (3 doses)",
      currentStock: 5,
      minStock: 10,
      location: "Medical Cabinet - Drawer 2",
      lastUpdated: "2023-05-08",
      status: "Low Stock",
    },
    {
      id: "INV-1006",
      name: "Flea & Tick Medication - Cats",
      category: "Medication",
      subcategory: "Cat",
      brand: "PetGuard",
      unit: "Box (3 doses)",
      currentStock: 3,
      minStock: 8,
      location: "Medical Cabinet - Drawer 2",
      lastUpdated: "2023-05-08",
      status: "Low Stock",
    },
    {
      id: "INV-1007",
      name: "Dog Toys - Assorted",
      category: "Supplies",
      subcategory: "Dog",
      brand: "Happy Tails",
      unit: "Each",
      currentStock: 35,
      minStock: 15,
      location: "Supply Room - Bin C3",
      lastUpdated: "2023-05-05",
      status: "In Stock",
    },
    {
      id: "INV-1008",
      name: "Cat Toys - Assorted",
      category: "Supplies",
      subcategory: "Cat",
      brand: "Playful Paws",
      unit: "Each",
      currentStock: 28,
      minStock: 15,
      location: "Supply Room - Bin C4",
      lastUpdated: "2023-05-05",
      status: "In Stock",
    },
    {
      id: "INV-1009",
      name: "Heartworm Medication",
      category: "Medication",
      subcategory: "Dog",
      brand: "HeartShield",
      unit: "Box (6 doses)",
      currentStock: 2,
      minStock: 5,
      location: "Medical Cabinet - Drawer 1",
      lastUpdated: "2023-05-03",
      status: "Low Stock",
    },
    {
      id: "INV-1010",
      name: "Antibiotics - Amoxicillin",
      category: "Medication",
      subcategory: "General",
      brand: "PetMeds",
      unit: "Bottle (30 tablets)",
      currentStock: 0,
      minStock: 3,
      location: "Medical Cabinet - Drawer 3",
      lastUpdated: "2023-05-01",
      status: "Out of Stock",
    },
  ]

  const getFilteredInventory = () => {
    let filtered = inventory

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.brand.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by category
    if (categoryFilter !== "all") {
      filtered = filtered.filter((item) => item.category.toLowerCase() === categoryFilter)
    }

    // Filter by stock status
    if (stockFilter !== "all") {
      filtered = filtered.filter((item) => item.status.toLowerCase().replace(/\s+/g, "-") === stockFilter)
    }

    // Filter by tab
    if (activeTab === "low-stock") {
      return filtered.filter((item) => item.status === "Low Stock" || item.status === "Out of Stock")
    } else if (activeTab === "food") {
      return filtered.filter((item) => item.category === "Food")
    } else if (activeTab === "medication") {
      return filtered.filter((item) => item.category === "Medication")
    } else if (activeTab === "supplies") {
      return filtered.filter((item) => item.category === "Supplies")
    }

    // Sort the filtered inventory
    return filtered.sort((a, b) => {
      let comparison = 0
      if (sortBy === "name") {
        comparison = a.name.localeCompare(b.name)
      } else if (sortBy === "stock") {
        comparison = a.currentStock - b.currentStock
      } else if (sortBy === "category") {
        comparison = a.category.localeCompare(b.category)
      } else if (sortBy === "updated") {
        comparison = new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime()
      }
      return sortOrder === "asc" ? comparison : -comparison
    })
  }

  const filteredInventory = getFilteredInventory()

  const handleItemSelect = (item: any) => {
    setSelectedItem(item)
  }

  const handleStockChange = (change: number) => {
    if (selectedItem) {
      const newStock = Math.max(0, selectedItem.currentStock + change)
      const newStatus = newStock === 0 ? "Out of Stock" : newStock < selectedItem.minStock ? "Low Stock" : "In Stock"
      
      setSelectedItem({
        ...selectedItem,
        currentStock: newStock,
        status: newStatus,
        lastUpdated: new Date().toISOString().split("T")[0],
      })

      toast({
        title: change > 0 ? "Stock Added" : "Stock Removed",
        description: `${Math.abs(change)} ${selectedItem.unit}${Math.abs(change) !== 1 ? "s" : ""} ${change > 0 ? "added to" : "removed from"} inventory.`,
      })
    }
  }

  const toggleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(field)
      setSortOrder("asc")
    }
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Inventory Management</h1>
          <p className="text-muted-foreground">Track and manage shelter supplies, food, and medications</p>
        </div>

        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">All Items</TabsTrigger>
              <TabsTrigger value="low-stock">Low Stock</TabsTrigger>
              <TabsTrigger value="food">Food</TabsTrigger>
              <TabsTrigger value="medication">Medication</TabsTrigger>
              <TabsTrigger value="supplies">Supplies</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search inventory..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 w-[200px]"
              />
            </div>
            <Button variant="outline" size="icon" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
            <Button asChild>
              <Link href="#add-inventory">
                <Plus className="mr-2 h-4 w-4" />
                Add Inventory
              </Link>
            </Button>
          </div>
        </div>

        {showFilters && (
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                <div className="space-y-2">
                  <Label htmlFor="category-filter">Category</Label>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger id="category-filter">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="food">Food</SelectItem>
                      <SelectItem value="medication">Medication</SelectItem>
                      <SelectItem value="supplies">Supplies</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stock-filter">Stock Status</Label>
                  <Select value={stockFilter} onValueChange={setStockFilter}>
                    <SelectTrigger id="stock-filter">
                      <SelectValue placeholder="All Stock Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="in-stock">In Stock</SelectItem>
                      <SelectItem value="low-stock">Low Stock</SelectItem>
                      <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sort-by">Sort By</Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger id="sort-by">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Name</SelectItem>
                      <SelectItem value="stock">Current Stock</SelectItem>
                      <SelectItem value="category">Category</SelectItem>
                      <SelectItem value="updated">Last Updated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sort-order">Sort Order</Label>
                  <Select value={sortOrder} onValueChange={setSortOrder}>
                    <SelectTrigger id="sort-order">
                      <SelectValue placeholder="Sort Order" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asc">Ascending</SelectItem>
                      <SelectItem value="desc">Descending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => {
                setShowFilters(false)
                setCategoryFilter("all")
                setStockFilter("all")
                setSortBy("name")
                setSortOrder("asc")
              }}>
                Reset Filters
              </Button>
              <Button onClick={() => setShowFilters(false)}>Apply Filters</Button>
            </CardFooter>
          </Card>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Items</CardTitle>
                <CardDescription>
                  {filteredInventory.length === 0
                    ? "No items found"
                    : `${filteredInventory.length} item${filteredInventory.length !== 1 ? "s" : ""}`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                    <div className="flex items-center cursor-pointer" onClick={() => toggleSort("name")}>
                      <span>Item</span>
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                    <div className="flex items-center cursor-pointer" onClick={() => toggleSort("category")}>
                      <span>Category</span>
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                    <div className="flex items-center cursor-pointer" onClick={() => toggleSort("stock")}>
                      <span>Stock</span>
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                    <div>Location</div>
                    <div className="flex items-center cursor-pointer" onClick={() => toggleSort("updated")}>
                      <span>Last Updated</span>
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                  {filteredInventory.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center border-t">
                      <Package className="h-12 w-12 text-muted-foreground/50 mb-4" />
                      <p className="text-muted-foreground">No inventory items found</p>
                      {searchQuery && (
                        <Button variant="link" onClick={() => setSearchQuery("")}>
                          Clear search
                        </Button>
                      )}
                    </div>
                  ) : (
                    filteredInventory.map((item) => (
                      <div
                        key={item.id}
                        className={`grid grid-cols-5 gap-4 border-t p-4 cursor-pointer hover:bg-muted/50 ${
                          selectedItem?.id === item.id ? "bg-primary/5" : ""
                        }`}
                        onClick={() => handleItemSelect(item)}
                      >
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.brand}</p>
                        </div>
                        <div>
                          <p>{item.category}</p>
                          <p className="text-xs text-muted-foreground">{item.subcategory}</p>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <p>{item.currentStock} {item.unit}</p>
                            {item.status === "Low Stock" && (
                              <AlertTriangle className="ml-2 h-4 w-4 text-yellow-500" />
                            )}
                            {item.status === "Out of Stock" && (
                              <AlertTriangle className="ml-2 h-4 w-4 text-red-500" />
                            )}
                          </div>
                          <Badge
                            variant="outline"
                            className={
                              item.status === "In Stock"
                                ? "bg-green-50 text-green-700"
                                : item.status === "Out of Stock"
                                ? "bg-red-50 text-red-700"
                                : "bg-yellow-50 text-yellow-700"
                            }
                          >
                            {item.status}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-sm">{item.location}</p>
                        </div>
                        <div>
                          <p className="text-sm">{item.lastUpdated}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-1">
            {selectedItem ? (
              <Card>
                <CardHeader>
                  <CardTitle>{selectedItem.name}</CardTitle>
                  <CardDescription>{selectedItem.id}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Brand:</span>
                      <span>{selectedItem.brand}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Category:</span>
                      <span>{selectedItem.category} / {selectedItem.subcategory}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Unit:</span>
                      <span>{selectedItem.unit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Location:</span>
                      <span>{selectedItem.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Last Updated:</span>
                      <span>{selectedItem.lastUpdated}</span>
                    </div>
                  </div>

                  <div className="rounded-md border p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Current Stock:</span>
                      <Badge
                        variant="outline"
                        className={
                          selectedItem.status === "In Stock"
                            ? "bg-green-50 text-green-700"
                            : selectedItem.status === "Out of Stock"
                            ? "bg-red-50 text-red-700"
                            : "bg-yellow-50 text-yellow-700"
                        }
                      >
                        {selectedItem.status}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-center mb-2">
                      {selectedItem.currentStock} <span className="text-sm font-normal">{selectedItem.unit}</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Minimum Stock: {selectedItem.minStock}</span>
                      <span>{selectedItem.currentStock < selectedItem.minStock ? "Reorder Needed" : "Sufficient"}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div
                        className={`h-2 rounded-full ${
                          selectedItem.status === "In Stock"
                            ? "bg-green-500"
                            : selectedItem.status === "Out of Stock"
                            ? "bg-red-500"
                            : "bg-yellow-500"
                        }`}
                        style={{
                          width: `${Math.min(
                            100,
                            (selectedItem.currentStock / (selectedItem.minStock * 2)) * 100
                          )}%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Update Stock</Label>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => handleStockChange(-1)}
                        disabled={selectedItem.currentStock <= 0}
                      >
                        <Minus className="mr-2 h-4 w-4" />
                        Remove
                      </Button>
                      <Button variant="outline" className="flex-1" onClick={() => handleStockChange(1)}>
                        <Plus className="mr-2 h-4 w-4" />
\
