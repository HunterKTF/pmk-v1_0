'use client'

export default function ReceivablesContainer(): React.JSX.Element {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-4">
      <div className="w-full h-full flex gap-2">
        <div className="w-4xl h-full grid grid-cols-2 gap-2">

          {/* Main KPIs */}
          <div className="w-full h-full bg-teal-600 rounded-md"></div>
          <div className="w-full h-full bg-teal-600 rounded-md"></div>
          <div className="w-full h-full bg-teal-600 rounded-md"></div>
          <div className="w-full h-full bg-teal-600 rounded-md"></div>

          {/* Main Progress Bar */}
          <div className="w-full h-full col-span-2 bg-teal-600 rounded-md"></div>
        </div>

        {/* Main Chart */}
        <div className="w-full h-full bg-teal-600 rounded-md"></div>
      </div>
      <div className="w-full h-full flex gap-2">

        {/* Main Table */}
        <div className="w-full h-full bg-teal-600 rounded-md"></div>

        {/* Pie Chart */}
        <div className="w-2xl h-full bg-teal-600 rounded-md"></div>
      </div>
    </div>
  )
}