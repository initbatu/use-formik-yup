import * as Yup from 'yup';

const validation = Yup.object().shape({
    email: Yup
          .string()
          .email('Lütfen geçerli bir email adresi giriniz.')
          .required(),
    password: Yup
          .string()
          .min(6)
          .required(),
    passwordConfirm: Yup
          .string()
          .oneOf([Yup.ref('password')],'Şifre aynı olmalı')
          .required()            
  })

  module.exports = validation;