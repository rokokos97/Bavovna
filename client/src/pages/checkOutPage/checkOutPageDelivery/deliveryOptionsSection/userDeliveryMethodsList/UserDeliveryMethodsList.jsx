import React from 'react';
import styles from './UserDeliveryMethodsList.module.scss';
import NovaPostWarehouseDeliveryFormCheckout
  from './userDeliveryMethods/NovaPostWarehouseDeliveryFormCheckout/NovaPostWarehouseDeliveryFormCheckout';
import NovaPostHomeDeliveryFormCheckout from './userDeliveryMethods/NovaPostHomeDeliveryFormCheckout/NovaPostHomeDeliveryFormCheckout';
import NovaPostInternationalDeliveryFormCheckout
  from './userDeliveryMethods/NovaPostInternationalDeliveryFormCheckout/NovaPostInternationalDeliveryFormCheckout';
import PropTypes from 'prop-types';
import {useState} from 'react';
import RadioButtonCheckedIcon from '../../../../../components/svg/radioButtonIcons/RadioButtonCheckedIcon/RadioButtonCheckedIcon';
import RadioButtonEmptyIcon from '../../../../../components/svg/radioButtonIcons/RadioButtonEmptyIcon/RadioButtonEmptyIcon';

const UserDeliveryMethodsList = ({handleCityChange, handleWarehouseChange, warehouseList, formik, type}) => {
  const [currentValue, setCurrentValue] = useState('1');
  const deliveryMethods = {
    1: {
      _id: '1',
      label: 'Nova post delivery to the post office',
      value: <NovaPostWarehouseDeliveryFormCheckout
        formik={formik}
        warehousesList={warehouseList}
        handleCityChange={handleCityChange}
        handleWarehouseChange={handleWarehouseChange}
      />,
      price: 80,
    },
    2: {
      _id: '2',
      label: 'Nova post delivery to the address',
      value: <NovaPostHomeDeliveryFormCheckout
        formik={formik}
        handleCityChange={handleCityChange}/>,
      price: 120,
    },
    3: {
      _id: '3',
      label: 'International delivery',
      value: <NovaPostInternationalDeliveryFormCheckout formik={formik} type={type}/>,
      price: 780,
    },
  };
  return (
    <div className={styles.userDeliveryMethodsList} data-testid="UserDeliveryMethodsList">
      {Object.values(deliveryMethods).map((method) => {
        return <section key={method._id} className={styles.radioOption}>
          <input
            id={method._id}
            type="radio"
            name="customRadio"
            value={method.value}
            checked={currentValue === method._id}
            onChange={() => setCurrentValue(method._id)}
            className={styles.radioInput}
          />
          <label htmlFor={method._id} className={styles.radioLabel}>
            {currentValue === method._id ? <RadioButtonCheckedIcon/> : <RadioButtonEmptyIcon/>}
            <p>{method.label}</p>
          </label>
          <div>{currentValue === method._id ? method.value : null}</div>
        </section>;
      },
      )
      }
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
