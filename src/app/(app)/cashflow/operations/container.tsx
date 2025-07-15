'use client'

export default function OperationsContainer(): React.JSX.Element {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-4">
      <div className="w-full h-[70vh] flex gap-2">
        <div className="h-full w-full flex flex-col gap-2">
          {/* KPI Cards */}
          <div className="w-full h-[50%] flex gap-2">
            <div className="w-full h-full bg-teal-600 rounded-md"></div>
            <div className="w-full h-full bg-teal-600 rounded-md"></div>
            
          </div>

          {/* Main Chart */}
          <div className="w-full h-full bg-teal-600 rounded-md"></div>
        </div>

        {/* Side Chart */}
        <div className="h-full w-2xl bg-teal-600 rounded-md"></div>
      </div>

      {/* Table Area */}
      <div className="w-full h-[55vh] bg-teal-600 rounded-md"></div>
    </div>
  )
}
