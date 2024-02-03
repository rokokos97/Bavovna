import React, {useEffect, useState} from 'react';
import styles from './userDeliveryMethodsList.module.scss';
import ListWithRadioButtons from '../../../../../components/listWithRadioButtons/listWithRadioButtons';
import NpWarehouseDeliveryFormCheckout
  from './userDeliveryMethods/npWarehouseDeliveryFormCheckout/npWarehouseDeliveryFormCheckout';
import NpHomeDeliveryFormCheckout from './userDeliveryMethods/npHomeDeliveryFormCheckout/npHomeDeliveryFormCheckout';
import NpInternationalDeliveryFormCheckout
  from './userDeliveryMethods/npInternationalDeliveryFormCheckout/npInternationalDeliveryFormCheckout';
import {useFormik} from 'formik';
import npService from '../../../../../services/np.service';

const UserDeliveryMethodsList = () => {
  const [selectedCity, setSelectedCity] = useState();
  const [warehousesList, setWarehousesList] = useState([]);
  const formik = useFormik({
    initialValues: {
      city: {},
      warehouse: {},
      street: '',
      houseNumber: '',
      flatNumber: '',
      intDeliveryAddress: '',
      deliveryMethod: '',
    },
  });
  const handleCityChange = (value) => {
    setSelectedCity(value);
    formik.setFieldValue('city', value);
  };
  const handleWarehouseChange = (value) => {
    formik.setFieldValue('warehouse', value);
  };
  const selectedValue = (id) => {
    formik.setFieldValue('deliveryMethod', deliveryMethods[id].label);
    console.log('formik values', formik.values);
  };
  const deliveryMethods = {
    1: {
      _id: '1',
      label: 'Nova post delivery to the post office',
      value: <NpWarehouseDeliveryFormCheckout
        formik={formik}
        warehousesList={warehousesList}
        handleCityChange={handleCityChange}
        handleWarehouseChange={handleWarehouseChange}
      />,
      price: 2,
    },
    2: {
      _id: '2',
      label: 'Nova post delivery to the address',
      value: <NpHomeDeliveryFormCheckout
        formik={formik}
        handleCityChange={handleCityChange}/>,
      price: 3,
    },
    3: {
      _id: '3',
      label: 'International delivery',
      value: <NpInternationalDeliveryFormCheckout formik={formik}/>,
      price: 20,
    },
  };
  useEffect(()=>{
    if (selectedCity) {
      npService.post({cityRef: selectedCity.value}).then(async (data)=> {
        setWarehousesList(await data);
      });
    }
  }, [selectedCity]);
  return (
    <div className={styles.userDeliveryMethodsList} data-testid="UserDeliveryMethodsList">
      <ListWithRadioButtons
        onSelectValue={selectedValue}
        options={deliveryMethods}
        isList={false}
        deleteButton={true}
        key={2}/>
    </div>
  );
};

export default UserDeliveryMethodsList;
