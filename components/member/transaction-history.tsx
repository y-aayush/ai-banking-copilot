"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpRight, ArrowDownLeft, Download } from "lucide-react"
import { useAuth } from "@/components/auth/auth-context"

interface Transaction {
  id: string
  date: string
  description: string
  amount: number
  type: "debit" | "credit"
  category?: string
  balance?: number
}

export function TransactionHistory() {
  const { user } = useAuth()
  const [searchTerm, setSearchTerm] = useState("")
  const [filterMonth, setFilterMonth] = useState("all")
  const [filterType, setFilterType] = useState("all")

  // Joshua's complete transaction history from Bluevine statements + additional June transactions
  const transactions: Transaction[] = [
    // June 2025 transactions (beyond statement dates)
    {
      id: "txn-2025-06-08",
      date: "2025-06-08",
      description: "Cash Deposit ATM",
      amount: 5200.0,
      type: "credit",
      category: "Income",
      balance: 52814.17,
    },
    {
      id: "txn-2025-06-07-2",
      date: "2025-06-07",
      description: "Wire fee",
      amount: -15.0,
      type: "debit",
      category: "Fees",
      balance: 47614.17,
    },
    {
      id: "txn-2025-06-07-1",
      date: "2025-06-07",
      description: "Wire Payroll",
      amount: -11500.0,
      type: "debit",
      category: "Payroll",
      balance: 47629.17,
    },
    {
      id: "txn-2025-06-06",
      date: "2025-06-06",
      description: "Payment Lowe's Companies, Inc.",
      amount: -142.87,
      type: "debit",
      category: "Office",
      balance: 59129.17,
    },
    {
      id: "txn-2025-06-05-2",
      date: "2025-06-05",
      description: "Wire fee",
      amount: -10.0,
      type: "debit",
      category: "Fees",
      balance: 59272.04,
    },
    {
      id: "txn-2025-06-05-1",
      date: "2025-06-05",
      description: "Wire to Jenny's Furniture Rental and Staging",
      amount: -1250.0,
      type: "debit",
      category: "Office",
      balance: 59282.04,
    },
    {
      id: "txn-2025-06-04",
      date: "2025-06-04",
      description: "ACH Payment Amex",
      amount: -612.45,
      type: "debit",
      category: "Credit Card",
      balance: 60532.04,
    },
    {
      id: "txn-2025-06-03",
      date: "2025-06-03",
      description: "APPLE.COM 9856505256 CA, USA",
      amount: -19.99,
      type: "debit",
      category: "Subscriptions",
      balance: 61144.49,
    },
    {
      id: "txn-2025-06-02",
      date: "2025-06-02",
      description: "Payment Colorado Springs Utilities",
      amount: -215.32,
      type: "debit",
      category: "Utilities",
      balance: 61164.48,
    },
    {
      id: "txn-2025-06-01-2",
      date: "2025-06-01",
      description: "Wire fee",
      amount: -15.0,
      type: "debit",
      category: "Fees",
      balance: 61379.8,
    },
    {
      id: "txn-2025-06-01-1",
      date: "2025-06-01",
      description: "Wire to AC HERITAGE PROPERTIES Rent Payment",
      amount: -6400.0,
      type: "debit",
      category: "Rent",
      balance: 61394.8,
    },

    // May 2025 transactions (from actual Bluevine statement)
    {
      id: "txn-2025-05-31-2",
      date: "2025-05-31",
      description: "Cash Deposit ATM",
      amount: 8700.0,
      type: "credit",
      category: "Income",
      balance: 47614.17,
    },
    {
      id: "txn-2025-05-31-1",
      date: "2025-05-31",
      description: "Wire fee",
      amount: -15.0,
      type: "debit",
      category: "Fees",
      balance: 38929.17,
    },
    {
      id: "txn-2025-05-29-2",
      date: "2025-05-29",
      description: "Wire to Ellen Brennan",
      amount: -1900.0,
      type: "debit",
      category: "Contractors",
      balance: 38944.17,
    },
    {
      id: "txn-2025-05-29-1",
      date: "2025-05-29",
      description: "Payment Lowe's Companies, Inc.",
      amount: -101.25,
      type: "debit",
      category: "Office",
      balance: 40844.17,
    },
    {
      id: "txn-2025-05-28",
      date: "2025-05-28",
      description: "Payment to Denver Commercial Outlet",
      amount: -302.42,
      type: "debit",
      category: "Office",
      balance: 40945.42,
    },
    {
      id: "txn-2025-05-27-2",
      date: "2025-05-27",
      description: "Wire fee",
      amount: -10.0,
      type: "debit",
      category: "Fees",
      balance: 41247.84,
    },
    {
      id: "txn-2025-05-27-1",
      date: "2025-05-27",
      description: "Wire to Madeline Erickson",
      amount: -1100.0,
      type: "debit",
      category: "Contractors",
      balance: 41257.84,
    },
    {
      id: "txn-2025-05-26-4",
      date: "2025-05-26",
      description: "Payment to Chief Petroleum Co",
      amount: -500.0,
      type: "debit",
      category: "Utilities",
      balance: 42357.84,
    },
    {
      id: "txn-2025-05-26-3",
      date: "2025-05-26",
      description: "APPLE.COM 9423805231 CA, USA",
      amount: -14.99,
      type: "debit",
      category: "Subscriptions",
      balance: 42857.84,
    },
    {
      id: "txn-2025-05-26-2",
      date: "2025-05-26",
      description: "KEAP.COM 8668000098 AZ, +18668000004, USA",
      amount: -50.42,
      type: "debit",
      category: "Software",
      balance: 42872.83,
    },
    {
      id: "txn-2025-05-26-1",
      date: "2025-05-26",
      description: "Deposit PayPal",
      amount: 4500.0,
      type: "credit",
      category: "Income",
      balance: 42923.25,
    },
    {
      id: "txn-2025-05-25",
      date: "2025-05-25",
      description: "Payment The Home Depot, Inc.",
      amount: -182.52,
      type: "debit",
      category: "Office",
      balance: 38423.25,
    },
    {
      id: "txn-2025-05-23",
      date: "2025-05-23",
      description: "Wire fee",
      amount: -15.0,
      type: "debit",
      category: "Fees",
      balance: 38605.77,
    },
    {
      id: "txn-2025-05-21",
      date: "2025-05-21",
      description: "Wire Payroll",
      amount: -11520.0,
      type: "debit",
      category: "Payroll",
      balance: 38620.77,
    },
    {
      id: "txn-2025-05-20-2",
      date: "2025-05-20",
      description: "Payment to King Soopers",
      amount: -85.41,
      type: "debit",
      category: "Office",
      balance: 50140.77,
    },
    {
      id: "txn-2025-05-20-1",
      date: "2025-05-20",
      description: "Wire fee",
      amount: -10.0,
      type: "debit",
      category: "Fees",
      balance: 50226.18,
    },
    {
      id: "txn-2025-05-19-4",
      date: "2025-05-19",
      description: "Wire to Elias Whitney",
      amount: -1000.0,
      type: "debit",
      category: "Contractors",
      balance: 50236.18,
    },
    {
      id: "txn-2025-05-19-3",
      date: "2025-05-19",
      description: "APPLE.COM 9455898584 CA, USA",
      amount: -19.99,
      type: "debit",
      category: "Subscriptions",
      balance: 51236.18,
    },
    {
      id: "txn-2025-05-19-2",
      date: "2025-05-19",
      description: "Amazon.com 4619548054 WA, USA",
      amount: -100.81,
      type: "debit",
      category: "Office",
      balance: 51256.17,
    },
    {
      id: "txn-2025-05-19-1",
      date: "2025-05-19",
      description: "Cash Deposit ATM",
      amount: 6750.0,
      type: "credit",
      category: "Income",
      balance: 51356.98,
    },
    {
      id: "txn-2025-05-15",
      date: "2025-05-15",
      description: "FACEBK ADS META*9893",
      amount: -501.32,
      type: "debit",
      category: "Marketing",
      balance: 44606.98,
    },
    {
      id: "txn-2025-05-14-3",
      date: "2025-05-14",
      description: "VONAGE Billing +18443659460 USA",
      amount: -182.42,
      type: "debit",
      category: "Utilities",
      balance: 45108.3,
    },
    {
      id: "txn-2025-05-14-2",
      date: "2025-05-14",
      description: "Cash Deposit ATM",
      amount: 7000.0,
      type: "credit",
      category: "Income",
      balance: 45290.72,
    },
    {
      id: "txn-2025-05-14-1",
      date: "2025-05-14",
      description: "Payment Lowe's Companies, Inc.",
      amount: -130.0,
      type: "debit",
      category: "Office",
      balance: 38290.72,
    },
    {
      id: "txn-2025-05-12-2",
      date: "2025-05-12",
      description: "Payment to Liberty Mutual Insurance",
      amount: -1111.0,
      type: "debit",
      category: "Insurance",
      balance: 38420.72,
    },
    {
      id: "txn-2025-05-12-1",
      date: "2025-05-12",
      description: "Stripe Deposit",
      amount: 8880.31,
      type: "credit",
      category: "Income",
      balance: 39531.72,
    },
    {
      id: "txn-2025-05-09-2",
      date: "2025-05-09",
      description: "Check Deposit xx98",
      amount: 8000.0,
      type: "credit",
      category: "Income",
      balance: 30651.41,
    },
    {
      id: "txn-2025-05-09-1",
      date: "2025-05-09",
      description: "Certified Check Deposit",
      amount: 7900.0,
      type: "credit",
      category: "Income",
      balance: 22651.41,
    },
    {
      id: "txn-2025-05-08",
      date: "2025-05-08",
      description: "Wire fee",
      amount: -15.0,
      type: "debit",
      category: "Fees",
      balance: 14751.41,
    },
    {
      id: "txn-2025-05-07-3",
      date: "2025-05-07",
      description: "Wire Payroll",
      amount: -11125.03,
      type: "debit",
      category: "Payroll",
      balance: 14766.41,
    },
    {
      id: "txn-2025-05-07-2",
      date: "2025-05-07",
      description: "KEAP.COM 8668000098 AZ, +18668000004, USA",
      amount: -190.0,
      type: "debit",
      category: "Software",
      balance: 25891.44,
    },
    {
      id: "txn-2025-05-07-1",
      date: "2025-05-07",
      description: "Payment Colorado Springs Utilities",
      amount: -229.41,
      type: "debit",
      category: "Utilities",
      balance: 26081.44,
    },
    {
      id: "txn-2025-05-06-3",
      date: "2025-05-06",
      description: "APPLE.COM 9423805231 CA, USA",
      amount: -49.99,
      type: "debit",
      category: "Subscriptions",
      balance: 26310.85,
    },
    {
      id: "txn-2025-05-06-2",
      date: "2025-05-06",
      description: "Payment The Home Depot, Inc.",
      amount: -201.42,
      type: "debit",
      category: "Office",
      balance: 26360.84,
    },
    {
      id: "txn-2025-05-06-1",
      date: "2025-05-06",
      description: "Comcast Billing +18009346489 CO",
      amount: -202.12,
      type: "debit",
      category: "Utilities",
      balance: 26562.26,
    },
    {
      id: "txn-2025-05-02-2",
      date: "2025-05-02",
      description: "Payment to Verizon Business",
      amount: -212.42,
      type: "debit",
      category: "Utilities",
      balance: 26764.38,
    },
    {
      id: "txn-2025-05-02-1",
      date: "2025-05-02",
      description: "ACH Payment Amex",
      amount: -503.42,
      type: "debit",
      category: "Credit Card",
      balance: 26976.8,
    },
    {
      id: "txn-2025-05-01-4",
      date: "2025-05-01",
      description: "Wire fee",
      amount: -10.0,
      type: "debit",
      category: "Fees",
      balance: 27480.22,
    },
    {
      id: "txn-2025-05-01-3",
      date: "2025-05-01",
      description: "Wire to Jenny's Furniture Rental and Staging",
      amount: -1012.32,
      type: "debit",
      category: "Office",
      balance: 27490.22,
    },
    {
      id: "txn-2025-05-01-2",
      date: "2025-05-01",
      description: "Wire fee",
      amount: -15.0,
      type: "debit",
      category: "Fees",
      balance: 28502.54,
    },
    {
      id: "txn-2025-05-01-1",
      date: "2025-05-01",
      description: "Wire to AC HERITAGE PROPERTIES Rent Payment",
      amount: -6400.0,
      type: "debit",
      category: "Rent",
      balance: 28517.54,
    },

    // April 2025 transactions (from actual Bluevine statement)
    {
      id: "txn-2025-04-30",
      date: "2025-04-30",
      description: "Wire fee",
      amount: -10.0,
      type: "debit",
      category: "Fees",
      balance: 34902.54,
    },
    {
      id: "txn-2025-04-29-5",
      date: "2025-04-29",
      description: "Wire to Sammy Wall",
      amount: -742.0,
      type: "debit",
      category: "Contractors",
      balance: 34912.54,
    },
    {
      id: "txn-2025-04-29-4",
      date: "2025-04-29",
      description: "GOOGLE*ADS XX32 CA, USA",
      amount: -302.14,
      type: "debit",
      category: "Marketing",
      balance: 35654.54,
    },
    {
      id: "txn-2025-04-29-3",
      date: "2025-04-29",
      description: "Payment The Home Depot, Inc.",
      amount: -132.53,
      type: "debit",
      category: "Office",
      balance: 35956.68,
    },
    {
      id: "txn-2025-04-29-2",
      date: "2025-04-29",
      description: "Amazon.com 4825348232 WA, USA",
      amount: -85.02,
      type: "debit",
      category: "Office",
      balance: 36089.21,
    },
    {
      id: "txn-2025-04-29-1",
      date: "2025-04-29",
      description: "Wire fee",
      amount: -10.0,
      type: "debit",
      category: "Fees",
      balance: 36174.23,
    },
    {
      id: "txn-2025-04-28-4",
      date: "2025-04-28",
      description: "Wire to Elias Whitney",
      amount: -1100.0,
      type: "debit",
      category: "Contractors",
      balance: 36184.23,
    },
    {
      id: "txn-2025-04-28-3",
      date: "2025-04-28",
      description: "GOOGLE*ADS XX32 CA, USA",
      amount: -56.85,
      type: "debit",
      category: "Marketing",
      balance: 37284.23,
    },
    {
      id: "txn-2025-04-28-2",
      date: "2025-04-28",
      description: "FACEBK ADS META*9893",
      amount: -441.08,
      type: "debit",
      category: "Marketing",
      balance: 37341.08,
    },
    {
      id: "txn-2025-04-28-1",
      date: "2025-04-28",
      description: "Wire fee",
      amount: -15.0,
      type: "debit",
      category: "Fees",
      balance: 37782.16,
    },
    {
      id: "txn-2025-04-25",
      date: "2025-04-25",
      description: "Wire Payroll",
      amount: -11054.05,
      type: "debit",
      category: "Payroll",
      balance: 37797.16,
    },
    {
      id: "txn-2025-04-23",
      date: "2025-04-23",
      description: "Cash Deposit ATM",
      amount: 4100.0,
      type: "credit",
      category: "Income",
      balance: 48851.21,
    },
    {
      id: "txn-2025-04-22",
      date: "2025-04-22",
      description: "Wire fee",
      amount: -10.0,
      type: "debit",
      category: "Fees",
      balance: 44751.21,
    },
    {
      id: "txn-2025-04-21-4",
      date: "2025-04-21",
      description: "Wire to Elias Whitney",
      amount: -800.0,
      type: "debit",
      category: "Contractors",
      balance: 44761.21,
    },
    {
      id: "txn-2025-04-21-3",
      date: "2025-04-21",
      description: "Amazon.com 4825348232 WA, USA",
      amount: -232.99,
      type: "debit",
      category: "Office",
      balance: 45561.21,
    },
    {
      id: "txn-2025-04-21-2",
      date: "2025-04-21",
      description: "Payment The Home Depot, Inc.",
      amount: -245.87,
      type: "debit",
      category: "Office",
      balance: 45794.2,
    },
    {
      id: "txn-2025-04-21-1",
      date: "2025-04-21",
      description: "Payment to King Soopers",
      amount: -198.54,
      type: "debit",
      category: "Office",
      balance: 46040.07,
    },
    {
      id: "txn-2025-04-18",
      date: "2025-04-18",
      description: "Check Deposit xx98",
      amount: 4500.0,
      type: "credit",
      category: "Income",
      balance: 46238.61,
    },
    {
      id: "txn-2025-04-17",
      date: "2025-04-17",
      description: "Payment Lowe's Companies, Inc.",
      amount: -482.42,
      type: "debit",
      category: "Office",
      balance: 41738.61,
    },
    {
      id: "txn-2025-04-14-2",
      date: "2025-04-14",
      description: "Payment to Denver Commercial Outlet",
      amount: -481.54,
      type: "debit",
      category: "Office",
      balance: 42221.03,
    },
    {
      id: "txn-2025-04-14-1",
      date: "2025-04-14",
      description: "Deposit PayPal",
      amount: 3200.0,
      type: "credit",
      category: "Income",
      balance: 42702.57,
    },
    {
      id: "txn-2025-04-12-2",
      date: "2025-04-12",
      description: "Certified Check Deposit",
      amount: 8500.0,
      type: "credit",
      category: "Income",
      balance: 39502.57,
    },
    {
      id: "txn-2025-04-12-1",
      date: "2025-04-12",
      description: "Wire fee",
      amount: -15.0,
      type: "debit",
      category: "Fees",
      balance: 31002.57,
    },
    {
      id: "txn-2025-04-09-4",
      date: "2025-04-09",
      description: "Wire Payroll",
      amount: -11301.91,
      type: "debit",
      category: "Payroll",
      balance: 31017.57,
    },
    {
      id: "txn-2025-04-09-3",
      date: "2025-04-09",
      description: "VONAGE Billing +18443659460 USA",
      amount: -119.23,
      type: "debit",
      category: "Utilities",
      balance: 42319.48,
    },
    {
      id: "txn-2025-04-09-2",
      date: "2025-04-09",
      description: "Cash Deposit ATM",
      amount: 6500.0,
      type: "credit",
      category: "Income",
      balance: 42438.71,
    },
    {
      id: "txn-2025-04-09-1",
      date: "2025-04-09",
      description: "Check Deposit xx98",
      amount: 5800.0,
      type: "credit",
      category: "Income",
      balance: 35938.71,
    },
    {
      id: "txn-2025-04-06-4",
      date: "2025-04-06",
      description: "Stripe Deposit",
      amount: 7641.61,
      type: "credit",
      category: "Income",
      balance: 30138.71,
    },
    {
      id: "txn-2025-04-06-3",
      date: "2025-04-06",
      description: "Payment to Liberty Mutual Insurance",
      amount: -1712.0,
      type: "debit",
      category: "Insurance",
      balance: 22497.1,
    },
    {
      id: "txn-2025-04-06-2",
      date: "2025-04-06",
      description: "Comcast Billing +18009346489 CO",
      amount: -196.05,
      type: "debit",
      category: "Utilities",
      balance: 24209.1,
    },
    {
      id: "txn-2025-04-06-1",
      date: "2025-04-06",
      description: "Payment to Verizon Business",
      amount: -202.15,
      type: "debit",
      category: "Utilities",
      balance: 24405.15,
    },
    {
      id: "txn-2025-04-04-3",
      date: "2025-04-04",
      description: "Wire fee",
      amount: -10.0,
      type: "debit",
      category: "Fees",
      balance: 24617.3,
    },
    {
      id: "txn-2025-04-04-2",
      date: "2025-04-04",
      description: "KEAP.COM 8668000098 AZ, +18668000004, USA",
      amount: -150.0,
      type: "debit",
      category: "Software",
      balance: 24627.3,
    },
    {
      id: "txn-2025-04-04-1",
      date: "2025-04-04",
      description: "Payment Lowe's Companies, Inc.",
      amount: -130.0,
      type: "debit",
      category: "Office",
      balance: 24777.3,
    },
    {
      id: "txn-2025-04-03-3",
      date: "2025-04-03",
      description: "Wire to Jenny's Furniture Rental and Staging",
      amount: -1202.53,
      type: "debit",
      category: "Office",
      balance: 24907.3,
    },
    {
      id: "txn-2025-04-03-2",
      date: "2025-04-03",
      description: "ACH Payment Amex",
      amount: -503.23,
      type: "debit",
      category: "Credit Card",
      balance: 26109.83,
    },
    {
      id: "txn-2025-04-03-1",
      date: "2025-04-03",
      description: "APPLE.COM 9856505256 CA, USA",
      amount: -11.99,
      type: "debit",
      category: "Subscriptions",
      balance: 26613.06,
    },
    {
      id: "txn-2025-04-02-2",
      date: "2025-04-02",
      description: "Payment Colorado Springs Utilities",
      amount: -200.04,
      type: "debit",
      category: "Utilities",
      balance: 26625.05,
    },
    {
      id: "txn-2025-04-02-1",
      date: "2025-04-02",
      description: "Wire fee",
      amount: -15.0,
      type: "debit",
      category: "Fees",
      balance: 26825.09,
    },
    {
      id: "txn-2025-04-01",
      date: "2025-04-01",
      description: "Wire to AC HERITAGE PROPERTIES Rent Payment",
      amount: -6400.0,
      type: "debit",
      category: "Rent",
      balance: 26840.09,
    },

    // March 2025 transactions (from actual Bluevine statement)
    {
      id: "txn-2025-03-31-2",
      date: "2025-03-31",
      description: "Payment The Home Depot, Inc.",
      amount: -205.03,
      type: "debit",
      category: "Office",
      balance: 33435.12,
    },
    {
      id: "txn-2025-03-31-1",
      date: "2025-03-31",
      description: "Wire fee",
      amount: -5.0,
      type: "debit",
      category: "Fees",
      balance: 33640.15,
    },
    {
      id: "txn-2025-03-27-2",
      date: "2025-03-27",
      description: "Wire to Joan Freeman",
      amount: -75.0,
      type: "debit",
      category: "Contractors",
      balance: 33645.15,
    },
    {
      id: "txn-2025-03-27-1",
      date: "2025-03-27",
      description: "Cash Deposit ATM",
      amount: 4750.0,
      type: "credit",
      category: "Income",
      balance: 33720.15,
    },
    {
      id: "txn-2025-03-26-2",
      date: "2025-03-26",
      description: "Payment to Denver Commercial Outlet",
      amount: -312.42,
      type: "debit",
      category: "Office",
      balance: 28970.15,
    },
    {
      id: "txn-2025-03-26-1",
      date: "2025-03-26",
      description: "Wire fee",
      amount: -5.0,
      type: "debit",
      category: "Fees",
      balance: 29282.57,
    },
    {
      id: "txn-2025-03-22",
      date: "2025-03-22",
      description: "Wire Payroll",
      amount: -11055.0,
      type: "debit",
      category: "Payroll",
      balance: 29287.57,
    },
    {
      id: "txn-2025-03-21-2",
      date: "2025-03-21",
      description: "Cash Withdrawal ATM",
      amount: -150.0,
      type: "debit",
      category: "Withdrawal",
      balance: 40342.57,
    },
    {
      id: "txn-2025-03-21-1",
      date: "2025-03-21",
      description: "Cash Deposit ATM",
      amount: 2300.0,
      type: "credit",
      category: "Income",
      balance: 40492.57,
    },
    {
      id: "txn-2025-03-20-2",
      date: "2025-03-20",
      description: "Certified Check Deposit",
      amount: 2769.34,
      type: "credit",
      category: "Income",
      balance: 38192.57,
    },
    {
      id: "txn-2025-03-20-1",
      date: "2025-03-20",
      description: "Payment Lowe's Companies, Inc.",
      amount: -169.05,
      type: "debit",
      category: "Office",
      balance: 35423.23,
    },
    {
      id: "txn-2025-03-19-2",
      date: "2025-03-19",
      description: "Deposit PayPal",
      amount: 2300.0,
      type: "credit",
      category: "Income",
      balance: 35592.28,
    },
    {
      id: "txn-2025-03-19-1",
      date: "2025-03-19",
      description: "Amazon.com 45004582 WA, USA",
      amount: -10.65,
      type: "debit",
      category: "Office",
      balance: 33292.28,
    },
    {
      id: "txn-2025-03-18-3",
      date: "2025-03-18",
      description: "Wire fee",
      amount: -5.0,
      type: "debit",
      category: "Fees",
      balance: 33302.93,
    },
    {
      id: "txn-2025-03-18-2",
      date: "2025-03-18",
      description: "Wire to Lucille Page",
      amount: -200.0,
      type: "debit",
      category: "Contractors",
      balance: 33307.93,
    },
    {
      id: "txn-2025-03-18-1",
      date: "2025-03-18",
      description: "APPLE.COM 9455877 CA, USA",
      amount: -45.99,
      type: "debit",
      category: "Subscriptions",
      balance: 33507.93,
    },
    {
      id: "txn-2025-03-17-2",
      date: "2025-03-17",
      description: "Cash Deposit ATM",
      amount: 2600.0,
      type: "credit",
      category: "Income",
      balance: 33553.92,
    },
    {
      id: "txn-2025-03-17-1",
      date: "2025-03-17",
      description: "Check Deposit xx98",
      amount: 8750.0,
      type: "credit",
      category: "Income",
      balance: 30953.92,
    },
    {
      id: "txn-2025-03-16-2",
      date: "2025-03-16",
      description: "Cash Withdrawal ATM",
      amount: -250.0,
      type: "debit",
      category: "Withdrawal",
      balance: 22203.92,
    },
    {
      id: "txn-2025-03-16-1",
      date: "2025-03-16",
      description: "Payment The Home Depot, Inc.",
      amount: -119.94,
      type: "debit",
      category: "Office",
      balance: 22453.92,
    },
    {
      id: "txn-2025-03-15",
      date: "2025-03-15",
      description: "Amazon.com 4480952 WA, USA",
      amount: -44.09,
      type: "debit",
      category: "Office",
      balance: 22573.86,
    },
    {
      id: "txn-2025-03-12-2",
      date: "2025-03-12",
      description: "Amazon.com 44770578 WA, USA",
      amount: -301.02,
      type: "debit",
      category: "Office",
      balance: 22617.95,
    },
    {
      id: "txn-2025-03-12-1",
      date: "2025-03-12",
      description: "Stripe Deposit",
      amount: 8987.74,
      type: "credit",
      category: "Income",
      balance: 22918.97,
    },
    {
      id: "txn-2025-03-11-2",
      date: "2025-03-11",
      description: "FACEBK ADS META*9893",
      amount: -314.99,
      type: "debit",
      category: "Marketing",
      balance: 13931.23,
    },
    {
      id: "txn-2025-03-11-1",
      date: "2025-03-11",
      description: "APPLE.COM 90552831 CA, USA",
      amount: -90.94,
      type: "debit",
      category: "Subscriptions",
      balance: 14246.22,
    },
    {
      id: "txn-2025-03-07-2",
      date: "2025-03-07",
      description: "Payment to Liberty Mutual Insurance",
      amount: -1312.79,
      type: "debit",
      category: "Insurance",
      balance: 14337.16,
    },
    {
      id: "txn-2025-03-07-1",
      date: "2025-03-07",
      description: "Wire fee",
      amount: -5.0,
      type: "debit",
      category: "Fees",
      balance: 15649.95,
    },
    {
      id: "txn-2025-03-06",
      date: "2025-03-06",
      description: "Wire Payroll",
      amount: -11116.04,
      type: "debit",
      category: "Payroll",
      balance: 15654.95,
    },
    {
      id: "txn-2025-03-05-4",
      date: "2025-03-05",
      description: "Payment to Verizon Business",
      amount: -204.15,
      type: "debit",
      category: "Utilities",
      balance: 26770.99,
    },
    {
      id: "txn-2025-03-05-3",
      date: "2025-03-05",
      description: "Wire fee",
      amount: -10.0,
      type: "debit",
      category: "Fees",
      balance: 26975.14,
    },
    {
      id: "txn-2025-03-05-2",
      date: "2025-03-05",
      description: "VONAGE Billing +18443659460 USA",
      amount: -134.5,
      type: "debit",
      category: "Utilities",
      balance: 26985.14,
    },
    {
      id: "txn-2025-03-05-1",
      date: "2025-03-05",
      description: "Comcast Billing +18009346489 CO",
      amount: -207.98,
      type: "debit",
      category: "Utilities",
      balance: 27119.64,
    },
    {
      id: "txn-2025-03-04-5",
      date: "2025-03-04",
      description: "APPLE.COM 926525 CA, USA",
      amount: -18.78,
      type: "debit",
      category: "Subscriptions",
      balance: 27327.62,
    },
    {
      id: "txn-2025-03-04-4",
      date: "2025-03-04",
      description: "Wire to Jenny's Furniture Rental and Staging",
      amount: -1102.0,
      type: "debit",
      category: "Office",
      balance: 27346.4,
    },
    {
      id: "txn-2025-03-04-3",
      date: "2025-03-04",
      description: "Check Deposit xx98",
      amount: 9124.99,
      type: "credit",
      category: "Income",
      balance: 28448.4,
    },
    {
      id: "txn-2025-03-04-2",
      date: "2025-03-04",
      description: "ACH Payment Amex",
      amount: -402.12,
      type: "debit",
      category: "Credit Card",
      balance: 19323.41,
    },
    {
      id: "txn-2025-03-04-1",
      date: "2025-03-04",
      description: "GOOGLE*ADS XX32 CA, USA",
      amount: -225.56,
      type: "debit",
      category: "Marketing",
      balance: 19725.53,
    },
    {
      id: "txn-2025-03-03-4",
      date: "2025-03-03",
      description: "Payment Lowe's Companies, Inc.",
      amount: -120.99,
      type: "debit",
      category: "Office",
      balance: 19951.09,
    },
    {
      id: "txn-2025-03-03-3",
      date: "2025-03-03",
      description: "Payment The Home Depot, Inc.",
      amount: -188.02,
      type: "debit",
      category: "Office",
      balance: 20072.08,
    },
    {
      id: "txn-2025-03-03-2",
      date: "2025-03-03",
      description: "Wire fee",
      amount: -15.0,
      type: "debit",
      category: "Fees",
      balance: 20260.1,
    },
    {
      id: "txn-2025-03-03-1",
      date: "2025-03-03",
      description: "Payment Colorado Springs Utilities",
      amount: -149.45,
      type: "debit",
      category: "Utilities",
      balance: 20275.1,
    },
    {
      id: "txn-2025-03-01",
      date: "2025-03-01",
      description: "Wire to AC HERITAGE PROPERTIES Rent Payment",
      amount: -6400.0,
      type: "debit",
      category: "Rent",
      balance: 28279.52,
    },

    // February 2025 transactions (from actual Bluevine statement)
    {
      id: "txn-2025-02-28",
      date: "2025-02-28",
      description: "Cash Withdrawal ATM",
      amount: -300.0,
      type: "debit",
      category: "Withdrawal",
      balance: 28279.52,
    },
    {
      id: "txn-2025-02-27",
      date: "2025-02-27",
      description: "Payment to Denver Commercial Outlet",
      amount: -210.5,
      type: "debit",
      category: "Office",
      balance: 28579.52,
    },
    {
      id: "txn-2025-02-26-2",
      date: "2025-02-26",
      description: "Wire fee",
      amount: -15.0,
      type: "debit",
      category: "Fees",
      balance: 28790.02,
    },
    {
      id: "txn-2025-02-26-1",
      date: "2025-02-26",
      description: "Wire Payroll",
      amount: -11047.56,
      type: "debit",
      category: "Payroll",
      balance: 28805.02,
    },
    {
      id: "txn-2025-02-25-2",
      date: "2025-02-25",
      description: "Wire fee",
      amount: -10.0,
      type: "debit",
      category: "Fees",
      balance: 39852.58,
    },
    {
      id: "txn-2025-02-25-1",
      date: "2025-02-25",
      description: "Wire to Pauline Snyder",
      amount: -851.06,
      type: "debit",
      category: "Contractors",
      balance: 39862.58,
    },
    {
      id: "txn-2025-02-24-3",
      date: "2025-02-24",
      description: "Cash Withdrawal ATM",
      amount: -400.0,
      type: "debit",
      category: "Withdrawal",
      balance: 40713.64,
    },
    {
      id: "txn-2025-02-24-2",
      date: "2025-02-24",
      description: "Payment Lowe's Companies, Inc.",
      amount: -314.75,
      type: "debit",
      category: "Office",
      balance: 41113.64,
    },
    {
      id: "txn-2025-02-24-1",
      date: "2025-02-24",
      description: "Cash Withdrawal ATM",
      amount: -300.0,
      type: "debit",
      category: "Withdrawal",
      balance: 41428.39,
    },
    {
      id: "txn-2025-02-21-2",
      date: "2025-02-21",
      description: "Payment to King Soopers",
      amount: -290.0,
      type: "debit",
      category: "Office",
      balance: 41728.39,
    },
    {
      id: "txn-2025-02-21-1",
      date: "2025-02-21",
      description: "Certified Check Deposit",
      amount: 3875.0,
      type: "credit",
      category: "Income",
      balance: 42018.39,
    },
    {
      id: "txn-2025-02-20",
      date: "2025-02-20",
      description: "Cash Withdrawal ATM",
      amount: -800.0,
      type: "debit",
      category: "Withdrawal",
      balance: 38143.39,
    },
    {
      id: "txn-2025-02-19-3",
      date: "2025-02-19",
      description: "APPLE.COM 9455898584 CA, USA",
      amount: -21.95,
      type: "debit",
      category: "Subscriptions",
      balance: 38943.39,
    },
    {
      id: "txn-2025-02-19-2",
      date: "2025-02-19",
      description: "Cash Deposit ATM",
      amount: 4500.0,
      type: "credit",
      category: "Income",
      balance: 38965.34,
    },
    {
      id: "txn-2025-02-19-1",
      date: "2025-02-19",
      description: "Wire fee",
      amount: -10.0,
      type: "debit",
      category: "Fees",
      balance: 34465.34,
    },
    {
      id: "txn-2025-02-18-2",
      date: "2025-02-18",
      description: "Wire to Randy Casey",
      amount: -450.0,
      type: "debit",
      category: "Contractors",
      balance: 34475.34,
    },
    {
      id: "txn-2025-02-18-1",
      date: "2025-02-18",
      description: "Deposit PayPal",
      amount: 3825.0,
      type: "credit",
      category: "Income",
      balance: 34925.34,
    },
    {
      id: "txn-2025-02-17-3",
      date: "2025-02-17",
      description: "Cash Deposit ATM",
      amount: 6850.0,
      type: "credit",
      category: "Income",
      balance: 31100.34,
    },
    {
      id: "txn-2025-02-17-2",
      date: "2025-02-17",
      description: "ACH Payment Amex",
      amount: -471.46,
      type: "debit",
      category: "Credit Card",
      balance: 24250.34,
    },
    {
      id: "txn-2025-02-17-1",
      date: "2025-02-17",
      description: "Stripe Deposit",
      amount: 9018.69,
      type: "credit",
      category: "Income",
      balance: 24721.8,
    },
    {
      id: "txn-2025-02-13",
      date: "2025-02-13",
      description: "APPLE.COM 9050159985 CA, USA",
      amount: -45.93,
      type: "debit",
      category: "Subscriptions",
      balance: 15703.11,
    },
    {
      id: "txn-2025-02-12",
      date: "2025-02-12",
      description: "Amazon.com 4477047391 WA, USA",
      amount: -51.78,
      type: "debit",
      category: "Office",
      balance: 15749.04,
    },
    {
      id: "txn-2025-02-11-2",
      date: "2025-02-11",
      description: "Check Deposit xx98",
      amount: 5100.0,
      type: "credit",
      category: "Income",
      balance: 15800.82,
    },
    {
      id: "txn-2025-02-11-1",
      date: "2025-02-11",
      description: "Wire fee",
      amount: -15.0,
      type: "debit",
      category: "Fees",
      balance: 10700.82,
    },
    {
      id: "txn-2025-02-10-3",
      date: "2025-02-10",
      description: "Wire Payroll",
      amount: -11234.74,
      type: "debit",
      category: "Payroll",
      balance: 10715.82,
    },
    {
      id: "txn-2025-02-10-2",
      date: "2025-02-10",
      description: "APPLE.COM 9050054231 CA, USA",
      amount: -114.79,
      type: "debit",
      category: "Subscriptions",
      balance: 21950.56,
    },
    {
      id: "txn-2025-02-10-1",
      date: "2025-02-10",
      description: "Payment to Verizon Business",
      amount: -114.79,
      type: "debit",
      category: "Utilities",
      balance: 22065.35,
    },
    {
      id: "txn-2025-02-07-2",
      date: "2025-02-07",
      description: "Comcast Billing +18009346489 CO",
      amount: -201.97,
      type: "debit",
      category: "Utilities",
      balance: 22180.14,
    },
    {
      id: "txn-2025-02-07-1",
      date: "2025-02-07",
      description: "Payment The Home Depot, Inc.",
      amount: -204.79,
      type: "debit",
      category: "Office",
      balance: 22382.11,
    },
    {
      id: "txn-2025-02-06",
      date: "2025-02-06",
      description: "Wire fee",
      amount: -97.6,
      type: "debit",
      category: "Fees",
      balance: 22586.9,
    },
    {
      id: "txn-2025-02-05",
      date: "2025-02-05",
      description: "Wire to Jenny's Furniture Rental and Staging",
      amount: -1084.05,
      type: "debit",
      category: "Office",
      balance: 22684.5,
    },
    {
      id: "txn-2025-02-04-4",
      date: "2025-02-04",
      description: "APPLE.COM 9265539985 CA, USA",
      amount: -94.6,
      type: "debit",
      category: "Subscriptions",
      balance: 23768.55,
    },
    {
      id: "txn-2025-02-04-3",
      date: "2025-02-04",
      description: "Payment to Liberty Mutual Insurance",
      amount: -1072.19,
      type: "debit",
      category: "Insurance",
      balance: 23863.15,
    },
    {
      id: "txn-2025-02-04-2",
      date: "2025-02-04",
      description: "KEAP.COM 8668000098 AZ, +18668000004, USA",
      amount: -105.3,
      type: "debit",
      category: "Software",
      balance: 24935.34,
    },
    {
      id: "txn-2025-02-04-1",
      date: "2025-02-04",
      description: "Payment Lowe's Companies, Inc.",
      amount: -116.97,
      type: "debit",
      category: "Office",
      balance: 25040.64,
    },
    {
      id: "txn-2025-02-03-4",
      date: "2025-02-03",
      description: "VONAGE Billing +18443659460 USA",
      amount: -108.2,
      type: "debit",
      category: "Utilities",
      balance: 25157.61,
    },
    {
      id: "txn-2025-02-03-3",
      date: "2025-02-03",
      description: "Payment Colorado Springs Utilities",
      amount: -197.8,
      type: "debit",
      category: "Utilities",
      balance: 25265.81,
    },
    {
      id: "txn-2025-02-03-2",
      date: "2025-02-03",
      description: "Wire fee",
      amount: -15.0,
      type: "debit",
      category: "Fees",
      balance: 25463.61,
    },
    {
      id: "txn-2025-02-03-1",
      date: "2025-02-03",
      description: "Wire to AC HERITAGE PROPERTIES Rent Payment",
      amount: -6400.0,
      type: "debit",
      category: "Rent",
      balance: 25478.61,
    },
  ]

  // Filter transactions based on user input
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesMonth = filterMonth === "all" || transaction.date.split("-")[1] === filterMonth.padStart(2, "0")
    const matchesType = filterType === "all" || transaction.type === filterType

    return matchesSearch && matchesMonth && matchesType
  })

  // Sort transactions by date (newest first)
  const sortedTransactions = [...filteredTransactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  // Show Joshua's specific transaction history when he's logged in
  if (user?.name === "Joshua C Voehringer") {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Transaction History</h1>
            <p className="text-gray-600 mt-1">Complete transaction ledger for ONE LIMITED</p>
            <p className="text-sm text-gray-500">Account: 875106972073 | Current Balance: $52,814.17</p>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Filter Transactions</CardTitle>
              <CardDescription>Search and filter your transaction history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <Input
                    placeholder="Search transactions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div>
                  <Select value={filterMonth} onValueChange={setFilterMonth}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Months</SelectItem>
                      <SelectItem value="06">June 2025</SelectItem>
                      <SelectItem value="05">May 2025</SelectItem>
                      <SelectItem value="04">April 2025</SelectItem>
                      <SelectItem value="03">March 2025</SelectItem>
                      <SelectItem value="02">February 2025</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="credit">Credits</SelectItem>
                      <SelectItem value="debit">Debits</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transaction List */}
          <Card>
            <CardHeader>
              <CardTitle>Transactions ({sortedTransactions.length})</CardTitle>
              <CardDescription>Showing {sortedTransactions.length} transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {sortedTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === "credit" ? "bg-green-100" : "bg-red-100"
                        }`}
                      >
                        {transaction.type === "credit" ? (
                          <ArrowDownLeft className="h-5 w-5 text-green-600" />
                        ) : (
                          <ArrowUpRight className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{transaction.description}</div>
                        <div className="text-sm text-gray-600">
                          {new Date(transaction.date).toLocaleDateString()} • {transaction.category}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`font-semibold ${
                          transaction.type === "credit" ? "text-green-600" : "text-gray-900"
                        }`}
                      >
                        {transaction.type === "credit" ? "+" : ""}$
                        {Math.abs(transaction.amount).toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </div>
                      {transaction.balance && (
                        <div className="text-xs text-gray-500">
                          Balance: $
                          {transaction.balance.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Default transaction history for other users
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Transaction History</h1>
          <p className="text-gray-600 mt-1">Your complete transaction ledger</p>
        </div>
        {/* Default transaction history content */}
      </div>
    </div>
  )
}
