import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import { Employment, ProfileCreate } from '../../types/Profile'
import { useEffect, useState } from 'react'

import { authStore } from '../../pages/_app'
import EmploymentRadios from './EmploymentRadios'
import { FC } from 'react'
import { MuiTelInput } from 'mui-tel-input'
import ProfileCreateValidation from '../../validation/profileCreate'
import ProfileService from '../../api/ProfileService'
import { useFormik } from 'formik'

const ProfileEditForm: FC = () => {
  const [employments, setEmployments] = useState([] as Employment[])
  const [phone, setPhone] = useState<string>('')
  const [selectedCity, setSelectedCity] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [selectedCountry, setSelectedCountry] = useState('')

  const handlePhone = (newPhone: string) => {
    setPhone(newPhone)
    formik.values.phone = phone
  }

  useEffect(() => {
    // getEmployments()
    ProfileService.getEmployments()
      .then((r) => {
        console.debug('Fetched employments', r.data)
        setEmployments(r.data.employments)
      })
      .catch((err) => {
        console.log(err)
      })

    ProfileService.getUniversities
  }, [])

  const formik = useFormik({
    initialValues: {
      userUuid: '',
      firstname: '',
      lastname: '',
      email: authStore.userEmail || '',
      achievement: '',
      citizenshipUuid: '',
      cityUuid: '',
      countryUuid: '',
      employmentUuid: '',
    } as ProfileCreate,

    onSubmit: (values) => {
      console.log(values)
    },
    // validationSchema: ProfileCreateValidation,
  })
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <Typography variant='h2' component={'p'}>
        Заполнение анкеты
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <Typography variant='h4' component={'p'}>
              Контактная информация
            </Typography>

            <TextField
              label='Фамилия'
              id='lastname'
              value={formik.values.lastname}
              variant='standard'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onReset={formik.handleReset}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
            />
            <TextField
              label='Имя'
              id='firstname'
              value={formik.values.firstname}
              variant='standard'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onReset={formik.handleReset}
              error={
                formik.touched.firstname && Boolean(formik.errors.firstname)
              }
              helperText={formik.touched.firstname && formik.errors.firstname}
            />

            <TextField
              label='Отчество'
              id='patronymic'
              value={formik.values.patronymic}
              variant='standard'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onReset={formik.handleReset}
              error={
                formik.touched.patronymic && Boolean(formik.errors.patronymic)
              }
              helperText={formik.touched.patronymic && formik.errors.patronymic}
            />

            <TextField
              label='Почта'
              id='email'
              value={formik.values.email}
              variant='standard'
              disabled
            />

            <MuiTelInput label='Телефон' value={phone} onChange={handlePhone} />

            <FormControl>
              <FormLabel id='gender-group'>Пол</FormLabel>
              <RadioGroup
                aria-labelledby='gender-group'
                name='gender'
                value={formik.values.gender}
                onChange={formik.handleChange}
              >
                <FormControlLabel
                  value='female'
                  control={<Radio />}
                  label='Женщина'
                />
                <FormControlLabel
                  value='male'
                  control={<Radio />}
                  label='Мучина'
                />
                <FormControlLabel
                  value='other'
                  control={<Radio />}
                  label='Другое'
                />
              </RadioGroup>
            </FormControl>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              <Typography variant='h4' component={'p'}>
                Опыт
              </Typography>
              <TextField
                label='О себе'
                id='achievements'
                value={formik.values.achievement}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                multiline
                rows={4}
                // variant='standard'
              />
            </Box>

            <FormControl>
              <FormLabel id='gender-group'>Занятость</FormLabel>
              <RadioGroup
                aria-labelledby='gender-group'
                name='employmentUuid'
                value={formik.values.employmentUuid}
                onChange={formik.handleChange}
              >
                <EmploymentRadios employments={employments} />
              </RadioGroup>
            </FormControl>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              {/* сфера */}
              {/* Скиллы */}
              {/* TODO: доделать формочку */}
            </Box>
            <Button type='submit'>Отправить</Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

interface CountryType {
  code: string
  name: string
}

const countries: readonly CountryType[] = [
  { code: 'KZ', name: 'Казахстан' },
  { code: 'RU', name: 'Россия' },
]

export default ProfileEditForm
