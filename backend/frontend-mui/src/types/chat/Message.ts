import { User } from '../User'

export type Message = {
  type?: 'text' | 'invite' // делать другие типы сообщений типа картинок не будем
  //пусть ссылкой делятся на файлы если надо
  content: string
  sender: User
  date: string
}
