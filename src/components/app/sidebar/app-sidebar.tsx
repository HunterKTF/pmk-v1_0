// components/navigation/AppSidebar.tsx
'use client'

import * as React from "react"
import {
  AudioWaveform,
  Banknote,
  Blocks,
  CircleArrowOutUpRight,
  Command,
  GalleryVerticalEnd,
  LayoutDashboard,
  Landmark,
  LifeBuoy,
  Network,
  TableProperties,
} from "lucide-react"

import { ClientSwitcher } from "@/components/app/sidebar/client-switcher"
import { NavMain } from "@/components/app/sidebar/nav-main"
import { NavData } from "@/components/app/sidebar/nav-data"
import { NavSecondary } from "@/components/app/sidebar/nav-secondary"
import { SidebarUpload } from "@/components/app/sidebar/nav-upload"
import { NavUser } from "@/components/app/sidebar/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"

type Client = {
  name: string
  logo: React.ElementType
  plan: string
}

type User = {
  name: string
  email: string
  avatar: string
}

type NavSubItem = {
  title: string
  url: string
}

type NavMainItem = {
  title: string
  url: string
  icon: React.ElementType
  items?: NavSubItem[]
}

type NavSecondaryItem = {
  title: string
  url: string
  icon: React.ElementType
}

type NavDataItem = {
  name: string
  url: string
  icon: React.ElementType
}

type AppSidebarProps = React.HTMLAttributes<HTMLDivElement>

const data: {
  clients: Client[]
  user: User
  navMain: NavMainItem[]
  navSecondary: NavSecondaryItem[]
  data: NavDataItem[]
} = {
  clients: [
    { name: "Acme Inc", logo: GalleryVerticalEnd, plan: "Enterprise" },
    { name: "Acme Corp.", logo: AudioWaveform, plan: "Startup" },
    { name: "Evil Corp.", logo: Command, plan: "Free" },
  ],
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/evilrabbit.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      items: [
        { title: "Revenue", url: "/dashboard/revenue" },
        { title: "Profitability", url: "/dashboard/profitability" },
        { title: "Efficiency", url: "/dashboard/efficiency" },
        { title: "Liquidity", url: "/dashboard/liquidity" },
        { title: "Leverage", url: "/dashboard/leverage" },
      ],
    },
    {
      title: "Cashflow",
      url: "/cashflow",
      icon: CircleArrowOutUpRight,
      items: [
        { title: "Operations", url: "/cashflow/operations" },
        { title: "Investing", url: "/cashflow/investing" },
        { title: "Financing", url: "/cashflow/financing" },
      ],
    },
    {
      title: "Receivables & Debt",
      url: "/receivables",
      icon: Banknote,
    },
    {
      title: "Expense Breakdown",
      url: "/expense-breakdown",
      icon: Blocks,
    },
    {
      title: "Economic Benchmark",
      url: "/economic-benchmark",
      icon: Landmark,
    },
    {
      title: "Pretax ROCE",
      url: "/pretax-roce",
      icon: Network,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
  ],
  data: [
    {
      name: "Upload Data",
      url: "/upload-data",
      icon: TableProperties,
    },
  ],
}

export function AppSidebar(props: AppSidebarProps) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <ClientSwitcher
          clients={data.clients}
          defaultClient={data.clients[0]}
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavData data={data.data} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <SidebarUpload />
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
