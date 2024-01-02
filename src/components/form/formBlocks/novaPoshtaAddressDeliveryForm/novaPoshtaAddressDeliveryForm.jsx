import React from 'react';
import styles from './novaPoshtaAddressDeliveryForm.module.scss';
import SelectField from '../../formFields/selectField/selectField';
import TextField from '../../formFields/textField/textField';
import {useDispatch, useSelector} from 'react-redux';
import {getCitiesList} from '../../../../store/citiesSlice';
import PropTypes from 'prop-types';
import {useFormik} from 'formik';
import {validationSchemaNPDeliveryAddress} from '../../../../utils/validationSchema';
import {nanoid} from 'nanoid/non-secure';
import {getUser, updateUser} from '../../../../store/userSlice';

const NovaPoshtaAddressDeliveryForm = ({isButton}) => {
  const citiesList = useSelector(getCitiesList());
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const formik= useFormik({
    initialValues: {
      city: {},
      street: '',
      houseNumber: '',
      flatNumber: '',
      deliveryMethod: 'Nova poshta delivery to the address',
      label: '',
    },
    validationSchema: validationSchemaNPDeliveryAddress,
    onSubmit: () => {
      const newAddress = {
        ...formik.values,
        _id: nanoid(12),
        label: `${formik.values.city.label}, str. ${formik.values.street}, bld. ${formik.values.houseNumber}
         ${formik.values.flatNumber?', flat.'+formik.values.flatNumber:''}`,
      };
      const newUser = {
        ...user,
        deliveryAddress: [...user.deliveryAddress, newAddress],
        currentDeliveryAddress: {...newAddress},
      };
      dispatch(updateUser(newUser));
    },
  });
  const handleCityChange = (value) => formik.setFieldValue('city', value);
  return (
    <form onSubmit={formik.handleSubmit} className={styles.novaPoshtaAddressDeliveryForm} data-testid="NovaPoshtaAddressDeliveryForm">
      <SelectField
        label='City'
        name='city'
        onChange={handleCityChange}
        defaultValue={{label: 'Select a city', value: ''}}
        options={citiesList ? citiesList : []}
        touched={formik.touched.city}
        error={formik.errors.city}
      />
      <TextField
        label='Street'
        name='street'
        placeholder='Enter your street name'
        onChange={formik.handleChange}
        value={formik.values.street}
        error={formik.errors.street}
        onBlur={formik.handleBlur}
        touched={formik.touched.street}
      />
      <TextField
        label='House number'
        name='houseNumber'
        placeholder='Enter your street name'
        onChange={formik.handleChange}
        value={formik.values.houseNumber}
        error={formik.errors.houseNumber}
        onBlur={formik.handleBlur}
        touched={formik.touched.houseNumber}
      />
      <TextField
        label='Flat Number'
        name='flatNumber'
        placeholder='Enter your flat number'
        onChange={formik.handleChange}
        value={formik.values.flatNumber}
        error={formik.errors.flatNumber}
        onBlur={formik.handleBlur}
        touched={formik.touched.flatNumber}
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
NovaPoshtaAddressDeliveryForm.propTypes = {
  isButton: PropTypes.bool,
};
export default NovaPoshtaAddressDeliveryForm;
