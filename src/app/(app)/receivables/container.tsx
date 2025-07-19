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

export default function ReceivablesContainer(): React.JSX.Element {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-4">
      <div className="w-full h-full flex gap-2">
        <div className="w-4xl h-full grid grid-cols-2 gap-2">

          {/* Main KPIs */}
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

          {/* Main Progress Bar */}
          <div className="w-full h-full col-span-2">
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
      </div>
      <div className="w-full h-full flex gap-2">

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

        {/* Pie Chart */}
        <div className="w-2xl h-full">
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