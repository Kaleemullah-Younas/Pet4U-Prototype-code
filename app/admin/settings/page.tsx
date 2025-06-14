"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  BellRing,
  Check,
  Cloud,
  Cog,
  Clock,
  Database,
  ImageIcon,
  Lock,
  Mail,
  RefreshCw,
  Save,
  Server,
  Settings,
} from "lucide-react"

export default function SystemSettingsPage() {
  // Define the form schemas for each tab
  const generalFormSchema = z.object({
    siteName: z.string().min(2).max(50),
    timezone: z.string(),
    dateFormat: z.string(),
    contactEmail: z.string().email(),
    address: z.string(),
    maintenanceMode: z.boolean().default(false),
    allowAdoptionApplications: z.boolean().default(true),
    allowVolunteerRegistrations: z.boolean().default(true),
  })

  const emailFormSchema = z.object({
    emailProvider: z.string(),
    fromEmail: z.string().email(),
    smtpHost: z.string(),
    smtpPort: z.string(),
    smtpUsername: z.string(),
    smtpPassword: z.string(),
    useTls: z.boolean().default(true),
  })

  const notificationsFormSchema = z.object({
    newAdoptionApplication: z.boolean().default(true),
    applicationStatusUpdates: z.boolean().default(true),
    newUserRegistration: z.boolean().default(true),
    newDonation: z.boolean().default(true),
    medicalUpdates: z.boolean().default(true),
    lowInventoryAlerts: z.boolean().default(true),
    failedLoginAttempts: z.boolean().default(true),
    systemMaintenance: z.boolean().default(true),
    databaseBackupFailures: z.boolean().default(false),
  })

  const securityFormSchema = z.object({
    twoFactorAuth: z.boolean().default(true),
    passwordMinLength: z.string(),
    sessionTimeout: z.string(),
    databaseEncryption: z.boolean().default(true),
    automaticBackups: z.boolean().default(true),
    dataRetentionPolicy: z.boolean().default(false),
  })

  // Create form instances for each tab
  const generalForm = useForm<z.infer<typeof generalFormSchema>>({
    resolver: zodResolver(generalFormSchema),
    defaultValues: {
      siteName: "Pet4U Animal Adoption System",
      timezone: "america/new_york",
      dateFormat: "mm/dd/yyyy",
      contactEmail: "contact@pet4u.example.com",
      address: "123 Main Street, Suite 101, Anytown, ST 12345",
      maintenanceMode: false,
      allowAdoptionApplications: true,
      allowVolunteerRegistrations: true,
    },
  })

  const emailForm = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      emailProvider: "smtp",
      fromEmail: "noreply@pet4u.example.com",
      smtpHost: "smtp.example.com",
      smtpPort: "587",
      smtpUsername: "pet4u@example.com",
      smtpPassword: "••••••••••••",
      useTls: true,
    },
  })

  const notificationsForm = useForm<z.infer<typeof notificationsFormSchema>>({
    resolver: zodResolver(notificationsFormSchema),
    defaultValues: {
      newAdoptionApplication: true,
      applicationStatusUpdates: true,
      newUserRegistration: true,
      newDonation: true,
      medicalUpdates: true,
      lowInventoryAlerts: true,
      failedLoginAttempts: true,
      systemMaintenance: true,
      databaseBackupFailures: false,
    },
  })

  const securityForm = useForm<z.infer<typeof securityFormSchema>>({
    resolver: zodResolver(securityFormSchema),
    defaultValues: {
      twoFactorAuth: true,
      passwordMinLength: "12",
      sessionTimeout: "60",
      databaseEncryption: true,
      automaticBackups: true,
      dataRetentionPolicy: false,
    },
  })

  // Form submission handlers
  function onGeneralSubmit(values: z.infer<typeof generalFormSchema>) {
    console.log(values)
    // Save general settings
  }

  function onEmailSubmit(values: z.infer<typeof emailFormSchema>) {
    console.log(values)
    // Save email settings
  }

  function onNotificationsSubmit(values: z.infer<typeof notificationsFormSchema>) {
    console.log(values)
    // Save notification settings
  }

  function onSecuritySubmit(values: z.infer<typeof securityFormSchema>) {
    console.log(values)
    // Save security settings
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">System Configuration</h1>
        <p className="text-muted-foreground">Manage system settings and configuration</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="md:col-span-1">
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-2">
              <Settings className="h-4 w-4 text-muted-foreground" />
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Cog className="mr-2 h-4 w-4" />
                General Settings
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Mail className="mr-2 h-4 w-4" />
                Email Configuration
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <BellRing className="mr-2 h-4 w-4" />
                Notification Settings
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Lock className="mr-2 h-4 w-4" />
                Security Settings
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <ImageIcon className="mr-2 h-4 w-4" />
                Media Settings
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Database className="mr-2 h-4 w-4" />
                Database Settings
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Cloud className="mr-2 h-4 w-4" />
                Cloud Storage
              </Button>
            </div>

            <div className="pt-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">System Status</div>
                <div className="flex items-center space-x-1">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  <span className="text-xs text-green-600">Online</span>
                </div>
              </div>
              <div className="text-xs text-muted-foreground mt-1">Last checked: 10 minutes ago</div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <Tabs defaultValue="general">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-4">
              <CardHeader className="px-6 py-0">
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Configure basic system settings</CardDescription>
              </CardHeader>

              <CardContent className="px-6 space-y-4">
                <Form {...generalForm}>
                  <form onSubmit={generalForm.handleSubmit(onGeneralSubmit)} className="space-y-4">
                    <FormField
                      control={generalForm.control}
                      name="siteName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Site Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>The name of your organization shown throughout the system</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={generalForm.control}
                        name="timezone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Timezone</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select timezone" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="america/new_york">America/New_York (EDT)</SelectItem>
                                <SelectItem value="america/chicago">America/Chicago (CDT)</SelectItem>
                                <SelectItem value="america/denver">America/Denver (MDT)</SelectItem>
                                <SelectItem value="america/los_angeles">America/Los_Angeles (PDT)</SelectItem>
                                <SelectItem value="etc/utc">UTC</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormDescription>Default timezone for dates and times</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={generalForm.control}
                        name="dateFormat"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date Format</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select date format" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="mm/dd/yyyy">MM/DD/YYYY</SelectItem>
                                <SelectItem value="dd/mm/yyyy">DD/MM/YYYY</SelectItem>
                                <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                                <SelectItem value="month-dd-yyyy">Month DD, YYYY</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormDescription>How dates are displayed throughout the system</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={generalForm.control}
                      name="contactEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Email</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} />
                          </FormControl>
                          <FormDescription>Primary contact email for system notifications</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={generalForm.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization Address</FormLabel>
                          <FormControl>
                            <Textarea rows={3} {...field} />
                          </FormControl>
                          <FormDescription>Physical address for your organization</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-2">
                      <FormField
                        control={generalForm.control}
                        name="maintenanceMode"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                            <div className="space-y-0.5">
                              <FormLabel>Maintenance Mode</FormLabel>
                              <FormDescription>Enable maintenance mode to restrict access to the site</FormDescription>
                            </div>
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={generalForm.control}
                        name="allowAdoptionApplications"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                            <div className="space-y-0.5">
                              <FormLabel>Adoption Applications</FormLabel>
                              <FormDescription>Allow users to submit new adoption applications</FormDescription>
                            </div>
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={generalForm.control}
                        name="allowVolunteerRegistrations"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                            <div className="space-y-0.5">
                              <FormLabel>Volunteer Registrations</FormLabel>
                              <FormDescription>Allow new volunteer registrations</FormDescription>
                            </div>
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    <CardFooter className="border-t px-0 pt-4 flex justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Last saved: Today at 10:30 AM
                      </div>
                      <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700">
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </CardFooter>
                  </form>
                </Form>
              </CardContent>
            </TabsContent>

            <TabsContent value="email" className="space-y-4">
              <CardHeader className="px-6 py-0">
                <CardTitle>Email Configuration</CardTitle>
                <CardDescription>Configure email server settings</CardDescription>
              </CardHeader>

              <CardContent className="px-6 space-y-4">
                <Form {...emailForm}>
                  <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={emailForm.control}
                        name="emailProvider"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Provider</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select provider" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="smtp">SMTP Server</SelectItem>
                                <SelectItem value="sendgrid">SendGrid</SelectItem>
                                <SelectItem value="mailgun">Mailgun</SelectItem>
                                <SelectItem value="aws-ses">Amazon SES</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={emailForm.control}
                        name="fromEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>From Email Address</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="border rounded-md p-4 space-y-4">
                      <h3 className="text-sm font-medium">SMTP Configuration</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={emailForm.control}
                          name="smtpHost"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>SMTP Host</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={emailForm.control}
                          name="smtpPort"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>SMTP Port</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={emailForm.control}
                          name="smtpUsername"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>SMTP Username</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={emailForm.control}
                          name="smtpPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>SMTP Password</FormLabel>
                              <FormControl>
                                <Input type="password" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={emailForm.control}
                        name="useTls"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                            <div className="space-y-0.5">
                              <FormLabel>TLS Encryption</FormLabel>
                              <FormDescription>Use TLS encryption for SMTP connection</FormDescription>
                            </div>
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button type="button" variant="outline">
                        <Mail className="mr-2 h-4 w-4" />
                        Test Connection
                      </Button>
                    </div>

                    <CardFooter className="border-t px-0 pt-4 flex justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Last saved: May 15, 2025
                      </div>
                      <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700">
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </CardFooter>
                  </form>
                </Form>
              </CardContent>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4">
              <CardHeader className="px-6 py-0">
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Manage system notifications and alerts</CardDescription>
              </CardHeader>

              <CardContent className="px-6">
                <Form {...notificationsForm}>
                  <form onSubmit={notificationsForm.handleSubmit(onNotificationsSubmit)} className="space-y-4">
                    <div className="border rounded-md p-4">
                      <h3 className="text-sm font-medium mb-4">Email Notifications</h3>

                      <FormField
                        control={notificationsForm.control}
                        name="newAdoptionApplication"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-lg border p-3 mb-2">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">New Adoption Application</FormLabel>
                              <FormDescription>Send email when a new adoption application is submitted</FormDescription>
                            </div>
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={notificationsForm.control}
                        name="applicationStatusUpdates"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-lg border p-3 mb-2">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">Application Status Updates</FormLabel>
                              <FormDescription>Send email when an application status changes</FormDescription>
                            </div>
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={notificationsForm.control}
                        name="newUserRegistration"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-lg border p-3 mb-2">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">New User Registration</FormLabel>
                              <FormDescription>Send email when a new user registers</FormDescription>
                            </div>
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={notificationsForm.control}
                        name="newDonation"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-lg border p-3 mb-2">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">New Donation</FormLabel>
                              <FormDescription>Send email when a new donation is received</FormDescription>
                            </div>
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={notificationsForm.control}
                        name="medicalUpdates"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-lg border p-3 mb-2">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">Medical Updates</FormLabel>
                              <FormDescription>Send email when a pet's medical record is updated</FormDescription>
                            </div>
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="border rounded-md p-4">
                      <h3 className="text-sm font-medium mb-4">System Alerts</h3>

                      <FormField
                        control={notificationsForm.control}
                        name="lowInventoryAlerts"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-lg border p-3 mb-2">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">Low Inventory Alerts</FormLabel>
                              <FormDescription>Alert when inventory items are below threshold</FormDescription>
                            </div>
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={notificationsForm.control}
                        name="failedLoginAttempts"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-lg border p-3 mb-2">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">Failed Login Attempts</FormLabel>
                              <FormDescription>Alert on multiple failed login attempts</FormDescription>
                            </div>
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={notificationsForm.control}
                        name="systemMaintenance"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-lg border p-3 mb-2">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">System Maintenance</FormLabel>
                              <FormDescription>Send alerts before scheduled maintenance</FormDescription>
                            </div>
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={notificationsForm.control}
                        name="databaseBackupFailures"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-lg border p-3 mb-2">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">Database Backup Failures</FormLabel>
                              <FormDescription>Alert when database backups fail</FormDescription>
                            </div>
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    <CardFooter className="border-t px-0 pt-4 flex justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4" />
                        Schedule notification times
                      </div>
                      <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700">
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </CardFooter>
                  </form>
                </Form>
              </CardContent>
            </TabsContent>

            <TabsContent value="security" className="space-y-4">
              <CardHeader className="px-6 py-0">
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Configure security and access policies</CardDescription>
              </CardHeader>

              <CardContent className="px-6">
                <Form {...securityForm}>
                  <form onSubmit={securityForm.handleSubmit(onSecuritySubmit)} className="space-y-4">
                    <div className="border rounded-md p-4">
                      <h3 className="text-sm font-medium mb-4">Authentication</h3>

                      <FormField
                        control={securityForm.control}
                        name="twoFactorAuth"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-lg border p-3 mb-2">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">Two-Factor Authentication</FormLabel>
                              <FormDescription>Require 2FA for administrator accounts</FormDescription>
                            </div>
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <FormField
                          control={securityForm.control}
                          name="passwordMinLength"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Minimum Password Length</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select length" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="8">8 characters</SelectItem>
                                  <SelectItem value="10">10 characters</SelectItem>
                                  <SelectItem value="12">12 characters</SelectItem>
                                  <SelectItem value="16">16 characters</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={securityForm.control}
                          name="sessionTimeout"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Session Timeout</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select timeout" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="15">15 minutes</SelectItem>
                                  <SelectItem value="30">30 minutes</SelectItem>
                                  <SelectItem value="60">60 minutes</SelectItem>
                                  <SelectItem value="120">2 hours</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="border rounded-md p-4">
                      <h3 className="text-sm font-medium mb-4">Data Protection</h3>

                      <FormField
                        control={securityForm.control}
                        name="databaseEncryption"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-lg border p-3 mb-2">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">Database Encryption</FormLabel>
                              <FormDescription>Encrypt sensitive data in database</FormDescription>
                            </div>
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={securityForm.control}
                        name="automaticBackups"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-lg border p-3 mb-2">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">Automatic Backups</FormLabel>
                              <FormDescription>Schedule automatic database backups</FormDescription>
                            </div>
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={securityForm.control}
                        name="dataRetentionPolicy"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-lg border p-3 mb-2">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">Data Retention Policy</FormLabel>
                              <FormDescription>Automatically archive old records</FormDescription>
                            </div>
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    <CardFooter className="border-t px-0 pt-4 flex justify-between">
                      <Button type="button" variant="outline">
                        <Lock className="mr-2 h-4 w-4" />
                        Security Audit
                      </Button>
                      <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700">
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </CardFooter>
                  </form>
                </Form>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>System Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between py-1 border-b">
                <span className="text-muted-foreground">Version</span>
                <span className="font-medium">Pet4U v2.5.3</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span className="text-muted-foreground">Environment</span>
                <span className="font-medium">Production</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span className="text-muted-foreground">PHP Version</span>
                <span className="font-medium">8.2.7</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span className="text-muted-foreground">Database</span>
                <span className="font-medium">MySQL 8.0.33</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span className="text-muted-foreground">Server</span>
                <span className="font-medium">NGINX 1.24.0</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-muted-foreground">Last Update</span>
                <span className="font-medium">May 10, 2025</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <RefreshCw className="mr-2 h-4 w-4" />
              Check for Updates
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Server Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <Label>CPU Usage</Label>
                  <span className="text-sm font-medium">23%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-600 rounded-full" style={{ width: "23%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <Label>Memory Usage</Label>
                  <span className="text-sm font-medium">42%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-amber-500 rounded-full" style={{ width: "42%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <Label>Disk Usage</Label>
                  <span className="text-sm font-medium">67%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-amber-600 rounded-full" style={{ width: "67%" }}></div>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Server className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Database Connection</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <Check className="h-3.5 w-3.5 mr-1" />
                    Connected
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Cloud className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Storage Service</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <Check className="h-3.5 w-3.5 mr-1" />
                    Online
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Email Service</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <Check className="h-3.5 w-3.5 mr-1" />
                    Operational
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">
              <Server className="mr-2 h-4 w-4" />
              View Details
            </Button>
            <Button variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Status
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
