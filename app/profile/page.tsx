"use client"

import type React from "react"

import { useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/components/ui/use-toast"
import { User, Mail, Phone, Home, Shield, LogOut } from "lucide-react"

export default function ProfilePage() {
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    bio: "Animal lover and proud pet parent.",
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    applicationUpdates: true,
    marketingEmails: false,
  })

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNotificationChange = (name: string, checked: boolean) => {
    setNotificationSettings((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSaveProfile = () => {
    setIsEditing(false)
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
    })
  }

  const handleSaveNotifications = () => {
    toast({
      title: "Notification Settings Updated",
      description: "Your notification preferences have been saved.",
    })
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Profile & Settings</h1>
          <p className="text-muted-foreground">Manage your account information and preferences</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details and contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-12 w-12 text-primary" />
                    </div>
                    {isEditing && (
                      <Button size="sm" className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0">
                        <span className="sr-only">Change avatar</span>
                        <span>+</span>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleProfileChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleProfileChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground">
                        <Mail className="h-4 w-4" />
                      </span>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={profileData.email}
                        onChange={handleProfileChange}
                        disabled={!isEditing}
                        className="rounded-l-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground">
                        <Phone className="h-4 w-4" />
                      </span>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={profileData.phone}
                        onChange={handleProfileChange}
                        disabled={!isEditing}
                        className="rounded-l-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground">
                      <Home className="h-4 w-4" />
                    </span>
                    <Input
                      id="address"
                      name="address"
                      value={profileData.address}
                      onChange={handleProfileChange}
                      disabled={!isEditing}
                      className="rounded-l-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={profileData.city}
                      onChange={handleProfileChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      name="state"
                      value={profileData.state}
                      onChange={handleProfileChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input
                      id="zip"
                      name="zip"
                      value={profileData.zip}
                      onChange={handleProfileChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={profileData.bio}
                    onChange={handleProfileChange}
                    disabled={!isEditing}
                    rows={3}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {isEditing ? (
                  <>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSaveProfile}>Save Changes</Button>
                  </>
                ) : (
                  <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                )}
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage how you receive notifications and updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="emailNotifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                    </div>
                    <Switch
                      id="emailNotifications"
                      checked={notificationSettings.emailNotifications}
                      onCheckedChange={(checked) => handleNotificationChange("emailNotifications", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="smsNotifications">SMS Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications via text message</p>
                    </div>
                    <Switch
                      id="smsNotifications"
                      checked={notificationSettings.smsNotifications}
                      onCheckedChange={(checked) => handleNotificationChange("smsNotifications", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="applicationUpdates">Application Updates</Label>
                      <p className="text-sm text-muted-foreground">Receive updates about your adoption applications</p>
                    </div>
                    <Switch
                      id="applicationUpdates"
                      checked={notificationSettings.applicationUpdates}
                      onCheckedChange={(checked) => handleNotificationChange("applicationUpdates", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="marketingEmails">Marketing Emails</Label>
                      <p className="text-sm text-muted-foreground">Receive newsletters and promotional content</p>
                    </div>
                    <Switch
                      id="marketingEmails"
                      checked={notificationSettings.marketingEmails}
                      onCheckedChange={(checked) => handleNotificationChange("marketingEmails", checked)}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSaveNotifications}>Save Preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your account security and password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="text-destructive" onClick={() => {}}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out of All Devices
                </Button>
                <Button
                  onClick={() => {
                    toast({
                      title: "Password Updated",
                      description: "Your password has been changed successfully.",
                    })
                  }}
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Update Password
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}
