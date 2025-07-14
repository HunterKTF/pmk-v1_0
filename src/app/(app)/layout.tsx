// app/dashboard/layout.tsx or similar path

import { createClient } from "@/utils/supabase/server"

import { AppSidebar } from "@/components/app/sidebar/app-sidebar"
import { NavBar } from "@/components/app/sidebar/nav-bar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

type MainLayoutProps = {
  children: React.ReactNode
}

export default async function MainLayout({ children }: MainLayoutProps) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    console.log("No user was found")
  }

  console.log(data);
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
