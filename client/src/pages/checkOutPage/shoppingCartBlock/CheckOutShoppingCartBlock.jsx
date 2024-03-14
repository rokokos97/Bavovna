import React, {useEffect, useState} from 'react';
import styles from './CheckOutShoppingCartBlock.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import TextField from '../../../components/form/formFields/TextField/TextField';
import {useFormik} from 'formik';
import CheckOutShoppingCartBlockItemsList
  from './CheckOutShoppingCartBlockItemsList/CheckOutShoppingCartBlockItemsList';
import {
  getDeliveryOption,
  getPromoCodeSale,
  getShippingPrice,
  setOrderAmount,
  setPromoCodeSale,
} from '../../../store/ordersSlice';
import {validationSchemaPromoCode} from '../../../utils/validationSchema';
import {getCartLength, getCartTotalPrice} from '../../../store/cartSlice';
import PropTypes from 'prop-types';
import LeftArrowIcon from '../../../components/svg/arrowIcons/LeftArrowIcon/LeftArrowIcon';
import {getUser} from '../../../store/userSlice';

const CheckOutShoppingCartBlock = ({formik}) => {
  const dispatch = useDispatch();
  const user= useSelector(getUser);
  const promoCode = useSelector(getPromoCodeSale);
  const itemPrice = useSelector(getCartTotalPrice);
  const cartLength = useSelector(getCartLength);
  const deliveryPrice = useSelector(getShippingPrice);
  const currentDeliveryOption = useSelector(getDeliveryOption);
  const [currentDeliveryPrice, setCurrentDeliveryPrice] = useState(80);
  const finalDiscount = promoCode ? itemPrice * promoCode : null;
  const totalPrice = itemPrice - finalDiscount;
  const finalPrice = totalPrice + currentDeliveryPrice;
  const promoCodeFormik = useFormik({
    initialValues: {
      promoCode: '',
    }, validationSchema: validationSchemaPromoCode,
    onSubmit: (values) => {
      if (values.promoCode === 'BAVOVNA5' || values.promoCode === 'BAVOVNA10' || values.promoCode === 'BAVOVNA15') {
        const number = values.promoCode.slice(7);
        dispatch(setPromoCodeSale(number/100));
      } else {
        promoCodeFormik.setErrors({promoCode: 'Invalid promo code. Please check the code and try again'});
      }
    },
  });
  useEffect(()=>{
    if (currentDeliveryOption === 'saved address') {
      const currentDeliveryAddress = user.deliveryAddress.find((address) => address._id === user.currentDeliveryAddress);
      setCurrentDeliveryPrice(currentDeliveryAddress.deliveryPrice);
    } else {
      setCurrentDeliveryPrice(deliveryPrice);
    }
  }, [deliveryPrice, currentDeliveryOption]);
  useEffect(()=>{
    dispatch(setOrderAmount(totalPrice));
  }, [itemPrice]);
  return (
    <div className={styles.checkOutShoppingCartBlock} data-testid="CheckOutShoppingCartBlock">
      <div className={styles.checkOutShoppingCartBlock__wrapper}>
        <div className={styles.checkOutShoppingCartBlock__titleBlock}>
          <p className={styles.checkOutShoppingCartBlock__title}>shopping bag</p>
          <p>({cartLength} {cartLength===1?'item':'items'})</p>
        </div>
        <div>
          <CheckOutShoppingCartBlockItemsList/>
        </div>
        <form
          onSubmit={promoCodeFormik.handleSubmit}
          className={styles.checkOutShoppingCartBlock__form}>
          <TextField
            label='Promo code'
            name='promoCode'
            placeholder='Enter your promo code'
            value={promoCodeFormik.values.promoCode}
            onChange={promoCodeFormik.handleChange}
            onBlur={promoCodeFormik.handleBlur}
            error={promoCodeFormik.errors.promoCode}
            touched={promoCodeFormik.touched.promoCode}
          />
          <button
            disabled={!promoCodeFormik.isValid || !promoCodeFormik.dirty}
            className={styles.checkOutShoppingCartBlock__arrowButton}
            type='submit'
          >
            <LeftArrowIcon/>
          </button>
        </form>
        <div className={styles.checkOutShoppingCartBlock__price}>
          <p>Order value</p>
          <p>{`${itemPrice} $`}</p>
        </div>
        {finalDiscount && <div className={styles.checkOutShoppingCartBlock__discount}>
          <p>Promo code</p>
          <p>{`-${finalDiscount} $`}</p>
        </div>}
        <div className={styles.checkOutShoppingCartBlock__price}>
          <p>Shipping</p>
          <p>{`${currentDeliveryPrice} $`}</p>
        </div>
        <div className={styles.checkOutShoppingCartBlock__priceBlock}>
          <p>total</p>
          <p>{`${finalPrice} $`}</p>
        </div>
        <button
          type='button'
          onClick={()=> formik.handleSubmit()}
          disabled={!formik?.isValid}
          className={styles.checkOutShoppingCartBlock__button}
        >
          <span>
                  place the order
          </span>
        </button>
      </div>
    </div>
  );
};
CheckOutShoppingCartBlock.propTypes = {
  formik: PropTypes.object,
};
export default CheckOutShoppingCartBlock;
