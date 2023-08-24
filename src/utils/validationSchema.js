import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  confirmPassword: Yup.string()
      .required('Password confirmation is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  password: Yup.string()
      .required('Password is required')
      .min(8, 'Password has to be longer than 8 characters')
      .matches(/(?=.*[0-9])/, 'Password must contain at least one number')
      .matches(/(?=.*[!_$%&*"])/, 'Password must contain at ' +
        'least one of symbols !_$%&*')
      .matches(/(?=.*[A-Z])/, 'Password must contain at' +
        ' least one capital letter')
      .max(16, 'Password hasn\'t\' to be longer than 16 characters'),
  email: Yup.string()
      .required('Email is required')
      .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Invalid email address'),
  name: Yup.string()
      .required('Name is required')
      .min(2, 'Name has to be longer than 2 characters')
      .matches(
          /^[A-Z][a-z]+ [A-Z][a-z]+$/,
          'The name must begin with a capital' +
        ' letter and consist only of letters')
      .max(20, 'Name must be at most 15 characters long'),
});
