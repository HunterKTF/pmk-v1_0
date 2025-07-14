'use client'

import { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { formatCurrency } from "@/components/utilities/helper"
import {
  ChartNoAxesColumnIncreasing,
  ChartNoAxesColumnDecreasing,
  ChevronRightIcon,
} from "lucide-react"

type MetricOption = {
  title: string
  value: number
  badge: string
  icon: ReactNode
  past: string
  ratio: boolean
}

type KPICardProps = MetricOption & {
  onSelectMetric: (option: MetricOption) => void
  data: MetricOption[]
}

export function KPICard({
  title,
  value,
  badge,
  icon,
  past,
  ratio,
  onSelectMetric,
  data,
}: KPICardProps) {
  const isPositive = past.includes("+")

  return (
    <div className="w-full h-full bg-white rounded-xl flex flex-col justify-between border py-2 px-4 shadow-sm">
      <div className="flex justify-between items-center">
        <h3 className="text-md font-medium">{title}</h3>
        <div className="w-10 h-10">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm text-slate-100 w-full h-full flex items-center justify-center bg-slate-700 rounded-md">
              {icon}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="max-h-[300px] w-[200px] overflow-y-auto">
              {data.map((option, index) => (
                <DropdownMenuItem onClick={() => onSelectMetric(option)} key={index}>
                  {option.title}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex justify-between items-end gap-4">
        <h2 className="text-3xl font-light">
          {!ratio && <span className="text-lg">$</span>}
          {formatCurrency(value)}
          {!ratio && <span className="text-xs"> MXN</span>}
        </h2>
        <Badge className={isPositive ? "text-green-500 bg-green-100" : "text-red-500 bg-red-100"}>
          {badge}
        </Badge>
      </div>

      {/* <div className="w-full h-4" /> */}

      <Button variant="outline" className="w-full rounded-md flex justify-between items-center py-2 px-4 border">
        <p className="text-xs flex gap-2 items-end">
          {isPositive ? <ChartNoAxesColumnIncreasing className="size-4" /> : <ChartNoAxesColumnDecreasing className="size-4" />}
          {past} {isPositive ? "more" : "less"} than last month
        </p>
        <ChevronRightIcon size={16} />
      </Button>
    </div>
  )
}
