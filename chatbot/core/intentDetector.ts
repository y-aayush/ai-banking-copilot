import type { BankingIntent } from "../types"

export function detectIntent(message: string): BankingIntent {
  const text = message.toLowerCase()

  if (
    text.includes("balance") ||
    text.includes("paisa") ||
    text.includes("money") ||
    text.includes("amount") ||
    text.includes("kati cha") ||
    text.includes("kati xa") ||
    text.includes("mero account")
  ) {
    return "CHECK_BALANCE"
  }

  if (
    text.includes("transaction") ||
    text.includes("transactions") ||
    text.includes("statement") ||
    text.includes("history") ||
    text.includes("last payment") ||
    text.includes("recent payment")
  ) {
    return "VIEW_TRANSACTIONS"
  }

  if (
    text.includes("loan") ||
    text.includes("karja") ||
    text.includes("loan status")
  ) {
    return "LOAN_STATUS"
  }

  if (
    text.includes("card") ||
    text.includes("credit card") ||
    text.includes("debit card")
  ) {
    return "CARD_INFO"
  }

  if (
    text.includes("open account") ||
    text.includes("new account") ||
    text.includes("khata kholna") ||
    text.includes("naya khata") ||
    text.includes("account opening")
  ) {
    return "OPEN_ACCOUNT_INFO"
  }

  if (
    text.includes("complaint") ||
    text.includes("problem") ||
    text.includes("issue") ||
    text.includes("support ticket")
  ) {
    return "CREATE_COMPLAINT"
  }

  if (
    text.includes("human") ||
    text.includes("agent") ||
    text.includes("representative") ||
    text.includes("customer service")
  ) {
    return "HUMAN_SUPPORT"
  }

  return "GENERAL_FAQ"
}