import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface Transaction {
  id: string
  description: string
  amount: number
  date: string
  category: string
  type: "credit" | "debit"
  status: "completed" | "pending" | "failed"
  customer?: string
}

interface TransactionListProps {
  transactions: Transaction[]
  title: string
  className?: string
  showCustomer?: boolean
  showStatus?: boolean
}

export function TransactionList({ transactions, title, className, showCustomer, showStatus }: TransactionListProps) {
  return (
    <Table className={className}>
      <TableCaption>{title}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Description</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Type</TableHead>
          {showCustomer && <TableHead>Customer</TableHead>}
          {showStatus && <TableHead>Status</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">{transaction.description}</TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>{transaction.date}</TableCell>
            <TableCell>{transaction.category}</TableCell>
            <TableCell>{transaction.type}</TableCell>
            {showCustomer && <TableCell className="text-sm text-gray-600">{transaction.customer || "N/A"}</TableCell>}
            {showStatus && (
              <TableCell>
                <Badge
                  variant={
                    transaction.status === "completed"
                      ? "default"
                      : transaction.status === "pending"
                        ? "secondary"
                        : "destructive"
                  }
                  className={
                    transaction.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : transaction.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }
                >
                  {transaction.status}
                </Badge>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
