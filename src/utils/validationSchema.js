import * as Yup from 'yup';

export const validationSchema = Yup.object({
  email: Yup.string()
      .required('Email is required')
      .email('Invalid email address'),
  password: Yup.string()
      .required('Password is required')
      .min(8, 'Password has to be longer than 8 characters')
      .matches(/(?=.*[0-9])/, 'Password must contain at least one number')
      .matches(/(?=.*[!_$%&*"])/, 'Password must contain at ' +
        'least one of symbols !_$%&*')
      .matches(/(?=.*[A-Z])/, 'Password must contain at' +
        ' least one capital letter')
      .max(16, 'Password hasn\'t\' to be longer than 16 characters'),
  confirmPassword: Yup.string()
      .required('Password confirmation is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  name: Yup.string()
      .required('Name is required')
      .min(2, 'Name has to be longer than 2 characters')
      .matches(
          /^[A-ZА-Я][a-zа-яA-ZА-Я]*$/,
          'The name must begin with a capital' +
        ' letter and consist only of letters')
      .max(15, 'Name must be at most 15 characters long'),
  familyName: Yup.string()
      .required('Name is required')
      .min(2, 'Name has to be longer than 2 characters')
      .matches(
          /^[A-ZА-Я][a-zа-яA-ZА-Я]*$/,
          'The name must begin with a capital' +
        ' letter and consist only of letters')
      .max(15, 'Name must be at most 15 characters long'),
  phoneNumber: Yup.string()
      .required('Phone number is required'),
});
