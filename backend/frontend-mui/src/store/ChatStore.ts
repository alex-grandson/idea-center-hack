import { Chat } from '../types/chat/Chat'
import { makeAutoObservable } from 'mobx'

export default class ChatStore {
  chat = {} as Chat

  constructor() {
    makeAutoObservable(this)
  }
}
