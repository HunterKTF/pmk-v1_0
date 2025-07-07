'use client'

import { useState, useEffect } from "react"
import { ReactNode } from "react"

import { dataCards } from "@/components/app/dashboard/metrics-data"

import { KPICard } from "@/components/app/dashboard/kpi-card"
import { RevenueChart } from "@/components/app/dashboard/revenue-chart"
import { ProfitTable } from "@/components/app/dashboard/profit-table"
import { LiquidityCard } from "@/components/app/dashboard/liquidity-card"
import { ReceivableCard } from "@/components/app/dashboard/receivable-card"
import { ExpensesCard } from "@/components/app/dashboard/expenses-card"

// Define the shape of a KPI metric object
type MetricData = {
  title: string
  value: number | string
  badge: string
  icon: ReactNode
  past: string
  ratio: boolean
}

export default function DashboardContainer() {
  const [cardData, setCardData] = useState<MetricData[]>([])

  useEffect(() => {
    async function fetchData() {
      const result = await dataCards()
      setCardData(result)
    }
    fetchData()
  }, [])

  // Handler to change a specific card's metric
  const updateCardMetric = (index: number, newMetricData: MetricData) => {
    setCardData(prev =>
      prev.map((item, i) => (i === index ? { ...item, ...newMetricData } : item))
    )
  }

  return (
    <div className="w-full h-full">
      <div className="w-full h-[20%] grid grid-flow-col grid-cols-4 px-4 py-1 gap-2">
        {cardData.slice(0, 4).map((item, index) => (
          <KPICard
            key={index}
            title={item.title}
            value={item.value}
            badge={item.badge}
            icon={item.icon}
            past={item.past}
            ratio={item.ratio}
            onSelectMetric={(newMetric: MetricData) => updateCardMetric(index, newMetric)}
            data={cardData}
          />
        ))}
      </div>

      <div className="w-full h-[50%] grid grid-flow-col grid-cols-4 px-4 py-1 gap-2">
        <div className="w-full h-full flex justify-center items-center col-span-2 row-span-2">
          <RevenueChart />
        </div>
        <div className="w-full h-full flex justify-center items-center col-span-2 row-span-2 bg-white rounded-xl border shadow-sm">
          <ProfitTable />
        </div>
      </div>

      <div className="w-full h-[30%] grid grid-flow-col grid-cols-4 px-4 pt-1 pb-4 gap-2">
        <div className="w-full h-full flex justify-center items-center">
          <LiquidityCard />
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <ReceivableCard />
        </div>
        <div className="w-full h-full col-span-2 flex justify-center items-center bg-black/10 rounded-xl">
          <ExpensesCard />
        </div>
      </div>
    </div>
  )
}
