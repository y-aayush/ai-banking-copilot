export type MessageRole = "user" | "bot"

export type ChatMessage = {
  role: MessageRole
  content: string
}

export type BankingIntent =
  | "CHECK_BALANCE"
  | "VIEW_TRANSACTIONS"
  | "LOAN_STATUS"
  | "CARD_INFO"
  | "OPEN_ACCOUNT_INFO"
  | "CREATE_COMPLAINT"
  | "HUMAN_SUPPORT"
  | "GENERAL_FAQ"
  | "UNKNOWN"