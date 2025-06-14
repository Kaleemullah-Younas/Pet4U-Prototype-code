"use client"

import { useState } from "react"
import { Bell, Check, Clock, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function VolunteerNotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Shift Reminder",
      message: "You have a dog walking shift tomorrow at 10:00 AM",
      date: "2023-05-19T10:00:00",
      type: "reminder",
      read: false,
    },
    {
      id: 2,
      title: "Schedule Change",
      message: "Your cat socialization shift on Friday has been rescheduled to Saturday at the same time",
      date: "2023-05-18T14:30:00",
      type: "alert",
      read: false,
    },
    {
      id: 3,
      title: "Training Opportunity",
      message: "New volunteer training session for advanced dog handling on May 25th",
      date: "2023-05-17T09:15:00",
      type: "info",
      read: true,
    },
    {
      id: 4,
      title: "Thank You!",
      message:
        "Thank you for completing 50 volunteer hours this month! Your dedication helps our animals find forever homes.",
      date: "2023-05-15T16:45:00",
      type: "info",
      read: true,
    },
    {
      id: 5,
      title: "Urgent Help Needed",
      message: "We need extra volunteers this weekend for the adoption event. Please sign up if available.",
      date: "2023-05-14T11:20:00",
      type: "alert",
      read: true,
    },
  ])

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "reminder":
        return <Clock className="h-5 w-5 text-cyan-500" />
      case "alert":
        return <Bell className="h-5 w-5 text-amber-500" />
      case "info":
        return <Info className="h-5 w-5 text-green-500" />
      default:
        return <Info className="h-5 w-5 text-gray-500" />
    }
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications & Reminders</h1>
          <p className="text-muted-foreground">Stay updated with your volunteer schedule and shelter announcements</p>
        </div>
        <Button
          variant="outline"
          onClick={markAllAsRead}
          disabled={unreadCount === 0}
          className="flex items-center gap-2"
        >
          <Check className="h-4 w-4" />
          Mark all as read
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="all">
            All
            <Badge variant="secondary" className="ml-2">
              {notifications.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="unread">
            Unread
            <Badge variant="secondary" className="ml-2">
              {unreadCount}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="reminders">Reminders</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6 space-y-4">
          {notifications.map((notification) => (
            <NotificationCard key={notification.id} notification={notification} markAsRead={markAsRead} />
          ))}
        </TabsContent>

        <TabsContent value="unread" className="mt-6 space-y-4">
          {notifications
            .filter((n) => !n.read)
            .map((notification) => (
              <NotificationCard key={notification.id} notification={notification} markAsRead={markAsRead} />
            ))}
          {unreadCount === 0 && (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No unread notifications</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="reminders" className="mt-6 space-y-4">
          {notifications
            .filter((n) => n.type === "reminder")
            .map((notification) => (
              <NotificationCard key={notification.id} notification={notification} markAsRead={markAsRead} />
            ))}
          {notifications.filter((n) => n.type === "reminder").length === 0 && (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No reminders</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function NotificationCard({
  notification,
  markAsRead,
}: {
  notification: {
    id: number
    title: string
    message: string
    date: string
    type: string
    read: boolean
  }
  markAsRead: (id: number) => void
}) {
  const formattedDate = new Date(notification.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <Card className={`transition-all ${notification.read ? "bg-card" : "bg-cyan-50 dark:bg-cyan-950/20"}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            {getIcon(notification.type)}
            <CardTitle className="text-lg">{notification.title}</CardTitle>
          </div>
          <Badge variant={notification.read ? "outline" : "secondary"}>{notification.read ? "Read" : "New"}</Badge>
        </div>
        <CardDescription>{formattedDate}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{notification.message}</p>
      </CardContent>
      <CardFooter className="flex justify-end pt-0">
        {!notification.read && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => markAsRead(notification.id)}
            className="text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50 dark:text-cyan-400 dark:hover:bg-cyan-950/50"
          >
            <Check className="h-4 w-4 mr-1" />
            Mark as read
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
