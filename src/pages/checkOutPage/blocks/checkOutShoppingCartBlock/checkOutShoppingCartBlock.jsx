import React from 'react';
import styles from './checkOutShoppingCartBlock.module.scss';
import {useSelector} from 'react-redux';
import {getCartLength, getCartTotalPrice} from '../../../../store/cartSlice';
import TextField from '../../../../components/form/formFields/textField/textField';
import {useFormik} from 'formik';
import {validationSchemaPromoCode} from '../../../../utils/validationSchema';
import CheckOutShoppingCartBlockItemsList
  from './checkOutShoppingCartBlockItemsList/checkOutShoppingCartBlockItemsList';

const CheckOutShoppingCartBlock = () => {
  const cartLength = useSelector(getCartLength());
  const price = useSelector(getCartTotalPrice());
  const formik = useFormik({
    initialValues: {
      promoCode: '',
    }, validationSchema: validationSchemaPromoCode,
    onSubmit: (values) => {
      console.log(values.promoCode);
    },
  });
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
        onSubmit={formik.handleSubmit}
        className={styles.form}>
        <TextField
          label='Promo code'
          name='promoCode'
          placeholder='Enter your promo code'
          value={formik.values.promoCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.promoCode}
          touched={formik.touched.promoCode}
        />
        <button
          disabled={!formik.isValid || !formik.dirty}
          className={styles.arrowButton}
          type='submit'
        >
          <span>
            -&gt;
          </span>
        </button>
      </form>
      <div className={styles.priceBlock}>
        <p>total</p>
        <p>{`${price} $`}</p>
      </div>
      <button
        className={styles.button}
        onClick={() => navigate('/cart/checkout')}
      >
        <span>
            Continue to check out
        </span>
      </button>
    </div>
  );
};

export default CheckOutShoppingCartBlock;
