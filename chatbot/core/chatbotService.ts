import { detectIntent } from "./intentDetector"
import { intentRequiresLogin } from "./intents"
import {
  getBalance,
  getTransactions,
  getLoanStatus,
  getCardInfo,
} from "../services/accountService"

function maskAccountNumber(accountNumber: string) {
  return `XXXXXX${accountNumber.slice(-4)}`
}

export function handleChatMessage(message: string, customerId?: string) {
  const intent = detectIntent(message)
  const requiresLogin = intentRequiresLogin[intent]

  if (requiresLogin && !customerId) {
    return {
      intent,
      reply: "Please log in first so I can securely help with your account.",
    }
  }

  switch (intent) {
    case "CHECK_BALANCE": {
      const balance = getBalance(customerId!)

      if (!balance) {
        return {
          intent,
          reply: "I could not find your account details.",
        }
      }

      return {
        intent,
        reply: `Hello ${balance.name}. Your ${balance.accountType} account ending in ${maskAccountNumber(
          balance.accountNumber
        )} has a balance of $${balance.balance.toFixed(2)}.`,
      }
    }

    case "VIEW_TRANSACTIONS": {
      const txns = getTransactions(customerId!)

      if (txns.length === 0) {
        return {
          intent,
          reply: "I could not find recent transactions for your account.",
        }
      }

      const list = txns
        .map((txn) => `${txn.date}: ${txn.type} of $${txn.amount.toFixed(2)}`)
        .join("\n")

      return {
        intent,
        reply: `Here are your recent transactions:\n${list}`,
      }
    }

    case "LOAN_STATUS": {
      const loan = getLoanStatus(customerId!)

      if (!loan) {
        return {
          intent,
          reply: "I could not find your loan information.",
        }
      }

      return {
        intent,
        reply: `Your ${loan.loanType} status is currently: ${loan.loanStatus}.`,
      }
    }

    case "CARD_INFO": {
      const card = getCardInfo(customerId!)

      if (!card) {
        return {
          intent,
          reply: "I could not find your card information.",
        }
      }

      return {
        intent,
        reply: `Your card type is ${card.cardType}. Credit limit: $${card.creditLimit}. Current card balance: $${card.creditCardBalance}.`,
      }
    }

    case "OPEN_ACCOUNT_INFO":
      return {
        intent,
        reply:
          "To open a new account, you usually need a valid ID, proof of address, phone number, and completed KYC form.",
      }

    case "CREATE_COMPLAINT":
      return {
        intent,
        reply:
          "I can help create a support ticket. Please describe the issue you are facing.",
      }

    case "HUMAN_SUPPORT":
      return {
        intent,
        reply:
          "I can connect you with a human banking support representative during business hours.",
      }

    default:
      return {
        intent,
        reply:
          "I can help with balance, transactions, loan status, card information, account opening, and complaints.",
      }
  }
}