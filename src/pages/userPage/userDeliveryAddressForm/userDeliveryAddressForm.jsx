import React, {useEffect, useState} from 'react';
import styles from './userDeliveryAddressForm.module.scss';
import SelectField from '../../../components/formFields/selectField/selectField';
import TextField from '../../../components/formFields/textField/textField';
import {useDispatch, useSelector} from 'react-redux';
import {getUser, updateUser} from '../../../store/userSlice';
import {useFormik} from 'formik';
import {validationSchemaAddressForm} from '../../../utils/validationSchema';
import npService from '../../../services/np.service';
import UserDeliveryAddressList from '../userDeliveryAddressList/userDeliveryAddressList';
import {nanoid} from 'nanoid/non-secure';
import {getCitiesList} from '../../../store/citiesSlice';

const UserDeliveryAddressForm = () => {
  const dispatch = useDispatch();
  const citiesList = useSelector(getCitiesList());
  const [warehousesList, setWarehousesList] = useState([]);
  const user = useSelector(getUser());
  const [selectedCity, setSelectedCity] = useState(null);

  const formik= useFormik({
    initialValues: {
      city: {},
      warehouse: {},
      street: '',
      houseNumber: '',
      flatNumber: '',
    },
    validationSchema: validationSchemaAddressForm,
    onSubmit: () => {
      const newAddress = {...formik.values, _id: nanoid(12)};
      const newUser = {
        ...user,
        deliveryAddress: [...user.deliveryAddress, newAddress],
        currentDeliveryAddress: newAddress._id,
      };
      dispatch(updateUser(newUser));
    },
  });
  useEffect(()=>{
    if (selectedCity) {
      npService.post({cityRef: selectedCity.value}).then(async (data)=> {
        setWarehousesList(await data);
      });
    }
  }, [selectedCity]);
  const handleCityChange = (value) => {
    setSelectedCity(value);
    formik.setFieldValue('city', value);
  };
  const handleWarehouseChange = (value) => {
    formik.setFieldValue('warehouse', value);
  };
  return (
    <div className={styles.userDeliveryAddressForm} data-testid="UserDeliveryAddressForm">
      <p
        className={styles.deliveryTitle}
      >
        delivery
      </p>
      <div className={styles.deliveryBlock}>
        <div className={styles.deliveryBlockColumn}>
          <p className={styles.blockLabel}>
            Saved delivery method
          </p>
          <UserDeliveryAddressList/>
        </div>
        <div className={styles.deliveryBlockColumn}>
          <p className={styles.blockLabel}>
            Add new delivery method
          </p>
          <form
            onSubmit={formik.handleSubmit}
            className={styles.userPersonalDataForm}>
            <SelectField
              label='City'
              name='city'
              onChange={handleCityChange}
              defaultValue={{label: 'Select a city', value: ''}}
              options={citiesList? citiesList: []}
            />
            <SelectField
              label='Post office'
              name='warehouse'
              onChange={handleWarehouseChange}
              defaultValue={{label: 'Select a post office', value: ''}}
              options={warehousesList}
            />
            <TextField
              disabled={!!formik.values.warehouse.value}
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
              disabled={!!formik.values.warehouse.value}
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
              disabled={!!formik.values.warehouse.value}
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
              disabled={
                (!formik.values.warehouse.value && formik.values.street.length === 0)
              }
              className={styles.button}
            >
              <span>
                  change delivery
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UserDeliveryAddressForm;
