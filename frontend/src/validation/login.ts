import * as yup from 'yup'

export const loginValidation = yup.object({
  email: yup
    .string()
    .email('Неверный формат почты')
    .required('Обязательное поле'),
  password: yup
    .string()
    .min(5, 'Слишком короткий пароль. Минимум 5 символов')
    .max(20, 'Слишком длинный пароль. Максимум 20 символов')
    .required('Обязательное поле'),
})
