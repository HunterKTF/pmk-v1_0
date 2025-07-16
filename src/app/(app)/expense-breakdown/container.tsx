'use client'

export default function ExpenseBreakhContainer(): React.JSX.Element {
  return (
    <div className="w-full h-full flex gap-2 p-4">
      <div className="w-2xl h-full flex flex-col gap-2">

        {/* Main Card */}
        <div className="w-full h-[45%] bg-teal-600 rounded-md"></div>

        {/* Controls and Menu */}
        <div className="w-full h-[15%] bg-teal-600 rounded-md"></div>

        {/* Primary KPI */}
        <div className="w-full h-[35%] bg-teal-600 rounded-md"></div>

        {/* KPI Sets */}
        <div className="w-full h-full bg-teal-600 rounded-md"></div>
      </div>
      <div className="w-full h-full flex flex-col gap-2">

        {/* KPI Cards */}
        <div className="w-full h-[59%] flex gap-2">
          <div className="w-full h-full bg-teal-600 rounded-md"></div>
          <div className="w-full h-full bg-teal-600 rounded-md"></div>
          <div className="w-full h-full bg-teal-600 rounded-md"></div>
        </div>

        {/* Main Chart */}
        <div className="w-full h-full bg-teal-600 rounded-md"></div>

        {/* Main Table */}
        <div className="w-full h-full bg-teal-600 rounded-md"></div>
      </div>
      <div className="w-2xl h-full flex flex-col gap-2">
        <div className="w-full h-full bg-teal-600 rounded-md"></div>
        <div className="w-full h-full bg-teal-600 rounded-md"></div>
      </div>
    </div>
  )
}