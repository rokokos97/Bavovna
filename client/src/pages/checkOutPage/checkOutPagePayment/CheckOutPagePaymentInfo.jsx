import React, {useEffect} from 'react';
import styles from './CheckOutPagePaymentInfo.module.scss';
import PaymentMethodSection from './PaymentMethodSection/PaymentMethodSection';
import CheckOutShoppingCartBlock from '../shoppingCartBlock/CheckOutShoppingCartBlock';
import {useFormik} from 'formik';
import {validationSchemaCardPayment} from '../../../utils/validationSchema';
import {useDispatch, useSelector} from 'react-redux';
import {
  addOrder,
  getUserInfo,
  getDeliveryInfo,
  getOrderAmount,
  getPaymentMethod,
  getPromoCodeSale,
  setOrderToInitialState,
} from '../../../store/ordersSlice';
import {customAlphabet} from 'nanoid/non-secure';
import {clearCart, getNormalizedCart} from '../../../store/cartSlice';
import {getUser, updateUserData} from '../../../store/userSlice';
import {clearCartSessionStorage} from '../../../services/sessionStorage.service';
import {useNavigate} from 'react-router-dom';

const CheckOutPagePaymentInfo = () => {
  const user = useSelector(getUser);
  const cart = useSelector(getNormalizedCart);
  const userInfo = useSelector(getUserInfo);
  const orderAmount = useSelector(getOrderAmount);
  const deliveryInfo = useSelector(getDeliveryInfo);
  const promoCodeDiscount = useSelector(getPromoCodeSale);
  const currentPaymentMethod = useSelector(getPaymentMethod);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const numbers = '0123456789';
  const generateId = customAlphabet(numbers, 15);
  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      validityDate: '',
      cvvCvc: '',
      cardHolderName: '',
    },
    validationSchema: currentPaymentMethod === 'Pay by card' ? validationSchemaCardPayment: null,
    onSubmit: async ()=> {
      const newOrder = {
        deliveryInfo: deliveryInfo,
        paymentMethod: currentPaymentMethod,
        promoCodeDiscount: promoCodeDiscount,
        items: cart,
        userInfo: userInfo,
        orderAmount: orderAmount,
        _id: generateId(),
        date: formatDate(new Date()),
        paymentStatus: currentPaymentMethod ==='Pay by card'? 'paid': 'pending payment',
        deliveryStatus: 'pending',
      };
      console.log('newOrder', newOrder);
      if (user) {
        const newUser = await {
          ...user,
          orders: [...user.orders, newOrder],
        };
        await dispatch(updateUserData(newUser));
      }
      dispatch(addOrder(newOrder));
      await dispatch(clearCart());
      clearCartSessionStorage();
      dispatch(setOrderToInitialState());
      navigate('/orderSuccess');
    }});
  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }
  useEffect(()=>{
    formik.resetForm({
      values: {
        cardNumber: '',
        validityDate: '',
        cvvCvc: '',
        cardHolderName: '',
      },
    });
    formik.setTouched({
      cardHolderName: true,
    });
  }, [currentPaymentMethod, formik.resetForm]);
  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
    if (!userInfo.firstName || !deliveryInfo.deliveryMethod) {
      navigate('/cart');
    }
  }, [cart]);
  return (
    <div className={styles.checkOutPagePaymentInfo} data-testid="CheckOutPagePaymentInfo">
      <PaymentMethodSection formik={formik}/>
      <CheckOutShoppingCartBlock formik={formik}/>
    </div>
  );
};

export default CheckOutPagePaymentInfo;
