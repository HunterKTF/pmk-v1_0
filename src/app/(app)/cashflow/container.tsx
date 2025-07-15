'use client'

export default function CashflowContainer(): React.JSX.Element {
  return (
    <div className="w-full h-full flex gap-2 p-4">
      <div className="h-full w-full flex flex-col gap-2">
        <div className="w-full h-full bg-teal-600 rounded-md"></div>
        <div className="w-full h-full flex gap-2">
          <div className="w-full h-full bg-teal-600 rounded-md"></div>
          <div className="w-full h-full bg-teal-600 rounded-md"></div>
        </div>
      </div>
      <div className="h-full w-2xl flex flex-col gap-2">
        <div className="w-full h-full bg-teal-600 rounded-md"></div>
        <div className="w-full h-[60%] bg-teal-600 rounded-md"></div>
      </div>
    </div>
  )
}
