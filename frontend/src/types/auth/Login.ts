export type LoginRequest = {
  email: string
  password: string
}

export type LoginResponse = {
  uuid: string
  firstName: string
  lastName: string
  patronymic?: string
}
