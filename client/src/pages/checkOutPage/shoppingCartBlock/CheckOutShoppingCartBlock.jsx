import React, { useEffect, useState } from 'react';
import styles from './CheckOutShoppingCartBlock.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '../../../components/form/formFields/TextField/TextField';
import { useFormik } from 'formik';
import CheckOutShoppingCartBlockItemsList from './CheckOutShoppingCartBlockItemsList/CheckOutShoppingCartBlockItemsList';
import {
  getPaymentMethod,
  getPromoCodeSale,
  getShippingPrice,
  setPromoCodeSale,
} from '../../../store/ordersSlice';
import { validationSchemaPromoCode } from '../../../utils/validationSchema';
import { getCartLength, getCartTotalPrice } from '../../../store/cartSlice';
import PropTypes from 'prop-types';
import LeftArrowIcon from '../../../components/svg/arrowIcons/LeftArrowIcon/LeftArrowIcon';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { convertPrice } from '../../../services/currency.service';
import { Modal } from '../../../components/modal';
import PaymentSuccessModal from '../../../components/modal/modalContent/PaymentSuccessModal/PaymentSuccessModal';
import { showBodyOverflow } from '../../../utils/modal.service';
import { useLocation } from 'react-router-dom';
import FondyCheckout from '../../../components/Payments/Fondy/FondyCheckout';

const CheckOutShoppingCartBlock = ({ formik }) => {
  const dispatch = useDispatch();
  const [currentDeliveryPrice, setCurrentDeliveryPrice] = useState(0);
  const [showPaymentSuccessModal, setShowPaymentSuccessModal] = useState(false);
  const promoCode = useSelector(getPromoCodeSale);
  const orderAmount = useSelector(getCartTotalPrice);
  const cartLength = useSelector(getCartLength);
  const paymentMethod = useSelector(getPaymentMethod);
  const deliveryPrice = useSelector(getShippingPrice);
  const finalDiscount = promoCode ? orderAmount * promoCode : null;
  const totalPrice = orderAmount - finalDiscount;
  const finalPrice = totalPrice + (orderAmount > 1000 ? 0 : currentDeliveryPrice);
  const exchangeRate = 45.5;
  const convertedPrice = convertPrice(finalPrice, exchangeRate);
  const path = useLocation().pathname;

  const promoCodeFormik = useFormik({
    initialValues: {
      promoCode: '',
    },
    validationSchema: validationSchemaPromoCode,
    onSubmit: (values) => {
      if (
        values.promoCode === 'BAVOVNA5' ||
        values.promoCode === 'BAVOVNA10' ||
        values.promoCode === 'BAVOVNA15'
      ) {
        const number = values.promoCode.slice(7);
        dispatch(setPromoCodeSale(number / 100));
        promoCodeFormik.resetForm();
      } else {
        promoCodeFormik.setErrors({
          promoCode: 'Invalid promo code. Please check the code and try again',
        });
      }
    },
  });
  useEffect(() => {
    if (orderAmount < 1000 && deliveryPrice) {
      setCurrentDeliveryPrice(deliveryPrice);
    }
  }, [deliveryPrice]);
  const closeModal = () => {
    setShowPaymentSuccessModal(false);
    formik.handleSubmit;
    showBodyOverflow();
  };
  return (
    <div className={styles.checkOutShoppingCartBlock} data-testid="CheckOutShoppingCartBlock">
      <div className={styles.checkOutShoppingCartBlock__wrapper}>
        <div className={styles.checkOutShoppingCartBlock__titleBlock}>
          <p className={styles.checkOutShoppingCartBlock__title}>shopping bag</p>
          <p>
            ({cartLength} {cartLength === 1 ? 'item' : 'items'})
          </p>
        </div>
        <div>
          <CheckOutShoppingCartBlockItemsList />
        </div>
        {path === '/cart/checkoutPayment' && (
          <form
            onSubmit={promoCodeFormik.handleSubmit}
            className={styles.checkOutShoppingCartBlock__form}
          >
            <TextField
              label="Promo code"
              name="promoCode"
              placeholder="Enter your promo code"
              value={promoCodeFormik.values.promoCode}
              onChange={promoCodeFormik.handleChange}
              onBlur={promoCodeFormik.handleBlur}
              error={promoCodeFormik.errors.promoCode}
              touched={promoCodeFormik.touched.promoCode}
            />
            <button
              disabled={!promoCodeFormik.isValid || !promoCodeFormik.dirty}
              className={styles.checkOutShoppingCartBlock__arrowButton}
              type="submit"
            >
              <LeftArrowIcon />
            </button>
          </form>
        )}
        <div className={styles.checkOutShoppingCartBlock__price}>
          <p>Order value</p>
          <p>{`${orderAmount} ₴`}</p>
        </div>
        {finalDiscount && (
          <div className={styles.checkOutShoppingCartBlock__discount}>
            <p>Promo code</p>
            <p>{`-${finalDiscount} ₴`}</p>
          </div>
        )}
        <div className={styles.checkOutShoppingCartBlock__price}>
          <p>Shipping</p>
          <p>{currentDeliveryPrice ? currentDeliveryPrice : 'Select a delivery method'}</p>
        </div>
        <div className={styles.checkOutShoppingCartBlock__priceBlock}>
          <p>total</p>
          <p>{`${finalPrice} ₴`}</p>
        </div>
        {paymentMethod === 'Payment by PayPal' ? (
          <PayPalButtons
            style={{ layout: 'vertical' }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: convertedPrice,
                      currency_code: 'USD',
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                formik.handleSubmit();
              });
            }}
            onError={(err) => {
              setShowPaymentSuccessModal(true);
              console.log('err', err);
            }}
          />
        ) : (
          <button
            type="button"
            onClick={() => formik.handleSubmit()}
            disabled={!paymentMethod}
            className={styles.checkOutShoppingCartBlock__button}
          >
            <span>place the order</span>
          </button>
        )}
        <FondyCheckout amount={finalPrice} currency="UAH" orderId="123456" />
      </div>
      <Modal isOpen={showPaymentSuccessModal} handleCloseModal={closeModal}>
        <PaymentSuccessModal handleCloseModal={closeModal} type="success" />
      </Modal>
    </div>
  );
};
CheckOutShoppingCartBlock.propTypes = {
  formik: PropTypes.object,
};
export default CheckOutShoppingCartBlock;
