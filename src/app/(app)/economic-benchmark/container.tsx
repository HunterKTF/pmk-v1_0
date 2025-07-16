'use client'

export default function EconBenchContainer(): React.JSX.Element {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-4">
      <div className="w-full h-[75vh] flex gap-2">
        <div className="w-full h-full flex flex-col gap-2">
          {/* KPI Grid */}
          <div className="w-full h-[60%] grid grid-cols-2 gap-2">
            <div className="w-full h-full bg-teal-600 rounded-md" />
            <div className="w-full h-full bg-teal-600 rounded-md" />
            <div className="w-full h-full bg-teal-600 rounded-md" />
            <div className="w-full h-full bg-teal-600 rounded-md" />
          </div>

          {/* Main Chart */}
          <div className="w-full h-full bg-teal-600 rounded-md"></div>
        </div>
        <div className="w-full h-full flex gap-2">

          {/* Main vertical */}
          <div className="w-full h-full bg-teal-600 rounded-md"></div>

          {/* Second vertical */}
          <div className="w-full h-full flex flex-col gap-2">
            <div className="w-full h-[50%] bg-teal-600 rounded-md"></div>
            <div className="w-full h-full bg-teal-600 rounded-md"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-[45vh] flex gap-2">
        {/* Main table */}
        <div className="w-full h-full bg-teal-600 rounded-md"></div>
        <div className="w-full h-full flex gap-2">
          {/* View 1 */}
          <div className="w-full h-full bg-teal-600 rounded-md"></div>

          {/* View 2 */}
          <div className="w-full h-full bg-teal-600 rounded-md"></div>
        </div>
      </div>
    </div>
  )
}