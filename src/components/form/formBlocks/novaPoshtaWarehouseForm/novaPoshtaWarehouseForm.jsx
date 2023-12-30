import React, {useEffect, useState} from 'react';
import styles from './novaPoshtaWarehouseForm.module.scss';
import SelectField from '../../formFields/selectField/selectField';
import {useDispatch, useSelector} from 'react-redux';
import {getCitiesList} from '../../../../store/citiesSlice';
import npService from '../../../../services/np.service';
import {useFormik} from 'formik';
import {validationSchemaNPDeliveryWarehouse} from '../../../../utils/validationSchema';
import {nanoid} from 'nanoid/non-secure';
import {getUser, updateUser} from '../../../../store/userSlice';
import PropTypes from 'prop-types';


const NovaPoshtaWarehouseForm = ({isButton}) => {
  const citiesList = useSelector(getCitiesList());
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const [warehousesList, setWarehousesList] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const formik= useFormik({
    initialValues: {
      city: {},
      warehouse: {},
      deliveryMethod: 'Nova poshta delivery to the post office',
      label: '',
    },
    validationSchema: validationSchemaNPDeliveryWarehouse,
    onSubmit: () => {
      const newAddress = {
        ...formik.values,
        _id: nanoid(12),
        label: `${formik.values.city.label}, ${formik.values.warehouse.label}`,
      };
      const newUser = {
        ...user,
        deliveryAddress: [...user.deliveryAddress, newAddress],
        currentDeliveryAddress: {...newAddress},
      };
      dispatch(updateUser(newUser));
    },
  });
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
        defaultValue={{label: 'Select a city', value: null}}
        options={citiesList ? citiesList : []}
        error={formik.errors.city}
      />
      <SelectField
        label='Post office'
        name='warehouse'
        onChange={handleWarehouseChange}
        defaultValue={{label: 'Select a post office', value: null}}
        options={warehousesList}
        error={formik.errors.warehouse}
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
NovaPoshtaWarehouseForm.propTypes = {
  isButton: PropTypes.bool,
};
export default NovaPoshtaWarehouseForm;
