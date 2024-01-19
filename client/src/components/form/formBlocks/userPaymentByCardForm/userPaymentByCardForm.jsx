import React from 'react';
import styles from './userPaymentByCardForm.module.scss';
import PropTypes from 'prop-types';
import TextField from '../../formFields/textField/textField';

const UserPaymentByCardForm = ({formik}) => {
  const handleCardNumberChange = (e) => {
    let {value} = e.target;

    // Видаляємо все, крім цифр
    value = value.replace(/\D/g, '');

    // Видаляємо надлишкові цифри
    value = value.slice(0, 16);

    // Додаємо пробіл після кожної четвертої цифри
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

    formik.setFieldValue('cardNumber', value);
  };
  const handleValidityDateChange = (e) => {
    let {value} = e.target;
    value = value.replace(/\D/g, '');
    value = value.slice(0, 4);
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    if (e.nativeEvent.inputType === 'deleteContentBackward' && value.length === 3) {
      value = value.slice(0, 2);
    }
    formik.setFieldValue('validityDate', value);
  };
  return (
    <div className={styles.userPaymentByCardForm} data-testid="UserPaymentByCardForm">
      <TextField
        label='Card number'
        name='cardNumber'
        placeholder='Enter the card number'
        onChange={handleCardNumberChange}
        value={formik.values.cardNumber}
        error={formik.errors.cardNumber}
        onBlur={formik.handleBlur}
        touched={formik.touched.cardNumber}
      />
      <div className={styles.block}>
        <TextField
          label='Validity date'
          name='validityDate'
          placeholder='MM/YY'
          onChange={handleValidityDateChange}
          value={formik.values.validityDate}
          error={formik.errors.validityDate}
          onBlur={formik.handleBlur}
          touched={formik.touched.validityDate}
        />
        <TextField
          label='CVV/CVC'
          name='cvvCvc'
          placeholder='3 numbers'
          onChange={formik.handleChange}
          value={formik.values.cvvCvc}
          error={formik.errors.cvvCvc}
          onBlur={formik.handleBlur}
          touched={formik.touched.cvvCvc}
        />
      </div>
      <TextField
        label='Name on card'
        name='cardHolderName'
        placeholder='Enter the name indicated on the card'
        onChange={formik.handleChange}
        value={formik.values.cardHolderName}
        error={formik.errors.cardHolderName}
        onBlur={formik.handleBlur}
        touched={formik.touched.cardHolderName}
      />
    </div>
  );
};
UserPaymentByCardForm.propTypes = {
  formik: PropTypes.object.isRequired,
};
export default UserPaymentByCardForm;
