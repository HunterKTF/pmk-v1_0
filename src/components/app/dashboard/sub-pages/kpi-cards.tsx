'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { EllipsisVertical } from "lucide-react"

import { formatCurrency } from "@/components/utilities/helper"

type MetricOption = {
  title: string
  desc: string
  value: number
  badge: string
  past: string
  ratio: boolean
}

export function KPICards({
  title,
  desc,
  value,
  badge,
  past,
  ratio,
}: MetricOption) {
  const isPositive = past.includes("+")

  return (
    <div className="w-full h-full bg-white rounded-xl flex flex-col justify-between border py-2 px-4 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h3 className="text-md font-medium">{title}</h3>
          <h6 className="text-xs font-bold">{desc}</h6>
        </div>
        <Button variant="secondary" size="icon" className="size-6">
          <EllipsisVertical />
        </Button>
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

      <div className="w-full">
        <p className="text-sm font-medium">
          {past} more than previous year
        </p>
      </div>
    </div>
  )
}
