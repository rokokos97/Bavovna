import React from 'react';
import styles from './paymentMethodSection.module.scss';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {getPaymentMethod, setPaymentMethod} from '../../../store/ordersSlice';
import UserPaymentByCardForm from '../../../components/form/formBlocks/userPaymentByCardForm/userPaymentByCardForm';
import RadioButtonCheckedIcon from '../../../components/svg/radioButtonCheckedIcon/radioButtonCheckedIcon';
import RadioButtonEmptyIcon from '../../../components/svg/radioButtonEmptyIcon/radioButtonEmptyIcon';

const PaymentMethodSection = ({formik}) => {
  const dispatch = useDispatch();
  const currentPaymentMethod = useSelector(getPaymentMethod());
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
  return currentPaymentMethod && (
    <div className={styles.userPaymentMethodsList} data-testid="PaymentMethodSection">
      {paymentMethodsList.map((method)=> (
        <div
          style={{display: 'block'}}
          key={method.id}>
          <div className={styles.radioWrapper}>
            <button
              className={styles.radioButton}
              type='button'
              onClick = {() => dispatch(setPaymentMethod(method.id))}
            >
              {currentPaymentMethod === method.id ? <RadioButtonCheckedIcon/>:<RadioButtonEmptyIcon/>}
            </button>
            <label
              className={styles.label}
            >
              {method.label}
            </label>
          </div>
        </div>))}
      {paymentMethodsList.map((method)=> currentPaymentMethod === method.id ? <div key={method.id}>{method.value}</div>: null)}
    </div>
  );
};
PaymentMethodSection.propTypes = {
  formik: PropTypes.object.isRequired,
};
export default PaymentMethodSection;
