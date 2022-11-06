import { Profile } from './Profile'

type Slot = {
  roleUuid: string
}

export type Project = {
  uuid: string
  name: string
  description: string
  image: string
  presentation_link: string
  creator: Profile
  date: string
  slots: Slot[]
}

export type ProjectCreate = {
  name: string
  description: string
  imageURL?: string
  presentationLink?: string
  creatorUuid: string
  slots: Slot[]
  isVisible: 'visible' | 'invisible' // PUT /change-visibility
}
