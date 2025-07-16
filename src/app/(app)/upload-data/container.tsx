'use client'

export default function UploadDataContainer(): React.JSX.Element {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-4">
      <div className="w-full h-[26%] grid grid-cols-4 gap-2">
        <div className="w-full h-full bg-teal-600 rounded-md"></div>
        <div className="w-full h-full bg-teal-600 rounded-md"></div>
        <div className="w-full h-full bg-teal-600 rounded-md"></div>
        <div className="w-full h-full bg-teal-600 rounded-md"></div>
      </div>
      <h6 className="text-sm font-bold">Recent Files</h6>
      <div className="w-full h-[18%] grid grid-cols-3 gap-2">
        <div className="w-full h-full bg-teal-600 rounded-md"></div>
        <div className="w-full h-full bg-teal-600 rounded-md"></div>
        <div className="w-full h-full bg-teal-600 rounded-md"></div>
      </div>
      <h6 className="text-sm font-bold">All Files</h6>
      <div className="w-full h-full bg-teal-600 rounded-md"></div>
    </div>
  )
}