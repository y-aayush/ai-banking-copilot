import { NextResponse } from "next/server"
import { handleChatMessage } from "@/chatbot/core/chatbotService"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { message, customerId } = body

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    const result = handleChatMessage(message, customerId)

    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}