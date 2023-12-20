import * as Yup from 'yup';

const streetNameRegex = /^[A-ZА-ЯІЇЄҐ][a-zа-яіїєґ'-]*\s?([A-ZА-ЯІЇЄҐ]?[a-zа-яіїєґ'-]*)?$/;
export const validationSchemaRegisterForm = Yup.object().shape({
  license: Yup.boolean()
      .oneOf([true], 'You must agree to the terms and conditions')
      .required('Accepting terms and conditions is required'),
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
  lastName: Yup.string()
      .required('Last name is required')
      .min(2, 'Last name has to be longer than 2 characters')
      .matches(
          /^[A-ZА-я][a-zа-я]+$/,
          'The Last name must begin with a capital' +
      ' letter and consist only of letters')
      .max(15, 'First name must be at most 15 characters long'),
  firstName: Yup.string()
      .required('First name is required')
      .min(2, 'First name has to be longer than 2 characters')
      .matches(
          /^[A-ZА-я][a-zа-я]+$/,
          'The First name must begin with a capital' +
        ' letter and consist only of letters')
      .max(15, 'First name must be at most 15 characters long'),
});
export const validationSchemaUserDataForm = Yup.object().shape({
  currentPassword: Yup.string(),
  newPassword: Yup.string()
      .min(8, 'Password has to be longer than 8 characters')
      .matches(/(?=.*[0-9])/, 'Password must contain at least one number')
      .matches(/(?=.*[!_$%&*"])/, 'Password must contain at least one of symbols !_$%&*')
      .matches(/(?=.*[A-Z])/, 'Password must contain at least one capital letter')
      .max(16, 'Password can\'t be longer than 16 characters'),
  phoneNumber: Yup.string()
      .matches(/^\d{12}$/, 'Phone number must be 12 digits'),
  email: Yup.string()
      .email('Invalid email address'),
  lastName: Yup.string()
      .min(2, 'Last name has to be longer than 2 characters')
      .matches(/^[A-ZА-Я][a-zа-я]+$/, 'The Last name must begin with a capital letter and consist only of letters')
      .max(15, 'Last name must be at most 15 characters long'),
  firstName: Yup.string()
      .min(2, 'First name has to be longer than 2 characters')
      .matches(/^[A-ZА-Я][a-zа-я]+$/, 'The First name must begin with a capital letter and consist only of letters')
      .max(15, 'First name must be at most 15 characters long'),
});
export const validationSchemaLoginForm = Yup.object().shape({
  password: Yup.string()
      .required('Password is required'),
  email: Yup.string()
      .matches( /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Email format is not valid')
      .required('Email is required'),
});

export const validationSchemaAddressForm = Yup.object().shape({
  street: Yup.string()
      .matches(streetNameRegex, 'Street name must start with a capital letter, can include one space or hyphen and must be up to two words')
      .matches(/^[0-9A-Za-z/]+S?$/, 'House number must consist only numbers and latin letters')
      .min(1, 'Street name must be at least 1 character long')
      .max(30, 'Street name must be at most 30 characters long'),
  houseNumber: Yup.string()
      .min(1, 'House number must be at least 1 character long')
      .max(4, 'House number must be at most 4 characters long')
      .matches(/^[0-9A-Za-z/]+S?$/, 'House number must consist only numbers and latin letters'),
  flatNumber: Yup.string()
      .min(1, 'Flat number must be at least 1 character long')
      .max(5, 'Flat number must be at most 5 characters long')
      .matches(/^[0-9A-Za-z]+S?$/, 'Flat number must consist only numbers and latin letters'),
  intDeliveryAddress: Yup.string()
      .matches(/^[a-zA-Z0-9.,/ ]*$/, 'Address must consist only numbers and latin letters')
      .min(40, 'Address must be at least 40 characters long')
      .max(100, 'Address must be at most 100 characters long'),
});
export const validationSchemaPromoCode = Yup.object().shape({
  promoCode: Yup.string(),
});

export const validationSchemaCheckOutUserData = Yup.object().shape({
  cvvCvc: Yup.string()
      .matches(/^\d{3}$/, 'CVV/CVC must be 3 numbers long'),
  validityDate: Yup.string()
      .matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Invalid data format'),
  curdNumber: Yup.string()
      .matches(/^\d{16}$/, 'Card number must be 16 numbers long'),
  phoneNumber: Yup.string()
      .matches(/^\d{12}$/, 'Phone number must be 12 digits'),
  email: Yup.string()
      .email('Invalid email address'),
  lastName: Yup.string()
      .min(2, 'Last name has to be longer than 2 characters')
      .matches(/^[A-ZА-Я][a-zа-я]+$/, 'The Last name must begin with a capital letter and consist only of letters')
      .max(15, 'Last name must be at most 15 characters long'),
  firstName: Yup.string()
      .min(2, 'First name has to be longer than 2 characters')
      .matches(/^[A-ZА-Я][a-zа-я]+$/, 'The First name must begin with a capital letter and consist only of letters')
      .max(15, 'First name must be at most 15 characters long'),
});
export const validationSchemaWarehouseForm = Yup.object().shape({
  city: Yup.object().shape({
    label: Yup.string().required('City label is required'),
    value: Yup.string().required('City is required'),
  }),
  warehouse: Yup.object().shape({
    label: Yup.string().required('Warehouse label is required'),
    value: Yup.string().required('Warehouse is required'),
  }),
});


