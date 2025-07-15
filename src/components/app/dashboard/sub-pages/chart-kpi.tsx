'use client'

import { TrendingDown, TrendingUp } from "lucide-react"

import { formatCurrency } from "@/components/utilities/helper"

type MetricOption = {
  title: string
  value: number
  badge: string
  past: string
  ratio: boolean
}

export function ChartKPI({
  title,
  value,
  badge,
  past,
  ratio,
}: MetricOption) {
  const isPositive = past.includes("+")

  return (
    <div className="w-full h-full bg-white rounded-xl flex flex-col justify-between border py-2 px-4 shadow-sm">
      <div className="flex justify-between items-center pt-2">
        <h3 className="text-sm font-regular">{title}</h3>
      </div>

      <div className="flex justify-between items-end gap-4">
        <h2 className="text-3xl font-regular">
          {!ratio && <span className="text-lg">$</span>}
          {formatCurrency(value)}
          {!ratio && <span className="text-xs"> MXN</span>}
        </h2>
      </div>

      <div className="w-full">
        {isPositive && (
          <p className="flex text-sm text-green-500 font-medium gap-2">
            {past} ({badge}) <TrendingUp />
          </p>
        )}
        {!isPositive && (
          <p className="flex text-sm text-red-500 font-medium gap-2">
            {past} ({badge}) <TrendingDown />
          </p>
        )}
      </div>
    </div>
  )
}