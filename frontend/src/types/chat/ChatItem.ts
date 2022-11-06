import { Chat } from './Chat'
import { Message } from './Message'

export type ChatItem = {
  chatName: string
  chatUUID: string
  lastMessage: Message
  imageUrl?: string // только в групповом чате - ссылка на картинку проекта
}
