type Props = {
  input: string
  setInput: (value: string) => void
  sendMessage: () => void
  loading: boolean
}

export default function ChatInput({
  input,
  setInput,
  sendMessage,
  loading,
}: Props) {
  return (
    <div className="flex gap-2 border-t p-3">
      <input
        className="flex-1 rounded-lg border px-3 py-2 text-sm outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask about balance, transactions, loans..."
        disabled={loading}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage()
          }
        }}
      />

      <button
        onClick={sendMessage}
        disabled={loading}
        className="rounded-lg bg-black px-4 py-2 text-sm text-white disabled:opacity-50"
      >
        Send
      </button>
    </div>
  )
}