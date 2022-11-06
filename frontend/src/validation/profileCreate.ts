/* eslint-disable sort-keys */
import * as yup from 'yup'

import { countryCodeRegex, INNRegexp, phoneNumberRegex } from '../const/regexes'

const ProfileCreateValidation = yup.object({
  email: yup.string().email('Некорректная почта').required('Обязательное поле'),
  firstname: yup
    .string()
    .required('Обязательное поле')
    .min(2, 'Невозможное имя'),
  lastname: yup
    .string()
    .required('Обязательное поле')
    .min(2, 'Невозможная фамилия'),
  patronymic: yup.string(),
  // country_code: yup
  //   .string()
  //   .matches(countryCodeRegex)
  //   .required('Обязательное поле'),
  // city_id: yup.number().required('Обязательное поле'),
  // gender: yup
  //   .string()
  //   .oneOf(['male', 'female', 'other'])
  //   .required('Обязательное поле'),
  // phone: yup
  //   .string()
  //   .matches(phoneNumberRegex, 'Недопустимый номер телефона.')
  //   .required('Обязательное поле'),
  // university_id: yup.number(),
  // speciality_id: yup.number(),
  // graduation_year: yup.number().integer().moreThan(1899),
  // experience: yup.number().moreThan(-1).integer(),
  // employment_id: yup.number().required('Обязательное поле'),
  // achivement_id: yup.number(),
  // team_id: yup.number(),
  // role: yup.string(),
  // company_inn: yup.string().matches(INNRegexp, 'Неверный формат ИНН'),
})

export default ProfileCreateValidation
