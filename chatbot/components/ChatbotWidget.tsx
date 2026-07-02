"use client"

import { useState } from "react"
import ChatMessage from "./ChatMessage"
import ChatInput from "./ChatInput"
import type { ChatMessage as ChatMessageType } from "../types"
import styles from "./ChatbotWidget.module.css"

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      role: "bot",
      content: "Hello! I am your AI banking assistant. How can I help you today?",
    },
  ])

  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

    const currentInput = input

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: currentInput,
      },
    ])

    setInput("")
    setLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
          customerId: "1", // temporary fake logged-in customer
        }),
      })

      const data = await response.json()

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: data.reply || "Sorry, I could not understand that.",
        },
      ])
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "Sorry, something went wrong. Please try again.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) {
    return (
      <div className={`${styles.widget} fixed bottom-6 right-6 z-[9999] flex items-center gap-3`}>
        <div className={`${styles.triggerWrap} flex items-center gap-3`}>
          <span className={styles.triggerLabel}>Chat with your banking assistant</span>
          <button
            onClick={() => setIsOpen(true)}
            className={styles.trigger}
            aria-label="Open chat with your banking assistant"
          >
            <span className={styles.triggerRing} aria-hidden="true" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5H9l-4 3.5V17H5.5C4.67 17 4 16.33 4 15.5v-10Z"
                stroke="#0F1B2C"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.widget} fixed bottom-6 right-6 z-[9999]`}>
      <div className={styles.panel}>
        <div className={`${styles.header} flex items-start justify-between`}>
          <div>
            <h3 className={styles.brandTitle}>Banking Assistant</h3>
            <div className={styles.statusRow}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span className={styles.statusText}>Secured chat &middot; online</span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className={styles.closeBtn}
            aria-label="Close chat"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path
                d="M1 1L14 14M14 1L1 14"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className={`${styles.messageArea} space-y-3`}>
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}

          {loading && (
            <div className={styles.typingBubble} aria-label="Assistant is typing">
              <span className={styles.typingDot} />
              <span className={styles.typingDot} />
              <span className={styles.typingDot} />
            </div>
          )}
        </div>

        <ChatInput
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
          loading={loading}
        />
      </div>
    </div>
  )
}
