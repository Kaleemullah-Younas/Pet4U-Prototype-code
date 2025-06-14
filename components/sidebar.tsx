"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useSidebar } from "@/components/sidebar-provider"
import {
  ChevronDown,
  ChevronRight,
  Home,
  Users,
  Clipboard,
  Stethoscope,
  Heart,
  ShieldCheck,
  DollarSign,
  PawPrint,
} from "lucide-react"

interface SidebarItemProps {
  href: string
  icon: React.ElementType
  title: string
  isActive?: boolean
}

function SidebarItem({ href, icon: Icon, title, isActive }: SidebarItemProps) {
  return (
    <Button
      variant={isActive ? "secondary" : "ghost"}
      className={cn("w-full justify-start", isActive ? "bg-muted hover:bg-muted" : "")}
      asChild
    >
      <Link href={href}>
        <Icon className="mr-2 h-4 w-4" />
        {title}
      </Link>
    </Button>
  )
}

interface SidebarSectionProps {
  title: string
  icon: React.ElementType
  items: { href: string; title: string }[]
  sectionKey: string
}

function SidebarSection({ title, icon: Icon, items, sectionKey }: SidebarSectionProps) {
  const { activeSection, expandedSections, toggleSection } = useSidebar()
  const pathname = usePathname()
  const isExpanded = expandedSections.includes(sectionKey)
  const isActive = activeSection === sectionKey

  return (
    <div className="space-y-1">
      <Button
        variant="ghost"
        className={cn("w-full justify-between", isActive && !isExpanded ? "bg-muted hover:bg-muted" : "")}
        onClick={() => toggleSection(sectionKey)}
      >
        <span className="flex items-center">
          <Icon className="mr-2 h-4 w-4" />
          {title}
        </span>
        {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </Button>
      {isExpanded && (
        <div className="pl-6 space-y-1">
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              icon={PawPrint}
              title={item.title}
              isActive={pathname === item.href}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function Sidebar() {
  const { isOpen } = useSidebar()
  const pathname = usePathname()

  // Don't show sidebar on auth pages
  if (pathname.startsWith("/auth/")) {
    return null
  }

  if (!isOpen) {
    return null
  }

  const sections = [
    {
      title: "Common",
      sectionKey: "common",
      icon: Home,
      items: [
        { href: "/profile", title: "Profile & Settings" },
        { href: "/notifications", title: "Notifications" },
        { href: "/help", title: "Help & Support" },
      ],
    },
    {
      title: "Adopter Portal",
      sectionKey: "adopter",
      icon: Heart,
      items: [
        { href: "/adopter", title: "Pet Catalogue" },
        { href: "/adopter/application", title: "Adoption Application" },
        { href: "/adopter/appointments", title: "Appointments" },
        { href: "/adopter/status", title: "Application Status" },
      ],
    },
    {
      title: "Volunteer Console",
      sectionKey: "volunteer",
      icon: Users,
      items: [
        { href: "/volunteer", title: "Dashboard" },
        { href: "/volunteer/availability", title: "Submit Availability" },
        { href: "/volunteer/schedule", title: "Shift Schedule" },
        { href: "/volunteer/hours", title: "Log Hours" },
        { href: "/volunteer/notifications", title: "Notifications" },
      ],
    },
    {
      title: "Shelter Staff",
      sectionKey: "staff",
      icon: Clipboard,
      items: [
        { href: "/staff", title: "Dashboard" },
        { href: "/staff/intake", title: "Animal Intake" },
        { href: "/staff/medical", title: "Medical Records" },
        { href: "/staff/adoptions", title: "Adoption Processing" },
        { href: "/staff/appointments", title: "Appointments" },
        { href: "/staff/inventory", title: "Inventory" },
        { href: "/staff/donations", title: "Donations" },
        { href: "/staff/reports", title: "Reports & Analytics" },
      ],
    },
    {
      title: "Veterinary Partner",
      sectionKey: "vet",
      icon: Stethoscope,
      items: [
        { href: "/vet", title: "Dashboard" },
        { href: "/vet/appointments", title: "Appointments" },
        { href: "/vet/treatment", title: "Treatment Records" },
        { href: "/vet/history", title: "Medical History" },
      ],
    },
    {
      title: "Donor & Sponsor",
      sectionKey: "donor",
      icon: DollarSign,
      items: [
        { href: "/donor", title: "Donation Form" },
        { href: "/donor/history", title: "Donation History" },
        { href: "/donor/sponsor", title: "Sponsor Communication" },
      ],
    },
    {
      title: "Administrator",
      sectionKey: "admin",
      icon: ShieldCheck,
      items: [
        { href: "/admin", title: "Dashboard" },
        { href: "/admin/users", title: "User Management" },
        { href: "/admin/settings", title: "System Settings" },
        { href: "/admin/logs", title: "Audit Logs" },
        { href: "/admin/kpi", title: "KPIs & Charts" },
        { href: "/admin/api", title: "API Management" },
      ],
    },
  ]

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r bg-background transition-transform",
        "top-16 h-[calc(100vh-4rem)]",
      )}
    >
      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-4">
          {sections.map((section) => (
            <SidebarSection
              key={section.sectionKey}
              title={section.title}
              icon={section.icon}
              items={section.items}
              sectionKey={section.sectionKey}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
