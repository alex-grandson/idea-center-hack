import Container from '@mui/material/Container'
import { FC } from 'react'
import ProfileEditForm from '../../components/profile/EditForm'
const EditProfilePage: FC = () => {
  return (
    <Container maxWidth='md'>
      <ProfileEditForm />
    </Container>
  )
}

export default EditProfilePage
