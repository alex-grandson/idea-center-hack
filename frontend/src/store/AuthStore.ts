import { LoginResponse } from '../types/auth/Login'
import { makeAutoObservable } from 'mobx'

export default class AuthStore {
  user: LoginResponse | undefined = undefined
  userUUID: string | undefined = undefined
  userEmail: string | undefined = undefined

  constructor() {
    makeAutoObservable(this)
  }

  setUser(user: LoginResponse) {
    this.user = user
  }

  setUserUUID(uuid: string) {
    console.debug('Set new User UUID', uuid)
    this.userUUID = uuid
  }

  setUserEmail(email: string) {
    console.debug('Set new User email', email)
    this.userEmail = email
  }
}
