import React from 'react';
import styles from './checkOutBlock.module.scss';
import TextField from '../../../../components/form/formFields/textField/textField';
import {useFormik} from 'formik';
import {validationSchemaPromoCode} from '../../../../utils/validationSchema';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getCartTotalPrice} from '../../../../store/cartSlice';

const CheckOutBlock = () => {
  const totalPrice = useSelector(getCartTotalPrice());
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      promoCode: '',
    }, validationSchema: validationSchemaPromoCode,
    onSubmit: (values) => {
      console.log(values.promoCode);
    },
  });
  return (
    <div className={styles.checkOutBlock} data-testid="CheckOutBlock">
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
      <div className={styles.totalPriceBlock}>
        <p>total</p>
        {totalPrice}$
      </div>
      <div className={styles.buttonsBlock}>
        <button
          onClick={() => navigate('/cart/checkout')}
        >
          <span>
            Continue to check out
          </span>
        </button>
        <button
          onClick={()=> navigate('/catalogue')}
        >
          <span>
            Continue shopping
          </span>
        </button>
      </div>
    </div>
  );
};

export default CheckOutBlock;
