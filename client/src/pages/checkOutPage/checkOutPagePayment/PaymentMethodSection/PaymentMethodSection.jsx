import React from 'react';
import styles from './PaymentMethodSection.module.scss';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {getPaymentMethod, setPaymentMethod} from '../../../../store/ordersSlice';
import UserPaymentByCardForm from '../../../../components/form/formBlocks/UserPaymentByCardForm/UserPaymentByCardForm';
import RadioButtonCheckedIcon
  from '../../../../components/svg/radioButtonIcons/RadioButtonCheckedIcon/RadioButtonCheckedIcon';
import RadioButtonEmptyIcon
  from '../../../../components/svg/radioButtonIcons/RadioButtonEmptyIcon/RadioButtonEmptyIcon';
import LeftArrowIcon from '../../../../components/svg/arrowIcons/LeftArrowIcon/LeftArrowIcon';
import {useNavigate} from 'react-router-dom';

const PaymentMethodSection = ({formik}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    <div
      className={styles.userPaymentMethodsList}
      data-testid="PaymentMethodSection"
    >
      <p className={styles.userPaymentMethodsList__title}>Payment</p>
      <form
        onSubmit={formik.handleSubmit}
        className={styles.userPaymentMethodsList__block}
      >
        {paymentMethodsList.map((method)=> (
          <div
            style={{display: 'block'}}
            key={method.id}>
            <div className={styles.userPaymentMethodsList__radioWrapper}>
              <button
                className={styles.userPaymentMethodsList__radioButton}
                type='button'
                onClick = {() => dispatch(setPaymentMethod(method.label))}
              >
                {currentPaymentMethod === method.label ? <RadioButtonCheckedIcon/>:<RadioButtonEmptyIcon/>}
              </button>
              <label
                className={styles.userPaymentMethodsList__label}
              >
                {method.label}
              </label>
            </div>
          </div>))}
        {paymentMethodsList.map((method)=> currentPaymentMethod === method.label ? <div key={method.id}>{method.value}</div>: null)}
      </form>
      <button
        type='button'
        onClick={()=> navigate(-1) }
        className={styles.userPaymentMethodsList__buttonLeft}
      >
        <LeftArrowIcon/>
        <span>
                go back
        </span>
      </button>
    </div>
  );
};
PaymentMethodSection.propTypes = {
  formik: PropTypes.object.isRequired,
};
export default PaymentMethodSection;
