import * as Yup from 'yup';

const streetNameRegex = /^[A-Z][a-z'-]*\s?([A-Z]?[a-z'-]*)?$/;
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!_$%&*"])(?=.*[A-Z]).{8,}$/;
export const validationSchemaRegisterForm = Yup.object().shape({
  license: Yup.boolean()
      .oneOf([true], 'You must agree to the terms and conditions')
      .required('Accepting terms and conditions is required'),
  confirmPassword: Yup.string()
      .required('Password confirmation is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  password: Yup.string()
      .required('Password is required')
      .matches(passwordRegex, 'Password must contain at least 8 symbols long, include number, capital letter, special characters !_$%&*')
      .max(16, 'Password hasn\'t\' to be longer than 16 characters'),
  email: Yup.string()
      .required('Email is required')
      .matches(emailRegex, 'Invalid email address'),
  lastName: Yup.string()
      .required('Last name is required')
      .min(2, 'Last name has to be longer than 2 characters')
      .matches(
          /^[A-Z][a-z]+$/,
          'The Last name must begin with a capital' +
      ' letter and consist only of latin letters')
      .max(15, 'First name must be at most 15 characters long'),
  firstName: Yup.string()
      .required('First name is required')
      .min(2, 'First name has to be longer than 2 characters')
      .matches(
          /^[A-Z][a-z]+$/,
          'The First name must begin with a capital' +
        ' letter and consist only of latin letters')
      .max(15, 'First name must be at most 15 characters long'),
});
export const validationSchemaLoginForm = Yup.object().shape({
  password: Yup.string()
      .required('Password is required'),
  email: Yup.string()
      .required('Email is required')
      .matches( emailRegex, 'Email format is not valid'),
});
export const validationSchemaUserDataForm = Yup.object().shape({
  currentPassword: Yup.string(),
  newPassword: Yup.string()
      .required('Password is required')
      .matches(passwordRegex, 'Password must contain at least 8 symbols long, include number, capital letter, special characters !_$%&*')
      .max(16, 'Password can\'t be longer than 16 characters'),
  phoneNumber: Yup.string()
      .matches(/^\d{12}$/, 'Phone number must be 12 digits'),
  email: Yup.string()
      .matches(emailRegex, 'Invalid email address'),
  lastName: Yup.string()
      .min(2, 'Last name has to be longer than 2 characters')
      .matches(/^[A-Z][a-z]+$/, 'The Last name must begin with a capital letter and consist only of latin letters')
      .max(15, 'Last name must be at most 15 characters long'),
  firstName: Yup.string()
      .min(2, 'First name has to be longer than 2 characters')
      .matches(/^[A-Z][a-z]+$/, 'The First name must begin with a capital letter and consist only of latin letters')
      .max(15, 'First name must be at most 15 characters long'),
});
export const validationSchemaNPDeliveryWarehouse = Yup.object().shape({
  city: Yup.object().test('object-length', 'City is required', (obj) => {
    return Object.keys(obj).length === 2;
  }),
  warehouse: Yup.object().test('object-length', 'Warehouse is required', (obj) => {
    return Object.keys(obj).length === 2;
  }),
});
export const validationSchemaNPDeliveryAddress = Yup.object().shape({
  city: Yup.object().test('object-length', 'City is required', (obj) => {
    return Object.keys(obj).length === 2;
  }),
  street: Yup.string()
      .matches(streetNameRegex, 'Street name must start with a capital latin letter, can include one space or hyphen and must be up to two words')
      .min(1, 'Street name must be at least 1 character long')
      .max(30, 'Street name must be at most 30 characters long')
      .required('House number is required'),
  houseNumber: Yup.string()
      .min(1, 'House number must be at least 1 character long')
      .max(5, 'House number must be at most 5 characters long')
      .matches(/^[0-9A-Za-z/]+S?$/, 'House number must consist only numbers, latin letters and dont include spaces or hyphens')
      .matches(/^[0-9A-Za-z]+(\/[0-9A-Za-z]+)?$/, 'House number format must be number of number/number')
      .required('House number is required'),
  flatNumber: Yup.string()
      .min(1, 'Flat number must be at least 1 character long')
      .max(5, 'Flat number must be at most 5 characters long')
      .matches(/^[0-9A-Za-z]+S?$/, 'Flat number must consist only numbers and latin letters'),
});
export const validationSchemaNPDeliveryInternational = Yup.object().shape({
  intDeliveryAddress: Yup.string()
      .matches(/^[a-zA-Z0-9.,/ ]*$/, 'Address must consist only numbers and latin letters and include postal code, city, street and house number')
      .min(40, 'Address must be at least 40 characters long and include postal code, city, street and house number')
      .max(100, 'Address must be at most 100 characters long and include postal code, city, street and house number')
      .matches(/^(?!\s*$).+/, 'Address must not be empty and include postal code, city, street and house number')
      .required('Address is required'),
});
export const validationSchemaPromoCode = Yup.object().shape({
  promoCode: Yup.string()
      .test(
          'len',
          'Promo code must be between 1 and 15 characters long',
          (val) => val && val.length >= 1 && val.length <= 15,
      )
      .matches(/^[A-Za-z0-9]+$/, 'Promo code must contain only letters and numbers'),
});
export const validationSchemaCheckOutUserInfo = Yup.object().shape({
  phoneNumber: Yup.string()
      .matches(/^\d{12}$/, 'Phone number must be 12 digits')
      .required('Phone number is required'),
  email: Yup.string()
      .matches(emailRegex, 'Invalid email address')
      .required('Email is required'),
  lastName: Yup.string()
      .min(2, 'Last name has to be longer than 2 characters')
      .matches(/^[A-Z][a-z]+$/, 'The Last name must begin with a capital letter and consist only of latin letters')
      .max(15, 'Last name must be at most 15 characters long')
      .required('Last name is required'),
  firstName: Yup.string()
      .min(2, 'First name has to be longer than 2 characters')
      .matches(/^[A-Z][a-z]+$/, 'The First name must begin with a capital letter and consist only of latin letters')
      .max(15, 'First name must be at most 15 characters long')
      .required('First name is required'),
});
export const validationSchemaCardPayment = Yup.object().shape({
  cvvCvc: Yup.string()
      .matches(/^\d{3}$/, 'CVV/CVC must be 3 numbers long')
      .required('CVV/CVC is required'),
  validityDate: Yup.string()
      .matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Invalid data format')
      .required('Validity data is required'),
  cardNumber: Yup.string()
      .matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, 'Card number must be 16 numbers long')
      .required('Card number is required'),
});
export const validationSchemaNewsletterForm = Yup.object().shape({
  email: Yup.string()
      .matches(emailRegex, 'Invalid email address'),
});


