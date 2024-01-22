import React, {useEffect, useState} from 'react';
import styles from './checkOutShoppingCartBlock.module.scss';
import {useSelector} from 'react-redux';
import {getCartLength, getCartTotalPrice} from '../../../../store/cartSlice';
import TextField from '../../../../components/form/formFields/textField/textField';
import {useFormik} from 'formik';
import {validationSchemaPromoCode} from '../../../../utils/validationSchema';
import CheckOutShoppingCartBlockItemsList
  from './checkOutShoppingCartBlockItemsList/checkOutShoppingCartBlockItemsList';
import PropTypes from 'prop-types';
import deliveryMethodsList from '../../../../utils/deliveryMethodsList';
import {getUser} from '../../../../store/userSlice';

const CheckOutShoppingCartBlock = ({selectedDeliveryMethod, userCurrentDelivery, onTotalPriceChange}) => {
  const user = useSelector(getUser);
  const cartLength = useSelector(getCartLength);
  const itemPrice = useSelector(getCartTotalPrice);
  const [promoCode, setPromoCode] = useState(null);
  const [deliveryPrice, setDeliveryPrice] = useState(deliveryMethodsList[1][1].price);
  const finalDiscount = promoCode ? itemPrice * promoCode : null;
  const totalPrice = itemPrice - finalDiscount + deliveryPrice;
  const promoCodeFormik = useFormik({
    initialValues: {
      promoCode: '',
    }, validationSchema: validationSchemaPromoCode,
    onSubmit: (values) => {
      console.log(values);
      if (values.promoCode === 'BAVOVNA5' || values.promoCode === 'BAVOVNA10' || values.promoCode === 'BAVOVNA15') {
        const number = values.promoCode.slice(7);
        console.log('number', number);
        setPromoCode(number/100);
      } else {
        promoCodeFormik.setErrors({promoCode: 'Invalid promo code'});
      }
    },
  });
  useEffect(()=> {
    if (userCurrentDelivery === '1') {
      setDeliveryPrice(deliveryMethodsList[1][selectedDeliveryMethod].price);
    } else {
      user && setDeliveryPrice(user.deliveryAddress.find((item)=>item._id === user.currentDeliveryAddress).price);
    }
  }, [userCurrentDelivery, selectedDeliveryMethod, user]);
  useEffect(() => {
    onTotalPriceChange(totalPrice);
  }, [totalPrice, onTotalPriceChange]);
  return (
    <div className={styles.checkOutShoppingCartBlock} data-testid="CheckOutShoppingCartBlock">
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
          <span>
            -&gt;
          </span>
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
        <p>{`${totalPrice} $`}</p>
      </div>
    </div>
  );
};
CheckOutShoppingCartBlock.propTypes = {
  onTotalPriceChange: PropTypes.func,
  userCurrentDelivery: PropTypes.string,
  selectedDeliveryMethod: PropTypes.string,
};
export default CheckOutShoppingCartBlock;
