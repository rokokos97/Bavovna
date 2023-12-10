import React, {useState} from 'react';
import styles from './userPaymentMethodsList.module.scss';
import PropTypes from 'prop-types';
import RadioButtonCheckedIcon from '../../../../../components/svg/radioButtonCheckedIcon/radioButtonCheckedIcon';
import RadioButtonEmptyIcon from '../../../../../components/svg/radioButtonEmptyIcon/radioButtonEmptyIcon';
import UserPaymentByCardForm
  from '../../../../../components/form/formBlocks/userPaymentByCardForm/userPaymentByCardForm';

const UserPaymentMethodsList = ({formik}) => {
  const [currentPaymentMethod, setCurrentPaymentMethod] = useState('1');
  const paymentMethodsList = [
    {
      id: '1',
      label: 'Pay by card',
      value: <UserPaymentByCardForm formik={formik}/>,
    },
    {
      id: '2',
      label: 'Payment on receipt',
      value: <></>,
    },
  ];
  return (
    <div className={styles.userPaymentMethodsList} data-testid="UserPaymentMethodsList">
      {paymentMethodsList.map((method)=> (
        <div
          style={{display: 'block'}}
          key={method.id}>
          <div className={styles.radioWrapper}>
            <div
              className={styles.radioButton}
              onClick = {()=> setCurrentPaymentMethod(method.id)}
            >
              {currentPaymentMethod === method.id ? <RadioButtonCheckedIcon/>:<RadioButtonEmptyIcon/>}
            </div>
            <label
              className={styles.label}
            >
              {method.label}
            </label>
          </div>
        </div>))}
      {paymentMethodsList.map((method)=> currentPaymentMethod === method.id ? method.value: null)}
    </div>
  );
};
UserPaymentMethodsList.propTypes = {
  formik: PropTypes.object.isRequired,
};
export default UserPaymentMethodsList;
