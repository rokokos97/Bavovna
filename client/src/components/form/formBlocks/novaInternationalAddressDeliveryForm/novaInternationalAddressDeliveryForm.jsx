import React from 'react';
import styles from './novaInternationalAddressDeliveryForm.module.scss';
import TextAreaField from '../../formFields/textAreaField/textAreaField';
import PropTypes from 'prop-types';
import {useFormik} from 'formik';
import {validationSchemaIntDeliveryForm} from '../../../../utils/validationSchema';
import {nanoid} from 'nanoid/non-secure';
import {getUser, updateUser} from '../../../../store/userSlice';
import {useDispatch, useSelector} from 'react-redux';
const NovaInternationalAddressDeliveryForm = ({isButton}) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const formik= useFormik({
    initialValues: {
      intDeliveryAddress: '',
      deliveryMethod: 'International delivery',
      label: '',
      price: 20,
    },
    validationSchema: validationSchemaIntDeliveryForm,
    onSubmit: () => {
      const newAddress = {
        ...formik.values,
        _id: nanoid(12),
        label: `${formik.values.intDeliveryAddress}`,
      };
      const newUser = {
        ...user,
        deliveryAddress: [...user.deliveryAddress, newAddress],
        currentDeliveryAddress: {...newAddress},
      };
      dispatch(updateUser(newUser));
    },
  });
  console.log(formik.values.intDeliveryAddress);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className={styles.novaInternationalAddressDeliveryForm}
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
      {isButton && <button
        type='submit'
        disabled={!formik.dirty || !formik.isValid}
        className={styles.button}
      >
        <span>
                  add address
        </span>
      </button>}
    </form>
  );
};

NovaInternationalAddressDeliveryForm.propTypes = {
  isButton: PropTypes.bool,
};
export default NovaInternationalAddressDeliveryForm;
