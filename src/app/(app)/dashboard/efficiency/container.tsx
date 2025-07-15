'use client'

import { KPICards } from "@/components/app/dashboard/sub-pages/kpi-cards"
import { ChartKPI } from "@/components/app/dashboard/sub-pages/chart-kpi"
import { ChartAreaInteractive } from "@/components/app/dashboard/sub-pages/chart-area-interactive"
import { ChartBarInteractive } from "@/components/app/dashboard/sub-pages/bar-chart-interactive"
import { InfoTable } from "@/components/app/dashboard/sub-pages/info-table"
import { ChartAreaGradient } from "@/components/app/dashboard/sub-pages/chart-area-gradient"

export default function EfficiencyContainer(): React.JSX.Element {
  return (
    <div className="h-full flex flex-col gap-2 px-4 pt-1 pb-4">
      <div className="w-full h-[15vh] flex gap-2">
        <KPICards title="Total Revenue" desc="Monthly" value={100} badge="50%" past="+123" ratio={false} />
        <KPICards title="Total Revenue" desc="Quarter" value={100} badge="50%" past="+123" ratio={false} />
        <KPICards title="Total Revenue" desc="Semi-annual" value={100} badge="50%" past="+123" ratio={false} />
        <KPICards title="Total Revenue" desc="Annual" value={100} badge="50%" past="+123" ratio={false} />
      </div>
      <div className="w-full h-[45vh] flex gap-2">
        <div className="w-sm h-full flex flex-col gap-2">
          <ChartKPI title="First KPI" value={56231.12} badge="12%" past="+24" ratio={false} />
          <ChartKPI title="First KPI" value={72812.13} badge="12%" past="+24" ratio={false} />
          <ChartKPI title="First KPI" value={92712.24} badge="12%" past="+24" ratio={false} />
        </div>
        <div className="flex flex-1 min-w-0">
          <ChartAreaInteractive />
        </div>
      </div>
      <div className="w-full h-[45vh] flex gap-2">
        <div className="flex min-w-0 w-[100%]">
          <ChartBarInteractive />
        </div>
        <div className="flex min-w-0 w-[100%]">
          <InfoTable />
        </div>
      </div>
      <div className="w-full h-[38vh] flex gap-2">
        <div className="flex min-w-0 w-[100%]">
          <ChartAreaGradient />
        </div>
        <div className="flex min-w-0 w-[100%]">
          <ChartAreaGradient />
        </div>
        <div className="flex min-w-0 w-[100%]">
          <ChartAreaGradient />
        </div>
      </div>
    </div>
  )
}
