import { LoginRequest, LoginResponse } from '../types/auth/Login'
import { RegisterRequest, RegisterResponse } from '../types/auth/Register'

import axios from 'axios'

const API_HOST = process.env.API_HOST || 'http://localhost:9000/api/v1/'
const ACAO = process.env.ACAO || 'http://localhost:3000'

export const api = axios.create({
  baseURL: API_HOST,
  headers: {
    'Access-Control-Allow-Origin': ACAO,
  },
  withCredentials: true,
})
export default class AuthService {
  static login = (data: LoginRequest) => {
    return api.post<LoginResponse>('/login', data)
  }

  static register = (data: RegisterRequest) => {
    return api.post<RegisterResponse>('/register', data)
  }

  static logout = () => {
    return api.get('/logout')
  }
}
