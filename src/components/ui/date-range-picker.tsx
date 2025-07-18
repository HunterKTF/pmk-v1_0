// components/ui/date-range-picker.tsx
'use client'

import { useState } from "react"
import { addDays, format } from "date-fns"
import { CalendarRange } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Calendar } from "./calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover"

type DateRange = {
  from: Date | undefined
  to?: Date | undefined
}

type DateRangePickerProps = {
  className?: string
}

export function DateRangePicker({ className }: DateRangePickerProps) {
  const [date, setDate] = useState<DateRange>({
    from: new Date(),
    to: addDays(new Date(), 30),
  })

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "w-[300px] justify-start text-left font-normal text-sm",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarRange />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Select a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            required
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
