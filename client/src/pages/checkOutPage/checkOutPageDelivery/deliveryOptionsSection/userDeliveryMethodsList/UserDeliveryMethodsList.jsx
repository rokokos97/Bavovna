import React from 'react';
import styles from './UserDeliveryMethodsList.module.scss';
import NovaPostWarehouseDeliveryFormCheckout from './userDeliveryMethods/NovaPostWarehouseDeliveryFormCheckout/NovaPostWarehouseDeliveryFormCheckout';
import NovaPostHomeDeliveryFormCheckout from './userDeliveryMethods/NovaPostHomeDeliveryFormCheckout/NovaPostHomeDeliveryFormCheckout';
import NovaPostInternationalDeliveryFormCheckout from './userDeliveryMethods/NovaPostInternationalDeliveryFormCheckout/NovaPostInternationalDeliveryFormCheckout';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { setDeliveryMethod, setDeliveryPrice } from '../../../../../store/ordersSlice';
import { useDispatch } from 'react-redux';
import RadioInput from '../../../../../components/RadioInput/RadioInput';

const UserDeliveryMethodsList = ({
  handleCityChange,
  handleWarehouseChange,
  warehouseList,
  formik,
  type,
}) => {
  const [currentValue, setCurrentValue] = useState();
  const dispatch = useDispatch();
  const deliveryMethods = {
    1: {
      _id: '1',
      label: 'Nova post delivery to the post office',
      value: (
        <NovaPostWarehouseDeliveryFormCheckout
          formik={formik}
          warehousesList={warehouseList}
          handleCityChange={handleCityChange}
          handleWarehouseChange={handleWarehouseChange}
        />
      ),
      price: 80,
    },
    2: {
      _id: '2',
      label: 'Nova post delivery to the address',
      value: (
        <NovaPostHomeDeliveryFormCheckout formik={formik} handleCityChange={handleCityChange} />
      ),
      price: 120,
    },
    3: {
      _id: '3',
      label: 'International delivery',
      value: <NovaPostInternationalDeliveryFormCheckout formik={formik} type={type} />,
      price: 780,
    },
  };
  const handleChangeCurrentValue = (id) => {
    setCurrentValue(id);
    dispatch(setDeliveryMethod(deliveryMethods[id].label));
    dispatch(setDeliveryPrice(deliveryMethods[id].price));
  };
  return (
    <div className={styles.userDeliveryMethodsList}>
      {Object.values(deliveryMethods).map((method) => {
        return (
          <RadioInput
            key={method._id}
            method={method}
            currentValue={currentValue}
            handleChangeCurrentValue={handleChangeCurrentValue}
          />
        );
      })}
    </div>
  );
};

UserDeliveryMethodsList.propTypes = {
  type: PropTypes.string,
  handleCityChange: PropTypes.func,
  handleWarehouseChange: PropTypes.func,
  warehouseList: PropTypes.array,
  formik: PropTypes.object,
};
export default UserDeliveryMethodsList;
