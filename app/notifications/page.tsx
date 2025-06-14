"use client"

import { useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bell, Check, Calendar, Heart, AlertCircle, Info, X } from "lucide-react"

// Sample notification data
const allNotifications = [
  {
    id: 1,
    title: "Application Status Update",
    message: "Your adoption application for Max has been approved! Schedule a meet and greet now.",
    date: "Today, 10:30 AM",
    type: "application",
    read: false,
  },
  {
    id: 2,
    title: "Appointment Reminder",
    message: "You have a scheduled visit tomorrow at 2:00 PM to meet Luna.",
    date: "Yesterday, 3:15 PM",
    type: "appointment",
    read: true,
  },
  {
    id: 3,
    title: "New Pet Alert",
    message: "A new Golden Retriever matching your preferences is now available for adoption.",
    date: "May 15, 2023",
    type: "pet",
    read: false,
  },
  {
    id: 4,
    title: "Donation Receipt",
    message: "Thank you for your donation of $50. Your support helps us care for animals in need.",
    date: "May 12, 2023",
    type: "donation",
    read: true,
  },
  {
    id: 5,
    title: "Volunteer Shift Confirmation",
    message: "Your volunteer shift for Saturday, May 20 from 9:00 AM to 1:00 PM has been confirmed.",
    date: "May 10, 2023",
    type: "volunteer",
    read: true,
  },
  {
    id: 6,
    title: "System Maintenance",
    message: "Pet4U will be undergoing maintenance on May 25 from 2:00 AM to 4:00 AM.",
    date: "May 8, 2023",
    type: "system",
    read: true,
  },
]

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(allNotifications)
  const [activeTab, setActiveTab] = useState("all")

  const unreadCount = notifications.filter((notification) => !notification.read).length

  const filteredNotifications =
    activeTab === "all" ? notifications : notifications.filter((notification) => notification.type === activeTab)

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "application":
        return <Check className="h-5 w-5 text-green-500" />
      case "appointment":
        return <Calendar className="h-5 w-5 text-blue-500" />
      case "pet":
        return <Heart className="h-5 w-5 text-rose-500" />
      case "donation":
        return <Heart className="h-5 w-5 text-purple-500" />
      case "volunteer":
        return <Calendar className="h-5 w-5 text-cyan-500" />
      case "system":
        return <AlertCircle className="h-5 w-5 text-amber-500" />
      default:
        return <Info className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
            {unreadCount > 0 && (
              <Button variant="outline" onClick={markAllAsRead}>
                Mark All as Read
              </Button>
            )}
          </div>
          <p className="text-muted-foreground">Stay updated with important information about your account</p>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="all">
                All
                {unreadCount > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {unreadCount}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="application">Applications</TabsTrigger>
              <TabsTrigger value="appointment">Appointments</TabsTrigger>
              <TabsTrigger value="pet">Pets</TabsTrigger>
              <TabsTrigger value="system">System</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  {activeTab === "all"
                    ? "All Notifications"
                    : `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Notifications`}
                </CardTitle>
                <CardDescription>
                  {filteredNotifications.length === 0
                    ? "No notifications to display"
                    : `Showing ${filteredNotifications.length} notification${filteredNotifications.length !== 1 ? "s" : ""}`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredNotifications.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <Bell className="h-12 w-12 text-muted-foreground/50 mb-4" />
                      <p className="text-muted-foreground">No notifications to display</p>
                    </div>
                  ) : (
                    filteredNotifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`flex items-start space-x-4 p-4 rounded-lg ${
                          notification.read ? "bg-card" : "bg-primary/5 border border-primary/20"
                        }`}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className={`font-medium ${!notification.read ? "text-primary" : ""}`}>
                              {notification.title}
                            </p>
                            <p className="text-xs text-muted-foreground">{notification.date}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                        </div>
                        <div className="flex space-x-2">
                          {!notification.read && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => markAsRead(notification.id)}
                            >
                              <Check className="h-4 w-4" />
                              <span className="sr-only">Mark as read</span>
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            onClick={() => deleteNotification(notification.id)}
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}
