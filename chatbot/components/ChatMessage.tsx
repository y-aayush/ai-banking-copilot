import type { ChatMessage as ChatMessageType } from "../types"

type Props = {
  message: ChatMessageType
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === "user"

  return (
    <div
      className={`rounded-lg p-3 text-sm whitespace-pre-line ${
        isUser
          ? "ml-10 bg-black text-white"
          : "mr-10 bg-gray-100 text-black"
      }`}
    >
      {message.content}
    </div>
  )
}