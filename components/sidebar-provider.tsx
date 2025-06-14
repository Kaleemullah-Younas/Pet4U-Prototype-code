"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

type SidebarContextType = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  activeSection: string | null
  setActiveSection: React.Dispatch<React.SetStateAction<string | null>>
  expandedSections: string[]
  toggleSection: (section: string) => void
}

const SidebarContext = React.createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(true)
  const [activeSection, setActiveSection] = React.useState<string | null>(null)
  const [expandedSections, setExpandedSections] = React.useState<string[]>([])
  const pathname = usePathname()

  // Set active section based on current path
  React.useEffect(() => {
    if (pathname) {
      const section = pathname.split("/")[1]
      if (section) {
        setActiveSection(section)
        if (!expandedSections.includes(section)) {
          setExpandedSections((prev) => [...prev, section])
        }
      }
    }
  }, [pathname, expandedSections])

  const toggleSection = React.useCallback((section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }, [])

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        activeSection,
        setActiveSection,
        expandedSections,
        toggleSection,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}
