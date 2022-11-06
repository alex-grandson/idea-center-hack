import { AxiosError, AxiosResponse } from 'axios'
import { Box, Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'

import AuthService from '../../api/AuthService'
import { authStore } from '../../pages/_app'
import { LoginRequest } from '../../types/auth/Login'
import { loginValidation } from '../../validation/login'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'

const LoginForm = () => {
  const [isError, setIsError] = useState(false)
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    } as LoginRequest,
    onSubmit: (values) => {
      console.debug(values)
      AuthService.login(values)
        .then((response) => {
          if (response.status == 200) {
            console.log('success login')
            authStore.setUser(response.data)
            authStore.setUserUUID(response.data.uuid)
            authStore.setUserEmail(values.email)
            router.push('/profiles/add')
          }
        })
        .catch((err: AxiosError) => {
          setIsError(true)
          console.log(err)
        })
    },
    validationSchema: loginValidation,
  })
  useEffect(() => {}, [isError])
  return (
    <Box
      component={'form'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        p: 4,
      }}
      onSubmit={formik.handleSubmit}
    >
      <TextField
        type={'email'}
        label='Почта'
        id='email'
        value={formik.values.email}
        variant='standard'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        onReset={formik.handleReset}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        type={'password'}
        label='Пароль'
        id='password'
        value={formik.values.password}
        variant='standard'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        onReset={formik.handleReset}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button type='submit' variant='contained'>
        Вход
      </Button>
    </Box>
  )
}

export default LoginForm
