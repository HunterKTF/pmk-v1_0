'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Plus,
  FileSpreadsheet,
  Grid2X2,
  Table2,
  Database,
  SquareArrowOutUpRight,
  MoreVertical
} from "lucide-react"

import { DataTableDemo } from "@/components/app/upload-data/data-table"

export default function UploadDataContainer(): React.JSX.Element {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-4">
      <div className="w-full h-[20%] grid grid-cols-4 gap-2">

        <div className="group w-full h-full flex flex-col items-start justify-between rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm cursor-pointer p-4 transition-colors">
          <div className="w-full flex justify-between">
            <div className="rounded-md bg-gray-100 group-hover:bg-black transition-colors p-2">
              <FileSpreadsheet size={24} className="group-hover:text-white text-black" />
            </div>
            <Plus size={16} />
          </div>
          <span className="text-sm font-bold">Upload Excel File</span>
        </div>

        <div className="group w-full h-full flex flex-col items-start justify-between rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm cursor-pointer p-4 transition-colors">
          <div className="w-full flex justify-between">
            <div className="rounded-md bg-gray-100 group-hover:bg-black transition-colors p-2">
              <Grid2X2 size={24} className="group-hover:text-white text-black" />
            </div>
            <Plus size={16} />
          </div>
          <span className="text-sm font-bold">Upload CSV File</span>
        </div>

        <div className="group w-full h-full flex flex-col items-start justify-between rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm cursor-pointer p-4 transition-colors">
          <div className="w-full flex justify-between">
            <div className="rounded-md bg-gray-100 group-hover:bg-black transition-colors p-2">
              <Table2 size={24} className="group-hover:text-white text-black" />
            </div>
            <Plus size={16} />
          </div>
          <span className="text-sm font-bold">Create Data Table</span>
        </div>

        <div className="group w-full h-full flex flex-col items-start justify-between rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm cursor-pointer p-4 transition-colors">
          <div className="w-full flex justify-between">
            <div className="rounded-md bg-gray-100 group-hover:bg-black transition-colors p-2">
              <Database size={24} className="group-hover:text-white text-black" />
            </div>
            <SquareArrowOutUpRight size={16} />
          </div>
          <span className="text-sm font-bold">Connect Data Lake</span>
        </div>
      </div>

      <h6 className="text-sm font-medium mt-4">Recent Files</h6>
      <div className="w-full h-[16%] grid grid-cols-3 gap-2">

        <div className="group w-full h-full flex items-start justify-between gap-4 rounded-md border border-input bg-background shadow-sm p-4">
          <div className="h-full flex justify-center items-center">
            <div className="rounded-md bg-gray-100 p-2">
              <FileSpreadsheet size={24} className="text-black" />
            </div>
          </div>
          <div className="w-full h-full flex flex-col items-start justify-center">
            <span className="text-sm font-bold">Balance Sheet Report 2024</span>
            <span className="text-xs font-regular">330 kB | XLSX File</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreVertical size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>File Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit File</DropdownMenuItem>
              <DropdownMenuItem>Delete File</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="group w-full h-full flex items-start justify-between gap-4 rounded-md border border-input bg-background shadow-sm p-4">
          <div className="h-full flex justify-center items-center">
            <div className="rounded-md bg-gray-100 p-2">
              <Grid2X2 size={24} className="text-black" />
            </div>
          </div>
          <div className="w-full h-full flex flex-col items-start justify-center">
            <span className="text-sm font-bold">Income Statement Report, May 2024</span>
            <span className="text-xs font-regular">330 kB | XLSX File</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreVertical size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>File Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit File</DropdownMenuItem>
              <DropdownMenuItem>Delete File</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="group w-full h-full flex items-start justify-between gap-4 rounded-md border border-input bg-background shadow-sm p-4">
          <div className="h-full flex justify-center items-center">
            <div className="rounded-md bg-gray-100 p-2">
              <FileSpreadsheet size={24} className="text-black" />
            </div>
          </div>
          <div className="w-full h-full flex flex-col items-start justify-center">
            <span className="text-sm font-bold">Balance Sheet Report 2023</span>
            <span className="text-xs font-regular">330 kB | XLSX File</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreVertical size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>File Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit File</DropdownMenuItem>
              <DropdownMenuItem>Delete File</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>


      <h6 className="text-sm font-medium mt-4">All Files</h6>
      <div className="w-full h-full rounded-md">
        <DataTableDemo />
      </div>
    </div>
  )
}