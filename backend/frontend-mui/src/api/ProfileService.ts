import {
  Category,
  Employment,
  Profile,
  ProfileCreate,
  Specialization,
  University,
} from '../types/Profile'

import axios from 'axios'

export const API_HOST = process.env.API_HOST || 'http://localhost:9000/api/v1/'
const ACAO = process.env.ACAO || 'http://localhost:3000'

export const api = axios.create({
  baseURL: API_HOST,
  headers: {
    'Access-Control-Allow-Origin': ACAO,
  },
  withCredentials: true,
})
export default class ProfileService {
  static getProfile = (uuid: string) => {
    return api.get<Profile>(`profile/${uuid}`)
  }

  static createProfile = (profile: ProfileCreate) => {
    return api.post('/profile', { profile })
  }

  static getCategories = () => {
    return api.get<{ categories: Category[] }>('/category')
  }

  static checkCompanyInn = (inn: string) => {
    return api.post<{ inn: string }>('/company/inn', { inn })
  }

  static getUniversities = () => {
    return api.get<{ universities: University[] }>('/university')
  }

  static getEmployments = () => {
    return api.get<{ employments: Employment[] }>('/employment')
  }

  static getSpecializations = () => {
    return api.get<{ specializations: Specialization[] }>('/specializations')
  }
}
