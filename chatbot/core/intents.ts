import type { BankingIntent } from "../types"

export const intentRequiresLogin: Record<BankingIntent, boolean> = {
  CHECK_BALANCE: true,
  VIEW_TRANSACTIONS: true,
  LOAN_STATUS: true,
  CARD_INFO: true,
  OPEN_ACCOUNT_INFO: false,
  CREATE_COMPLAINT: false,
  HUMAN_SUPPORT: false,
  GENERAL_FAQ: false,
  UNKNOWN: false,
}