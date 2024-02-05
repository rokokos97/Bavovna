import React from 'react';
import styles from './checkOutPageDelivery.module.scss';
import CheckOutShoppingCartBlock from '../ShoppingCartBlock/checkOutShoppingCartBlock';
import DeliveryOptionsSection from './deliveryOptionsSection/deliveryOptionsSection';
import {useFormik} from 'formik';
import {validationSchemaCardPayment} from '../../../utils/validationSchema';
import {useSelector} from 'react-redux';
import {getPaymentMethod} from '../../../store/ordersSlice';
const CheckOutPageDeliveryInfo = () => {
  const currentPaymentMethod = useSelector(getPaymentMethod());
  const initialValues = {
    cardNumber: '',
    validityDate: '',
    cvvCvc: '',
    cardHolderName: '',
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: currentPaymentMethod === 'Pay by card' ? validationSchemaCardPayment: null,
  });
  return (
    <div className={styles.checkOutPage} data-testid="CheckOutPageDelivery">
      <DeliveryOptionsSection formik={formik}/>
      <CheckOutShoppingCartBlock/>
    </div>
  );
};

export default CheckOutPageDeliveryInfo;
