import React from 'react';
import styles from './novaInternationalAddressDeliveryForm.module.scss';
import TextAreaField from '../../formFields/textAreaField/textAreaField';
import {useDispatch, useSelector} from 'react-redux';
import {getUser, updateUser} from '../../../../store/userSlice';
import {useFormik} from 'formik';
import {validationSchemaAddressForm} from '../../../../utils/validationSchema';
import {nanoid} from 'nanoid/non-secure';
const NovaInternationalAddressDeliveryForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser());
  const formik = useFormik({
    initialValues: {
      intDeliveryAddress: '',
    },
    validationSchema: validationSchemaAddressForm,
    onSubmit: () => {
      const updatedUser = {...user,
        deliveryAddress: [...user.deliveryAddress, {
          label: formik.values.intDeliveryAddress,
          value: formik.values,
          deliveryMethod: 'internationalShipping',
          _id: nanoid(12),
        }]};
      dispatch(updateUser(updatedUser));
    }},
  );
  return (
    <form className={styles.novaInternationalAddressDeliveryForm} onSubmit={formik.handleSubmit}
      data-testid="NovaInternationalAddressDeliveryForm">
      <TextAreaField
        label='Delivery address '
        name='intDeliveryAddress'
        placeholder='Enter delivery address'
        onChange={formik.handleChange}
        value={formik.values.intDeliveryAddress}
        error={formik.errors.intDeliveryAddress}
        onBlur={formik.handleBlur}
        touched={formik.touched.intDeliveryAddress}
      />
      <button
        type='submit'
        disabled={!formik.dirty || !formik.isValid}
        className={styles.button}
      >
        <span>
                  add address
        </span>
      </button>
    </form>
  );
};
export default NovaInternationalAddressDeliveryForm;
