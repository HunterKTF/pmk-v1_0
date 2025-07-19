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

export default function EconBenchContainer(): React.JSX.Element {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-4">
      <div className="w-full h-[75vh] flex gap-2">
        <div className="w-full h-full flex flex-col gap-2">
          {/* KPI Grid */}
          <div className="w-full h-[60%] grid grid-cols-2 gap-2">
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

          {/* Main vertical */}
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

          {/* Second vertical */}
          <div className="w-full h-full flex flex-col gap-2">
            <div className="w-full h-[50%]">
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
      </div>
      <div className="w-full h-[45vh] flex gap-2">

        {/* Main table */}
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
        <div className="w-full h-full flex gap-2">

          {/* View 1 */}
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

          {/* View 2 */}
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
    </div>
  )
}