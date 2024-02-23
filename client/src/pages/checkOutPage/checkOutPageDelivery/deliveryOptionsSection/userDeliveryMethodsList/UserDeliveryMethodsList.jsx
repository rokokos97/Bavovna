import React from 'react';
import styles from './UserDeliveryMethodsList.module.scss';
import ListWithRadioButtons from '../../../../../components/ListWithRadioButtons/ListWithRadioButtons';
import NovaPostWarehouseDeliveryFormCheckout
  from './userDeliveryMethods/NovaPostWarehouseDeliveryFormCheckout/NovaPostWarehouseDeliveryFormCheckout';
import NovaPostHomeDeliveryFormCheckout from './userDeliveryMethods/NovaPostHomeDeliveryFormCheckout/NovaPostHomeDeliveryFormCheckout';
import NovaPostInternationalDeliveryFormCheckout
  from './userDeliveryMethods/NovaPostInternationalDeliveryFormCheckout/NovaPostInternationalDeliveryFormCheckout';
import PropTypes from 'prop-types';

const UserDeliveryMethodsList = ({handleCityChange, handleWarehouseChange, selectedValue, warehouseList, formik, type}) => {
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
      <ListWithRadioButtons
        onSelectValue={selectedValue}
        options={deliveryMethods}
        isList={false}
        deleteButton={true}
        key={2}/>
    </div>
  );
};
UserDeliveryMethodsList.propTypes = {
  type: PropTypes.string,
  handleCityChange: PropTypes.func,
  handleWarehouseChange: PropTypes.func,
  selectedValue: PropTypes.func,
  warehouseList: PropTypes.array,
  formik: PropTypes.object,
};
export default UserDeliveryMethodsList;
