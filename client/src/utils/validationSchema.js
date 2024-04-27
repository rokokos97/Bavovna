import * as Yup from 'yup';

const streetNameRegex = /^[A-Z][a-z'-]*\s?([A-Z]?[a-z'-]*)?$/;
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!_$%&*"])(?=.*[A-Z]).{8,}$/;
const nameRegex = /^[A-Z][a-z]{1,14}$/;

export const validationSchemaRegisterForm = Yup.object().shape({
  license: Yup.boolean()
      .oneOf([true], 'You must agree to the terms and conditions'),
  confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Field is required'),
  password: Yup.string()
      .max(16, 'Password hasn\'t\' to be longer than 16 characters')
      .matches(passwordRegex, 'Password must contain at least 8 symbols long, include number, capital letter, special characters !_$%&*')
      .required('Field is required'),
  email: Yup.string()
      .matches(emailRegex, 'Invalid email address')
      .required('Field is required'),
  lastName: Yup.string()
      .matches(nameRegex, 'The name must begin with a capital letter, consist only of latin letters and must be between 2 and 15 characters long')
      .required('Field is required'),
  firstName: Yup.string()
      .matches(nameRegex, 'The name must begin with a capital letter, consist only of latin letters and must be between 2 and 15 characters long')
      .required('Field is required'),
});
export const validationSchemaLoginForm = Yup.object().shape({
  password: Yup.string()
      .required('Field is required'),
  email: Yup.string()
      .matches( emailRegex, 'Email format is not valid')
      .required('Field is required'),
});
export const validationSchemaUserDataForm = Yup.object().shape({
  currentPassword: Yup.string(),
  newPassword: Yup.string()
      .matches(passwordRegex, 'Password must contain at least 8 symbols long, include number, capital letter, special characters !_$%&*')
      .max(16, 'Password can\'t be longer than 16 characters'),
  phoneNumber: Yup.string()
      .matches(/^\d{12}$/, 'Phone number must be 12 digits'),
  email: Yup.string()
      .matches(emailRegex, 'Invalid email address'),
  lastName: Yup.string()
      .matches(nameRegex, 'The name must begin with a capital letter, consist only of latin letters and must be between 2 and 15 characters long')
      .required('Field is required'),
  firstName: Yup.string()
      .matches(nameRegex, 'The name must begin with a capital letter, consist only of latin letters and must be between 2 and 15 characters long')
      .required('Field is required'),
});
export const validationSchemaNPDeliveryWarehouse = Yup.object().shape({
  warehouse: Yup.object().test('object-length', 'Warehouse is required', (obj) => {
    return Object.keys(obj).length === 2;
  }),
  city: Yup.object().test('object-length', 'City is required', (obj) => {
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
      .matches(nameRegex, 'The name must begin with a capital letter, consist only of latin letters and must be between 2 and 15 characters long')
      .required('First name is required'),
  firstName: Yup.string()
      .matches(nameRegex, 'The name must begin with a capital letter, consist only of latin letters and must be between 2 and 15 characters long')
      .required('Name is required'),
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
export const validationSchemaEmail = Yup.object().shape({
  email: Yup.string()
      .matches(emailRegex, 'Invalid email address'),
});


