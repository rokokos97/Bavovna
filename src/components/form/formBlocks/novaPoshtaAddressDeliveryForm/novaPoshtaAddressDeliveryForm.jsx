import React from 'react';
import styles from './novaPoshtaAddressDeliveryForm.module.scss';
import SelectField from '../../formFields/selectField/selectField';
import TextField from '../../formFields/textField/textField';
import {useDispatch, useSelector} from 'react-redux';
import {getCitiesList} from '../../../../store/citiesSlice';
import {useFormik} from 'formik';
import {validationSchemaAddressForm} from '../../../../utils/validationSchema';
import {getUser, updateUser} from '../../../../store/userSlice';
import {nanoid} from 'nanoid/non-secure';
import collectLabels from '../../../../utils/transformDeliveryAddress';
import transformFormikValues from '../../../../utils/transformFormikValues';
const NovaPoshtaAddressDeliveryForm = () => {
  const citiesList = useSelector(getCitiesList());
  const dispatch = useDispatch();
  const user = useSelector(getUser());
  const formik = useFormik({
    initialValues: {
      city: '',
      street: '',
      houseNumber: '',
      flatNumber: '',
    },
    validationSchema: validationSchemaAddressForm,
    onSubmit: () => {
      console.log(formik.values);
      const transformValues = transformFormikValues(formik.values);
      const transformAddress = collectLabels(transformValues);
      const updatedUser = {
        ...user,
        deliveryAddress: [...user.deliveryAddress, {
          _id: nanoid(12),
          label: transformAddress,
          value: formik.values,
          deliveryMethod: 'npAddress',
        }],
      };
      dispatch(updateUser(updatedUser));
    }});
  const handleCityChange = (value) => formik.setFieldValue('city', value);
  return (
    <form onSubmit={formik.handleSubmit} className={styles.novaPoshtaAddressDeliveryForm} data-testid="NovaPoshtaAddressDeliveryForm">
      <SelectField
        label='City'
        name='city'
        onChange={handleCityChange}
        defaultValue={{label: 'Select a city', value: ''}}
        options={citiesList ? citiesList : []}
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
      <button
        type='submit'
        disabled={!formik.dirty}
        className={styles.button}
      >
        <span>
                  add address
        </span>
      </button>
    </form>
  );
};
export default NovaPoshtaAddressDeliveryForm;
