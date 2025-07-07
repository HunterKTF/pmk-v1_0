'use server'

import clientPromise from "@/lib/mongodb"
import { Document } from "mongodb"

interface FinancialReport extends Document {
  ticker: string
  date: Date
  values: Record<string, number>
}

export async function getMetrics(): Promise<{
  curr_metrics: Record<string, number>
  past_metrics: Record<string, number>
}> {
  const client = await clientPromise
  const db = client.db(process.env.MONGODB_DB)

  const currentYear = new Date().getFullYear()

  const curr_financials = await db
    .collection<FinancialReport>("financial_reports")
    .find({
      ticker: "AAPL",
      date: { $gte: new Date(`${currentYear - 1}-01-01`) },
    })
    .sort({ date: -1 })
    .toArray()

  const prev_financials = await db
    .collection<FinancialReport>("financial_reports")
    .find({
      ticker: "AAPL",
      date: {
        $gte: new Date(`${currentYear - 2}-01-01`),
        $lt: new Date(`${currentYear - 1}-01-01`),
      },
    })
    .sort({ date: -1 })
    .toArray()

  const curr_metrics = curr_financials.reduce<Record<string, number>>(
    (acc, item) => Object.assign(acc, item.values),
    {}
  )

  const past_metrics = prev_financials.reduce<Record<string, number>>(
    (acc, item) => Object.assign(acc, item.values),
    {}
  )

  return { curr_metrics, past_metrics }
}
