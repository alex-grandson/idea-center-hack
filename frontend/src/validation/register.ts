import * as yup from 'yup'

export const registerValidation = yup.object().shape({
  email: yup
    .string()
    .email('Неверный формат почты')
    .required('Обязательное поле'),
  password: yup
    .string()
    .min(5, 'Длина пароля минимум 5 символов')
    .max(20, 'Длина пароля не должна превышать 20 символов')
    .required('Введите пароль'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
    .required('Повторите пароль'),
})
