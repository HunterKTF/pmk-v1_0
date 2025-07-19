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

export default function CashflowContainer(): React.JSX.Element {
  return (
    <div className="w-full h-full flex gap-2 p-4">
      <div className="h-full w-full flex flex-col gap-2">
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
      <div className="h-full w-2xl flex flex-col gap-2">
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
        <div className="w-full h-[60%]">
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
