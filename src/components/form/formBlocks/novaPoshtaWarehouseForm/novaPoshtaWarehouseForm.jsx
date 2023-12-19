import React, {useEffect, useState} from 'react';
import styles from './novaPoshtaWarehouseForm.module.scss';
import SelectField from '../../formFields/selectField/selectField';
import {useDispatch, useSelector} from 'react-redux';
import {getCitiesList} from '../../../../store/citiesSlice';
import npService from '../../../../services/np.service';
import {getUser, updateUser} from '../../../../store/userSlice';
import {useFormik} from 'formik';
import {nanoid} from 'nanoid/non-secure';

const NovaPoshtaWarehouseForm = () => {
  const citiesList = useSelector(getCitiesList());
  const [warehousesList, setWarehousesList] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector(getUser());
  const formik = useFormik({
    initialValues: {
      city: '',
      warehouse: '',
    },
    validationSchema: null,
    onSubmit: () => {
      const updatedUser = {
        ...user,
        deliveryAddress: [...user.deliveryAddress, {
          _id: nanoid(12),
          ...formik.values,
          deliveryMethod: 'npPoint',
        }],
      };
      dispatch(updateUser(updatedUser));
    }},
  );
  const handleCityChange = (value) => {
    setSelectedCity(value);
    formik.setFieldValue('city', value);
  };
  const handleWarehouseChange = (value) => {
    formik.setFieldValue('warehouse', value);
  };
  useEffect(()=>{
    if (selectedCity) {
      npService.post({cityRef: selectedCity.value}).then(async (data)=> {
        setWarehousesList(await data);
      });
    }
  }, [selectedCity]);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className={styles.novaPoshtaWarehouseForm}
      data-testid="NovaPoshtaWarehouseForm"
    >
      <SelectField
        label='City'
        name='city'
        onChange={handleCityChange}
        defaultValue={{label: 'Select a city', value: ''}}
        options={citiesList ? citiesList : []}
        error={formik.errors.city}
      />
      <SelectField
        label='Post office'
        name='warehouse'
        onChange={handleWarehouseChange}
        defaultValue={{label: 'Select a post office', value: ''}}
        options={warehousesList}
        error={formik.errors.warehouse}
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

export default NovaPoshtaWarehouseForm;
