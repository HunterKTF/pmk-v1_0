'use client'

import { KPICards } from "@/components/app/dashboard/sub-pages/kpi-cards"

export default function ProfitabilityContainer(): React.JSX.Element {
  return (
    <div className="h-full flex flex-col gap-2 px-4 pt-1 pb-4">
      <div className="w-full h-[15vh] flex gap-2">
        <KPICards title="Net Profit" desc="Monthly" value={100} badge="50%" past="+123" ratio={false} />
        <div className="w-full h-full bg-teal-500 rounded-md" />
        <div className="w-full h-full bg-teal-500 rounded-md" />
        <div className="w-full h-full bg-teal-500 rounded-md" />
      </div>
      <div className="w-full h-[45vh] flex gap-2">
        <div className="w-sm h-full flex flex-col gap-2">
          <div className="h-full w-full bg-teal-500 rounded-md" />
          <div className="h-full w-full bg-teal-500 rounded-md" />
          <div className="h-full w-full bg-teal-500 rounded-md" />
        </div>
        <div className="w-full f-full bg-teal-500 rounded-md" />
      </div>
      <div className="w-full h-[35vh] flex gap-2">
        <div className="w-full h-full bg-teal-500 rounded-md" />
        <div className="w-full h-full bg-teal-500 rounded-md" />
      </div>
      <div className="w-full h-[20vh] flex gap-2">
        <div className="w-full h-full bg-teal-500 rounded-md" />
        <div className="w-full h-full bg-teal-500 rounded-md" />
        <div className="w-full h-full bg-teal-500 rounded-md" />
      </div>
    </div>
  )
}

{/* <div className="flex flex-col items-center justify-center h-full">
  <h1 className="text-2xl font-bold mb-4">Profitability Dashboard</h1>
  <p className="text-gray-600">This is a placeholder for the profitability dashboard.</p>
</div> */}