import { Chat } from './Chat'
import { Message } from './Message'

export type ChatHistory = {
  chatUuid: string
  messages: Message[]
}
