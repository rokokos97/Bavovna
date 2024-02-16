import React, {useEffect} from 'react';
import styles from './checkOutShoppingCartBlock.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import TextField from '../../../components/form/formFields/textField/textField';
import {useFormik} from 'formik';
import CheckOutShoppingCartBlockItemsList
  from './checkOutShoppingCartBlockItemsList/checkOutShoppingCartBlockItemsList';
import {
  getPromoCodeSale,
  getShippingPrice,
  setOrderAmount,
  setPromoCodeSale,
} from '../../../store/ordersSlice';
import {validationSchemaPromoCode} from '../../../utils/validationSchema';
import {getCartLength, getCartTotalPrice} from '../../../store/cartSlice';
import PropTypes from 'prop-types';
import LeftArrowIcon from '../../../components/svg/arrowIcons/leftArrowIcon/leftArrowIcon';

const CheckOutShoppingCartBlock = ({formik}) => {
  const dispatch = useDispatch();
  const cartLength = useSelector(getCartLength);
  const itemPrice = useSelector(getCartTotalPrice);
  const deliveryPrice = useSelector(getShippingPrice());
  const promoCode = useSelector(getPromoCodeSale());
  const finalDiscount = promoCode ? itemPrice * promoCode : null;
  const totalPrice = itemPrice - finalDiscount;
  const finalPrice = totalPrice + deliveryPrice;
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
    dispatch(setOrderAmount(totalPrice));
  }, [itemPrice]);
  return (
    <div className={styles.checkOutShoppingCartBlock} data-testid="CheckOutShoppingCartBlock">
      <div className={styles.wrapper}>
        <div className={styles.titleBlock}>
          <p className={styles.title}>shopping bag</p>
          <p>({cartLength} {cartLength===1?'item':'items'})</p>
        </div>
        <div>
          <CheckOutShoppingCartBlockItemsList/>
        </div>
        <form
          onSubmit={promoCodeFormik.handleSubmit}
          className={styles.form}>
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
            className={styles.arrowButton}
            type='submit'
          >
            <LeftArrowIcon/>
          </button>
        </form>
        <div className={styles.price}>
          <p>Order value</p>
          <p>{`${itemPrice} $`}</p>
        </div>
        {finalDiscount && <div className={styles.discount}>
          <p>Promo code</p>
          <p>{`-${finalDiscount} $`}</p>
        </div>}
        <div className={styles.price}>
          <p>Shipping</p>
          <p>{`${deliveryPrice} $`}</p>
        </div>
        <div className={styles.priceBlock}>
          <p>total</p>
          <p>{`${finalPrice} $`}</p>
        </div>
        <button
          type='button'
          onClick={()=> formik.handleSubmit()}
          disabled={!formik?.isValid}
          className={styles.button}
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
