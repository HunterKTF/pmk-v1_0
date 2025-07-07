// app/dashboard/layout.tsx or similar path

import { AppSidebar } from "@/components/app/sidebar/app-sidebar"
import { NavBar } from "@/components/app/sidebar/nav-bar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

type MainLayoutProps = {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <NavBar />
        </header>
        <div className="w-full h-full">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
