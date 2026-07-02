import { customers, transactions } from "../data/demoBankData"

export function getCustomer(customerId: string) {
  return customers.find((customer) => customer.customerId === customerId)
}

export function getBalance(customerId: string) {
  const customer = getCustomer(customerId)

  if (!customer) {
    return null
  }

  return {
    name: `${customer.firstName} ${customer.lastName}`,
    accountType: customer.accountType,
    accountNumber: customer.accountNumber,
    balance: customer.accountBalance,
  }
}

export function getTransactions(customerId: string) {
  return transactions
    .filter((transaction) => transaction.customerId === customerId)
    .slice(0, 5)
}

export function getLoanStatus(customerId: string) {
  const customer = getCustomer(customerId)

  if (!customer) {
    return null
  }

  return {
    loanType: customer.loanType,
    loanStatus: customer.loanStatus,
  }
}

export function getCardInfo(customerId: string) {
  const customer = getCustomer(customerId)

  if (!customer) {
    return null
  }

  return {
    cardType: customer.cardType,
    creditLimit: customer.creditLimit,
    creditCardBalance: customer.creditCardBalance,
  }
}