type Company = {
  name: string
  inn: string
}

type Education = {
  university: string
  eduspeciality: string
  graduationYear: number
}

export type Profile = {
  UUID: string
  email: string
  firstname: string
  lastname: string
  experience?: number
  achievement: string
  patronymic?: string
  country?: string
  citezenship?: string
  city?: string
  gender?: string
  phone?: string
  employment?: string
  imageURL?: string
  team?: string
  role?: string
  skill?: string
  company?: Company
  education?: Education
}

export type ProfileCreate = {
  userUuid: string
  firstname: string
  lastname: string
  email: string
  achievement: string
  citizenshipUuid: string
  cityUuid: string
  countryUuid: string
  employmentUuid: string
  experience?: string
  gender: 'male' | 'female' | 'other'
  graduationYear?: string
  patronymic?: string
  phone: string
  specializationUuid: string
  companyInn?: string
  companyName?: string
  eduspecialityUuid?: string
  universityUuid?: string
  skills: string[]
}

export type Category = {
  name: string
  uuid: string
}

export type City = {
  name: string
  uuid: string
}

export type Citezenship = {
  name: string
  uuid: string
}

export type Country = {
  code: string
  name: string
  uuid: string
}

export type Eduspeciality = {
  code: string
  name: string
  uuid: string
}

export type Employment = {
  name: string
  uuid: string
  value: 'self_employed' | 'employed' | 'unemployed'
}

export type Specialization = {
  name: string
  uuid: string
  value: string
}

export type University = {
  name: string
  uuid: string
}
