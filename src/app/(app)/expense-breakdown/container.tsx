'use client'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ExpenseBreakhContainer(): React.JSX.Element {
  return (
    <div className="w-full h-full flex gap-2 p-4">
      <div className="w-2xl h-full flex flex-col gap-2">

        {/* Main Card */}
        <div className="w-full h-[45%]">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter>
              <CardAction></CardAction>
            </CardFooter>
          </Card>
        </div>

        {/* Controls and Menu */}
        <div className="w-full h-[15%] grid grid-cols-4 gap-2">
          <Button variant={"outline"} size={"icon"} className="w-full h-full"></Button>
          <Button variant={"outline"} size={"icon"} className="w-full h-full"></Button>
          <Button variant={"outline"} size={"icon"} className="w-full h-full"></Button>
          <Button variant={"outline"} size={"icon"} className="w-full h-full"></Button>
        </div>

        {/* Primary KPI */}
        <div className="w-full h-[35%]">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter>
              <CardAction></CardAction>
            </CardFooter>
          </Card>
        </div>

        {/* KPI Sets */}
        <div className="w-full h-full">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter>
              <CardAction></CardAction>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-2">

        {/* KPI Cards */}
        <div className="w-full grid grid-cols-3 h-[59%] gap-2">
          <div className="w-full h-full">
            <Card className="w-full h-full">
              <CardHeader>
                <CardTitle></CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter>
                <CardAction></CardAction>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full h-full">
            <Card className="w-full h-full">
              <CardHeader>
                <CardTitle></CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter>
                <CardAction></CardAction>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full h-full">
            <Card className="w-full h-full">
              <CardHeader>
                <CardTitle></CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter>
                <CardAction></CardAction>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Main Chart */}
        <div className="w-full h-full">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter>
              <CardAction></CardAction>
            </CardFooter>
          </Card>
        </div>

        {/* Main Table */}
        <div className="w-full h-full">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter>
              <CardAction></CardAction>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="w-xl h-full flex flex-col gap-2">
        <div className="w-full h-full">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter>
              <CardAction></CardAction>
            </CardFooter>
          </Card>
        </div>
        <div className="w-full h-full">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter>
              <CardAction></CardAction>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}