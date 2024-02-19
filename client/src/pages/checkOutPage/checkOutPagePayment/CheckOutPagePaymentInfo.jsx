import React, {useEffect} from 'react';
import styles from './CheckOutPagePaymentInfo.module.scss';
import PaymentMethodSection from './PaymentMethodSection/PaymentMethodSection';
import CheckOutShoppingCartBlock from '../shoppingCartBlock/CheckOutShoppingCartBlock';
import {useFormik} from 'formik';
import {validationSchemaCardPayment} from '../../../utils/validationSchema';
import {useDispatch, useSelector} from 'react-redux';
import {
  addOrder,
  getDeliveryInfo,
  getOrderAmount,
  getPaymentMethod, getPromoCodeSale, getUserInfo, setOrderToInitialState,
} from '../../../store/ordersSlice';
import {customAlphabet} from 'nanoid/non-secure';
import {clearCart, getNormalizedCart} from '../../../store/cartSlice';
import {getUser, updateUser} from '../../../store/userSlice';
import {clearCartSessionStorage} from '../../../services/sessionStorage.service';
import {useNavigate} from 'react-router-dom';

const CheckOutPagePaymentInfo = () => {
  const currentPaymentMethod = useSelector(getPaymentMethod());
  const userInfo = useSelector(getUserInfo());
  const deliveryInfo = useSelector(getDeliveryInfo());
  const navigate = useNavigate();
  const orderAmount = useSelector(getOrderAmount());
  const dispatch = useDispatch();
  const promoCodeDiscount = useSelector(getPromoCodeSale());
  const user = useSelector(getUser);
  const cart = useSelector(getNormalizedCart);
  const navigation = useNavigate();
  const numbers = '0123456789';
  const generateId = customAlphabet(numbers, 15);
  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      validityDate: '',
      cvvCvc: '',
      cardHolderName: '',
    },
    validationSchema: currentPaymentMethod ==='Pay by card' ? validationSchemaCardPayment: null,
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
      if (user) {
        const newUser = await {
          ...user,
          orders: [...user.orders, newOrder],
        };
        await dispatch(updateUser(newUser));
      }
      dispatch(addOrder(newOrder));
      await dispatch(clearCart());
      clearCartSessionStorage();
      dispatch(setOrderToInitialState());
      navigation('/orderSuccess');
    }});
  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Місяці від 0 до 11
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
